"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { NoteBlock, NoteLesson } from "@/types/notes";

// ── Liste ekranı renk paleti (page.tsx'teki ACCENT_STYLES ile aynı dil) ───────
// NOT: Bu yalnızca konu LİSTESİ ekranında kullanılır; uygulamanın koyu temasıyla
// bütünlük için aynı kalır. Asıl OKUMA ekranı aşağıdaki READ_THEMES ile çalışır.
type AccentKey = NoteLesson["accent"];
const ACCENT: Record<
  AccentKey,
  { chip: string; text: string; ring: string; glow: string }
> = {
  indigo: {
    chip: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    text: "text-indigo-300",
    ring: "border-indigo-500/30 hover:border-indigo-400/60",
    glow: "bg-indigo-600/20",
  },
  fuchsia: {
    chip: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    text: "text-fuchsia-300",
    ring: "border-fuchsia-500/30 hover:border-fuchsia-400/60",
    glow: "bg-fuchsia-600/20",
  },
  emerald: {
    chip: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    text: "text-emerald-300",
    ring: "border-emerald-500/30 hover:border-emerald-400/60",
    glow: "bg-emerald-600/20",
  },
  amber: {
    chip: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    text: "text-amber-300",
    ring: "border-amber-500/30 hover:border-amber-400/60",
    glow: "bg-amber-600/20",
  },
  sky: {
    chip: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    text: "text-sky-300",
    ring: "border-sky-500/30 hover:border-sky-400/60",
    glow: "bg-sky-600/20",
  },
};

// ── OKUMA TEMALARI ────────────────────────────────────────────────────────────
// Uzun okuma konforu için: saf siyah yerine yumuşak koyu nötr, sıcak off-white
// metin, daha büyük gövde. Renkler CSS değişkenleriyle veriliyor; tema değişince
// tüm okuma alanı anında uyum sağlar. SADECE notların okuma ekranını etkiler.
type ReadTheme = "dark" | "sepia" | "light";

const READ_THEMES: Record<
  ReadTheme,
  { label: string; next: ReadTheme; icon: string; vars: CSSProperties }
> = {
  dark: {
    label: "Koyu",
    next: "sepia",
    icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    vars: {
      "--rd-bg": "#0e0f12",
      "--rd-fg": "#d7d3cb",
      "--rd-heading": "#f5f4f1",
      "--rd-muted": "#8b8a85",
      "--rd-accent": "#6b9d8a",
      "--rd-accent-strong": "#79d4b4",
      "--rd-soft-bg": "rgba(121,212,180,0.08)",
      "--rd-soft-border": "rgba(121,212,180,0.20)",
      "--rd-card-bg": "rgba(255,255,255,0.03)",
      "--rd-border": "rgba(255,255,255,0.09)",
      "--rd-header-bg": "rgba(14,15,18,0.88)",
      "--rd-progress-track": "rgba(255,255,255,0.06)",
      "--rd-progress-bar": "#79d4b4",
    } as CSSProperties,
  },
  sepia: {
    label: "Sepya",
    next: "light",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    vars: {
      "--rd-bg": "#f3ead6",
      "--rd-fg": "#4a3f31",
      "--rd-heading": "#332a1f",
      "--rd-muted": "#8a7b63",
      "--rd-accent": "#a8804a",
      "--rd-accent-strong": "#8a5a28",
      "--rd-soft-bg": "rgba(138,90,40,0.10)",
      "--rd-soft-border": "rgba(138,90,40,0.24)",
      "--rd-card-bg": "rgba(90,60,25,0.06)",
      "--rd-border": "rgba(80,58,32,0.20)",
      "--rd-header-bg": "rgba(243,234,214,0.90)",
      "--rd-progress-track": "rgba(80,58,32,0.14)",
      "--rd-progress-bar": "#a8804a",
    } as CSSProperties,
  },
  light: {
    label: "Açık",
    next: "dark",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    vars: {
      "--rd-bg": "#faf9f6",
      "--rd-fg": "#33312c",
      "--rd-heading": "#1c1b18",
      "--rd-muted": "#7c7a73",
      "--rd-accent": "#4f9e85",
      "--rd-accent-strong": "#2f8a6b",
      "--rd-soft-bg": "rgba(47,138,107,0.08)",
      "--rd-soft-border": "rgba(47,138,107,0.22)",
      "--rd-card-bg": "rgba(0,0,0,0.035)",
      "--rd-border": "rgba(0,0,0,0.10)",
      "--rd-header-bg": "rgba(250,249,246,0.90)",
      "--rd-progress-track": "rgba(0,0,0,0.08)",
      "--rd-progress-bar": "#2f8a6b",
    } as CSSProperties,
  },
};

