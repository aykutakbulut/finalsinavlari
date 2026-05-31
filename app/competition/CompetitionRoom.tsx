"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { lessons } from "@/store/questions";
import { COMPETITION_CONFIG } from "@/lib/competition/config";
import {
  useMatch,
  type MatchRow,
  type MatchPlayerRow,
} from "@/lib/competition/useMatch";
import { useFitScale } from "@/lib/useFitScale";
import { QuestionText } from "@/lib/QuestionText";
import {
  claimProfile,
  joinCompetition,
  leaveMatch,
  tickMatch,
  submitAnswer,
  submitVote,
  getLeaderboard,
  toggleReady,
} from "./actions";

/* ── Props ─────────────────────────────────────────────────────────────────── */

type Props = {
  lessonId: string;
  playerId: string | null;
  playerName: string;
  playerAvatar: string;
  onPlayerId: (id: string) => void;
  onExit: () => void;
};

/* ── Sabitler ──────────────────────────────────────────────────────────────── */

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

type LeaderboardEntry = {
  id: string;
  name: string;
  avatar: string;
  totalScore: number;
  matchesPlayed: number;
};

/* ── Shell: lobi / oylama / sonuç ekranlarının ortak çerçevesi ─────────── */
// Modül seviyesinde: her render'da (200ms sayaç) yeni referans oluşmasın,
// tüm alt ağaç unmount/remount olmasın (titreme, animasyon reseti).

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
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
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

