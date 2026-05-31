// Yarışma kuralları — tek kaynak. Hem istemci (sayaç/önizleme) hem sunucu
// (otoriter puanlama) bu sabitleri kullanır.

export const COMPETITION_CONFIG = {
  // ── Oylama ──
  votingDurationMs: 5_000, // Her oylama fazı 5 saniye

  // Soru sayısı seçenekleri — oylama sonucu belirler.
  // "all" = dersin tüm soruları, 30 = rastgele 30
  questionCountOptions: ["all", "30"] as const,
  defaultQuestionCount: "30" as "all" | "30",

  // Süre seçenekleri (ms) — oylama sonucu belirler.
  timeLimitOptions: [10_000, 15_000] as const,
  defaultTimeLimitMs: 10_000,

  // ── Geri sayım ──
  startCountdownMs: 3_000, // 3-2-1 Başla!

  // ── Soru arası ──
  revealDurationMs: 4_000, // Doğru cevap + mini skor (4 sn)

  // ── Puanlama (Kahoot tarzı) ──
  maxPointsPerQuestion: 1000,
  wrongPenalty: 0, // yanlış = 0 puan (ceza yok)
  timeoutScore: 0, // süre doldu = 0 puan

  // ── Lobi / eşleşme ──
  // Bu sayıya ulaşınca geri sayım başlar; her yeni katılan onu sıfırlar.
  lobbyCountdownTarget: 10,
  // Geri sayım süresi (10 kişi dolunca / her yeni katılımda 30 sn).
  lobbyCountdownMs: 30_000,
  // Bu sayıya ulaşınca beklemeden anında başlar (kapasite tavanı).
  lobbyHardCap: 20,
  // Başlamak için gereken en az oyuncu sayısı.
  lobbyMinPlayers: 2,
  // 10 kişinin altındaki lobilerde bu oranda oyuncu hazır olunca başlar
  // (AFK kilidi olmasın diye; geri sayım yalnızca 10 kişide devreye girer).
  lobbyReadyRatio: 0.7,
} as const;

/**
 * Doğru cevabın puanı — Kahoot formülü:
 *   puan = maxPoints × (1 - (elapsed / timeLimit) / 2)
 *
 * En hızlı → 1000, en yavaş → 500. Yanlış → 0.
 * `elapsedMs`: sorunun herkese gösterildiği andan cevaba kadar geçen süre.
 * `timeLimitMs`: oylama sonucu belirlenen süre (10s veya 15s).
 * Sunucuda hesaplanır (hile önlenir).
 */
export function scoreForCorrect(
  elapsedMs: number,
  timeLimitMs: number,
): number {
  const max = COMPETITION_CONFIG.maxPointsPerQuestion;
  const ratio = Math.min(Math.max(elapsedMs, 0) / timeLimitMs, 1);
  return Math.round(max * (1 - ratio / 2));
}

export type MatchStatus =
  | "waiting" // oyuncular toplanıyor (lobi)
  | "voting_questions" // soru sayısı oylaması (5 sn)
  | "voting_timer" // süre oylaması (5 sn)
  | "countdown" // 3-2-1 başla
  | "active" // soru gösteriliyor, cevaplar bekleniyor
  | "reveal" // doğru cevap + mini skor
  | "finished"; // bitti, skor tablosu
