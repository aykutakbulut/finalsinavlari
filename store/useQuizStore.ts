import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { QuizState, Question } from "../types/quiz";
import { lessons } from "./questions";

const fisherYatesShuffle = <T>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Hem soruların sırasını hem her sorunun şıklarını karıştırır.
// correctAnswer string referansı değişmediğinden cevap kontrolü hâlâ doğru çalışır.
const shuffleQuestionsWithOptions = (questions: Question[]): Question[] =>
  fisherYatesShuffle(questions).map((q) => ({
    ...q,
    options: fisherYatesShuffle(q.options),
  }));

const findLesson = (id: string | null) =>
  id ? lessons.find((l) => l.id === id) : undefined;

export const getActiveQuestions = (state: QuizState): Question[] => {
  if (state.isMyWrongsMode) return state.myWrongsQuestions;
  if (state.isWrongAnswersMode) return state.wrongQuestions;
  if (state.shuffledQuestions) return state.shuffledQuestions;
  return findLesson(state.selectedLessonId)?.questions ?? [];
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      lessons,
      selectedLessonId: null,
      activeQuestionIndex: 0,
      userAnswers: {},
      isQuizFinished: false,
      isWrongAnswersMode: false,
      wrongQuestions: [],
      shuffledQuestions: null,

      studyMode: "none",
      studyLessonId: null,
      studyQuestionIndex: 0,
      studyShuffled: null,

      playerId: null,
      playerName: null,
      playerAvatar: null,
      competitionLessonId: null,

      wrongAnswersBank: [],
      consecutiveFullCount: 0,
      isMyWrongsMode: false,
      myWrongsQuestions: [],

      selectLesson: (lessonId) =>
        set({
          selectedLessonId: lessonId,
          activeQuestionIndex: 0,
          userAnswers: {},
          isQuizFinished: false,
          isWrongAnswersMode: false,
          wrongQuestions: [],
          shuffledQuestions: null,
        }),

      goToLessonSelection: () =>
        set({
          selectedLessonId: null,
          activeQuestionIndex: 0,
          userAnswers: {},
          isQuizFinished: false,
          isWrongAnswersMode: false,
          wrongQuestions: [],
          shuffledQuestions: null,
        }),

      answerQuestion: (questionId, answer) =>
        set((state) => ({
          userAnswers: { ...state.userAnswers, [questionId]: answer },
        })),

      nextQuestion: () =>
        set((state) => {
          const list = getActiveQuestions(state);
          if (state.activeQuestionIndex < list.length - 1) {
            return { activeQuestionIndex: state.activeQuestionIndex + 1 };
          }
          return {};
        }),

      prevQuestion: () =>
        set((state) => {
          if (state.activeQuestionIndex > 0) {
            return { activeQuestionIndex: state.activeQuestionIndex - 1 };
          }
          return {};
        }),

      // Sınavda belirli bir soruya atla (0 tabanlı index, listeye göre sınırlanır).
      jumpToQuestion: (index) =>
        set((state) => {
          const list = getActiveQuestions(state);
          const clamped = Math.max(0, Math.min(index, list.length - 1));
          return { activeQuestionIndex: clamped };
        }),

      finishQuiz: () =>
        set((state) => {
          const list = getActiveQuestions(state);
          const newWrongQs = list.filter(
            (q) => state.userAnswers[q.id] !== q.correctAnswer,
          );

          // --- Yanlışlarım bankası mantığı ---
          // isMyWrongsMode'daysa bankayı güncelleme (kendi içinde döngü)
          if (state.isMyWrongsMode) {
            // Yanlışlarım modunda yanlış kalmadıysa — bankadaki tüm sorular
            // başarıyla çözüldü demektir. Ama bankayı silmiyoruz; banka ancak
            // normal sınavda 3 ardışık full ile silinir.
            return { isQuizFinished: true, wrongQuestions: newWrongQs };
          }

          let nextBank = [...state.wrongAnswersBank];
          let nextConsecutive = state.consecutiveFullCount;

          if (newWrongQs.length > 0) {
            // Yanlış var → bankaya ekle (FIFO, max 3)
            const lesson = findLesson(state.selectedLessonId);
            const session = {
              lessonId: state.selectedLessonId ?? "unknown",
              lessonTitle: lesson?.title ?? "Bilinmeyen",
              questions: newWrongQs,
              timestamp: Date.now(),
            };
            nextBank = [...nextBank, session];
            if (nextBank.length > 3) {
              nextBank = nextBank.slice(nextBank.length - 3); // en eski düşer
            }
            nextConsecutive = 0; // ardışık full sayacı sıfırlanır
          } else {
            // Full geçti → sayaç artar
            nextConsecutive = nextConsecutive + 1;
            if (nextConsecutive >= 3) {
              // 3 ardışık full → banka temizlenir
              nextBank = [];
              nextConsecutive = 0;
            }
          }

          return {
            isQuizFinished: true,
            wrongQuestions: newWrongQs,
            wrongAnswersBank: nextBank,
            consecutiveFullCount: nextConsecutive,
          };
        }),

      shuffleQuestions: () =>
        set((state) => {
          const base = findLesson(state.selectedLessonId)?.questions ?? [];
          return {
            shuffledQuestions: shuffleQuestionsWithOptions(base),
            activeQuestionIndex: 0,
            userAnswers: {},
          };
        }),

      restartQuiz: () =>
        set({
          activeQuestionIndex: 0,
          userAnswers: {},
          isQuizFinished: false,
          isWrongAnswersMode: false,
          wrongQuestions: [],
          shuffledQuestions: null,
        }),

      retryWrongAnswers: () =>
        set({
          activeQuestionIndex: 0,
          userAnswers: {},
          isQuizFinished: false,
          isWrongAnswersMode: true,
        }),

      startStudyMode: (lessonId, mode) =>
        set({
          studyMode: mode,
          studyLessonId: lessonId,
          studyQuestionIndex: 0,
          studyShuffled: null, // her başlangıçta orijinal sıra
        }),

      exitStudyMode: () =>
        set({
          studyMode: "none",
          studyLessonId: null,
          studyQuestionIndex: 0,
          studyShuffled: null,
        }),

      nextStudyQuestion: () =>
        set((state) => {
          const lesson = lessons.find((l) => l.id === state.studyLessonId);
          const total = lesson?.questions.length ?? 0;
          if (state.studyQuestionIndex < total - 1) {
            return { studyQuestionIndex: state.studyQuestionIndex + 1 };
          }
          return {};
        }),

      prevStudyQuestion: () =>
        set((state) => {
          if (state.studyQuestionIndex > 0) {
            return { studyQuestionIndex: state.studyQuestionIndex - 1 };
          }
          return {};
        }),

      shuffleStudyQuestions: () =>
        set((state) => {
          const base =
            lessons.find((l) => l.id === state.studyLessonId)?.questions ?? [];
          return {
            studyShuffled: shuffleQuestionsWithOptions(base),
            studyQuestionIndex: 0,
          };
        }),

      setPlayerProfile: (name, avatar) =>
        set({ playerName: name, playerAvatar: avatar }),

      setPlayerId: (id) => set({ playerId: id }),

      enterCompetition: (lessonId) =>
        set({ competitionLessonId: lessonId }),

      exitCompetition: () => set({ competitionLessonId: null }),

      startMyWrongsMode: () =>
        set((state) => {
          // Tüm oturumların yanlışlarını birleştir, id'ye göre deduplicate
          const seen = new Set<number>();
          const merged: Question[] = [];
          for (const session of state.wrongAnswersBank) {
            for (const q of session.questions) {
              if (!seen.has(q.id)) {
                seen.add(q.id);
                merged.push(q);
              }
            }
          }
          return {
            isMyWrongsMode: true,
            myWrongsQuestions: shuffleQuestionsWithOptions(merged),
            selectedLessonId: "__my_wrongs__",
            activeQuestionIndex: 0,
            userAnswers: {},
            isQuizFinished: false,
            isWrongAnswersMode: false,
            wrongQuestions: [],
            shuffledQuestions: null,
          };
        }),

      exitMyWrongsMode: () =>
        set({
          isMyWrongsMode: false,
          myWrongsQuestions: [],
          selectedLessonId: null,
          activeQuestionIndex: 0,
          userAnswers: {},
          isQuizFinished: false,
          isWrongAnswersMode: false,
          wrongQuestions: [],
          shuffledQuestions: null,
        }),
    }),
    {
      name: "quiz-state-v2",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        selectedLessonId: state.selectedLessonId,
        activeQuestionIndex: state.activeQuestionIndex,
        userAnswers: state.userAnswers,
        isQuizFinished: state.isQuizFinished,
        isWrongAnswersMode: state.isWrongAnswersMode,
        wrongQuestions: state.wrongQuestions,
        shuffledQuestions: state.shuffledQuestions,
        studyMode: state.studyMode,
        studyLessonId: state.studyLessonId,
        studyQuestionIndex: state.studyQuestionIndex,
        studyShuffled: state.studyShuffled,
        playerId: state.playerId,
        playerName: state.playerName,
        playerAvatar: state.playerAvatar,
        wrongAnswersBank: state.wrongAnswersBank,
        consecutiveFullCount: state.consecutiveFullCount,
      }),
    },
  ),
);
