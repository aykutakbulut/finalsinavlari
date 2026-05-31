"use client";

import { useMemo } from "react";

// Soru metninde "  I. text  II. text" şeklinde satır içi gömülü Romen rakamı
// maddelerini otomatik tespit eder. JSON değişmez — sadece render katmanında.
//
// Sütun kararı: en uzun madde > 30 karakter → 2 sütun, ≤ 30 → 3 sütun.
// Böylece kısa maddeler (I, II, III, IV, V) 3'lü, uzunlar (uzun ifadeler) 2'li dizilir.

const ITEM_RE = /[ \t]{2,}(XV|XIV|XIII|XII|XI|IX|VIII|VII|VI|IV|III|II|X|V|I)\. /g;
const ITEM_LINE_RE = /^(XV|XIV|XIII|XII|XI|IX|VIII|VII|VI|IV|III|II|X|V|I)\. /;

function parse(text: string): { preamble: string; items: string[] | null } {
  const normalized = text.replace(ITEM_RE, "\n$1. ");
  const lines = normalized.split("\n").map((l) => l.trim()).filter(Boolean);
  const firstIdx = lines.findIndex((l) => ITEM_LINE_RE.test(l));
  if (firstIdx === -1) return { preamble: text, items: null };
  return {
    preamble: lines.slice(0, firstIdx).join("\n"),
    items: lines.slice(firstIdx),
  };
}

type Props = { text: string; className?: string };

export function QuestionText({ text, className = "" }: Props) {
  const { preamble, items } = useMemo(() => parse(text), [text]);

  if (!items) {
    return (
      <p className={`whitespace-pre-line ${className}`}>{preamble}</p>
    );
  }

  // Romen rakamı önekini (ör. "III. ") çıkarıp sadece içerik harflerini say,
  // ortalaması 10'dan fazlaysa 2 sütun, değilse 3 sütun.
  const avgContentLen =
    items.reduce((sum, item) => {
      const content = item.replace(/^(XV|XIV|XIII|XII|XI|IX|VIII|VII|VI|IV|III|II|X|V|I)\.\s*/, "");
      return sum + content.length;
    }, 0) / items.length;
  const colCount = avgContentLen > 10 ? 2 : 3;
  const gridCols = colCount === 2 ? "grid-cols-2" : "grid-cols-3";
  // Son eleman satırda tek kalıyorsa (items.length % colCount === 1) ortalanır.
  const lastAlone = items.length % colCount === 1;

  return (
    <div className={className}>
      <p className="whitespace-pre-line mb-2">{preamble}</p>
      <div className={`grid ${gridCols} gap-x-4 gap-y-1 text-[0.875em]`}>
        {items.map((item, i) => (
          <span
            key={i}
            className={lastAlone && i === items.length - 1 ? "col-span-full text-center" : ""}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
