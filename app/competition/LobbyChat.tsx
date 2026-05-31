"use client";

import { useEffect, useRef, useState } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

/* Lobi sohbeti — Supabase Realtime *Broadcast* ile efemera (DB yok, kalıcılık
   yok). Her lobi kendi kanalını kullanır (`lobby-chat-<matchId>`); maç başlayıp
   bileşen unmount olunca kanal kapanır, mesaj kalmaz. */

// Liderlik tablosundaki ilk 3'ün ünvanı (CompetitionRoom ile aynı).
export type ChatTier = "reis" | "king" | "kingo";

type ChatMsg = {
  id: string;
  username: string;
  avatar: string;
  text: string;
  ts: number;
  tier?: ChatTier | null;
  self?: boolean;
};

const MAX_MESSAGES = 100; // bellekte tutulan en çok mesaj (efemera)
const MAX_LEN = 300;

// Ünvan stilleri — rozet + avatar çerçevesi (özel kenarlık).
const TIERS: Record<
  ChatTier,
  { label: string; badge: string; ring: string; crown?: string }
> = {
  reis: {
    label: "Reis",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    ring: "ring-2 ring-amber-400/70 bg-amber-500/10",
    crown: "👑",
  },
  king: {
    label: "King",
    badge: "bg-slate-300/20 text-slate-200 border-slate-300/40",
    ring: "ring-2 ring-slate-300/70 bg-slate-300/10",
  },
  kingo: {
    label: "Kingo",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    ring: "ring-2 ring-orange-400/70 bg-orange-500/10",
  },
};

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function LobbyChat({
  matchId,
  username,
  avatar,
  tier,
}: {
  matchId: string;
  username: string;
  avatar: string;
  tier?: ChatTier | null;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [unread, setUnread] = useState(0);
  const [text, setText] = useState("");

  const openRef = useRef(open);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // `open`'ı ref'e yansıt — broadcast callback'i kapanışta güncel değeri görsün.
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Broadcast kanalı kur.
  useEffect(() => {
    if (!matchId) return;
    const channel = supabase.channel(`lobby-chat-${matchId}`, {
      config: { broadcast: { self: false } },
    });
    channel
      .on("broadcast", { event: "message" }, ({ payload }) => {
        const msg = payload as ChatMsg;
        setMessages((prev) => [...prev, msg].slice(-MAX_MESSAGES));
        // Panel kapalıyken gelen mesaj okunmamış sayılır.
        if (!openRef.current) setUnread((u) => u + 1);
      })
      .subscribe();
    channelRef.current = channel;

    return () => {
      channelRef.current = null;
      supabase.removeChannel(channel);
    };
  }, [matchId]);

  // Yeni mesajda / panel açılınca en alta kaydır.
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const openChat = () => {
    setOpen(true);
    setUnread(0);
  };

  const send = () => {
    const t = text.trim();
    if (!t || !channelRef.current) return;
    const msg: ChatMsg = {
      id: newId(),
      username,
      avatar,
      text: t.slice(0, MAX_LEN),
      ts: Date.now(),
      tier: tier ?? null,
    };
    channelRef.current.send({
      type: "broadcast",
      event: "message",
      payload: msg,
    });
    // self:false olduğu için kendi mesajımızı yerel olarak ekliyoruz.
    setMessages((prev) => [...prev, { ...msg, self: true }].slice(-MAX_MESSAGES));
    setText("");
  };

  return (
    <>
      {/* ── Yüzen mesaj ikonu + okunmamış sayacı ───────────────────────── */}
      {!open && (
        <button
          onClick={openChat}
          aria-label="Lobi sohbetini aç"
          className="fixed z-40 bottom-6 right-4 w-14 h-14 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(217,70,239,0.45)] border border-fuchsia-400/40 hover:bg-fuchsia-500 hover:scale-105 active:scale-95 transition-all"
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.2A7.6 7.6 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {unread > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[1.375rem] h-[1.375rem] px-1.5 flex items-center justify-center rounded-full bg-rose-500 text-white text-[11px] font-black border-2 border-[#050505] shadow-lg animate-in zoom-in duration-200">
              {unread > 99 ? "99+" : unread}
            </span>
          )}
        </button>
      )}

      {/* ── Tama yakın sohbet ekranı ──────────────────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-2 sm:inset-4 flex flex-col rounded-3xl border border-fuchsia-500/20 bg-[#0a0a0a]/95 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 safe-area">
            {/* Başlık */}
            <header className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                <span className="text-sm font-black tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-purple-300">
                  Lobi Sohbeti
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Sohbeti kapat"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
              >
                <svg
                  className="w-5 h-5"
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
            </header>

            {/* Mesajlar */}
            <div
              ref={scrollRef}
              className="flex-1 min-h-0 overflow-y-auto px-3 py-3 flex flex-col gap-2.5"
            >
              {messages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 text-slate-500">
                  <span className="text-3xl">💬</span>
                  <p className="text-sm">İlk mesajı sen yaz! 👋</p>
                  <p className="text-[11px] text-slate-600">
                    Mesajlar kaydedilmez — sadece lobidekiler görür.
                  </p>
                </div>
              ) : (
                messages.map((m) => {
                  const tierStyle = m.tier ? TIERS[m.tier] : null;
                  return (
                    <div
                      key={m.id}
                      className={`flex items-end gap-2 ${
                        m.self ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {/* Avatar — ünvanlıysa özel çerçeve + taç */}
                      {tierStyle ? (
                        <span
                          className={`relative shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-lg leading-none mb-1 ${tierStyle.ring}`}
                        >
                          {m.avatar}
                          {tierStyle.crown && (
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[11px] leading-none">
                              {tierStyle.crown}
                            </span>
                          )}
                        </span>
                      ) : (
                        <span className="text-xl shrink-0 leading-none mb-1">
                          {m.avatar}
                        </span>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-3 py-2 ${
                          m.self
                            ? "bg-fuchsia-600 text-white rounded-br-md"
                            : "bg-white/[0.06] text-slate-100 border border-white/[0.06] rounded-bl-md"
                        }`}
                      >
                        {!m.self && (
                          <p className="flex items-center gap-1.5 mb-0.5">
                            {tierStyle && (
                              <span
                                className={`px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-md border ${tierStyle.badge}`}
                              >
                                {tierStyle.label}
                              </span>
                            )}
                            <span className="text-[10px] font-bold text-fuchsia-300/90 truncate">
                              {m.username}
                            </span>
                          </p>
                        )}
                        {m.self && tierStyle && (
                          <p className="flex justify-end mb-0.5">
                            <span
                              className={`px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-md border ${tierStyle.badge}`}
                            >
                              {tierStyle.label}
                            </span>
                          </p>
                        )}
                        <p className="text-sm leading-snug break-words whitespace-pre-wrap">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Giriş */}
            <div className="shrink-0 border-t border-white/10 p-3 flex items-center gap-2 bg-white/[0.02]">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    send();
                  }
                }}
                maxLength={MAX_LEN}
                placeholder="Mesaj yaz…"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-base text-slate-100 placeholder:text-slate-500 outline-none focus:border-fuchsia-500/50 focus:bg-white/[0.07] transition-all"
              />
              <button
                onClick={send}
                disabled={!text.trim()}
                aria-label="Gönder"
                className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:bg-fuchsia-500 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19V5M5 12l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
