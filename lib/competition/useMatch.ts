"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { MatchStatus } from "./config";

// Supabase satırları snake_case döner.
export type MatchRow = {
  id: string;
  lesson_id: string;
  status: MatchStatus;
  question_ids: number[];
  starts_at: string | null;
  votes_questions: Record<string, string> | null;
  votes_timer: Record<string, string> | null;
  question_count: number | null;
  question_time_limit_ms: number | null;
  current_question_index: number;
  question_started_at: string | null;
  question_ends_at: string | null;
  reveal_ends_at: string | null;
  created_at: string;
  finished_at: string | null;
};

export type MatchPlayerRow = {
  id: string;
  match_id: string;
  player_id: string;
  name: string;
  avatar: string;
  score: number;
  answered_current: boolean;
  finished_at: string | null;
  joined_at: string;
};

// Bir maçın canlı durumunu (maç satırı + oyuncular) döner.
export function useMatch(matchId: string | null) {
  const [match, setMatch] = useState<MatchRow | null>(null);
  const [parts, setParts] = useState<MatchPlayerRow[]>([]);

  useEffect(() => {
    if (!matchId) {
      setMatch(null);
      setParts([]);
      return;
    }
    let active = true;

    const loadMatch = async () => {
      const { data } = await supabase
        .from("matches")
        .select("*")
        .eq("id", matchId)
        .single();
      if (active && data) setMatch(data as MatchRow);
    };
    const loadParts = async () => {
      const { data } = await supabase
        .from("match_players")
        .select("*")
        .eq("match_id", matchId)
        // Katılım sırasına göre sabit sıra — seed ile aynı, ızgara titremez.
        .order("joined_at", { ascending: true });
      if (active && data) setParts(data as MatchPlayerRow[]);
    };

    loadMatch();
    loadParts();

    const channel = supabase
      .channel(`match-${matchId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "matches",
          filter: `id=eq.${matchId}`,
        },
        (payload) => {
          if (payload.new) setMatch(payload.new as MatchRow);
        },
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "match_players",
          filter: `match_id=eq.${matchId}`,
        },
        () => {
          loadParts();
        },
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [matchId]);

  return { match, parts };
}
