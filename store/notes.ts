import type { NoteLesson } from "../types/notes";

// ============================================================================
//  DERS NOTLARI
// ----------------------------------------------------------------------------
//  questions.ts ile birebir aynı mantık: dışa bir dizi (noteLessons) açıyoruz,
//  anasayfadaki "Notlar" sekmesi bunu otomatik listeliyor.
//
//  Yeni KONU eklemek için topics dizisine yeni bir { id, title, blocks } ekle.
//  Kullanabileceğin blok tipleri (types/notes.ts):
//    heading | subheading | paragraph | list | ordered | callout |
//    stat | table | quote | divider | image
//
//  Aşağıdaki içerik örnek/iskelet — üstüne yazarak kendi notlarınla doldur.
// ============================================================================

export const noteLessons: NoteLesson[] = [
  {
    id: "Finansal Okuryazarlık",
    title: "Finansal Okuryazarlık",
    description:
      "Para, bütçe, yatırım ve ekonomi temelleri — sınava hazırlık notları.",
    accent: "emerald",
    topics: [
      {
        id: 1,
        title: "Genel Kültür",
        summary: "Dış ticaret, ekonomi, piyasa ve şirket verileri",
        blocks: [
          {
            type: "heading",
            text: "Dış Ticaret Verileri",
          },
          {
            type: "stat",
            title: "Türkiye İhracat",
            rows: [
              { label: "Mal İhracatı", value: "273,4 milyar $" },
              { label: "Hizmet İhracatı", value: "122,6 milyar $" },
              { label: "Toplam İhracat", value: "396 milyar $", highlight: true },
            ],
          },
          {
            type: "table",
            headers: ["Kategori", "Ülke"],
            rows: [
              ["Türkiye en çok ihracat", "Almanya"],
              ["Türkiye en çok ithalat", "Çin"],
              ["Dünyada en çok ihracat", "Çin"],
              ["Dünyada en çok ithalat", "ABD"],
            ],
          },
          {
            type: "heading",
            text: "Ekonomi ve Piyasa Rakamları",
          },
          {
            type: "table",
            headers: ["Görev / Gösterge", "Kişi / Değer"],
            rows: [
              ["TCMB Başkanı", "Fatih Karahan"],
              ["Hazine ve Maliye Bakanı", "Mehmet Şimşek"],
              ["TCMB Politika Faizi", "%37"],
              ["TÜFE — Aylık", "%4,18"],
              ["TÜFE — Yıllık", "%32,37"],
            ],
          },
          {
            type: "stat",
            title: "Piyasa Verileri",
            rows: [
              { label: "BIST 100", value: "13.703,96 puan" },
              { label: "Dolar", value: "45,90 TL" },
              { label: "Euro", value: "53,37 TL" },
              { label: "Sterlin", value: "61,74 TL" },
              { label: "Ons Altın", value: "4.465 $" },
              { label: "Gram Altın", value: "6.665 TL", highlight: true },
              { label: "Brent Petrol", value: "94,22 $" },
            ],
          },
          {
            type: "heading",
            text: "Şirketler, Sıralamalar ve Satın Almalar",
          },
          {
            type: "table",
            headers: ["Kategori", "Şirket / Bilgi"],
            rows: [
              ["Türkiye'nin en değerli şirketi", "Aselsan"],
              ["Türkiye'nin en büyük sanayi şirketi", "TÜPRAŞ"],
              ["Türkiye'nin en büyük otomotiv şirketi", "Ford Otosan"],
              ["Dünyanın en büyük fon yönetim şirketi", "BlackRock"],
              ["Yerli telefon işbirliği", "ASELSAN & Türk Telekom"],
              ["CarrefourSA'yı satın alan şirket", "A101 (Yeni Mağazacılık A.Ş.)"],
              ["Sabancı'nın sattığı çimento şirketi", "Akçansa (Çimsa'yı tuttu)"],
            ],
          },
          {
            type: "callout",
            variant: "key",
            title: "Togg Ortakları",
            text: "Anadolu Grubu, BMC, Turkcell, Zorlu Holding ve TOBB.\nNot: Kök Grubu ortaklıktan çekildi.",
          },
        ],
      },
      {
        id: 2,
        title: "Ders",
        summary: "Ders notları",
        blocks: [
          {
            type: "paragraph",
            text: "bu notları da siz çıkarın gardesiiim (bana da atın 😊)",
          },
        ],
      },
    ],
  },
];
