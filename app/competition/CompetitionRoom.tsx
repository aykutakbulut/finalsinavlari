"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { lessons } from "@/store/questions";
import { COMPETITION_CONFIG } from "@/lib/competition/config";
import { useMatch, type MatchRow, type MatchPlayerRow } from "@/lib/competition/useMatch";
import { useFitScale } from "@/lib/useFitScale";
import { QuestionText } from "@/lib/QuestionText";
import {
  claimProfile,
  joinCompetition,
  leaveMatch,
  tickMatch,
  submitAnswer,
} from "./actions";

type Props = {
  lessonId: string;
  playerId: string | null;
  playerName: string;
  playerAvatar: string;
  onPlayerId: (id: string) => void;
  onExit: () => void;
};

const LIMIT = COMPETITION_CONFIG.questionTimeLimitMs;
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

// Lobi/geri sayım/sonuç ekranlarının ortak çerçevesi. Modül seviyesinde tanımlı:
// bileşen içinde tanımlanırsa her render'da (sayaç 200ms'de bir) yeni bir bileşen
// referansı olur ve tüm alt ağaç unmount/remount olur (titreme, animasyon reseti).
function Shell({
  title,
  onExit,
  children,
}: {
  title?: string;
  onExit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col relative selection:bg-fuchsia-500/30 overflow-y-auto safe-area">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-fuchsia-600/15 blur-[100px] pointer-events-none rounded-full" />
      <div className="flex-1 w-full max-w-md mx-auto px-4 py-8 z-10 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={onExit}
            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-lg border bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08] hover:text-white active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Çık
          </button>
          <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-lg border truncate bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">
            {title ?? "Yarışma"}
          </span>
          <span className="shrink-0 px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-lg border bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Yarışma
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function CompetitionRoom({
  lessonId,
  playerId,
  playerName,
  playerAvatar,
  onPlayerId,
  onExit,
}: Props) {
  const lesson = useMemo(
    () => lessons.find((l) => l.id === lessonId) ?? null,
    [lessonId],
  );

  const [matchId, setMatchId] = useState<string | null>(null);
  const [pid, setPid] = useState<string | null>(playerId);
  const [joinError, setJoinError] = useState(false);
  // joinCompetition'ın döndürdüğü ilk anlık görüntü — lobiyi spinner beklemeden
  // anında çizer; canlı veri (loadMatch/loadParts + realtime) gelince devralır.
  const [seed, setSeed] = useState<{
    match: MatchRow;
    parts: MatchPlayerRow[];
  } | null>(null);
  const { match: liveMatch, parts: liveParts } = useMatch(matchId);
  const match = liveMatch ?? seed?.match ?? null;
  const parts = useMemo(
    () => (liveParts.length ? liveParts : seed?.parts ?? []),
    [liveParts, seed],
  );

  const [now, setNow] = useState(() => Date.now());
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    awarded: number;
    correctAnswer: string;
    picked: string | null;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [pendingOption, setPendingOption] = useState<string | null>(null);
  // Cevap verince sunucu sırayı HEMEN ilerletir (realtime myPart'ı günceller),
  // ama geri bildirim (yeşil/kırmızı) hâlâ ekranda. Gösterilen soruyu bu süre
  // boyunca dondur ki yeşil, yanlışlıkla SONRAKİ sorunun cevabını işaretlemesin.
  const [frozenIndex, setFrozenIndex] = useState<number | null>(null);

  // Tik (geri sayımlar ve sayaç için)
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(i);
  }, []);

  // Katılım: oyuncuyu hazırla + lobiye gir
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // Kalıcı id zaten varsa claimProfile'ı atla (profil ekranında ya da
        // önceki oturumda zaten alınmıştı) — gereksiz bir gidiş-gelişi kaldırır.
        // Yalnız id yoksa (yeni oyuncu) sunucuda oluştur.
        let effectiveId = playerId;
        if (!effectiveId) {
          const claim = await claimProfile({
            id: playerId,
            name: playerName,
            avatar: playerAvatar,
          });
          if (cancelled) return;
          if (!claim.ok) {
            setJoinError(true);
            return;
          }
          effectiveId = claim.id;
          setPid(claim.id);
          onPlayerId(claim.id);
        }
        const res = await joinCompetition({
          lessonId,
          playerId: effectiveId,
          name: playerName,
          avatar: playerAvatar,
        });
        if (cancelled) return;
        setSeed({ match: res.match, parts: res.players });
        setMatchId(res.matchId);
      } catch {
        if (!cancelled) setJoinError(true);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const status = match?.status;

  const myPart = useMemo(
    () => parts.find((p) => p.player_id === pid) ?? null,
    [parts, pid],
  );
  const iFinished = !!myPart?.finished_at;

  // Uzun soru/şıklarda kartı taşırmamak için font'u orantılı küçülten "sığdır".
  // Gösterilen (dondurulmuşsa o, değilse canlı) soruyu izle ki doğru ölçsün.
  const fitRef = useFitScale([
    frozenIndex ?? myPart?.current_question_index,
    status,
  ]);

  // Zaman geçişlerini yürüt (lobi başlat / geri sayım bitir / maç bitir).
  // Aktif maçta yalnız "bitirmiş" oyuncular tikler: rakipleri terk ettiyse maçı
  // sonlandırmaya alan watchdog'u (tickMatch) tetiklemek için. Hâlâ oynayanlar
  // gereksiz yük bindirmesin diye aktif durumda tiklemez.
  useEffect(() => {
    if (!matchId) return;
    const drive =
      status === "waiting" ||
      status === "countdown" ||
      status === "finishing" ||
      (status === "active" && iFinished);
    if (!drive) return;
    const i = setInterval(() => {
      tickMatch(matchId).catch(() => {});
    }, 1000);
    return () => clearInterval(i);
  }, [matchId, status, iFinished]);

  const handleAnswer = useCallback(
    async (answer: string | null) => {
      if (submitting || feedback || !myPart || !matchId || !pid) return;
      if (myPart.finished_at) return;
      const qIndex = myPart.current_question_index;
      setFrozenIndex(qIndex); // gösterilen soruyu dondur (sıra ilerlese de)
      setSubmitting(true);
      if (answer !== null) setPendingOption(answer); // anında tıklanma efekti
      try {
        const res = await submitAnswer({
          matchId,
          playerId: pid,
          questionIndex: qIndex,
          answer,
        });
        setPendingOption(null);
        setFeedback({
          correct: res.correct,
          awarded: res.awarded,
          correctAnswer: res.correctAnswer,
          picked: answer,
        });
        setTimeout(() => {
          setFeedback(null);
          setFrozenIndex(null); // çözülünce canlı (sonraki) soruya geç
        }, 1300);
      } catch {
        setPendingOption(null);
        setFrozenIndex(null);
      } finally {
        setSubmitting(false);
      }
    },
    [submitting, feedback, myPart, matchId, pid],
  );

  // Süre dolunca otomatik cevapsız gönder
  const startedAtMs = myPart?.question_started_at
    ? new Date(myPart.question_started_at).getTime()
    : null;
  useEffect(() => {
    if (status !== "active" && status !== "finishing") return;
    if (!myPart || myPart.finished_at || feedback || submitting) return;
    if (startedAtMs === null) return;
    if (now - startedAtMs >= LIMIT) {
      // Süre bitti: sunucuya cevapsız gönder. Kasıtlı "zamanlayıcı → aksiyon"
      // deseni; submitting/feedback ile korunduğu için döngüye girmez.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleAnswer(null);
    }
  }, [now, startedAtMs, myPart, feedback, submitting, status, handleAnswer]);

  const handleExit = useCallback(() => {
    if (matchId && pid) leaveMatch(matchId, pid).catch(() => {});
    onExit();
  }, [matchId, pid, onExit]);

  // ---------- RENDER ----------

  if (joinError) {
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-lg font-bold text-white">Bağlantı kurulamadı</p>
          <p className="text-sm text-slate-400 max-w-xs">
            Yarışma sunucusuna ulaşılamadı. İnternetini kontrol edip tekrar dene.
          </p>
          <button
            onClick={onExit}
            className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 text-sm font-semibold transition-all active:scale-95"
          >
            Geri dön
          </button>
        </div>
      </Shell>
    );
  }

  if (!matchId || !match) {
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-t-2 border-fuchsia-500 animate-spin" />
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-ping" />
          </div>
          <p className="text-slate-400 text-sm">Lobiye bağlanılıyor…</p>
        </div>
      </Shell>
    );
  }

  // === LOBİ (waiting) ===
  if (match.status === "waiting") {
    const countNeeded = COMPETITION_CONFIG.lobbyMaxBeforeFastStart;
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          <header className="text-center mb-6">
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              Lobi
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              <span className="text-white font-bold">{parts.length}</span> yarışmacı
              bekliyor
            </p>
          </header>

          <div className="grid grid-cols-4 gap-2.5 mb-6">
            {parts.map((p) => (
              <div
                key={p.id}
                className={`flex flex-col items-center gap-1 p-2 rounded-2xl border ${
                  p.player_id === pid
                    ? "border-fuchsia-400/50 bg-fuchsia-500/10"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <span className="text-2xl">{p.avatar}</span>
                <span className="text-[10px] text-slate-400 font-semibold truncate max-w-full">
                  {p.name}
                </span>
              </div>
            ))}
            {Array.from({
              length: Math.max(0, countNeeded - parts.length),
            }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center aspect-square rounded-2xl border border-dashed border-white/[0.06] text-white/20 text-xl"
              >
                ?
              </div>
            ))}
          </div>

          <div className="mt-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
            <p className="text-xs text-slate-400 leading-relaxed">
              <span className="text-fuchsia-300 font-bold">{countNeeded} kişi</span>{" "}
              dolunca 30 sn içinde başlar. En az{" "}
              <span className="text-fuchsia-300 font-bold">
                {COMPETITION_CONFIG.lobbyMinForTimeout} kişi
              </span>{" "}
              varsa 1 dk sonra beklemeden başlar.
            </p>
          </div>
        </div>
      </Shell>
    );
  }

  // === BAŞLAMA GERİ SAYIMI (countdown) ===
  if (match.status === "countdown") {
    const startMs = match.starts_at ? new Date(match.starts_at).getTime() : now;
    const secs = Math.max(0, Math.ceil((startMs - now) / 1000));
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
          <p className="text-sm font-bold tracking-widest uppercase text-fuchsia-300">
            Hazır ol!
          </p>
          <div
            key={secs}
            className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-fuchsia-400 animate-in zoom-in duration-300"
          >
            {secs}
          </div>
          <p className="text-sm text-slate-400">
            {parts.length} yarışmacı · {match.question_ids.length} soru
          </p>
        </div>
      </Shell>
    );
  }

  // === SONUÇ (finished) ===
  if (match.status === "finished") {
    const ranked = [...parts].sort((a, b) => b.score - a.score);
    const medals = ["🥇", "🥈", "🥉"];
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          <header className="text-center mb-6">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              Skorboard
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Skorlar hanene kalıcı olarak eklendi.
            </p>
          </header>

          <div className="flex flex-col gap-2">
            {ranked.map((p, i) => (
              <div
                key={p.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${
                  p.player_id === pid
                    ? "border-fuchsia-400/50 bg-fuchsia-500/10"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <span className="w-7 text-center font-black text-sm text-slate-400">
                  {medals[i] ?? i + 1}
                </span>
                <span className="text-2xl">{p.avatar}</span>
                <span className="flex-1 font-bold text-white truncate">
                  {p.name}
                  {p.player_id === pid && (
                    <span className="ml-1 text-[10px] text-fuchsia-300">(sen)</span>
                  )}
                </span>
                <span className="font-black text-lg text-fuchsia-300">
                  {p.score}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={onExit}
            className="mt-auto w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all active:scale-[0.98] bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25"
          >
            Derslere dön
          </button>
        </div>
      </Shell>
    );
  }

  // === AKTİF / FINISHING (soru ekranı) ===
  if (!myPart) {
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
          Senkronize ediliyor…
        </div>
      </Shell>
    );
  }

  const finishingSecs =
    match.status === "finishing" && match.finishes_at
      ? Math.max(0, Math.ceil((new Date(match.finishes_at).getTime() - now) / 1000))
      : null;

  // Bitirdiysem: bekleme + canlı sıralama
  if (myPart.finished_at) {
    const ranked = [...parts].sort((a, b) => b.score - a.score);
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          <div className="text-center mb-6">
            <div className="text-5xl mb-2">{myPart.avatar}</div>
            <h1 className="text-2xl font-black text-white">Bitirdin!</h1>
            <p className="text-sm text-slate-400 mt-1">
              Skorun: <span className="text-fuchsia-300 font-bold">{myPart.score}</span>
            </p>
            {finishingSecs !== null ? (
              <p className="mt-3 text-sm text-fuchsia-300 font-bold">
                Yarışma {finishingSecs} sn içinde bitiyor…
              </p>
            ) : (
              <p className="mt-3 text-xs text-slate-500">
                Diğer yarışmacılar bekleniyor… (3 kişi bitince son düdük çalar)
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {ranked.map((p, i) => (
              <div
                key={p.id}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${
                  p.player_id === pid
                    ? "border-fuchsia-400/50 bg-fuchsia-500/10"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <span className="w-5 text-center text-xs font-black text-slate-500">
                  {i + 1}
                </span>
                <span className="text-xl">{p.avatar}</span>
                <span className="flex-1 text-sm font-semibold text-white truncate">
                  {p.name}
                </span>
                <span className="text-xs text-slate-400">
                  {p.finished_at ? "bitti" : `${p.current_question_index + 1}.`}
                </span>
                <span className="font-black text-fuchsia-300">{p.score}</span>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  // Geri bildirim süresince dondurulmuş soru gösterilir; aksi halde canlı sıra.
  const myIndex = frozenIndex ?? myPart.current_question_index;
  const qid = match.question_ids[myIndex];
  const question = lesson?.questions.find((q) => q.id === qid) ?? null;
  const total = match.question_ids.length;

  const remainingMs =
    startedAtMs !== null ? Math.max(0, LIMIT - (now - startedAtMs)) : LIMIT;
  const remainingSecs = Math.ceil(remainingMs / 1000);
  const timerPct = (remainingMs / LIMIT) * 100;
  const timerColor =
    remainingMs > 7000
      ? "bg-emerald-500"
      : remainingMs > 3000
        ? "bg-amber-500"
        : "bg-rose-500";

  // Aynı soruda olan rakipler
  const sameQuestionRivals = parts.filter(
    (p) =>
      p.player_id !== pid &&
      !p.finished_at &&
      p.current_question_index === myIndex,
  );

  return (
    <div className="h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-hidden relative selection:bg-fuchsia-500/30 safe-area">
      {/* Süre çubuğu */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-50">
        <div
          className={`h-full ${timerColor} transition-all duration-200 ease-linear`}
          style={{ width: `${timerPct}%` }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-fuchsia-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Üst bar */}
      <div className="w-full max-w-3xl mx-auto px-4 pt-4 pb-2 flex items-center justify-between shrink-0 z-10 gap-2">
        <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-lg border bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20 truncate">
          {lesson?.title}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-400">
            <span className="text-white">{myIndex + 1}</span> / {total}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-200 text-sm font-black">
            {myPart.score}
          </span>
        </div>
      </div>

      {finishingSecs !== null && (
        <div className="w-full max-w-3xl mx-auto px-4 z-10">
          <div className="rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs font-bold text-center py-1.5 animate-pulse">
            Son düdük! Yarışma {finishingSecs} sn içinde bitiyor
          </div>
        </div>
      )}

      <div className="flex-1 min-h-0 w-full max-w-3xl mx-auto flex flex-col px-4 pb-4 z-10">
        {/* Sayaç + rakipler */}
        <div className="shrink-0 flex items-center justify-between py-3 gap-3">
          <div
            className={`text-3xl font-black tabular-nums ${
              remainingMs > 3000 ? "text-white" : "text-rose-400"
            }`}
          >
            {remainingSecs}
            <span className="text-sm text-slate-500 font-bold">sn</span>
          </div>
          {/* Aynı sorudaki rakipler */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {sameQuestionRivals.length === 0 ? (
              <span className="text-[11px] text-slate-600">
                Bu soruda tek başınasın
              </span>
            ) : (
              sameQuestionRivals.slice(0, 6).map((p) => (
                <div
                  key={p.id}
                  className="shrink-0 flex items-center gap-1 pl-1 pr-2 py-1 rounded-full bg-white/[0.04] border border-white/10"
                  title={p.name}
                >
                  <span className="text-base">{p.avatar}</span>
                  <span className="text-[10px] font-semibold text-slate-300 max-w-[52px] truncate">
                    {p.name}
                  </span>
                  <span className="text-[10px] font-black text-fuchsia-300">
                    {p.score}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Soru kartı */}
        <div ref={fitRef} className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-[clamp(1rem,3dvh,2rem)] flex flex-col shadow-2xl">
          <div className="shrink-0 mb-[calc(clamp(1rem,3dvh,2rem)*var(--fit,1))]">
            <QuestionText
              text={question?.questionText ?? "…"}
              className="text-[calc(clamp(1.1rem,2.6dvh,1.6rem)*var(--fit,1))] font-semibold text-slate-100 leading-[1.3] tracking-tight"
            />
          </div>

          <div className="flex-1 min-h-0 flex flex-col justify-center gap-[calc(clamp(0.5rem,1.4dvh,0.9rem)*var(--fit,1))]">
            {question?.options.map((option, index) => {
              const isCorrect = option === question.correctAnswer;
              let style =
                "border-white/5 bg-white/[0.03] text-slate-300 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10";

              if (pendingOption === option) {
                // Anında tıklanma geri bildirimi — sunucu yanıtı bekleniyor
                style =
                  "border-fuchsia-400/60 bg-fuchsia-500/20 text-fuchsia-200 scale-[1.01]";
              } else if (pendingOption !== null) {
                // Başka bir şık beklerken diğerleri soluk
                style =
                  "border-transparent bg-white/[0.01] text-slate-600 opacity-30";
              } else if (feedback) {
                if (isCorrect) {
                  style =
                    "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                } else if (feedback.picked === option) {
                  style = "border-rose-500/50 bg-rose-500/10 text-rose-300";
                } else {
                  style =
                    "border-transparent bg-white/[0.01] text-slate-600 opacity-30";
                }
              }

              return (
                <button
                  key={index}
                  disabled={!!feedback || submitting}
                  onClick={() => handleAnswer(option)}
                  className={`group w-full flex items-center justify-between p-[calc(clamp(0.7rem,1.8dvh,1.1rem)*var(--fit,1))] rounded-[1rem] sm:rounded-[1.25rem] border-2 transition-all duration-200 outline-none text-left ${style} ${!feedback && !pendingOption && "active:scale-[0.98]"}`}
                >
                  <span className="text-[calc(clamp(0.85rem,2.1dvh,1.05rem)*var(--fit,1))] font-medium leading-[1.3] pr-3">
                    {OPTION_LABELS[index]}) {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Geri bildirim rozeti */}
          {feedback && (
            <div className="shrink-0 pt-3 text-center animate-in fade-in duration-200">
              <span
                className={`inline-block px-4 py-1.5 rounded-full font-black text-sm ${
                  feedback.correct
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                    : "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                }`}
              >
                {feedback.correct
                  ? `+${feedback.awarded} puan!`
                  : feedback.picked === null
                    ? "Süre doldu"
                    : `${feedback.awarded} puan`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
