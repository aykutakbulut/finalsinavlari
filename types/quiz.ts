export type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  accent: "indigo" | "fuchsia" | "emerald" | "amber" | "sky";
  questions: Question[];
};

/** Bir sınav oturumunun yanlış sorularını tutan yapı */
export type WrongSession = {
  lessonId: string;
  lessonTitle: string;
  questions: Question[];
  timestamp: number;
};

export interface QuizState {
  lessons: Lesson[];
  selectedLessonId: string | null;
  activeQuestionIndex: number;
  userAnswers: Record<number, string>;
  isQuizFinished: boolean;
  isWrongAnswersMode: boolean;
  wrongQuestions: Question[];
  shuffledQuestions: Question[] | null;

  studyMode: "none" | "list" | "reveal";
  studyLessonId: string | null;
  studyQuestionIndex: number;
  studyShuffled: Question[] | null;

  playerId: string | null;
  playerName: string | null;
  playerAvatar: string | null;
  competitionLessonId: string | null;

  /** Yanlış oturumları — ders başına en fazla 3 oturum tutulur (FIFO) */
  wrongAnswersBank: WrongSession[];
  /** Ders bazında ardışık full (yanlış=0) sayacı — 3 olunca o dersin yanlışları temizlenir */
  consecutiveFullByLesson: Record<string, number>;
  /** Yanlışlarım modu aktif mi */
  isMyWrongsMode: boolean;
  /** Yanlışlarım modundaki birleştirilmiş sorular */
  myWrongsQuestions: Question[];

  selectLesson: (lessonId: string) => void;
  goToLessonSelection: () => void;
  answerQuestion: (questionId: number, answer: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  finishQuiz: () => void;
  restartQuiz: () => void;
  retryWrongAnswers: () => void;
  shuffleQuestions: () => void;
  jumpToQuestion: (index: number) => void;
  startStudyMode: (lessonId: string, mode: "list" | "reveal") => void;
  exitStudyMode: () => void;
  nextStudyQuestion: () => void;
  prevStudyQuestion: () => void;
  shuffleStudyQuestions: () => void;
  setPlayerProfile: (name: string, avatar: string) => void;
  setPlayerId: (id: string) => void;
  enterCompetition: (lessonId: string) => void;
  exitCompetition: () => void;
  startMyWrongsMode: (lessonId: string) => void;
  exitMyWrongsMode: () => void;

  isUnlocked: boolean;
  setUnlocked: (val: boolean) => void;
}
