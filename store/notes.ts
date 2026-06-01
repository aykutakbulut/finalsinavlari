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
        title: "Sermaye Piyasaları — Kapsamlı Ders Notu",
        summary: "Piyasa temelleri, menkul kıymetler, türev ürünler ve BES",
        blocks: [
          // ── BÖLÜM 1 ──────────────────────────────────────────────────────
          { type: "heading", text: "Bölüm 1 — Piyasa ve Finansal Sistem Temelleri" },

          { type: "subheading", text: "Piyasaların Ekonomik Önemi" },
          {
            type: "paragraph",
            text: "Bir ülkenin ekonomik gelişmişliğinin en önemli göstergelerinden biri gelişmiş ve güçlü finansal piyasalardır. Finansal piyasalar ekonominin kalbidir; fon fazlası olan birimlerin fonlarını yatırımlara kanalize eden en etkin araçtır. Piyasaların büyüklüğü ile ekonomik gelişmişlik doğru orantılıdır.",
          },

          { type: "subheading", text: "Piyasa Kavramı" },
          {
            type: "paragraph",
            text: "İktisadi açıdan piyasa, alıcı ve satıcıların karşılıklı iletişim içinde olduğu ve para-mal değişiminin (mübadele) gerçekleştiği yerdir.",
          },
          {
            type: "table",
            headers: ["Tür", "Tanım"],
            rows: [
              ["Reel (Gerçek) Piyasa", "Üretilmiş mal ve hizmetler ile üretim faktörlerinin karşılaştığı piyasa."],
              ["Finansal (Mali) Piyasa", "Fon fazlası olanların tasarruflarını fon eksiği olanların kullanımına sunduğu piyasa."],
            ],
          },

          { type: "subheading", text: "Fon Arz ve Talebi" },
          {
            type: "list",
            items: [
              "Fon talep edenler: yatırım/işletme sermayesi ihtiyacını karşılamak; gelir-gider arasındaki zaman uyumsuzluğunu gidermek.",
              "Fon arz edenler: gelir-gider vade uyumunu sağlamak; faiz/temettü geliri elde etmek; emeklilik için birikim yapmak.",
            ],
          },

          { type: "subheading", text: "Finansal Piyasanın Unsurları" },
          {
            type: "list",
            items: [
              "Fon arz edenler (tasarruf sahibi: devlet, işletmeler, bireyler)",
              "Fon talep edenler (tüketici/yatırımcı: devlet, işletmeler, bireyler)",
              "Yatırım ve finansman araçları",
              "Yardımcı kuruluşlar",
              "Hukuki ve idari düzen",
            ],
          },

          { type: "subheading", text: "Finansal Piyasa Türleri" },
          {
            type: "table",
            headers: ["Sınıflandırma", "Tür A", "Tür B"],
            rows: [
              ["Örgütlenme", "Organize (banka gibi; kurallı, güvenilir)", "Organize olmamış / tezgah üstü (tefeciler; pazarlıkla fiyat)"],
              ["İhraç durumu", "Birincil piyasa (ilk ihraç)", "İkincil piyasa (portföydeki varlıkların alım-satımı)"],
              ["Ödeme zamanı", "Spot / nakit (≤2 günde teslim)", "Vadeli / türev (teslim+ödeme ileride)"],
              ["Vade", "Para piyasası (kısa vade, yüksek likidite)", "Sermaye piyasası (orta-uzun vade, hisse/tahvil)"],
            ],
          },
          {
            type: "callout",
            variant: "key",
            title: "En Kritik Ayrım",
            text: "Para piyasası: kısa vadeli fon, düşük risk, yüksek likidite.\nSermaye piyasası: orta-uzun vadeli fon, hisse senedi ve uzun vadeli tahvil.",
          },

          // ── BÖLÜM 2 ──────────────────────────────────────────────────────
          { type: "divider" },
          { type: "heading", text: "Bölüm 2 — Sermaye Piyasası: Tanım, Önem, Tarihçe" },

          {
            type: "paragraph",
            text: "İşletmelerin ihtiyaç duyduğu orta ve uzun vadeli fonların arz ve talebinin, aracı kuruluşlar aracılığıyla ve menkul kıymetler gibi sermaye piyasası araçlarına bağlı olarak karşılaştığı piyasadır. \"Sermaye piyasası\" ile \"menkul kıymetler piyasası\" çoğu zaman eş anlamlı kullanılır.",
          },

          { type: "subheading", text: "Önemi" },
          {
            type: "list",
            items: [
              "Küçük tasarrufları menkul kıymetlere yatırarak \"damlalardan göller\" oluşturur, büyük yatırımlara dönüştürür.",
              "Tasarruf sahibiyle fon talep eden arasında doğrudan iletişim kurar, aracıların işlevini azaltır.",
              "Tüketim eğilimini azaltıp tasarrufu yükselterek sermaye birikimini artırır.",
              "Uzun vadeli finansal araçları likit tutarak küçük tasarrufları büyük yatırımlara çeker.",
            ],
          },

          { type: "subheading", text: "Osmanlı Dönemi" },
          {
            type: "list",
            items: [
              "Avrupa'da sanayileşme ve sömürgecilik → büyük anonim şirketler → Osmanlı'daki yabancı tacir/azınlıklar ilgilendi.",
              "Galata bankerleri öncülüğünde menkul değer el değiştirdi.",
              "Önemli fark: Avrupa'da şirketlerin fon ihtiyacıyla, Osmanlı'da hazinenin fon ihtiyacıyla doğdu.",
              "İlk dış borçlanma: 1854, Kırım Harbi nedeniyle Londra'dan.",
              "1866: Osmanlı'nın ilk borsası Dersaadet Tahvilat Borsası kuruldu; Avrupa borsalarıyla telgraf irtibatlı.",
              "1906: Adı Esham ve Tahvilat Borsası'na dönüştü; Cumhuriyet'e kadar sürdü.",
            ],
          },

          { type: "subheading", text: "Cumhuriyet Dönemi (Kronoloji)" },
          {
            type: "ordered",
            items: [
              "1923: Borsada işlem yapanların Türk olması kuralı.",
              "1929: Menkul Kıymetler ve Kambiyo Borsaları Kanunu — kayıtsız alım-satım yasaklandı.",
              "1938: Borsa Ankara'ya taşındı, adı Kambiyo, Esham ve Tahvilat Borsası. 1941: İstanbul'a geri döndü.",
              "1960'lar: Zorunlu Tasarruf Bonoları/Hürriyet Tahvilleri → simsarlar → ilk ikincil piyasa.",
              "1970'ler: Holdingleşme ve halka açılmalarla gelişme.",
              "1980'ler: Kanun/kurum eksikliğinden Bankerler Olayı krizi.",
              "1981: Kriz sonrası 2499 sayılı Sermaye Piyasası Kanunu.",
              "1982: Sermaye Piyasası Kurulu (SPK) kuruldu.",
              "Aralık 1985: İMKB faaliyete başladı.",
              "1993: İstanbul Altın Borsası (1995'te faaliyete geçti).",
              "2005: İzmir'de Vadeli İşlemler ve Opsiyon Borsası (VOB).",
              "30.12.2012: 6362 sayılı yeni Sermaye Piyasası Kanunu yayımlandı.",
              "2013: İMKB → Borsa İstanbul; tüm borsalar tek çatı altında toplandı.",
            ],
          },

          // ── BÖLÜM 3 ──────────────────────────────────────────────────────
          { type: "divider" },
          { type: "heading", text: "Bölüm 3 — Sermaye Piyasası Faaliyetleri ve Kurumları" },

          { type: "subheading", text: "Sermaye Piyasası Faaliyetleri" },
          {
            type: "list",
            items: [
              "Araçların ihraç/halka arz yoluyla satışına aracılık",
              "Daha önce ihraç edilmiş araçların alım-satımına aracılık",
              "Portföy yöneticiliği",
              "Yatırım danışmanlığı",
              "Repo-ters repo (geri alım/satım taahhüdüyle alım-satım)",
              "Her türlü türev aracın alım-satımına aracılık",
            ],
          },
          { type: "callout", variant: "info", text: "Her faaliyet için aracı kuruluşların SPK'dan ayrı yetki belgesi alması gerekir." },

          { type: "subheading", text: "Yatırım Kuruluşları — Yetki Farkı" },
          {
            type: "table",
            headers: ["Kurum", "Yapabildiği", "Yapamadığı"],
            rows: [
              ["Aracı Kurumlar", "Hisse halka arz, hisse alım-satım, vadeli işlem, opsiyon, açığa satış, repo, danışmanlık, portföy yönetimi", "—"],
              ["Bankalar", "Bankacılık + hisse dışı menkul kıymet alım-satımı, repo, vadeli işlemler", "Hisse senedi alım-satımına aracılık"],
            ],
          },

          { type: "subheading", text: "Yatırım Ortaklıkları" },
          {
            type: "table",
            headers: ["Tür", "Portföy İçeriği", "Kısa Açıklama"],
            rows: [
              ["MKYO (Menkul Kıymet YO)", "Sermaye piyasası araçları + altın/kıymetli maden", "Uzman yönetim; tasarruf sahibinin riski azalır."],
              ["GYO (Gayrimenkul YO)", "Gayrimenkul, projeler, gayrimenkule dayalı haklar, sermaye piyasası araçları", "Gelirleri kurumlar vergisinden istisna; kira+değer artışı; kâr temettü olarak dağıtılabilir."],
              ["GSYO (Girişim Sermayesi YO)", "Girişim sermayesi yatırımları", "Dinamik/yaratıcı ama finansal gücü yetersiz girişimcileri finanse eder; yüksek risk-yüksek getiri mantığı."],
            ],
          },

          { type: "subheading", text: "Yatırım Fonları" },
          {
            type: "paragraph",
            text: "Tasarruf sahiplerinden katılma payı karşılığında toplanan para/varlıklarla, tasarruf sahipleri hesabına Kurulca belirlenen varlıklardan oluşan portföyleri işletmek amacıyla portföy yönetim şirketleri tarafından kurulan, tüzel kişiliği olmayan mal varlığıdır.",
          },
          {
            type: "list",
            items: [
              "Riskin dağıtılması: Binlerce kişiden toplanan para çok sayıda araca yatırılır; tek bir düşüşten en az etkilenir.",
              "Profesyonel yönetim: Yetişmiş elemanlar piyasayı sürekli izler, zamanında alım-satım yapar.",
              "Mal varlığının korunması: Fonun mal varlığı kurucudan ayrıdır; rehnedilemez, haczedilemez — kanunla güvence altındadır.",
            ],
          },
          {
            type: "table",
            headers: ["Fon Türü", "Ağırlıklı Portföy (≥%80)"],
            rows: [
              ["Borçlanma Araçları Şemsiye Fonu", "Kamu/özel borçlanma araçları"],
              ["Hisse Senedi Şemsiye Fonu", "Yerli/yabancı hisse senetleri"],
              ["Kıymetli Madenler Şemsiye Fonu", "Altın, kıymetli madenler ve bunlara dayalı araçlar"],
              ["Para Piyasası Şemsiye Fonu", "Vadesi ≤184 gün, ağırlıklı ort. vade ≤45 gün likit araçlar"],
              ["Katılım Şemsiye Fonu", "Kira sertifikası, katılma hesabı, faize dayanmayan araçlar"],
              ["Değişken Şemsiye Fon", "Yukarıdaki türlerin hiçbirine girmeyen"],
            ],
          },
          {
            type: "callout",
            variant: "warn",
            title: "Fona Yatırım Yaparken",
            text: "• Risk düzeyi: Anaparanın bir kısmı kaybedilebilir; mevduatta garanti var, fonda yok.\n• Geçmiş getiri gelecekteki getiriyi garantilemez.\n• Gider oranlarını önceden öğren; yüksek gider her zaman düşük getiri demek değildir.",
          },

          // ── BÖLÜM 4 ──────────────────────────────────────────────────────
          { type: "divider" },
          { type: "heading", text: "Bölüm 4 — Menkul Kıymetler" },

          { type: "subheading", text: "A) Hisse Senedi" },
          {
            type: "paragraph",
            text: "Sermaye şirketlerinin, kişilere sermayedeki paylarını belgelemek için verdiği; sahibine ortaklık haklarından yararlanma imkânı sağlayan değerli kâğıttır. İhraç yetkisi: anonim şirketler, sermayesi paylara bölünmüş komandit şirketler, özel kanunla kurulan kuruluşlar.",
          },
          {
            type: "list",
            items: [
              "Rüçhan hakkı (bedelli sermaye artırımına katılma)",
              "Kârdan / temettüden pay alma",
              "Oy kullanma ve yönetime katılma",
              "Tasfiyeden hisse oranında pay alma",
              "Bilgi edinme",
            ],
          },
          {
            type: "table",
            headers: ["Sınıflandırma", "Tür A", "Tür B"],
            rows: [
              ["Sahip kimliği", "Nama (isim yazılı; daha güvenli)", "Hamiline (elindekine hak; kayıpsa risk yüksek)"],
              ["Hak", "Adi (eşit hak)", "İmtiyazlı (oy/kâr/yönetimde özel hak)"],
              ["İhraç bedeli", "Primsiz (nominal değerden)", "Primli (nominalin üzerinden)"],
              ["Sermaye artırımı", "Bedelli (nakit)", "Bedelsiz (varlık değer artışından)"],
            ],
          },
          {
            type: "callout",
            variant: "tip",
            title: "Hisse Getirisi",
            text: "1) Kâr payı (temettü) — yıl sonu kârın dağıtımı\n2) Sermaye kazancı — pay değerindeki artış\nStandart getirisi yoktur; şirketin bilanço kazancına göre değişir.",
          },

          { type: "subheading", text: "B) Tahvil" },
          {
            type: "paragraph",
            text: "Devletin veya anonim ortaklıkların en az 1 yıl ve daha uzun vadeyle borçlanma amacıyla çıkardığı senetlerdir. Tahvil sahibi alacaklıdır, ortak değil; kâr/zarar riskine katlanmaz, sabit faiz karşılığı borç verir. İflas/tasfiyede hisse yatırımcısına göre önceliklidir.",
          },
          {
            type: "callout",
            variant: "key",
            title: "Faiz–Fiyat İlişkisi",
            text: "Faiz yükselirse elindeki tahvilin değeri düşer.\nFaiz düşerse tahvilin değeri yükselir (vadesinden önce kârla satılabilir).",
          },
          {
            type: "table",
            headers: ["Tür", "Açıklama"],
            rows: [
              ["Devlet / Özel sektör", "DİBS temerrüt riski taşımaz; özel sektör tahvilinde risk vardır."],
              ["Kuponlu", "Ara dönem faiz ödemesi (3/6 ay veya yıllık); vade sonunda anapara nominal değerden."],
              ["Kuponsuz", "Ara ödeme yok; anapara+faiz vade sonunda tek seferde."],
              ["Sabit faizli", "Vade sonu getiri baştan bilinir."],
              ["Değişken faizli", "Enflasyon dönemlerinde yatırımcıyı korur; ihraçcıya uzun vadeli borçlanma imkânı."],
              ["Endeksli", "Anapara altın fiyatı veya döviz kuruna göre artırılarak ödenir."],
              ["Hisse ile değiştirilebilir (HDT)", "Vade 2-7 yıl; en erken 2. yıldan itibaren hisseye dönüştürülebilir."],
              ["Kâra iştirakli", "Faize ek kâr payı, veya faiz yerine kâr payı, veya yalnızca kâr payı."],
            ],
          },

          { type: "subheading", text: "C) Bono" },
          {
            type: "paragraph",
            text: "Bir yıldan kısa vadeli borçlanma senedidir. Tahvil gibi alacak hakkı doğurur, ortaklık vermez. Risksiz yatırım aracı olarak öne çıkar.",
          },
          {
            type: "table",
            headers: ["Tür", "Kimler Çıkarır", "Vade"],
            rows: [
              ["Hazine/Devlet Bonosu", "Hazine", "Kısa vadeli; en güvenli"],
              ["Banka Bonoları", "Kalkınma ve yatırım bankaları", "15–360 gün"],
              ["Finansman Bonoları", "Büyük anonim şirketler", "En fazla 9 ay"],
              ["Altın/Gümüş/Platin Bonosu", "BİST üyesi banka/aracı kurumlar", "60–360 gün, kıymetli maden cinsinden"],
            ],
          },

          { type: "subheading", text: "D) Devlet İç Borçlanma Senetleri (DİBS)" },
          {
            type: "table",
            headers: ["Araç", "Vade"],
            rows: [
              ["Devlet Tahvili", "1 yıl ve üzeri (genelde 2, 3, 5, 10 yıl)"],
              ["Hazine Bonosu", "1 yıldan kısa (genelde 3, 6 ay, 1 yıl)"],
            ],
          },
          {
            type: "list",
            items: [
              "Devlet garantili; temerrüt riski yoktur.",
              "Faiz geliri vergiden muaf.",
              "BİST'te alınıp satıldığından likittir.",
            ],
          },

          { type: "subheading", text: "E) Eurobond" },
          {
            type: "paragraph",
            text: "Devlet ya da şirketlerin, kendi ülkeleri dışında yabancı para üzerinden sattığı uzun vadeli borçlanma aracı. T.C. Hazinesi genelde USD/EUR cinsinden ihraç eder.",
          },
          {
            type: "list",
            items: [
              "Vade genelde 5–30 yıl; kuponlu ihraç edilir.",
              "USD tahviller 6 ayda bir, EUR tahviller yılda bir kupon ödemeli.",
              "Stopaja tabi değil, beyana tabi — vergi avantajı sağlar.",
              "Vade beklenmeden anlık fiyattan satılabilir (likidite).",
            ],
          },

          // ── BÖLÜM 5 ──────────────────────────────────────────────────────
          { type: "divider" },
          { type: "heading", text: "Bölüm 5 — Türev Piyasalar ve VİOP" },

          {
            type: "paragraph",
            text: "Türev piyasalar: Anlaşmanın bugünden yapıldığı, ama yükümlülüğün gelecek bir vadede yerine getirildiği piyasalardır. Türev ürünün değeri, dayanak varlık denen başka bir varlığa (pay, endeks, döviz, emtia, altın vb.) bağlıdır.",
          },
          {
            type: "callout",
            variant: "info",
            title: "Neden Doğdu?",
            text: "Fiyatlar arz-talebe göre sürekli değişir. Gelecekteki fiyat belirsizliği riskini ortadan kaldırma ihtiyacıyla vadeli sözleşmeler doğdu. 1848'de Chicago Board of Trade (CBOT) kuruldu; ilk kayıtlı sözleşme 13 Mart 1851'de 3.000 kile mısır üzerine. 1972'den itibaren döviz kuru/faiz riski eklenince finansal araçlara da uygulandı.",
          },

          { type: "subheading", text: "Türev Ürün Türleri" },
          {
            type: "table",
            headers: ["Ürün", "Zorunluluk", "Standart", "Piyasa", "Risk"],
            rows: [
              ["Opsiyon", "Hayır (alıcıya hak, satıcıya yükümlülük)", "Kısmen", "Borsa / OTC", "Primle sınırlı"],
              ["Futures", "Evet", "Evet", "Borsa", "Orta"],
              ["Forward", "Evet", "Hayır (taraflar belirler)", "OTC", "Yüksek (karşı taraf riski)"],
              ["Swap", "Evet", "Hayır", "OTC", "Orta–Yüksek"],
            ],
          },

          { type: "subheading", text: "VİOP (Vadeli İşlem ve Opsiyon Piyasası)" },
          {
            type: "paragraph",
            text: "Borsa İstanbul bünyesinde vadeli işlem ve opsiyon sözleşmelerinin alım-satımının yapıldığı piyasanın kısa adıdır. 2013'te VOB ile birleşerek tüm sözleşmeler tek platformda toplandı. İşlem gören sözleşmeler: pay, endeks, döviz, kıymetli madenler, emtia, enerji, yabancı endeksler.",
          },
          {
            type: "table",
            headers: ["Spot Piyasa", "Vadeli Piyasa"],
            rows: [
              ["Para-mal takası aynı anda/birkaç günde", "Teslim ve ödeme ileride belirlenen tarihte"],
              ["O anki gerçek ürün alınır", "Kalite/miktar/vade/yer standarttır; tek değişken fiyat"],
              ["İki taraf doğrudan karşılaşır", "Muhatap Takasbank (MKT); teminat yatırılır"],
            ],
          },
          {
            type: "table",
            headers: ["Kullanım Amacı", "Açıklama"],
            rows: [
              ["Korunma (Hedge)", "Fiyat değişim riskine karşı bilinçli pozisyon; potansiyel olumsuz sonuçları ortadan kaldırır."],
              ["Spekülatif", "Korunma amacı taşımaz; likidite sağlar, düşükten alıp yüksekten satmayı hedefler."],
              ["Arbitraj", "Aynı anda bir ürünü düşükten alıp yüksekten satma; risksiz kazanç."],
            ],
          },
          {
            type: "callout",
            variant: "key",
            title: "Takasbank Güvencesi",
            text: "VİOP işlemleri Merkezi Karşı Taraf (MKT) olan Takasbank güvencesindedir. MKT alıcıya karşı satıcı, satıcıya karşı alıcı konumuna geçerek takas garantisi sağlar.",
          },
          {
            type: "list",
            items: [
              "İşlem maliyeti (borsa payı): Endeks sözleşmelerinde %0,004; diğerlerinde %0,003.",
              "Yatırımcı doğrudan işlem yapamaz; borsa üyesi aracı kurum/banka vasıtasıyla işlem yapar.",
              "SPK'nın risk bildirim formunu imzalamak zorunludur.",
              "Teminat yetersiz kalırsa teminat tamamlama çağrısı gelir.",
            ],
          },

          // ── BÖLÜM 6 ──────────────────────────────────────────────────────
          { type: "divider" },
          { type: "heading", text: "Bölüm 6 — Bireysel Emeklilik Sistemi (BES)" },

          {
            type: "paragraph",
            text: "Emeklilik döneminde ek gelir sağlayarak çalışma hayatındaki yaşam standardını emeklilikte de sürdürmeyi amaçlayan bir tasarruf ve yatırım sistemidir. Kamu sosyal güvenliğine alternatif değil, tamamlayıcıdır. Gönüllü katılım esasına dayanır.",
          },
          {
            type: "stat",
            title: "BES Güncel Büyüklük (EGM, Nisan 2026)",
            rows: [
              { label: "Toplam Katılımcı", value: "18 milyon kişi" },
              { label: "Toplam Fon Büyüklüğü", value: "2,35 trilyon TL", highlight: true },
            ],
          },
          {
            type: "stat",
            title: "Emeklilik Profili",
            rows: [
              { label: "BES Emeklilik Yaşı", value: "56" },
              { label: "Ortalama Yaşam Süresi", value: "80 yıl" },
              { label: "Emekli Geçirilecek Tahmini Süre", value: "~24 yıl" },
            ],
          },
          {
            type: "callout",
            variant: "key",
            title: "Devlet Katkısı",
            text: "Yatırılan her katkı payına %20 devlet katkısı eklenir (her 1.000 TL için 200 TL). Üst sınır: ilgili yıl brüt asgari ücretin %30'u.",
          },
          {
            type: "table",
            headers: ["Sistemde Kalış Süresi", "Devlet Katkısından Hak Ediş"],
            rows: [
              ["İlk 3 yıl", "Hak kazanılamaz"],
              ["3. yıl sonu", "%15"],
              ["6. yıl sonu", "%35"],
              ["10. yıl sonu", "%60"],
              ["Emekliliğe hak kazanılırsa", "%100 (tamamı)"],
            ],
          },
          {
            type: "list",
            items: [
              "18 yaşını doldurmuş, medeni hakları kullanan herkes katılabilir (2022'den itibaren 18 yaş altı için de hesap açılabiliyor).",
              "Fon dağılımını yılda 12 kez, emeklilik planını yılda 4 kez değiştirebilirsin.",
              "Aynı şirkette 2 yıl kaldıktan sonra birikimi başka şirkete aktarabilirsin.",
              "Emeklilik yatırım fonları kurumlar vergisi ve stopajdan muaf; getiri üzerinden yalnızca gelir vergisi.",
              "İstediğin zaman sistemden ayrılabilirsin; erken çıkışta getiri üzerinden stopaj kesilir.",
              "Emeklilikte birikimi toplu, maaş veya karma olarak alabilirsin.",
            ],
          },
          {
            type: "callout",
            variant: "tip",
            title: "BES Nasıl Emekli Olunur?",
            text: "Sisteme giriş tarihinden itibaren en az 10 yıl sistemde bulunmak VE 56 yaşını tamamlamak gerekir.",
          },
        ],
      },
      {
        id: 3,
        title: "Püf Notlar",
        summary: "Nokta atışı özet — kritik sayılar, tarihler ve karşılaştırmalar",
        blocks: [
          { type: "heading", text: "1. Piyasa & Finansal Sistem" },
          {
            type: "list",
            items: [
              "Finansal piyasa: Fon fazlası olanın tasarrufunu fon açığı olana aktaran sistem. Para + sermaye piyasasını kapsar (daha geniş).",
              "Reel piyasa = mal/hizmet + üretim faktörü · Finansal piyasa = fon akışı.",
              "Unsurlar: fon arz edenler, fon talep edenler, yatırım/finansman araçları, yardımcı kuruluşlar, hukuki-idari düzen.",
            ],
          },
          {
            type: "table",
            headers: ["Ayrım", "A", "B"],
            rows: [
              ["Örgütlenme", "Organize (kurallı, bina/üye → banka)", "Tezgah üstü (kuralsız, pazarlık → tefeci)"],
              ["İhraç", "Birincil (ilk ihraç)", "İkincil (el değiştirme)"],
              ["Ödeme", "Spot (peşin, teslim max 2 gün)", "Vadeli/türev (ileride)"],
              ["Süre", "Para piyasası (kısa vade, düşük risk, yüksek likidite → dönen varlık)", "Sermaye piyasası (orta-uzun vade, menkul kıymet)"],
            ],
          },

          { type: "divider" },
          { type: "heading", text: "2. Sermaye Piyasası & Tarihçe" },
          {
            type: "callout",
            variant: "info",
            text: "Sermaye piyasası: Orta-uzun vadeli fonların aracı kuruluşlarla menkul kıymetler üzerinden karşılaştığı piyasa.\nFark: Avrupa'da şirket fonu için, Osmanlı'da hazine fonu için doğdu.",
          },
          {
            type: "table",
            headers: ["Yıl", "Olay"],
            rows: [
              ["1854", "İlk dış borçlanma (Kırım Harbi, Londra)"],
              ["1866", "Dersaadet Tahvilat Borsası — Osmanlı'nın ilk borsası"],
              ["1906", "Esham ve Tahvilat Borsası adını aldı"],
              ["1929", "Menkul Kıymetler ve Kambiyo Borsaları Kanunu"],
              ["1980", "Bankerler Olayı krizi"],
              ["1981", "2499 sayılı Sermaye Piyasası Kanunu"],
              ["1982", "SPK kuruldu"],
              ["1985", "İMKB faaliyete başladı"],
              ["2005", "VOB kuruldu (İzmir)"],
              ["2012", "6362 sayılı yeni Sermaye Piyasası Kanunu"],
              ["2013", "İMKB → Borsa İstanbul (VOB da dahil)"],
            ],
          },

          { type: "divider" },
          { type: "heading", text: "3. Sermaye Piyasası Kurumları" },
          {
            type: "table",
            headers: ["Kurum", "Yapabilir", "Yapamaz"],
            rows: [
              ["Aracı Kurum", "Hisse halka arz + alım-satım, türev, repo, danışmanlık, portföy yön.", "—"],
              ["Banka", "Hisse HARİÇ menkul kıymet aracılığı, repo, vadeli", "Hisse alım-satımına aracılık"],
            ],
          },
          {
            type: "table",
            headers: ["Ortaklık", "Portföy"],
            rows: [
              ["MKYO", "Sadece menkul kıymet + altın/kıymetli maden"],
              ["GYO", "Gayrimenkul/proje; kurumlar vergisinden istisna"],
              ["GSYO", "Girişim sermayesi; yüksek risk-yüksek getiri; KOBİ'ye uzun vadeli yatırım"],
            ],
          },
          {
            type: "callout",
            variant: "key",
            title: "Yatırım Fonu — 4 Temel İlke",
            text: "1) Riskin dağıtılması  2) Profesyonel yönetim  3) Menkul kıymet portföyü işletme  4) Mal varlığının korunması (rehnedilemez / haczedilemez)",
          },
          {
            type: "table",
            headers: ["Şemsiye Fon (≥%80)", "Açıklama"],
            rows: [
              ["Borçlanma Araçları", "Kamu/özel borçlanma araçları"],
              ["Hisse Senedi", "Yerli/yabancı hisseler"],
              ["Kıymetli Madenler", "Altın vb. ve bunlara dayalı araçlar"],
              ["Para Piyasası", "Vade max 184 gün, ort. vade max 45 gün"],
              ["Katılım", "Faizsiz araçlar"],
              ["Değişken", "Yukarıdakilerin dışındaki"],
            ],
          },
          {
            type: "callout",
            variant: "warn",
            text: "Fon riski var — mevduat gibi garanti YOK. Geçmiş performans gelecek getiriyi garantilemez.",
          },

          { type: "divider" },
          { type: "heading", text: "4. Menkul Kıymetler" },
          { type: "subheading", text: "Hisse Senedi → ortaklık hakkı" },
          {
            type: "list",
            items: [
              "İhraç için SPK onayı şart. İhraç edenler: AŞ, paylara bölünmüş komandit, özel kanunla kurulanlar.",
              "Haklar: rüçhan · temettü · oy · yönetim · tasfiyede pay · bilgi edinme",
              "Türler: Nama/Hamiline (nama güvenli) · Adi/İmtiyazlı (aksi yoksa adi) · Primli/Primsiz · Bedelli/Bedelsiz",
              "Getiri: kâr payı + sermaye kazancı. Değişken getirili, riskli.",
            ],
          },
          { type: "subheading", text: "Tahvil → alacak hakkı, ≥1 yıl, sabit getiri" },
          {
            type: "list",
            items: [
              "Ortaklık YOK; kâr dağıtımından önce ödenir; hisseye göre öncelikli.",
              "Faiz ↑ → fiyat ↓  |  Faiz ↓ → fiyat ↑",
              "Zaman aşımı: anapara 10 yıl / faiz 5 yıl",
              "Türler: Devlet/Özel · Kuponlu/Kuponsuz · Başabaş/Primli (primli = nominalin ALTINDA) · Sabit/Değişken faizli · Endeksli · HDT (vade 2-7 yıl, değişim min 2 yıl sonra) · Kâra iştirakli",
            ],
          },
          {
            type: "table",
            headers: ["", "Tahvil", "Hisse"],
            rows: [
              ["Hak", "Alacak", "Ortaklık"],
              ["Vade", "Var", "Yok"],
              ["Getiri", "Sabit", "Değişken"],
              ["Risk", "Düşük", "Yüksek"],
              ["Yönetim", "Yok", "Var"],
            ],
          },
          { type: "subheading", text: "Bono → alacak hakkı, <1 yıl" },
          {
            type: "list",
            items: [
              "Hazine bonosu (en güvenli) · Banka bonosu (60-360 gün) · Finansman bonosu (max 9 ay) · Kıymetli maden bonosu (60-360 gün)",
            ],
          },
          { type: "subheading", text: "DİBS & Eurobond" },
          {
            type: "list",
            items: [
              "DİBS: ≥1 yıl → Devlet tahvili | <1 yıl → Hazine bonosu. Faiz geliri vergiden muaf, likit.",
              "Eurobond: Yurt dışı, döviz cinsinden, 5-30 yıl, kuponlu. USD 6 ayda bir / EUR yılda bir kupon. Stopaja değil, beyana tabi.",
            ],
          },

          { type: "divider" },
          { type: "heading", text: "5. Türev Piyasalar & VİOP" },
          {
            type: "table",
            headers: ["Ürün", "Zorunluluk", "Standart", "Piyasa", "Risk"],
            rows: [
              ["Opsiyon", "Hayır (alıcıya hak)", "Kısmen", "Borsa/OTC", "Primle sınırlı"],
              ["Futures", "Evet", "Evet", "Borsa", "Orta"],
              ["Forward", "Evet", "Hayır", "OTC", "Yüksek"],
              ["Swap", "Evet", "Hayır", "OTC", "Orta-Yüksek"],
            ],
          },
          {
            type: "list",
            items: [
              "VİOP: BİST'te vadeli işlem + opsiyon piyasası (2013'te VOB ile birleşti).",
              "Spot: gerçek mal + anında takas + iki taraf · Vadeli: standart varlık + gelecekte teslim + muhatap Takasbank",
              "Kullanım: korunma (hedge) / spekülasyon (likidite sağlar) / arbitraj (risksiz eşzamanlı al-sat)",
              "Garanti: Takasbank = Merkezi Karşı Taraf (MKT) — alıcıya satıcı, satıcıya alıcı konumuna geçer.",
              "Maliyet: pay endeksi %0,004 / diğer %0,003.",
              "Yatırımcı doğrudan işlem YAPAMAZ → üye aracı kurum/banka + risk bildirim formu + teminat.",
            ],
          },

          { type: "divider" },
          { type: "heading", text: "6. Bireysel Emeklilik Sistemi (BES)" },
          {
            type: "list",
            items: [
              "Sosyal güvenliğe alternatif değil, tamamlayıcı. Gönüllü.",
              "Katılım: 18+ (2022'den beri 18 yaş altı da). Denetim: Hazine, EGM, SPK.",
              "Güncel (Nisan 2026): 18 milyon kişi, 2,35 trilyon TL.",
              "Devlet katkısı: %20 (her 1.000 TL'ye 200 TL), brüt asgari ücretin %30'u ile sınırlı.",
              "Emeklilik şartı: 10 yıl sistemde + 56 yaş.",
              "Haklar: fon değişimi 12/yıl · plan değişimi 4/yıl · cayma 60 gün · aktarım 2 yıl sonra.",
              "Vergi: fonlar kurumlar vergisi + stopajdan muaf; çıkışta sadece getiri üzerinden vergi.",
            ],
          },
          {
            type: "table",
            headers: ["Sistemde Kalış", "Hak Ediş"],
            rows: [
              ["İlk 3 yıl", "Hak yok"],
              ["3. yıl sonu", "%15"],
              ["6. yıl sonu", "%35"],
              ["10. yıl sonu", "%60"],
              ["Emeklilikte", "%100"],
            ],
          },

          { type: "divider" },
          {
            type: "callout",
            variant: "key",
            title: "Hızlı Tekrar — Kritik Sayı ve Tarihler",
            text: "Spot teslim: max 2 gün\nTahvil ≥1 yıl | Bono <1 yıl\nTahvil zaman aşımı: anapara 10 yıl / faiz 5 yıl\nHDT: vade 2-7 yıl, değişim min 2 yıl sonra\nBanka bonosu 60-360 gün | Finansman bonosu max 9 ay\nPara piyasası fonu: vade max 184 gün, ort. max 45 gün | Şemsiye eşiği %80\nEurobond 5-30 yıl (USD 6 ayda bir / EUR yılda bir)\nVİOP: pay endeksi %0,004 / diğer %0,003\nBES devlet katkısı %20, sınır asgari ücretin %30'u\nBES hak ediş: 3/6/10 yıl → %15/%35/%60, emeklilikte %100\nBES emeklilik: 10 yıl + 56 yaş\nBES fon 12/yıl, plan 4/yıl, cayma 60 gün\nSPK: 1982 · İMKB: 1985 · Borsa İstanbul: 2013",
          },
        ],
      },
    ],
  },
];
