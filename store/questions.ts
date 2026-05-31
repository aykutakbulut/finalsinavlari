import { Lesson } from "../types/quiz";

const AcikKaynak = [
  {
    id: 1,
    questionText:
      "Aşağıdakilerden hangisi CPU-Programlama Algoritmalarını karşılaştırmak için kullanılan kriterlerden biri değildir?",
    options: [
      "A) Verimlilik",
      "B) Geri dönüş Süresi",
      "C) Bekleme Süresi",
      "D) Tepki Süresi",
      "E) G/Ç Süresi",
    ],
    correctAnswer: "E) G/Ç Süresi",
  },
  {
    id: 2,
    questionText:
      "Aşağıdakilerden hangisi Zamanlama Algoritmalarından biri değildir?",
    options: [
      "A) FCFS",
      "B) SJF",
      "C) Thread Scheduling",
      "D) Priority Scheduling",
      "E) Multilevel Queue Scheduling",
    ],
    correctAnswer: "C) Thread Scheduling",
  },
  {
    id: 3,
    questionText:
      "FCFS algoritmasına göre işlemler P1, P2, P3 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 24, P2 Burst Time: 3, P3 Burst Time: 3)",
    options: ["A) 16", "B) 17", "C) 18", "D) 19", "E) 20"],
    correctAnswer: "B) 17",
  },
  {
    id: 4,
    questionText:
      "FCFS algoritmasına göre işlemler P2, P3, P1 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 24, P2 Burst Time: 3, P3 Burst Time: 3)",
    options: ["A) 7", "B) 6", "C) 5", "D) 4", "E) 3"],
    correctAnswer: "E) 3",
  },
  {
    id: 5,
    questionText:
      "SJF algoritmasına göre işlemler P4, P1, P3, P2 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 6, P2 Burst Time: 8, P3 Burst Time: 7, P4 Burst Time: 3)",
    options: ["A) 7", "B) 6", "C) 5", "D) 4", "E) 3"],
    correctAnswer: "A) 7",
  },
  {
    id: 6,
    questionText:
      "Hangi programlama algoritması, ilk önce CPU'yu ilk isteyen işlemciye tahsis eder?",
    options: [
      "A) FCFS",
      "B) SJF",
      "C) Thread Scheduling",
      "D) Priority Scheduling",
      "E) Multilevel Queue Scheduling",
    ],
    correctAnswer: "A) FCFS",
  },
  {
    id: 7,
    questionText:
      "Aşağıdakilerden hangileri Shortest Job First algoritmasının türlerindendir?\nI. Kesilmesiz SJF  II. Yarı Kesilmesiz SJF  III. Kesilmeli SJF  IV. Yarı Kesilmeli SJF",
    options: [
      "A) I, II",
      "B) I, III",
      "C) II, IV",
      "D) I, II, III",
      "E) Hepsi",
    ],
    correctAnswer: "B) I, III",
  },
  {
    id: 8,
    questionText:
      "Aşağıdakilerden hangisi bir CPU Scheduling algoritması için kriter olarak kullanılmaz?",
    options: [
      "A) Max. CPU Utilazation",
      "B) Min. Turnaround",
      "C) Max. Throughput",
      "D) Min. Response",
      "E) Max. Waiting",
    ],
    correctAnswer: "D) Min. Response",
  },
  {
    id: 9,
    questionText:
      "Aşağıdakilerden hangisi Solaris zamanlamasında kullanılan sınıflardan değildir?",
    options: ["A) TS", "B) RT", "C) FSS", "D) FP", "E) FD"],
    correctAnswer: "E) FD",
  },
  {
    id: 10,
    questionText:
      "Aşağıdakilerden hangisi WIN 32'de tanımlı öncelik sınıflarındandır?",
    options: [
      "A) TITLE PRIORITY CLASS",
      "B) LOW PRIORITY CLASS",
      "C) HIGH PRIORITY CLASS",
      "D) REAL PRIORITY CLASS",
      "E) ABOVE PRIORITY CLASS",
    ],
    correctAnswer: "C) HIGH PRIORITY CLASS",
  },
  {
    id: 11,
    questionText:
      "İki veya daha fazla işlemin karşılıklı olarak birbirlerinin kullandığı kaynaklara erişmek istemesiyle oluşan sıkıntı ne olarak adlandırılır?",
    options: [
      "A) Donma",
      "B) Ölümcül Kilitlenme",
      "C) İşlem Önceliği",
      "D) Canlı Kilitlenme",
      "E) Bloklanma",
    ],
    correctAnswer: "B) Ölümcül Kilitlenme",
  },
  {
    id: 12,
    questionText:
      "Herhangi bir zamanda sadece bir süreç kaynağı kullanabiliyor olması durumu hangi kilitlenme koşuludur?",
    options: [
      "A) Karşılıklı dışlama",
      "B) Tutup bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "A) Karşılıklı dışlama",
  },
  {
    id: 13,
    questionText:
      "En az bir kaynağı tutan bir süreç, başka süreçlerin tuttuğu kaynakları beklemesi hangi kilitlenme koşuludur?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "B) Tutup Bekleme",
  },
  {
    id: 14,
    questionText:
      "Aşağıdakilerden hangisi kilitlenme koşullarından değildir?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "E) Kaynak Ayırma",
  },
  {
    id: 15,
    questionText:
      "Kaynakların birden fazla kopyası olup, sürecin önceden ne kadar kaynak kullanacağını talep edildiği algoritma hangisidir?",
    options: [
      "A) Tespit Algoritması",
      "B) Güvenli Algoritma",
      "C) Kaynak Ayırma Çizgesi",
      "D) Banker's Algoritması",
      "E) Kök Algoritma",
    ],
    correctAnswer: "D) Banker's Algoritması",
  },
  {
    id: 16,
    questionText:
      "Süreçlerin birbirilerinin kullandığı kaynakları ardı ardına beklemesi hangi kilitlenme-bekleme süreci olarak adlandırılır?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "D) Dairesel Bekleme",
  },
  {
    id: 17,
    questionText:
      "Eğer işletim sistemi bir kaynağı mevcut işlemden alıp başka bir işleme veremiyorsa, hangi kilitlenme süreci olarak adlandırılır?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "C) Boşaltılamazlık",
  },
  {
    id: 18,
    questionText:
      "Kaynak Ayırma Çizge Şemasına göre süreç kaynağı isteyince oluşan kenar durumu nedir?",
    options: [
      "A) Talep Kenarı",
      "B) İstek Kenarı",
      "C) Atama Kenarı",
      "D) Kaynak Kenar",
      "E) Açık Kenar",
    ],
    correctAnswer: "B) İstek Kenarı",
  },
  {
    id: 19,
    questionText:
      "Kaynak Ayırma Çizge Şemasına göre süreç kaynağı bırakınca oluşan kenar durumu nedir?",
    options: [
      "A) Talep Kenarı",
      "B) İstek Kenarı",
      "C) Atama Kenarı",
      "D) Kaynak Kenar",
      "E) Açık Kenar",
    ],
    correctAnswer: "A) Talep Kenarı",
  },
  {
    id: 20,
    questionText:
      "Aşağıdakilerden hangisi/hangileri kilitlenme yönetim yöntemlerinden biridir?\nI. Önleme  II. Sakınma  III. İzin verme-Kurtarma  IV. Görmezden Gelme",
    options: [
      "A) I-II",
      "B) III-IV",
      "C) Yalnız III",
      "D) I-II-IV",
      "E) Hepsi",
    ],
    correctAnswer: "E) Hepsi",
  },
  {
    id: 21,
    questionText:
      "İşletim sistemi üzerinde işlenen verilerin tamamı RAM belleklerinden geçer. Bu verilerin RAM belleğe sığmaması durumunda işletim sistemi sabit diskten kendisine bir bölüm ayırır. Bu işleme ne denir?",
    options: [
      "A) Swapping",
      "B) Fragmantasyon",
      "C) Buffering",
      "D) Segmentasyon",
      "E) Paging",
    ],
    correctAnswer: "A) Swapping",
  },
  {
    id: 22,
    questionText:
      "Aşağıdakilerden hangisi Swapping işleminin en önemli dezavantajıdır?",
    options: [
      "A) RAM dolduğunda sabit diske başvurulması",
      "B) RAM belleklerin yavaş olması",
      "C) Sabit diskin RAM belleklere göre yavaş olması",
      "D) Sabit diskte yeterince boş alan olmaması",
      "E) RAM belleklerin kapasitesinin çok fazla olması",
    ],
    correctAnswer: "C) Sabit diskin RAM belleklere göre yavaş olması",
  },
  {
    id: 23,
    questionText:
      "Bellek üzerinde bulunan ancak bitişik olmayan kullanılabilir boş alanlara ne denir?",
    options: [
      "A) Swapping",
      "B) Fragmantasyon",
      "C) Buffering",
      "D) Segmentasyon",
      "E) Paging",
    ],
    correctAnswer: "B) Fragmantasyon",
  },
  {
    id: 24,
    questionText:
      "İşletim sisteminin birden fazla işlemi yaparken her işlem için belleği uygun bir şekilde paylaştırması yöntemine ne denir?",
    options: [
      "A) Swapping",
      "B) Fragmantasyon",
      "C) Buffering",
      "D) Segmentasyon",
      "E) Paging",
    ],
    correctAnswer: "D) Segmentasyon",
  },
  {
    id: 25,
    questionText:
      "Swapping, Paging ve Segmentasyon bellek teknolojilerinin kullanım amaçları nedir?",
    options: [
      "A) RAM bellek maliyetlerini düşürmek",
      "B) Sabit diski yavaş olduğu için kullanımını en aza indirmek",
      "C) Bellek alan yönetimini kolaylaştırmak ve performansı arttırmak",
      "D) Sabit diski en etkin şekilde kullanmak",
      "E) İşlemcinin RAM belleğe başvurusunu en aza indirmek",
    ],
    correctAnswer:
      "C) Bellek alan yönetimini kolaylaştırmak ve performansı arttırmak",
  },
  {
    id: 26,
    questionText: "Ana bellekle ilgili verilenlerden hangisi yanlıştır?",
    options: [
      "A) Ana bellek işlemci ve sabit disk arasında köprü görevi görür",
      "B) Ana belleğin hızı sabit diskin hızından yüksektir",
      "C) Ana belleğin hızı işlemcinin hızından düşüktür",
      "D) Ana belleğin yüksek kapasiteli olması performansı arttırır",
      "E) Ana belleğin kapasitesi her zaman sabit diskten fazla olmalıdır",
    ],
    correctAnswer:
      "E) Ana belleğin kapasitesi her zaman sabit diskten fazla olmalıdır",
  },
  {
    id: 27,
    questionText: "Ana bellekle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) SRAM ve DRAM olarak ikiye ayrılır",
      "B) Elektrik kesildiğinde bilgileri saklamaya devam ederler",
      "C) İşlemciden hızlı sabit diskten yavaştır",
      "D) İşlemci ve sabit disk arasında köprü görevi görür",
      "E) Kendi hafızası dolduğunda hard diske başvurabilir",
    ],
    correctAnswer: "B) Elektrik kesildiğinde bilgileri saklamaya devam ederler",
  },
  {
    id: 28,
    questionText:
      "Ana belleği diğer bellek çeşitlerinden ayıran en önemli özelliği hangisidir?",
    options: [
      "A) Sabit disklerden pahalı olması",
      "B) Ön bellekten yavaş olması",
      "C) Aktarım hızlarının yüksek olması",
      "D) Elektrik kesildiğinde bilgilerinin silinmesi",
      "E) Kapasitesinin sabit diske göre az olması",
    ],
    correctAnswer: "C) Aktarım hızlarının yüksek olması",
  },
  {
    id: 29,
    questionText:
      "RAM belleğin hızı ……… hızından düşüktür. RAM belleğin bu hız düşüklüğüne ön bellek (cache) yardımcı olur ve RAM ile ……… arasındaki veri transferinde görev yapar. Hangisi boş bırakılan yere gelmelidir?",
    options: [
      "A) ROM bellek",
      "B) Ana kart",
      "C) CPU",
      "D) Sabit disk",
      "E) GPU",
    ],
    correctAnswer: "C) CPU",
  },
  {
    id: 30,
    questionText:
      "RAM bellek ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?",
    options: [
      "A) Herhangi bir işlem yapılırken diskten okunan bilgiler ve işlem sonuçları gibi her şey önce buraya yazılır",
      "B) RAM bellekteki bilgiler, elektrik kesilmesi veya bilgisayarı kapatmamız durumunda kaybolur",
      "C) Bilgisayar her açıldığında bilgiler buraya yeniden yüklenir",
      "D) RAM'deki bilgiler kalıcıdır",
      "E) RAM bellek yönetimi için swapping, paging gibi yöntemler kullanılır",
    ],
    correctAnswer: "D) RAM'deki bilgiler kalıcıdır",
  },
  {
    id: 31,
    questionText:
      "Sanal bellek kullanımı ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Bir çok durumda programın tamamının bellekte bulunması gerekmez",
      "B) Kullanıcı fiziksel bellek sınırlamalarından kurtulur",
      "C) Daha fazla bellek program aynı anda yürütülebilir",
      "D) Daha fazla G/Ç işlemine sebep olur",
      "E) Programları daha hızlı yürütmeye olanak sağlar",
    ],
    correctAnswer: "D) Daha fazla G/Ç işlemine sebep olur",
  },
  {
    id: 32,
    questionText:
      "Verilen bellek düzenlemesi şemasına göre A, B ve C sırasıyla neyi ifade etmektedir?\n(Şemada sol sütun A, orta kısım B, sağ sütun C olarak gösterilmiştir.)",
    options: [
      "A) fiziksel bellek, bellek haritalama, sanal bellek",
      "B) sanal bellek, bellek haritalama, fiziksel bellek",
      "C) fiziksel bellek, sanal bellek, bellek haritalama",
      "D) sanal bellek, fiziksel bellek, bellek haritalama",
      "E) Hiçbiri",
    ],
    correctAnswer: "B) sanal bellek, bellek haritalama, fiziksel bellek",
  },
  {
    id: 33,
    questionText:
      "Bir işlemin koşturulması sırasında, işlem için gerekli olan sayfa ya da sayfaların bulunmaması durumunda oluşan hataya ne denir?",
    options: [
      "A) Sayfa hatası (page fault)",
      "B) Bellek hatası (memory error)",
      "C) Haritalama hatası (mapping error)",
      "D) Sanal hata (virtual fault)",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Sayfa hatası (page fault)",
  },
  {
    id: 34,
    questionText:
      "Kullanıcının aynı anda birden fazla uygulama çalıştırmasına ne isim verilir?",
    options: [
      "A) multithreading",
      "B) multitasking",
      "C) multiprocessing",
      "D) multiprogramming",
      "E) multifuncitons",
    ],
    correctAnswer: "B) multitasking",
  },
  {
    id: 35,
    questionText:
      "G/Ç fonksiyonları verinin hangi öğeler arasında transfer edilmesini sağlar?",
    options: [
      "A) Kaydediciler (registers)",
      "B) Prosesler",
      "C) G/Ç modülü ve işlemci",
      "D) G/Ç cihazları",
      "E) İşlemci çekirdekleri",
    ],
    correctAnswer: "C) G/Ç modülü ve işlemci",
  },
  {
    id: 36,
    questionText:
      "Belleğe sayfa yerleştirme işleminde aşağıdakilerden hangisine gerek yoktur?",
    options: [
      "A) İstenilen sayfanın ikincil bellek üzerinden bulunması",
      "B) Ana bellek üzerinde boş çerçeve bulunması",
      "C) Boş çerçeve yok ise bir kurban çerçeve (victim frame) belrilenmesi",
      "D) Sayfaların defrag işlemine tabi tutulması",
      "E) Sayfanın çerçeve üzerine yerleştirilmesi",
    ],
    correctAnswer: "D) Sayfaların defrag işlemine tabi tutulması",
  },
  {
    id: 37,
    questionText:
      "Aşağıdakilerden hangisi sayfa yeniden yerleştirme algoritmalarından biri değildir?",
    options: [
      "A) FIFO Algoritması",
      "B) Optimal Algoritması",
      "C) DGS Algoritması",
      "D) LRU Algoritması",
      "E) Hiçbiri",
    ],
    correctAnswer: "C) DGS Algoritması",
  },
  {
    id: 38,
    questionText:
      "Tüm sayfa yerleşim algoritmaları içerisinde en düşük sayfa hatasına sahip algoritma hangisidir?",
    options: [
      "A) FIFO Algoritması",
      "B) Optimal Algoritması",
      "C) DGS Algoritması",
      "D) LRU Algoritması",
      "E) LIFO Algoritması",
    ],
    correctAnswer: "B) Optimal Algoritması",
  },
  {
    id: 39,
    questionText:
      "Sayfa yerleşim algoritmaları için aşağıdaki ifadelerden hangisi hatalıdır?",
    options: [
      "A) LRU algoritması FIFO ile optimal algoritması arasında bir performansa sahiptir",
      "B) En az sayfa hatasına optimal algoritması sahiptir",
      "C) Optimal algoritması en uzun süre kullanılmayan sayfayı kurban olarak seçer",
      "D) LIFO Algoritması kuyruk yapısına benzer",
      "E) FIFO Algoritması en basit yerleştirme algoritmasıdır",
    ],
    correctAnswer: "D) LIFO Algoritması kuyruk yapısına benzer",
  },
  {
    id: 40,
    questionText:
      "Sayfa hatası (page fault) için aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Sayfa hatası sıklığında önemli olan trashing'i önlemektir",
      "B) Sayfa isteği oranı çok küçükse işlemin fazla çerçevesi var demektir",
      "C) Sayfa isteği oranı büyükse işlemler daha fazla çerçeveye ihtiyaç duyuyor demektir",
      "D) Sayfa isteği oranı alt sınırın altına düşerse işleme çerçeve eklenir",
      "E) Sayfa isteği oranı kontrol edilmelidir",
    ],
    correctAnswer:
      "D) Sayfa isteği oranı alt sınırın altına düşerse işleme çerçeve eklenir",
  },
  {
    id: 41,
    questionText: "Disklerin dakikadaki dönüş sayısına ne ad verilir?",
    options: ["A) RPM", "B) RDM", "C) NFS", "D) CLV", "E) CAV"],
    correctAnswer: "A) RPM",
  },
  {
    id: 42,
    questionText: "Aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) En dış bölgedeki izler tipik olarak en iç bölgedeki izlerden %40 daha fazla sektör tutar",
      "B) Bir parça ne kadar uzak olursa, diskin ortasından uzaklaştıkça uzunluğu o kadar artar",
      "C) Dış bölgelerden iç bölgelere doğru hareket ettikçe, iz başına düşen sektör sayısı azalır",
      "D) Disk teknolojisi geliştikçe parça başına düşen sektör sayısı artmaktadır",
      "E) Sabit doğrusal hız kullanan ortamlarda, iz başına bitlerin yoğunluğu değişebilir",
    ],
    correctAnswer:
      "E) Sabit doğrusal hız kullanan ortamlarda, iz başına bitlerin yoğunluğu değişebilir",
  },
  {
    id: 43,
    questionText:
      "Disk zamanlama algoritmaları ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) SCAN ve C-SCAN, diske ağır yük yükleyen sistemler için daha iyi performans gösterir",
      "B) SSTF FCFS'ye göre performansı arttırmaz",
      "C) Herhangi bir zamanlama algoritmasında performans, büyük ölçüde isteklerin sayısına ve türüne bağlıdır",
      "D) Herhangi bir istek listesi için optimal bir alım sırası belirleyebiliriz",
      "E) Optimal bir program bulmak için gereken hesaplama SSTF veya SCAN üzerindeki tasarrufları haklı göstermeyebilir",
    ],
    correctAnswer: "B) SSTF FCFS'ye göre performansı arttırmaz",
  },
  {
    id: 44,
    questionText:
      "Disk yönetiminde bir diskin veri depolayabilmesi için, disk denetleyicisinin okuyabileceği ve yazabileceği sektörlere bölünmesi gerekir. Bu işleme ne ad verilir?",
    options: [
      "A) Düşük düzey biçimlendirme",
      "B) Düşük seviyeli formatlama",
      "C) Disk denetleyicisi",
      "D) Sektör numarası",
      "E) Disk yönetimi",
    ],
    correctAnswer: "A) Düşük düzey biçimlendirme",
  },
  {
    id: 45,
    questionText:
      "Bir sektör için veri yapısı aşağıdakilerden hangisinden oluşur?",
    options: [
      "A) Veri yapısı ve başlık",
      "B) Römork ve başlık",
      "C) Başlık, veri alanı ve römork",
      "D) Başlık ve veri yapısı",
      "E) Veri alanı ve başlık",
    ],
    correctAnswer: "C) Başlık, veri alanı ve römork",
  },
  {
    id: 46,
    questionText:
      "Bir disk sistemindeki paralellik, şeritleme yoluyla elde edildiği gibi iki ana amacı vardır. Aşağıdakilerden hangisi bu amaçlardandır?",
    options: [
      "A) Yük dengeleme ile çok sayıda küçük erişimin (sayfa erişimlerinin) verimini artırmak",
      "B) Büyük erişimlerin tepki süresini artırmak",
      "C) Sayfa erişimlerinin verimini azaltmak",
      "D) Küçük erişimlerin verimini azaltmak",
      "E) Küçük erişimlerin tepki süresini artırmak",
    ],
    correctAnswer:
      "A) Yük dengeleme ile çok sayıda küçük erişimin (sayfa erişimlerinin) verimini artırmak",
  },
  {
    id: 47,
    questionText:
      "RAID seviyeleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) RAID 5 seviyesi, blok seviyesinde şeritleme yapan ancak herhangi bir fazlalık bulunmayan disk dizilerini ifade eder",
      "B) RAID 1 seviyesi, disk yansıtmayı ifade eder",
      "C) RAID 2 seviyesi, bellek stili hata düzeltme kodu (ECC) organizasyonu olarak da bilinir",
      "D) RAID 3 seviyesi, seviye 2'yi geliştiren bir yapıdır",
      "E) RAID 5 en yaygın RAID sistemidir",
    ],
    correctAnswer:
      "A) RAID 5 seviyesi, blok seviyesinde şeritleme yapan ancak herhangi bir fazlalık bulunmayan disk dizilerini ifade eder",
  },
  {
    id: 48,
    questionText:
      "RAID seviye seçimi ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) RAID 2'nin yüksek alan ek yükü nedeniyle, RAID 5 genellikle büyük hacimli verilerin depolanması için tercih edilir",
      "B) Seviye 6 şu anda birçok RAID uygulaması tarafından desteklenmemektedir",
      "C) RAID 6 seviye 5'ten daha iyi güvenilirlik sunmaktadır",
      "D) Büyük disk setlerinin RAID 5'leri için zaman çizelgesi oluşturabilir",
      "E) Veriler başka bir diskten kopyalanabildiği için, yeniden oluşturma RAID seviye 1 için en kolaydır",
    ],
    correctAnswer:
      "A) RAID 2'nin yüksek alan ek yükü nedeniyle, RAID 5 genellikle büyük hacimli verilerin depolanması için tercih edilir",
  },
  {
    id: 49,
    questionText: "ZFS ile ilgili verilen bilgilerden hangisi yanlıştır?",
    options: [
      "A) Her bir sistem için depolama alanını tahsis etmek ve serbest bırakmak için malloc() ve free() bellek modelini kullanamaz",
      "B) ZFS, bir sistemin boyutunu sınırlamak için kotalar sağlar",
      "C) Bir sistemin belirli bir miktarda büyümesini sağlamak için çekinceleri tutar",
      "D) Sistem yönetimi ve birim yönetimini tek bir ünitede birleştirir",
      "E) ZFS'nin genel performansı çok hızlıdır",
    ],
    correctAnswer:
      "A) Her bir sistem için depolama alanını tahsis etmek ve serbest bırakmak için malloc() ve free() bellek modelini kullanamaz",
  },
  {
    id: 50,
    questionText: "WAFL hangi RAID seviyesinde kullanılır?",
    options: [
      "A) RAID seviye 1",
      "B) RAID seviye 3",
      "C) RAID seviye 2",
      "D) RAID seviye 4",
      "E) RAID seviye 0",
    ],
    correctAnswer: "D) RAID seviye 4",
  },
  {
    id: 51,
    questionText:
      "Aşağıdakilerden hangisi dosya dizin yapısının amaçlarından değildir?",
    options: [
      "A) Dosya sistemlerinin işlevini açıklamak",
      "B) Dosya sistemlerine arayüzleri tanımlamak",
      "C) Erişim yöntemleri, dosya paylaşımı, dosya kilitleme ve dizin yapıları dahil olmak üzere dosya sistemi tasarım değişimlerinin tartışılması",
      "D) Dosya sistemi korumasını keşfetmek",
      "E) Komplex dosya sistemleri oluşturmak",
    ],
    correctAnswer: "E) Komplex dosya sistemleri oluşturmak",
  },
  {
    id: 52,
    questionText:
      "Disk yapısı ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Disk alt bölümlere ayrılamaz",
      "B) Disk ve bölüm işlenmemiş olarak yani dosya sistemi olmadan veya dosya sistemiyle biçimlendirilmiş olarak kullanılabilir",
      "C) Bölümler minidisk ve dilimler olarak bilinirler",
      "D) Dosya sistemlerini içeren oluşumlar birim olarak bilinir",
      "E) Dosya sistemini içeren her birim aynı zamanda o dosya sisteminin bilgisini aygıt dizininde veya içeriklerin birim tablosundan takip eder",
    ],
    correctAnswer: "A) Disk alt bölümlere ayrılamaz",
  },
  {
    id: 53,
    questionText:
      "Aşağıdakilerden hangisi dosya işlemlerinden biri değildir?",
    options: [
      "A) Yaz",
      "B) Oku",
      "C) Yazma ve okuma noktasını değiştir",
      "D) Sil",
      "E) Boyutlandır",
    ],
    correctAnswer: "E) Boyutlandır",
  },
  {
    id: 54,
    questionText:
      "Aşağıdaki dosya türü eşleştirmelerinden hangisi yanlıştır?",
    options: [
      "A) Executable – exe, com, bin",
      "B) Object – obj, o",
      "C) Text – txt, doc",
      "D) Library – arc, zip, tar",
      "E) Multimedia – mpeg, mov, rm",
    ],
    correctAnswer: "D) Library – arc, zip, tar",
  },
  {
    id: 55,
    questionText: "Dosya paylaşımı ile ilgili hangisi yanlıştır?",
    options: [
      "A) Çok kullanıcılı sistemlerde dosya paylaşımı yapmak istenir",
      "B) Paylaşım bir koruma planı ile yapılabilir",
      "C) Dosya paylaşımına izin verilmez",
      "D) Dağıtık sistemler üzerinde dosyaları bir ağ üzerinden paylaşılabilir",
      "E) Ağ Dosya Sistemi (NFS) ortak dağıtılan dosya paylaşım yöntemidir",
    ],
    correctAnswer: "C) Dosya paylaşımına izin verilmez",
  },
  {
    id: 56,
    questionText: "Aşağıdakilerden hangisi sıralı erişime örnektir?",
    options: [
      "A) read n",
      "B) read next",
      "C) write n",
      "D) position to n",
      "E) rewrite n",
    ],
    correctAnswer: "B) read next",
  },
  {
    id: 57,
    questionText:
      "Aşağıdakilerden hangisi aygıt dizinindeki bilgilerden değildir?",
    options: [
      "A) Şuandaki uzunluğu",
      "B) Maksimum uzunluğu",
      "C) Son erişilen tarihi",
      "D) Tüm erişilme tarihleri",
      "E) Sahibi ID",
    ],
    correctAnswer: "D) Tüm erişilme tarihleri",
  },
  {
    id: 58,
    questionText: "Uzak dosya sistemleri ile ilgili hangisi yanlıştır?",
    options: [
      "A) İstemci – Sunucu modeli istemcilerin sunuculardan uzak dosya sistemlerini kurmalarını sağlar",
      "B) Sunucu tek bir istemciye hizmet sağlayabilir",
      "C) NFS Standart UNIX istemci – sunucu dosya paylaşım protokolüdür",
      "D) CIFS standart Windows protokolüdür",
      "E) Standart işletim sistemi dosya çağrıları uzak çağrılara dönüştürülür",
    ],
    correctAnswer: "B) Sunucu tek bir istemciye hizmet sağlayabilir",
  },
  {
    id: 59,
    questionText:
      "Aşağıdakilerden hangisi korumalı erişim türlerinden değildir?",
    options: [
      "A) Okumak",
      "B) Yazmak",
      "C) Çoğaltmak",
      "D) Eklemek",
      "E) Silmek",
    ],
    correctAnswer: "C) Çoğaltmak",
  },
  {
    id: 60,
    questionText: "Aşağıdakilerden hangisi doğrudan erişime örnektir?",
    options: [
      "A) read next",
      "B) write next",
      "C) reset",
      "D) no read after last write",
      "E) rewrite n",
    ],
    correctAnswer: "E) rewrite n",
  },
  {
    id: 61,
    questionText:
      "Aşağıdakilerden hangisinde PC'lerde 'interrupt controller' bağlantı noktası konumudur?",
    options: [
      "A) 000-00F",
      "B) 020-021",
      "C) 040-043",
      "D) 200-20F",
      "E) 320-32F",
    ],
    correctAnswer: "B) 020-021",
  },
  {
    id: 62,
    questionText:
      "Bellek ile diğer aygıtlar arasındaki veri iletişimi için kullanılan, bu veri iletişimini sağlarken merkezi işlem birimini kısmen devre dışı bırakarak veri akışını hızlandıran yapı hangisidir?",
    options: [
      "A) SCSI",
      "B) PCI",
      "C) BUS",
      "D) DMA (Direct Access Memory)",
      "E) IDE Controller",
    ],
    correctAnswer: "D) DMA (Direct Access Memory)",
  },
  {
    id: 63,
    questionText:
      "Aşağıdakilerden hangisi işletim sisteminin temel katmanları arasında gösterilemez?",
    options: [
      "A) Kullanıcı",
      "B) Kabuk (Shell)",
      "C) Çekirdek",
      "D) Sistem Çağrıları",
      "E) PCI Bus",
    ],
    correctAnswer: "E) PCI Bus",
  },
  {
    id: 64,
    questionText:
      "Aşağıdaki işletim sistemi katmanlarından hangisi kullanıcıya en yakındır?",
    options: [
      "A) Çekirdek",
      "B) Sistem Çağrıları",
      "C) Kabuk",
      "D) Sistem Kütüphanesi",
      "E) Hiçbiri",
    ],
    correctAnswer: "C) Kabuk",
  },
  {
    id: 65,
    questionText:
      "Herhangi bir hafıza alanında geçici bir kayıt alanıdır. Verilerin I/O işlemlerinden sonra belleğe yazılmadan önce uğranılan bir saha olarak tanımlanabilir. Bu tanım hangisidir?",
    options: ["A) Buffer", "B) RAM", "C) ROM", "D) HDD", "E) CMOS"],
    correctAnswer: "A) Buffer",
  },
  {
    id: 66,
    questionText:
      "Small Computer System Interface'in (Küçük Bilgisayar Sistem Arabirimi) kısaltmasıdır. Unix sistemler tarafından çevre birimlerini sisteme bağlamak için kullanılan bir paralel arabirim standardıdır. Bu tanım hangisidir?",
    options: ["A) PCI", "B) SCSI", "C) AGP", "D) PCI-Express", "E) Hiçbiri"],
    correctAnswer: "B) SCSI",
  },
  {
    id: 67,
    questionText:
      "İşletim sistemleri teorisinde sık kullanılan zamanlama kavramları vardır. Aşağıdakilerden hangisi bunlar arasında gösterilemez?",
    options: [
      "A) Bekleme zamanı (waiting time)",
      "B) Dönüş süresi (turnaround time)",
      "C) İş üretimi (throughput)",
      "D) Cevap süresi (response time)",
      "E) Kesme zamanı (Interrupt time)",
    ],
    correctAnswer: "E) Kesme zamanı (Interrupt time)",
  },
  {
    id: 68,
    questionText:
      "Bir sistem çağrısının çoklu konumlar içeren çoklu I/O işlemleri gerçekleştirmesini sağlar. Tanımı yapılan I/O türü hangisidir?",
    options: [
      "A) Blokajlı I/O",
      "B) Vektörlü I/O",
      "C) Blokajsız I/O",
      "D) Senkron I/O",
      "E) Asenkron I/O",
    ],
    correctAnswer: "B) Vektörlü I/O",
  },
  {
    id: 69,
    questionText:
      "UNIX işletim sisteminde ek bir tamsayı değişkeni bir hata kodu döndürmek için kullanılır. Bu hata kodu hangisidir?",
    options: ["A) readve", "B) errno", "C) select", "D) read", "E) write"],
    correctAnswer: "B) errno",
  },
  {
    id: 70,
    questionText:
      "Unix sistemlerde bir uygulamanın sürücü kodunu boru hatlarına dinamik olarak monte etmeyi sağlayan mekanizma hangisidir?",
    options: [
      "A) streams",
      "B) caching",
      "C) spooling",
      "D) reservation",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) streams",
  },
  {
    id: 71,
    questionText:
      "Aşağıdaki ifadelerden hangileri koruma hedefleri arasında yer alır?\nI. Modern bir bilgisayar sisteminde korumanın amaçlarını ve ilkelerini tartışmak.\nII. Yetenek tabanlı koruma sistemlerini incelemek.\nIII. Dil tabanlı koruma sistemlerini incelemek.",
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) I ve III",
      "E) I-II-III",
    ],
    correctAnswer: "E) I-II-III",
  },
  {
    id: 72,
    questionText:
      "Yetkili ve yetkisiz kullanım arasındaki ayrımı hangi odaklı bir sistem sağlar?",
    options: [
      "A) Koruma Odaklı",
      "B) Karşılaştırma Odaklı",
      "C) Araştırma Odaklı",
      "D) Küresel Odaklı",
      "E) Alan Odaklı",
    ],
    correctAnswer: "A) Koruma Odaklı",
  },
  {
    id: 73,
    questionText:
      "Aşağıdaki yöntemlerden hangisi Erişim matrisini etkili bir şekilde uygulamak için gerekli değildir?",
    options: [
      "A) Küresel tablo",
      "B) Karşılaştırma",
      "C) A kilit anahtar mekanizması",
      "D) Alan adları için yetenek listeleri",
      "E) Nesneler arası iletişim",
    ],
    correctAnswer: "E) Nesneler arası iletişim",
  },
  {
    id: 74,
    questionText:
      "Aşağıdakilerden hangisi işletim sistemlerinin koruma prensiplerinden biri değildir?",
    options: [
      "A) İşletim sistemleri girişlerinin kullanıcı adı ve parola ile korunması",
      "B) Kablolu internet yerine kablosuz internet kullanılması",
      "C) Harici aygıtların gerekli olmadıkça kullanılmaması",
      "D) Sistem yamalarının ve bütününün güncel tutulması",
      "E) İşletim sistemi için güvenlik duvarının açık tutulması",
    ],
    correctAnswer: "B) Kablolu internet yerine kablosuz internet kullanılması",
  },
  {
    id: 75,
    questionText:
      "Gizli dosyaların görüntülenmesi nereden gerçekleştirilir?",
    options: [
      "A) Konum/Gizli dosyaları göster",
      "B) Düzen/Gizli dosyaları göster",
      "C) Görünüm/Gizli dosyaları göster",
      "D) Git/Gizli dosyaları göster",
    ],
    correctAnswer: "C) Görünüm/Gizli dosyaları göster",
  },
  {
    id: 76,
    questionText:
      "Şifreleme ve dosya izin hakları veren dosya sistemi hangisidir?",
    options: ["A) exFAT", "B) NTFS", "C) FAT16", "D) FAT32", "E) NEFT"],
    correctAnswer: "B) NTFS",
  },
  {
    id: 77,
    questionText:
      "MS-DOS işletim sistemi için aşağıdakilerden hangisi söylenemez?",
    options: [
      "A) MS-DOS disk işletim sistemidir",
      "B) DOS, tüm x86 tabanlı PC'lerde çalışır",
      "C) Grafik kullanıcı arabirimini kullanmaz",
      "D) Çok görevli bir işletim sistemidir",
      "E) MS-DOS komut sistemi ile çalışır",
    ],
    correctAnswer: "D) Çok görevli bir işletim sistemidir",
  },
  {
    id: 78,
    questionText: "Aşağıda yapılan eşleştirmelerden hangisi yanlıştır?",
    options: [
      "A) Windows 3.1 > grafik kullanıcı arabirimli bir işletim sistemidir",
      "B) Lovell Netwarev > Birden çok bilgisayarın bir ağ oluşturmasını sağlar",
      "C) Unix > çok kullanıcılı ve çok görevli bir işletim sistemidir",
      "D) Linux > Grafik ara yüzü olan ilk işletim sistemidir",
      "E) LILO > bilgisayarın Windows ve Linux ile birlikte dönüşümlü olarak açılabilmesini sağlayan bir mekanizması vardır",
    ],
    correctAnswer: "D) Linux > Grafik ara yüzü olan ilk işletim sistemidir",
  },
  {
    id: 79,
    questionText:
      "Erişim haklarını iptal etmek gerektiğinde aşağıdaki sorulardan hangileri sorulur?\nI. Hemen karşı gecikmeli  II. Kısmi Toplam  III. Yeniden kazanma  IV. Seçmeli ve genel  V. Dolaylı Aktarım",
    options: [
      "A) I-II",
      "B) I-II-III",
      "C) I-IV-V",
      "D) I-II-III-V",
      "E) Hepsi",
    ],
    correctAnswer: "E) Hepsi",
  },
  {
    id: 80,
    questionText:
      "Bir derleyici tarafından, yalnızca bir çekirdeğe dayanan uygulamanın göreceli değerleri hangilerdir?\nI. Güvenlik  II. Esneklik  III. Verimlilik",
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) Yalnız III",
      "D) I-III",
      "E) I-II-III",
    ],
    correctAnswer: "E) I-II-III",
  },
  {
    id: 81,
    questionText:
      '81-) "Sistemin yasal olarak kullanılmasının engellenmesidir." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi (DOS)",
    ],
    correctAnswer: "E) Hizmet Reddi (DOS)",
  },
  {
    id: 82,
    questionText:
      '82-) "Verilerin yetkisiz kişiler tarafından okunmasını veya çalınmasını ifade eder." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "A) Gizlilik ihlali",
  },
  {
    id: 83,
    questionText:
      '83-) "Verilerin veya kaynak kodların yetkisiz kişiler tarafından değiştirilmesidir." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "B) Bütünlük ihlali",
  },
  {
    id: 84,
    questionText:
      '84-) "Verilerin yetkisiz kişiler tarafından tahrip edilmesidir (Web site saldırıları vs)." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "C) Bulunabilirlik ihlali",
  },
  {
    id: 85,
    questionText:
      '85-) "Kaynakların izinsiz kullanılmasıdır." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "D) Servis Hırsızlığı",
  },
  {
    id: 86,
    questionText:
      "Bir sistemi korumak için dört seviyede güvenlik tedbiri alınmalıdır. Aşağıdakilerden hangisi bu seviyelerden birisi değildir?",
    options: [
      "A) Fiziksel",
      "B) İnsan",
      "C) İşletim Sistemi",
      "D) Ağ",
      "E) Hiçbiri",
    ],
    correctAnswer: "E) Hiçbiri",
  },
  {
    id: 87,
    questionText:
      '87-) "Genellikle ücretsiz yazılımlarla birlikte sisteme yüklenen, tarayıcıda reklam sekmesi açan veya belirli siteler ziyaret edildiğinde açılır tarayıcı penceresi oluşturan ve bir programı bire bir taklit eden yazılımlar" olarak ifade edilen program tehdidi hangisidir?',
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "A) Truva Atı",
  },
  {
    id: 88,
    questionText:
      '88-) "Tespiti zordur. Programın normal çalışması sırasında güvenlik açığı fark edilememektedir. Ancak önceden belirlenmiş bir dizi parametre kullanımı sonrasında güvenlik açığı oluşur." Yukarıda bilgi verilen program tehdidi hangisidir?',
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "D) Mantık Bombası",
  },
  {
    id: 89,
    questionText:
      "\"Bir programa gömülü zararlı kod parçasıdır. Kendi kendini kopyalamak ve diğer programlara 'bulaşmak' için tasarlanmıştır. Dosyaları değiştirerek veya tahrip ederek, sistem çökmelerine ve program arızalarına neden olarak sisteme zarar verebilirler.\" Bu program tehdidi hangisidir?",
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "E) Virüsler",
  },
  {
    id: 90,
    questionText:
      '90-) "Kendisini çoğaltmak için spawn mekanizmasını kullanan bir işlemdir. Sistem kaynaklarını kullanan ve tüm diğer işlemleri kilitleyen, kendi kopyalarını çıkaran zararlı yazılımlardır. Bilgisayar ağlarında özellikle güçlüdür." Bu program tehdidi hangisidir?',
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "C) Solucan",
  },
  {
    id: 91,
    questionText:
      "Bir sanal makine ………, ………… veya ………… ile uygulanabilir. Cümlesindeki boş yerlere ne gelmelidir?",
    options: [
      "A) Yazılım, donanım veya bir kombinasyon",
      "B) Kurulum, yapılandırma, doğrudan indirme bağlantısı",
      "C) Araştırma, yürütülebilir dosya, disk",
      "D) Sanal makine uygulaması, işletim sistemi dosyası, fiziksel bilgisayar",
      "E) Windows, Linux, Unix",
    ],
    correctAnswer: "A) Yazılım, donanım veya bir kombinasyon",
  },
  {
    id: 92,
    questionText:
      "Aşağıdakilerden hangisi sanallaştırmanın türleri arasında yer almaz?",
    options: [
      "A) Masaüstü Sanallaştırma",
      "B) Uygulama Sanallaştırması",
      "C) Depolama Sanallaştırma",
      "D) İşlemci Sanallaştırma",
      "E) Ağ Sanallaştırması",
    ],
    correctAnswer: "D) İşlemci Sanallaştırma",
  },
  {
    id: 93,
    questionText:
      "Aşağıdakilerden hangisi sanallaştırmanın temel faydalarından değildir?",
    options: [
      "A) Fiziksel kısıtlamaların ortadan kalkması",
      "B) Tek bir merkezden pek çok sunucunun yönetilebilmesi sayesinde yönetimsel yükün minimuma indirilmesi",
      "C) Alt yapı maliyetlerinin büyük oranla aşağı çekilmesi",
      "D) Yeni sunucuların kullanıma sokulması işleminin fiziksel sunuculara oranla oldukça kısa sürmesi",
      "E) Aynı makine üzerinde hem Windows hem de Android tabanlı işletim sistemlerini çalıştırabilme",
    ],
    correctAnswer:
      "E) Aynı makine üzerinde hem Windows hem de Android tabanlı işletim sistemlerini çalıştırabilme",
  },
  {
    id: 94,
    questionText:
      "Sunucu sanallaştırma teknolojileri alanında kurumsal sanallaştırma çözümleri sunan yazılımlardan değildir?",
    options: [
      "A) VirtualServerX",
      "B) Microsoft Hyper-V",
      "C) ESXServer",
      "D) Xen",
      "E) VirtualPC",
    ],
    correctAnswer: "A) VirtualServerX",
  },
  {
    id: 95,
    questionText:
      '95-) "Sanallaştırma; sahip olduğumuz fiziksel donanımı, sanal makineler yardımıyla, ………………………. birden fazla sistem veya modül koşturabileceğimiz hâle getirme işidir". Boş olan yere aşağıdakilerden hangisi gelmelidir?',
    options: [
      "A) Birbirinden bağımsız",
      "B) Benzer ilişkisi olan",
      "C) Bir arada tutan",
      "D) Bir takım sistemleri",
      "E) Belirli işleri",
    ],
    correctAnswer: "A) Birbirinden bağımsız",
  },
  {
    id: 96,
    questionText:
      "Aşağıdakilerden hangisi sanallaştırmanın faydaları arasında yer almaz?",
    options: [
      "A) Veri merkezinde ihtiyaç duyulan fiziksel ekipmanların sayısını azaltır",
      "B) Yüksek oranda konsolidasyon yapılabilmesi veri merkezinin daha çevreci olmasını sağlar",
      "C) İhtiyaç halinde çok hızlı şekilde sunucu ve depolama kaynağı oluşturulmasına imkan sağlar",
      "D) Donanım maliyetlerini önemli oranda artmasını sağlar",
      "E) Sistem kaynaklarının yüksek verimlilikle kullanılmasını sağlar",
    ],
    correctAnswer: "D) Donanım maliyetlerini önemli oranda artmasını sağlar",
  },
  {
    id: 97,
    questionText:
      "Aşağıdakilerden hangisi ya da hangileri sanallaştırma sistemlerinden birisidir?\nI. VMWARE  II. HYPER-V  III. CITRIX XENSERVER",
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) II ve III",
      "E) I, II ve III",
    ],
    correctAnswer: "E) I, II ve III",
  },
  {
    id: 98,
    questionText:
      "Sanallaştırma fiziksel yapının (Donanım) mantıksal hale getirilmesidir. Bu işlem için 4 temel donanım sanallaştırılmaktadır. Aşağıdakilerden hangisi bu 4 donanımdan birisi değildir?",
    options: ["A) CPU", "B) RAM", "C) HDD", "D) NIC", "E) E-USB"],
    correctAnswer: "E) E-USB",
  },
  {
    id: 99,
    questionText:
      "Bazı bilgisayar sistemlerinde yedekleri test etmek için kullandığınız bir kurtarma servisi yedeği vardır. Test yedekleri iki korumalı sanal makine içermektedir. Kurtarma hizmetleri yedeğini silmeniz istenirse ilk önce ne yapılmalıdır?",
    options: [
      "A) Kurtarma Hizmeti yedeğinde, her yedekleme öğesinin yedeklemesini durdurulur",
      "B) Kurtarma Servisi yedeğinden yedek verileri silinir",
      "C) Her sanal makinenin olağanüstü durum kurtarma özelliklerini değiştirilir",
      "D) Her sanal makinenin şifreleri değiştirilir",
      "E) Hiçbir şey yapmaya gerek yoktur",
    ],
    correctAnswer:
      "A) Kurtarma Hizmeti yedeğinde, her yedekleme öğesinin yedeklemesini durdurulur",
  },
  {
    id: 100,
    questionText:
      "Aşağıdakilerden hangisi sanal makine uygulamaları içinde yer almamaktadır?",
    options: [
      "A) Sanal Makine Yaşam Döngüsü",
      "B) Tip 0 Hiper Yönetici",
      "C) Tip 1 Hiper Yönetici",
      "D) Tip 2 Hiper Yönetici",
      "E) Tip 3 Hiper Yönetici",
    ],
    correctAnswer: "E) Tip 3 Hiper Yönetici",
  },
  {
    id: 101,
    questionText:
      '101-) "Dağıtık bir sistem heterojen bilgisayarları ve ağları desteklemek için mantıksal olarak yüksek-seviyeli katmanlarla daha düşük katmanlar arasında bir yazılımsal katmanı önermektedirler." Tanımı verilen kavram hangisidir?',
    options: [
      "A) Software",
      "B) Sunucu",
      "C) İstemci",
      "D) MiddleWare",
      "E) Site",
    ],
    correctAnswer: "A) Software",
  },
  {
    id: 102,
    questionText:
      "Aşağıdakilerden hangisi dağıtık sistemlerin avantajlarından değildir?",
    options: [
      "A) Kaynak Paylaşımı",
      "B) İletişim",
      "C) Hesaplama Hızı",
      "D) Göç",
      "E) Güvenilirlik",
    ],
    correctAnswer: "D) Göç",
  },
  {
    id: 103,
    questionText:
      "Aşağıdakilerden hangisi dağıtık sistem kapsamında yer almaz?",
    options: [
      "A) İnternet",
      "B) Sunucu",
      "C) İntranet",
      "D) Kablosuz Ağlar",
      "E) Uydu Bağlantısı",
    ],
    correctAnswer: "B) Sunucu",
  },
  {
    id: 104,
    questionText:
      "Dağıtık sistemlerde işlem geçişi yapılırken hangisi göz önünde bulundurulmaz?",
    options: [
      "A) Donanım Tercihi",
      "B) Yazılım Tercihi",
      "C) Veri Göçü",
      "D) Yük Dengeleme",
      "E) Hesaplama Hızlandırması",
    ],
    correctAnswer: "C) Veri Göçü",
  },
  {
    id: 105,
    questionText:
      "Aşağıdakilerden hangisi iletişim yapısının ele aldığı konulardan değildir?",
    options: [
      "A) Adlandırma ve ad çözümlemesi",
      "B) Yönlendirme stratejileri",
      "C) Bağlantı stratejileri",
      "D) Çekişme",
      "E) Hesaplama Hızlandırması",
    ],
    correctAnswer: "E) Hesaplama Hızlandırması",
  },
  {
    id: 106,
    questionText:
      "Aşağıdakilerden hangisi yönlendirme stratejilerinden değildir?",
    options: [
      "A) Sabit",
      "B) Sanal",
      "C) Tradeoff",
      "D) Dinamik",
      "E) OpenFlow",
    ],
    correctAnswer: "C) Tradeoff",
  },
  {
    id: 107,
    questionText:
      "Aşağıdakilerden hangisi tasarım sorunlarından değildir?",
    options: [
      "A) Şeffaflık",
      "B) Güvenilirlik",
      "C) Hata toleransı",
      "D) Ölçeklenebilirlik",
      "E) Hadoop",
    ],
    correctAnswer: "B) Güvenilirlik",
  },
  {
    id: 108,
    questionText:
      "Aşağıdakilerden hangisi sistemdeki güvenlik mekanizmalarından değildir?",
    options: [
      "A) Şifreleme",
      "B) Doğrulama",
      "C) Yetkilendirme",
      "D) Reddedilme",
      "E) Ulaşılabilirlik",
    ],
    correctAnswer: "D) Reddedilme",
  },
  {
    id: 109,
    questionText:
      "Blowfish, RSA sistem güvenlik mekanizmalarından hangisini kullanır?",
    options: [
      "A) Encryption",
      "B) Authentication",
      "C) Authorization",
      "D) Availability",
      "E) Inability rejected",
    ],
    correctAnswer: "A) Encryption",
  },
  {
    id: 110,
    questionText:
      '110-) "Düzenli aralıklarla önbellek tara ve son taramadan bu yana değiştirilmiş blokların temizlenme işidir." Tanımı verilen kavram hangisidir?',
    options: [
      "A) Hadoop",
      "B) OpenFlow",
      "C) Cleaner",
      "D) MiddleWare",
      "E) Varyasyon",
    ],
    correctAnswer: "E) Varyasyon",
  },
  {
    id: 111,
    questionText:
      "Aşağıdaki işletim sistemi katmanlarından hangisi donanıma en yakındır?",
    options: [
      "A) Çekirdek",
      "B) Sistem Çağrıları",
      "C) Kabuk",
      "D) Uygulamalar",
      "E) Kullanıcı",
    ],
    correctAnswer: "A) Çekirdek",
  },
  {
    id: 112,
    questionText:
      "İşletim sistemi katmanları için en alttan üste doğru düşünürsek aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) Donanım – Çekirdek – Sistem Çağrıları – Kabuk – Kullanıcı",
      "B) Donanım – Sistem Çağrıları – Çekirdek – Kabuk – Kullanıcı",
      "C) Donanım – Kabuk – Çekirdek – Sistem Çağrıları – Kullanıcı",
      "D) Donanım – Kabuk – Sistem Çağrıları – Çekirdek – Kullanıcı",
      "E) Donanım – Çekirdek – Kabuk – Sistem Çağrıları – Kullanıcı",
    ],
    correctAnswer:
      "A) Donanım – Çekirdek – Sistem Çağrıları – Kabuk – Kullanıcı",
  },
  {
    id: 113,
    questionText: '113-) Linux dosya sisteminde "inode" neyi temsil eder?',
    options: [
      "A) Açık dosyayı temsil eder",
      "B) Süper bloğu temsil eder",
      "C) Bir dizini temsil eder",
      "D) Yalnızca bir bloğu temsil eder",
      "E) Bir dosyayı temsil eder",
    ],
    correctAnswer: "E) Bir dosyayı temsil eder",
  },
  {
    id: 114,
    questionText:
      '114-) Linux dosya sisteminde "süper blok" nesnesi neyi temsil eder?',
    options: [
      "A) Bir Dosyayı temsil eder",
      "B) Bütün bir dosya sistemini temsil eder",
      "C) Bir dizini temsil eder",
      "D) Açık Bir Dosyayı temsil eder",
      "E) Yalnızca gizli bir dosyayı temsil eder",
    ],
    correctAnswer: "B) Bütün bir dosya sistemini temsil eder",
  },
  {
    id: 115,
    questionText:
      '115-) Linux dosya sistemi işlemlerinden "open(…)" komutu nasıl bir işlem gerçekleştirir?',
    options: [
      "A) Bir dosyayı açar",
      "B) Bir dosyayı okur",
      "C) Dosyaya yazma işlemi yapar",
      "D) Bir dosyayı belleğe alır",
      "E) Bir dosyayı siler",
    ],
    correctAnswer: "A) Bir dosyayı açar",
  },
  {
    id: 116,
    questionText:
      '116-) Linux dosya sistemi işlemlerinden "mmap(…)" komutu nasıl bir işlem gerçekleştirir?',
    options: [
      "A) Bir dosyayı açar",
      "B) Bir dosyayı okur",
      "C) Dosyaya yazma işlemi yapar",
      "D) Bir dosyayı belleğe alır",
      "E) Bir dosyayı siler",
    ],
    correctAnswer: "D) Bir dosyayı belleğe alır",
  },
  {
    id: 117,
    questionText:
      "Buddy sisteminde bellek ideal yer tahsisi yapmak için bellek her seferinde hangi oranlarla bölünür?",
    options: [
      "A) Her seferinde %10 - %90 olarak iki parçaya bölünür",
      "B) Her seferinde %30 - %70 olarak iki parçaya bölünür",
      "C) Her seferinde %50 - %50 olarak iki parçaya bölünür",
      "D) Her seferinde %40 - %60 olarak iki parçaya bölünür",
      "E) Her seferinde %80 - %20 olarak iki parçaya bölünür",
    ],
    correctAnswer: "C) Her seferinde %50 - %50 olarak iki parçaya bölünür",
  },
  {
    id: 118,
    questionText:
      "Aşağıdakilerden hangisi bir process (süreç) özelliklerinden değildir?",
    options: [
      "A) Process ID",
      "B) Credentials (Kimlik Bilgisi)",
      "C) Personality (Kişilik)",
      "D) Namespace",
      "E) Parent memory",
    ],
    correctAnswer: "E) Parent memory",
  },
  {
    id: 119,
    questionText:
      "Kendi kimliği ile yeni bir thread oluşmasını sağlayan sistem çağrısı hangisidir?",
    options: [
      "A) Fork()",
      "B) Open()",
      "C) Delete()",
      "D) Clone()",
      "E) Close()",
    ],
    correctAnswer: "D) Clone()",
  },
  {
    id: 120,
    questionText:
      "Yeni bir kimlikle yeni bir thread oluşmasını sağlayan sistem çağrısı hangisidir?",
    options: [
      "A) Fork()",
      "B) Open()",
      "C) Delete()",
      "D) Clone()",
      "E) Close()",
    ],
    correctAnswer: "A) Fork()",
  },
  {
    id: 121,
    questionText:
      "Aşağıdakilerden hangisi Windows 7 tasarım ilkelerinden değildir?",
    options: [
      "A) basitlik",
      "B) güvenlik",
      "C) güvenilirlik",
      "D) yüksek performans",
      "E) taşınabilirlik",
    ],
    correctAnswer: "A) basitlik",
  },
  {
    id: 122,
    questionText:
      "Win32'de zamanlama dört öncelik sınıfından yararlanır. Aşağıdakilerden hangisi Win32 öncelik sınıfı değildir?",
    options: [
      "A) IDLE_PRIORITY_CLASS",
      "B) LOW_PRIORITY_CLASS",
      "C) NORMAL_PRIORITY_CLASS",
      "D) HIGH_PRIORITY_CLASS",
      "E) REALTIME_PRIORITY_CLASS",
    ],
    correctAnswer: "B) LOW_PRIORITY_CLASS",
  },
  {
    id: 123,
    questionText:
      "Windows NT 4.0 ile çekirdeğe taşınan ………………………… implementasyonu Windows Vista ile tekrar user mode tarafına alınmaya başlamıştır. Boşluğa gelecek olan kavramı seçiniz.",
    options: ["A) POSIX", "B) WIN32", "C) DWM", "D) ActiveDirectory", "E) GUI"],
    correctAnswer: "E) GUI",
  },
  {
    id: 124,
    questionText:
      "Windows mimarisi katmanlı sistem modüllerinden oluşur. Aşağıdakilerden hangisi Windows 7 sistem bileşenlerinden değildir?",
    options: [
      "A) kernel",
      "B) kernel dispatcher",
      "C) gaming manager",
      "D) object manager",
      "E) virtual memory manager",
    ],
    correctAnswer: "C) gaming manager",
  },
  {
    id: 125,
    questionText:
      "NTFS dosya sisteminde her dosyanın tanımlarının tutulduğu tablo hangisidir?",
    options: [
      "A) Master File Table",
      "B) Slave File Table",
      "C) File Table",
      "D) Original File Table",
      "E) Sector File Table",
    ],
    correctAnswer: "A) Master File Table",
  },
  {
    id: 126,
    questionText:
      "Windows 7 hem peer to peer hem de client/server network destekler. Bir oturum katmanı bileşeninin mevcut herhangi bir taşıma mekanizmasını kullanmasını sağlayan aktarım sürücüsü arayüzünün kısaltması nedir?",
    options: ["A) TSI", "B) TFSI", "C) TDI", "D) CDTI", "E) HDI"],
    correctAnswer: "C) TDI",
  },
  {
    id: 127,
    questionText:
      "Aşağıdakilerden hangisi Server Message Block Protocol (SMB) mesaj tiplerinden değildir?",
    options: [
      "A) Session control",
      "B) File",
      "C) Printer",
      "D) Message",
      "E) Disk",
    ],
    correctAnswer: "E) Disk",
  },
  {
    id: 128,
    questionText:
      "Bir Windows bilgisayarın donanımına güç verildiğinde ve firmware ROM'u yüklendikten sonra başlayan sürece ne ad verilir?",
    options: ["A) booting", "B) BIOS", "C) UEFI", "D) start", "E) hiçbiri"],
    correctAnswer: "A) booting",
  },
  {
    id: 129,
    questionText:
      "Windows birçok konfigürasyon bilgisini hive (kovan) olarak adlandırılan iç veritabanlarında tutar. Bu anahtar-değer veritabanı yapısının adı nedir?",
    options: ["A) DBMS", "B) VTYS", "C) MySQL", "D) Registry", "E) MsSQL"],
    correctAnswer: "D) Registry",
  },
  {
    id: 130,
    questionText:
      "Windows güç yöneticisi (power manager) bileşeni tarafından bilgisayarın ana belleğindeki verilerin sabit belleğe kaydedilerek sistemin kapatılması işlemine ne ad verilir?",
    options: [
      "A) power save",
      "B) disk save",
      "C) sleep",
      "D) wake",
      "E) hibernate",
    ],
    correctAnswer: "E) hibernate",
  },
  {
    id: 131,
    questionText:
      "Atlas'ın en dikkat çekici özelliği ve onu etkin kılan en önemli özelliği ………….dir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: [
      "A) Bellek Yönetimi",
      "B) Hızlı olması",
      "C) Ekonomik olması",
      "D) Hesaplama Aracı olması",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Bellek Yönetimi",
  },
  {
    id: 132,
    questionText:
      "Atlas işletim sistemi ……kelimelik bir İngiliz bilgisayarı kullandı. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["A) 16 bit", "B) 32 bit", "C) 48 bit", "D) 64 bit", "E) 128 bit"],
    correctAnswer: "C) 48 bit",
  },
  {
    id: 133,
    questionText:
      "XDS-940 işletim sistemi Atlas sisteminin aksine, …………….. bir sistemdir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: [
      "A) Zaman paylaşımlı",
      "B) Bellek Paylaşımlı",
      "C) hız artırımlı",
      "D) sanal hafızasız",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Zaman paylaşımlı",
  },
  {
    id: 134,
    questionText:
      "XDS-940 Süreç sistemi hangi seçenekte doğru sıralama ile verilmiştir?",
    options: [
      "A) Alt süreçleri başlat, askıya al ve yok et",
      "B) Alt süreçleri askıya al, yok et ve başlat",
      "C) Alt süreçleri yok et, başlat ve askıya al",
      "D) Alt süreçleri başlat, yok et ve askıya al",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Alt süreçleri başlat, askıya al ve yok et",
  },
  {
    id: 135,
    questionText: "Aşağıdakilerden hangisi bir işletim sistemi değildir?",
    options: ["A) MULTICS", "B) THE", "C) XDS-940", "D) RC 4000", "E) AKOM"],
    correctAnswer: "E) AKOM",
  },
  {
    id: 136,
    questionText:
      '136-) "Çekirdek eşzamanlı işlemlerin toplanmasını desteklemekteydi. Çevrimsel sıralı CPU, zaman planı uygulayıcısı kullanılmıştı. İşlemler sekiz kelime uzunluğundaki sabit boyda mesajların değişimi ile birbirleriyle iletişim kurabilmekteydi. Tüm mesajlar ortak bir ara bellek alanından arabelleklerde saklanmaktaydı." Bahsi geçen işletim sistemi hangisidir?',
    options: ["A) MULTICS", "B) THE", "C) XDS-940", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "D) RC 4000",
  },
  {
    id: 137,
    questionText:
      "RC 4000 işletim sistemi mesaj konusunda aşağıdaki seçeneklerden hangisini desteklemektedir?",
    options: [
      "A) mesaj gönderme",
      "B) mesaj bekleme",
      "C) cevap yollama",
      "D) cevap bekleme",
      "E) hepsi",
    ],
    correctAnswer: "E) hepsi",
  },
  {
    id: 138,
    questionText:
      "MULTICS işletim sistemi 1965'den 1970'e kadar …….'nin doğal bir uzantısı olarak MIT'de tasarlanmıştır. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["A) CTSS", "B) THE", "C) XDS-940", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "A) CTSS",
  },
  {
    id: 139,
    questionText:
      "DEC'in işletim sistemlerinin en etkili olanı …….'dir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["A) CTSS", "B) THE", "C) TOPS-20", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "C) TOPS-20",
  },
  {
    id: 140,
    questionText:
      "İlk sistem programlama dilinde yazılmış işletim sistemi hangisidir?",
    options: ["A) CTSS", "B) MCP", "C) TOPS-20", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "B) MCP",
  },
];