const THEME_STORAGE_KEY = "notesReadTheme";

// Callout türlerine sabit, orta tonlu renkler — hem koyu hem açık temada okunur.
// "key" türü temanın kendi accent'ini kullanır.
const CALLOUT_TONE: Record<"info" | "tip" | "warn", { color: string; icon: string }> = {
  info: {
    color: "#5f8fb5",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  tip: {
    color: "#4ea47c",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  warn: {
    color: "#c08a3c",
    icon: "M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z",
  },
};

const KEY_ICON = "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z";

// ── Tek bir blok ──────────────────────────────────────────────────────────────
// Renkler tema CSS değişkenlerinden (--rd-*) gelir; böylece tek bir görünüm tüm
// temalarda doğru renge bürünür.
const Block = memo(function Block({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="first:mt-0 mt-9 mb-4 text-[1.45rem] sm:text-[1.65rem] font-black tracking-tight leading-snug flex items-center gap-3 text-[color:var(--rd-heading)]">
          <span
            className="w-1.5 h-7 rounded-full shrink-0"
            style={{ backgroundColor: "var(--rd-accent)" }}
          />
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="first:mt-0 mt-7 mb-3 text-lg sm:text-xl font-bold tracking-tight text-[color:var(--rd-heading)]">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="first:mt-0 mb-5 text-[16.5px] sm:text-[17px] leading-[1.75] whitespace-pre-line text-[color:var(--rd-fg)]">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="first:mt-0 mb-5 flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-[0.62rem] w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "var(--rd-accent)" }}
              />
              <span className="text-[16px] sm:text-[16.5px] leading-[1.7] text-[color:var(--rd-fg)]">
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
                className="shrink-0 w-7 h-7 rounded-xl border flex items-center justify-center text-xs font-black"
                style={{
                  backgroundColor: "var(--rd-soft-bg)",
                  borderColor: "var(--rd-soft-border)",
                  color: "var(--rd-accent-strong)",
                }}
              >
                {i + 1}
              </span>
              <span className="pt-0.5 text-[16px] sm:text-[16.5px] leading-[1.7] text-[color:var(--rd-fg)]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const variant = block.variant ?? "info";
      const isKey = variant === "key";
      const tone = isKey ? "var(--rd-accent-strong)" : CALLOUT_TONE[variant].color;
      const iconPath = isKey ? KEY_ICON : CALLOUT_TONE[variant].icon;
      return (
        <div
          className="first:mt-0 my-6 rounded-2xl border p-4 sm:p-5"
          style={{
            backgroundColor: isKey ? "var(--rd-soft-bg)" : "var(--rd-card-bg)",
            borderColor: "var(--rd-border)",
            borderLeftWidth: "4px",
            borderLeftColor: tone,
          }}
        >
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 shrink-0 mt-0.5"
              style={{ color: tone }}
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
                  className="text-xs font-bold tracking-wider uppercase mb-1.5"
                  style={{ color: tone }}
                >
                  {block.title}
                </p>
              )}
              <p className="text-[15.5px] sm:text-[16px] leading-[1.7] whitespace-pre-line text-[color:var(--rd-fg)]">
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
          className="first:mt-0 my-6 rounded-2xl border overflow-hidden"
          style={{
            backgroundColor: "var(--rd-soft-bg)",
            borderColor: "var(--rd-soft-border)",
          }}
        >
          {block.title && (
            <div className="px-5 pt-4 pb-2">
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--rd-accent-strong)" }}
              >
                {block.title}
              </p>
            </div>
          )}
          <div className="px-3 pb-3 pt-1 sm:px-4 flex flex-col gap-1.5">
            {block.rows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 rounded-xl px-3.5 py-3 border"
                style={{
                  backgroundColor: row.highlight
                    ? "var(--rd-soft-bg)"
                    : "var(--rd-card-bg)",
                  borderColor: row.highlight
                    ? "var(--rd-soft-border)"
                    : "transparent",
                }}
              >
                <span
                  className={`text-sm sm:text-[15px] ${row.highlight ? "font-bold" : "font-medium"}`}
                  style={{
                    color: row.highlight ? "var(--rd-heading)" : "var(--rd-muted)",
                  }}
                >
                  {row.label}
                </span>
                <span
                  className={`shrink-0 tabular-nums tracking-tight ${
                    row.highlight
                      ? "text-lg sm:text-xl font-black"
                      : "text-base sm:text-lg font-bold"
                  }`}
                  style={{
                    color: row.highlight
                      ? "var(--rd-accent-strong)"
                      : "var(--rd-heading)",
                  }}
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
        <div
          className="first:mt-0 my-6 rounded-2xl border overflow-hidden"
          style={{ borderColor: "var(--rd-border)" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--rd-card-bg)" }}>
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-xs font-bold tracking-wider uppercase border-b"
                      style={{
                        color: "var(--rd-accent-strong)",
                        borderColor: "var(--rd-border)",
                      }}
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
                    className="border-b last:border-0"
                    style={{ borderColor: "var(--rd-border)" }}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-3 text-[14.5px] sm:text-[15px] leading-[1.6] align-top ${
                          ci === 0 ? "font-semibold" : ""
                        }`}
                        style={{
                          color:
                            ci === 0 ? "var(--rd-heading)" : "var(--rd-fg)",
                        }}
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
        <figure
          className="first:mt-0 my-6 pl-4 sm:pl-5 border-l-2"
          style={{ borderColor: "var(--rd-soft-border)" }}
        >
          <blockquote className="text-[16.5px] sm:text-lg italic leading-[1.7] text-[color:var(--rd-heading)]">
            “{block.text}”
          </blockquote>
          {block.cite && (
            <figcaption className="mt-2 text-sm text-[color:var(--rd-muted)]">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );

    case "divider":
      return (
        <hr
          className="first:mt-0 my-8 border-0 h-px"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent, var(--rd-border), transparent)",
          }}
        />
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
            className="w-full rounded-2xl border"
            style={{ borderColor: "var(--rd-border)" }}
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-[color:var(--rd-muted)]">
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
  const [readTheme, setReadTheme] = useState<ReadTheme>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return saved === "sepia" || saved === "light" || saved === "dark"
      ? saved
      : "dark";
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const topic = topicIndex !== null ? lesson.topics[topicIndex] : null;
  const total = lesson.topics.length;
  const theme = READ_THEMES[readTheme];

  // Tema tercihini hatırla
  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, readTheme);
    } catch {
      // localStorage erişilemezse sessizce geç
    }
  }, [readTheme]);

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
    () => setTopicIndex((i) => (i !== null && i < total - 1 ? i + 1 : i)),
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

  // ============================ PDF GÖRÜNTÜLEYICI ============================
  // pdfUrl tanımlıysa blok/konu sistemi yerine tam ekran PDF göster.
  if (lesson.pdfUrl) {
    return (
      <div className="h-[100dvh] w-full flex flex-col overflow-hidden relative bg-[#050505] text-slate-200 safe-area">
        {/* Arka plan efektleri */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[30vh] ${a.glow} blur-[100px] pointer-events-none rounded-full`}
        />

        {/* Sticky header */}
        <div className="shrink-0 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04] z-20">
          <div className="w-full max-w-5xl mx-auto px-4 py-3 flex items-center gap-2">
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
            <span className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-amber-500/10 text-amber-400 border-amber-500/20 flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              PDF
            </span>

            {/* İndir butonu */}
            <a
              href={lesson.pdfUrl}
              download
              className="ml-auto shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-amber-500/10 text-amber-300 border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-400/40 hover:text-amber-200 active:scale-95 transition-all"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              İndir
            </a>
          </div>
        </div>

        {/* PDF embed alanı */}
        <div className="flex-1 min-h-0 w-full z-10 flex flex-col">
          {/* Masaüstü: doğrudan iframe */}
          <iframe
            src={lesson.pdfUrl}
            title={`${lesson.title} — PDF`}
            className="w-full flex-1 min-h-0 border-0 bg-white/5 hidden sm:block"
            style={{ colorScheme: "dark" }}
          />
          {/* Mobil: Google Docs Viewer fallback (çoğu mobil tarayıcı iframe PDF desteklemez) */}
          <div className="flex-1 min-h-0 flex flex-col sm:hidden">
            <iframe
              src={`https://docs.google.com/gview?embedded=true&url=${typeof window !== "undefined" ? window.location.origin : ""}${lesson.pdfUrl}`}
              title={`${lesson.title} — PDF`}
              className="w-full flex-1 min-h-0 border-0 bg-white/5"
              style={{ colorScheme: "dark" }}
            />
            {/* Alternatif olarak tarayıcıda aç */}
            <div className="shrink-0 px-4 py-3 flex justify-center">
              <a
                href={lesson.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm font-bold hover:bg-amber-500/25 hover:border-amber-400/50 active:scale-95 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Tarayıcıda Aç
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================ KONU LİSTESİ ===============================
  // (Uygulamanın koyu temasıyla bütünlük için bilinçli olarak app stilinde.)
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
    <div
      style={theme.vars}
      className="h-[100dvh] w-full flex flex-col overflow-hidden relative safe-area bg-[var(--rd-bg)] transition-colors duration-300"
    >
      {/* Okuma ilerleme çubuğu (yumuşak, parlamasız) */}
      <div
        className="absolute top-0 left-0 w-full h-1 z-50"
        style={{ backgroundColor: "var(--rd-progress-track)" }}
      >
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${progress * 100}%`,
            backgroundColor: "var(--rd-progress-bar)",
          }}
        />
      </div>

      {/* Sticky header */}
      <div
        className="shrink-0 w-full backdrop-blur-xl border-b z-20 transition-colors duration-300"
        style={{
          backgroundColor: "var(--rd-header-bg)",
          borderColor: "var(--rd-border)",
        }}
      >
        <div className="w-full max-w-3xl mx-auto px-4 py-3 flex items-center gap-2">
          <button
            onClick={() => setTopicIndex(null)}
            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border active:scale-95 transition-all"
            style={{
              backgroundColor: "var(--rd-card-bg)",
              borderColor: "var(--rd-border)",
              color: "var(--rd-fg)",
            }}
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
            className="px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate"
            style={{
              backgroundColor: "var(--rd-soft-bg)",
              borderColor: "var(--rd-soft-border)",
              color: "var(--rd-accent-strong)",
            }}
          >
            {lesson.title}
          </span>

          {/* Tema değiştirme */}
          <button
            onClick={() => setReadTheme(theme.next)}
            aria-label={`Okuma teması: ${theme.label} — değiştir`}
            className="ml-auto shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border active:scale-95 transition-all"
            style={{
              backgroundColor: "var(--rd-card-bg)",
              borderColor: "var(--rd-border)",
              color: "var(--rd-fg)",
            }}
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
                strokeWidth="2"
                d={theme.icon}
              />
            </svg>
            {theme.label}
          </button>

          <span
            className="shrink-0 text-[clamp(12px,1.5dvh,14px)] font-semibold"
            style={{ color: "var(--rd-muted)" }}
          >
            <span style={{ color: "var(--rd-heading)" }}>{topicIndex + 1}</span>{" "}
            / {total}
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
          <h1 className="text-[1.75rem] sm:text-[2.1rem] font-black tracking-tight leading-[1.15] mb-6 text-[color:var(--rd-heading)]">
            {topic.title}
          </h1>

          <div className="flex flex-col">
            {topic.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* Alt navigasyon */}
          <div
            className="mt-10 pt-6 border-t flex items-center justify-between gap-3"
            style={{ borderColor: "var(--rd-border)" }}
          >
            <button
              onClick={goPrev}
              disabled={isFirst}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl border text-sm font-semibold disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
              style={{
                backgroundColor: "var(--rd-card-bg)",
                borderColor: "var(--rd-border)",
                color: "var(--rd-fg)",
              }}
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
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border text-sm font-bold tracking-wide active:scale-[0.98] transition-all"
                style={{
                  backgroundColor: "var(--rd-soft-bg)",
                  borderColor: "var(--rd-soft-border)",
                  color: "var(--rd-accent-strong)",
                }}
              >
                Konulara Dön
              </button>
            ) : (
              <button
                onClick={goNext}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold tracking-wide active:scale-[0.98] transition-all"
                style={{
                  backgroundColor: "var(--rd-heading)",
                  color: "var(--rd-bg)",
                }}
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

