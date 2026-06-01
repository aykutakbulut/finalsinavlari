"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { NoteBlock, NoteLesson } from "@/types/notes";

// ── Renk paleti (page.tsx'teki ACCENT_STYLES ile aynı dil) ────────────────────
type AccentKey = NoteLesson["accent"];
const ACCENT: Record<
  AccentKey,
  {
    chip: string;
    text: string;
    ring: string;
    glow: string;
    bar: string;
    dot: string;
    soft: string; // yumuşak arka plan + kenarlık (callout/stat için)
  }
> = {
  indigo: {
    chip: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    text: "text-indigo-300",
    ring: "border-indigo-500/30 hover:border-indigo-400/60",
    glow: "bg-indigo-600/20",
    bar: "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    dot: "bg-indigo-400",
    soft: "bg-indigo-500/10 border-indigo-500/25",
  },
  fuchsia: {
    chip: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    text: "text-fuchsia-300",
    ring: "border-fuchsia-500/30 hover:border-fuchsia-400/60",
    glow: "bg-fuchsia-600/20",
    bar: "bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]",
    dot: "bg-fuchsia-400",
    soft: "bg-fuchsia-500/10 border-fuchsia-500/25",
  },
  emerald: {
    chip: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    text: "text-emerald-300",
    ring: "border-emerald-500/30 hover:border-emerald-400/60",
    glow: "bg-emerald-600/20",
    bar: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]",
    dot: "bg-emerald-400",
    soft: "bg-emerald-500/10 border-emerald-500/25",
  },
  amber: {
    chip: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    text: "text-amber-300",
    ring: "border-amber-500/30 hover:border-amber-400/60",
    glow: "bg-amber-600/20",
    bar: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]",
    dot: "bg-amber-400",
    soft: "bg-amber-500/10 border-amber-500/25",
  },
  sky: {
    chip: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    text: "text-sky-300",
    ring: "border-sky-500/30 hover:border-sky-400/60",
    glow: "bg-sky-600/20",
    bar: "bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]",
    dot: "bg-sky-400",
    soft: "bg-sky-500/10 border-sky-500/25",
  },
};

// Callout türlerine sabit renkler (key → dersin accent'i)
const CALLOUT: Record<
  "info" | "tip" | "warn",
  { wrap: string; label: string; icon: string }
