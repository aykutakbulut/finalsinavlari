import { config } from "dotenv";
config({ path: ".env.local" });
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL, { prepare: false });

async function migrate() {
  console.log("🔄 Migrating database for lobby ready system...");

  await sql`
    ALTER TABLE matches
    ADD COLUMN IF NOT EXISTS lobby_countdown_starts_at timestamptz
  `;
  console.log("  ✅ matches: lobby_countdown_starts_at eklendi");

  await sql`
    ALTER TABLE match_players
    ADD COLUMN IF NOT EXISTS is_ready boolean NOT NULL DEFAULT false
  `;
  console.log("  ✅ match_players: is_ready eklendi");

  console.log("🎉 Migration tamamlandı!");
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ Migration hatası:", err);
  process.exit(1);
});