/* ── Ana bileşen ──────────────────────────────────────────────────────────── */

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

  /* ── Durum ───────────────────────────────────────────────────────────── */

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

  // Oylama tercihleri — anlık (optimistic) seçim. Gerçek kaynak sunucudaki
  // votes_* alanıdır; bunlar yalnızca tıklar tıklamaz anında geri bildirim için.
  const [optimisticQuestionVote, setOptimisticQuestionVote] = useState<
    string | null
  >(null);
  const [optimisticTimerVote, setOptimisticTimerVote] = useState<string | null>(
    null,
  );

  // Lobi liderlik tablosu
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  // Soru başındaki skor anlık görüntüsü — reveal'da "+X" deltasını göstermek
  // için. Ref yerine state kullanıyoruz: render sırasında okumak güvenli (ref
  // okumak react-hooks/refs'i tetikler) ve anlık görüntü soru başına bir kez
  // dondurulduğundan delta doğru hesaplanır.
  const [scoreSnapshot, setScoreSnapshot] = useState<{
    qIndex: number;
    scores: Record<string, number>;
  }>({ qIndex: -1, scores: {} });

  /* ── Zaman tiki ──────────────────────────────────────────────────────── */

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(i);
  }, []);

  /* ── Katılım (mount) ─────────────────────────────────────────────────── */

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
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

  /* ── Liderlik tablosu (mount) ────────────────────────────────────────── */

  useEffect(() => {
    getLeaderboard()
      .then((rows) => setLeaderboard(rows))
      .catch(() => {});
  }, []);

  /* ── Hayalet Oyuncu Koruması (çıkış yakalama) ───────────────────────── */
  useEffect(() => {
    if (!matchId || !pid) return;

    const beacon = () => {
      navigator.sendBeacon(
        "/api/leave-match",
        JSON.stringify({ matchId, playerId: pid }),
      );
    };

    // beforeunload masaüstünde, pagehide ise mobil tarayıcılarda (Safari/Chrome)
    // güvenilir tetiklenir — sekme kapatma/sayfa terk etme bu şekilde yakalanır.
    const handleBeforeUnload = () => beacon();
    const handlePageHide = (e: PageTransitionEvent) => {
      // e.persisted = sayfa bfcache'e alınıyor (geri gelebilir). Sadece uygulamayı
      // arka plana alıp dönen mobil kullanıcıyı lobiden düşürmemek için atla.
      if (e.persisted) return;
      beacon();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handlePageHide);
      leaveMatch(matchId, pid).catch(() => {});
    };
  }, [matchId, pid]);

  /* ── Türetilmiş değerler ────────────────────────────────────────────── */

  const status = match?.status;

  const myPart = useMemo(
    () => parts.find((p) => p.player_id === pid) ?? null,
    [parts, pid],
  );

  // Etkin oy = anlık seçim ?? sunucudaki kayıtlı oy. Sunucudan türetmek sayfa
  // yenilemeye dayanıklıdır (yenileyince seçim kaybolmaz, çift oy görünmez).
  const myQuestionVote =
    optimisticQuestionVote ??
    (pid ? (match?.votes_questions?.[pid] ?? null) : null);
  const myTimerVote =
    optimisticTimerVote ?? (pid ? (match?.votes_timer?.[pid] ?? null) : null);

  const qIndex = match?.current_question_index ?? -1;
  const qid = match ? match.question_ids[qIndex] : undefined;
  const question = useMemo(
    () =>
      qid !== undefined
        ? (lesson?.questions.find((q) => q.id === qid) ?? null)
        : null,
    [lesson, qid],
  );
  const total = match
    ? (match.question_count ?? match.question_ids.length)
    : 0;

  // Sığdır kancası — soru kartının taşmasını önler
  const fitRef = useFitScale([qIndex, status, feedback]);

  /* ── Tick sürücü ─────────────────────────────────────────────────────── */

  useEffect(() => {
    if (!matchId) return;
    const shouldTick =
      status === "waiting" ||
      status === "voting_questions" ||
      status === "voting_timer" ||
      status === "countdown" ||
      status === "active" ||
      status === "reveal";
    if (!shouldTick) return;
    const i = setInterval(() => {
      tickMatch(matchId).catch(() => {});
    }, 1000);
    return () => clearInterval(i);
  }, [matchId, status]);

  /* ── Önceki skorları sakla (reveal'da delta göstermek için) ─────────── */
  // Render sırasında ayarlanan state (React'in önerdiği "prop değişince state'i
  // güncelle" deseni) — efekt değil. Yalnızca yeni soru aktif olduğunda, soru
  // başı skorları bir kez dondurur; soru içinde puanlar değişse de bozulmaz.
  if (status === "active" && scoreSnapshot.qIndex !== qIndex) {
    const m: Record<string, number> = {};
    for (const p of parts) m[p.player_id] = p.score;
    setScoreSnapshot({ qIndex, scores: m });
  }

  /* ── Cevap ───────────────────────────────────────────────────────────── */

  const handleAnswer = useCallback(
    async (answer: string | null) => {
      if (submitting || feedback || !myPart || !matchId || !pid) return;
      if (myPart.answered_current) return;
      setSubmitting(true);
      if (answer !== null) setPendingOption(answer);
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
      } catch {
        setPendingOption(null);
      } finally {
        setSubmitting(false);
      }
    },
    [submitting, feedback, myPart, matchId, pid, qIndex],
  );

  /* ── Reveal'a geçince feedback'i temizle ─────────────────────────────── */

  useEffect(() => {
    if (status === "reveal" && feedback) {
      // Feedback zaten gösterildi, sunucu reveal'a geçti — temizleme gerekmez,
      // reveal kendi UI'ını gösterecek.
    }
  }, [status, feedback]);

  // Durum "active" → yeni soru geldiğinde feedback'i temizle
  const prevQIndexRef = useRef(qIndex);
  useEffect(() => {
    if (qIndex !== prevQIndexRef.current) {
      prevQIndexRef.current = qIndex;
      setFeedback(null);
      setPendingOption(null);
    }
  }, [qIndex]);

  /* ── Süre dolunca otomatik cevapsız gönder ───────────────────────────── */
  // `now` (200ms) yoklaması yerine bitiş anına tek bir zamanlayıcı kuruyoruz:
  // efekt gövdesinde senkron setState olmaz (setState timer callback'inde),
  // her soru için tek timer kurulur ve süre dolunca bir kez tetiklenir.

  useEffect(() => {
    if (status !== "active") return;
    if (!match?.question_ends_at) return;
    if (!myPart || myPart.answered_current || feedback || submitting) return;
    const ends = new Date(match.question_ends_at).getTime();
    const delay = Math.max(0, ends - Date.now());
    const timer = setTimeout(() => {
      handleAnswer(null);
    }, delay);
    return () => clearTimeout(timer);
  }, [status, match?.question_ends_at, myPart, feedback, submitting, handleAnswer]);

  /* ── Oy ──────────────────────────────────────────────────────────────── */

  const handleVote = useCallback(
    async (voteType: "questions" | "timer", value: string) => {
      if (!matchId || !pid) return;
      // Anında geri bildirim için optimistic işaretle; sunucu yazımı arkadan
      // gelir ve realtime/poll ile teyit edilir.
      if (voteType === "questions") setOptimisticQuestionVote(value);
      else setOptimisticTimerVote(value);
      await submitVote({ matchId, playerId: pid, voteType, value });
    },
    [matchId, pid],
  );

  // Not: Oy seçimleri (myQuestionVote/myTimerVote) yalnızca kendi oylama
  // fazında okunur ve bir maçta oylama bir kez yapıldığı için faz değişince
  // ayrıca sıfırlanmalarına gerek yoktur.

  /* ── Çıkış ───────────────────────────────────────────────────────────── */

  const handleExit = useCallback(() => {
    if (matchId && pid) leaveMatch(matchId, pid).catch(() => {});
    onExit();
  }, [matchId, pid, onExit]);

  /* ──────────────────────────────────────────────────────────────────────
     RENDER
  ────────────────────────────────────────────────────────────────────── */

  /* 1. Hata */
  if (joinError) {
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-lg font-bold text-white">Bağlantı kurulamadı</p>
          <p className="text-sm text-slate-400 max-w-xs">
            Yarışma sunucusuna ulaşılamadı. İnternetini kontrol edip tekrar
            dene.
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

  /* 2. Yükleniyor */
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

  /* 3. LOBİ (waiting) ───────────────────────────────────────────────────── */

  if (match.status === "waiting") {
    const target = COMPETITION_CONFIG.lobbyCountdownTarget; // 10
    const minPlayers = COMPETITION_CONFIG.lobbyMinPlayers; // 2
    const hardCap = COMPETITION_CONFIG.lobbyHardCap; // 20

    const totalCount = parts.length;
    const readyCount = parts.filter((p) => p.is_ready).length;
    const readyRatio = totalCount > 0 ? readyCount / totalCount : 0;
    const percent = Math.round(readyRatio * 100);
    const everyoneReady = totalCount >= minPlayers && readyCount === totalCount;

    // Geri sayım yalnızca hedef sayıya (10) ulaşılınca ve sayaç başlamışsa görünür.
    let countdownRemaining = -1;
    if (totalCount >= target && match.lobby_countdown_starts_at) {
      const startMs = new Date(match.lobby_countdown_starts_at).getTime();
      const elapsed = now - startMs;
      countdownRemaining = Math.max(
        0,
        Math.ceil((COMPETITION_CONFIG.lobbyCountdownMs - elapsed) / 1000),
      );
    }

    const isMeReady = myPart?.is_ready ?? false;

    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          <header className="text-center mb-6">
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              Lobi
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              <span className="text-white font-bold">{totalCount}</span>{" "}
              yarışmacı · {totalCount >= target ? "geri sayım" : `hedef ${target}`}
            </p>
            <p className="mt-1 text-xs text-slate-500 tabular-nums">
              <span className="text-green-400 font-bold">{readyCount}</span>
              <span className="text-slate-600">/{totalCount}</span> hazır
              {readyCount < totalCount && (
                <span className="text-amber-400/80">
                  {" "}
                  · {totalCount - readyCount} bekliyor
                </span>
              )}
            </p>
          </header>

          {/* Oyuncu ızgarası */}
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-2.5 mb-6">
            {parts.map((p) => {
              const isMe = p.player_id === pid;
              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col items-center gap-1 p-2 rounded-2xl border animate-in zoom-in duration-300 ${
                    p.is_ready
                      ? "border-green-500/40 bg-green-500/[0.06]"
                      : "border-white/[0.06] bg-white/[0.02]"
                  } ${isMe ? "ring-2 ring-fuchsia-400/60" : ""}`}
                >
                  {p.is_ready ? (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full shadow-lg border border-green-400 animate-in zoom-in">
                      ✓
                    </div>
                  ) : (
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400/80 border border-amber-300 animate-pulse" />
                  )}
                  <span className="text-2xl leading-none">{p.avatar}</span>
                  <span className="text-[10px] text-slate-300 font-semibold truncate max-w-full">
                    {p.name}
                    {isMe && <span className="text-fuchsia-300"> (sen)</span>}
                  </span>
                  <span
                    className={`text-[8px] font-black uppercase tracking-wider ${
                      p.is_ready ? "text-green-400" : "text-amber-400/80"
                    }`}
                  >
                    {p.is_ready ? "Hazır" : "Bekliyor"}
                  </span>
                </div>
              );
            })}
            {Array.from({
              length: Math.max(0, target - parts.length),
            }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center aspect-square rounded-2xl border border-dashed border-white/[0.06] text-white/20 text-xl"
              >
                ?
              </div>
            ))}
          </div>

          {/* Durum mesajı */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-center mb-4">
            {totalCount < minPlayers ? (
              <p className="text-xs text-slate-400 leading-relaxed">
                Başlamak için{" "}
                <span className="text-fuchsia-300 font-bold">
                  en az {minPlayers} kişi
                </span>{" "}
                gerekli. ({totalCount}/{minPlayers})
                <br />
                <span className="text-[10px]">
                  Diğer yarışmacılar bekleniyor…
                </span>
              </p>
            ) : totalCount >= hardCap ? (
              <p className="text-xs text-fuchsia-300 font-bold animate-pulse">
                Kapasite doldu — başlıyor!
              </p>
            ) : totalCount >= target ? (
              everyoneReady ? (
                <p className="text-xs text-green-400 font-bold animate-pulse">
                  Herkes hazır — başlıyor!
                </p>
              ) : (
                <p className="text-xs text-fuchsia-300 font-bold animate-pulse">
                  Yeterli oyuncu var! {countdownRemaining}sn içinde başlıyor…
                  <br />
                  <span className="text-[10px] text-slate-400 font-normal">
                    Yeni biri katılırsa süre sıfırlanır · herkes hazır olursa
                    hemen başlar.
                  </span>
                </p>
              )
            ) : (
              <p className="text-xs text-slate-400 leading-relaxed">
                Herkes hazır olunca (veya %
                {Math.round(COMPETITION_CONFIG.lobbyReadyRatio * 100)}) başlar.
                <br />
                Şu an:{" "}
                <span className="text-fuchsia-300 font-bold">%{percent}</span> (
                {readyCount}/{totalCount})
                <br />
                <span className="text-[10px]">
                  {target} kişiye ulaşılırsa{" "}
                  {COMPETITION_CONFIG.lobbyCountdownMs / 1000}sn geri sayım
                  başlar.
                </span>
              </p>
            )}
          </div>

          {/* Hazır Ol Butonu */}
          <button
            onClick={() => {
              if (!matchId || !pid) return;
              toggleReady(matchId, pid).catch(() => {});
            }}
            className={`w-full py-4 rounded-2xl font-black tracking-widest uppercase transition-all mb-4 ${
              isMeReady
                ? "bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30"
                : "bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:scale-[1.02] hover:bg-fuchsia-400 active:scale-95"
            }`}
          >
            {isMeReady ? "Hazırsın (İptal Et)" : "Hazır Ol"}
          </button>

          {/* Mini Liderlik Tablosu */}
          {leaderboard.length > 0 && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 mt-auto">
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2 text-center">
                🏆 Skor Tablosu
              </h3>
              <div className="flex flex-col gap-1.5">
                {leaderboard.map((entry, i) => {
                  const badge =
                    i === 0
                      ? {
                          label: "Reis",
                          cls: "bg-amber-500/20 text-amber-300 border-amber-500/30",
                        }
                      : i === 1
                        ? {
                            label: "King",
                            cls: "bg-slate-400/20 text-slate-300 border-slate-400/30",
                          }
                        : i === 2
                          ? {
                              label: "Kingo",
                              cls: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                            }
                          : null;

                  return (
                    <div
                      key={entry.id}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border ${
                        entry.id === pid
                          ? "border-fuchsia-400/40 bg-fuchsia-500/10"
                          : "border-white/[0.04] bg-white/[0.01]"
                      }`}
                    >
                      <span className="w-4 text-center text-[10px] font-black text-slate-500">
                        {i + 1}
                      </span>
                      <span className="text-sm">{entry.avatar}</span>
                      <span className="flex-1 text-[11px] font-semibold text-slate-300 truncate">
                        {entry.name}
                      </span>
                      {badge && (
                        <span
                          className={`px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-md border ${badge.cls}`}
                        >
                          {badge.label}
                        </span>
                      )}
                      <span className="text-[11px] font-black text-fuchsia-300 tabular-nums">
                        {entry.totalScore}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Shell>
    );
  }

  /* 4. OYLAMA — SORU SAYISI (voting_questions) ─────────────────────────── */

  if (match.status === "voting_questions") {
    const endsAt = match.starts_at
      ? new Date(match.starts_at).getTime()
      : now + COMPETITION_CONFIG.votingDurationMs;
    const remainMs = Math.max(0, endsAt - now);
    const pct = (remainMs / COMPETITION_CONFIG.votingDurationMs) * 100;

    const votes = match.votes_questions ?? {};
    const totalVotes = Object.keys(votes).length;
    const allVotes = Object.values(votes).filter((v) => v === "all").length;
    const thirtyVotes = Object.values(votes).filter((v) => v === "30").length;
    const totalQ = lesson?.questions.length ?? 0;

    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          {/* Countdown bar */}
          <div className="w-full h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-500 transition-all duration-200 ease-linear rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>

          <header className="text-center mb-8">
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              Kaç soru çözelim?
            </h1>
          </header>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* TÜM SORULAR */}
            <button
              onClick={() => handleVote("questions", "all")}
              disabled={myQuestionVote !== null}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-[1.5rem] border-2 transition-all duration-300 active:scale-95 ${
                myQuestionVote === "all"
                  ? "border-fuchsia-400/70 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(217,70,239,0.25)] scale-[1.02]"
                  : myQuestionVote !== null
                    ? "border-white/[0.04] bg-white/[0.01] opacity-40"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5"
              }`}
            >
              <span className="text-3xl font-black text-white">TÜM</span>
              <span className="text-3xl font-black text-white">SORULAR</span>
              <span className="text-sm text-slate-400 font-semibold">
                {totalQ} soru
              </span>
              {totalVotes > 0 && (
                <span className="text-xs text-fuchsia-300 font-bold tabular-nums mt-1">
                  {allVotes} oy ({totalVotes > 0 ? Math.round((allVotes / totalVotes) * 100) : 0}%)
                </span>
              )}
            </button>

            {/* 30 SORU */}
            <button
              onClick={() => handleVote("questions", "30")}
              disabled={myQuestionVote !== null}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-[1.5rem] border-2 transition-all duration-300 active:scale-95 ${
                myQuestionVote === "30"
                  ? "border-fuchsia-400/70 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(217,70,239,0.25)] scale-[1.02]"
                  : myQuestionVote !== null
                    ? "border-white/[0.04] bg-white/[0.01] opacity-40"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5"
              }`}
            >
              <span className="text-3xl font-black text-white">30</span>
              <span className="text-3xl font-black text-white">SORU</span>
              <span className="text-sm text-slate-400 font-semibold">
                Rastgele
              </span>
              {totalVotes > 0 && (
                <span className="text-xs text-fuchsia-300 font-bold tabular-nums mt-1">
                  {thirtyVotes} oy ({totalVotes > 0 ? Math.round((thirtyVotes / totalVotes) * 100) : 0}%)
                </span>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-slate-500">
            {parts.length} yarışmacı · {totalVotes} oy kullanıldı
          </p>
        </div>
      </Shell>
    );
  }

  /* 5. OYLAMA — SÜRE (voting_timer) ────────────────────────────────────── */

  if (match.status === "voting_timer") {
    const endsAt = match.starts_at
      ? new Date(match.starts_at).getTime()
      : now + COMPETITION_CONFIG.votingDurationMs;
    const remainMs = Math.max(0, endsAt - now);
    const pct = (remainMs / COMPETITION_CONFIG.votingDurationMs) * 100;

    const votes = match.votes_timer ?? {};
    const totalVotes = Object.keys(votes).length;
    const tenVotes = Object.values(votes).filter(
      (v) => v === "10000",
    ).length;
    const fifteenVotes = Object.values(votes).filter(
      (v) => v === "15000",
    ).length;

    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          {/* Countdown bar */}
          <div className="w-full h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-500 transition-all duration-200 ease-linear rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>

          <header className="text-center mb-8">
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              Soru başına kaç saniye?
            </h1>
            {match.question_count && (
              <p className="mt-2 text-sm text-slate-400">
                {match.question_count} soru seçildi
              </p>
            )}
          </header>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* 10 SANİYE */}
            <button
              onClick={() => handleVote("timer", "10000")}
              disabled={myTimerVote !== null}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-[1.5rem] border-2 transition-all duration-300 active:scale-95 ${
                myTimerVote === "10000"
                  ? "border-fuchsia-400/70 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(217,70,239,0.25)] scale-[1.02]"
                  : myTimerVote !== null
                    ? "border-white/[0.04] bg-white/[0.01] opacity-40"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5"
              }`}
            >
              <span className="text-4xl font-black text-white">10</span>
              <span className="text-lg font-black text-white uppercase tracking-wider">
                Saniye
              </span>
              <span className="text-sm text-slate-400 font-semibold">
                ⚡ Hızlı
              </span>
              {totalVotes > 0 && (
                <span className="text-xs text-fuchsia-300 font-bold tabular-nums mt-1">
                  {tenVotes} oy ({Math.round((tenVotes / totalVotes) * 100)}%)
                </span>
              )}
            </button>

            {/* 15 SANİYE */}
            <button
              onClick={() => handleVote("timer", "15000")}
              disabled={myTimerVote !== null}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-[1.5rem] border-2 transition-all duration-300 active:scale-95 ${
                myTimerVote === "15000"
                  ? "border-fuchsia-400/70 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(217,70,239,0.25)] scale-[1.02]"
                  : myTimerVote !== null
                    ? "border-white/[0.04] bg-white/[0.01] opacity-40"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5"
              }`}
            >
              <span className="text-4xl font-black text-white">15</span>
              <span className="text-lg font-black text-white uppercase tracking-wider">
                Saniye
              </span>
              <span className="text-sm text-slate-400 font-semibold">
                🧠 Düşün
              </span>
              {totalVotes > 0 && (
                <span className="text-xs text-fuchsia-300 font-bold tabular-nums mt-1">
                  {fifteenVotes} oy (
                  {Math.round((fifteenVotes / totalVotes) * 100)}%)
                </span>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-slate-500">
            {parts.length} yarışmacı · {totalVotes} oy kullanıldı
          </p>
        </div>
      </Shell>
    );
  }

  /* 6. GERİ SAYIM (countdown) ──────────────────────────────────────────── */

  if (match.status === "countdown") {
    const startMs = match.starts_at
      ? new Date(match.starts_at).getTime()
      : now;
    const remaining = Math.max(0, startMs - now);
    const secs = Math.ceil(remaining / 1000);
    const display = secs > 0 ? String(secs) : "BAŞLA!";

    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
          <p className="text-sm font-bold tracking-widest uppercase text-fuchsia-300">
            Hazır ol!
          </p>
          <div
            key={display}
            className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-fuchsia-400 animate-in zoom-in duration-300"
          >
            {display}
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-slate-400">
              {parts.length} yarışmacı · {total} soru
            </p>
            {match.question_time_limit_ms && (
              <p className="text-xs text-slate-500">
                {match.question_time_limit_ms / 1000}sn / soru
              </p>
            )}
          </div>
        </div>
      </Shell>
    );
  }

  /* 7. REVEAL (doğru cevap + mini skor) ────────────────────────────────── */

  if (match.status === "reveal") {
    const revealEndsAt = match.reveal_ends_at
      ? new Date(match.reveal_ends_at).getTime()
      : now + COMPETITION_CONFIG.revealDurationMs;
    const remainMs = Math.max(0, revealEndsAt - now);
    const pct = (remainMs / COMPETITION_CONFIG.revealDurationMs) * 100;

    const correctAnswer =
      question?.correctAnswer ?? feedback?.correctAnswer ?? "";

    // Skorlara göre sırala
    const ranked = [...parts].sort((a, b) => b.score - a.score);

    // Bu turda alınan puanı hesapla (önceki skor ile karşılaştır)
    const myAwarded = feedback?.awarded ?? 0;
    const myCorrect = feedback?.correct ?? false;
    const myPicked = feedback?.picked ?? null;

    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex flex-col">
          {/* Reveal countdown bar */}
          <div className="w-full h-1 bg-white/5 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-500 transition-all duration-200 ease-linear rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>

          {/* Soru numarası */}
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 text-center mb-3">
            Soru {qIndex + 1} / {total}
          </p>

          {/* Soru metni */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-4 mb-4">
            <QuestionText
              text={question?.questionText ?? "…"}
              className="text-sm font-semibold text-slate-300 leading-relaxed"
            />
          </div>

          {/* Şıklar — doğru yeşil, yanlış kırmızı */}
          <div className="flex flex-col gap-2 mb-4">
            {question?.options.map((option, idx) => {
              const isCorrect = option === correctAnswer;
              const isMyPick = option === myPicked;

              let style: string;
              if (isCorrect) {
                style =
                  "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 scale-[1.01] shadow-[0_0_15px_rgba(16,185,129,0.12)]";
              } else if (isMyPick) {
                style = "border-rose-500/50 bg-rose-500/10 text-rose-300";
              } else {
                style =
                  "border-white/[0.04] bg-white/[0.01] text-slate-600 opacity-40";
              }

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all duration-300 ${style}`}
                >
                  <span className="text-sm font-medium">
                    {OPTION_LABELS[idx]}) {option}
                  </span>
                  {isCorrect && (
                    <svg
                      className="w-4 h-4 text-emerald-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  {isMyPick && !isCorrect && (
                    <svg
                      className="w-4 h-4 text-rose-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Puan rozeti */}
          <div className="text-center mb-4 animate-in fade-in duration-300">
            <span
              className={`inline-block px-4 py-1.5 rounded-full font-black text-sm ${
                myCorrect
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                  : "bg-rose-500/15 text-rose-300 border border-rose-500/30"
              }`}
            >
              {myCorrect
                ? `+${myAwarded} puan!`
                : myPicked === null
                  ? "Süre doldu · 0 puan"
                  : "Yanlış · 0 puan"}
            </span>
          </div>

          {/* Mini skor tablosu — Top 5 */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2 text-center">
              Sıralama
            </h3>
            <div className="flex flex-col gap-1">
              {ranked.slice(0, 5).map((p, i) => {
                const prevScore = scoreSnapshot.scores[p.player_id] ?? 0;
                const delta = p.score - prevScore;
                return (
                  <div
                    key={p.id}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border ${
                      p.player_id === pid
                        ? "border-fuchsia-400/40 bg-fuchsia-500/10"
                        : "border-white/[0.04] bg-white/[0.01]"
                    }`}
                  >
                    <span className="w-4 text-center text-[10px] font-black text-slate-500">
                      {i + 1}
                    </span>
                    <span className="text-base">{p.avatar}</span>
                    <span className="flex-1 text-[11px] font-semibold text-white truncate">
                      {p.name}
                      {p.player_id === pid && (
                        <span className="ml-1 text-[9px] text-fuchsia-300">
                          (sen)
                        </span>
                      )}
                    </span>
                    {delta > 0 && (
                      <span className="text-[10px] font-bold text-emerald-400 animate-in fade-in duration-300">
                        +{delta}
                      </span>
                    )}
                    <span className="text-[11px] font-black text-fuchsia-300 tabular-nums">
                      {p.score}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  /* 8. SONUÇ (finished) ────────────────────────────────────────────────── */

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
              {total} soru · Skorlar hanene kalıcı olarak eklendi.
            </p>
          </header>

          <div className="flex flex-col gap-2">
            {ranked.map((p, i) => (
              <div
                key={p.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border animate-in fade-in duration-300 ${
                  i === 0
                    ? "border-amber-500/40 bg-amber-500/10"
                    : i === 1
                      ? "border-slate-400/30 bg-slate-400/5"
                      : i === 2
                        ? "border-orange-500/30 bg-orange-500/5"
                        : p.player_id === pid
                          ? "border-fuchsia-400/50 bg-fuchsia-500/10"
                          : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <span className="w-7 text-center font-black text-sm text-slate-400">
                  {medals[i] ?? i + 1}
                </span>
                <span className="text-2xl">{p.avatar}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-white truncate block">
                    {p.name}
                    {p.player_id === pid && (
                      <span className="ml-1 text-[10px] text-fuchsia-300">
                        (sen)
                      </span>
                    )}
                  </span>
                  {i === 0 && (
                    <span className="text-[9px] font-black uppercase tracking-wider text-amber-300">
                      Reis
                    </span>
                  )}
                  {i === 1 && (
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-300">
                      King
                    </span>
                  )}
                  {i === 2 && (
                    <span className="text-[9px] font-black uppercase tracking-wider text-orange-400">
                      Kingo
                    </span>
                  )}
                </div>
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

  /* 9. AKTİF (soru) ────────────────────────────────────────────────────── */

  // Eğer myPart yoksa (senkronizasyon gecikmesi) spinner göster
  if (!myPart || !question) {
    return (
      <Shell title={lesson?.title} onExit={handleExit}>
        <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
          Senkronize ediliyor…
        </div>
      </Shell>
    );
  }

  const timeLimitMs =
    match.question_time_limit_ms ?? COMPETITION_CONFIG.defaultTimeLimitMs;
  const questionEndsAtMs = match.question_ends_at
    ? new Date(match.question_ends_at).getTime()
    : now + timeLimitMs;
  const remainingMs = Math.max(0, questionEndsAtMs - now);
  const remainingSecs = Math.ceil(remainingMs / 1000);
  const timerPct = (remainingMs / timeLimitMs) * 100;
  const timerColor =
    timerPct > 60
      ? "bg-emerald-500"
      : timerPct > 30
        ? "bg-amber-500"
        : "bg-rose-500";

  const answeredCount = parts.filter((p) => p.answered_current).length;
  const totalPlayers = parts.length;
  const alreadyAnswered = myPart.answered_current || !!feedback;

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
          Soru {qIndex + 1} / {total}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-semibold tabular-nums">
            {answeredCount}/{totalPlayers} cevapladı
          </span>
          <span
            className={`text-2xl font-black tabular-nums ${
              remainingMs > 3000 ? "text-white" : "text-rose-400"
            }`}
          >
            {remainingSecs}
            <span className="text-xs text-slate-500 font-bold">sn</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-200 text-sm font-black">
            {myPart.score}
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full max-w-3xl mx-auto flex flex-col px-4 pb-4 z-10">
        {/* Soru kartı */}
        <div
          ref={fitRef}
          className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-[clamp(1rem,3dvh,2rem)] flex flex-col shadow-2xl"
        >
          <div className="shrink-0 mb-[calc(clamp(1rem,3dvh,2rem)*var(--fit,1))]">
            <QuestionText
              text={question.questionText}
              className="text-[calc(clamp(1.1rem,2.6dvh,1.6rem)*var(--fit,1))] font-semibold text-slate-100 leading-[1.3] tracking-tight"
            />
          </div>

          <div className="flex-1 min-h-0 flex flex-col justify-center gap-[calc(clamp(0.5rem,1.4dvh,0.9rem)*var(--fit,1))]">
            {question.options.map((option, index) => {
              const isCorrectOpt = option === question.correctAnswer;
              let style =
                "border-white/5 bg-white/[0.03] text-slate-300 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10";

              if (pendingOption === option) {
                style =
                  "border-fuchsia-400/60 bg-fuchsia-500/20 text-fuchsia-200 scale-[1.01]";
              } else if (pendingOption !== null) {
                style =
                  "border-transparent bg-white/[0.01] text-slate-600 opacity-30";
              } else if (feedback) {
                if (isCorrectOpt) {
                  style =
                    "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                } else if (feedback.picked === option) {
                  style = "border-rose-500/50 bg-rose-500/10 text-rose-300";
                } else {
                  style =
                    "border-transparent bg-white/[0.01] text-slate-600 opacity-30";
                }
              } else if (alreadyAnswered) {
                style =
                  "border-white/[0.03] bg-white/[0.01] text-slate-600 opacity-50";
              }

              return (
                <button
                  key={index}
                  disabled={alreadyAnswered || submitting}
                  onClick={() => handleAnswer(option)}
                  className={`group w-full flex items-center justify-between p-[calc(clamp(0.7rem,1.8dvh,1.1rem)*var(--fit,1))] rounded-[1rem] sm:rounded-[1.25rem] border-2 transition-all duration-200 outline-none text-left ${style} ${!alreadyAnswered && !submitting ? "active:scale-[0.98]" : ""}`}
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
                    : "Yanlış · 0 puan"}
              </span>
            </div>
          )}

          {/* Cevapladı ama feedback yok (realtime güncellemesi ile) */}
          {alreadyAnswered && !feedback && !pendingOption && (
            <div className="shrink-0 pt-3 text-center">
              <span className="text-xs text-slate-500 font-semibold">
                Bekleniyor…
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