const DijitalPazarlama = [
  {
    id: 1,
    questionText: "Aşağıdaki cümlelerden hangisi liderlik için doğrudur?",
    options: [
      "A) Günümüz işletmelerinde bütün liderler yöneticidir.",
      "B) Formal hakları yöneticiyi etkin liderlik etme konusunda yetkin kılar.",
      "C) Bütün yöneticiler liderdir.",
      "D) Bütün liderler takip edenlerinin hiyerarşik olarak üstü konumundadır.",
      "E) Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
    ],
    correctAnswer:
      "E) Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
  },
  {
    id: 2,
    questionText:
      "Aşağıdakilerden hangisinde liderlik fonksiyonunun değişkenleri tam olarak verilmiştir?",
    options: [
      "A) Yönetici, izleyiciler ve kurallar",
      "B) Yönetici, takipçiler ve değişkenler",
      "C) Veriler, senaryolar ve kurallar",
      "D) Lider, izleyiciler ve koşullar",
      "E) Faaliyet, süreç ve yöntemler",
    ],
    correctAnswer: "D) Lider, izleyiciler ve koşullar",
  },
  {
    id: 3,
    questionText: "Tanım olarak liderlik ............... sürecidir.",
    options: [
      "A) Organizasyonel politikalar",
      "B) Yetki verme",
      "C) Etkileme",
      "D) Zorlama",
      "E) Katılımcı yönetim",
    ],
    correctAnswer: "C) Etkileme",
  },
  {
    id: 4,
    questionText:
      "I. Liderlik, liderin, takipçilerin ve koşulların bir fonksiyonudur. II. Liderlik, çalışanları organizasyonel amaçlara ulaşmak için etkileme sürecidir. III. Liderlik bir meslektir ancak yöneticilik insanları etkileyerek amaçlar doğrultusunda harekete geçirme gücüdür. IV. Liderlik için belirlenmiş bir organizasyon yapısı gerekirken yöneticilik için formal bir yapıya gerek yoktur. V. Yöneticinin organizasyonel yapıdan kaynaklanan gücü; durağanlığı, emir vermeyi ve problem çözümünü yaratır. Ancak liderin gücü vizyon, yaratıcılık ve organizasyonel değişim yaratmaktadır. VI. Yöneticinin sahip olduğu güç organizasyonel yapıdan kaynaklanır. Liderin sahip olduğu güç kişisel özelliklerinden kaynaklanır. Yukarıdaki ifadelerden doğru olanlar hangileridir?",
    options: [
      "A) I-II-III-IV-V-VI",
      "B) I-II-V-VI",
      "C) I-III-IV-VI",
      "D) II-IV-V-VI",
      "E) II-III-V-VI",
    ],
    correctAnswer: "B) I-II-V-VI",
  },
  {
    id: 5,
    questionText:
      "Aşağıdakilerden hangisi, liderlerden ziyade yöneticilerden beklenen özellikler arasında sayılabilir?",
    options: [
      "A) Kontrole dayalı ilişki",
      "B) Güvene dayalı ilişki",
      "C) Uzun vadeli bakış açısı",
      "D) İnsanlara ve geleceğe odaklanma",
      "E) Neden diye sorma ve mevcut duruma meydan okuma",
    ],
    correctAnswer: "A) Kontrole dayalı ilişki",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi liderlik ile ilgili yanlış bir ifadedir?",
    options: [
      "A) Liderlik amaçlar doğrultusunda başkalarını etkileme ve harekete geçirme sürecidir.",
      "B) Lider izleyicileri etkileyebilmek için pozisyonundan ve kişisel özelliklerinden gelen güç kaynaklarını kullanmaktadır.",
      "C) Liderlik, liderin, izleyicilerin ve koşulların bir fonksiyonudur.",
      "D) Liderliğin ortaya çıkması için formal bir yapı ve meşru yetki zorunlu değildir.",
      "E) Liderlik sadece kavramsal beceriyle ilgilidir. İnsan ilişkileri ve teknik becerinin önemi yoktur.",
    ],
    correctAnswer:
      "E) Liderlik sadece kavramsal beceriyle ilgilidir. İnsan ilişkileri ve teknik becerinin önemi yoktur.",
  },
  {
    id: 7,
    questionText:
      "Aşağıdakilerden güç kaynaklarından hangisi yanlış açıklanmıştır?",
    options: [
      "A) Meşru güç, pozisyon gereği alabileceğimiz kararları belirlemektedir.",
      "B) Uzmanlık gücü liderin derin bilgi ve tecrübesine dayanır.",
      "C) Referans olma gücüne sahip liderleri izleyiciler örnek alır, ona benzemek isterler.",
      "D) Karizmatik güç liderin kişisel çekiciliği ve uyandırdığı hayranlık duygusuna dayanmaktadır.",
      "E) Mantıksal ikna gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
    ],
    correctAnswer:
      "E) Mantıksal ikna gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
  },
  {
    id: 8,
    questionText:
      "Liderin güç kaynaklarına ilişkin açıklamalardan hangisi yanlıştır?",
    options: [
      "A) Mantıksal İkna gücü liderin rasyonel argüman ve kanıtlarla izleyicileri ikna etmesine dayanmaktadır.",
      "B) Ödül gücü performans ve davranışları istenen düzeyde olmayan çalışanları cezalandırmaya dayanmaktadır.",
      "C) Politik güç liderin bürokratik kontrol ve politik manevralarla etki yaratması ve karşıt görüşleri zayıflatmasıdır.",
      "D) Dönüştürücü güç, liderin organizasyonun yönünü, kültürünü, iklimini değiştirme yeteneğidir.",
      "E) Bağlantı gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
    ],
    correctAnswer:
      "B) Ödül gücü performans ve davranışları istenen düzeyde olmayan çalışanları cezalandırmaya dayanmaktadır.",
  },
  {
    id: 9,
    questionText:
      "Yönetici becerilerine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Teknik becerilerin önemi alt kademe yönetim pozisyonlarından üst kademe yönetim pozisyonlarına doğru giderken azalmaktadır.",
      "B) İnsan ilişkileri becerisi her kademedeki yöneticiler için eş öneme sahip bir beceridir.",
      "C) Kavramsal beceri ileriyi görme vizyon oluşturma ve bunu aktarabilme ile ilişkilidir.",
      "D) Kavramsal becerinin en önemli olduğu yönetim kademesi alt yönetim kademesidir.",
      "E) Teknik beceri yöneticinin uzmanlık alanına ilişkin teknik bilgisi ile ilgilidir.",
    ],
    correctAnswer:
      "D) Kavramsal becerinin en önemli olduğu yönetim kademesi alt yönetim kademesidir.",
  },
  {
    id: 10,
    questionText:
      "Güç kaynaklarına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderlerin temel fonksiyonu izleyicilerini etkileyerek istenen sonuçlara ve beklentilere ulaşmalarını sağlamaktır ve bu güç kullanımı gerektirmektedir.",
      "B) Hem yöneticiler hem de liderler için güce ulaşmak ve kullanmak önemlidir.",
      "C) Liderler çoğu kez gücü elinde bulunduran üstün insanlar, süper kahramanlar olarak sıradan insanlardan farklı görülmektedirler.",
      "D) İzleyicilerin davranışlarını olumlu yönde etkileme sürecinde yararlanılan meşru ve kişisel dayanakları olan pek çok güç kaynağı bulunmaktadır.",
      "E) Güç kaynaklarının hepsi pozisyona dayalıdır.",
    ],
    correctAnswer: "E) Güç kaynaklarının hepsi pozisyona dayalıdır.",
  },
  {
    id: 11,
    questionText:
      "Liderlik teorilerinin gelişimine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderlik kavramı insanlık tarihi kadar eskidir.",
      "B) Toplumsal değişim sürecinin bir yansıması olarak etkin liderlik tarzları da değişmekte, bu liderlik tarzlarını açıklayan teoriler de gelişim göstermektedir.",
      "C) Liderlik üzerine yapılan ilk çalışmalar 1940'lı yıllarda işletme yönetiminde başarılı olan yöneticilerin kişisel özelliklerini tespit etmek ve evrensel bir lider profili çıkarmak üzere yapılmıştır.",
      "D) 1950'li yıllarda liderin tavır ve davranışlarının nasıl olması gerektiğine dair çalışmalara ağırlık verilmiştir.",
      "E) 1990'lı yıllarda özellikle bilgi ve iletişim teknolojilerindeki gelişmelerle işletmelerin faaliyette bulundukları çevrede kökten değişimler olması eski liderlik yaklaşımlarını kullanmayı gerekli kılmıştır.",
    ],
    correctAnswer:
      "E) 1990'lı yıllarda özellikle bilgi ve iletişim teknolojilerindeki gelişmelerle işletmelerin faaliyette bulundukları çevrede kökten değişimler olması eski liderlik yaklaşımlarını kullanmayı gerekli kılmıştır.",
  },
  {
    id: 12,
    questionText:
      "Liderlik yaklaşımlarının gelişimiyle ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) Liderlik yaklaşımlarının gelişimi toplumsal olaylardan bağımsız işletme yöneticilerinin tercihleri doğrultusunda olmuştur.",
      "B) Liderlik yaklaşımlarındaki gelişimin tek itici gücü liderin kişilik özellikleridir.",
      "C) 1990'lı yıllardan sonra işletmelerin faaliyette bulundukları çevrede kökten değişimler olması yeni bir tür liderliği zorunlu kılmıştır.",
      "D) Davranışsal liderlik yaklaşımlarında sadece liderin görev odaklı ve insan odaklı davranışları ele alınmıştır, bu davranışlardan sadece görev odaklının etkin olduğu vurgulanmıştır.",
      "E) Yönetim alanında sistem yaklaşımının etkileri ile birlikte etkin lider davranışlarında rol oynayan çevresel faktörler göz ardı edilmiştir.",
    ],
    correctAnswer:
      "C) 1990'lı yıllardan sonra işletmelerin faaliyette bulundukları çevrede kökten değişimler olması yeni bir tür liderliği zorunlu kılmıştır.",
  },
  {
    id: 13,
    questionText: "Aşağıdakilerden hangisi X teorisi varsayımıdır?",
    options: [
      "A) Çalışmak oyun, dinlenme kadar doğaldır.",
      "B) İnsanlar tipik olarak tembeldir, çalışmak istemezler.",
      "C) İnsan tipik olarak tembel değildir, gerekli ortam ve uygun iş verildiğinde çalışmak oyun oynamak kadar zevklidir.",
      "D) Kişinin çalışmak istemesinde geçmiş kötü tecrübelerinin rolü vardır.",
      "E) Uygun koşullar olduğunda çalışanlar sorumluluk almak istemektedir.",
    ],
    correctAnswer: "B) İnsanlar tipik olarak tembeldir, çalışmak istemezler.",
  },
  {
    id: 14,
    questionText:
      "Kurt Lewin'in liderlik sınıflandırmasına göre aşağıdakilerden hangisi söylenemez?",
    options: [
      "A) Otokratik liderlikte tüm yetki liderde toplanmaktadır.",
      "B) Lewin'in araştırması esnasında otokratik rol üstlenen liderlerde grup üyelerinin iki tür tepki gösterdiği ortaya konmuştur: bunlardan biri saldırgan ve düşmanca tavır, diğeri uyumlu tavırdır.",
      "C) Demokratik (katılımcı) liderlikte yetki izleyicilerle paylaşılarak amaçlara ve iş dağılımına beraber karar verilmektedir.",
      "D) Lewin'in araştırması esnasında katılımcı liderlik ikliminde, liderin yokluğunda da grup üyelerinin çalışmaya devam ettiği gözlemlenmiştir.",
      "E) Özgür bırakıcı (Laissez-Faire) tarzda lider emirler vererek ve sıkı kontrollerde bulunarak izleyicileri yönlendirmektedir.",
    ],
    correctAnswer:
      "E) Özgür bırakıcı (Laissez-Faire) tarzda lider emirler vererek ve sıkı kontrollerde bulunarak izleyicileri yönlendirmektedir.",
  },
  {
    id: 15,
    questionText:
      "Aşağıdakilerden hangisi özellikler teorisine yöneltilen eleştiriler arasında sayılamaz?",
    options: [
      "A) Yalnızca liderlerin kişilik özelliklerini ele alarak liderliği etkileyen diğer faktörleri gözardı etmesi",
      "B) İnsanları nitelendirebilecek sınırsız özelliğin var olması nedeniyle lider özelliklerini sınıflandırma güçlüğü",
      "C) Etkili lideri tanımlayabilecek tüm özellikleri belirlemenin güçlüğü",
      "D) Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
      "E) Birbirinden farklı çalışmaların farklı lider özellikleri ortaya koyması",
    ],
    correctAnswer:
      "D) Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
  },
  {
    id: 16,
    questionText:
      "Rensis Likert'in Sistem 1 - Sistem 4 Yaklaşımına göre aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) İstismarcı otokratik yönetim tarzında lider çalışanlara biraz yakın olmaya çalışır, ara sıra fikirlerini sorar.",
      "B) Katılımcı yönetim tarzında lider genellikle kendi fikrini kullanır.",
      "C) Yardımsever yönetim tarzında lider çalışanların fikirlerini ve beklentilerini sorar, onlarla beraber karar alır.",
      "D) Demokratik yönetim tarzında lider astlarına tam olarak güvenir, fikirlerine her zaman danışır.",
      "E) Likert'e göre verimliliğin yüksek olduğu gruplarda sistem-1 istismarcı otokratik liderlik tarzıdır.",
    ],
    correctAnswer:
      "D) Demokratik yönetim tarzında lider astlarına tam olarak güvenir, fikirlerine her zaman danışır.",
  },
  {
    id: 17,
    questionText:
      "Ohio State Üniversitesi çalışmasına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderin davranışları işe ve kişiye yönelik olmak üzere iki boyutta ele alınmaktadır.",
      "B) Kişiyi dikkate alan liderler izleyicilerin fikirlerini ve duygularını önemsemektedir.",
      "C) Kişiyi dikkate alan liderler dostça tavır, açık iletişim, takım çalışması aracılığıyla izleyicileri için bir güven ortamı hazırlamakta ve onları güçlendirmektedirler.",
      "D) İşe dönük liderler amaçları gerçekleştirmek için işleri planlamakta, örgütlemekte ve çalışanı görev odaklı bir şekilde yönlendirmektedir.",
      "E) İşe dönük liderler işin nasıl, hangi zamana kadar yapılması gerektiğine ilişkin kararları çalışanlara bırakmakta, dostluk ve güven ortamı inşa etmektedir.",
    ],
    correctAnswer:
      "E) İşe dönük liderler işin nasıl, hangi zamana kadar yapılması gerektiğine ilişkin kararları çalışanlara bırakmakta, dostluk ve güven ortamı inşa etmektedir.",
  },
  {
    id: 18,
    questionText:
      "Yönetim Tarzı Matrisi'ne ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Cılız liderlik ne işi yerine getirmek için ne de çalışanların arzu ve ihtiyaçlarını tatmin etmek için çaba göstermez.",
      "B) Cılız liderlikte hem üretim düzeyi hem çalışan tatmini düşüktür.",
      "C) Kulüp liderliğinde çalışanların tatminine ve arkadaşça bir ortam yaratmaya odak ve düşük iş ilgisi vardır.",
      "D) Görev liderliğinde üretim hedeflerine önem verilmekte, çalışanların istek ve ihtiyaçları göz ardı edilmektedir.",
      "E) En etkili liderlik tarzı orta yol liderliktir.",
    ],
    correctAnswer: "E) En etkili liderlik tarzı orta yol liderliktir.",
  },
  {
    id: 19,
    questionText:
      "Yönetim Tarzı Matrisi'ne ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Takım liderliğinde üretkenlik ve çalışan tatmini en üst düzeydedir.",
      "B) Fırsatçı lider merhametli bir davranış içindeki 'müşfik diktatör' gibidir.",
      "C) Orta yol liderliğinde üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlanmaktadır.",
      "D) Paternalist ve maternalist lider çalışanlara bir anne baba gibi ilgi ile davranır.",
      "E) Paternalist ve maternalist liderler örgütü bir aile gibi görür, önemli kararları kendileri verir, itaati ödüllendirir.",
    ],
    correctAnswer:
      "B) Fırsatçı lider merhametli bir davranış içindeki 'müşfik diktatör' gibidir.",
  },
  {
    id: 20,
    questionText:
      "Fırsatçı lidere ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Kişisel çıkarını sağlayabilmek için yönetim tarzı matrisinde sıralanan beş temel tarzın herhangi birini kullanan liderdir.",
      "B) Üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlamaktadır.",
      "C) Liderin önceliği kişisel faydasını artırmaktır.",
      "D) Kişisel faydasını sağlamak için en etkin olacak davranış şeklini içeren tarza bürünmektedir.",
      "E) Bu liderleri 'kurnaz' olarak nitelendiren ya da kimileri 'uyumlu' olarak nitelendiren düşünürler bulunmaktadır.",
    ],
    correctAnswer:
      "B) Üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlamaktadır.",
  },
  {
    id: 21,
    questionText:
      "Fiedler'in Durumsal Liderlik Yaklaşımına göre aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Yaklaşım üç durumsal değişken ile liderin çalışma ortamını etkileme ve kontrol etme gücünü belirlemeye dayalıdır.",
      "B) Durumsal kontrol değişkenleri şunlardır: lider-çalışan ilişkisi, işin niteliği, pozisyon gücü.",
      "C) Pozisyon gücü yöneticinin sahip olduğu kişisel güç kaynaklarıdır.",
      "D) Önceden iyi tanımlanmış, rutin işler yüksek nitelikli; yaratıcı, önceden tanımlanması güç işler düşük niteliklidir.",
      "E) Lider-çalışan ilişkisi, yöneticiye duyulan güven ve kabul ile ilişkilidir.",
    ],
    correctAnswer:
      "C) Pozisyon gücü yöneticinin sahip olduğu kişisel güç kaynaklarıdır.",
  },
  {
    id: 22,
    questionText:
      "Fiedler'in Durumsal Liderlik Yaklaşımına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Durumsal koşullar liderin durumsal kontrolü üzerinde etkili değildir.",
      "B) Durumsal kontrol, liderin çalışma ortamını etkileme ve kontrol etme gücü olarak tanımlanabilir.",
      "C) Durumsal kontrol yüksek ise lider işin sonuçlarını etkileyebilir, düşük ise liderin iş çıktısına etkisi zayıftır.",
      "D) Liderin her bir durumsal değişkenin farklı niteliklerde bir arada bulunmasına göre düşük, orta ve yüksek seviye durumsal kontrolü söz konusudur.",
      "E) Düşük ve yüksek kontrol durumlarında işe yönelik, orta kontrol durumunda kişiye yönelik bir liderlik tarzı etkili olmaktadır.",
    ],
    correctAnswer:
      "A) Durumsal koşullar liderin durumsal kontrolü üzerinde etkili değildir.",
  },
  {
    id: 23,
    questionText:
      "Durumsal liderlik yaklaşımına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Yönlendirici liderliğe göre işi yapamayacak durumda, isteksiz ve kendine güvensiz durumdaki çalışanlar için lider belirli görevleri açıkça vermelidir.",
      "B) Yönlendirici liderlik tarzı için işbirlikçi, kolaylaştırıcı, taahhüt edici isimleri de kullanılmaktadır.",
      "C) İkna edici liderin sadece yapılacak işi söylemesi yeterli olmayacak; yapılması gerekeni bir fikir olarak çalışana psikolojik olarak satması etkili olacaktır.",
      "D) Katılımcı liderin en etkin davranışı ilişki yönelimli, ikili iletişim kuran destekleyici davranışlardır. Yönlendirme düşük olmalıdır.",
      "E) Güçlendirici liderlikte çalışana neyi, nasıl yapması gerektiğini söylemek gereksiz olacaktır. En uygun davranış işleri çalışana bırakmaktır.",
    ],
    correctAnswer:
      "B) Yönlendirici liderlik tarzı için işbirlikçi, kolaylaştırıcı, taahhüt edici isimleri de kullanılmaktadır.",
  },
  {
    id: 24,
    questionText:
      "Aşağıdaki liderlik türünden hangisi Amaç Yol Yaklaşımının ortaya koyduğu sınıflandırmada bulunmaz?",
    options: [
      "A) Otoriter",
      "B) Destekleyici",
      "C) Katılımcı",
      "D) Başarı odaklı",
      "E) İstismarcı",
    ],
    correctAnswer: "E) İstismarcı",
  },
  {
    id: 25,
    questionText:
      "Amaç yol yaklaşımına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Motivasyon teorilerinden bekleyişler yaklaşımı ile liderlik teorilerini birleştiren bir bakış açısı sunmaktadır.",
      "B) Çalışanların işi yapmak için kendilerini yeterli gördüklerinde ve işi tamamlayarak ulaşacakları ödülü arzuladıklarında motive olacakları varsayımına dayanmaktadır.",
      "C) Liderin rolü çalışanları motive edecek ihtiyaçları karşılamaktır.",
      "D) Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
      "E) Amaç yol yaklaşımına göre lider çalışanlara amaçları gerçekleştirecekleri yolu açıklamakta, yol boyunca onlara eşlik etmektedir.",
    ],
    correctAnswer:
      "D) Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
  },
  {
    id: 26,
    questionText:
      "Lider üye etkileşimine (LMX) ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Lider Üye Etkileşimi teorisi lider ve izleyiciler arasında, karşılıklı olarak gelişen ilişkilere dayanmaktadır.",
      "B) Teorinin önceki yaklaşımlardan en temel farkı, lider ve/veya izleyicilerin özellikleri veya davranışlarına değil, aralarındaki ilişkinin kalitesine odaklanmasıdır.",
      "C) LMX, liderlerin tüm çalışanlara belirli bir tarz ile yaklaşmadığı, bunun yerine her bir çalışanla birebir ve özgün bir ilişki geliştirdikleri varsayımına dayanmaktadır.",
      "D) Davranış bilimciler LMX teorisinin ele aldığı davranışa 'dikey ikili' adını vermektedirler.",
      "E) Dikey ikili çalışanın herhangi bir görevi reddetmesiyle başlamaktadır.",
    ],
    correctAnswer:
      "E) Dikey ikili çalışanın herhangi bir görevi reddetmesiyle başlamaktadır.",
  },
  {
    id: 27,
    questionText:
      "Dikey ikilinin gelişme sürecinde aşağıdaki aşamalardan hangisi bulunamaz?",
    options: [
      "A) Liderle üyenin ilk etkileşimi",
      "B) Üyenin ailesiyle olan davranışları",
      "C) Lider tarafından üyeye görevler verilmesi",
      "D) Üyenin bu görevler karşısındaki tutum ve davranışları",
      "E) Liderin üye davranışına yönelik tutum ve davranışları",
    ],
    correctAnswer: "B) Üyenin ailesiyle olan davranışları",
  },
  {
    id: 28,
    questionText:
      "Lider üye etkileşiminin kalitesine (niteliğine) ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) LMX sürecinin ilk girdisi lider üye arasındaki etkileşiminin niteliğidir.",
      "B) Etkileşimin niteliği grup içi, grup dışı ve gruplar arası olmak üzere üç türlü olabilmektedir.",
      "C) Grup içi etkileşim liderle izleyici arasında karşılıklı güven, saygı ve hoşlanmanın eksik olduğu etkileşimdir.",
      "D) Grup dışı etkileşimde sadece görev odaklı bir ortaklık geliştirilebilmektedir.",
      "E) Düşük kaliteli etkileşimde lider ve izleyiciler karşılıklı güven, saygı ve hoşlanma özelliklerini taşıyan bir ortaklık geliştirmektedirler.",
    ],
    correctAnswer:
      "D) Grup dışı etkileşimde sadece görev odaklı bir ortaklık geliştirilebilmektedir.",
  },
  {
    id: 29,
    questionText:
      "Lider üye etkileşimin boyutlarına ilişkin tanımlamalardan hangisi yanlıştır?",
    options: [
      "A) Etki: Karşılıklı hoşlanma",
      "B) İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
      "C) Katkı: Görev odaklı ilişkiler geliştirmede başarılı olma",
      "D) Sadakat: Birbirinin beklediği doğrultuda davranma, birbirini destekleme, vefakarlık",
      "E) Profesyonel Saygı: İşini nasıl yaptığına ilişkin itibarı",
    ],
    correctAnswer:
      "B) İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
  },
  {
    id: 30,
    questionText:
      "Profesyonel saygı boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Lider ve çalışanın birbirlerinin örgüt içi ya da dışında mesleki itibarlarını algılamalarıdır.",
      "B) Profesyonel saygıya ilişkin algılama yöneticinin geçmişine dayalıdır.",
      "C) Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
      "D) Yöneticinin birlikte çalıştığı kişilerle yaşadığı deneyimler, başkalarının onun hakkındaki yorumları yoluyla profesyonel saygıya ilişkin algı oluşabilmektedir.",
      "E) Bu boyut güven ve yüksek saygı ile yakından ilişkilidir.",
    ],
    correctAnswer:
      "C) Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
  },
  {
    id: 31,
    questionText:
      "Günümüz işletmelerinde liderlik uygulamalarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderin paylaşılan bir vizyon yaratması ve herkesi buna dahil etmesi gerekmektedir.",
      "B) Herkesin kabul edildiği, ait hissettiği, anlamlı bulduğu pozitif iş ortamı yaratmak günümüz liderlerinin görevleri arasındadır.",
      "C) Verimliliği artırmak için çalışana ofiste geçirdiği saat kadar ücret vermek gerekir.",
      "D) Lider takipçi arasında ve çalışanların kendi arasında etkili insan ilişkileri geliştirmek önem taşımaktadır.",
      "E) Bilgi ve kaynak paylaşımında dürüst, adil ve etik olmak gerekmektedir.",
    ],
    correctAnswer:
      "C) Verimliliği artırmak için çalışana ofiste geçirdiği saat kadar ücret vermek gerekir.",
  },
  {
    id: 32,
    questionText:
      "Geçmişten günümüze rekabet avantajları düşünüldüğünde aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) 1950'lerde işletmelere rekabet avantajı sağlayan en temel faktör 'operasyonel verimlilik' olarak görülmektedir.",
      "B) 1960'larda 'stratejik planlama' önem kazanmaya başlamıştır.",
      "C) 1970'lerde stratejik bakış açısında 'konumlandırma' önem taşımaya başlamıştır.",
      "D) 1980'lerde 'kalite ve mükemmeli arayış' gündeme gelmiştir.",
      "E) 2000'li yıllarda rekabet avantajı sağlayan en önemli kaynak finansal varlıklardır.",
    ],
    correctAnswer:
      "E) 2000'li yıllarda rekabet avantajı sağlayan en önemli kaynak finansal varlıklardır.",
  },
  {
    id: 33,
    questionText:
      "Yakın dönem işletme yaklaşımlarına dair aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) 1980'ler operasyonel verimliliğin ve kalite kontrolünün önemli olduğu yıllardır. Temel argüman, mümkün oldukça ucuz ve çok sayıda ürün üretebilmektir.",
      "B) 1990'larda rekabet avantajı sağlayan en önemli kaynak 'öz yetenek' olarak görülmektedir.",
      "C) 1990'lardan sonra mamullerin yaşam seyri iyice kısalmış, rekabet yerini sürekli yenilik ve yeni mamul geliştirmeye bırakmıştır.",
      "D) 2000'li yıllarda işletmelerin performanslarının insanlar sayesinde yükseltildiği bir döneme girilmiştir.",
      "E) 21. Yüzyılda işletmeler bilgiyi daha verimli kullanmaya ve entelektüel sermayeyi iyi yönetmeye yönelmektedirler.",
    ],
    correctAnswer:
      "A) 1980'ler operasyonel verimliliğin ve kalite kontrolünün önemli olduğu yıllardır. Temel argüman, mümkün oldukça ucuz ve çok sayıda ürün üretebilmektir.",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi günümüz liderinin rolleri arasında sayılamaz?",
    options: [
      "A) Lider-takipçi arasında ve çalışanlar arasında etkili insan ilişkileri geliştirmek",
      "B) Zaman hareket etütleriyle bir işin daha hızlı nasıl yapılabileceğini analiz etmek",
      "C) Herkesin kabul edildiği, ait hissettiği, anlamlı bulduğu pozitif iş ortamı yaratmak",
      "D) Bilgi ve kaynak paylaşımında dürüst, adil ve etik olmak",
      "E) Paylaşılan bir vizyon yaratmalı ve herkesi buna dahil etmelidir.",
    ],
    correctAnswer:
      "B) Zaman hareket etütleriyle bir işin daha hızlı nasıl yapılabileceğini analiz etmek",
  },
  {
    id: 35,
    questionText:
      "Aşağıdakilerden hangisi günümüzde insan yönetmeyi zorlaştıran unsurlar arasında sayılamaz?",
    options: [
      "A) Gücün kötüye kullanımı",
      "B) Zorbalık, mobbing, taciz",
      "C) İş yerlerinde çalışan çeşitliliği, farklılık yönetimi sorunları",
      "D) Vizyona uygun stratejiler belirleme zorunluluğu",
      "E) Etik olmayan davranışlar",
    ],
    correctAnswer: "D) Vizyona uygun stratejiler belirleme zorunluluğu",
  },
  {
    id: 36,
    questionText:
      "Karizmatik liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Karizma bir kişiyi normal insanlardan ayıracak, az bulunur bir kişilik kalitesidir.",
      "B) Kişisel risk alabilme, yüksek bedel ödemeye razı olma ve beklenenin dışında davranışlar gösterebilme karizmatik liderlerin özellikleri arasındadır.",
      "C) Karizmatik liderlik her zaman olumlu sonuçlar doğurur.",
      "D) Karizmatik liderlik birey ve grupları çabuk etkileme ve yüksek performans ortaya koyma açısından faydalıdır.",
      "E) Karizmatik liderlere çalışanların hayranlığı, liderin yanlışlarını görme, uyarma gibi davranışları azaltmaktadır.",
    ],
    correctAnswer: "C) Karizmatik liderlik her zaman olumlu sonuçlar doğurur.",
  },
  {
    id: 37,
    questionText:
      "Geleneksel ve güncel liderlik teorileri düşünüldüğünde aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Etkileşimci liderlik, çalışanların rollerinin belirlenmesi ve performansa uygun ödül sağlanması için lider-çalışan etkileşimine odaklanır.",
      "B) Dönüşümcü liderler çalışanlara organizasyonel amaçlara ulaşmaya katkı sağlaması için ilham veren liderlerdir.",
      "C) Dönüşümcü liderler inovasyon ve değişim getirmede özel yeteneklere sahiptirler, statükoyu kabul etmezler.",
      "D) Geleneksel liderlik teorilerinde liderin bilgi yayıcı (iletişimci) rolü göz ardı edilmiştir.",
      "E) En iyi ve her ortamda geçerli tek bir liderlik tarzı vardır.",
    ],
    correctAnswer:
      "E) En iyi ve her ortamda geçerli tek bir liderlik tarzı vardır.",
  },
  {
    id: 38,
    questionText:
      "Aşağıdakilerden hangisi Karizmatik liderleri karakterize eden yeteneklerden biridir?",
    options: [
      "A) Çalışanları ezen",
      "B) Organizasyon üyelerine vizyon sağlama",
      "C) Çalışanları arasında saygı uyandıran",
      "D) Takip edenleri tarafından hayranlık uyandıran",
      "E) Çalışanlarında entelektüel faaliyetlerde hayal kırıklığı yaratan",
    ],
    correctAnswer: "D) Takip edenleri tarafından hayranlık uyandıran",
  },
  {
    id: 39,
    questionText:
      "Vizyon ve vizyoner liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) İşletme yönetiminde vizyon genel olarak 'hayal edilen gelecek', çalışanlar için hedefe ulaşma yolunu gösteren bir haritadır.",
      "B) Vizyoner liderlik çalışanlara vizyona uygun performanslarını ödüllendirmek, vizyondan sapan davranışları cezalandırmak üzerine kuruludur.",
      "C) Vizyon; kişilerin veya kurumların, kendilerinin gelecekte olmasını arzu ettikleri durumun ifadesidir.",
      "D) Vizyoner liderlik en yalın haliyle, net bir vizyon oluşturmak, bunu açıkça ifade etmek ve insanların dahil olmasını sağlamaktır.",
      "E) Vizyoner liderlik insanlara vizyon aşılayarak motive etmekle ilgilidir.",
    ],
    correctAnswer:
      "B) Vizyoner liderlik çalışanlara vizyona uygun performanslarını ödüllendirmek, vizyondan sapan davranışları cezalandırmak üzerine kuruludur.",
  },
  {
    id: 40,
    questionText:
      "Dönüşümcü liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderin birincil odağı organizasyondur.",
      "B) Dönüşümcü liderler vizyon oluşturma, yayma, çalışanlar arasında kabulünü sağlama gibi günümüz organizasyonlarının pek çok ihtiyacını karşılayamamakta, bunu etkileşimci liderlik karşılayabilmektedir.",
      "C) İzleyicilerin kişisel gelişimleri organizasyon için neyin iyi olduğu çerçevesinde değerlendirilir.",
      "D) Liderin organizasyonun amaçlarını kişisel amaçları doğrultusunda manipüle etme riski vardır.",
      "E) Dönüşümcü liderliğin en önemli farkı, izleyicilerin organizasyon ile eş güdülere sahip olmalarını sağlamasıdır.",
    ],
    correctAnswer:
      "B) Dönüşümcü liderler vizyon oluşturma, yayma, çalışanlar arasında kabulünü sağlama gibi günümüz organizasyonlarının pek çok ihtiyacını karşılayamamakta, bunu etkileşimci liderlik karşılayabilmektedir.",
  },
  {
    id: 41,
    questionText:
      "Aşağıdakilerden hangisi örgütsel değişimin aşamaları ararsında yer almaz?",
    options: [
      "A) Değişim ihtiyacını belirleme",
      "B) Değişim ekiplerini dağıtma",
      "C) Vizyon ve değerler yaratma",
      "D) İletişim kurma ve dahil olma",
      "E) Güçlendirme",
    ],
    correctAnswer: "B) Değişim ekiplerini dağıtma",
  },
  {
    id: 42,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Rutin bir teknik sorunu çözmek için gereken liderlik türü ile karmaşık örgütsel değişikliği sağlamak için gereken liderlik türü birbirinin aynısıdır.",
      "B) Değişim liderleri, çevredeki, insanlardaki ve kültürdeki değişiklikleri veya önemli süreçlerdeki değişiklikleri ele alarak, karmaşıklıkla başa çıkmalı ve uyum sağlamalıdır.",
      "C) Değişim liderleri insanlar için sorunları çözmek değil, onları sorunlardan sorumlu tutmaya, işin sahibi kılmaya yönelmektedirler.",
      "D) Etkili bir değişim süreci için olunda gitmeyen işler ve zorluklardan izleyicileri korumak değil, liderle beraber yolunda gitmeyen şeylerin sıkıntısını anlamalarına izin vermek gerekmektedir.",
    ],
    correctAnswer:
      "A) Rutin bir teknik sorunu çözmek için gereken liderlik türü ile karmaşık örgütsel değişikliği sağlamak için gereken liderlik türü birbirinin aynısıdır.",
  },
  {
    id: 43,
    questionText:
      "Değişim sürecinin vizyon ve değer yaratma aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "A) Fikirleri başlatmak",
      "B) Beyin fırtınası yapmak",
      "C) Farklı ve yaratıcı düşünmeyi teşvik etmek",
      "D) İkna etmek ve zorlamak",
      "E) Geleceği öngörmek",
    ],
    correctAnswer: "D) İkna etmek ve zorlamak",
  },
  {
    id: 44,
    questionText:
      "Değişim sürecinin güçlendirme aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "A) Açık ve net hedef belirleme",
      "B) İyi derecede yetki devri",
      "C) Gündemleri belirlemek ve emir vermek",
      "D) Detaylarla ilgili direktifler vermeden serbestçe yönetmek",
      "E) Koçluk yapmak",
    ],
    correctAnswer: "C) Gündemleri belirlemek ve emir vermek",
  },
  {
    id: 45,
    questionText:
      "Değişim sürecinin güçlendirme aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "A) Etkilemek",
      "B) Anlamak",
      "C) Araştırmak",
      "D) Dinlemek",
      "E) İzlemek ve kontrol etmek",
    ],
    correctAnswer: "E) İzlemek ve kontrol etmek",
  },
  {
    id: 46,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Değişim sürecinde işletmelere rekabet avantajı sağlayacak kilit roldeki faktör yenilik yaratma ve yaygınlaştırmaktır.",
      "B) Sürdürülebilir bir rekabet üstünlüğü için gerekli yeniliği yaratmada insan faktörü yüzyılın en önemli üretim faktörü olarak dikkat çekmekte, insanın yaratıcı ve yenilikçi kapasitesini ortaya çıkaracak yöntem ve liderlik süreçleri önem taşımaktadır.",
      "C) Toplam kalite yönetimi yaklaşımı insan unsurunu, faaliyetleri ve nihai ürünü belirleyen dış müşteriler ve üretimi gerçekleştiren, onu sürekli geliştiren iç müşteriler (çalışanlar) olarak odak noktasına oturtarak yeniliğin önemini vurgulamıştır.",
      "D) İşletme yönetiminde yenilik yaratmadan sürekli aynı ürünleri üreterek başarı sağlamak da mümkündür.",
      "E) Öğrenen organizasyonlar insan faktörü işletme içinde bilgi toplama ve işleme kapasitesine sahip, yaratıcılığı ortaya çıkartabilecek olan yegane unsur olarak görerek; yeniliğin önemini vurgulamıştır.",
    ],
    correctAnswer:
      "D) İşletme yönetiminde yenilik yaratmadan sürekli aynı ürünleri üreterek başarı sağlamak da mümkündür.",
  },
  {
    id: 47,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Başarılı işletmelerin ekonomideki ağırlıkları incelendiğinde tarihsel olarak geçmişte tarım toplumları, sonraları endüstri toplumları bugün ise bilgi toplumları önem kazanmıştır.",
      "B) İşletme yönetiminde mutlaka dış çevreye odaklanmak, değişmek ve yenilik yapmak gerekli değildir.",
      "C) Geleneksel üretim faktörlerinde azalan verim kanunu geçerliliğini korurken bilgi daha yoğun olarak kullanıldığında üretim artışına etkisi azalan değil artan verim yaratmaktadır.",
      "D) Bilginin az bulunurluğu varsayımının ortadan kalkmasıyla eskiden karşı karşıya olunan bilgi eksikliği (bilgi darboğazı) aşılmış, ancak şimdi de yeterli bilgi olduğunda bununla ne yapılacağına karar verilememesi yani düşünce eksikliği (düşünce darboğazı) karşımıza çıkmaktadır.",
      "E) Bugün bilgiyi elde etmek ve kullanmak her zamankinden daha önemli, ancak bilgiyi kullanma şekli bilginin kendisinden daha da önemlidir.",
    ],
    correctAnswer:
      "B) İşletme yönetiminde mutlaka dış çevreye odaklanmak, değişmek ve yenilik yapmak gerekli değildir.",
  },
  {
    id: 48,
    questionText:
      "Aşağıdakilerden hangisi yeniliğe liderlik etmede etkili olan liderlik tarzları arasında sayılamaz?",
    options: [
      "A) Dönüşümcü liderlik",
      "B) Çift yönlü liderlik",
      "C) Karizmatik liderlik",
      "D) Otokratik liderlik",
      "E) Vizyoner liderlik",
    ],
    correctAnswer: "D) Otokratik liderlik",
  },
  {
    id: 49,
    questionText:
      "'.......' akıllı, güvenilir bir danışman veya yol gösterici olan Yunan mitolojisinden bir karakterin adıdır.",
    options: [
      "A) Koçluk",
      "B) Mentorluk",
      "C) Yöneticilik",
      "D) Rehberlik",
      "E) Danışmanlık",
    ],
    correctAnswer: "B) Mentorluk",
  },
  {
    id: 50,
    questionText:
      "'.......' son iki-üç yüzyıldır kullanılan, bir kişinin bilgi ve becerilerini bir öğretim veya öğretme biçimi aracılığıyla daha üst seviyeye taşımaya yardımcı olan kişiyi belirten bir terimdir. Yirminci yüzyılda özellikle, spor ve performans gerektiren işlerle ilgili olarak yaygın şekilde kullanılmaktadır.",
    options: [
      "A) Koçluk",
      "B) Mentorluk",
      "C) Yöneticilik",
      "D) Rehberlik",
      "E) Danışmanlık",
    ],
    correctAnswer: "A) Koçluk",
  },
  {
    id: 51,
    questionText:
      "Aşağıdakilerden hangisi koçluk veya mentorluk süreçlerinin basamaklarından olamaz?",
    options: [
      "A) İhtiyaçların, arzuların ve benliğin farkına varmak için analiz",
      "B) Öz sorumluluk geliştirmek için planlama",
      "C) Stiller, teknikler ve beceriler kullanarak uygulama",
      "D) Başarı ve öğrenme düzeyini değerlendirme",
      "E) Danışanı gerektiğinde azarlama",
    ],
    correctAnswer: "E) Danışanı gerektiğinde azarlama",
  },
  {
    id: 52,
    questionText:
      "Takım liderliğine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Organizasyonlarda kurulan takımların içinde genellikle birbirini tamamlayıcı ve farklı bilgi ve profesyonel tecrübeye sahip üyeler bir arada çalışmaktadırlar. Bu çeşitlilikteki kapasitelerin bir arada çalışması sebebiyle takımlardan daha yüksek bir performans beklenmektedir.",
      "B) Takımlara liderlik, tüm takım üyelerinin ortak bir hedefe ulaşma yönünde etkileşime girdiği karmaşık bir etkileme süreci olarak ele alınmalıdır.",
      "C) Takımlara liderlik ederken takım üyelerinin tamamlayıcı özellik ve niteliklerine ortam tanıyan, daha esnek ve dinamik bir süreç gerekli olmaktadır.",
      "D) Organizasyonlarda takımlar genellikle belirli bir iş ya da projenin tamamlanması için oluşturulmakta, bu nedenle takımı oluşturan bireylerin kendi kendilerine liderliği, yürütülen projeye uygun genellikle geçici görevlerini gerçekleştirirken takıma uyum sağlamaları beklenmektedir. Burada vurgu daha çok liderlikten ziyade etkili bir izleyicilik (takipçilik) ortaya koymaktadır.",
      "E) Takım üyelerinin belirsizliğe toleransının yüksek olması, farklı insanlardan gelen liderliği kabulü pek mümkün olmayan bir durumdur.",
    ],
    correctAnswer:
      "E) Takım üyelerinin belirsizliğe toleransının yüksek olması, farklı insanlardan gelen liderliği kabulü pek mümkün olmayan bir durumdur.",
  },
  {
    id: 53,
    questionText:
      "Strateji, stratejik liderlik ve stratejik yönetime ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Strateji, rakiplerin faaliyetlerini inceleyerek, amaçlara ulaşmak için belirlenmiş, nihai sonuç odaklı, uzun dönemli, dinamik kararlar topluluğudur.",
      "B) Stratejik karar alma sürecinde yöneticiler yönetsel inisiyatifi etkileyen unsurlar ve kavramsal becerilerinin etkisi altında faaliyette bulunmaktadır. Bu nedenle stratejik liderlik, tüm bu stratejik kararları stratejik bir bilinç ile alabilme yeteneğine sahip üst yönetim liderliği olarak ele alınabilir.",
      "C) Yöneticilerin verdiği her karar stratejik karar değildir. Özellikle alt ve orta kademe yönetim günlük, rutin kararları yüksek belirlilik ortamında alabilmektedirler.",
      "D) Üst yönetim çoğunlukla rutin, belirli, kısa vadeli kararlar almaktadır.",
      "E) Stratejik yönetim süreci, sürdürülebilir rekabet üstünlüğü sağlamak amacıyla kaynakların etkili ve verimli olarak kullanılmasına odaklanmakta, bir başka deyişle en tepeden işletmenin gideceği yöne, rakipleriyle rekabet ediş şekline, uzun dönem amaç ve rekabet üstünlüğünü koruma biçimine karar vermekle ilgilidir.",
    ],
    correctAnswer:
      "D) Üst yönetim çoğunlukla rutin, belirli, kısa vadeli kararlar almaktadır.",
  },
  {
    id: 54,
    questionText:
      "İnsan odaklılığın düşük olduğu bir toplum ve organizasyona ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Toplumda bireysel çıkar, güç ve mülkiyet sahipliği değer görmektedir.",
      "B) Toplum üyeleri başkalarının refahı için bireysel düzeyde sorumluluk ve ayrımcılığa yönelik hassasiyet duymamakta, bunları devlet ve kurumlardan beklemektedir.",
      "C) Organizasyonda yöneticiler, formal iletişim, bürokrasiye dayalı kontrolün olduğu ve otonom çalışmanın hoş karşılanmadığı bir ortam oluşturmaktadırlar.",
      "D) Organizasyonlarda olumlu iş tutumları gözlemlenmektedir.",
      "E) Organizasyonlarda işten kaytarma ve tatminsizlik gibi olumsuz iş tutumları,",
    ],
    correctAnswer:
      "D) Organizasyonlarda olumlu iş tutumları gözlemlenmektedir.",
  },
  {
    id: 55,
    questionText:
      "İnsan odaklılıkla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) İnsan odaklı liderliğin önemi özellikle otokratik ya da hiyerarşi temelli liderlik tarzlarıyla kıyaslandığında anlaşılabilmektedir.",
      "B) Aşırı otokratik, emir verici ve kontrol odaklı davranışlar gösteren liderler çalışanların saygı ve güvenini kazanamaması olasıdır; insan odaklı liderlik bu davranışların tam tersinde bulunmaktadır.",
      "C) İnsan odaklı lider yaklaşımları, geleneksel otokratik liderlik yaklaşımlarının bugünün çalışanlarını motive etmekte yetersiz olduğu konuları da dikkate almaktadır.",
      "D) Kriz ortamındaki zor koşullarda, hızla kararlar verilmesi gerektiğinde insan odaklı liderler de otokratik liderler gibi tüm yetkiyi ele alabilmekte ve kesin kararlar verebilmektedirler.",
      "E) İnsan odaklı liderler zor koşullarda da mutlaka yetki devretme, kararın sorumluluğunu almama eğiliminde olabilmektedirler.",
    ],
    correctAnswer:
      "E) İnsan odaklı liderler zor koşullarda da mutlaka yetki devretme, kararın sorumluluğunu almama eğiliminde olabilmektedirler.",
  },
  {
    id: 56,
    questionText:
      "Laub'un örgüt sağlığının aşamaları yaklaşımına göre aşağıdaki ifadelerden hangisi doğru olamaz?",
    options: [
      "A) Zehirli örgüt sağlığında çalışanların kendilerini tehlikede görmekte, iş yapmak için zorlanmakta ve korkutulmaktadırlar.",
      "B) Zayıf örgüt sağlığında düşük derecede güven, yüksek derecede belirsizlik ve korku vardır.",
      "C) Kısıtlı örgüt sağlığında çalışanların tümünün birbirlerinin ihtiyaçlarına hizmet etmek için motive edildikleri ve birbirlerinden öğrenmeye açık oldukları, tam bir güven ortamıdır.",
      "D) Ortalama örgüt sağlığında ortalama bir güven düzeyinin, nadiren belirsizlik ve korkunun olduğu; yaratıcılığın, işletmeyi mevcut durumundan çok öteye götürmeye çalışılmadığı müddetçe özendirildiği; çalışanların risk alabildiği ama hata yapmaktan bazen korktukları bir ortamdır.",
      "E) Zehirli ve zayıf örgüt sağlığında otokratik liderlik tarzı görülmektedir; kısıtlı ve ortalama örgüt sağlığında paternalist; iyi ve ideal örgüt sağlığında hizmetkar liderlik mümkün olabilmektedir",
    ],
    correctAnswer:
      "C) Kısıtlı örgüt sağlığında çalışanların tümünün birbirlerinin ihtiyaçlarına hizmet etmek için motive edildikleri ve birbirlerinden öğrenmeye açık oldukları, tam bir güven ortamıdır.",
  },
  {
    id: 57,
    questionText:
      "Aşağıdakilerden hangisi hizmetkar liderliğin boyutları arasında sayılamaz?",
    options: [
      "A) Güçlendirme",
      "B) Otantiklik",
      "C) Karizma",
      "D) Geride Durma",
      "E) Cesaret",
    ],
    correctAnswer: "C) Karizma",
  },
  {
    id: 58,
    questionText:
      "Aşağıdakilerden hangisi otantik liderliğin bileşenleri arasında sayılamaz?",
    options: [
      "A) Öz farkındalık",
      "B) Hizmet",
      "C) İçselleştirilmiş ahlaki bakış açısı",
      "D) Dengeli yönlendirme",
      "E) İlişkilerde şeffaflık",
    ],
    correctAnswer: "B) Hizmet",
  },
  {
    id: 59,
    questionText:
      "Yönetsel etikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Yöneticiler gündelik pek çok karar verme sürecinde etkisi altında kaldığı pek çok faktör bulunmakta; bu süreçte adalet, dürüstlük, ortak iyilik, açıklık gibi değerler konusunda tutarlılık içinde olmaları gerekmektedir.",
      "B) Yöneticiler kararları alırken belirli ilkelere dayanmaları gerekmektedir.",
      "C) Etik, yönetsel kararlarda ülke yasaları, toplumsal ve kültürel değerler, yöneticinin özgür seçim alanı arasında tutarlı kuralların (ilkelerin) oluşturduğu bir bütündür.",
      "D) Her karar da olduğu gibi yönetsel kararlarda da, yöneticiden beklenen etik davranış sergilemesi, tutarlı kurallar bütünü içinde karar vermesidir.",
      "E) Yönetici bir kararında adil, dürüst, açık davranırken diğerinde davr",
    ],
    correctAnswer:
      "E) Yönetici bir kararında adil, dürüst, açık davranırken diğerinde davr",
  },
  {
    id: 60,
    questionText:
      "Etik ve ahlak kavramlarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Etik, iyiyle kötüyü doğruyla yanlışı ayırt etmemizi sağlayan ahlaki ilkelerin bütünü olarak görülebilir.",
      "B) Ahlak insanın yaşadığı toplum içinde kabul gören tutum ve davranışlar bütünüdür.",
      "C) Etik insanların nasıl davranması gerektiğine odaklanan daha evrensel bir kavram; ahlak ise belirli bir toplum veya alt kültür için doğru olan davranışlara odaklanan bir kavramdır.",
      "D) Ahlak her toplum için aynı evrensel kuralları olan bir kavramdır.",
      "E) Ahlak farklı kültürler ve toplumlar arasında değişiklik gösteren daha subjektif bir kavramdır.",
    ],
    correctAnswer:
      "D) Ahlak her toplum için aynı evrensel kuralları olan bir kavramdır.",
  },
  {
    id: 61,
    questionText:
      "Aşağıdakilerden hangisi yöneticinin bir birey olarak etik davranışını etkileyen faktörler arasında yer alamaz?",
    options: [
      "A) Bireyin ahlaki gelişim düzeyi",
      "B) Bireyin yaşı, eğitimi, geçmiş deneyimler, ailesi, sosyal ekonomik durumu",
      "C) Bireyin kişisel çıkarları",
      "D) Toplum kültürü ve değerler",
      "E) Norm ve görgü kuralları",
    ],
    correctAnswer: "C) Bireyin kişisel çıkarları",
  },
  {
    id: 62,
    questionText:
      "Etik liderliğin boyutlarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Etik ve adalet boyutu liderin dürüst, güvenilir, ilkeli, adaletli seçimler yapan ve çalışanlara karşı ilgili gösteren davranışlarına vurgu yapmaktadır.",
      "B) Görevlerin açıklığa kavuşturulması boyutu liderin açık iletişim kurma, çalışanlardan beklenen görev ve sorumlulukları açıklığa kavuşturma davranışlarına vurgu yapmaktadır.",
      "C) Güç paylaşımı boyutu liderin yetkiyi elinde toplayan ve pozisyon gücüne dayalı olarak çalışanları etkilemeye çalıştığı bir organizasyonu ifade etmektedir.",
      "D) Rollerin açıklığa kavuşturulması boyutu etik davranışı ödüllendirerek çalışanları teşvik etme gibi davranışlarını içermektedir.",
      "E) Güç paylaşımı boyutu liderin çalışanlara fikirlerini sorması, kararlara katılımı desteklemesi, yetki ve gücü paylaşması konularını kapsamaktadır.",
    ],
    correctAnswer:
      "C) Güç paylaşımı boyutu liderin yetkiyi elinde toplayan ve pozisyon gücüne dayalı olarak çalışanları etkilemeye çalıştığı bir organizasyonu ifade etmektedir.",
  },
  {
    id: 63,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderin etik davranış, norm ve standartları sayesinde çalışanlar açıkça neyin doğru veya yanlış olduğunu görebilmektedir.",
      "B) Liderler çalışanlar için etik karar alma ve problem çözmedeki hareket tarzlarını belirleyen etik değerleri ortaya koymaktadırlar.",
      "C) Etik değerler, liderin kişilerarası ilişkilerini, örgütsel amaç ve üst yönetimin baskılarını kabul etme şeklini ve performansını da etkilemektedir.",
      "D) Liderin sahip olduğu değerlere ve etik davranışa yönelik odağın yönetim literatüründe artmasıyla, dönüşümcü ve karizmatik liderlik alanlarındaki akademik çalışmalar eleştirilmeye başlanmış, hizmetkar liderlik ve etik liderlik teorileriyle etik davranışa vurgu yapılmıştır.",
      "E) Otokratik liderlik; eylem ve ilişkilerde normatif uygunluğa dayanan; izleyicileri iki yönlü iletişim kurma ve ahlaki düşünce biçimine sahip olmada teşvik eden bir liderlik tarzıdır. Etik lider dürüst, güvenilir, adil davranışlar sergileyerek, izleyicilerin güvendiği bir rol model olmaktadır.",
    ],
    correctAnswer:
      "E) Otokratik liderlik; eylem ve ilişkilerde normatif uygunluğa dayanan; izleyicileri iki yönlü iletişim kurma ve ahlaki düşünce biçimine sahip olmada teşvik eden bir liderlik tarzıdır. Etik lider dürüst, güvenilir, adil davranışlar sergileyerek, izleyicilerin güvendiği bir rol model olmaktadır.",
  },
  {
    id: 64,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Kültür bir toplumun, sosyal olarak iletilmiş davranış biçimlerinin, inançlarının, kurumlarının ve tüm diğer insanlar tarafından yaratılmış ürünlerinin ve düşünülen özelliklerinin toplamı olarak tanımlanmaktadır.",
      "B) Toplum kültürleri doğrudan örgüt kültürünün belirleyicisi olmasa da üzerinde ciddi etkisi olan önemli bir değişkendir. Bu nedenle toplum kültürleri arasında yapılan çeşitli sınıflandırmalarla, kullanılan yönetim yaklaşımları ve liderlik tarzları açıklanmaya çalışılmaktadır.",
      "C) Kültür çeşitli boyutlarla ele alınması ve ölçülmesi mümkün olmayan bir kavramdır, bu nedenle literatürde bu kültürlere ilişkin sınıflandırmalar ve kültürel boyutlara ilişkin bir boşluk vardır.",
      "D) Hofstede toplumların değer, inanç ve paylaşılan deneyimlerine dayalı kendilerine özgü bir kültürlerinin olduğunu ileri sürmekte ve farklı ülkelerdeki IBM şirketlerinde çalışanların algılarını ölçerek, kültürü beş boyut altında değerlendirmektedir.",
      "E) Hosftede'nin yöntemi pek çok açıdan eleştirilse de kültürle ilgili çalışmalarda halen yaygın olarak kullanılmaktadır.",
    ],
    correctAnswer:
      "C) Kültür çeşitli boyutlarla ele alınması ve ölçülmesi mümkün olmayan bir kavramdır, bu nedenle literatürde bu kültürlere ilişkin sınıflandırmalar ve kültürel boyutlara ilişkin bir boşluk vardır.",
  },
  {
    id: 65,
    questionText:
      "Aşağıdakilerden hangisi Hosftede'nin kültür boyutları arasında yoktur?",
    options: [
      "A) Düşük-yüksek güç mesafesi",
      "B) Klan kültürü",
      "C) Belirsizlikten kaçınma-kaçınmama",
      "D) Erillik-dişillik",
      "E) Bireycilik-kolektivizm",
    ],
    correctAnswer: "B) Klan kültürü",
  },
  {
    id: 66,
    questionText:
      "Güç mesafesine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Bir toplumun eşitsiz güç dağılımını, otorite ile mesafeyi kabul etme derecesidir.",
      "B) Yüksek güç mesafesi olan bir toplumda otoriteyi daha fazla kabul edilmekte, düşük güç mesafesi olan bir toplumda ise, gücün sadece belirli gruplarda toplanması, kötü bir şey, zorlama, yolsuzluğa ortam hazırlanması olarak görülür.",
      "C) Organizasyonlarda güç, yöneticilerin uyguladığı merkezileşme ve kontrol derecesine uzaklıktadır.",
      "D) Yüksek güç mesafesi olan toplumlardaki şirketlerde, iktidar konumundaki kişilerle (yöneticilerle) çalışanlar arasında formal bir ilişki ve itaate dayalı bir saygı söz konusudur.",
      "E) Güç mesafesi yüksek örgüt kültürlerinde çalışanlar yöneticileri rahatlıkla sorgulamakta ve karşı gelebilmektedirler.",
    ],
    correctAnswer:
      "E) Güç mesafesi yüksek örgüt kültürlerinde çalışanlar yöneticileri rahatlıkla sorgulamakta ve karşı gelebilmektedirler.",
  },
  {
    id: 67,
    questionText:
      "GLOBE çalışmasının kendine güven boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Bireylerin başkalarıyla olan ilişkilerinde kendine güvenli, rekabetçi, iddialı, çatışmacı, agresif olma eğilimleridir.",
      "B) Düşük kendine güven olan toplumlarda baskın ve zorlayıcı davranışlara değer verilmektedir.",
      "C) Bireyler yüksek kendine güven olan toplumlarda görüş ve düşüncelerini açıkça ifade etmeye çekinmektedirler.",
      "D) Yüksek kendine güven olan toplumlarda işbirliğine değer verilmekte ve dolayısıyla iletişimde daha dolaylı, kafa tutmayan bir tarz tercih edilmektedir.",
      "E) Yöneticiler için yüksek kendine güvenmenin olduğu bir organizasyonun anlamı, rekabetçi, herkesin görüşlerini söylemeye istekli olduğu, çatışmanın kaçınılmaz olduğu, ilişkilerden çok sonuçların değerli görüldüğü bir ortamda çalışanları yönlendirmesi gerektiğidir",
    ],
    correctAnswer:
      "C) Bireyler yüksek kendine güven olan toplumlarda görüş ve düşüncelerini açıkça ifade etmeye çekinmektedirler.",
  },
  {
    id: 68,
    questionText:
      "Performans odaklılığın yüksek olduğu bir işletmeye ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Yüksek performans odaklı toplumlardaki işletmelerin yöneticileri, çalışanlarını maddi ödüller ve para ile motive etmekte, bunun için de açık hedefler koymaktadırlar.",
      "B) Yüksek performans odaklı işletmeler açıkça bir performans değerleme kriteri belirlemektedirler.",
      "C) Çalışanlar, performanslarını iyileştirmek için yöneticilerden eğitim ve gelişme fırsatları sunmasını isteyebilmektedir.",
      "D) Çalışanların istenen performansı ortaya koymalarına yardımcı olmak için yöneticilerin geribildirim vermesi beklemektedir.",
      "E) Yöneticiler para kazanmaya dayalı hedefleri olan çalışanları motive etmekte güçlük çekebilmektedirler.",
    ],
    correctAnswer:
      "E) Yöneticiler para kazanmaya dayalı hedefleri olan çalışanları motive etmekte güçlük çekebilmektedirler.",
  },
];

