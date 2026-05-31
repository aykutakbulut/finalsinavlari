import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  index,
  unique,
} from "drizzle-orm/pg-core";

// Kalıcı oyuncu kaydı — skor buraya birikir, silinmez.
export const players = pgTable("players", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  avatar: text("avatar").notNull(),
  totalScore: integer("total_score").notNull().default(0),
  matchesPlayed: integer("matches_played").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Bir yarışma oturumu.
export const matches = pgTable(
  "matches",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    lessonId: text("lesson_id").notNull(),
    // waiting | voting_questions | voting_timer | countdown | active | reveal | finished
    status: text("status").notNull().default("waiting"),
    // Maçın sabit, sıralı soru kimlikleri (herkes aynı sırada görür)
    questionIds: jsonb("question_ids").$type<number[]>().notNull(),
    // Geri sayım bitip oylama/yarışma başlayacağı an
    startsAt: timestamp("starts_at", { withTimezone: true }),

    // ── Oylama sonuçları ──
    // {playerId: "all"|"30"}
    votesQuestions: jsonb("votes_questions")
      .$type<Record<string, string>>()
      .default({}),
    // {playerId: "10000"|"15000"}
    votesTimer: jsonb("votes_timer")
      .$type<Record<string, string>>()
      .default({}),
    // Oylama sonucu belirlenen değerler
    questionCount: integer("question_count"), // all ise dersin soru sayısı, yoksa 30
    questionTimeLimitMs: integer("question_time_limit_ms"), // 10000 veya 15000

    // ── Senkronize soru ilerlemesi (herkes aynı anda aynı soruyu görür) ──
    currentQuestionIndex: integer("current_question_index")
      .notNull()
      .default(-1), // -1 = başlamadı
    questionStartedAt: timestamp("question_started_at", {
      withTimezone: true,
    }), // Soru başlangıcı (herkes için aynı)
    questionEndsAt: timestamp("question_ends_at", { withTimezone: true }), // Soru bitiş zamanı
    revealEndsAt: timestamp("reveal_ends_at", { withTimezone: true }), // Reveal bitiş zamanı

    // 10 kişi ulaşıldığında 30 sn geri sayımın başladığı an
    lobbyCountdownStartsAt: timestamp("lobby_countdown_starts_at", { withTimezone: true }),

    // Bitiş zamanları
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    finishedAt: timestamp("finished_at", { withTimezone: true }),
  },
  (t) => [index("matches_lesson_status_idx").on(t.lessonId, t.status)],
);

// Bir maçtaki bir oyuncunun anlık durumu (realtime ile yayınlanır).
export const matchPlayers = pgTable(
  "match_players",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    matchId: uuid("match_id")
      .notNull()
      .references(() => matches.id, { onDelete: "cascade" }),
    playerId: uuid("player_id")
      .notNull()
      .references(() => players.id, { onDelete: "cascade" }),
    // Gösterim için kopyalanır (her seferinde join gerekmesin)
    name: text("name").notNull(),
    avatar: text("avatar").notNull(),
    score: integer("score").notNull().default(0),
    // Lobi %70 hazır kuralı için
    isReady: boolean("is_ready").notNull().default(false),
    // Bu soruyu cevapladı mı (her soru başında false'a sıfırlanır)
    answeredCurrent: boolean("answered_current").notNull().default(false),
    finishedAt: timestamp("finished_at", { withTimezone: true }),
    joinedAt: timestamp("joined_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    unique("match_player_unique").on(t.matchId, t.playerId),
    index("match_players_match_idx").on(t.matchId),
  ],
);

// Tek tek cevaplar — çift cevabı (unique) ve denetimi engeller.
export const matchAnswers = pgTable(
  "match_answers",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    matchId: uuid("match_id")
      .notNull()
      .references(() => matches.id, { onDelete: "cascade" }),
    playerId: uuid("player_id")
      .notNull()
      .references(() => players.id, { onDelete: "cascade" }),
    questionIndex: integer("question_index").notNull(),
    questionId: integer("question_id").notNull(),
    answer: text("answer"), // null = süre doldu (cevapsız)
    isCorrect: boolean("is_correct").notNull().default(false),
    awarded: integer("awarded").notNull().default(0), // bu cevaptan alınan puan
    answeredAt: timestamp("answered_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [unique("answer_unique").on(t.matchId, t.playerId, t.questionIndex)],
);

export type Player = typeof players.$inferSelect;
export type Match = typeof matches.$inferSelect;
export type MatchPlayer = typeof matchPlayers.$inferSelect;
export type MatchAnswer = typeof matchAnswers.$inferSelect;
