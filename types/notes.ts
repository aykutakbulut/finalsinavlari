import type { Lesson } from "./quiz";

// Notlar sistemi — questions.ts ile aynı mantık, ama soru yerine "blok" tabanlı
// okunabilir içerik. Her not bir bloklar dizisinden oluşur; render katmanı
// (NotesReader) her blok tipini kendi şık görünümünde çizer.
//
// Yeni blok tipi eklemek istersen: buraya union'a ekle + NoteBlocks.tsx içinde
// o tipin render'ını yaz. Veri (store/notes.ts) hiç değişmeden kalır.

export type NoteBlock =
  // Büyük bölüm başlığı
  | { type: "heading"; text: string }
  // Ara başlık
  | { type: "subheading"; text: string }
  // Düz paragraf (\n ile satır kırabilirsin)
  | { type: "paragraph"; text: string }
  // Madde imli liste
  | { type: "list"; items: string[] }
  // Numaralı / sıralı liste
  | { type: "ordered"; items: string[] }
  // Dikkat çekici kutu. variant: bilgi / ipucu / uyarı / anahtar bilgi
  | {
      type: "callout";
      variant?: "info" | "tip" | "warn" | "key";
      title?: string;
      text: string;
    }
  // Sayı/istatistik kartı — finansal rakamlar için ideal (ör. ihracat tablosu).
  // highlight: true olan satır vurgulanır (ör. "Toplam").
  | {
      type: "stat";
      title?: string;
      rows: { label: string; value: string; highlight?: boolean }[];
    }
  // Karşılaştırma tablosu
  | { type: "table"; headers: string[]; rows: string[][] }
  // Alıntı / önemli söz
  | { type: "quote"; text: string; cite?: string }
  // Ayraç çizgi
  | { type: "divider" }
  // Görsel (public/ altındaki yol). caption opsiyonel açıklama.
  | { type: "image"; src: string; caption?: string };

export type NoteTopic = {
  id: number;
  title: string;
  /** Konu listesinde başlığın altında görünen kısa açıklama (opsiyonel) */
  summary?: string;
  blocks: NoteBlock[];
};

export type NoteLesson = {
  id: string;
  title: string;
  description: string;
  /** Soru derslerindeki ile aynı renk paleti */
  accent: Lesson["accent"];
  topics: NoteTopic[];
};