const StratejikYonetim = [
  {
    id: 1,
    questionText:
      "Müşteri taleplerinin çok hızlı değiştiği, öngörülemez trendlerin hakim olduğu, ancak hammadde tedarik sürecinin nispeten istikrarlı çalıştığı bir pazarda faaliyet gösteren yenilikçi bir teknoloji veya moda markasının, rekabet avantajı sağlamak için aşağıdaki tedarik zinciri stratejilerinden hangisini uygulaması en mantıklıdır?[cite: 1]",
    options: [
      "A) Etkin (Verimli) Tedarik Zinciri",
      "B) Risk Önleyici Tedarik Zinciri",
      "C) Muhafazakar Tedarik Zinciri",
      "D) Duyarlı (Tepkisel) Tedarik Zinciri",
      "E) Yalın Tedarik Zinciri",
    ],
    correctAnswer: "D) Duyarlı (Tepkisel) Tedarik Zinciri",
  },
  {
    id: 2,
    questionText:
      "Bir işletmenin pazarlama, insan kaynakları ve finansman departmanlarının; üst yönetim tarafından belirlenen genel büyüme ve sektörde maliyet lideri olma hedeflerine ulaşmak amacıyla hazırladıkları günlük ve orta vadeli eylem planları, stratejik hiyerarşide hangi düzeyde sınıflandırılır?[cite: 1]",
    options: [
      "A) Kurumsal Stratejiler",
      "B) Rekabet (İş Birimi) Stratejileri",
      "C) İşlevsel (Bölümsel) Stratejiler",
      "D) Çeşitlendirme Stratejileri",
      "E) Çekilme Stratejileri",
    ],
    correctAnswer: "C) İşlevsel (Bölümsel) Stratejiler",
  },
  {
    id: 3,
    questionText:
      "Genellikle aynı büyüklükte iki veya daha fazla işletmenin sermaye alışverişi sonunda tüm kaynaklarını bir araya getirerek ortaya yeni bir işletme çıkarmasına ne ad verilir?[cite: 1]",
    options: [
      "A) Satın alma stratejisi",
      "B) Birleşme stratejisi",
      "C) İşbirliği stratejisi",
      "D) Yönetim sözleşmesi",
      "E) Lisans anlaşması",
    ],
    correctAnswer: "B) Birleşme stratejisi",
  },
  {
    id: 4,
    questionText:
      "İşletmeler arasında ortaya çıkan dayanışma ve kaynak birleştirme faaliyetlerinin gerçekleştirildiği strateji aşağıdakilerden hangisidir?[cite: 1]",
    options: [
      "A) Rekabet stratejisi",
      "B) Farklılaşma stratejisi",
      "C) Yenilik stratejisi",
      "D) Stratejik işbirlikleri",
      "E) Bütünleşme stratejisi",
    ],
    correctAnswer: "D) Stratejik işbirlikleri",
  },
  {
    id: 5,
    questionText:
      "İşletmelerin markalı ve özellikli mallarının üretimini başka işletmelere yaptırmalarına imkan veren işbirliği anlaşması aşağıdakilerden hangisidir?[cite: 1]",
    options: [
      "A) Know-how anlaşmaları",
      "B) Outsourcing",
      "C) Sözleşmeli üretim",
      "D) Bayilik",
      "E) Konsorsiyum",
    ],
    correctAnswer: "C) Sözleşmeli üretim",
  },
  {
    id: 6,
    questionText:
      "İşletmenin kaynaklarının nasıl dağıtılacağı, hangi işlere girilip hangi işlerin terk edileceği, faaliyet alanlarının genişletilip genişletilmeyeceği, başka bir işletme ile birleşilip birleşilmeyeceği gibi konuların ele alındığı stratejik yönetim süreci aşaması aşağıdakilerden hangisidir?[cite: 1]",
    options: [
      "A) Strateji uygulama",
      "B) Strateji değerleme",
      "C) Dış çevre analizi",
      "D) Strateji oluşturma",
      "E) Stratejilerin seçimi",
    ],
    correctAnswer: "D) Strateji oluşturma",
  },
  {
    id: 7,
    questionText:
      '7-) Pazar büyüme durumu\'nu bir değişken, "rekabet durumunu" da bir diğer değişken olarak kabul ederek iki boyutlu bir matris geliştiren görüş aşağıdaki düşünürlerden hangisi tarafından ileri sürülmüştür?[cite: 1]',
    options: [
      "A) Thompson - Strickland",
      "B) C. Hofer",
      "C) Patel - Younger",
      "D) Schoffler",
      "E) Walsh - Mach",
    ],
    correctAnswer: "B) C. Hofer",
  },
  {
    id: 8,
    questionText:
      "Tüm işletme birimlerinin ihtiyaçlarını ve potansiyellerini dikkate alarak ana şirketin kaynaklarını en iyi şekilde kullanmayı amaçlayan stratejilere ne ad verilir?[cite: 1]",
    options: [
      "A) Uluslararası stratejiler",
      "B) İşletme stratejileri",
      "C) Şirket Stratejileri (Kurumsal stratejiler)",
      "D) Operasyonel stratejiler",
      "E) Farklılaştırma stratejileri",
    ],
    correctAnswer: "C) Şirket Stratejileri (Kurumsal stratejiler)",
  },
  {
    id: 9,
    questionText:
      "Üst yönetimin hazırladığı şirket ve işletme stratejilerine uygun olarak orta ve alt yönetim düzeylerince hazırlanıp uygulanan ve daha çok teknik bilgi ve uzmanlık isteyen stratejilere ne ad verilir?[cite: 1]",
    options: [
      "A) Operasyonel stratejiler",
      "B) Odaklanma Stratejileri",
      "C) Farklılaştırma Stratejileri",
      "D) Maliyet Liderliği Stratejileri",
      "E) Liderlik Stratejileri",
    ],
    correctAnswer: "A) Operasyonel stratejiler",
  },
  {
    id: 10,
    questionText:
      "Aşağıdakilerden hangisi işletmelerde her yönetim düzeyinde uygulanabilen temel stratejiler arasında yer almaz?[cite: 1]",
    options: [
      "A) Büyüme stratejileri",
      "B) Küçülme stratejileri",
      "C) Durağan stratejiler",
      "D) Karma stratejiler",
      "E) Kurumsal stratejiler",
    ],
    correctAnswer: "E) Kurumsal stratejiler",
  },
  {
    id: 11,
    questionText:
      "Aşağıdakilerden hangisi işletmenin tüm faaliyetlerini durdurması ve varlıklarını sona erdirmesi ile ilgili stratejilerdir?[cite: 1]",
    options: [
      "A) Kısmi tasfiye stratejisi",
      "B) Tasarruf stratejisi",
      "C) İlişkisiz tek merkezli çeşitlendirme stratejisi",
      "D) Tam tasfiye stratejisi",
      "E) Rekabet stratejisi",
    ],
    correctAnswer: "D) Tam tasfiye stratejisi",
  },
  {
    id: 12,
    questionText:
      "İşletmeyi rakiplerinden farklılaştıran kabiliyet ve kapasiteye ne ad verilir?[cite: 1]",
    options: [
      "A) Rekabet avantajı",
      "B) Operasyonel plan",
      "C) İşletme stratejileri",
      "D) Temel yetenekler",
      "E) Taktik plan",
    ],
    correctAnswer: "D) Temel yetenekler",
  },
  {
    id: 13,
    questionText:
      "Olası rakiplerin pazara girişini maliyetli duruma getirmek ve bu sayede sektördeki mevcut işletmeleri rekabetten korumak amacıyla geliştirilen faktörlere ne ad verilir?[cite: 1]",
    options: [
      "A) Ölçek ekonomileri",
      "B) Pazara giriş engelleri",
      "C) Tehdit oluşturma",
      "D) Rekabetçi istihbarat",
      "E) Değer zinciri yaratma",
    ],
    correctAnswer: "B) Pazara giriş engelleri",
  },
  {
    id: 14,
    questionText:
      '14-) "İşletme faaliyet veya iş alanında mevcut durumunu koruma amacı" aşağıdaki temel stratejilerden hangisinin tanımıdır?[cite: 1]',
    options: [
      "A) Durağan",
      "B) Büyüme",
      "C) Küçülme",
      "D) Karma",
      "E) Farklılaştırma",
    ],
    correctAnswer: "A) Durağan",
  },
  {
    id: 15,
    questionText:
      "İşletmelerin maksatlı olarak mevcut iş ve faaliyetlerinden bazılarını sürekli olarak terk etmesi, vazgeçmesi veya durdurması stratejisine ne ad verilir?[cite: 1]",
    options: [
      "A) Tam tasfiye stratejisi",
      "B) Tasarruf stratejisi",
      "C) Kısmi tasfiye stratejisi",
      "D) Maliyet liderliği stratejisi",
      "E) Bağımlı küçülme stratejisi",
    ],
    correctAnswer: "C) Kısmi tasfiye stratejisi",
  },
  {
    id: 16,
    questionText:
      "Aşağıdakilerden hangisi strateji oluşturma kapsamında yer almaz?[cite: 1]",
    options: [
      "A) Vizyon ve misyonun oluşturulması",
      "B) Stratejilerin değerlenmesi",
      "C) İşletme dışından kaynaklanan fırsat ve tehditlerin belirlenmesi",
      "D) İşletme içinden kaynaklanan güçlü ve zayıf yönlerin belirlenmesi SWOT",
      "E) Uzun dönemli amaçların saptanması",
    ],
    correctAnswer: "B) Stratejilerin değerlenmesi",
  },
  {
    id: 17,
    questionText:
      "Boston Danışma Grubu İşbirimleri Portföy Yönetim Matrisinde hem pazarın büyüme hızı, hem de göreceli pazar payı düşük olan işletmelere ne ad verilir?[cite: 1]",
    options: [
      "A) Yıldızlar",
      "B) Belirsizler",
      "C) Nakit depoları",
      "D) Otonomlar",
      "E) İtler (Köpekler)",
    ],
    correctAnswer: "E) İtler (Köpekler)",
  },
  {
    id: 18,
    questionText:
      "Boston Danışma Grubu İşbirimleri Portföy Yönetim Matrisinde göreceli pazar payının belirlenmesinde kullanılan formül aşağıdakilerden hangisidir?[cite: 1]",
    options: [
      "A) İşbiriminin satışları/Sektörde toplam satışlar",
      "B) İşbiriminin cari yıl satışları/Sektör ortalama satışları",
      "C) İşbiriminin satışları/Esas rakibin satışları",
      "D) Sektör satışları/İşbiriminin satışları",
      "E) Sektör satışları/Sektör ortalama satışları",
    ],
    correctAnswer: "C) İşbiriminin satışları/Esas rakibin satışları",
  },
  {
    id: 19,
    questionText:
      '19-) "Beş Güç Modeli" ile ilgili aşağıdaki ifadelerden hangisi doğrudur?[cite: 1]',
    options: [
      "A) Örgütün iş çevresinin analizinde kullanılır",
      "B) Modelde yer alan faktörlerin güçlenmesi işletmenin karlılığını artırır.",
      "C) Modelde yer alan faktörlerin şiddeti azaldıkça işletme için tehdit oluşturma olasılığı artar.",
      'D) Modeli oluşturan beş faktörden biri "çalışanların rekabet gücü"dür.',
      'E) Modeli oluşturan beş faktörden biri "teknolojik yeniliklerin varlığı"dır.',
    ],
    correctAnswer: "A) Örgütün iş çevresinin analizinde kullanılır",
  },
  {
    id: 20,
    questionText:
      "İşletmenin amaçlarına nasıl ulaşacağını belirleyen, rakiplerin faaliyetlerinin izlenmesini içeren, nihai sonuca odaklı, uzun dönemli bakış açısına dayalı, dinamik kararlar topluluğuna ne ad verilir?[cite: 1]",
    options: [
      "A) Taktik",
      "B) Yönetim",
      "C) Strateji",
      "D) Kısa dönemli planlama",
      "E) Stratejik düşünme",
    ],
    correctAnswer: "C) Strateji",
  },
  {
    id: 21,
    questionText:
      "İşletmenin sahip olduğu yeteneklerin başka alternatif yetenekler kullanılarak gerçekleştirilememesi ile ilgili olan temel yetenek kriteri aşağıdakilerden hangisidir?[cite: 1]",
    options: [
      "A) Nadir olması",
      "B) Taklit edilemez olması",
      "C) Değerli olması",
      "D) Güncel olması",
      "E) İkame edilemez olması",
    ],
    correctAnswer: "E) İkame edilemez olması",
  },
  {
    id: 22,
    questionText:
      "Aşağıdakilerden hangisi yeni işletmelerin pazara girişini zorlaştıran nedenlerden biri değildir?[cite: 1]",
    options: [
      "A) Pazardaki mevcut firmaların ölçek ekonomisine sahip olması",
      "B) Pazardaki işletmelerin sadık müşteri grubuna sahip olması",
      "C) Pazara yeni girecek işletmenin pazardaki mevcut ürünü daha düşük fiyatla satabilmesi",
      "D) Pazardaki işletmelerin etkili dağıtım sistemine sahip olması",
      "E) Pazara girişte yüksek miktarda sermayeye ihtiyaç duyulması",
    ],
    correctAnswer:
      "C) Pazara yeni girecek işletmenin pazardaki mevcut ürünü daha düşük fiyatla satabilmesi",
  },
  {
    id: 23,
    questionText:
      "Aşağıdakilerden hangisi örgütsel misyon içerisinde yer alabilecek unsurlardan biri değildir?[cite: 1]",
    options: [
      "A) Örgütün rekabet stratejileri",
      "B) Örgütün faaliyet alanı",
      "C) Örgütün değer ve inançları",
      "D) Örgütün ilişkide bulunduğu kitleler",
      "E) Örgütün ürettiği ürünler",
    ],
    correctAnswer: "A) Örgütün rekabet stratejileri",
  },
  {
    id: 24,
    questionText:
      '24-) Aşağıdakilerden hangisi işletmenin genel çevresinde yer alan "politik faktörler" içinde yer almaz?[cite: 1]',
    options: [
      "A) Adil rekabet kararları",
      "B) Enflasyon oranları",
      "C) AR-GE destekleri",
      "D) Patent yasaları",
      "E) Vergi düzenlemeleri",
    ],
    correctAnswer: "B) Enflasyon oranları",
  },
  {
    id: 25,
    questionText:
      "Aşağıdaki durumlardan hangisinde tedarikçilerin alıcılara karşı pazarlık gücü yüksektir?[cite: 1]",
    options: [
      "A) Bir çok tedarikçinin varlığı söz konusuysa",
      "B) Yeterli düzeyde ikame tedarik kaynağı mevcutsa",
      "C) Tedarik edilen ürünlerin değiştirme maliyetleri düşükse",
      "D) Alıcının yaptığı satın almalar, tedarikçinin satışlarının büyük bölümünü oluşturuyorsa",
      "E) Tedarikçinin ürünlerinin alıcının pazardaki başarısı için önemliyse",
    ],
    correctAnswer:
      "E) Tedarikçinin ürünlerinin alıcının pazardaki başarısı için önemliyse",
  },
  {
    id: 26,
    questionText:
      "Aşağıdakilerden hangisi amaçların oluşturulmasında dikkate alınması gereken ilkelerden biri değildir?[cite: 1]",
    options: [
      "A) Ölçülebilir olması",
      "B) Gerçekçi olması",
      "C) Durağan olması",
      "D) Motive edici olması",
      "E) Uyumlu olması",
    ],
    correctAnswer: "C) Durağan olması",
  },
  {
    id: 27,
    questionText:
      "İşletmelerin amaçlarını gerçekleştirmeye çalışırken etkiledikleri ve etkilendikleri birey ve gruplara ne ad verilir?[cite: 1]",
    options: [
      "A) Rakipler",
      "B) Çalışanlar",
      "C) Paydaşlar",
      "D) Müşteriler",
      "E) Medya",
    ],
    correctAnswer: "C) Paydaşlar",
  },
  {
    id: 28,
    questionText:
      '28-) "Biz ne olmak istiyoruz" sorusunun cevabı aşağıdakilerden hangisini ifade eder?[cite: 1]',
    options: [
      "A) Vizyon",
      "B) Amaçlar",
      "C) Fırsatlar",
      "D) Hedefler",
      "E) Misyon",
    ],
    correctAnswer: "A) Vizyon",
  },
  {
    id: 29,
    questionText:
      '29-) "İşletme olarak bizim işimiz nedir?" sorusunun cevabını veren kavram aşağıdakilerden hangisidir?[cite: 1]',
    options: [
      "A) Vizyon",
      "B) Amaçlar",
      "C) Misyon",
      "D) Fırsatlar",
      "E) Görev tanımları",
    ],
    correctAnswer: "C) Misyon",
  },
  {
    id: 30,
    questionText:
      "Aşağıdakilerden hangisi Porter yaklaşımının temel katkılarından biri değildir?[cite: 1]",
    options: [
      "A) Beş rekabetçi güç analizi",
      "B) Jenerik rekabet stratejileri",
      "C) Değer zinciri yaklaşımı",
      "D) Öğrenen örgüt disiplinleri",
      "E) Rekabetçi konumlandırma vurgusu",
    ],
    correctAnswer: "D) Öğrenen örgüt disiplinleri",
  },
  {
    id: 31,
    questionText:
      "Aşağıdakilerden hangisi Değer Zincirini oluşturan temel faaliyetler arasında yer almaz?[cite: 1]",
    options: [
      "A) İç lojistik",
      "B) İşlemler",
      "C) Dış lojistik",
      "D) Tedarik",
      "E) Servis",
    ],
    correctAnswer: "D) Tedarik",
  },
  {
    id: 32,
    questionText:
      "Mintzberg'in sınıflandırmasına göre başlangıçta planlanmayan ancak süreçte ortaya çıkan strateji türü hangisidir?[cite: 1]",
    options: [
      "A) Amaçlanan strateji",
      "B) Kurumsal strateji",
      "C) Gerçekleşen strateji",
      "D) Oluşan strateji",
      "E) Fonksiyonel strateji",
    ],
    correctAnswer: "D) Oluşan strateji",
  },
  {
    id: 33,
    questionText:
      '33-) "Strateji doğru işi seçer, plan seçilen işi uygular" ifadesine göre aşağıdakilerden hangisi plan örneğidir?[cite: 1]',
    options: [
      "A) Premium müşteri segmentine odaklanma kararı",
      "B) Farklılaşma stratejisiyle rekabet etme",
      "C) Q3'te 20 kurumsal müşteri ziyareti ve bütçe ataması",
      "D) Sektörde maliyet liderliği seçimi",
      "E) Hangi pazarda yarışılacağının belirlenmesi",
    ],
    correctAnswer: "C) Q3'te 20 kurumsal müşteri ziyareti ve bütçe ataması",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi uyumlu bir amaç-hedef-strateji setidir?[cite: 1]",
    options: [
      "A) Amaç: Kârlılık artışı / Hedef: Instagram takipçisi +50% / Strateji: çekiliş",
      "B) Amaç: İş seyahati segmentinde güçlenme / Hedef: Hafta içi doluluk %62 -> %75 / Strateji: kurumsal müşteri odaklı farklılaşma",
      "C) Amaç: Marka imajı / Hedef: Elektrik giderini azaltma / Strateji: depo alanı kiralama",
      "D) Amaç: Verimlilik / Hedef: Yeni logo / Strateji: sosyal medya paylaşımı",
      "E) Amaç: Sürdürülebilirlik / Hedef: Fiyat indirimi / Strateji: yoğun promosyon",
    ],
    correctAnswer:
      "B) Amaç: İş seyahati segmentinde güçlenme / Hedef: Hafta içi doluluk %62 -> %75 / Strateji: kurumsal müşteri odaklı farklılaşma",
  },
  {
    id: 35,
    questionText:
      '35-) Aşağıdakilerden hangisi "strateji-politika" ayrımını en doğru ifade eder?[cite: 1]',
    options: [
      "A) Strateji iç kuralları, politika dış çevreyi belirler",
      "B) Strateji ve politika eş anlamlıdır",
      "C) Strateji dış çevrede nasıl rekabet edileceğini, politika karar ilkelerini belirler",
      "D) Politika stratejiden daha dinamiktir",
      "E) Politika sadece finans birimini ilgilendirir",
    ],
    correctAnswer:
      "C) Strateji dış çevrede nasıl rekabet edileceğini, politika karar ilkelerini belirler",
  },
  {
    id: 36,
    questionText:
      "Peters ve Waterman yaklaşımında stratejik başarının kilit unsuru hangisidir?[cite: 1]",
    options: [
      "A) Sadece sektör analizi",
      "B) Sadece portföy matrisi",
      "C) Uygulama kalitesi, kültür, liderlik ve müşteri yakınlığı",
      "D) Sadece yazılı plan dokümanı",
      "E) Sadece düşük maliyet",
    ],
    correctAnswer:
      "C) Uygulama kalitesi, kültür, liderlik ve müşteri yakınlığı",
  },
  {
    id: 37,
    questionText:
      "Aşağıdakilerden hangisi strateji ile taktik arasındaki farkı doğru verir?[cite: 1]",
    options: [
      "A) Strateji kısa vadeli, taktik uzun vadelidir",
      "B) Strateji iç süreç, taktik dış çevredir",
      "C) Strateji yön ve tercih; taktik kısa vadeli uygulama hamlesidir",
      "D) Taktik üst yönetim, strateji alt yönetim işidir",
      "E) İkisi tamamen aynıdır",
    ],
    correctAnswer:
      "C) Strateji yön ve tercih; taktik kısa vadeli uygulama hamlesidir",
  },
  {
    id: 38,
    questionText: "Aşağıdakilerden hangisi strateji ifadesidir?[cite: 1]",
    options: [
      "A) Bu hafta sosyal medya reklamı başlatmak",
      "B) Ay sonuna kadar 3 personel almak",
      "C) Kitle turizmi yerine yüksek harcama segmentine odaklanmak",
      "D) Günlük doluluk raporu hazırlamak",
      "E) Bütçeyi üç aylık revize etmek",
    ],
    correctAnswer:
      "C) Kitle turizmi yerine yüksek harcama segmentine odaklanmak",
  },
  {
    id: 39,
    questionText:
      '39-) "Kim, neyi, ne zaman, hangi kaynakla yapacak?" sorusu en çok hangi kavrama aittir?[cite: 1]',
    options: [
      "A) Vizyon",
      "B) Misyon",
      "C) Strateji",
      "D) Plan",
      "E) Politika",
    ],
    correctAnswer: "D) Plan",
  },
  {
    id: 40,
    questionText: "Aşağıdakilerden hangisi amaç ifadesidir?[cite: 1]",
    options: [
      "A) 6 ayda satışları %12 artırmak",
      "B) 2027'de premium segmentte güçlü marka olmak",
      "C) Bu ay 30 kurumsal ziyaret yapmak",
      "D) Haftalık kampanya bütçesini 50.000 TL'ye çıkarmak",
      "E) Check-in süresini 4 dakikaya indirmek",
    ],
    correctAnswer: "B) 2027'de premium segmentte güçlü marka olmak",
  },
  {
    id: 41,
    questionText:
      '41-) Aşağıdaki senaryolardan hangisi Andy Grove\'un "Stratejik Kırılma Noktası"nı en iyi tarif eder?[cite: 1]',
    options: [
      "A) Şirketin yıllık satış hedeflerine ulaşamaması.",
      "B) Rakip bir firmanın yeni bir reklam kampanyası başlatması.",
      "C) Sektör kurallarının, müşteri beklentilerinin ve rekabetin artık geri dönülemez şekilde değiştiği an.",
      "D) Ham madde fiyatlarında yaşanan %5'lik bir artış.",
      "E) Şirket CEO'sunun emekli olması.",
    ],
    correctAnswer:
      "C) Sektör kurallarının, müşteri beklentilerinin ve rekabetin artık geri dönülemez şekilde değiştiği an.",
  },
  {
    id: 42,
    questionText:
      "Strateji-operasyon ayrımı için en doğru ifade hangisidir?[cite: 1]",
    options: [
      "A) İkisi de aynı anlama gelir",
      "B) Operasyon yönü belirler, strateji günlük işleri yürütür",
      "C) Strateji yön/tercih üretir; operasyon süreçleri etkin işletir",
      "D) Operasyon sadece üst yönetimin işidir",
      "E) Strateji sadece alt kademe işidir",
    ],
    correctAnswer:
      "C) Strateji yön/tercih üretir; operasyon süreçleri etkin işletir",
  },
  {
    id: 43,
    questionText:
      "Aşağıdakilerden hangisi Porter'ın Beş Rekabetçi Güç modelinde yer almaz?[cite: 1]",
    options: [
      "A) Mevcut rakipler arasındaki rekabet",
      "B) Tedarikçilerin pazarlık gücü",
      "C) Devletin doğrudan fiyat belirleme gücü",
      "D) İkame ürünlerin tehdidi",
      "E) Yeni girenlerin tehdidi",
    ],
    correctAnswer: "C) Devletin doğrudan fiyat belirleme gücü",
  },
  {
    id: 44,
    questionText:
      "Hamel ve Prahalad'ın stratejik yönetime en önemli katkısı aşağıdakilerden hangisidir?[cite: 1]",
    options: [
      "A) Beş Güç modelini geliştirmek",
      "B) Stratejik kırılma noktası kavramını ortaya koymak",
      "C) Temel yetenek (core competence) yaklaşımını geliştirme",
      "D) Fiyat liderliği stratejisini oluşturmak",
      "E) Pazar payı analizini geliştirmek",
    ],
    correctAnswer: "C) Temel yetenek (core competence) yaklaşımını geliştirme",
  },
  {
    id: 45,
    questionText: "Aşağıdaki eşleştirmelerden hangisi yanlıştır?[cite: 1]",
    options: [
      "A) Porter - Sektör ve rekabet analizi",
      "B) Barney - Kaynak temelli yaklaşım",
      "C) Hamel & Prahalad - Temel yetenekler",
      "D) Slywotzky - Değer göçü ve iş modeli",
      "E) Andy Grove - Beş Güç modeli",
    ],
    correctAnswer: "E) Andy Grove - Beş Güç modeli",
  },
  {
    id: 46,
    questionText:
      "Aşağıdakilerden hangisi Endüstriyel Örgüt (I/O) yaklaşımının temel varsayımını en doğru şekilde yansıtır?[cite: 1]",
    options: [
      "A) İşletme performansını yalnızca içsel kaynaklar belirler",
      "B) Rekabet avantajı işletmenin kültürel yapısından doğar",
      "C) Sektör yapısı ve rekabet koşulları firma performansını önemli ölçüde belirler",
      "D) İşletme performansı tamamen yöneticilerin sezgilerine bağlıdır",
      "E) Başarı yalnızca teknolojik yeniliklere bağlıdır",
    ],
    correctAnswer:
      "C) Sektör yapısı ve rekabet koşulları firma performansını önemli ölçüde belirler",
  },
  {
    id: 47,
    questionText:
      "Yapı-Davranış-Performans (SCP) paradigmasına göre, bir sektörde faaliyet gösteren firma sayısının çok az olması ve giriş engellerinin yüksekliği öncelikle hangi aşamayı belirler ve bu durum performansı nasıl etkiler?[cite: 1]",
    options: [
      "A) Davranış aşamasını belirler; aşırı kârlılığa yol açar.",
      "B) Yapı aşamasını belirler; fiyat rekabetinin azalmasına ve yüksek kârlılığa zemin hazırlar.",
      "C) Performans aşamasını belirler; operasyonel verimliliği zorunlu kılar.",
      "D) Davranış aşamasını belirler; ürün farklılaştırmasını imkansız hale getirir.",
      "E) Yapı aşamasını belirler; ancak performans üzerinde doğrudan bir etkisi yoktur.",
    ],
    correctAnswer:
      "B) Yapı aşamasını belirler; fiyat rekabetinin azalmasına ve yüksek kârlılığa zemin hazırlar.",
  },
  {
    id: 48,
    questionText:
      "I/O Teorisi ile RBV arasındaki temel farkı en iyi hangi seçenek açıklar?[cite: 1]",
    options: [
      'A) I/O "ne yapıldığına", RBV "nasıl yapıldığına" odaklanır.',
      "B) I/O sektörel çekiciliği (dış çevre), RBV ise içsel yetenekleri (kaynaklar) temel alır.",
      "C) I/O kısa vadeli, RBV uzun vadeli planlar için kullanılır.",
      "D) I/O sadece üretim, RBV ise hizmet sektörü için geçerlidir.",
      "E) Aralarında temel bir fark yoktur; her ikisi de dış çevreyi önceler.",
    ],
    correctAnswer:
      "B) I/O sektörel çekiciliği (dış çevre), RBV ise içsel yetenekleri (kaynaklar) temel alır.",
  },
  {
    id: 49,
    questionText:
      "Bir firmanın sahip olduğu patentli bir teknoloji, sektördeki diğer tüm firmalar tarafından kolayca lisanslanabiliyorsa, RBV perspektifinden bu kaynak için ne söylenebilir?[cite: 1]",
    options: [
      "A) Sürdürülebilir rekabet avantajı sağlar.",
      "B) Değerli (Valuable) olsa bile nadir (Rare) olmadığı için sadece rekabet eşitliği sağlar.",
      "C) Taklit edilemez (Inimitable) bir kaynaktır.",
      "D) Şirketin kâr bölgesini sonsuza dek korur.",
      "E) 10X kuvvetine karşı tek savunma hattıdır.",
    ],
    correctAnswer:
      "B) Değerli (Valuable) olsa bile nadir (Rare) olmadığı için sadece rekabet eşitliği sağlar.",
  },
  {
    id: 50,
    questionText:
      '50-) Slywotzky\'nin "İş Tasarımı" modelinde yer alan "Müşteri Seçimi" bileşeni hakkında hangisi en doğru ifadedir?[cite: 1]',
    options: [
      "A) Şirketin ulaşabileceği her müşteriye ürün satma çabasıdır.",
      "B) Pazardaki en ucuz ürünü talep eden kitleye odaklanmaktır.",
      "C) Hangi müşterilere hizmet verilmeyeceğinin belirlendiği stratejik bir eleme sürecidir.",
      "D) Sadece en yüksek geliri olan müşterileri seçmektir.",
      "E) Rakip firmaların müşterilerini çalma stratejisidir.",
    ],
    correctAnswer:
      "C) Hangi müşterilere hizmet verilmeyeceğinin belirlendiği stratejik bir eleme sürecidir.",
  },
  {
    id: 51,
    questionText:
      "Aşağıdakilerden hangisi işletmelerin stratejik işbirliği yapma amaçları arasında yer almaz?[cite: 2]",
    options: [
      "A) Potansiyel rakiplerle işbirliği yaparak tehdit oluşturmalarını önlemek",
      "B) Tek başlarına geliştiremedikleri tamamlayıcı ürünleri/hizmetleri dışarıdan temin etmek",
      "C) İşbirliğinden doğan sinerji ile değer yaratmak",
      "D) Mevcut pazarlarda büyümek",
      "E) Rakip işletmenin mülkiyetini ele geçirmek",
    ],
    correctAnswer: "E) Rakip işletmenin mülkiyetini ele geçirmek",
  },
  {
    id: 52,
    questionText:
      "Stratejik değerlendirme ve kontrol sürecinde 'Standartların Belirlenmesi' aşamasıyla ilgili aşağıdaki ifadelerden hangisi doğrudur?[cite: 2]",
    options: [
      "A) Standartlar, çalışanların tepkisini çekmemek için her zaman ulaşılabilecek en düşük seviyede belirlenmelidir.",
      "B) Standartlar bir kez belirlendikten sonra, dış çevre koşulları ne kadar değişirse değişsin şirket tarihi boyunca asla revize edilmemelidir.",
      "C) Etkin bir stratejik kontrol için belirlenen standartların hem ölçülebilir (nicel/nitel) hem de işletmenin stratejik hedefleriyle doğrudan bağ kurması gerekir.",
      "D) Stratejik uyumun sağlanması için tüm departmanlara sektöre bakılmaksızın tamamen aynı operasyonel standartlar dayatılmalıdır.",
      "E) Çağdaş yaklaşımda standartlar, sadece geçmiş dönem muhasebe verilerinin aritmetik ortalaması alınarak statik şekilde kurulur.",
    ],
    correctAnswer:
      "C) Etkin bir stratejik kontrol için belirlenen standartların hem ölçülebilir (nicel/nitel) hem de işletmenin stratejik hedefleriyle doğrudan bağ kurması gerekir.",
  },
  {
    id: 53,
    questionText:
      "PIMS (Profit Impact of Market Strategy) Analizi ile ilgili olarak aşağıda verilen ifadelerden hangisi doğrudur?[cite: 2]",
    options: [
      "A) Yeni kurulan start-up'ların ve yüksek teknoloji şirketlerinin stratejik kontrolünde en yüksek etkinliğe sahip yöntemdir.",
      "B) İşletmenin kendi performansını dünya genelindeki binlerce gerçek şirketin ampirik verileri ve endüstri standartları ile kıyaslamasını sağlayan bir benchmarking aracıdır.",
      "C) Strateji ile performans arasında doğrusal olmayan, tamamen sezgisel bağlar kurar.",
      "D) İşletmelerin finansal verilerini anlık (real-time) olarak takip eden bir ERP yazılımıdır.",
      "E) Sadece müşteri memnuniyeti ve sürdürülebilirlik gibi finansal olmayan değişkenleri ölçer.",
    ],
    correctAnswer:
      "B) İşletmenin kendi performansını dünya genelindeki binlerce gerçek şirketin ampirik verileri ve endüstri standartları ile kıyaslamasını sağlayan bir benchmarking aracıdır.",
  },
  {
    id: 54,
    questionText:
      "Stratejik kontrolde kullanılan 'Açıklık (Gap) Analizi' yöneticilere tam olarak hangi analitik çıktıyı sağlar?[cite: 2]",
    options: [
      "A) İşletmenin mevcut performans düzeyi ile gelecekte ulaşmayı hedeflediği stratejik konum arasındaki 'makası' (boşluğu) ve gereken kaynak ihtiyacını gösterir.",
      "B) Sadece pazarlama departmanının reklam harcamalarındaki bütçe firesini kuruşu kuruşuna hesaplar.",
      "C) Sektördeki en büyük rakibin gizli finansal kaynaklarını ve hammadde tedarik zinciri maliyetlerini listeler.",
      "D) Departman çalışanlarının birbirleriyle olan iletişim kopukluklarının haritasını verir.",
      "E) Ürünün fabrikadan çıktıktan sonra müşteriye ulaşana kadar geçen lojistik süresini saniye bazında ölçer.",
    ],
    correctAnswer:
      "A) İşletmenin mevcut performans düzeyi ile gelecekte ulaşmayı hedeflediği stratejik konum arasındaki 'makası' (boşluğu) ve gereken kaynak ihtiyacını gösterir.",
  },
  {
    id: 55,
    questionText:
      "Balanced Scorecard (Kurumsal Karne) yaklaşımında, 'Eğitimli personelin süreçleri İyileştirmesi, hatasız süreçlerin müşteri memnuniyetini artırması ve bunun da finansal başarıyı getirmesi' döngüsü modelin hangi stratejik özelliğini kanıtlar?[cite: 2]",
    options: [
      "A) Maliyet merkezlerinin bütçe sapmalarını esnek olarak hesapladığını",
      "B) Pazar payı ile karlılık arasındaki ampirik sektörel ilişkileri ölçtüğünü",
      "C) Sadece geçmişe odaklı finansal rasyoları temel aldığını",
      "D) Dört boyut arasında hiyerarşik bir neden-sonuç ilişkisi barındırdığını",
      "E) Yalnızca üst düzey yöneticilerin performansını puanlamaya yaradığını",
    ],
    correctAnswer:
      "D) Dört boyut arasında hiyerarşik bir neden-sonuç ilişkisi barındırdığını",
  },
  {
    id: 56,
    questionText:
      "Bir e-ticaret platformunun üst yönetimi, stratejik değerlendirme sürecinde 'Yapay Zeka Destekli Kişiselleştirilmiş Öneri Motoru' geliştirmeyi hedeflemektedir. Bu hedef, stratejik kontrol hiyerarşisinde hangi kavramın altında incelenmelidir?[cite: 2]",
    options: [
      "A) Maliyet Merkezi bütçe varyans analizi",
      "B) Geleneksel kontrolün tek döngülü öğrenme mekanizması",
      "C) Stratejik Sıçrama Faktörleri ve Kontrolü",
      "D) PIMS Analizi ampirik pazar payı sabitlemesi",
      "E) Rumelt'in Tutarlılık (Consistency) kriterinin pasif denetimi",
    ],
    correctAnswer: "C) Stratejik Sıçrama Faktörleri ve Kontrolü",
  },
  {
    id: 57,
    questionText:
      "Aşağıdaki işletme sorumluluklarından hangisi işletmelerin varoluşu gereği yerine getirmesi gereken birincil sorumluluktur?",
    options: [
      "A) Yasal sorumluluk",
      "B) Gönüllü sorumluluk",
      "C) Sosyal sorumluluk",
      "D) Ahlaki sorumluluk",
      "E) Ekonomik sorumluluk",
    ],
    correctAnswer: "E) Ekonomik sorumluluk",
  },
  {
    id: 58,
    questionText:
      "Faaliyetleri, dünya çapında, koordine edilmiş bir şekilde uyumlaştırma ya da entegre etme eğilimi aşağıdakilerden hangisi ile ifade edilir?",
    options: [
      "A) Bölgeselleşme",
      "B) Küreselleşme",
      "C) Yerelleşme",
      "D) Uluslararasılaşma",
      "E) Ticarileşme",
    ],
    correctAnswer: "B) Küreselleşme",
  },
  {
    id: 59,
    questionText:
      "Tekstil işiyle uğraşan bir firmanın üretim yapmak için kullandığı kumaş veya ipliği başka firmalardan almak yerine kendinin üretmeye başlaması aşağıdakilerden hangisine örnek teşkil eder?",
    options: [
      "A) İleriye doğru dikey bütünleşme",
      "B) Yatay bütünleşme",
      "C) İlişkisiz çeşitlendirme",
      "D) İlişkili çeşitlendirme",
      "E) Geriye doğru dikey bütünleşme",
    ],
    correctAnswer: "E) Geriye doğru dikey bütünleşme",
  },
  {
    id: 60,
    questionText:
      "Hangi tür stratejiyi uygulayan bir firma değer zincirinde faaliyet gösterdiği aşamalardan daha sonraki aşamalara yönelir?",
    options: [
      "A) Geriye doğru dikey bütünleşme",
      "B) Bağlantılı ilişkisizi çeşitlendirme",
      "C) İleri doğru dikey bütünleşme",
      "D) Zorunlu ilişkisiz çeşitlendirme",
      "E) Pazara nüfuz",
    ],
    correctAnswer: "C) İleri doğru dikey bütünleşme",
  },
  {
    id: 61,
    questionText:
      "Üretim ve yönetim süreçlerinin iyileştirilmesinde kullanılabilecek, yeni üretim metotları, yeni yönetim yaklaşımları ve yeni teknolojilerin uygulanmasını içeren yenilik türü aşağıdakilerden hangisidir?",
    options: [
      "A) Ürün yeniliği",
      "B) Stratejik yenilik",
      "C) Davranışsal yenilik",
      "D) Pazarlama yeniliği",
      "E) Süreç yeniliği",
    ],
    correctAnswer: "E) Süreç yeniliği",
  },
  {
    id: 62,
    questionText:
      "I. Müşteriler\nII. Yasal unsurlar\nIII. Tedarikçiler\nYukarıdakilerden hangisi ya da hangileri yakın çevre unsurları kapsamına girmektedir?",
    options: [
      "A) Yalnız I",
      "B) I ve III",
      "C) II ve III",
      "D) I, II ve III",
      "E) I ve II",
    ],
    correctAnswer: "B) I ve III",
  },
  {
    id: 63,
    questionText:
      "İşletmenin ana mal veya hizmetlerinin tasarımına ve geliştirilmesine yönelik olarak gerçekleştirilen araştırma ve geliştirme faaliyetleri aşağıdakilerden hangisi ile ifade edilmektedir?",
    options: [
      "A) Temel araştırma",
      "B) Fonksiyonel araştırma",
      "C) Süreç iyileştirme araştırması",
      "D) Ticari amaçlı araştırma",
      "E) Uygulamalı araştırma",
    ],
    correctAnswer: "D) Ticari amaçlı araştırma",
  },
  {
    id: 64,
    questionText:
      "Müşterilerin yeni ürünlere yönelmeye başlaması, ürünü üreten firma sayısında ve firmaların satışında, kârlılığında sürekli bir azalma görülmesi endüstrinin hangi yaşam döneminde yaşanır?",
    options: ["A) Giriş", "B) Olgunluk", "C) Düşüş", "D) Büyüme", "E) Sıçrama"],
    correctAnswer: "C) Düşüş",
  },
  {
    id: 65,
    questionText:
      "Johnson and Johnson firmasının 1982 yılında ürettiği ağrı kesicilerinden birine bulaşan siyanür yüzünden ölümlerle sonuçlanan bir krizle karşı karşıya kalmıştır. Firma bu durum karşısında işletme prensiplerinde yer alan felsefeden hareket etmiş ve testlerin, geri kalan kapsüllerin güvenli olduğuna dair olumlu sonuçlar vermesine rağmen ürünü gönüllü olarak piyasadan toplatmıştır.\nYukarıda yer alan olay stratejik yön belirleme unsurlarından hangisiyle ilgilidir?",
    options: ["A) Değerler", "B) Vizyon", "C) Misyon", "D) Amaç", "E) Hedef"],
    correctAnswer: "A) Değerler",
  },
  {
    id: 66,
    questionText:
      "Üretilen ürünleri bir araya getirme, depolama ve müşterilere dağıtma ile ilgili faaliyetler değer zincirinin temel faaliyetlerinin hangi aşamasında yapılır?",
    options: [
      "A) Üretim",
      "B) Pazarlama ve satış",
      "C) İç lojistik",
      "D) Dış lojistik",
      "E) Satış sonrası hizmetler",
    ],
    correctAnswer: "D) Dış lojistik",
  },
  {
    id: 67,
    questionText:
      "Pazar bölümlendirme ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Bir pazar bölümüne ürün üretmek, uzmanlaşma sebebiyle yüksek maliyetle sonuçlanır.",
      "B) Her bir pazar bölümünde başarıyı etkileyen faktörler değişebilir.",
      "C) Aynı endüstrideki firmalar, farklı stratejiler uygulayarak başarılı olabilir.",
      "D) Müşteri ihtiyaçlarını yakından tanıma imkânı sağlar.",
      "E) Belirli bir ürünün müşterilerinin ortak özellikleri açıklanabilir.",
    ],
    correctAnswer:
      "A) Bir pazar bölümüne ürün üretmek, uzmanlaşma sebebiyle yüksek maliyetle sonuçlanır.",
  },
  {
    id: 68,
    questionText:
      "Özel bir amaç dizisini gerçekleştirmek için tasarlanan, geniş kapsamlı faaliyetler dizisini içeren tek kullanımlı plana ne ad verilir?",
    options: [
      "A) Taktik",
      "B) Misyon",
      "C) Vizyon",
      "D) Program",
      "E) Politika",
    ],
    correctAnswer: "D) Program",
  },
  {
    id: 69,
    questionText:
      "I. Vizyonu diğerlerine anlatabilme yeteneği\nII. Liderin vizyon paylaşımını yazılı ve sözlü iletişimle sınırlı tutması\nIII. Vizyonu, farklı liderlik durumlarına ya da ortamlarına uygun şekilde genişletebilmek\nYukarıdakilerden hangisi ya da hangileri vizyoner liderliğin özellikleri arasında yer alır?",
    options: [
      "A) Yalnız I",
      "B) I ve II",
      "C) I ve III",
      "D) I, II ve III",
      "E) II ve III",
    ],
    correctAnswer: "C) I ve III",
  },
  {
    id: 70,
    questionText:
      "Aşağıdakilerden hangisi bir firmanın yetenekleri arasında sayılmaktadır?",
    options: [
      "A) Firmanın şöhreti",
      "B) Telif hakları",
      "C) Mülkiyet hakları",
      "D) Ticari sırlar",
      "E) Değişimi yönetme",
    ],
    correctAnswer: "E) Değişimi yönetme",
  },
  {
    id: 71,
    questionText:
      "İşletmelerin, yenilikte ilk olan işletmelerin ürünlerinin hatalarını düzeltmesi ya da yeni fonksiyonlar eklemesi yenilikçi işletme stratejilerinden hangisi ile açıklanır?",
    options: [
      "A) Saldırgan Strateji",
      "B) Savunma Stratejisi",
      "C) Geleneksel Stratejiler",
      "D) Fırsatları İzleme Stratejisi",
      "E) Bağımlı Stratejiler",
    ],
    correctAnswer: "B) Savunma Stratejisi",
  },
  {
    id: 72,
    questionText:
      "Değerlerle ilgili olarak aşağıdakilerden hangisi söylenemez?",
    options: [
      "A) Değerler çalışanların davranışlarının benzeşmesine yol açabilir.",
      "B) Değerler örgütlerde davranışları değerlendirmede yol gösterici rol oynar.",
      "C) Her örgüt; özelliği, kaynak ve yeteneği ne olursa olsun aynı değerlere sahiptir.",
      "D) Günümüzde tüm örgütler için ortak payda oluşturabilecek değerlerden bazıları dürüstlük, şeffaflık, sorumluluktur.",
      "E) Değerler zaman içerisinde nispeten kalıcıdır.",
    ],
    correctAnswer:
      "C) Her örgüt; özelliği, kaynak ve yeteneği ne olursa olsun aynı değerlere sahiptir.",
  },
  {
    id: 73,
    questionText:
      "Aşağıdakilerden hangisi stratejik kontrol faaliyetleri gerçekleştirmenin zorluklarından biri değildir?",
    options: [
      "A) Geleceği doğru tahmin etmek zorlaşmıştır.",
      "B) Kesin planlama yapılabilecek zaman aralığı daralmaktadır.",
      "C) Çevresel karmaşıklık düzeyi artmıştır.",
      "D) Dikkate alınması gereken değişken sayısı azalmıştır.",
      "E) Örgütleri etkileyen yerel ve uluslararası olayların sayısı artmıştır.",
    ],
    correctAnswer: "D) Dikkate alınması gereken değişken sayısı azalmıştır.",
  },
  {
    id: 74,
    questionText:
      '18-) "Eğer belirli bir miktarın üzerinde satış gerçekleştirirsen sana araba alırım." şeklindeki ifade aşağıdaki liderlik yaklaşımlarından hangisi ile özdeşleşmektedir?',
    options: [
      "A) Etkileşimci liderlik",
      "B) Stratejik liderlik",
      "C) Mikro liderlik",
      "D) Dönüştürücü liderlik",
      "E) Vizyoner liderlik",
    ],
    correctAnswer: "A) Etkileşimci liderlik",
  },
  {
    id: 75,
    questionText:
      "Tüm şirket çalışanları, birimleri, süreçleri ve teknolojisinin müşteri istek ve ihtiyaçlarındaki değişime karşı hassas olmasını ve bu noktadaki yeni talepleri uygulamaya geçirebilmesini öngören üretim sistemi aşağıdakilerden hangisidir?",
    options: [
      "A) Matriks strateji",
      "B) Kitlesel özel üretim stratejisi",
      "C) Kitlesel üretim stratejisi",
      "D) Sürekli iyileştirme stratejisi",
      "E) Ürün stratejisi",
    ],
    correctAnswer: "B) Kitlesel özel üretim stratejisi",
  },
  {
    id: 76,
    questionText:
      "Tedarikçinin pazarlık gücü aşağıdaki durumların hangisinde artar?",
    options: [
      "A) Endüstriye az sayıda tedarikçinin hâkim olması",
      "B) Tedarikçinin ürünlerinin müşteri için önemli bir girdi olmaması",
      "C) Endüstrideki firmaların tedarikçinin ürünleri için önemli bir müşteri olarak görülmesi",
      "D) Tedarikçilerin ikame malların tehdidi altında olması",
      "E) Tedarikçilerin yüksek ölçüde farklılaştırılmış ürünler üretmemesi",
    ],
    correctAnswer: "A) Endüstriye az sayıda tedarikçinin hâkim olması",
  },
];
const KalkinmaEkonomisi = [
  {
    id: 1,
    questionText:
      "Bir ülkede belli bir dönemde üretilen nihai mal ve hizmet miktarındaki artış neyi gösterir?",
    options: [
      "A) İktisadi kalkınma",
      "B) Nominal milli gelir",
      "C) İktisadi büyüme",
      "D) Satın alma gücü",
      "E) İstihdam düzeyini",
    ],
    correctAnswer: "C) İktisadi büyüme",
  },
  {
    id: 2,
    questionText:
      "Aşağıdakilerden hangisi iktisadi büyümeyi etkileyen faktörlerden değildir?",
    options: [
      "A) Fiziki ve beşeri sermaye birikimi",
      "B) Demografik etkenler",
      "C) Cinsiyet",
      "D) Eğitim düzeyi",
      "E) Makroekonomik istikrar",
    ],
    correctAnswer: "C) Cinsiyet",
  },
  {
    id: 3,
    questionText:
      "İktisadi büyümenin nedenleri arasında hangi faktör yer almaz?",
    options: [
      "A) Yatırımlar",
      "B) İstihdam oranı",
      "C) Eğitim düzeyi",
      "D) Yüzölçümü",
      "E) Yaşam kalitesi",
    ],
    correctAnswer: "D) Yüzölçümü",
  },
  {
    id: 4,
    questionText:
      "Aşağıdakilerden hangisi sürdürülebilir iktisadi büyümeyi sağlayan koşullardan biridir?",
    options: [
      "A) Tasarruf oranının düşüklüğü",
      "B) Genç işsiz oranındaki artış",
      "C) Kaynakların verimli kullanılması",
      "D) Ham madde fiyatlarının yükselişi",
      "E) Atıl kapasitenin artışı",
    ],
    correctAnswer: "C) Kaynakların verimli kullanılması",
  },
  {
    id: 5,
    questionText:
      "İktisadi büyümenin ölçülmesinde kullanılan gösterge hangisidir?",
    options: [
      "A) GSMH",
      "B) GSMH/100",
      "C) Nominal GSYİH",
      "D) Reel GSYİH",
      "E) 100/Reel GSYİH",
    ],
    correctAnswer: "D) Reel GSYİH",
  },
  {
    id: 6,
    questionText:
      '6-) Aşağıdakilerden hangisi Birleşmiş Milletler tarafından tanımlanan "kötü büyüme" türlerinden biri değildir?',
    options: [
      "A) Dengesiz büyüme",
      "B) Sessiz büyüme",
      "C) Köksüz büyüme",
      "D) İşsiz büyüme",
      "E) Sakin büyüme",
    ],
    correctAnswer: "E) Sakin büyüme",
  },
  {
    id: 7,
    questionText:
      "Uluslararası bağımlılık teorileri hangi dönemde önem kazanmıştır?",
    options: [
      "A) 1990'lar",
      "B) 1980'ler",
      "C) 1970'ler",
      "D) 1960'lar",
      "E) 1920'ler",
    ],
    correctAnswer: "D) 1960'lar",
  },
  {
    id: 8,
    questionText:
      "Aşağıdakilerden hangisi uluslararası bağımlılık teorilerinin içinde bulunan modellerden biridir?",
    options: [
      "A) Monopolist kalkınma tezi",
      "B) Yanlış paradigma modeli",
      "C) Meta merkezli kalkınma yaklaşımı",
      "D) Sermaye odaklı kalkınma yaklaşımı",
      "E) Hiçbiri",
    ],
    correctAnswer: "B) Yanlış paradigma modeli",
  },
  {
    id: 9,
    questionText:
      "Aşağıdakilerden hangisi 1990'lara damgasını vuran kalkınma yaklaşımıdır?",
    options: [
      "A) Yapısalcı değişim modeli",
      "B) Neo-yapısalcı yaklaşım",
      "C) Bağımlılık kuramı",
      "D) Neo-liberal yaklaşım",
      "E) Hiçbiri",
    ],
    correctAnswer: "D) Neo-liberal yaklaşım",
  },
  {
    id: 10,
    questionText:
      "Aşağıdakilerden hangisi neo-liberal yaklaşımın varsayımlarından biri değildir?",
    options: [
      "A) Devletin ekonomik yaşama müdahalesinin sınırlandırılması",
      "B) Toplumsal etkinliğin yerini bireysel etkinliğe bırakması",
      "C) Artı değerde istikrar sağlanması",
      "D) Uluslararası alanda malların ve sermayenin serbest dolaşımı",
      "E) Pazara yönelik tüm dinamiklerin desteklenmesi",
    ],
    correctAnswer: "C) Artı değerde istikrar sağlanması",
  },
  {
    id: 11,
    questionText:
      "Aşağıdaki ülkelerden hangisi neo-liberal kalkınma modelini deneyimleyen ülkelerden değildir?",
    options: [
      "A) Güney Kore",
      "B) Çin",
      "C) Singapur",
      "D) Hong Kong",
      "E) Tayvan",
    ],
    correctAnswer: "B) Çin",
  },
  {
    id: 12,
    questionText:
      "Neo-liberal yaklaşımlara göre sermaye düzeyindeki bir değişme aşağıdakilerden hangisine bağlıdır?",
    options: [
      "A) Eğitim düzeyi",
      "B) Fiyat istikrarı",
      "C) Verimlilik artışı",
      "D) Milli gelir düzeyi",
      "E) İstihdam",
    ],
    correctAnswer: "C) Verimlilik artışı",
  },
  {
    id: 13,
    questionText:
      "Aşağıdakilerden hangisi kalkınma teorilerine yöneltilen eleştirilerden biridir?",
    options: [
      "A) Sosyokültürel etkileri hesaba katmamaları",
      "B) Toplumsal faktörleri göz ardı etmeleri",
      "C) Ekonomik olgulara yeterince önem vermeleri",
      "D) Kırsal kalkınmaya odaklanmaları",
      "E) Kalkınmayı siyaset temelli değerlendirmeleri",
    ],
    correctAnswer: "B) Toplumsal faktörleri göz ardı etmeleri",
  },
  {
    id: 14,
    questionText:
      "Bütüncül kalkınma yöntemi, aşağıdakilerden hangisini içermez?",
    options: [
      "A) Kültürel faktörler",
      "B) Psikolojik faktörler",
      "C) Politik faktörler",
      "D) İktisadi faktörler",
      "E) Coğrafi faktörler",
    ],
    correctAnswer: "E) Coğrafi faktörler",
  },
  {
    id: 15,
    questionText:
      "Aşağıdakilerden hangisi geleneksel iktisada dayalı kalkınma yaklaşımını savunan iktisatçıların varsayımlarından biri değildir?",
    options: [
      "A) Az gelişmiş ülke ekonomileri, gelişmiş ülke ekonomilerinden nitelik olarak farklıdır.",
      "B) Azgelişmiş ülkeler, gelişmiş ülkelerin kapitalizm öncesi yapılarına benzer geleneksel toplumlardır.",
      "C) Azgelişmiş ülkeler, gelişmiş ülkelerin gelişim çizgisini izleyecektir.",
      "D) Az gelişmiş ülke ekonomilerine yönelik incelemelerin yöntemleri, gelişmiş ekonomilerinkilerle aynı olmalıdır.",
      "E) Az gelişmiş ülkeler, gelişmiş ülkeleri takip ederek modernleşebilirler.",
    ],
    correctAnswer:
      "D) Az gelişmiş ülke ekonomilerine yönelik incelemelerin yöntemleri, gelişmiş ekonomilerinkilerle aynı olmalıdır.",
  },
  {
    id: 16,
    questionText:
      "Geleneksel iktisada dayalı kalkınma teorisyenlerine göre aşağıdakilerden hangisi az gelişmişliğin nedenlerinden değildir?",
    options: [
      "A) İşçi sınıfının gelişmemesi",
      "B) Tasarruf oranlarındaki yetersizlik",
      "C) Pazarın yeterli büyüklükte olmaması",
      "D) Yatırımlardaki yetersizlik",
      "E) Sanayi sektörünün gelişmemiş olması",
    ],
    correctAnswer: "A) İşçi sınıfının gelişmemesi",
  },
  {
    id: 17,
    questionText:
      "Yapısalcılara göre ekonomik kalkınmada temel unsur aşağıdakilerden hangisidir?",
    options: [
      "A) Sermaye birikimi",
      "B) İnsan",
      "C) Çevre",
      "D) Sanayi",
      "E) Teknoloji",
    ],
    correctAnswer: "D) Sanayi",
  },
  {
    id: 18,
    questionText:
      "Aşağıdakilerden hangisi Prebisch'in az gelişmiş ülkeler için sunduğu çözüm önerilerindendir?",
    options: [
      "A) Beşeri sermayeye dayalı kalkınma",
      "B) Tarıma dayalı kalkınma",
      "C) İnsan odaklı kalkınma",
      "D) İhracata dayalı kalkınma",
      "E) Kendine yeterli bir ekonomi kurma ve içe dönük kalkınma",
    ],
    correctAnswer: "E) Kendine yeterli bir ekonomi kurma ve içe dönük kalkınma",
  },
  {
    id: 19,
    questionText:
      "Aşağıdakilerden hangisi neo-yapısalcı yaklaşımın koşullarından biri değildir?",
    options: [
      "A) Yerli sanayinin gelişiminin teşvik edilmesi",
      "B) Tarımsal üretim artışı",
      "C) Devletin talep yaratması",
      "D) Girişimci sınıfın oluşturulması",
      "E) Çok yönlü yatırım planlaması",
    ],
    correctAnswer: "C) Devletin talep yaratması",
  },
  {
    id: 20,
    questionText:
      "D.Seers'a göre kalkınmanın merkezinde yer alan faktör aşağıdakilerden hangisidir?",
    options: [
      "A) Üretim",
      "B) İnsan",
      "C) Tasarruf",
      "D) Refah artışı",
      "E) Sanayi",
    ],
    correctAnswer: "B) İnsan",
  },
  {
    id: 21,
    questionText:
      "İnsan merkezli kalkınma yaklaşımının odağında aşağıdaki unsurlardan hangisi yer almaz?",
    options: [
      "A) İyi bir eğitim",
      "B) Demokratik hak",
      "C) Özgürlükler",
      "D) Sağlıklı uzun yaşam",
      "E) Verimlilik artışı",
    ],
    correctAnswer: "E) Verimlilik artışı",
  },
  {
    id: 22,
    questionText:
      "Aşağıdakilerden hangisi temel ihtiyaçlar yaklaşımına göre az gelişmişliğin çözümlerinden biri değildir?",
    options: [
      "A) İşsizlik sorununun çözülmesi",
      "B) İstikrarlı tüketim yapısı",
      "C) İnsan kaynaklarının geliştirilmesi",
      "D) Kırsal kalkınmanın hızlandırılması",
      "E) Temel ihtiyaçların asgari ölçüde karşılanması",
    ],
    correctAnswer: "B) İstikrarlı tüketim yapısı",
  },
  {
    id: 23,
    questionText:
      "Sürdürülebilir kalkınma anlayışının odağında hangi faktör yatar?",
    options: [
      "A) İnsan",
      "B) Verimlilik",
      "C) Sermaye",
      "D) Artı değer",
      "E) Çevre",
    ],
    correctAnswer: "E) Çevre",
  },
  {
    id: 24,
    questionText:
      "Nurkse'a göre gelişmemiş ülkeler aşağıdakilerden hangi özelliklere sahiptir?",
    options: [
      "A) Geniş pazar büyüklüğü",
      "B) Yüksek üretim düzeyi",
      "C) Düşük üretkenlik düzeyi",
      "D) Yeterli sermaye birikimi",
      "E) Hiçbiri",
    ],
    correctAnswer: "C) Düşük üretkenlik düzeyi",
  },
  {
    id: 25,
    questionText:
      "Aşağıdakilerden hangisi geleneksel iktisada karşı geliştirilen yaklaşımlardan biridir?",
    options: [
      "A) İnsan merkezli kalkınma yaklaşımı",
      "B) Meta merkezli kalkınma yaklaşımı",
      "C) Coğrafi merkezli kalkınma yaklaşımı",
      "D) Toprak odaklı kalkınma yaklaşımı",
      "E) İşçi odaklı kalkınma yaklaşımı",
    ],
    correctAnswer: "A) İnsan merkezli kalkınma yaklaşımı",
  },
  {
    id: 26,
    questionText:
      "Aşağıdakilerden hangisi Nurkse'a göre az gelişmiş ülkeler içine düştükleri kısır döngüyü kırma yollarından biri değildir?",
    options: [
      "A) Tasarruflar",
      "B) Dış yardımlar",
      "C) Yabancı sermaye",
      "D) Borçlanma",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Tasarruflar",
  },
  {
    id: 27,
    questionText:
      "Nobel ödüllü iktisatçı Robert Lucas, aşağıdaki yaklaşımlardan hangisinin öncüsüdür?",
    options: [
      "A) Bilgi üretimi ve dışsallıklar",
      "B) Yakınsama hipotezi",
      "C) Beşeri sermaye modeli",
      "D) Kamu politikası modeli",
      "E) Cobb-Douglas fonksiyonu",
    ],
    correctAnswer: "C) Beşeri sermaye modeli",
  },
  {
    id: 28,
    questionText:
      "Aşağıdakilerden hangisi Barro'nun varsayımlarından biridir?",
    options: [
      "A) Kamu harcamaları büyüme sürecini hızlandıran önemli bir etkendir.",
      "B) Vergilendirmeden kaynaklanan özel tasarruflardaki azalma büyümeyi olumsuz etkiler.",
      "C) Hükümet politikalarıyla Ar-Ge çalışmalarının teşvik edilmesi gerekir.",
      "D) Gelişmiş ve gelişmekte olan ülkeler arasında beliren bilgi açığı ancak aktif politikalarla kapatılabilir.",
      "E) Hepsi",
    ],
    correctAnswer: "E) Hepsi",
  },
  {
    id: 29,
    questionText:
      "Aşağıdaki iktisatçılardan hangisi içsel büyüme teorilerine katkıda bulunmamıştır?",
    options: ["A) Romer", "B) Solow", "C) Arrow", "D) Lucas", "E) Hiçbiri"],
    correctAnswer: "B) Solow",
  },
  {
    id: 30,
    questionText:
      '30-) "Hızlı kentleşme ile birlikte modern ve geleneksel kesimin faaliyetlerini beraber sürdürmeye çalıştığı...... bir yapı ortaya çıkmaktadır. Söz konusu...... yapı hem gelişmiş hem de az gelişmiş ülkelerde görülebilmektedir. Fakat az gelişmiş ülkelerde daha çok rastlanan bir olgudur" şeklindeki paragrafta bulunan boşluklara aşağıdaki ifadelerden hangisi gelmelidir?',
    options: [
      "A) Monoist (Tekli)",
      "B) Dualist (İkili)",
      "C) Homojen",
      "D) Heterojen",
      "E) Hiçbiri",
    ],
    correctAnswer: "B) Dualist (İkili)",
  },
  {
    id: 31,
    questionText:
      "Kalkınma iktisadi terminolojisinde piyasaları düzgün işlemeyen, üreticiler ve tüketicilerin tam bilgiye sahip olmadığı, piyasa fiyatının arz ve talep tarafından belirlenemediği ve piyasa dengesizliğinin çok yaygın olduğu ülkeler için aşağıdaki ifadelerden hangisi kullanılır?",
    options: [
      "A) Gelişmiş ekonomi",
      "B) Kuzey ekonomisi",
      "C) Sanayileşmiş ekonomi",
      "D) Birinci dünya ekonomisi",
      "E) Gelişmekte olan ekonomi",
    ],
    correctAnswer: "E) Gelişmekte olan ekonomi",
  },
  {
    id: 32,
    questionText:
      "Ekonomik gelişmişliğin kişi başına düşen milli gelir ile ölçümlenmesi yöntemine göre kişi başına yıllık 10,000 dolar gelire sahip bir ekonomi aşağıdakilerden hangisine dâhildir?",
    options: [
      "A) Düşük gelirli",
      "B) Orta gelirli",
      "C) Yüksek gelirli ülkeler",
      "D) Zengin",
      "E) Yüksek orta gelirli",
    ],
    correctAnswer: "E) Yüksek orta gelirli",
  },
  {
    id: 33,
    questionText:
      "Aşağıdakilerden hangisi az gelişmiş ülke ekonomilerinin özelliklerinden biri değildir?",
    options: [
      "A) Üretimde en yüksek pay tarım sektörüne aittir.",
      "B) İstihdamda en yüksek pay tarım sektörüne aittir.",
      "C) Üretimde en yüksek pay hizmet sektörüne aittir.",
      "D) Eğitim seviyesi düşüktür.",
      "E) Nüfusun büyük bölümü kırsal alanda yaşamaktadır.",
    ],
    correctAnswer: "C) Üretimde en yüksek pay hizmet sektörüne aittir.",
  },
  {
    id: 34,
    questionText:
      '34-) "...... söz konusu olduğu ülkelerde gelişme daha hızlı yaşanmakta, girişimler daha fazla desteklenmekte ve yenilikçilik toplumsal kesime daha uygun hale gelmektedir." ifadesini noktalı alan en doğru şekilde aşağıdaki ifadelerin hangisiyle doldurulabilir?',
    options: [
      "A) Kendi kendine yeterliliğin",
      "B) Enflasyonda çok düşük bir seviyenin",
      "C) İstihdamda çok yüksek bir seviyenin",
      "D) Yerel para biriminde aşırı değerliliğin",
      "E) Yerel para biriminde aşırı değersizliğin",
    ],
    correctAnswer: "A) Kendi kendine yeterliliğin",
  },
  {
    id: 35,
    questionText:
      "İktisatçı Amartya Sen, kalkınma kavramının geniş kapsamlı yapısını hangi çerçevede değerlendirmeyi tercih etmiştir?",
    options: [
      "A) Eşitlik",
      "B) Demokrasi",
      "C) Özgürlük",
      "D) Adalet",
      "E) Bağımsızlık",
    ],
    correctAnswer: "C) Özgürlük",
  },
  {
    id: 36,
    questionText:
      "Ekonomik kalkınma uzun dönemde ekonomik büyümenin yanında neyin gerçekleşmesi gerektiğini öngörür?",
    options: [
      "A) Sosyal ve kültürel yapının da değiştirilmesini ve yenileştirilmesini",
      "B) Faiz politikasının sıkılaştırılmasını",
      "C) Sanayi sektörünün büyümeye liderlik etmesini",
      "D) Tam istihdam hedefine ulaşılmasını",
      "E) Girişimcilik ruhunun beslenmesini",
    ],
    correctAnswer:
      "A) Sosyal ve kültürel yapının da değiştirilmesini ve yenileştirilmesini",
  },
  {
    id: 37,
    questionText:
      '37-) Aşağıdakilerin hangisi "ekonomik kalkınmanın gerçekleşmesi için gereken" olmazsa olmazlardan biri değildir?',
    options: [
      "A) Ekonomik büyüme",
      "B) Üretim artışı",
      "C) Kişi başına gayri safi yurtiçi hasılada artış",
      "D) Değerli yerel para",
      "E) İstihdam artışı",
    ],
    correctAnswer: "D) Değerli yerel para",
  },
  {
    id: 38,
    questionText:
      "Ünlü iktisatçı Hirschman, ekonomik kalkınmanın çok boyutlu yönünü vurgulamak için hangi benzetmeyi kullanır?",
    options: [
      "A) Yapboz bulmacası",
      "B) Dalgalı deniz",
      "C) Tüneldeki ışık",
      "D) Gemi çıpası",
      "E) İskambil destesi",
    ],
    correctAnswer: "A) Yapboz bulmacası",
  },
  {
    id: 39,
    questionText:
      "Hangi tarihsel dönem sonrasında kalkınma iktisatçıları ile politika yapıcılar çok daha yakın çalışmaya başlamış ve her ülkenin tarihsel yapısına özgü kalkınma planları hazırlanması eğilimi ağırlık kazanmıştır?",
    options: [
      "A) Birinci Dünya Savaşı",
      "B) İkinci Dünya Savaşı",
      "C) Sanayi Devrimi",
      "D) 1917 Ekim Devrimi",
      "E) Büyük Buhran",
    ],
    correctAnswer: "B) İkinci Dünya Savaşı",
  },
  {
    id: 40,
    questionText:
      "Aşağıdaki ikili ifadelerden hangisi Romer'a göre iktisadi büyümenin kaynağıdır?",
    options: [
      "A) Nüfus - Tarım",
      "B) Sermaye birikimi - Tasarruf",
      "C) Tasarruf - İstihdam",
      "D) Fikirler - Şeyler",
      "E) Fikirler - Nüfus",
    ],
    correctAnswer: "D) Fikirler - Şeyler",
  },
  {
    id: 41,
    questionText:
      "Harrod-Domar büyüme modelinde kaç çeşit büyüme söz konusudur?",
    options: ["A) 3", "B) 2", "C) 1", "D) 7", "E) 4"],
    correctAnswer: "A) 3",
  },
  {
    id: 42,
    questionText:
      "Aşağıdakilerden hangisi Harrod-Domar modelinin varsayımlarından değildir?",
    options: [
      "A) Ekonomi tam istihdam seviyesindedir.",
      "B) Sermaye ve gelir arasında sabit bir teknolojik ilişki vardır.",
      "C) Dış ticaret yoktur ve kapalı ekonomi geçerlidir.",
      "D) Sermaye tek üretim faktörü olarak alınmaktadır.",
      "E) Ekonomide kamu harcamaları önemli yer tutar.",
    ],
    correctAnswer: "E) Ekonomide kamu harcamaları önemli yer tutar.",
  },
  {
    id: 43,
    questionText:
      "Harrod-Domar büyüme modeline göre aşağıdakilerden hangisi ekonominin itici gücüdür?",
    options: [
      "A) İşçiler",
      "B) Tasarruflar",
      "C) Sanayi",
      "D) Tüketim",
      "E) Yatırımlar",
    ],
    correctAnswer: "E) Yatırımlar",
  },
  {
    id: 44,
    questionText:
      "Aşağıdaki tanımlardan hangisi Neo-klasik büyüme modelindeki durağan durumu niteler?",
    options: [
      "A) İşçi başına yatırımın, işçi başına yıpranmaya eşit olması",
      "B) İşçi başına çıktı ile işçi başına yıpranma arasındaki farkın en fazla olduğu sermaye düzeyi",
      "C) Gelişmiş ve gelişmekte olan ülkeler arasındaki gelir farkının uzun dönemde yok olacağı inancı",
      "D) Faiz haddi farklılıklarının ortadan kalkması",
      "E) Hiçbiri",
    ],
    correctAnswer:
      "A) İşçi başına yatırımın, işçi başına yıpranmaya eşit olması",
  },
  {
    id: 45,
    questionText:
      "Aşağıdakilerden hangisi içsel büyüme modelleri için geçerli olan ifadelerden biridir?",
    options: [
      "A) Eksik rekabet piyasalarının modele dahil edilmesi",
      "B) Sermayenin artan getiriye sahip olduğu varsayımı",
      "C) Fiziksel sermayeye, insan ve bilgiye yatırım yapılması",
      "D) Dışsallıkların varlığının modellere uygulanması",
      "E) Hepsi",
    ],
    correctAnswer: "E) Hepsi",
  },
  {
    id: 46,
    questionText:
      "İçsel büyüme modellerinin çoğunda aşağıdakilerden hangisi kullanılmaktadır?",
    options: [
      "A) Yakınsama hipotezi",
      "B) Geleneksel kalkınma modeli",
      "C) AK modeli",
      "D) Beşeri sermaye faktörü",
      "E) Dışsallıklar",
    ],
    correctAnswer: "C) AK modeli",
  },
  {
    id: 47,
    questionText:
      "Ekonomiler hangi faktör nedeniyle Solow modelinde kalıcı büyüme gösterirler?",
    options: [
      "A) Nüfus artış hızı",
      "B) Sermaye birikimi",
      "C) Tasarruf artışı",
      "D) Teknolojik gelişme",
      "E) İstihdam yapısı",
    ],
    correctAnswer: "D) Teknolojik gelişme",
  },
  {
    id: 48,
    questionText:
      "Aşağıdakilerden hangisi içsel büyüme modellerinden biri değildir?",
    options: [
      "A) Ar-Ge modeli",
      "B) Durağan durum",
      "C) Beşeri sermaye modeli",
      "D) AK modeli",
      "E) Bilgi üretimi ve dışsallıklar",
    ],
    correctAnswer: "B) Durağan durum",
  },
  {
    id: 49,
    questionText:
      "Aşağıdakilerden hangisi Neoklasik büyüme modellerinin varsayımlarından biridir?",
    options: [
      "A) Eksik istihdam",
      "B) Açık ekonomi",
      "C) Nüfus artışı dışsaldır",
      "D) Ölçeğe göre artan getiri",
      "E) Tek sektörlü ekonomik yapı",
    ],
    correctAnswer: "E) Tek sektörlü ekonomik yapı",
  },
  {
    id: 50,
    questionText:
      "Büyüme teorisini oluştururken Malthus'un düştüğü yanılgı aşağıdakilerden hangisidir?",
    options: [
      "A) Nüfus artışına odaklanmak",
      "B) Tasarrufları hesaba katmamak",
      "C) Sermaye birikimini göz ardı etmek",
      "D) Verimliliği göz ardı etmek",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Nüfus artışına odaklanmak",
  },
  {
    id: 51,
    questionText:
      "Harrod-Domar modelinin incelediği durum aşağıdaki ifadelerden hangisi ile açıklanabilir?",
    options: [
      "A) Üretim fonksiyonunun maksimizasyonu",
      "B) Tasarruf katsayısındaki değişim",
      "C) Büyüyen ekonominin denge şartları",
      "D) Refah artışının ölçümlenmesi",
      "E) Sanayinin tüketim içindeki payı",
    ],
    correctAnswer: "C) Büyüyen ekonominin denge şartları",
  },
  {
    id: 52,
    questionText:
      "Malthus'a göre efektif talebin ortaya çıkmasının tek yolu aşağıdakilerden hangisidir?",
    options: [
      "A) Nüfus yapısının değişmesi",
      "B) Adil gelir paylaşımı",
      "C) Üretim kapasitesinde artış",
      "D) İstihdamın artması",
      "E) Verimlilik artışı",
    ],
    correctAnswer: "B) Adil gelir paylaşımı",
  },
  {
    id: 53,
    questionText:
      "Aşağıdakilerden hangisi Ricardo'nun büyüme modelinin temel varsayımlarından biri değildir?",
    options: [
      "A) Tasarruf artışı istikrarlıdır.",
      "B) Sermaye birikimini uyaran kâr motivasyonudur.",
      "C) Sanayi kesiminde teknik ilerleme hızı yüksektir.",
      "D) Ekonomide tam istihdam ve tam rekabet koşulları egemendir.",
      "E) Üretim fonksiyonu veridir.",
    ],
    correctAnswer: "A) Tasarruf artışı istikrarlıdır.",
  },
  {
    id: 54,
    questionText:
      "Aşağıdakilerden hangisi Harrod-Domar modelinde kullanılan üretim fonksiyonunu tanımlar?",
    options: [
      "A) Artan üretim fonksiyonu",
      "B) Azalan üretim fonksiyonu",
      "C) Dalgalı üretim fonksiyonu",
      "D) Sabit üretim fonksiyonu",
      "E) Hiçbiri",
    ],
    correctAnswer: "D) Sabit üretim fonksiyonu",
  },
  {
    id: 55,
    questionText:
      "Ricardo'nun büyüme modelinde temel belirleyici aşağıdakilerden hangisidir?",
    options: [
      "A) Toprağın verimliliği",
      "B) Nüfus kontrolü",
      "C) Sanayi sektörünün payı",
      "D) İşgücünün verimliliği",
      "E) Üretim yapısı",
    ],
    correctAnswer: "A) Toprağın verimliliği",
  },
  {
    id: 56,
    questionText:
      "Marx, emek-değer teorisini oluştururken hangi iktisatçıdan etkilenmiştir?",
    options: [
      "A) Thomas R. Malthus",
      "B) J. Baptiste Say",
      "C) J. Maynard Keynes",
      "D) David Ricardo",
      "E) Hiçbiri",
    ],
    correctAnswer: "D) David Ricardo",
  },
  {
    id: 57,
    questionText:
      "Sürdürülebilir kalkınma kavramının temel politika önceliği hangisidir?",
    options: [
      "A) Düşük faiz yüksek kur politikası",
      "B) Her yıl yüzde 5'in üzerinde büyüme",
      "C) Düşük kur yüksek faiz politikası",
      "D) Doğal kaynakların ve çevrenin savurganlığa yol açmadan kullanılması",
      "E) Hiçbiri",
    ],
    correctAnswer:
      "D) Doğal kaynakların ve çevrenin savurganlığa yol açmadan kullanılması",
  },
  {
    id: 58,
    questionText:
      "Aşağıdakilerden hangisi bir ülkenin kalkınma sürecinin içermesi gereken öğelerden biri değildir?",
    options: [
      "A) Büyüme",
      "B) Refah artışı",
      "C) Enflasyon",
      "D) Adil gelir paylaşımı",
      "E) Deflasyon",
    ],
    correctAnswer: "C) Enflasyon",
  },
  {
    id: 59,
    questionText:
      '59-) "Büyümenin sınırları paradigması" ilk dönem çevre politikaları için önemli bir referans olarak kabul edilmektedir. Söz konusu paradigmayı ortaya atan rapor hangi oluşum tarafından ne zaman açıklanmıştır?',
    options: [
      "A) Chicago Okulu, 2000'li yıllar",
      "B) Frankfurt Okulu, 1980'li yıllar",
      "C) Fizyokratlar, 1950'li yıllar",
      "D) Neoklasikler, 1960'lı yıllar",
      "E) Roma Kulübü, 1970'li yıllar",
    ],
    correctAnswer: "E) Roma Kulübü, 1970'li yıllar",
  },
  {
    id: 60,
    questionText:
      "Malthus'un nüfus kavramına göre, hızlı nüfus artışı uzun vadede ülke ekonomisine nasıl bir etki yapar?",
    options: [
      "A) Üretim yapısının değişmesi",
      "B) Refah artışı",
      "C) Tüketim yapısının değişmesi",
      "D) İşsizliğin artması",
      "E) Üretim kapasitesinde artış",
    ],
    correctAnswer: "D) İşsizliğin artması",
  },
  {
    id: 61,
    questionText:
      '61-) Kurumsal yapı büyümenin kaynaklarından biridir. "Mülkiyet haklarını koruyan ve sözleşmelerin işlemesini sağlayan" kurumlar, iktisadi büyüme terminolojisinde hangi isimle anılır?',
    options: [
      "A) Piyasa yaratıcı kurumlar",
      "B) Piyasa düzenleyici kurumlar",
      "C) Piyasa istikrarını sağlayıcı kurumlar",
      "D) Piyasayı meşrulaştırıcı kurumlar",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Piyasa yaratıcı kurumlar",
  },
  {
    id: 62,
    questionText:
      '62-) "Ekonomik birimler arasındaki etkileşim için istikrarlı bir yapı kurarak belirsizliği azaltmayı amaçlayan" kurumlar hangi isimle anılır?',
    options: [
      "A) Piyasa yaratıcı kurumlar",
      "B) Piyasa düzenleyici kurumlar",
      "C) Piyasa istikrarını sağlayıcı kurumlar",
      "D) Piyasayı meşrulaştırıcı kurumlar",
      "E) Hiçbiri",
    ],
    correctAnswer: "B) Piyasa düzenleyici kurumlar",
  },
  {
    id: 63,
    questionText:
      "Aşağıdakilerden hangisi Rostow'un iktisadi büyümeye ilişkin belirlediği aşamalardan biri değildir?",
    options: [
      "A) Geleneksel toplum aşaması",
      "B) Kalkış aşaması",
      "C) Kalkış sonrası aşaması",
      "D) Kalkışa hazırlık aşaması",
      "E) Olgunluk aşaması",
    ],
    correctAnswer: "C) Kalkış sonrası aşaması",
  },
  {
    id: 64,
    questionText:
      "İktisadi büyümeyi sınırlayabilecek temel faktörlerden biri aşağıdakilerden hangisidir?",
    options: [
      "A) Deflasyon",
      "B) Devalüasyon",
      "C) Nüfus kontrolü",
      "D) Çevre kirliliği",
      "E) Altyapı yetersizliği",
    ],
    correctAnswer: "D) Çevre kirliliği",
  },
  {
    id: 65,
    questionText:
      "Aşağıdaki faktörlerden hangisinde yaşanacak olan artışın sonunda iktisadi büyüme sağlanabilir?",
    options: [
      "A) Tarım ürünleri",
      "B) İstihdam",
      "C) Enflasyon",
      "D) Tüketim",
      "E) Hiçbiri",
    ],
    correctAnswer: "B) İstihdam",
  },
  {
    id: 66,
    questionText:
      "Bir ekonomide büyüme aşağıdakilerden hangisine bağlıdır?",
    options: [
      "A) Üretim faktörleri arzı",
      "B) İstihdam",
      "C) Enflasyon",
      "D) Tasarruf",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Üretim faktörleri arzı",
  },
  {
    id: 67,
    questionText:
      "Aşağıdakilerden hangisi iktisadi büyüme ile gerçekleşmesi beklenen gelişmelerden biri değildir?",
    options: [
      "A) Üretim yapısının değişmesi",
      "B) Refah artışı",
      "C) Tüketim yapısının değişmesi",
      "D) Üretim kapasitesinde artış",
      "E) İşsizliğin artması",
    ],
    correctAnswer: "E) İşsizliğin artması",
  },
  {
    id: 68,
    questionText:
      "Aşağıdakilerden hangisi Kuznets'in iktisadi büyüme tanımındaki altı özellikten biri değildir?",
    options: [
      "A) Verimlilik artışı",
      "B) Ekonomide yapısal değişim",
      "C) Üretim artışı",
      "D) Yüksek oranlı sosyal ve ideolojik değişim",
      "E) Adil gelir bölüşümü",
    ],
    correctAnswer: "E) Adil gelir bölüşümü",
  },
  {
    id: 69,
    questionText:
      "Bir ekonominin üretim potansiyeli arttığı zaman, üretim imkânları eğrisinde nasıl bir durum meydana gelir?",
    options: [
      "A) Sağa doğru kayar.",
      "B) Değişmez.",
      "C) Sola doğru kayar.",
      "D) Aşağıya doğru kayar",
      "E) Yukarı doğru kayar",
    ],
    correctAnswer: "A) Sağa doğru kayar.",
  },
  {
    id: 70,
    questionText:
      "Bir ülkenin milli gelir artış hızı ile nüfus artış hızı eşitse, bu ülkede görülen iktisadi büyüme türü aşağıdakilerden hangisidir?",
    options: [
      "A) Geleneksiz büyüme",
      "B) Durgun büyüme",
      "C) Sessiz büyüme",
      "D) Kapalı büyüme",
      "E) Açık büyüme",
    ],
    correctAnswer: "B) Durgun büyüme",
  },
  {
    id: 71,
    questionText:
      "Gayrı Safi Yurtiçi Hasıla (GSYİH) kaç farklı yöntemle hesaplanabilir?",
    options: ["A) 3", "B) 2", "C) 4", "D) 1", "E) 6"],
    correctAnswer: "A) 3",
  },
  {
    id: 72,
    questionText:
      "Aşağıdakilerden hangisi ekonomik büyümeyi açıklayan dört temel değişkenden biri değildir?",
    options: [
      "A) Teknoloji",
      "B) Reel sermaye",
      "C) Döviz kuru",
      "D) Doğal kaynaklar",
      "E) İşgücü",
    ],
    correctAnswer: "C) Döviz kuru",
  },
  {
    id: 73,
    questionText:
      "İktisadi büyümenin bir noktada sınırlanması gerektiğini öne süren fikirlerin temelinde hangi kaygı yatmaktadır?",
    options: [
      "A) Çevre sorunları",
      "B) Sermaye yetersizliği",
      "C) Nüfusun azalması",
      "D) Teknolojik yetersizlik",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Çevre sorunları",
  },
  {
    id: 74,
    questionText: "Aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) Büyüme kalkınmayı kapsar.",
      "B) Kalkınma GSYİH artışı yüzde 10'un üzerinde ise gerçekleşir.",
      "C) Yapısal değişim ekonomik büyümeyi içerir.",
      "D) Bir ekonomi kalkınmadan büyüyemez.",
      "E) Kalkınma büyümeyi kapsar.",
    ],
    correctAnswer: "E) Kalkınma büyümeyi kapsar.",
  },
  {
    id: 75,
    questionText:
      "Aşağıdakilerden hangisi iktisadi yapıyı oluşturan unsurlardan biri değildir?",
    options: [
      "A) Üretim ilişkileri",
      "B) Ticaret",
      "C) Milli gelir dağılımı",
      "D) GSYİH",
      "E) İstihdam yapısı",
    ],
    correctAnswer: "D) GSYİH",
  },
  {
    id: 76,
    questionText:
      "Schumpeter'e göre iktisadi gelişme bir çeşit sıçramadır. Ünlü iktisatçıya göre bu sıçramayı sağlayan en önemli itici güç aşağıdakilerden hangisidir?",
    options: [
      "A) Girişimciler",
      "B) İşçiler",
      "C) Büyüme",
      "D) Krediler",
      "E) Teknoloji",
    ],
    correctAnswer: "A) Girişimciler",
  },
  {
    id: 77,
    questionText:
      "İktisadi gelişmeyi iktisadi büyümeden ayıran temel farklılık aşağıdakilerden hangisidir?",
    options: [
      "A) Sanayi sektöründe hızlı büyüme",
      "B) Gelişme sürecinin yapısal değişim içermesi",
      "C) Hizmet sektöründe hızlı büyüme",
      "D) Ticaretin gelişmesi",
      "E) Yüzde 10'un üzerinde yıllık GSYİH artışı",
    ],
    correctAnswer: "B) Gelişme sürecinin yapısal değişim içermesi",
  },
  {
    id: 78,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) İktisadi büyümenin gelir dağılımını iyileştirici özelliği yoktur.",
      "B) Yoksulluk kısır döngüsünü kırmak için iktisadi büyümeye ihtiyaç vardır.",
      "C) İktisadi büyümenin ölçümünde reel GSYİH yerine nominal GSYİH kullanılır.",
      "D) Sürdürülebilir iktisadi büyüme için kabul edilebilir bir gelir dağılımı gerekir.",
      "E) İktisadi büyüme süreci temel olarak üretim fonksiyonu ile başlamaktadır.",
    ],
    correctAnswer:
      "C) İktisadi büyümenin ölçümünde reel GSYİH yerine nominal GSYİH kullanılır.",
  },
  {
    id: 79,
    questionText:
      "Aşağıdakilerden hangisi ekonomik büyümenin doğal sonuçlarından biri değildir?",
    options: [
      "A) GSYİH artışı",
      "B) Refah artışı",
      "C) Gelir dağılımında düzelme",
      "D) İşsizlik artışı",
      "E) Eğitim düzeyinde artış",
    ],
    correctAnswer: "C) Gelir dağılımında düzelme",
  },
  {
    id: 80,
    questionText:
      "Aşağıdaki ifadelerden hangisi iktisadi büyümenin karakteristik olgularından biridir?",
    options: [
      "A) Sermaye/hasıla katsayısı istikrarlıdır.",
      "B) İşgücü maliyetlerindeki artış sabittir.",
      "C) Sermayenin getiri oranı değişkendir.",
      "D) Uzun dönemde sermaye-emek arasındaki gelir bölüşümü emek lehinedir.",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Sermaye/hasıla katsayısı istikrarlıdır.",
  },
];

export const lessons: Lesson[] = [
  {
    id: "Açık Kaynak İşletim Sistemleri",
    title: "Açık Kaynak İşletim Sistemleri",
    description: `${AcikKaynak.length} soruluk tam tarama testi.`,
    accent: "indigo",
    questions: AcikKaynak,
  },
  {
    id: "Dijital Liderlik",
    title: "Dijital Liderlik",
    description: `${DijitalPazarlama.length} soruluk tam tarama testi.`,
    accent: "fuchsia",
    questions: DijitalPazarlama,
  },
  {
    id: "Stratejik Yönetim",
    title: "Stratejik Yönetim",
    description: `${StratejikYonetim.length} soruluk tam tarama testi.`,
    accent: "emerald",
    questions: StratejikYonetim,
  },
  {
    id: "Kalkinma Ekonomisi",
    title: "Kalkınma Ekonomisi",
    description: `${KalkinmaEkonomisi.length} soruluk tam tarama testi.`,
    accent: "emerald",
    questions: KalkinmaEkonomisi,
  },
];
