"use client";

import { useQuizStore, getActiveQuestions } from "@/store/useQuizStore";
import {
  useEffect,
  useCallback,
  useMemo,
  useSyncExternalStore,
  useState,
  useRef,
} from "react";
import type { Lesson } from "@/types/quiz";
import { suspiciousQuestions } from "@/store/suspiciousQuestions";
import CompetitionRoom from "./competition/CompetitionRoom";
import NotesReader from "./notes/NotesReader";
import { noteLessons } from "@/store/notes";
import InstallPrompt from "./InstallPrompt";
import { useFitScale } from "@/lib/useFitScale";
import { QuestionText } from "@/lib/QuestionText";
import { claimProfile } from "./competition/actions";

const subscribeHydration = (cb: () => void) =>
  useQuizStore.persist.onFinishHydration(cb);
const getHydrated = () => useQuizStore.persist.hasHydrated();
const getHydratedServer = () => false;

const ACCENT_STYLES: Record<
  Lesson["accent"],
  { ring: string; text: string; glow: string; chip: string }
> = {
  indigo: {
    ring: "border-indigo-500/30 hover:border-indigo-400/60",
    text: "text-indigo-300",
    glow: "bg-indigo-600/20",
    chip: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  fuchsia: {
    ring: "border-fuchsia-500/30 hover:border-fuchsia-400/60",
    text: "text-fuchsia-300",
    glow: "bg-fuchsia-600/20",
    chip: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
  },
  emerald: {
    ring: "border-emerald-500/30 hover:border-emerald-400/60",
    text: "text-emerald-300",
    glow: "bg-emerald-600/20",
    chip: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  amber: {
    ring: "border-amber-500/30 hover:border-amber-400/60",
    text: "text-amber-300",
    glow: "bg-amber-600/20",
    chip: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  sky: {
    ring: "border-sky-500/30 hover:border-sky-400/60",
    text: "text-sky-300",
    glow: "bg-sky-600/20",
    chip: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
};

const AVATARS = [
  "🦊",
  "🐼",
  "🦁",
  "🐸",
  "🦉",
  "🐙",
  "🦄",
  "🐲",
  "🐯",
  "🐺",
  "🦅",
  "🐬",
  "🦖",
  "🐝",
  "🦋",
  "🐧",
];

// Easter egg dersinin id'si — bu derste bitiş raporunda özel video oynar.
// Hem sonuç ekranı hem önden-yükleme aynı id'yi kullanmalı (yoksa farklı video
// indirilir). Tek kaynak olarak burada tutuluyor.
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

const EASTER_EGG_LESSON_ID = "sabri";

// Kilidi açık derslerin id'leri. Listede olmayanlar "Yakında açılacak" görünür.
const UNLOCKED_LESSON_IDS = new Set([
  "Açık Kaynak İşletim Sistemleri",
  "Dijital Liderlik",
  "Stratejik Yönetim",
  "Kalkinma Ekonomisi",
  "İmalat Silah Sanayi",
]);

export default function QuizApp() {
  const lessons = useQuizStore((s) => s.lessons);
  const selectedLessonId = useQuizStore((s) => s.selectedLessonId);
  const activeQuestionIndex = useQuizStore((s) => s.activeQuestionIndex);
  const userAnswers = useQuizStore((s) => s.userAnswers);
  const isQuizFinished = useQuizStore((s) => s.isQuizFinished);
  const isWrongAnswersMode = useQuizStore((s) => s.isWrongAnswersMode);
  const wrongQuestions = useQuizStore((s) => s.wrongQuestions);
  const shuffledQuestions = useQuizStore((s) => s.shuffledQuestions);

  const selectLesson = useQuizStore((s) => s.selectLesson);
  const goToLessonSelection = useQuizStore((s) => s.goToLessonSelection);
  const answerQuestion = useQuizStore((s) => s.answerQuestion);
  const nextQuestion = useQuizStore((s) => s.nextQuestion);
  const prevQuestion = useQuizStore((s) => s.prevQuestion);
  const finishQuiz = useQuizStore((s) => s.finishQuiz);
  const restartQuiz = useQuizStore((s) => s.restartQuiz);
  const retryWrongAnswers = useQuizStore((s) => s.retryWrongAnswers);
  const shuffleQuestions = useQuizStore((s) => s.shuffleQuestions);
  const jumpToQuestion = useQuizStore((s) => s.jumpToQuestion);

  const studyMode = useQuizStore((s) => s.studyMode);
  const studyLessonId = useQuizStore((s) => s.studyLessonId);
  const studyQuestionIndex = useQuizStore((s) => s.studyQuestionIndex);
  const startStudyMode = useQuizStore((s) => s.startStudyMode);
  const exitStudyMode = useQuizStore((s) => s.exitStudyMode);
  const nextStudyQuestion = useQuizStore((s) => s.nextStudyQuestion);
  const prevStudyQuestion = useQuizStore((s) => s.prevStudyQuestion);
  const studyShuffled = useQuizStore((s) => s.studyShuffled);
  const shuffleStudyQuestions = useQuizStore((s) => s.shuffleStudyQuestions);

  const playerId = useQuizStore((s) => s.playerId);
  const playerName = useQuizStore((s) => s.playerName);
  const playerAvatar = useQuizStore((s) => s.playerAvatar);
  const competitionLessonId = useQuizStore((s) => s.competitionLessonId);
  const setPlayerProfile = useQuizStore((s) => s.setPlayerProfile);
  const setPlayerId = useQuizStore((s) => s.setPlayerId);
  const enterCompetition = useQuizStore((s) => s.enterCompetition);
  const exitCompetition = useQuizStore((s) => s.exitCompetition);

  const wrongAnswersBank = useQuizStore((s) => s.wrongAnswersBank);
  const isMyWrongsMode = useQuizStore((s) => s.isMyWrongsMode);
  const myWrongsQuestions = useQuizStore((s) => s.myWrongsQuestions);
  const startMyWrongsMode = useQuizStore((s) => s.startMyWrongsMode);
  const exitMyWrongsMode = useQuizStore((s) => s.exitMyWrongsMode);

  // Ders başına farklı yanlış soru sayısı (dedupe'lu). Yanlışlarım artık derse
  // özel: her dersin butonu yalnızca o dersin yanlışlarını gösterir/açar.
  const wrongCountByLesson = useMemo(() => {
    const seenByLesson: Record<string, Set<number>> = {};
    for (const s of wrongAnswersBank) {
      const set = (seenByLesson[s.lessonId] ??= new Set<number>());
      for (const q of s.questions) set.add(q.id);
    }
    const counts: Record<string, number> = {};
    for (const id in seenByLesson) counts[id] = seenByLesson[id].size;
    return counts;
  }, [wrongAnswersBank]);

  const mounted = useSyncExternalStore(
    subscribeHydration,
    getHydrated,
    getHydratedServer,
  );

  const selectedLesson = useMemo(
    () => lessons.find((l) => l.id === selectedLessonId) ?? null,
    [lessons, selectedLessonId],
  );

  const studyLesson = useMemo(
    () => lessons.find((l) => l.id === studyLessonId) ?? null,
    [lessons, studyLessonId],
  );

  // Aktif Tahmin'de "Karıştır" sonrası karışık sıra; yoksa orijinal sıra.
  const studyQuestions = useMemo(
    () => studyShuffled ?? studyLesson?.questions ?? [],
    [studyShuffled, studyLesson],
  );
  const studyQuestion = studyQuestions[studyQuestionIndex] ?? null;

  const currentQuestionsList = useMemo(
    () =>
      getActiveQuestions({
        isMyWrongsMode,
        myWrongsQuestions,
        isWrongAnswersMode,
        wrongQuestions,
        shuffledQuestions,
        selectedLessonId,
      } as never),
    [
      isMyWrongsMode,
      myWrongsQuestions,
      isWrongAnswersMode,
      wrongQuestions,
      shuffledQuestions,
      selectedLessonId,
    ],
  );

  const currentQuestion = currentQuestionsList[activeQuestionIndex];
  const isLastQuestion =
    activeQuestionIndex === currentQuestionsList.length - 1;
  const hasAnswered = currentQuestion
    ? !!userAnswers[currentQuestion.id]
    : false;
  const progressPercentage =
    currentQuestionsList.length > 0
      ? ((activeQuestionIndex + 1) / currentQuestionsList.length) * 100
      : 0;

  const [suspiciousModalOpen, setSuspiciousModalOpen] = useState(false);
  const [jumpOpen, setJumpOpen] = useState(false); // sınavda "ileri atla" menüsü
  const [jumpInput, setJumpInput] = useState(""); // manuel soru no girişi

  // Yarışma profil taslağı (isim + avatar seçimi)
  const [nameDraft, setNameDraft] = useState("");
  const [avatarDraft, setAvatarDraft] = useState<string | null>(null);
  const [claimingProfile, setClaimingProfile] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emptyBankToast, setEmptyBankToast] = useState(false);

  // Anasayfa üst sekmesi (Sorular / Notlar) + açık not dersi — soru akışına
  // dokunmayan, tamamen yerel state. Varsayılan "questions" → eski davranış aynı.
  const [homeTab, setHomeTab] = useState<"questions" | "notes">("questions");
  const [activeNoteLessonId, setActiveNoteLessonId] = useState<string | null>(
    null,
  );

  // Aktif tahmin modu local state
  const [revealed, setRevealed] = useState(false);
  const [othersVisible, setOthersVisible] = useState(false);
  const othersTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Gösterilen soru değişince (index ya da karıştırma) reveal state'ini sıfırla
  // — kasıtlı "dış değişime göre yerel UI'ı eşitle" deseni.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRevealed(false);
    setOthersVisible(false);
    if (othersTimerRef.current) clearTimeout(othersTimerRef.current);
  }, [studyQuestionIndex, studyShuffled]);

  useEffect(() => {
    return () => {
      if (othersTimerRef.current) clearTimeout(othersTimerRef.current);
    };
  }, []);

  const handleReveal = useCallback(() => {
    setRevealed(true);
    othersTimerRef.current = setTimeout(() => setOthersVisible(true), 1500);
  }, []);

  // Son 3 soruda tahmin edilen video önceden prefetch edilir
  const prefetchedVideoRef = useRef<string | null>(null);

  useEffect(() => {
    if (isWrongAnswersMode) return;
    if (!selectedLessonId) return;

    const remaining = currentQuestionsList.length - activeQuestionIndex;
    if (remaining > 3) return;

    const wrongSoFar = currentQuestionsList.filter(
      (q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer,
    ).length;
    const predictedWrongPct =
      currentQuestionsList.length > 0
        ? (wrongSoFar / currentQuestionsList.length) * 100
        : 0;

    const predictedSrc =
      selectedLessonId === EASTER_EGG_LESSON_ID
        ? "/videos/easteregg.mp4"
        : wrongSoFar === 0
          ? "/videos/v1.mp4"
          : predictedWrongPct <= 10
            ? "/videos/v2.mp4"
            : predictedWrongPct <= 20
              ? "/videos/v3.mp4"
              : predictedWrongPct <= 30
                ? "/videos/v4.mp4"
                : "/videos/v5.mp4";

    if (prefetchedVideoRef.current === predictedSrc) return;
    prefetchedVideoRef.current = predictedSrc;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = predictedSrc;
    link.as = "video";
    document.head.appendChild(link);
  }, [
    activeQuestionIndex,
    currentQuestionsList,
    userAnswers,
    selectedLessonId,
    isWrongAnswersMode,
  ]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Çalışma modu klavye
      if (studyMode !== "none") {
        if (e.key === "ArrowRight") {
          if (studyMode === "reveal" && !revealed) handleReveal();
          else nextStudyQuestion();
        } else if (e.key === "ArrowLeft") {
          prevStudyQuestion();
        } else if (
          (e.key === " " || e.key === "Enter") &&
          studyMode === "reveal" &&
          !revealed
        ) {
          e.preventDefault();
          handleReveal();
        }
        return;
      }

      // Quiz modu klavye
      if ((!selectedLesson && !isMyWrongsMode) || isQuizFinished || !currentQuestion) return;
      if (e.key === "ArrowRight" && hasAnswered) {
        if (isLastQuestion) finishQuiz();
        else nextQuestion();
      } else if (e.key === "ArrowLeft" && activeQuestionIndex > 0) {
        prevQuestion();
      }
      if (["1", "2", "3", "4", "5"].includes(e.key) && !hasAnswered) {
        const optionIndex = parseInt(e.key) - 1;
        const selectedOption = currentQuestion.options[optionIndex];
        if (selectedOption) answerQuestion(currentQuestion.id, selectedOption);
      }
    },
    [
      studyMode,
      revealed,
      handleReveal,
      nextStudyQuestion,
      prevStudyQuestion,
      selectedLesson,
      isMyWrongsMode,
      isQuizFinished,
      currentQuestion,
      hasAnswered,
      isLastQuestion,
      finishQuiz,
      nextQuestion,
      prevQuestion,
      activeQuestionIndex,
      answerQuestion,
    ],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Uzun soru/şıklarda kartı taşırmamak için font'u orantılı küçülten "sığdır".
  const quizFitRef = useFitScale([currentQuestion?.id]);
  const studyFitRef = useFitScale([
    studyMode,
    studyQuestionIndex,
    revealed,
    othersVisible,
  ]);

  if (!mounted) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center bg-[#050505]">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
        </div>
      </div>
    );
  }

  // === ÇALIŞMA MODU - LİSTE ===
  if (studyMode === "list" && studyLesson) {
    const studyAccent = ACCENT_STYLES[studyLesson.accent];
    return (
      <div className="min-h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col relative selection:bg-indigo-500/30 safe-area">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Sticky header */}
        <div className="sticky top-0 z-20 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04]">
          <div className="w-full max-w-3xl mx-auto px-4 py-3 flex items-center gap-2">
            <button
              onClick={exitStudyMode}
              className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white active:scale-95 transition-all"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Dersler
            </button>
            <span
              className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate ${studyAccent.chip}`}
            >
              {studyLesson.title}
            </span>
            <span className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Liste
            </span>
            <span className="ml-auto shrink-0 text-xs text-slate-500 font-semibold">
              {studyQuestions.length} soru
            </span>
          </div>
        </div>

        {/* Soru listesi */}
        <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-6 flex flex-col gap-4 z-10">
          {studyQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="backdrop-blur-xl border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02]"
            >
              <div className="px-5 pt-5 pb-3 flex items-start gap-3">
                <span
                  className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center font-black text-xs ${studyAccent.chip}`}
                >
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                  {q.questionText}
                </p>
              </div>
              <div className="px-5 pb-5 flex flex-col gap-2">
                {q.options.map((opt, optIdx) => {
                  const isCorrect = opt === q.correctAnswer;
                  return (
                    <div
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium
                        ${
                          isCorrect
                            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                            : "border-white/[0.04] bg-white/[0.01] text-slate-500 opacity-40"
                        }`}
                    >
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
                      <span className={isCorrect ? "" : "pl-7"}>{OPTION_LABELS[optIdx]}) {opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <footer className="pt-4 pb-8 text-center text-[11px] text-slate-600">
            {studyQuestions.length} soru listelendi
          </footer>
        </div>
      </div>
    );
  }

  // === ÇALIŞMA MODU - AKTİF TAHMİN ===
  if (studyMode === "reveal" && studyLesson && studyQuestion) {
    const studyAccent = ACCENT_STYLES[studyLesson.accent];
    const totalStudyQuestions = studyQuestions.length;
    const studyProgress =
      ((studyQuestionIndex + 1) / totalStudyQuestions) * 100;
    const isLastStudyQuestion = studyQuestionIndex === totalStudyQuestions - 1;

    return (
      <div className="h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-hidden relative selection:bg-indigo-500/30 safe-area">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
          <div
            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-500 ease-out"
            style={{ width: `${studyProgress}%` }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-emerald-600/10 blur-[100px] pointer-events-none rounded-full" />

        {/* Üst bar */}
        <div className="w-full max-w-3xl mx-auto px-4 pt-4 sm:pt-6 pb-2 flex items-center justify-between shrink-0 z-10 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={exitStudyMode}
              className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white active:scale-95 transition-all"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Dersler
            </button>
            <span
              className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate ${studyAccent.chip}`}
            >
              {studyLesson.title}
            </span>
            <span className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Çalışma
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            {!studyShuffled && <button
              onClick={shuffleStudyQuestions}
              className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-black tracking-wider uppercase rounded-lg border bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-emerald-300 border-emerald-500/40 hover:from-emerald-500/40 hover:to-teal-500/35 hover:text-emerald-200 hover:border-emerald-400/60 hover:shadow-[0_0_12px_rgba(52,211,153,0.35)] active:scale-95 transition-all flex items-center gap-1.5"
              aria-label="Soruları karıştır"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Karıştır
            </button>}
            <div className="text-[clamp(12px,1.5dvh,14px)] font-semibold text-slate-400">
              <span className="text-white">{studyQuestionIndex + 1}</span> /{" "}
              {totalStudyQuestions}
            </div>
          </div>
        </div>

        {/* Ana içerik */}
        <div className="flex-1 min-h-0 w-full max-w-3xl mx-auto flex flex-col px-4 pb-4 sm:px-6 z-10">
          <div
            ref={studyFitRef}
            onClick={!revealed ? handleReveal : undefined}
            className={`flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-[clamp(1rem,3dvh,2.5rem)] flex flex-col shadow-2xl relative transition-all duration-200
              ${!revealed ? "cursor-pointer hover:bg-white/[0.04] hover:border-white/10 active:scale-[0.99]" : ""}`}
          >
            {/* Soru metni */}
            <div className="shrink-0 mb-[calc(clamp(1rem,3dvh,2.5rem)*var(--fit,1))]">
              <QuestionText
                text={studyQuestion.questionText}
                className="text-[calc(clamp(1.1rem,2.8dvh,1.75rem)*var(--fit,1))] font-semibold text-slate-100 leading-[1.3] tracking-tight"
              />
            </div>

            {/* Şıklar alanı */}
            <div className="flex-1 min-h-0 flex flex-col justify-center gap-[calc(clamp(0.5rem,1.5dvh,1rem)*var(--fit,1))]">
              {!revealed ? (
                <div className="flex items-center justify-center py-6">
                  <p className="text-sm text-slate-600 select-none">
                    Cevabı görmek için dokun
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-[calc(clamp(0.5rem,1.5dvh,1rem)*var(--fit,1))]">
                  {studyQuestion.options.map((opt, idx) => {
                    const isCorrect = opt === studyQuestion.correctAnswer;

                    if (isCorrect) {
                      return (
                        <div
                          key={idx}
                          className="animate-in zoom-in duration-300 flex items-center justify-between p-[calc(clamp(0.75rem,2dvh,1.25rem)*var(--fit,1))] rounded-[1rem] sm:rounded-[1.25rem] border-2 border-emerald-500/50 bg-emerald-500/10 text-emerald-300 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                        >
                          <span className="text-[calc(clamp(0.85rem,2.2dvh,1.1rem)*var(--fit,1))] font-medium leading-[1.3] pr-4">
                            {OPTION_LABELS[idx]}) {opt}
                          </span>
                          <span className="animate-in zoom-in duration-300">
                            <svg
                              className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-emerald-400 shrink-0"
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
                          </span>
                        </div>
                      );
                    }

                    // Yanlış şıklar BAŞTAN yer kaplar (görünmez), süre dolunca
                    // yumuşakça belirir. Böylece doğru şık kendi sırasında kalır,
                    // ortada belirip yerine zıplamaz.
                    return (
                      <div
                        key={idx}
                        className={`flex items-center p-[calc(clamp(0.75rem,2dvh,1.25rem)*var(--fit,1))] rounded-[1rem] sm:rounded-[1.25rem] border border-white/[0.05] bg-white/[0.01] text-slate-600 transition-opacity duration-500 ${othersVisible ? "opacity-40" : "opacity-0"}`}
                      >
                        <span className="text-[calc(clamp(0.85rem,2.2dvh,1.1rem)*var(--fit,1))] font-medium leading-[1.3]">
                          {OPTION_LABELS[idx]}) {opt}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Navigasyon */}
          <div className="shrink-0 pt-4 pb-2 flex items-center justify-between gap-4">
            <button
              onClick={prevStudyQuestion}
              disabled={studyQuestionIndex === 0}
              className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] flex items-center justify-center bg-white/[0.05] rounded-full text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all border border-white/5 active:scale-95"
              aria-label="Önceki soru"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {isLastStudyQuestion ? (
              <button
                onClick={exitStudyMode}
                className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center bg-emerald-600 text-white text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-emerald-500 transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/20 tracking-wide"
              >
                ÇALIŞMAYI BİTİR
              </button>
            ) : (
              <button
                onClick={nextStudyQuestion}
                className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center gap-2 bg-white text-black text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-slate-200 transition-all active:scale-[0.98] tracking-wide"
              >
                SONRAKİ
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // === YARIŞMA EKRANI ===
  if (competitionLessonId) {
    const hasProfile = !!playerName && !!playerAvatar;

    // Profil hazırsa gerçek zamanlı yarışma odasını aç
    if (hasProfile) {
      return (
        <CompetitionRoom
          lessonId={competitionLessonId}
          playerId={playerId}
          playerName={playerName!}
          playerAvatar={playerAvatar!}
          onPlayerId={setPlayerId}
          onExit={exitCompetition}
        />
      );
    }

    const compLesson = lessons.find((l) => l.id === competitionLessonId);
    const compAccent = compLesson
      ? ACCENT_STYLES[compLesson.accent]
      : ACCENT_STYLES.fuchsia;

    // Profil yoksa: isim + avatar seçimi
    return (
      <div className="min-h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col relative selection:bg-fuchsia-500/30 overflow-y-auto safe-area">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-fuchsia-600/15 blur-[100px] pointer-events-none rounded-full" />

        <div className="flex-1 w-full max-w-md mx-auto px-4 py-8 z-10 flex flex-col">
          {/* Üst bar */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={exitCompetition}
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
              Geri
            </button>
            <span
              className={`px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-lg border truncate ${compAccent.chip}`}
            >
              {compLesson?.title ?? "Yarışma"}
            </span>
            <span className="shrink-0 px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-lg border bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Yarışma
            </span>
          </div>

          {/* === PROFİL SEÇİMİ === */}
          <div className="flex-1 flex flex-col">
            <header className="text-center mb-8">
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
                Yarışmacı profilin
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Rakiplerin seni bu isim ve avatarla görecek.
              </p>
            </header>

            <label className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">
              İsim
            </label>
            <input
              value={nameDraft}
              onChange={(e) => {
                setNameDraft(e.target.value.slice(0, 18));
                if (nameError) setNameError(null);
              }}
              placeholder="Adın..."
              maxLength={18}
              className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white placeholder:text-slate-600 outline-none focus:bg-white/[0.06] transition-all ${
                nameError
                  ? "border-rose-500/60 focus:border-rose-400/70"
                  : "border-white/10 focus:border-fuchsia-400/50"
              }`}
            />
            <p
              className={`mt-2 mb-4 text-xs font-semibold min-h-[1rem] ${
                nameError ? "text-rose-400" : "text-transparent"
              }`}
            >
              {nameError ?? "."}
            </p>

            <label className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
              Avatar
            </label>
            <div className="grid grid-cols-4 gap-2.5 mb-8">
              {AVATARS.map((av) => {
                const selected = avatarDraft === av;
                return (
                  <button
                    key={av}
                    onClick={() => setAvatarDraft(av)}
                    className={`aspect-square rounded-2xl flex items-center justify-center text-3xl border-2 transition-all active:scale-90
                      ${
                        selected
                          ? "border-fuchsia-400/70 bg-fuchsia-500/15 scale-105 shadow-[0_0_20px_rgba(217,70,239,0.25)]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                  >
                    {av}
                  </button>
                );
              })}
            </div>

            <button
              onClick={async () => {
                const name = nameDraft.trim();
                if (!name || !avatarDraft || claimingProfile) return;
                setClaimingProfile(true);
                setNameError(null);
                try {
                  const res = await claimProfile({
                    id: playerId,
                    name,
                    avatar: avatarDraft,
                  });
                  if (res.ok) {
                    setPlayerId(res.id);
                    setPlayerProfile(name, avatarDraft);
                  } else {
                    setNameError("Bu isim alınmış, başka bir isim seç.");
                  }
                } catch {
                  setNameError("Bağlantı hatası, tekrar dene.");
                } finally {
                  setClaimingProfile(false);
                }
              }}
              disabled={!nameDraft.trim() || !avatarDraft || claimingProfile}
              className="mt-auto w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all active:scale-[0.98] bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {claimingProfile ? "Kontrol ediliyor…" : "Devam Et"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === NOTLAR OKUMA EKRANI ===
  // Not dersi açıkken tüm ekranı NotesReader devralır (soru akışından bağımsız).
  if (activeNoteLessonId) {
    const noteLesson = noteLessons.find((n) => n.id === activeNoteLessonId);
    if (noteLesson) {
      return (
        <NotesReader
          lesson={noteLesson}
          onExit={() => setActiveNoteLessonId(null)}
        />
      );
    }
  }

  // === DERS SEÇİM EKRANI ===
  if (!selectedLesson && !isMyWrongsMode) {
    return (
      <div className="min-h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-y-auto relative selection:bg-indigo-500/30 safe-area">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 z-10 flex flex-col">
          {/* Sorular / Notlar geçişi */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <button
                onClick={() => setHomeTab("questions")}
                className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all active:scale-95 ${
                  homeTab === "questions"
                    ? "bg-white text-black shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sorular
              </button>
              <button
                onClick={() => setHomeTab("notes")}
                className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all active:scale-95 ${
                  homeTab === "notes"
                    ? "bg-white text-black shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Notlar
              </button>
            </div>
          </div>

          <header className="mb-10 sm:mb-14 text-center">
            <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg border bg-indigo-500/10 text-indigo-300 border-indigo-500/20 mb-4">
              {homeTab === "questions" ? "Ders Seçimi" : "Ders Notları"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              {homeTab === "questions"
                ? "Hangi derse çalışalım?"
                : "Hangi dersin notları?"}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-md mx-auto">
              {homeTab === "questions" ? (
                <>
                  Bir ders seç, sorular yüklensin. İstediğin zaman üstteki{" "}
                  <span className="text-slate-200 font-semibold">Dersler</span>{" "}
                  butonundan geri dönebilirsin.
                </>
              ) : (
                <>
                  Bir ders seç, notlar açılsın. Rahatça okunsun diye
                  hazırlandı — uygulamadan çıkmana gerek yok.
                </>
              )}
            </p>
          </header>

          {homeTab === "questions" && (
          <div className="grid gap-4 sm:gap-5">
            {lessons.map((lesson) => {
              const accent = ACCENT_STYLES[lesson.accent];
              const isLocked = !UNLOCKED_LESSON_IDS.has(lesson.id);
              return (
                <div
                  key={lesson.id}
                  className={`group relative backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-300
                    ${
                      isLocked
                        ? "bg-white/[0.015] border-white/5 opacity-50 grayscale"
                        : `bg-white/[0.03] ${accent.ring} hover:bg-white/[0.05]`
                    }`}
                >
                  {!isLocked && (
                    <div
                      className={`absolute -top-12 -right-12 w-40 h-40 ${accent.glow} blur-3xl rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                  )}

                  {/* Sınav başlatma alanı */}
                  <button
                    onClick={() => !isLocked && selectLesson(lesson.id)}
                    disabled={isLocked}
                    className={`relative w-full text-left p-6 sm:p-7 transition-all
                      ${isLocked ? "cursor-not-allowed" : "active:scale-[0.99] cursor-pointer"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center font-black text-lg sm:text-xl
                          ${isLocked ? "border-white/10 text-white/30" : accent.chip}`}
                      >
                        {isLocked ? (
                          <svg
                            className="w-5 h-5 text-white/30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        ) : (
                          lesson.questions.length
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2
                          className={`text-lg sm:text-xl font-bold tracking-tight ${isLocked ? "text-white/30" : "text-white"}`}
                        >
                          {lesson.title}
                        </h2>
                        <p
                          className={`text-xs sm:text-sm mt-1 line-clamp-2 ${isLocked ? "text-white/20" : "text-slate-400"}`}
                        >
                          {isLocked ? "Yakında açılacak" : lesson.description}
                        </p>
                      </div>
                      {!isLocked && (
                        <div className="shrink-0 flex flex-col items-end gap-0.5">
                          <svg
                            className={`w-7 h-7 ${accent.text} transition-transform group-hover:translate-x-1 arrow-nudge`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="text-xs text-slate-500 font-bold">
                            Sınav
                          </span>
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Çalışma modu + yarışma butonları */}
                  {!isLocked && (
                    <div className="relative px-4 sm:px-5 pb-4 pt-4 flex flex-col gap-2.5 border-t border-white/[0.06]">
                      {/* Çalışma modları */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => startStudyMode(lesson.id, "list")}
                          className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-2xl bg-white/[0.05] border border-white/15 text-slate-200 hover:text-white hover:bg-white/[0.09] hover:border-white/25 text-sm font-semibold transition-all active:scale-95 shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M4 6h16M4 10h16M4 14h16M4 18h16"
                              />
                            </svg>
                            Liste
                          </div>
                          <span className="text-[8px] font-medium text-slate-500 tracking-wide leading-none">(soruları ezberle!)</span>
                        </button>
                        <button
                          onClick={() => startStudyMode(lesson.id, "reveal")}
                          className={`flex items-center justify-center gap-2 px-3 py-3 rounded-2xl text-sm font-semibold transition-all active:scale-95 border ${accent.chip} hover:brightness-125 shadow-sm`}
                        >
                          <svg
                            className="w-4 h-4 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Aktif Tahmin
                        </button>
                      </div>
                      {/* Yanlışlarım + Online Kapışma — yan yana */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* YANLIŞLARIM BUTONU */}
                        <button
                          onClick={() => {
                            if ((wrongCountByLesson[lesson.id] ?? 0) > 0) {
                              startMyWrongsMode(lesson.id);
                            } else {
                              setEmptyBankToast(true);
                              setTimeout(() => setEmptyBankToast(false), 2500);
                            }
                          }}
                          className="group/wrongs relative flex items-center justify-center gap-1.5 px-3 py-3 rounded-2xl font-semibold text-sm tracking-wide overflow-hidden transition-all active:scale-95 bg-gradient-to-r from-rose-500/15 via-red-500/10 to-rose-500/15 border border-rose-500/30 text-rose-300 hover:from-rose-500/25 hover:via-red-500/20 hover:to-rose-500/25 hover:border-rose-400/50 hover:text-rose-200 hover:shadow-[0_0_20px_rgba(244,63,94,0.18)] shadow-sm"
                        >
                          <svg
                            className="w-4 h-4 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Yanlışlarım
                          {(wrongCountByLesson[lesson.id] ?? 0) > 0 && (
                            <span className="shrink-0 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-rose-500/25 text-rose-300 text-[10px] font-black border border-rose-500/40">
                              {wrongCountByLesson[lesson.id] ?? 0}
                            </span>
                          )}
                        </button>
                        {/* ONLINE KAPIŞMA */}
                        <button
                          onClick={() => enterCompetition(lesson.id)}
                          className="group/comp relative flex items-center justify-center gap-1.5 px-3 py-3 rounded-2xl font-bold text-sm tracking-wide whitespace-nowrap overflow-hidden transition-all active:scale-95 bg-gradient-to-r from-fuchsia-600/25 via-purple-600/20 to-fuchsia-600/25 border border-fuchsia-400/40 text-fuchsia-200 hover:from-fuchsia-500/40 hover:via-purple-500/30 hover:to-fuchsia-500/40 hover:border-fuchsia-300/60 hover:text-white hover:shadow-[0_0_26px_rgba(217,70,239,0.35)] shadow-sm"
                        >
                          {/* hover'da soldan sağa kayan ışıltı (boyutu etkilemez) */}
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/comp:translate-x-full" />
                          <span className="relative flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_8px_rgba(217,70,239,0.9)] animate-pulse shrink-0" />
                            <span className="text-[11px] font-bold uppercase tracking-wider text-fuchsia-400/90">
                              Online
                            </span>
                          </span>
                          <span className="relative">Kapışma</span>
                        </button>
                      </div>
                      {/* Boş banka toast */}
                      {emptyBankToast && (
                        <div className="w-full text-center py-2 px-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold animate-in fade-in zoom-in-95 duration-200">
                          Henüz yanlışın yok 🎉
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          )}

          {/* === NOT DERSLERİ === */}
          {homeTab === "notes" && (
            <div className="grid gap-4 sm:gap-5">
              {noteLessons.map((nl) => {
                const accent = ACCENT_STYLES[nl.accent];
                return (
                  <button
                    key={nl.id}
                    onClick={() => setActiveNoteLessonId(nl.id)}
                    className={`group relative text-left backdrop-blur-xl border-2 rounded-3xl overflow-hidden bg-white/[0.03] ${accent.ring} hover:bg-white/[0.05] transition-all duration-300 p-6 sm:p-7 active:scale-[0.99]`}
                  >
                    <div
                      className={`absolute -top-12 -right-12 w-40 h-40 ${accent.glow} blur-3xl rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                    <div className="relative flex items-center gap-4">
                      <div
                        className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center ${accent.chip}`}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.5V20m0-13.5C10.5 5 8 4.5 5.5 5.5V18c2.5-1 5 .5 6.5 2m0-13.5C13.5 5 16 4.5 18.5 5.5V18c-2.5-1-5 .5-6.5 2"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                          {nl.title}
                        </h2>
                        <p className="text-xs sm:text-sm mt-1 line-clamp-2 text-slate-400">
                          {nl.description}
                        </p>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-0.5">
                        <svg
                          className={`w-7 h-7 ${accent.text} transition-transform group-hover:translate-x-1 arrow-nudge`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="text-xs text-slate-500 font-bold">
                          {nl.topics.length} konu
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          <footer className="mt-auto pt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/aykublut"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.06] active:scale-90 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.39.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71C3.41 8.48 3.4 8.85 3.4 12s.01 3.52.07 4.76c.04.9.2 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.2-1.39-.32-1.71a2.85 2.85 0 00-.69-1.06 2.85 2.85 0 00-1.06-.69c-.32-.13-.81-.28-1.71-.32C15.52 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1112 16.94 4.94 4.94 0 0112 7.06zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.14-.39a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/aykublut"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.06] active:scale-90 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/aykutakbulut"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.06] active:scale-90 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
                </svg>
              </a>
              {/* Gmail */}
              <a
                href="mailto:aykutakbulut.dev@gmail.com"
                aria-label="E-posta"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.06] active:scale-90 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 8l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                  />
                </svg>
              </a>
            </div>
            <p className="text-center text-[11px] text-slate-600">
              Aykut Akbulut · İlerlemen tarayıcına kaydedilir
            </p>
          </footer>
        </div>
        <InstallPrompt />
      </div>
    );
  }

  const accent = isMyWrongsMode
    ? ACCENT_STYLES.amber
    : ACCENT_STYLES[selectedLesson!.accent];

  // === SONUÇ EKRANI ===
  if (isQuizFinished) {
    const lessonQs = isMyWrongsMode ? currentQuestionsList : selectedLesson!.questions;
    const answeredIds = Object.keys(userAnswers).map(Number);

    const currentListWrongCount = isWrongAnswersMode
      ? answeredIds.filter((id) => {
          const q = lessonQs.find((q) => q.id === id);
          return q ? userAnswers[id] !== q.correctAnswer : false;
        }).length
      : currentQuestionsList.filter(
          (q) => userAnswers[q.id] !== q.correctAnswer,
        ).length;

    const currentListCorrectCount = isWrongAnswersMode
      ? answeredIds.length - currentListWrongCount
      : currentQuestionsList.length - currentListWrongCount;

    const isPerfect =
      currentListWrongCount === 0 &&
      (isWrongAnswersMode ? answeredIds.length : currentQuestionsList.length) >
        0;

    const wrongPct =
      currentQuestionsList.length > 0
        ? (currentListWrongCount / currentQuestionsList.length) * 100
        : 0;

    const videoSrc =
      selectedLesson?.id === EASTER_EGG_LESSON_ID
        ? "/videos/easteregg.mp4"
        : currentListWrongCount === 0
          ? "/videos/v1.mp4"
          : wrongPct <= 10
            ? "/videos/v2.mp4"
            : wrongPct <= 20
              ? "/videos/v3.mp4"
              : wrongPct <= 30
                ? "/videos/v4.mp4"
                : "/videos/v5.mp4";

    return (
      <div className="h-[100dvh] w-full text-slate-200 flex items-end justify-center overflow-hidden relative">
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          playsInline
          preload="none"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />

        <div className="relative z-[2] w-full max-w-md px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col gap-4">
          <div className="text-center space-y-1">
            <span
              className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-lg border ${accent.chip}`}
            >
              {isMyWrongsMode ? "Yanlışlarım" : selectedLesson!.title}
            </span>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter">
              {isPerfect ? "KUSURSUZ!" : "RAPOR"}
            </h1>
            <p className="text-sm font-medium text-slate-400">
              {isMyWrongsMode && isPerfect
                ? ""
                : isWrongAnswersMode
                  ? "Hata ayıklama tamamlandı."
                  : isMyWrongsMode
                    ? "Yanlışlarım oturumu sona erdi."
                    : "Test oturumu sona erdi."}
            </p>
          </div>
          {/* Yanlışlarım modunda hepsi doğruysa özel kutlama mesajı */}
          {isMyWrongsMode && isPerfect && (
            <div className="bg-black/40 border border-amber-500/30 rounded-3xl p-5 text-center backdrop-blur-md">
              <p className="text-base font-bold text-amber-300 leading-relaxed">
                Buraya son 3 oturumunun yanlışları kaydedilir!
              </p>
              <p className="text-sm text-slate-400 mt-2">
                Silinmesini istiyorsan sınavını 3 kere fulle 😊
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 border border-emerald-500/30 rounded-3xl p-5 text-center backdrop-blur-md">
              <span className="text-4xl font-black text-emerald-400 block mb-1">
                {currentListCorrectCount}
              </span>
              <span className="text-[10px] font-bold text-emerald-500/70 tracking-widest uppercase">
                Doğru
              </span>
            </div>
            <div className="bg-black/40 border border-rose-500/30 rounded-3xl p-5 text-center backdrop-blur-md">
              <span className="text-4xl font-black text-rose-400 block mb-1">
                {currentListWrongCount}
              </span>
              <span className="text-[10px] font-bold text-rose-500/70 tracking-widest uppercase">
                Yanlış
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {currentListWrongCount > 0 && (
              <button
                onClick={retryWrongAnswers}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2"
              >
                Sadece Yanlışları Çöz
              </button>
            )}
            {!isMyWrongsMode && (
              <button
                onClick={restartQuiz}
                className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/15 backdrop-blur-sm transition-all active:scale-[0.98]"
              >
                Bu Dersi Sıfırla
              </button>
            )}
            <button
              onClick={isMyWrongsMode ? exitMyWrongsMode : goToLessonSelection}
              className="w-full py-3 text-slate-400 hover:text-white text-sm font-semibold rounded-2xl transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Derslere Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === TEST EKRANI ===
  if (!currentQuestion) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center bg-[#050505] text-slate-400 text-sm">
        Bu derste soru bulunamadı.
      </div>
    );
  }

  const currentSuspicion = suspiciousQuestions[currentQuestion.id] ?? null;

  return (
    <div className="h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-hidden relative selection:bg-indigo-500/30">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* === ÜST BAR === */}
      <div className="w-full max-w-3xl mx-auto px-4 pt-4 sm:pt-6 pb-2 flex items-center justify-between shrink-0 z-30 gap-2 relative">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={isMyWrongsMode ? exitMyWrongsMode : goToLessonSelection}
            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white active:scale-95 transition-all"
            aria-label="Derslere dön"
          >
            <svg
              className="w-[14px] h-[14px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Dersler
          </button>

          <span
            className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate ${isMyWrongsMode ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : isWrongAnswersMode ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : accent.chip}`}
          >
            {isMyWrongsMode ? "Yanlışlarım" : isWrongAnswersMode ? "Hata Modu" : selectedLesson!.title}
          </span>

          {!isWrongAnswersMode && !isMyWrongsMode && !shuffledQuestions && (
            <button
              onClick={shuffleQuestions}
              className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-black tracking-wider uppercase rounded-lg border bg-gradient-to-r from-fuchsia-500/25 to-pink-500/20 text-fuchsia-300 border-fuchsia-500/40 hover:from-fuchsia-500/40 hover:to-pink-500/35 hover:text-fuchsia-200 hover:border-fuchsia-400/60 hover:shadow-[0_0_12px_rgba(217,70,239,0.35)] active:scale-95 transition-all flex items-center gap-1.5"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Karıştır
            </button>
          )}

          {!isWrongAnswersMode && currentQuestionsList.length > 10 && (
            <div className="relative  shrink-0">
              <button
                onClick={() => setJumpOpen((o) => !o)}
                className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20  hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                aria-label="Soruya atla"
              >
                <svg
                  className="w-[14px]  h-[14px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                Atla
              </button>
              {jumpOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                    onClick={() => setJumpOpen(false)}
                  />
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                    <div
                      className="pointer-events-auto w-full max-w-xs p-5 rounded-3xl border border-white/10 bg-[#0d0d0f]/95 backdrop-blur-xl shadow-2xl shadow-black/60 animate-in fade-in zoom-in-95 duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-white tracking-wide">
                          Soruya Atla
                        </h3>
                        <button
                          onClick={() => setJumpOpen(false)}
                          className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.12] active:scale-90 transition-all"
                        >
                          <svg
                            className="w-4 h-4"
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
                        </button>
                      </div>
                      <div className="grid grid-cols-5 gap-2 mb-4">
                        {Array.from(
                          {
                            length: Math.floor(
                              currentQuestionsList.length / 10,
                            ),
                          },
                          (_, i) => (i + 1) * 10,
                        ).map((n) => (
                          <button
                            key={n}
                            onClick={() => {
                              jumpToQuestion(n - 1);
                              setJumpOpen(false);
                            }}
                            className="py-2.5 rounded-xl text-sm font-bold text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-sky-500/20 hover:text-sky-300 hover:border-sky-500/30 active:scale-90 transition-all"
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 border-t border-white/10 pt-4">
                        <input
                          type="text"
                          inputMode="numeric"
                          value={jumpInput}
                          onChange={(e) =>
                            setJumpInput(e.target.value.replace(/[^0-9]/g, ""))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              const n = parseInt(jumpInput, 10);
                              if (!Number.isNaN(n)) jumpToQuestion(n - 1);
                              setJumpOpen(false);
                              setJumpInput("");
                            }
                          }}
                          placeholder={`1–${currentQuestionsList.length}`}
                          className="flex-1 min-w-0 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white text-center outline-none focus:border-sky-500/40 placeholder:text-slate-600"
                        />
                        <button
                          onClick={() => {
                            const n = parseInt(jumpInput, 10);
                            if (!Number.isNaN(n)) jumpToQuestion(n - 1);
                            setJumpOpen(false);
                            setJumpInput("");
                          }}
                          className="shrink-0 px-4 py-2.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-sm font-bold hover:bg-sky-500/30 active:scale-90 transition-all"
                        >
                          Git
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {currentSuspicion && (
            <button
              onClick={() => setSuspiciousModalOpen(true)}
              className="shrink-0 relative flex items-center gap-1 animate-in fade-in slide-in-from-left-2 duration-300"
              aria-label="Şüpheli soru açıklamasını gör"
            >
              <span
                className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
                  currentSuspicion.level === "strongly-suspicious"
                    ? "bg-rose-500"
                    : "bg-amber-400"
                }`}
              />
              <span
                className={`relative flex items-center justify-center w-7 h-7 rounded-full font-black text-[13px] transition-transform hover:scale-110 active:scale-95 ${
                  currentSuspicion.level === "strongly-suspicious"
                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    : "bg-amber-400/20 text-amber-400 border border-amber-400/40"
                }`}
                style={{ animation: "suspWiggle 2.4s ease-in-out infinite" }}
              >
                !
              </span>
            </button>
          )}
        </div>
        <div className="shrink-0 text-[clamp(12px,1.5dvh,14px)] font-semibold text-slate-400">
          <span className="text-white">{activeQuestionIndex + 1}</span> /{" "}
          {currentQuestionsList.length}
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full max-w-3xl mx-auto flex flex-col px-4 pb-4 sm:px-6 z-10">
        <div
          ref={quizFitRef}
          className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-[clamp(1rem,3dvh,2.5rem)] flex flex-col shadow-2xl relative"
        >
          <div className="shrink-0 mb-[calc(clamp(1rem,3dvh,2.5rem)*var(--fit,1))]">
            <QuestionText
              text={currentQuestion.questionText}
              className="text-[calc(clamp(1.1rem,2.8dvh,1.75rem)*var(--fit,1))] font-semibold text-slate-100 leading-[1.3] tracking-tight"
            />
          </div>
          <div className="flex-1 min-h-0 flex flex-col justify-center gap-[calc(clamp(0.5rem,1.5dvh,1rem)*var(--fit,1))]">
            {currentQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion.id] === option;
              const isCorrectAnswer = option === currentQuestion.correctAnswer;
              let baseStyle =
                "border-white/5 bg-white/[0.03] text-slate-300 hover:border-indigo-500/30 hover:bg-indigo-500/10";
              let icon = null;

              if (hasAnswered) {
                if (isCorrectAnswer) {
                  baseStyle =
                    "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 z-10 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                  icon = (
                    <svg
                      className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-emerald-400 shrink-0"
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
                  );
                } else if (isSelected && !isCorrectAnswer) {
                  baseStyle =
                    "border-rose-500/50 bg-rose-500/10 text-rose-300 opacity-90";
                  icon = (
                    <svg
                      className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-rose-400 shrink-0"
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
                  );
                } else {
                  baseStyle =
                    "border-transparent bg-white/[0.01] text-slate-600 opacity-30 grayscale";
                }
              }

              return (
                <button
                  key={index}
                  disabled={hasAnswered}
                  onClick={() => answerQuestion(currentQuestion.id, option)}
                  className={`group w-full flex items-center justify-between p-[calc(clamp(0.75rem,2dvh,1.25rem)*var(--fit,1))] rounded-[1rem] sm:rounded-[1.25rem] border-2 transition-all duration-300 outline-none text-left ${baseStyle} ${!hasAnswered && "active:scale-[0.98]"}`}
                >
                  <span className="text-[calc(clamp(0.85rem,2.2dvh,1.1rem)*var(--fit,1))] font-medium leading-[1.3] pr-4">
                    {OPTION_LABELS[index]}) {option}
                  </span>
                  {icon && (
                    <span className="animate-in zoom-in duration-300">
                      {icon}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ŞÜPHELİ SORU MODAL */}
        {suspiciousModalOpen && currentSuspicion && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSuspiciousModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
              className={`relative w-full max-w-sm rounded-3xl border p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 ${
                currentSuspicion.level === "strongly-suspicious"
                  ? "bg-[#120808] border-rose-500/30"
                  : "bg-[#120e04] border-amber-400/30"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-3 mb-4">
                <span
                  className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full font-black text-lg ${
                    currentSuspicion.level === "strongly-suspicious"
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      : "bg-amber-400/20 text-amber-400 border border-amber-400/40"
                  }`}
                >
                  !
                </span>
                <div>
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-0.5 ${
                      currentSuspicion.level === "strongly-suspicious"
                        ? "text-rose-400"
                        : "text-amber-400"
                    }`}
                  >
                    {currentSuspicion.level === "strongly-suspicious"
                      ? "Kuvvetle Şüpheli Cevap"
                      : "Şüpheli Cevap"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Soru {currentQuestion.id}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentSuspicion.explanation}
              </p>
              <button
                onClick={() => setSuspiciousModalOpen(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 text-sm font-semibold transition-all active:scale-95"
              >
                Tamam, anladım
              </button>
            </div>
          </div>
        )}

        <div className="shrink-0 pt-4 pb-2 flex items-center justify-between gap-4">
          <button
            onClick={prevQuestion}
            disabled={activeQuestionIndex === 0}
            className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] flex items-center justify-center bg-white/[0.05] rounded-full text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all border border-white/5 active:scale-95"
            aria-label="Önceki soru"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {isLastQuestion ? (
            <button
              onClick={finishQuiz}
              disabled={!hasAnswered}
              className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center bg-indigo-600 text-white text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-indigo-500 disabled:opacity-20 transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20 tracking-wide"
            >
              TARAMAYI BİTİR
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!hasAnswered}
              className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center gap-2 bg-white text-black text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-slate-200 disabled:bg-white/10 disabled:text-white/30 transition-all active:scale-[0.98] tracking-wide"
            >
              SONRAKİ
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
