"use server";

import { db } from "@/lib/db";
import { players, matches, matchPlayers, matchAnswers } from "@/lib/db/schema";
import { and, eq, sql, asc, count, inArray } from "drizzle-orm";
import { lessons } from "@/store/questions";
import { COMPETITION_CONFIG, scoreForCorrect } from "@/lib/competition/config";
import type { MatchStatus } from "@/lib/competition/config";
import type { MatchRow, MatchPlayerRow } from "@/lib/competition/useMatch";

// ─── Drizzle → snake_case dönüştürücüler ────────────────────────────────────

function toMatchRow(m: typeof matches.$inferSelect): MatchRow {
  return {
    id: m.id,
    lesson_id: m.lessonId,
    status: m.status as MatchStatus,
    question_ids: m.questionIds,
    starts_at: m.startsAt ? m.startsAt.toISOString() : null,
    votes_questions: m.votesQuestions ?? null,
    votes_timer: m.votesTimer ?? null,
    question_count: m.questionCount ?? null,
    question_time_limit_ms: m.questionTimeLimitMs ?? null,
    current_question_index: m.currentQuestionIndex,
    question_started_at: m.questionStartedAt
      ? m.questionStartedAt.toISOString()
      : null,
    question_ends_at: m.questionEndsAt
      ? m.questionEndsAt.toISOString()
      : null,
    reveal_ends_at: m.revealEndsAt
      ? m.revealEndsAt.toISOString()
      : null,
    created_at: m.createdAt.toISOString(),
    finished_at: m.finishedAt ? m.finishedAt.toISOString() : null,
  };
}

function toMatchPlayerRow(p: typeof matchPlayers.$inferSelect): MatchPlayerRow {
  return {
    id: p.id,
    match_id: p.matchId,
    player_id: p.playerId,
    name: p.name,
    avatar: p.avatar,
    score: p.score,
    answered_current: p.answeredCurrent,
    finished_at: p.finishedAt ? p.finishedAt.toISOString() : null,
    joined_at: p.joinedAt.toISOString(),
  };
}

// ─── Soru seçimi (Fisher-Yates) ─────────────────────────────────────────────

function pickQuestionIds(lessonId: string, countStr: "all" | "30" = "30"): number[] {
  const lesson = lessons.find((l) => l.id === lessonId);
  const ids = (lesson?.questions ?? []).map((q) => q.id);

  // Fisher-Yates shuffle
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  if (countStr === "all") return ids;
  return ids.slice(0, Math.min(30, ids.length));
}

// ─── Profil al / güncelle ───────────────────────────────────────────────────

export async function claimProfile(input: {
  id?: string | null;
  name: string;
  avatar: string;
}): Promise<{ ok: true; id: string } | { ok: false; reason: "name_taken" }> {
  const name = input.name.trim().slice(0, 18) || "Yarışmacı";

  // İsim başka bir oyuncuda mı?
  const holders = await db
    .select({ id: players.id })
    .from(players)
    .where(sql`lower(${players.name}) = lower(${name})`)
    .limit(1);
  if (holders.length && holders[0].id !== input.id) {
    return { ok: false, reason: "name_taken" };
  }

  // Mevcut oyuncuyu güncelle
  if (input.id) {
    const existing = await db
      .select({ id: players.id })
      .from(players)
      .where(eq(players.id, input.id))
      .limit(1);
    if (existing.length) {
      try {
        await db
          .update(players)
          .set({ name, avatar: input.avatar })
          .where(eq(players.id, input.id));
      } catch {
        return { ok: false, reason: "name_taken" };
      }
      return { ok: true, id: input.id };
    }
  }

  // Yeni oyuncu
  try {
    const [row] = await db
      .insert(players)
      .values({ name, avatar: input.avatar })
      .returning({ id: players.id });
    return { ok: true, id: row.id };
  } catch {
    return { ok: false, reason: "name_taken" };
  }
}

// ─── Lobiye katıl ───────────────────────────────────────────────────────────

