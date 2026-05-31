// Mevcut tablolara yeni sütunları ekler (Kahoot-tarzı senkronize quiz için).
// Çalıştır: node scripts/migrate-sync-quiz.mjs

import { config } from "dotenv";
config({ path: ".env.local" });
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL, { prepare: false });

async function migrate() {
  console.log("🔄 Migrating database for sync quiz...");

  // ── matches tablosu: yeni sütunlar ──
  await sql`
    ALTER TABLE matches
    ADD COLUMN IF NOT EXISTS votes_questions jsonb DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS votes_timer jsonb DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS question_count integer,
    ADD COLUMN IF NOT EXISTS question_time_limit_ms integer,
    ADD COLUMN IF NOT EXISTS current_question_index integer NOT NULL DEFAULT -1,
    ADD COLUMN IF NOT EXISTS question_started_at timestamptz,
    ADD COLUMN IF NOT EXISTS question_ends_at timestamptz,
    ADD COLUMN IF NOT EXISTS reveal_ends_at timestamptz
  `;
  console.log("  ✅ matches: yeni sütunlar eklendi");

  // ── matches tablosu: eski finishes_at sütununu kaldır ──
  await sql`
    ALTER TABLE matches
    DROP COLUMN IF EXISTS finishes_at
  `;
  console.log("  ✅ matches: finishes_at kaldırıldı");

  // ── match_players tablosu: yeni sütun ──
  await sql`
    ALTER TABLE match_players
    ADD COLUMN IF NOT EXISTS answered_current boolean NOT NULL DEFAULT false
  `;
  console.log("  ✅ match_players: answered_current eklendi");

  // ── match_players tablosu: eski sütunları kaldır ──
  await sql`
    ALTER TABLE match_players
    DROP COLUMN IF EXISTS current_question_index,
    DROP COLUMN IF EXISTS question_started_at
  `;
  console.log("  ✅ match_players: eski sütunlar kaldırıldı");

  // ── Eski aktif maçları temizle (varsa) ──
  await sql`
    DELETE FROM matches WHERE status NOT IN ('finished')
  `;
  console.log("  ✅ Bitmemiş eski maçlar temizlendi");

  console.log("🎉 Migration tamamlandı!");
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ Migration hatası:", err);
  process.exit(1);
});
