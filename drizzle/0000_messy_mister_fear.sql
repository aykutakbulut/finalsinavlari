CREATE TABLE "match_answers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"match_id" uuid NOT NULL,
	"player_id" uuid NOT NULL,
	"question_index" integer NOT NULL,
	"question_id" integer NOT NULL,
	"answer" text,
	"is_correct" boolean DEFAULT false NOT NULL,
	"awarded" integer DEFAULT 0 NOT NULL,
	"answered_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "answer_unique" UNIQUE("match_id","player_id","question_index")
);
--> statement-breakpoint
CREATE TABLE "match_players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"match_id" uuid NOT NULL,
	"player_id" uuid NOT NULL,
	"name" text NOT NULL,
	"avatar" text NOT NULL,
	"score" integer DEFAULT 0 NOT NULL,
	"answered_current" boolean DEFAULT false NOT NULL,
	"finished_at" timestamp with time zone,
	"joined_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "match_player_unique" UNIQUE("match_id","player_id")
);
--> statement-breakpoint
CREATE TABLE "matches" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lesson_id" text NOT NULL,
	"status" text DEFAULT 'waiting' NOT NULL,
	"question_ids" jsonb NOT NULL,
	"starts_at" timestamp with time zone,
	"votes_questions" jsonb DEFAULT '{}'::jsonb,
	"votes_timer" jsonb DEFAULT '{}'::jsonb,
	"question_count" integer,
	"question_time_limit_ms" integer,
	"current_question_index" integer DEFAULT -1 NOT NULL,
	"question_started_at" timestamp with time zone,
	"question_ends_at" timestamp with time zone,
	"reveal_ends_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"finished_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"avatar" text NOT NULL,
	"total_score" integer DEFAULT 0 NOT NULL,
	"matches_played" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "match_answers" ADD CONSTRAINT "match_answers_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_answers" ADD CONSTRAINT "match_answers_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_players" ADD CONSTRAINT "match_players_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_players" ADD CONSTRAINT "match_players_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "match_players_match_idx" ON "match_players" USING btree ("match_id");--> statement-breakpoint
CREATE INDEX "matches_lesson_status_idx" ON "matches" USING btree ("lesson_id","status");