export async function joinCompetition(input: {
  lessonId: string;
  playerId: string;
  name: string;
  avatar: string;
}): Promise<{ matchId: string; match: MatchRow; players: MatchPlayerRow[] }> {
  return await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(hashtext(${input.lessonId}))`);

    // Bekleyen VEYA oylama aşamasındaki bir maça katıl.
    let [match] = await tx
      .select()
      .from(matches)
      .where(
        and(
          eq(matches.lessonId, input.lessonId),
          inArray(matches.status, ["waiting", "voting_questions", "voting_timer"]),
        ),
      )
      .orderBy(asc(matches.createdAt))
      .limit(1);

    if (!match) {
      const qids = pickQuestionIds(input.lessonId, COMPETITION_CONFIG.defaultQuestionCount);
      [match] = await tx
        .insert(matches)
        .values({
          lessonId: input.lessonId,
          status: "waiting",
          questionIds: qids,
          votesQuestions: {},
          votesTimer: {},
          currentQuestionIndex: -1,
        })
        .returning();
    }

    await tx
      .insert(matchPlayers)
      .values({
        matchId: match.id,
        playerId: input.playerId,
        name: input.name.trim().slice(0, 18) || "Yarışmacı",
        avatar: input.avatar,
      })
      .onConflictDoNothing();

    const roster = await tx
      .select()
      .from(matchPlayers)
      .where(eq(matchPlayers.matchId, match.id))
      .orderBy(asc(matchPlayers.joinedAt));

    return {
      matchId: match.id,
      match: toMatchRow(match),
      players: roster.map(toMatchPlayerRow),
    };
  });
}

// ─── Lobiden ayrıl ──────────────────────────────────────────────────────────

export async function leaveMatch(matchId: string, playerId: string): Promise<void> {
  const [match] = await db
    .select({ status: matches.status })
    .from(matches)
    .where(eq(matches.id, matchId))
    .limit(1);
  if (match?.status === "waiting") {
    await db
      .delete(matchPlayers)
      .where(
        and(
          eq(matchPlayers.matchId, matchId),
          eq(matchPlayers.playerId, playerId),
        ),
      );
  }
}

// ─── Oy gönder (soru sayısı veya süre) ─────────────────────────────────────

export async function submitVote(input: {
  matchId: string;
  playerId: string;
  voteType: "questions" | "timer";
  value: string;
}): Promise<void> {
  if (input.voteType === "questions") {
    await db
      .update(matches)
      .set({
        votesQuestions: sql`coalesce(${matches.votesQuestions}, '{}'::jsonb) || jsonb_build_object(${input.playerId}::text, ${input.value}::text)`,
      })
      .where(
        and(
          eq(matches.id, input.matchId),
          eq(matches.status, "voting_questions"),
        ),
      );
  } else {
    await db
      .update(matches)
      .set({
        votesTimer: sql`coalesce(${matches.votesTimer}, '{}'::jsonb) || jsonb_build_object(${input.playerId}::text, ${input.value}::text)`,
      })
      .where(
        and(
          eq(matches.id, input.matchId),
          eq(matches.status, "voting_timer"),
        ),
      );
  }
}

// ─── İç yardımcı: sıradaki soruya geç ──────────────────────────────────────

async function advanceToNextQuestion(
  matchId: string,
  match: typeof matches.$inferSelect,
): Promise<void> {
  const now = new Date();
  const nextIndex = match.currentQuestionIndex + 1;
  const timeLimitMs = match.questionTimeLimitMs ?? COMPETITION_CONFIG.defaultTimeLimitMs;
  const questionEndsAt = new Date(now.getTime() + timeLimitMs);

  await db
    .update(matches)
    .set({
      status: "active",
      currentQuestionIndex: nextIndex,
      questionStartedAt: now,
      questionEndsAt,
    })
    .where(eq(matches.id, matchId));

  // Tüm oyuncuların answeredCurrent bayrağını sıfırla
  await db
    .update(matchPlayers)
    .set({ answeredCurrent: false })
    .where(eq(matchPlayers.matchId, matchId));
}

// ─── Oy sayımı yardımcısı ──────────────────────────────────────────────────

function tallyVotes<T extends string>(
  votes: Record<string, string> | null | undefined,
  defaultValue: T,
): T {
  if (!votes || Object.keys(votes).length === 0) return defaultValue;
  const counts: Record<string, number> = {};
  for (const v of Object.values(votes)) {
    counts[v] = (counts[v] ?? 0) + 1;
  }
  let best = defaultValue as string;
  let bestCount = 0;
  for (const [val, cnt] of Object.entries(counts)) {
    if (cnt > bestCount) {
      best = val;
      bestCount = cnt;
    }
  }
  return best as T;
}

// ─── Tick: zaman temelli durum makinesi ─────────────────────────────────────

export async function tickMatch(matchId: string): Promise<void> {
  const [match] = await db
    .select()
    .from(matches)
    .where(eq(matches.id, matchId))
    .limit(1);
  if (!match) return;
  const now = Date.now();

  // ── waiting → voting_questions ──
  if (match.status === "waiting") {
    const [{ c }] = await db
      .select({ c: count() })
      .from(matchPlayers)
      .where(eq(matchPlayers.matchId, matchId));

    const reached = c >= COMPETITION_CONFIG.lobbyMaxBeforeFastStart;
    const ageMs = now - new Date(match.createdAt).getTime();
    const timedOut =
      c >= COMPETITION_CONFIG.lobbyMinForTimeout &&
      ageMs >= COMPETITION_CONFIG.lobbyTimeoutMs;

    if (reached || timedOut) {
      const startsAt = new Date(now + COMPETITION_CONFIG.votingDurationMs);
      await db
        .update(matches)
        .set({ status: "voting_questions", startsAt })
        .where(and(eq(matches.id, matchId), eq(matches.status, "waiting")));
    }
    return;
  }

  // ── voting_questions → voting_timer ──
  if (match.status === "voting_questions") {
    if (match.startsAt && now >= new Date(match.startsAt).getTime()) {
      // Oy sayımı: soru sayısı
      const winner = tallyVotes(
        match.votesQuestions,
        COMPETITION_CONFIG.defaultQuestionCount,
      );

      const lesson = lessons.find((l) => l.id === match.lessonId);
      const totalQuestions = lesson?.questions.length ?? 0;
      const questionCount = winner === "all" ? totalQuestions : Math.min(30, totalQuestions);

      // Soru sayısı değiştiyse questionIds'i yeniden seç
      let questionIds = match.questionIds;
      if (questionIds.length !== questionCount) {
        questionIds = pickQuestionIds(match.lessonId, winner);
      }

      const startsAt = new Date(now + COMPETITION_CONFIG.votingDurationMs);
      await db
        .update(matches)
        .set({
          status: "voting_timer",
          startsAt,
          questionCount,
          questionIds,
        })
        .where(
          and(eq(matches.id, matchId), eq(matches.status, "voting_questions")),
        );
    }
    return;
  }

  // ── voting_timer → countdown ──
  if (match.status === "voting_timer") {
    if (match.startsAt && now >= new Date(match.startsAt).getTime()) {
      // Oy sayımı: süre limiti
      const winner = tallyVotes(
        match.votesTimer,
        String(COMPETITION_CONFIG.defaultTimeLimitMs),
      );
      const questionTimeLimitMs = parseInt(winner, 10) || COMPETITION_CONFIG.defaultTimeLimitMs;

      const startsAt = new Date(now + COMPETITION_CONFIG.startCountdownMs);
      await db
        .update(matches)
        .set({
          status: "countdown",
          startsAt,
          questionTimeLimitMs,
        })
        .where(
          and(eq(matches.id, matchId), eq(matches.status, "voting_timer")),
        );
    }
    return;
  }

  // ── countdown → active (ilk soru) ──
  if (match.status === "countdown") {
    if (match.startsAt && now >= new Date(match.startsAt).getTime()) {
      const res = await db
        .update(matches)
        .set({ status: "active" })
        .where(and(eq(matches.id, matchId), eq(matches.status, "countdown")))
        .returning();
      if (res.length) {
        // Güncellendikten sonra yeni hali ile ilk soruya geç
        // currentQuestionIndex = -1 olduğu için advanceToNextQuestion 0'a çıkaracak
        await advanceToNextQuestion(matchId, res[0]);
      }
    }
    return;
  }

  // ── active → reveal (süre doldu) ──
  if (match.status === "active") {
    if (match.questionEndsAt && now >= new Date(match.questionEndsAt).getTime()) {
      // Cevap vermemiş oyuncular için null cevap kaydet
      const unanswered = await db
        .select({
          playerId: matchPlayers.playerId,
        })
        .from(matchPlayers)
        .where(
          and(
            eq(matchPlayers.matchId, matchId),
            eq(matchPlayers.answeredCurrent, false),
          ),
        );

      const qids = match.questionIds;
      const qid = qids[match.currentQuestionIndex] ?? 0;

      for (const u of unanswered) {
        try {
          await db.insert(matchAnswers).values({
            matchId,
            playerId: u.playerId,
            questionIndex: match.currentQuestionIndex,
            questionId: qid,
            answer: null,
            isCorrect: false,
            awarded: COMPETITION_CONFIG.timeoutScore,
          });
        } catch {
          // Çift cevap unique kısıtı — zaten kayıt var, devam
        }

        await db
          .update(matchPlayers)
          .set({
            score: sql`${matchPlayers.score} + ${COMPETITION_CONFIG.timeoutScore}`,
            answeredCurrent: true,
          })
          .where(
            and(
              eq(matchPlayers.matchId, matchId),
              eq(matchPlayers.playerId, u.playerId),
              eq(matchPlayers.answeredCurrent, false),
            ),
          );
      }

      const revealEndsAt = new Date(now + COMPETITION_CONFIG.revealDurationMs);
      await db
        .update(matches)
        .set({ status: "reveal", revealEndsAt })
        .where(and(eq(matches.id, matchId), eq(matches.status, "active")));
    }
    return;
  }

  // ── reveal → active (sonraki soru) veya finished ──
  if (match.status === "reveal") {
    if (match.revealEndsAt && now >= new Date(match.revealEndsAt).getTime()) {
      const questionCount = match.questionCount ?? match.questionIds.length;
      const nextIndex = match.currentQuestionIndex + 1;

      if (nextIndex >= questionCount) {
        // Tüm sorular bitti
        await finalizeMatch(matchId);
      } else {
        // Sonraki soruya geç
        await advanceToNextQuestion(matchId, match);
      }
    }
    return;
  }

  // ── finished: no-op ──
}

// ─── Cevap gönder ───────────────────────────────────────────────────────────

export async function submitAnswer(input: {
  matchId: string;
  playerId: string;
  questionIndex: number;
  answer: string | null;
}): Promise<{
  correct: boolean;
  awarded: number;
  correctAnswer: string;
  finished: boolean;
}> {
  const empty = { correct: false, awarded: 0, correctAnswer: "", finished: false };

  const [match] = await db
    .select()
    .from(matches)
    .where(eq(matches.id, input.matchId))
    .limit(1);
  if (!match || match.status !== "active") return empty;

  const [mp] = await db
    .select()
    .from(matchPlayers)
    .where(
      and(
        eq(matchPlayers.matchId, input.matchId),
        eq(matchPlayers.playerId, input.playerId),
      ),
    )
    .limit(1);
  if (!mp) return empty;

  // Zaten bu soruyu cevapladıysa reddet
  if (mp.answeredCurrent) return empty;

  // questionIndex maçın currentQuestionIndex'i ile eşleşmeli
  if (input.questionIndex !== match.currentQuestionIndex) return empty;

  const qids = match.questionIds;
  const qid = qids[input.questionIndex];
  const lesson = lessons.find((l) => l.id === match.lessonId);
  const question = lesson?.questions.find((q) => q.id === qid);
  const correctAnswer = question?.correctAnswer ?? "";

  // Süre hesabı — maçın questionStartedAt'ından (herkes için aynı)
  const startedAt = match.questionStartedAt
    ? new Date(match.questionStartedAt).getTime()
    : Date.now();
  const elapsed = Date.now() - startedAt;
  const timeLimitMs = match.questionTimeLimitMs ?? COMPETITION_CONFIG.defaultTimeLimitMs;
  const overTime = elapsed > timeLimitMs + 1500;

  let correct = false;
  let awarded = 0;
  if (input.answer === null || overTime) {
    awarded = COMPETITION_CONFIG.timeoutScore;
  } else if (input.answer === correctAnswer) {
    correct = true;
    awarded = scoreForCorrect(elapsed, timeLimitMs);
  } else {
    awarded = COMPETITION_CONFIG.wrongPenalty;
  }

  // Çift cevabı unique kısıtı engeller.
  try {
    await db.insert(matchAnswers).values({
      matchId: input.matchId,
      playerId: input.playerId,
      questionIndex: input.questionIndex,
      questionId: qid,
      answer: input.answer,
      isCorrect: correct,
      awarded,
    });
  } catch {
    return { correct, awarded: 0, correctAnswer, finished: false };
  }

  // Oyuncu durumunu güncelle
  await db
    .update(matchPlayers)
    .set({
      score: sql`${matchPlayers.score} + ${awarded}`,
      answeredCurrent: true,
    })
    .where(
      and(
        eq(matchPlayers.matchId, input.matchId),
        eq(matchPlayers.playerId, input.playerId),
      ),
    );

  // Herkes cevapladı mı? → erken reveal tetikle
  const [{ notAnswered }] = await db
    .select({ notAnswered: count() })
    .from(matchPlayers)
    .where(
      and(
        eq(matchPlayers.matchId, input.matchId),
        eq(matchPlayers.answeredCurrent, false),
      ),
    );

  if (notAnswered === 0) {
    // Herkesi cevapladı — questionEndsAt'ı şimdiye çek, tickMatch hemen reveal'e geçer
    await db
      .update(matches)
      .set({ questionEndsAt: new Date() })
      .where(
        and(
          eq(matches.id, input.matchId),
          eq(matches.status, "active"),
        ),
      );
  }

  return { correct, awarded, correctAnswer, finished: false };
}

// ─── Maçı bitir ─────────────────────────────────────────────────────────────

export async function finalizeMatch(matchId: string): Promise<void> {
  const res = await db
    .update(matches)
    .set({
      status: "finished",
      finishedAt: new Date(),
    })
    .where(
      and(
        eq(matches.id, matchId),
        // reveal VEYA active'den (son soru reveal sonrası) gelebilir
        inArray(matches.status, ["reveal", "active"]),
      ),
    )
    .returning({ id: matches.id });
  if (!res.length) return; // başka istemci bitirmiş

  const parts = await db
    .select()
    .from(matchPlayers)
    .where(eq(matchPlayers.matchId, matchId));

  for (const p of parts) {
    await db
      .update(players)
      .set({
        totalScore: sql`${players.totalScore} + ${p.score}`,
        matchesPlayed: sql`${players.matchesPlayed} + 1`,
      })
      .where(eq(players.id, p.playerId));
  }
}

// ─── Liderlik tablosu ───────────────────────────────────────────────────────

export async function getLeaderboard(): Promise<
  {
    id: string;
    name: string;
    avatar: string;
    totalScore: number;
    matchesPlayed: number;
  }[]
> {
  const rows = await db
    .select({
      id: players.id,
      name: players.name,
      avatar: players.avatar,
      totalScore: players.totalScore,
      matchesPlayed: players.matchesPlayed,
    })
    .from(players)
    .orderBy(sql`${players.totalScore} desc`)
    .limit(10);

  return rows;
}