> = {
  info: {
    wrap: "bg-sky-500/[0.07] border-sky-500/25",
    label: "text-sky-300",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  tip: {
    wrap: "bg-emerald-500/[0.07] border-emerald-500/25",
    label: "text-emerald-300",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  warn: {
    wrap: "bg-amber-500/[0.07] border-amber-500/25",
    label: "text-amber-300",
    icon: "M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z",
  },
};

// ── Tek bir blok ──────────────────────────────────────────────────────────────
const Block = memo(function Block({
  block,
  accent,
}: {
  block: NoteBlock;
  accent: AccentKey;
}) {
  const a = ACCENT[accent];

  switch (block.type) {
    case "heading":
      return (
        <h2 className="first:mt-0 mt-9 mb-4 text-[1.5rem] sm:text-[1.7rem] font-black text-white tracking-tight leading-snug flex items-center gap-3">
          <span className={`w-1.5 h-7 rounded-full ${a.bar} shrink-0`} />
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="first:mt-0 mt-7 mb-3 text-lg sm:text-xl font-bold text-slate-100 tracking-tight">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="first:mt-0 mb-5 text-[15.5px] sm:text-[16.5px] text-slate-300/95 leading-[1.8] whitespace-pre-line">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="first:mt-0 mb-5 flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`mt-[0.6rem] w-1.5 h-1.5 rounded-full ${a.dot} shrink-0`}
              />
              <span className="text-[15.5px] sm:text-base text-slate-300/95 leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "ordered":
      return (
        <ol className="first:mt-0 mb-5 flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3.5">
              <span
                className={`shrink-0 w-7 h-7 rounded-xl border flex items-center justify-center text-xs font-black ${a.chip}`}
              >
                {i + 1}
              </span>
              <span className="pt-0.5 text-[15.5px] sm:text-base text-slate-300/95 leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const variant = block.variant ?? "info";
      const isKey = variant === "key";
      const wrap = isKey ? a.soft : CALLOUT[variant].wrap;
      const label = isKey ? a.text : CALLOUT[variant].label;
      const iconPath = isKey
        ? "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        : CALLOUT[variant].icon;
      return (
        <div
          className={`first:mt-0 my-6 rounded-2xl border p-4 sm:p-5 backdrop-blur-sm ${wrap}`}
        >
          <div className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${label}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.9"
                d={iconPath}
              />
            </svg>
            <div className="min-w-0">
              {block.title && (
                <p
                  className={`text-xs font-bold tracking-wider uppercase mb-1.5 ${label}`}
                >
                  {block.title}
                </p>
              )}
              <p className="text-[15px] sm:text-base text-slate-200/90 leading-[1.7] whitespace-pre-line">
                {block.text}
              </p>
            </div>
          </div>
        </div>
      );
    }

    case "stat":
      return (
        <div
          className={`first:mt-0 my-6 rounded-2xl border ${a.soft} overflow-hidden backdrop-blur-sm`}
        >
          {block.title && (
            <div className="px-5 pt-4 pb-2">
              <p
                className={`text-xs font-bold tracking-widest uppercase ${a.text}`}
              >
                {block.title}
              </p>
            </div>
          )}
          <div className="px-3 pb-3 pt-1 sm:px-4 flex flex-col gap-1.5">
            {block.rows.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-between gap-4 rounded-xl px-3.5 py-3 ${
                  row.highlight
                    ? `${a.soft} border`
                    : "bg-white/[0.02] border border-transparent"
                }`}
              >
                <span
                  className={`text-sm sm:text-[15px] ${
                    row.highlight
                      ? "font-bold text-white"
                      : "font-medium text-slate-400"
                  }`}
                >
                  {row.label}
                </span>
                <span
                  className={`shrink-0 tabular-nums tracking-tight ${
                    row.highlight
                      ? `text-lg sm:text-xl font-black ${a.text}`
                      : "text-base sm:text-lg font-bold text-slate-100"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case "table":
      return (
        <div className="first:mt-0 my-6 rounded-2xl border border-white/[0.08] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.04]">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-xs font-bold tracking-wider uppercase ${a.text} border-b border-white/[0.08]`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="odd:bg-white/[0.01] border-b border-white/[0.05] last:border-0"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-3 text-[14.5px] leading-[1.6] align-top ${
                          ci === 0
                            ? "font-semibold text-slate-100"
                            : "text-slate-300/90"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "quote":
      return (
        <figure className="first:mt-0 my-6 pl-4 sm:pl-5 border-l-2 border-white/15">
          <blockquote className="text-[16px] sm:text-lg italic text-slate-200/90 leading-[1.7]">
            “{block.text}”
          </blockquote>
          {block.cite && (
            <figcaption className="mt-2 text-sm text-slate-500">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );

    case "divider":
      return (
        <hr className="first:mt-0 my-8 border-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      );

    case "image":
      return (
        <figure className="first:mt-0 my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.caption ?? ""}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-white/10"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-slate-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
});

// ── Ana okuyucu ───────────────────────────────────────────────────────────────
export default function NotesReader({
  lesson,
  onExit,
}: {
  lesson: NoteLesson;
  onExit: () => void;
}) {
  const a = ACCENT[lesson.accent];
  // null → konu listesi, sayı → o konunun okuma ekranı
  const [topicIndex, setTopicIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const topic = topicIndex !== null ? lesson.topics[topicIndex] : null;
  const total = lesson.topics.length;

  // Okuma kaydırma ilerlemesi — passive + rAF ile jank'sız.
  const handleScroll = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = scrollRef.current;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 1);
    });
  }, []);

  // Konu değişince başa sar + ilerlemeyi sıfırla.
  useEffect(() => {
    if (topicIndex === null) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    // Konu değişimi dış bir olay; ilerlemeyi yeni içeriğe eşitliyoruz.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(0);
  }, [topicIndex]);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const goPrev = useCallback(
    () => setTopicIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const goNext = useCallback(
    () =>
      setTopicIndex((i) => (i !== null && i < total - 1 ? i + 1 : i)),
    [total],
  );

  // Okuma ekranında klavye okları
  useEffect(() => {
    if (topicIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setTopicIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [topicIndex, goNext, goPrev]);

  // ============================ KONU LİSTESİ ===============================
  if (topic === null || topicIndex === null) {
    return (
      <div className="min-h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col relative selection:bg-emerald-500/30 overflow-y-auto safe-area">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] ${a.glow} blur-[100px] pointer-events-none rounded-full`}
        />

        {/* Sticky header */}
        <div className="sticky top-0 z-20 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04]">
          <div className="w-full max-w-3xl mx-auto px-4 py-3 flex items-center gap-2">
            <button
              onClick={onExit}
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Geri
            </button>
            <span
              className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate ${a.chip}`}
            >
              {lesson.title}
            </span>
            <span className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Notlar
            </span>
            <span className="ml-auto shrink-0 text-xs text-slate-500 font-semibold">
              {total} konu
            </span>
          </div>
        </div>

        {/* İçerik */}
        <div className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 z-10 flex flex-col">
          <header className="mb-8 text-center">
            <h1 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              {lesson.title}
            </h1>
            <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
              {lesson.description}
            </p>
          </header>

          <div className="grid gap-3 sm:gap-4">
            {lesson.topics.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setTopicIndex(i)}
                className={`group relative text-left backdrop-blur-xl border-2 rounded-3xl overflow-hidden bg-white/[0.03] ${a.ring} hover:bg-white/[0.05] transition-all duration-300 p-5 sm:p-6 active:scale-[0.99]`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 ${a.glow} blur-3xl rounded-full pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity`}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border flex items-center justify-center font-black text-base ${a.chip}`}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-white">
                      {t.title}
                    </h2>
                    {t.summary && (
                      <p className="text-xs sm:text-sm mt-0.5 text-slate-400 line-clamp-2">
                        {t.summary}
                      </p>
                    )}
                  </div>
                  <svg
                    className={`shrink-0 w-6 h-6 ${a.text} transition-transform group-hover:translate-x-1`}
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
                </div>
              </button>
            ))}
          </div>

          <footer className="mt-auto pt-10 pb-4 text-center text-[11px] text-slate-600">
            {total} konu · İlerlemen tarayıcında kalır
          </footer>
        </div>
      </div>
    );
  }

  // ============================ OKUMA EKRANI ===============================
  const isFirst = topicIndex === 0;
  const isLast = topicIndex === total - 1;

  return (
    <div className="h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-hidden relative selection:bg-emerald-500/30 safe-area">
      {/* Okuma ilerleme çubuğu */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className={`h-full ${a.bar} transition-[width] duration-150 ease-out`}
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Sticky header */}
      <div className="shrink-0 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04] z-20">
        <div className="w-full max-w-3xl mx-auto px-4 py-3 flex items-center gap-2">
          <button
            onClick={() => setTopicIndex(null)}
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
            Konular
          </button>
          <span
            className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate ${a.chip}`}
          >
            {lesson.title}
          </span>
          <span className="ml-auto shrink-0 text-[clamp(12px,1.5dvh,14px)] font-semibold text-slate-400">
            <span className="text-white">{topicIndex + 1}</span> / {total}
          </span>
        </div>
      </div>

      {/* Kaydırılabilir içerik */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
      >
        <article className="w-full max-w-2xl mx-auto px-5 sm:px-6 pt-7 pb-4">
          <h1 className="text-[1.75rem] sm:text-[2.1rem] font-black text-white tracking-tight leading-[1.15] mb-6">
            {topic.title}
          </h1>

          <div className="flex flex-col">
            {topic.blocks.map((block, i) => (
              <Block key={i} block={block} accent={lesson.accent} />
            ))}
          </div>

          {/* Alt navigasyon */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
            <button
              onClick={goPrev}
              disabled={isFirst}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/[0.08] hover:text-white disabled:opacity-20 disabled:pointer-events-none active:scale-95 transition-all"
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
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Önceki
            </button>

            {isLast ? (
              <button
                onClick={() => setTopicIndex(null)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border text-sm font-bold tracking-wide active:scale-[0.98] transition-all ${a.chip} hover:brightness-125`}
              >
                Konulara Dön
              </button>
            ) : (
              <button
                onClick={goNext}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-black text-sm font-bold tracking-wide hover:bg-slate-200 active:scale-[0.98] transition-all"
              >
                Sonraki Konu
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
        </article>
      </div>
    </div>
  );
}
