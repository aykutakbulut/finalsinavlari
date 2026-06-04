import { Lesson } from "../types/quiz";

const AcikKaynak = [
  {
    id: 1,
    questionText:
      "Aşağıdakilerden hangisi CPU-Programlama Algoritmalarını karşılaştırmak için kullanılan kriterlerden biri değildir?",
    options: [
      "Verimlilik",
      "Geri dönüş Süresi",
      "Bekleme Süresi",
      "Tepki Süresi",
      "G/Ç Süresi",
    ],
    correctAnswer: "G/Ç Süresi",
  },
  {
    id: 2,
    questionText:
      "Aşağıdakilerden hangisi Zamanlama Algoritmalarından biri değildir?",
    options: [
      "FCFS",
      "SJF",
      "Thread Scheduling",
      "Priority Scheduling",
      "Multilevel Queue Scheduling",
    ],
    correctAnswer: "Thread Scheduling",
  },
  {
    id: 3,
    questionText:
      "FCFS algoritmasına göre işlemler P1, P2, P3 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 24, P2 Burst Time: 3, P3 Burst Time: 3)",
    options: ["16", "17", "18", "19", "20"],
    correctAnswer: "17",
  },
  {
    id: 4,
    questionText:
      "FCFS algoritmasına göre işlemler P2, P3, P1 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 24, P2 Burst Time: 3, P3 Burst Time: 3)",
    options: ["7", "6", "5", "4", "3"],
    correctAnswer: "3",
  },
  {
    id: 5,
    questionText:
      "SJF algoritmasına göre işlemler P4, P1, P3, P2 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 6, P2 Burst Time: 8, P3 Burst Time: 7, P4 Burst Time: 3)",
    options: ["7", "6", "5", "4", "3"],
    correctAnswer: "7",
  },
  {
    id: 6,
    questionText:
      "Hangi programlama algoritması, ilk önce CPU'yu ilk isteyen işlemciye tahsis eder?",
    options: [
      "FCFS",
      "SJF",
      "Thread Scheduling",
      "Priority Scheduling",
      "Multilevel Queue Scheduling",
    ],
    correctAnswer: "FCFS",
  },
  {
    id: 7,
    questionText:
      "Aşağıdakilerden hangileri Shortest Job First algoritmasının türlerindendir?\nI. Kesilmesiz SJF  II. Yarı Kesilmesiz SJF  III. Kesilmeli SJF  IV. Yarı Kesilmeli SJF",
    options: ["I, II", "I, III", "II, IV", "I, II, III", "Hepsi"],
    correctAnswer: "I, III",
  },
  {
    id: 8,
    questionText:
      "Aşağıdakilerden hangisi bir CPU Scheduling algoritması için kriter olarak kullanılmaz?",
    options: [
      "Max. CPU Utilazation",
      "Min. Turnaround",
      "Max. Throughput",
      "Min. Response",
      "Max. Waiting",
    ],
    correctAnswer: "Min. Response",
  },
  {
    id: 9,
    questionText:
      "Aşağıdakilerden hangisi Solaris zamanlamasında kullanılan sınıflardan değildir?",
    options: ["TS", "RT", "FSS", "FP", "FD"],
    correctAnswer: "FD",
  },
  {
    id: 10,
    questionText:
      "Aşağıdakilerden hangisi WIN 32'de tanımlı öncelik sınıflarındandır?",
    options: [
      "TITLE PRIORITY CLASS",
      "LOW PRIORITY CLASS",
      "HIGH PRIORITY CLASS",
      "REAL PRIORITY CLASS",
      "ABOVE PRIORITY CLASS",
    ],
    correctAnswer: "HIGH PRIORITY CLASS",
  },
  {
    id: 11,
    questionText:
      "İki veya daha fazla işlemin karşılıklı olarak birbirlerinin kullandığı kaynaklara erişmek istemesiyle oluşan sıkıntı ne olarak adlandırılır?",
    options: [
      "Donma",
      "Ölümcül Kilitlenme",
      "İşlem Önceliği",
      "Canlı Kilitlenme",
      "Bloklanma",
    ],
    correctAnswer: "Ölümcül Kilitlenme",
  },
  {
    id: 12,
    questionText:
      "Herhangi bir zamanda sadece bir süreç kaynağı kullanabiliyor olması durumu hangi kilitlenme koşuludur?",
    options: [
      "Karşılıklı dışlama",
      "Tutup bekleme",
      "Boşaltılamazlık",
      "Dairesel bekleme",
      "Kaynak Ayırma",
    ],
    correctAnswer: "Karşılıklı dışlama",
  },
  {
    id: 13,
    questionText:
      "En az bir kaynağı tutan bir süreç, başka süreçlerin tuttuğu kaynakları beklemesi hangi kilitlenme koşuludur?",
    options: [
      "Karşılıklı Dışlama",
      "Tutup Bekleme",
      "Boşaltılamazlık",
      "Dairesel Bekleme",
      "Kaynak Ayırma",
    ],
    correctAnswer: "Tutup Bekleme",
  },
  {
    id: 14,
    questionText: "Aşağıdakilerden hangisi kilitlenme koşullarından değildir?",
    options: [
      "Karşılıklı Dışlama",
      "Tutup Bekleme",
      "Boşaltılamazlık",
      "Dairesel Bekleme",
      "Kaynak Ayırma",
    ],
    correctAnswer: "Kaynak Ayırma",
  },
  {
    id: 15,
    questionText:
      "Kaynakların birden fazla kopyası olup, sürecin önceden ne kadar kaynak kullanacağını talep edildiği algoritma hangisidir?",
    options: [
      "Tespit Algoritması",
      "Güvenli Algoritma",
      "Kaynak Ayırma Çizgesi",
      "Banker's Algoritması",
      "Kök Algoritma",
    ],
    correctAnswer: "Banker's Algoritması",
  },
  {
    id: 16,
    questionText:
      "Süreçlerin birbirilerinin kullandığı kaynakları ardı ardına beklemesi hangi kilitlenme-bekleme süreci olarak adlandırılır?",
    options: [
      "Karşılıklı Dışlama",
      "Tutup Bekleme",
      "Boşaltılamazlık",
      "Dairesel Bekleme",
      "Kaynak Ayırma",
    ],
    correctAnswer: "Dairesel Bekleme",
  },
  {
    id: 17,
    questionText:
      "Eğer işletim sistemi bir kaynağı mevcut işlemden alıp başka bir işleme veremiyorsa, hangi kilitlenme süreci olarak adlandırılır?",
    options: [
      "Karşılıklı Dışlama",
      "Tutup Bekleme",
      "Boşaltılamazlık",
      "Dairesel Bekleme",
      "Kaynak Ayırma",
    ],
    correctAnswer: "Boşaltılamazlık",
  },
  {
    id: 18,
    questionText:
      "Kaynak Ayırma Çizge Şemasına göre süreç kaynağı isteyince oluşan kenar durumu nedir?",
    options: [
      "Talep Kenarı",
      "İstek Kenarı",
      "Atama Kenarı",
      "Kaynak Kenar",
      "Açık Kenar",
    ],
    correctAnswer: "İstek Kenarı",
  },
  {
    id: 19,
    questionText:
      "Kaynak Ayırma Çizge Şemasına göre süreç kaynağı bırakınca oluşan kenar durumu nedir?",
    options: [
      "Talep Kenarı",
      "İstek Kenarı",
      "Atama Kenarı",
      "Kaynak Kenar",
      "Açık Kenar",
    ],
    correctAnswer: "Talep Kenarı",
  },
  {
    id: 20,
    questionText:
      "Aşağıdakilerden hangisi/hangileri kilitlenme yönetim yöntemlerinden biridir?\nI. Önleme  II. Sakınma  III. İzin verme-Kurtarma  IV. Görmezden Gelme",
    options: ["I-II", "III-IV", "Yalnız III", "I-II-IV", "Hepsi"],
    correctAnswer: "Hepsi",
  },
  {
    id: 21,
    questionText:
      "İşletim sistemi üzerinde işlenen verilerin tamamı RAM belleklerinden geçer. Bu verilerin RAM belleğe sığmaması durumunda işletim sistemi sabit diskten kendisine bir bölüm ayırır. Bu işleme ne denir?",
    options: [
      "Swapping",
      "Fragmantasyon",
      "Buffering",
      "Segmentasyon",
      "Paging",
    ],
    correctAnswer: "Swapping",
  },
  {
    id: 22,
    questionText:
      "Aşağıdakilerden hangisi Swapping işleminin en önemli dezavantajıdır?",
    options: [
      "RAM dolduğunda sabit diske başvurulması",
      "RAM belleklerin yavaş olması",
      "Sabit diskin RAM belleklere göre yavaş olması",
      "Sabit diskte yeterince boş alan olmaması",
      "RAM belleklerin kapasitesinin çok fazla olması",
    ],
    correctAnswer: "Sabit diskin RAM belleklere göre yavaş olması",
  },
  {
    id: 23,
    questionText:
      "Bellek üzerinde bulunan ancak bitişik olmayan kullanılabilir boş alanlara ne denir?",
    options: [
      "Swapping",
      "Fragmantasyon",
      "Buffering",
      "Segmentasyon",
      "Paging",
    ],
    correctAnswer: "Fragmantasyon",
  },
  {
    id: 24,
    questionText:
      "İşletim sisteminin birden fazla işlemi yaparken her işlem için belleği uygun bir şekilde paylaştırması yöntemine ne denir?",
    options: [
      "Swapping",
      "Fragmantasyon",
      "Buffering",
      "Segmentasyon",
      "Paging",
    ],
    correctAnswer: "Segmentasyon",
  },
  {
    id: 25,
    questionText:
      "Swapping, Paging ve Segmentasyon bellek teknolojilerinin kullanım amaçları nedir?",
    options: [
      "RAM bellek maliyetlerini düşürmek",
      "Sabit diski yavaş olduğu için kullanımını en aza indirmek",
      "Bellek alan yönetimini kolaylaştırmak ve performansı arttırmak",
      "Sabit diski en etkin şekilde kullanmak",
      "İşlemcinin RAM belleğe başvurusunu en aza indirmek",
    ],
    correctAnswer:
      "Bellek alan yönetimini kolaylaştırmak ve performansı arttırmak",
  },
  {
    id: 26,
    questionText: "Ana bellekle ilgili verilenlerden hangisi yanlıştır?",
    options: [
      "Ana bellek işlemci ve sabit disk arasında köprü görevi görür",
      "Ana belleğin hızı sabit diskin hızından yüksektir",
      "Ana belleğin hızı işlemcinin hızından düşüktür",
      "Ana belleğin yüksek kapasiteli olması performansı arttırır",
      "Ana belleğin kapasitesi her zaman sabit diskten fazla olmalıdır",
    ],
    correctAnswer:
      "Ana belleğin kapasitesi her zaman sabit diskten fazla olmalıdır",
  },
  {
    id: 27,
    questionText: "Ana bellekle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "SRAM ve DRAM olarak ikiye ayrılır",
      "Elektrik kesildiğinde bilgileri saklamaya devam ederler",
      "İşlemciden hızlı sabit diskten yavaştır",
      "İşlemci ve sabit disk arasında köprü görevi görür",
      "Kendi hafızası dolduğunda hard diske başvurabilir",
    ],
    correctAnswer: "Elektrik kesildiğinde bilgileri saklamaya devam ederler",
  },
  {
    id: 28,
    questionText:
      "Ana belleği diğer bellek çeşitlerinden ayıran en önemli özelliği hangisidir?",
    options: [
      "Sabit disklerden pahalı olması",
      "Ön bellekten yavaş olması",
      "Aktarım hızlarının yüksek olması",
      "Elektrik kesildiğinde bilgilerinin silinmesi",
      "Kapasitesinin sabit diske göre az olması",
    ],
    correctAnswer: "Aktarım hızlarının yüksek olması",
  },
  {
    id: 29,
    questionText:
      "RAM belleğin hızı ……… hızından düşüktür. RAM belleğin bu hız düşüklüğüne ön bellek (cache) yardımcı olur ve RAM ile ……… arasındaki veri transferinde görev yapar. Hangisi boş bırakılan yere gelmelidir?",
    options: ["ROM bellek", "Ana kart", "CPU", "Sabit disk", "GPU"],
    correctAnswer: "CPU",
  },
  {
    id: 30,
    questionText:
      "RAM bellek ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?",
    options: [
      "Herhangi bir işlem yapılırken diskten okunan bilgiler ve işlem sonuçları gibi her şey önce buraya yazılır",
      "RAM bellekteki bilgiler, elektrik kesilmesi veya bilgisayarı kapatmamız durumunda kaybolur",
      "Bilgisayar her açıldığında bilgiler buraya yeniden yüklenir",
      "RAM'deki bilgiler kalıcıdır",
      "RAM bellek yönetimi için swapping, paging gibi yöntemler kullanılır",
    ],
    correctAnswer: "RAM'deki bilgiler kalıcıdır",
  },
  {
    id: 31,
    questionText:
      "Sanal bellek kullanımı ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Bir çok durumda programın tamamının bellekte bulunması gerekmez",
      "Kullanıcı fiziksel bellek sınırlamalarından kurtulur",
      "Daha fazla bellek program aynı anda yürütülebilir",
      "Daha fazla G/Ç işlemine sebep olur",
      "Programları daha hızlı yürütmeye olanak sağlar",
    ],
    correctAnswer: "Daha fazla G/Ç işlemine sebep olur",
  },
  {
    id: 32,
    questionText:
      "Verilen bellek düzenlemesi şemasına göre A, B ve C sırasıyla neyi ifade etmektedir?\n(Şemada sol sütun A, orta kısım B, sağ sütun C olarak gösterilmiştir.)",
    options: [
      "fiziksel bellek, bellek haritalama, sanal bellek",
      "sanal bellek, bellek haritalama, fiziksel bellek",
      "fiziksel bellek, sanal bellek, bellek haritalama",
      "sanal bellek, fiziksel bellek, bellek haritalama",
      "Hiçbiri",
    ],
    correctAnswer: "sanal bellek, bellek haritalama, fiziksel bellek",
  },
  {
    id: 33,
    questionText:
      "Bir işlemin koşturulması sırasında, işlem için gerekli olan sayfa ya da sayfaların bulunmaması durumunda oluşan hataya ne denir?",
    options: [
      "Sayfa hatası (page fault)",
      "Bellek hatası (memory error)",
      "Haritalama hatası (mapping error)",
      "Sanal hata (virtual fault)",
      "Hiçbiri",
    ],
    correctAnswer: "Sayfa hatası (page fault)",
  },
  {
    id: 34,
    questionText:
      "Kullanıcının aynı anda birden fazla uygulama çalıştırmasına ne isim verilir?",
    options: [
      "multithreading",
      "multitasking",
      "multiprocessing",
      "multiprogramming",
      "multifuncitons",
    ],
    correctAnswer: "multitasking",
  },
  {
    id: 35,
    questionText:
      "G/Ç fonksiyonları verinin hangi öğeler arasında transfer edilmesini sağlar?",
    options: [
      "Kaydediciler (registers)",
      "Prosesler",
      "G/Ç modülü ve işlemci",
      "G/Ç cihazları",
      "İşlemci çekirdekleri",
    ],
    correctAnswer: "G/Ç modülü ve işlemci",
  },
  {
    id: 36,
    questionText:
      "Belleğe sayfa yerleştirme işleminde aşağıdakilerden hangisine gerek yoktur?",
    options: [
      "İstenilen sayfanın ikincil bellek üzerinden bulunması",
      "Ana bellek üzerinde boş çerçeve bulunması",
      "Boş çerçeve yok ise bir kurban çerçeve (victim frame) belrilenmesi",
      "Sayfaların defrag işlemine tabi tutulması",
      "Sayfanın çerçeve üzerine yerleştirilmesi",
    ],
    correctAnswer: "Sayfaların defrag işlemine tabi tutulması",
  },
  {
    id: 37,
    questionText:
      "Aşağıdakilerden hangisi sayfa yeniden yerleştirme algoritmalarından biri değildir?",
    options: [
      "FIFO Algoritması",
      "Optimal Algoritması",
      "DGS Algoritması",
      "LRU Algoritması",
      "Hiçbiri",
    ],
    correctAnswer: "DGS Algoritması",
  },
  {
    id: 38,
    questionText:
      "Tüm sayfa yerleşim algoritmaları içerisinde en düşük sayfa hatasına sahip algoritma hangisidir?",
    options: [
      "FIFO Algoritması",
      "Optimal Algoritması",
      "DGS Algoritması",
      "LRU Algoritması",
      "LIFO Algoritması",
    ],
    correctAnswer: "Optimal Algoritması",
  },
  {
    id: 39,
    questionText:
      "Sayfa yerleşim algoritmaları için aşağıdaki ifadelerden hangisi hatalıdır?",
    options: [
      "LRU algoritması FIFO ile optimal algoritması arasında bir performansa sahiptir",
      "En az sayfa hatasına optimal algoritması sahiptir",
      "Optimal algoritması en uzun süre kullanılmayan sayfayı kurban olarak seçer",
      "LIFO Algoritması kuyruk yapısına benzer",
      "FIFO Algoritması en basit yerleştirme algoritmasıdır",
    ],
    correctAnswer: "LIFO Algoritması kuyruk yapısına benzer",
  },
  {
    id: 40,
    questionText:
      "Sayfa hatası (page fault) için aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Sayfa hatası sıklığında önemli olan trashing'i önlemektir",
      "Sayfa isteği oranı çok küçükse işlemin fazla çerçevesi var demektir",
      "Sayfa isteği oranı büyükse işlemler daha fazla çerçeveye ihtiyaç duyuyor demektir",
      "Sayfa isteği oranı alt sınırın altına düşerse işleme çerçeve eklenir",
      "Sayfa isteği oranı kontrol edilmelidir",
    ],
    correctAnswer:
      "Sayfa isteği oranı alt sınırın altına düşerse işleme çerçeve eklenir",
  },
  {
    id: 41,
    questionText: "Disklerin dakikadaki dönüş sayısına ne ad verilir?",
    options: ["RPM", "RDM", "NFS", "CLV", "CAV"],
    correctAnswer: "RPM",
  },
  {
    id: 42,
    questionText: "Aşağıdakilerden hangisi yanlıştır?",
    options: [
      "En dış bölgedeki izler tipik olarak en iç bölgedeki izlerden %40 daha fazla sektör tutar",
      "Bir parça ne kadar uzak olursa, diskin ortasından uzaklaştıkça uzunluğu o kadar artar",
      "Dış bölgelerden iç bölgelere doğru hareket ettikçe, iz başına düşen sektör sayısı azalır",
      "Disk teknolojisi geliştikçe parça başına düşen sektör sayısı artmaktadır",
      "Sabit doğrusal hız kullanan ortamlarda, iz başına bitlerin yoğunluğu değişebilir",
    ],
    correctAnswer:
      "Sabit doğrusal hız kullanan ortamlarda, iz başına bitlerin yoğunluğu değişebilir",
  },
  {
    id: 43,
    questionText:
      "Disk zamanlama algoritmaları ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "SCAN ve C-SCAN, diske ağır yük yükleyen sistemler için daha iyi performans gösterir",
      "SSTF FCFS'ye göre performansı arttırmaz",
      "Herhangi bir zamanlama algoritmasında performans, büyük ölçüde isteklerin sayısına ve türüne bağlıdır",
      "Herhangi bir istek listesi için optimal bir alım sırası belirleyebiliriz",
      "Optimal bir program bulmak için gereken hesaplama SSTF veya SCAN üzerindeki tasarrufları haklı göstermeyebilir",
    ],
    correctAnswer: "SSTF FCFS'ye göre performansı arttırmaz",
  },
  {
    id: 44,
    questionText:
      "Disk yönetiminde bir diskin veri depolayabilmesi için, disk denetleyicisinin okuyabileceği ve yazabileceği sektörlere bölünmesi gerekir. Bu işleme ne ad verilir?",
    options: [
      "Düşük düzey biçimlendirme",
      "Düşük seviyeli formatlama",
      "Disk denetleyicisi",
      "Sektör numarası",
      "Disk yönetimi",
    ],
    correctAnswer: "Düşük düzey biçimlendirme",
  },
  {
    id: 45,
    questionText:
      "Bir sektör için veri yapısı aşağıdakilerden hangisinden oluşur?",
    options: [
      "Veri yapısı ve başlık",
      "Römork ve başlık",
      "Başlık, veri alanı ve römork",
      "Başlık ve veri yapısı",
      "Veri alanı ve başlık",
    ],
    correctAnswer: "Başlık, veri alanı ve römork",
  },
  {
    id: 46,
    questionText:
      "Bir disk sistemindeki paralellik, şeritleme yoluyla elde edildiği gibi iki ana amacı vardır. Aşağıdakilerden hangisi bu amaçlardandır?",
    options: [
      "Yük dengeleme ile çok sayıda küçük erişimin (sayfa erişimlerinin) verimini artırmak",
      "Büyük erişimlerin tepki süresini artırmak",
      "Sayfa erişimlerinin verimini azaltmak",
      "Küçük erişimlerin verimini azaltmak",
      "Küçük erişimlerin tepki süresini artırmak",
    ],
    correctAnswer:
      "Yük dengeleme ile çok sayıda küçük erişimin (sayfa erişimlerinin) verimini artırmak",
  },
  {
    id: 47,
    questionText:
      "RAID seviyeleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "RAID 5 seviyesi, blok seviyesinde şeritleme yapan ancak herhangi bir fazlalık bulunmayan disk dizilerini ifade eder",
      "RAID 1 seviyesi, disk yansıtmayı ifade eder",
      "RAID 2 seviyesi, bellek stili hata düzeltme kodu (ECC) organizasyonu olarak da bilinir",
      "RAID 3 seviyesi, seviye 2'yi geliştiren bir yapıdır",
      "RAID 5 en yaygın RAID sistemidir",
    ],
    correctAnswer:
      "RAID 5 seviyesi, blok seviyesinde şeritleme yapan ancak herhangi bir fazlalık bulunmayan disk dizilerini ifade eder",
  },
  {
    id: 48,
    questionText:
      "RAID seviye seçimi ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "RAID 2'nin yüksek alan ek yükü nedeniyle, RAID 5 genellikle büyük hacimli verilerin depolanması için tercih edilir",
      "Seviye 6 şu anda birçok RAID uygulaması tarafından desteklenmemektedir",
      "RAID 6 seviye 5'ten daha iyi güvenilirlik sunmaktadır",
      "Büyük disk setlerinin RAID 5'leri için zaman çizelgesi oluşturabilir",
      "Veriler başka bir diskten kopyalanabildiği için, yeniden oluşturma RAID seviye 1 için en kolaydır",
    ],
    correctAnswer:
      "RAID 2'nin yüksek alan ek yükü nedeniyle, RAID 5 genellikle büyük hacimli verilerin depolanması için tercih edilir",
  },
  {
    id: 49,
    questionText: "ZFS ile ilgili verilen bilgilerden hangisi yanlıştır?",
    options: [
      "Her bir sistem için depolama alanını tahsis etmek ve serbest bırakmak için malloc() ve free() bellek modelini kullanamaz",
      "ZFS, bir sistemin boyutunu sınırlamak için kotalar sağlar",
      "Bir sistemin belirli bir miktarda büyümesini sağlamak için çekinceleri tutar",
      "Sistem yönetimi ve birim yönetimini tek bir ünitede birleştirir",
      "ZFS'nin genel performansı çok hızlıdır",
    ],
    correctAnswer:
      "Her bir sistem için depolama alanını tahsis etmek ve serbest bırakmak için malloc() ve free() bellek modelini kullanamaz",
  },
  {
    id: 50,
    questionText: "WAFL hangi RAID seviyesinde kullanılır?",
    options: [
      "RAID seviye 1",
      "RAID seviye 3",
      "RAID seviye 2",
      "RAID seviye 4",
      "RAID seviye 0",
    ],
    correctAnswer: "RAID seviye 4",
  },
  {
    id: 51,
    questionText:
      "Aşağıdakilerden hangisi dosya dizin yapısının amaçlarından değildir?",
    options: [
      "Dosya sistemlerinin işlevini açıklamak",
      "Dosya sistemlerine arayüzleri tanımlamak",
      "Erişim yöntemleri, dosya paylaşımı, dosya kilitleme ve dizin yapıları dahil olmak üzere dosya sistemi tasarım değişimlerinin tartışılması",
      "Dosya sistemi korumasını keşfetmek",
      "Komplex dosya sistemleri oluşturmak",
    ],
    correctAnswer: "Komplex dosya sistemleri oluşturmak",
  },
  {
    id: 52,
    questionText: "Disk yapısı ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Disk alt bölümlere ayrılamaz",
      "Disk ve bölüm işlenmemiş olarak yani dosya sistemi olmadan veya dosya sistemiyle biçimlendirilmiş olarak kullanılabilir",
      "Bölümler minidisk ve dilimler olarak bilinirler",
      "Dosya sistemlerini içeren oluşumlar birim olarak bilinir",
      "Dosya sistemini içeren her birim aynı zamanda o dosya sisteminin bilgisini aygıt dizininde veya içeriklerin birim tablosundan takip eder",
    ],
    correctAnswer: "Disk alt bölümlere ayrılamaz",
  },
  {
    id: 53,
    questionText: "Aşağıdakilerden hangisi dosya işlemlerinden biri değildir?",
    options: [
      "Yaz",
      "Oku",
      "Yazma ve okuma noktasını değiştir",
      "Sil",
      "Boyutlandır",
    ],
    correctAnswer: "Boyutlandır",
  },
  {
    id: 54,
    questionText: "Aşağıdaki dosya türü eşleştirmelerinden hangisi yanlıştır?",
    options: [
      "Executable – exe, com, bin",
      "Object – obj, o",
      "Text – txt, doc",
      "Library – arc, zip, tar",
      "Multimedia – mpeg, mov, rm",
    ],
    correctAnswer: "Library – arc, zip, tar",
  },
  {
    id: 55,
    questionText: "Dosya paylaşımı ile ilgili hangisi yanlıştır?",
    options: [
      "Çok kullanıcılı sistemlerde dosya paylaşımı yapmak istenir",
      "Paylaşım bir koruma planı ile yapılabilir",
      "Dosya paylaşımına izin verilmez",
      "Dağıtık sistemler üzerinde dosyaları bir ağ üzerinden paylaşılabilir",
      "Ağ Dosya Sistemi (NFS) ortak dağıtılan dosya paylaşım yöntemidir",
    ],
    correctAnswer: "Dosya paylaşımına izin verilmez",
  },
  {
    id: 56,
    questionText: "Aşağıdakilerden hangisi sıralı erişime örnektir?",
    options: ["read n", "read next", "write n", "position to n", "rewrite n"],
    correctAnswer: "read next",
  },
  {
    id: 57,
    questionText:
      "Aşağıdakilerden hangisi aygıt dizinindeki bilgilerden değildir?",
    options: [
      "Şuandaki uzunluğu",
      "Maksimum uzunluğu",
      "Son erişilen tarihi",
      "Tüm erişilme tarihleri",
      "Sahibi ID",
    ],
    correctAnswer: "Tüm erişilme tarihleri",
  },
  {
    id: 58,
    questionText: "Uzak dosya sistemleri ile ilgili hangisi yanlıştır?",
    options: [
      "İstemci – Sunucu modeli istemcilerin sunuculardan uzak dosya sistemlerini kurmalarını sağlar",
      "Sunucu tek bir istemciye hizmet sağlayabilir",
      "NFS Standart UNIX istemci – sunucu dosya paylaşım protokolüdür",
      "CIFS standart Windows protokolüdür",
      "Standart işletim sistemi dosya çağrıları uzak çağrılara dönüştürülür",
    ],
    correctAnswer: "Sunucu tek bir istemciye hizmet sağlayabilir",
  },
  {
    id: 59,
    questionText:
      "Aşağıdakilerden hangisi korumalı erişim türlerinden değildir?",
    options: ["Okumak", "Yazmak", "Çoğaltmak", "Eklemek", "Silmek"],
    correctAnswer: "Çoğaltmak",
  },
  {
    id: 60,
    questionText: "Aşağıdakilerden hangisi doğrudan erişime örnektir?",
    options: [
      "read next",
      "write next",
      "reset",
      "no read after last write",
      "rewrite n",
    ],
    correctAnswer: "rewrite n",
  },
  {
    id: 61,
    questionText:
      "Aşağıdakilerden hangisinde PC'lerde 'interrupt controller' bağlantı noktası konumudur?",
    options: ["000-00F", "020-021", "040-043", "200-20F", "320-32F"],
    correctAnswer: "020-021",
  },
  {
    id: 62,
    questionText:
      "Bellek ile diğer aygıtlar arasındaki veri iletişimi için kullanılan, bu veri iletişimini sağlarken merkezi işlem birimini kısmen devre dışı bırakarak veri akışını hızlandıran yapı hangisidir?",
    options: [
      "SCSI",
      "PCI",
      "BUS",
      "DMA (Direct Access Memory)",
      "IDE Controller",
    ],
    correctAnswer: "DMA (Direct Access Memory)",
  },
  {
    id: 63,
    questionText:
      "Aşağıdakilerden hangisi işletim sisteminin temel katmanları arasında gösterilemez?",
    options: [
      "Kullanıcı",
      "Kabuk (Shell)",
      "Çekirdek",
      "Sistem Çağrıları",
      "PCI Bus",
    ],
    correctAnswer: "PCI Bus",
  },
  {
    id: 64,
    questionText:
      "Aşağıdaki işletim sistemi katmanlarından hangisi kullanıcıya en yakındır?",
    options: [
      "Çekirdek",
      "Sistem Çağrıları",
      "Kabuk",
      "Sistem Kütüphanesi",
      "Hiçbiri",
    ],
    correctAnswer: "Kabuk",
  },
  {
    id: 65,
    questionText:
      "Herhangi bir hafıza alanında geçici bir kayıt alanıdır. Verilerin I/O işlemlerinden sonra belleğe yazılmadan önce uğranılan bir saha olarak tanımlanabilir. Bu tanım hangisidir?",
    options: ["Buffer", "RAM", "ROM", "HDD", "CMOS"],
    correctAnswer: "Buffer",
  },
  {
    id: 66,
    questionText:
      "Small Computer System Interface'in (Küçük Bilgisayar Sistem Arabirimi) kısaltmasıdır. Unix sistemler tarafından çevre birimlerini sisteme bağlamak için kullanılan bir paralel arabirim standardıdır. Bu tanım hangisidir?",
    options: ["PCI", "SCSI", "AGP", "PCI-Express", "Hiçbiri"],
    correctAnswer: "SCSI",
  },
  {
    id: 67,
    questionText:
      "İşletim sistemleri teorisinde sık kullanılan zamanlama kavramları vardır. Aşağıdakilerden hangisi bunlar arasında gösterilemez?",
    options: [
      "Bekleme zamanı (waiting time)",
      "Dönüş süresi (turnaround time)",
      "İş üretimi (throughput)",
      "Cevap süresi (response time)",
      "Kesme zamanı (Interrupt time)",
    ],
    correctAnswer: "Kesme zamanı (Interrupt time)",
  },
  {
    id: 68,
    questionText:
      "Bir sistem çağrısının çoklu konumlar içeren çoklu I/O işlemleri gerçekleştirmesini sağlar. Tanımı yapılan I/O türü hangisidir?",
    options: [
      "Blokajlı I/O",
      "Vektörlü I/O",
      "Blokajsız I/O",
      "Senkron I/O",
      "Asenkron I/O",
    ],
    correctAnswer: "Vektörlü I/O",
  },
  {
    id: 69,
    questionText:
      "UNIX işletim sisteminde ek bir tamsayı değişkeni bir hata kodu döndürmek için kullanılır. Bu hata kodu hangisidir?",
    options: ["readve", "errno", "select", "read", "write"],
    correctAnswer: "errno",
  },
  {
    id: 70,
    questionText:
      "Unix sistemlerde bir uygulamanın sürücü kodunu boru hatlarına dinamik olarak monte etmeyi sağlayan mekanizma hangisidir?",
    options: ["streams", "caching", "spooling", "reservation", "Hiçbiri"],
    correctAnswer: "streams",
  },
  {
    id: 71,
    questionText:
      "Aşağıdaki ifadelerden hangileri koruma hedefleri arasında yer alır?\nI. Modern bir bilgisayar sisteminde korumanın amaçlarını ve ilkelerini tartışmak.\nII. Yetenek tabanlı koruma sistemlerini incelemek.\nIII. Dil tabanlı koruma sistemlerini incelemek.",
    options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "I-II-III"],
    correctAnswer: "I-II-III",
  },
  {
    id: 72,
    questionText:
      "Yetkili ve yetkisiz kullanım arasındaki ayrımı hangi odaklı bir sistem sağlar?",
    options: [
      "Koruma Odaklı",
      "Karşılaştırma Odaklı",
      "Araştırma Odaklı",
      "Küresel Odaklı",
      "Alan Odaklı",
    ],
    correctAnswer: "Koruma Odaklı",
  },
  {
    id: 73,
    questionText:
      "Aşağıdaki yöntemlerden hangisi Erişim matrisini etkili bir şekilde uygulamak için gerekli değildir?",
    options: [
      "Küresel tablo",
      "Karşılaştırma",
      "A kilit anahtar mekanizması",
      "Alan adları için yetenek listeleri",
      "Nesneler arası iletişim",
    ],
    correctAnswer: "Nesneler arası iletişim",
  },
  {
    id: 74,
    questionText:
      "Aşağıdakilerden hangisi işletim sistemlerinin koruma prensiplerinden biri değildir?",
    options: [
      "İşletim sistemleri girişlerinin kullanıcı adı ve parola ile korunması",
      "Kablolu internet yerine kablosuz internet kullanılması",
      "Harici aygıtların gerekli olmadıkça kullanılmaması",
      "Sistem yamalarının ve bütününün güncel tutulması",
      "İşletim sistemi için güvenlik duvarının açık tutulması",
    ],
    correctAnswer: "Kablolu internet yerine kablosuz internet kullanılması",
  },
  {
    id: 75,
    questionText: "Gizli dosyaların görüntülenmesi nereden gerçekleştirilir?",
    options: [
      "Konum/Gizli dosyaları göster",
      "Düzen/Gizli dosyaları göster",
      "Görünüm/Gizli dosyaları göster",
      "Git/Gizli dosyaları göster",
    ],
    correctAnswer: "Görünüm/Gizli dosyaları göster",
  },
  {
    id: 76,
    questionText:
      "Şifreleme ve dosya izin hakları veren dosya sistemi hangisidir?",
    options: ["exFAT", "NTFS", "FAT16", "FAT32", "NEFT"],
    correctAnswer: "NTFS",
  },
  {
    id: 77,
    questionText:
      "MS-DOS işletim sistemi için aşağıdakilerden hangisi söylenemez?",
    options: [
      "MS-DOS disk işletim sistemidir",
      "DOS, tüm x86 tabanlı PC'lerde çalışır",
      "Grafik kullanıcı arabirimini kullanmaz",
      "Çok görevli bir işletim sistemidir",
      "MS-DOS komut sistemi ile çalışır",
    ],
    correctAnswer: "Çok görevli bir işletim sistemidir",
  },
  {
    id: 78,
    questionText: "Aşağıda yapılan eşleştirmelerden hangisi yanlıştır?",
    options: [
      "Windows 3.1 > grafik kullanıcı arabirimli bir işletim sistemidir",
      "Lovell Netwarev > Birden çok bilgisayarın bir ağ oluşturmasını sağlar",
      "Unix > çok kullanıcılı ve çok görevli bir işletim sistemidir",
      "Linux > Grafik ara yüzü olan ilk işletim sistemidir",
      "LILO > bilgisayarın Windows ve Linux ile birlikte dönüşümlü olarak açılabilmesini sağlayan bir mekanizması vardır",
    ],
    correctAnswer: "Linux > Grafik ara yüzü olan ilk işletim sistemidir",
  },
  {
    id: 79,
    questionText:
      "Erişim haklarını iptal etmek gerektiğinde aşağıdaki sorulardan hangileri sorulur?\nI. Hemen karşı gecikmeli  II. Kısmi Toplam  III. Yeniden kazanma  IV. Seçmeli ve genel  V. Dolaylı Aktarım",
    options: ["I-II", "I-II-III", "I-IV-V", "I-II-III-V", "Hepsi"],
    correctAnswer: "Hepsi",
  },
  {
    id: 80,
    questionText:
      "Bir derleyici tarafından, yalnızca bir çekirdeğe dayanan uygulamanın göreceli değerleri hangilerdir?\nI. Güvenlik  II. Esneklik  III. Verimlilik",
    options: ["Yalnız I", "Yalnız II", "Yalnız III", "I-III", "I-II-III"],
    correctAnswer: "I-II-III",
  },
  {
    id: 81,
    questionText:
      '"Sistemin yasal olarak kullanılmasının engellenmesidir." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "Gizlilik ihlali",
      "Bütünlük ihlali",
      "Bulunabilirlik ihlali",
      "Servis Hırsızlığı",
      "Hizmet Reddi (DOS)",
    ],
    correctAnswer: "Hizmet Reddi (DOS)",
  },
  {
    id: 82,
    questionText:
      '"Verilerin yetkisiz kişiler tarafından okunmasını veya çalınmasını ifade eder." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "Gizlilik ihlali",
      "Bütünlük ihlali",
      "Bulunabilirlik ihlali",
      "Servis Hırsızlığı",
      "Hizmet Reddi",
    ],
    correctAnswer: "Gizlilik ihlali",
  },
  {
    id: 83,
    questionText:
      '"Verilerin veya kaynak kodların yetkisiz kişiler tarafından değiştirilmesidir." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "Gizlilik ihlali",
      "Bütünlük ihlali",
      "Bulunabilirlik ihlali",
      "Servis Hırsızlığı",
      "Hizmet Reddi",
    ],
    correctAnswer: "Bütünlük ihlali",
  },
  {
    id: 84,
    questionText:
      '"Verilerin yetkisiz kişiler tarafından tahrip edilmesidir (Web site saldırıları vs)." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "Gizlilik ihlali",
      "Bütünlük ihlali",
      "Bulunabilirlik ihlali",
      "Servis Hırsızlığı",
      "Hizmet Reddi",
    ],
    correctAnswer: "Bulunabilirlik ihlali",
  },
  {
    id: 85,
    questionText:
      '"Kaynakların izinsiz kullanılmasıdır." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "Gizlilik ihlali",
      "Bütünlük ihlali",
      "Bulunabilirlik ihlali",
      "Servis Hırsızlığı",
      "Hizmet Reddi",
    ],
    correctAnswer: "Servis Hırsızlığı",
  },
  {
    id: 86,
    questionText:
      "Bir sistemi korumak için dört seviyede güvenlik tedbiri alınmalıdır. Aşağıdakilerden hangisi bu seviyelerden birisi değildir?",
    options: ["Fiziksel", "İnsan", "İşletim Sistemi", "Ağ", "Hiçbiri"],
    correctAnswer: "Hiçbiri",
  },
  {
    id: 87,
    questionText:
      '"Genellikle ücretsiz yazılımlarla birlikte sisteme yüklenen, tarayıcıda reklam sekmesi açan veya belirli siteler ziyaret edildiğinde açılır tarayıcı penceresi oluşturan ve bir programı bire bir taklit eden yazılımlar" olarak ifade edilen program tehdidi hangisidir?',
    options: [
      "Truva Atı",
      "Tuzak Kapıları",
      "Solucan",
      "Mantık Bombası",
      "Virüsler",
    ],
    correctAnswer: "Truva Atı",
  },
  {
    id: 88,
    questionText:
      '"Tespiti zordur. Programın normal çalışması sırasında güvenlik açığı fark edilememektedir. Ancak önceden belirlenmiş bir dizi parametre kullanımı sonrasında güvenlik açığı oluşur." Yukarıda bilgi verilen program tehdidi hangisidir?',
    options: [
      "Truva Atı",
      "Tuzak Kapıları",
      "Solucan",
      "Mantık Bombası",
      "Virüsler",
    ],
    correctAnswer: "Mantık Bombası",
  },
  {
    id: 89,
    questionText:
      "\"Bir programa gömülü zararlı kod parçasıdır. Kendi kendini kopyalamak ve diğer programlara 'bulaşmak' için tasarlanmıştır. Dosyaları değiştirerek veya tahrip ederek, sistem çökmelerine ve program arızalarına neden olarak sisteme zarar verebilirler.\" Bu program tehdidi hangisidir?",
    options: [
      "Truva Atı",
      "Tuzak Kapıları",
      "Solucan",
      "Mantık Bombası",
      "Virüsler",
    ],
    correctAnswer: "Virüsler",
  },
  {
    id: 90,
    questionText:
      '"Kendisini çoğaltmak için spawn mekanizmasını kullanan bir işlemdir. Sistem kaynaklarını kullanan ve tüm diğer işlemleri kilitleyen, kendi kopyalarını çıkaran zararlı yazılımlardır. Bilgisayar ağlarında özellikle güçlüdür." Bu program tehdidi hangisidir?',
    options: [
      "Truva Atı",
      "Tuzak Kapıları",
      "Solucan",
      "Mantık Bombası",
      "Virüsler",
    ],
    correctAnswer: "Solucan",
  },
  {
    id: 91,
    questionText:
      "Bir sanal makine ………, ………… veya ………… ile uygulanabilir. Cümlesindeki boş yerlere ne gelmelidir?",
    options: [
      "Yazılım, donanım veya bir kombinasyon",
      "Kurulum, yapılandırma, doğrudan indirme bağlantısı",
      "Araştırma, yürütülebilir dosya, disk",
      "Sanal makine uygulaması, işletim sistemi dosyası, fiziksel bilgisayar",
      "Windows, Linux, Unix",
    ],
    correctAnswer: "Yazılım, donanım veya bir kombinasyon",
  },
  {
    id: 92,
    questionText:
      "Aşağıdakilerden hangisi sanallaştırmanın türleri arasında yer almaz?",
    options: [
      "Masaüstü Sanallaştırma",
      "Uygulama Sanallaştırması",
      "Depolama Sanallaştırma",
      "İşlemci Sanallaştırma",
      "Ağ Sanallaştırması",
    ],
    correctAnswer: "İşlemci Sanallaştırma",
  },
  {
    id: 93,
    questionText:
      "Aşağıdakilerden hangisi sanallaştırmanın temel faydalarından değildir?",
    options: [
      "Fiziksel kısıtlamaların ortadan kalkması",
      "Tek bir merkezden pek çok sunucunun yönetilebilmesi sayesinde yönetimsel yükün minimuma indirilmesi",
      "Alt yapı maliyetlerinin büyük oranla aşağı çekilmesi",
      "Yeni sunucuların kullanıma sokulması işleminin fiziksel sunuculara oranla oldukça kısa sürmesi",
      "Aynı makine üzerinde hem Windows hem de Android tabanlı işletim sistemlerini çalıştırabilme",
    ],
    correctAnswer:
      "Aynı makine üzerinde hem Windows hem de Android tabanlı işletim sistemlerini çalıştırabilme",
  },
  {
    id: 94,
    questionText:
      "Sunucu sanallaştırma teknolojileri alanında kurumsal sanallaştırma çözümleri sunan yazılımlardan değildir?",
    options: [
      "VirtualServerX",
      "Microsoft Hyper-V",
      "ESXServer",
      "Xen",
      "VirtualPC",
    ],
    correctAnswer: "VirtualServerX",
  },
  {
    id: 95,
    questionText:
      '"Sanallaştırma; sahip olduğumuz fiziksel donanımı, sanal makineler yardımıyla, ………………………. birden fazla sistem veya modül koşturabileceğimiz hâle getirme işidir". Boş olan yere aşağıdakilerden hangisi gelmelidir?',
    options: [
      "Birbirinden bağımsız",
      "Benzer ilişkisi olan",
      "Bir arada tutan",
      "Bir takım sistemleri",
      "Belirli işleri",
    ],
    correctAnswer: "Birbirinden bağımsız",
  },
  {
    id: 96,
    questionText:
      "Aşağıdakilerden hangisi sanallaştırmanın faydaları arasında yer almaz?",
    options: [
      "Veri merkezinde ihtiyaç duyulan fiziksel ekipmanların sayısını azaltır",
      "Yüksek oranda konsolidasyon yapılabilmesi veri merkezinin daha çevreci olmasını sağlar",
      "İhtiyaç halinde çok hızlı şekilde sunucu ve depolama kaynağı oluşturulmasına imkan sağlar",
      "Donanım maliyetlerini önemli oranda artmasını sağlar",
      "Sistem kaynaklarının yüksek verimlilikle kullanılmasını sağlar",
    ],
    correctAnswer: "Donanım maliyetlerini önemli oranda artmasını sağlar",
  },
  {
    id: 97,
    questionText:
      "Aşağıdakilerden hangisi ya da hangileri sanallaştırma sistemlerinden birisidir?\nI. VMWARE  II. HYPER-V  III. CITRIX XENSERVER",
    options: ["Yalnız I", "Yalnız II", "I ve II", "II ve III", "I, II ve III"],
    correctAnswer: "I, II ve III",
  },
  {
    id: 98,
    questionText:
      "Sanallaştırma fiziksel yapının (Donanım) mantıksal hale getirilmesidir. Bu işlem için 4 temel donanım sanallaştırılmaktadır. Aşağıdakilerden hangisi bu 4 donanımdan birisi değildir?",
    options: ["CPU", "RAM", "HDD", "NIC", "E-USB"],
    correctAnswer: "E-USB",
  },
  {
    id: 99,
    questionText:
      "Bazı bilgisayar sistemlerinde yedekleri test etmek için kullandığınız bir kurtarma servisi yedeği vardır. Test yedekleri iki korumalı sanal makine içermektedir. Kurtarma hizmetleri yedeğini silmeniz istenirse ilk önce ne yapılmalıdır?",
    options: [
      "Kurtarma Hizmeti yedeğinde, her yedekleme öğesinin yedeklemesini durdurulur",
      "Kurtarma Servisi yedeğinden yedek verileri silinir",
      "Her sanal makinenin olağanüstü durum kurtarma özelliklerini değiştirilir",
      "Her sanal makinenin şifreleri değiştirilir",
      "Hiçbir şey yapmaya gerek yoktur",
    ],
    correctAnswer:
      "Kurtarma Hizmeti yedeğinde, her yedekleme öğesinin yedeklemesini durdurulur",
  },
  {
    id: 100,
    questionText:
      "Aşağıdakilerden hangisi sanal makine uygulamaları içinde yer almamaktadır?",
    options: [
      "Sanal Makine Yaşam Döngüsü",
      "Tip 0 Hiper Yönetici",
      "Tip 1 Hiper Yönetici",
      "Tip 2 Hiper Yönetici",
      "Tip 3 Hiper Yönetici",
    ],
    correctAnswer: "Tip 3 Hiper Yönetici",
  },
  {
    id: 101,
    questionText:
      '"Dağıtık bir sistem heterojen bilgisayarları ve ağları desteklemek için mantıksal olarak yüksek-seviyeli katmanlarla daha düşük katmanlar arasında bir yazılımsal katmanı önermektedirler." Tanımı verilen kavram hangisidir?',
    options: ["Software", "Sunucu", "İstemci", "MiddleWare", "Site"],
    correctAnswer: "Software",
  },
  {
    id: 102,
    questionText:
      "Aşağıdakilerden hangisi dağıtık sistemlerin avantajlarından değildir?",
    options: [
      "Kaynak Paylaşımı",
      "İletişim",
      "Hesaplama Hızı",
      "Göç",
      "Güvenilirlik",
    ],
    correctAnswer: "Göç",
  },
  {
    id: 103,
    questionText:
      "Aşağıdakilerden hangisi dağıtık sistem kapsamında yer almaz?",
    options: [
      "İnternet",
      "Sunucu",
      "İntranet",
      "Kablosuz Ağlar",
      "Uydu Bağlantısı",
    ],
    correctAnswer: "Sunucu",
  },
  {
    id: 104,
    questionText:
      "Dağıtık sistemlerde işlem geçişi yapılırken hangisi göz önünde bulundurulmaz?",
    options: [
      "Donanım Tercihi",
      "Yazılım Tercihi",
      "Veri Göçü",
      "Yük Dengeleme",
      "Hesaplama Hızlandırması",
    ],
    correctAnswer: "Veri Göçü",
  },
  {
    id: 105,
    questionText:
      "Aşağıdakilerden hangisi iletişim yapısının ele aldığı konulardan değildir?",
    options: [
      "Adlandırma ve ad çözümlemesi",
      "Yönlendirme stratejileri",
      "Bağlantı stratejileri",
      "Çekişme",
      "Hesaplama Hızlandırması",
    ],
    correctAnswer: "Hesaplama Hızlandırması",
  },
  {
    id: 106,
    questionText:
      "Aşağıdakilerden hangisi yönlendirme stratejilerinden değildir?",
    options: ["Sabit", "Sanal", "Tradeoff", "Dinamik", "OpenFlow"],
    correctAnswer: "Tradeoff",
  },
  {
    id: 107,
    questionText: "Aşağıdakilerden hangisi tasarım sorunlarından değildir?",
    options: [
      "Şeffaflık",
      "Güvenilirlik",
      "Hata toleransı",
      "Ölçeklenebilirlik",
      "Hadoop",
    ],
    correctAnswer: "Güvenilirlik",
  },
  {
    id: 108,
    questionText:
      "Aşağıdakilerden hangisi sistemdeki güvenlik mekanizmalarından değildir?",
    options: [
      "Şifreleme",
      "Doğrulama",
      "Yetkilendirme",
      "Reddedilme",
      "Ulaşılabilirlik",
    ],
    correctAnswer: "Reddedilme",
  },
  {
    id: 109,
    questionText:
      "Blowfish, RSA sistem güvenlik mekanizmalarından hangisini kullanır?",
    options: [
      "Encryption",
      "Authentication",
      "Authorization",
      "Availability",
      "Inability rejected",
    ],
    correctAnswer: "Encryption",
  },
  {
    id: 110,
    questionText:
      '"Düzenli aralıklarla önbellek tara ve son taramadan bu yana değiştirilmiş blokların temizlenme işidir." Tanımı verilen kavram hangisidir?',
    options: ["Hadoop", "OpenFlow", "Cleaner", "MiddleWare", "Varyasyon"],
    correctAnswer: "Varyasyon",
  },
  {
    id: 111,
    questionText:
      "Aşağıdaki işletim sistemi katmanlarından hangisi donanıma en yakındır?",
    options: [
      "Çekirdek",
      "Sistem Çağrıları",
      "Kabuk",
      "Uygulamalar",
      "Kullanıcı",
    ],
    correctAnswer: "Çekirdek",
  },
  {
    id: 112,
    questionText:
      "İşletim sistemi katmanları için en alttan üste doğru düşünürsek aşağıdakilerden hangisi doğrudur?",
    options: [
      "Donanım – Çekirdek – Sistem Çağrıları – Kabuk – Kullanıcı",
      "Donanım – Sistem Çağrıları – Çekirdek – Kabuk – Kullanıcı",
      "Donanım – Kabuk – Çekirdek – Sistem Çağrıları – Kullanıcı",
      "Donanım – Kabuk – Sistem Çağrıları – Çekirdek – Kullanıcı",
      "Donanım – Çekirdek – Kabuk – Sistem Çağrıları – Kullanıcı",
    ],
    correctAnswer: "Donanım – Çekirdek – Sistem Çağrıları – Kabuk – Kullanıcı",
  },
  {
    id: 113,
    questionText: 'Linux dosya sisteminde "inode" neyi temsil eder?',
    options: [
      "Açık dosyayı temsil eder",
      "Süper bloğu temsil eder",
      "Bir dizini temsil eder",
      "Yalnızca bir bloğu temsil eder",
      "Bir dosyayı temsil eder",
    ],
    correctAnswer: "Bir dosyayı temsil eder",
  },
  {
    id: 114,
    questionText:
      'Linux dosya sisteminde "süper blok" nesnesi neyi temsil eder?',
    options: [
      "Bir Dosyayı temsil eder",
      "Bütün bir dosya sistemini temsil eder",
      "Bir dizini temsil eder",
      "Açık Bir Dosyayı temsil eder",
      "Yalnızca gizli bir dosyayı temsil eder",
    ],
    correctAnswer: "Bütün bir dosya sistemini temsil eder",
  },
  {
    id: 115,
    questionText:
      'Linux dosya sistemi işlemlerinden "open(…)" komutu nasıl bir işlem gerçekleştirir?',
    options: [
      "Bir dosyayı açar",
      "Bir dosyayı okur",
      "Dosyaya yazma işlemi yapar",
      "Bir dosyayı belleğe alır",
      "Bir dosyayı siler",
    ],
    correctAnswer: "Bir dosyayı açar",
  },
  {
    id: 116,
    questionText:
      'Linux dosya sistemi işlemlerinden "mmap(…)" komutu nasıl bir işlem gerçekleştirir?',
    options: [
      "Bir dosyayı açar",
      "Bir dosyayı okur",
      "Dosyaya yazma işlemi yapar",
      "Bir dosyayı belleğe alır",
      "Bir dosyayı siler",
    ],
    correctAnswer: "Bir dosyayı belleğe alır",
  },
  {
    id: 117,
    questionText:
      "Buddy sisteminde bellek ideal yer tahsisi yapmak için bellek her seferinde hangi oranlarla bölünür?",
    options: [
      "Her seferinde %10 - %90 olarak iki parçaya bölünür",
      "Her seferinde %30 - %70 olarak iki parçaya bölünür",
      "Her seferinde %50 - %50 olarak iki parçaya bölünür",
      "Her seferinde %40 - %60 olarak iki parçaya bölünür",
      "Her seferinde %80 - %20 olarak iki parçaya bölünür",
    ],
    correctAnswer: "Her seferinde %50 - %50 olarak iki parçaya bölünür",
  },
  {
    id: 118,
    questionText:
      "Aşağıdakilerden hangisi bir process (süreç) özelliklerinden değildir?",
    options: [
      "Process ID",
      "Credentials (Kimlik Bilgisi)",
      "Personality (Kişilik)",
      "Namespace",
      "Parent memory",
    ],
    correctAnswer: "Parent memory",
  },
  {
    id: 119,
    questionText:
      "Kendi kimliği ile yeni bir thread oluşmasını sağlayan sistem çağrısı hangisidir?",
    options: ["Fork()", "Open()", "Delete()", "Clone()", "Close()"],
    correctAnswer: "Clone()",
  },
  {
    id: 120,
    questionText:
      "Yeni bir kimlikle yeni bir thread oluşmasını sağlayan sistem çağrısı hangisidir?",
    options: ["Fork()", "Open()", "Delete()", "Clone()", "Close()"],
    correctAnswer: "Fork()",
  },
  {
    id: 121,
    questionText:
      "Aşağıdakilerden hangisi Windows 7 tasarım ilkelerinden değildir?",
    options: [
      "basitlik",
      "güvenlik",
      "güvenilirlik",
      "yüksek performans",
      "taşınabilirlik",
    ],
    correctAnswer: "basitlik",
  },
  {
    id: 122,
    questionText:
      "Win32'de zamanlama dört öncelik sınıfından yararlanır. Aşağıdakilerden hangisi Win32 öncelik sınıfı değildir?",
    options: [
      "IDLE_PRIORITY_CLASS",
      "LOW_PRIORITY_CLASS",
      "NORMAL_PRIORITY_CLASS",
      "HIGH_PRIORITY_CLASS",
      "REALTIME_PRIORITY_CLASS",
    ],
    correctAnswer: "LOW_PRIORITY_CLASS",
  },
  {
    id: 123,
    questionText:
      "Windows NT 4.0 ile çekirdeğe taşınan ………………………… implementasyonu Windows Vista ile tekrar user mode tarafına alınmaya başlamıştır. Boşluğa gelecek olan kavramı seçiniz.",
    options: ["POSIX", "WIN32", "DWM", "ActiveDirectory", "GUI"],
    correctAnswer: "GUI",
  },
  {
    id: 124,
    questionText:
      "Windows mimarisi katmanlı sistem modüllerinden oluşur. Aşağıdakilerden hangisi Windows 7 sistem bileşenlerinden değildir?",
    options: [
      "kernel",
      "kernel dispatcher",
      "gaming manager",
      "object manager",
      "virtual memory manager",
    ],
    correctAnswer: "gaming manager",
  },
  {
    id: 125,
    questionText:
      "NTFS dosya sisteminde her dosyanın tanımlarının tutulduğu tablo hangisidir?",
    options: [
      "Master File Table",
      "Slave File Table",
      "File Table",
      "Original File Table",
      "Sector File Table",
    ],
    correctAnswer: "Master File Table",
  },
  {
    id: 126,
    questionText:
      "Windows 7 hem peer to peer hem de client/server network destekler. Bir oturum katmanı bileşeninin mevcut herhangi bir taşıma mekanizmasını kullanmasını sağlayan aktarım sürücüsü arayüzünün kısaltması nedir?",
    options: ["TSI", "TFSI", "TDI", "CDTI", "HDI"],
    correctAnswer: "TDI",
  },
  {
    id: 127,
    questionText:
      "Aşağıdakilerden hangisi Server Message Block Protocol (SMB) mesaj tiplerinden değildir?",
    options: ["Session control", "File", "Printer", "Message", "Disk"],
    correctAnswer: "Disk",
  },
  {
    id: 128,
    questionText:
      "Bir Windows bilgisayarın donanımına güç verildiğinde ve firmware ROM'u yüklendikten sonra başlayan sürece ne ad verilir?",
    options: ["booting", "BIOS", "UEFI", "start", "hiçbiri"],
    correctAnswer: "booting",
  },
  {
    id: 129,
    questionText:
      "Windows birçok konfigürasyon bilgisini hive (kovan) olarak adlandırılan iç veritabanlarında tutar. Bu anahtar-değer veritabanı yapısının adı nedir?",
    options: ["DBMS", "VTYS", "MySQL", "Registry", "MsSQL"],
    correctAnswer: "Registry",
  },
  {
    id: 130,
    questionText:
      "Windows güç yöneticisi (power manager) bileşeni tarafından bilgisayarın ana belleğindeki verilerin sabit belleğe kaydedilerek sistemin kapatılması işlemine ne ad verilir?",
    options: ["power save", "disk save", "sleep", "wake", "hibernate"],
    correctAnswer: "hibernate",
  },
  {
    id: 131,
    questionText:
      "Atlas'ın en dikkat çekici özelliği ve onu etkin kılan en önemli özelliği ………….dir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: [
      "Bellek Yönetimi",
      "Hızlı olması",
      "Ekonomik olması",
      "Hesaplama Aracı olması",
      "Hiçbiri",
    ],
    correctAnswer: "Bellek Yönetimi",
  },
  {
    id: 132,
    questionText:
      "Atlas işletim sistemi ……kelimelik bir İngiliz bilgisayarı kullandı. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["16 bit", "32 bit", "48 bit", "64 bit", "128 bit"],
    correctAnswer: "48 bit",
  },
  {
    id: 133,
    questionText:
      "XDS-940 işletim sistemi Atlas sisteminin aksine, …………….. bir sistemdir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: [
      "Zaman paylaşımlı",
      "Bellek Paylaşımlı",
      "hız artırımlı",
      "sanal hafızasız",
      "Hiçbiri",
    ],
    correctAnswer: "Zaman paylaşımlı",
  },
  {
    id: 134,
    questionText:
      "XDS-940 Süreç sistemi hangi seçenekte doğru sıralama ile verilmiştir?",
    options: [
      "Alt süreçleri başlat, askıya al ve yok et",
      "Alt süreçleri askıya al, yok et ve başlat",
      "Alt süreçleri yok et, başlat ve askıya al",
      "Alt süreçleri başlat, yok et ve askıya al",
      "Hiçbiri",
    ],
    correctAnswer: "Alt süreçleri başlat, askıya al ve yok et",
  },
  {
    id: 135,
    questionText: "Aşağıdakilerden hangisi bir işletim sistemi değildir?",
    options: ["MULTICS", "THE", "XDS-940", "RC 4000", "AKOM"],
    correctAnswer: "AKOM",
  },
  {
    id: 136,
    questionText:
      '"Çekirdek eşzamanlı işlemlerin toplanmasını desteklemekteydi. Çevrimsel sıralı CPU, zaman planı uygulayıcısı kullanılmıştı. İşlemler sekiz kelime uzunluğundaki sabit boyda mesajların değişimi ile birbirleriyle iletişim kurabilmekteydi. Tüm mesajlar ortak bir ara bellek alanından arabelleklerde saklanmaktaydı." Bahsi geçen işletim sistemi hangisidir?',
    options: ["MULTICS", "THE", "XDS-940", "RC 4000", "ATLAS"],
    correctAnswer: "RC 4000",
  },
  {
    id: 137,
    questionText:
      "RC 4000 işletim sistemi mesaj konusunda aşağıdaki seçeneklerden hangisini desteklemektedir?",
    options: [
      "mesaj gönderme",
      "mesaj bekleme",
      "cevap yollama",
      "cevap bekleme",
      "hepsi",
    ],
    correctAnswer: "hepsi",
  },
  {
    id: 138,
    questionText:
      "MULTICS işletim sistemi 1965'den 1970'e kadar …….'nin doğal bir uzantısı olarak MIT'de tasarlanmıştır. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["CTSS", "THE", "XDS-940", "RC 4000", "ATLAS"],
    correctAnswer: "CTSS",
  },
  {
    id: 139,
    questionText:
      "DEC'in işletim sistemlerinin en etkili olanı …….'dir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["CTSS", "THE", "TOPS-20", "RC 4000", "ATLAS"],
    correctAnswer: "TOPS-20",
  },
  {
    id: 140,
    questionText:
      "İlk sistem programlama dilinde yazılmış işletim sistemi hangisidir?",
    options: ["CTSS", "MCP", "TOPS-20", "RC 4000", "ATLAS"],
    correctAnswer: "MCP",
  },
];

const DijitalPazarlama = [
  {
    id: 1,
    questionText: "Aşağıdaki cümlelerden hangisi liderlik için doğrudur?",
    options: [
      "Günümüz işletmelerinde bütün liderler yöneticidir.",
      "Formal hakları yöneticiyi etkin liderlik etme konusunda yetkin kılar.",
      "Bütün yöneticiler liderdir.",
      "Bütün liderler takip edenlerinin hiyerarşik olarak üstü konumundadır.",
      "Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
    ],
    correctAnswer:
      "Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
  },
  {
    id: 2,
    questionText:
      "Aşağıdakilerden hangisinde liderlik fonksiyonunun değişkenleri tam olarak verilmiştir?",
    options: [
      "Yönetici, izleyiciler ve kurallar",
      "Yönetici, takipçiler ve değişkenler",
      "Veriler, senaryolar ve kurallar",
      "Lider, izleyiciler ve koşullar",
      "Faaliyet, süreç ve yöntemler",
    ],
    correctAnswer: "Lider, izleyiciler ve koşullar",
  },
  {
    id: 3,
    questionText: "Tanım olarak liderlik ............... sürecidir.",
    options: [
      "Organizasyonel politikalar",
      "Yetki verme",
      "Etkileme",
      "Zorlama",
      "Katılımcı yönetim",
    ],
    correctAnswer: "Etkileme",
  },
  {
    id: 4,
    questionText:
      "I. Liderlik, liderin, takipçilerin ve koşulların bir fonksiyonudur. II. Liderlik, çalışanları organizasyonel amaçlara ulaşmak için etkileme sürecidir. III. Liderlik bir meslektir ancak yöneticilik insanları etkileyerek amaçlar doğrultusunda harekete geçirme gücüdür. IV. Liderlik için belirlenmiş bir organizasyon yapısı gerekirken yöneticilik için formal bir yapıya gerek yoktur. V. Yöneticinin organizasyonel yapıdan kaynaklanan gücü; durağanlığı, emir vermeyi ve problem çözümünü yaratır. Ancak liderin gücü vizyon, yaratıcılık ve organizasyonel değişim yaratmaktadır. VI. Yöneticinin sahip olduğu güç organizasyonel yapıdan kaynaklanır. Liderin sahip olduğu güç kişisel özelliklerinden kaynaklanır. Yukarıdaki ifadelerden doğru olanlar hangileridir?",
    options: [
      "I-II-III-IV-V-VI",
      "I-II-V-VI",
      "I-III-IV-VI",
      "II-IV-V-VI",
      "II-III-V-VI",
    ],
    correctAnswer: "I-II-V-VI",
  },
  {
    id: 5,
    questionText:
      "Aşağıdakilerden hangisi, liderlerden ziyade yöneticilerden beklenen özellikler arasında sayılabilir?",
    options: [
      "Kontrole dayalı ilişki",
      "Güvene dayalı ilişki",
      "Uzun vadeli bakış açısı",
      "İnsanlara ve geleceğe odaklanma",
      "Neden diye sorma ve mevcut duruma meydan okuma",
    ],
    correctAnswer: "Kontrole dayalı ilişki",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi liderlik ile ilgili yanlış bir ifadedir?",
    options: [
      "Liderlik amaçlar doğrultusunda başkalarını etkileme ve harekete geçirme sürecidir.",
      "Lider izleyicileri etkileyebilmek için pozisyonundan ve kişisel özelliklerinden gelen güç kaynaklarını kullanmaktadır.",
      "Liderlik, liderin, izleyicilerin ve koşulların bir fonksiyonudur.",
      "Liderliğin ortaya çıkması için formal bir yapı ve meşru yetki zorunlu değildir.",
      "Liderlik sadece kavramsal beceriyle ilgilidir. İnsan ilişkileri ve teknik becerinin önemi yoktur.",
    ],
    correctAnswer:
      "Liderlik sadece kavramsal beceriyle ilgilidir. İnsan ilişkileri ve teknik becerinin önemi yoktur.",
  },
  {
    id: 7,
    questionText:
      "Aşağıdakilerden güç kaynaklarından hangisi yanlış açıklanmıştır?",
    options: [
      "Meşru güç, pozisyon gereği alabileceğimiz kararları belirlemektedir.",
      "Uzmanlık gücü liderin derin bilgi ve tecrübesine dayanır.",
      "Referans olma gücüne sahip liderleri izleyiciler örnek alır, ona benzemek isterler.",
      "Karizmatik güç liderin kişisel çekiciliği ve uyandırdığı hayranlık duygusuna dayanmaktadır.",
      "Mantıksal ikna gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
    ],
    correctAnswer:
      "Mantıksal ikna gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
  },
  {
    id: 8,
    questionText:
      "Liderin güç kaynaklarına ilişkin açıklamalardan hangisi yanlıştır?",
    options: [
      "Mantıksal İkna gücü liderin rasyonel argüman ve kanıtlarla izleyicileri ikna etmesine dayanmaktadır.",
      "Ödül gücü performans ve davranışları istenen düzeyde olmayan çalışanları cezalandırmaya dayanmaktadır.",
      "Politik güç liderin bürokratik kontrol ve politik manevralarla etki yaratması ve karşıt görüşleri zayıflatmasıdır.",
      "Dönüştürücü güç, liderin organizasyonun yönünü, kültürünü, iklimini değiştirme yeteneğidir.",
      "Bağlantı gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
    ],
    correctAnswer:
      "Ödül gücü performans ve davranışları istenen düzeyde olmayan çalışanları cezalandırmaya dayanmaktadır.",
  },
  {
    id: 9,
    questionText:
      "Yönetici becerilerine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Teknik becerilerin önemi alt kademe yönetim pozisyonlarından üst kademe yönetim pozisyonlarına doğru giderken azalmaktadır.",
      "İnsan ilişkileri becerisi her kademedeki yöneticiler için eş öneme sahip bir beceridir.",
      "Kavramsal beceri ileriyi görme vizyon oluşturma ve bunu aktarabilme ile ilişkilidir.",
      "Kavramsal becerinin en önemli olduğu yönetim kademesi alt yönetim kademesidir.",
      "Teknik beceri yöneticinin uzmanlık alanına ilişkin teknik bilgisi ile ilgilidir.",
    ],
    correctAnswer:
      "Kavramsal becerinin en önemli olduğu yönetim kademesi alt yönetim kademesidir.",
  },
  {
    id: 10,
    questionText:
      "Güç kaynaklarına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderlerin temel fonksiyonu izleyicilerini etkileyerek istenen sonuçlara ve beklentilere ulaşmalarını sağlamaktır ve bu güç kullanımı gerektirmektedir.",
      "Hem yöneticiler hem de liderler için güce ulaşmak ve kullanmak önemlidir.",
      "Liderler çoğu kez gücü elinde bulunduran üstün insanlar, süper kahramanlar olarak sıradan insanlardan farklı görülmektedirler.",
      "İzleyicilerin davranışlarını olumlu yönde etkileme sürecinde yararlanılan meşru ve kişisel dayanakları olan pek çok güç kaynağı bulunmaktadır.",
      "Güç kaynaklarının hepsi pozisyona dayalıdır.",
    ],
    correctAnswer: "Güç kaynaklarının hepsi pozisyona dayalıdır.",
  },
  {
    id: 11,
    questionText:
      "Liderlik teorilerinin gelişimine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderlik kavramı insanlık tarihi kadar eskidir.",
      "Toplumsal değişim sürecinin bir yansıması olarak etkin liderlik tarzları da değişmekte, bu liderlik tarzlarını açıklayan teoriler de gelişim göstermektedir.",
      "Liderlik üzerine yapılan ilk çalışmalar 1940'lı yıllarda işletme yönetiminde başarılı olan yöneticilerin kişisel özelliklerini tespit etmek ve evrensel bir lider profili çıkarmak üzere yapılmıştır.",
      "1950'li yıllarda liderin tavır ve davranışlarının nasıl olması gerektiğine dair çalışmalara ağırlık verilmiştir.",
      "1990'lı yıllarda özellikle bilgi ve iletişim teknolojilerindeki gelişmelerle işletmelerin faaliyette bulundukları çevrede kökten değişimler olması eski liderlik yaklaşımlarını kullanmayı gerekli kılmıştır.",
    ],
    correctAnswer:
      "1990'lı yıllarda özellikle bilgi ve iletişim teknolojilerindeki gelişmelerle işletmelerin faaliyette bulundukları çevrede kökten değişimler olması eski liderlik yaklaşımlarını kullanmayı gerekli kılmıştır.",
  },
  {
    id: 12,
    questionText:
      "Liderlik yaklaşımlarının gelişimiyle ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Liderlik yaklaşımlarının gelişimi toplumsal olaylardan bağımsız işletme yöneticilerinin tercihleri doğrultusunda olmuştur.",
      "Liderlik yaklaşımlarındaki gelişimin tek itici gücü liderin kişilik özellikleridir.",
      "1990'lı yıllardan sonra işletmelerin faaliyette bulundukları çevrede kökten değişimler olması yeni bir tür liderliği zorunlu kılmıştır.",
      "Davranışsal liderlik yaklaşımlarında sadece liderin görev odaklı ve insan odaklı davranışları ele alınmıştır, bu davranışlardan sadece görev odaklının etkin olduğu vurgulanmıştır.",
      "Yönetim alanında sistem yaklaşımının etkileri ile birlikte etkin lider davranışlarında rol oynayan çevresel faktörler göz ardı edilmiştir.",
    ],
    correctAnswer:
      "1990'lı yıllardan sonra işletmelerin faaliyette bulundukları çevrede kökten değişimler olması yeni bir tür liderliği zorunlu kılmıştır.",
  },
  {
    id: 13,
    questionText: "Aşağıdakilerden hangisi X teorisi varsayımıdır?",
    options: [
      "Çalışmak oyun, dinlenme kadar doğaldır.",
      "İnsanlar tipik olarak tembeldir, çalışmak istemezler.",
      "İnsan tipik olarak tembel değildir, gerekli ortam ve uygun iş verildiğinde çalışmak oyun oynamak kadar zevklidir.",
      "Kişinin çalışmak istemesinde geçmiş kötü tecrübelerinin rolü vardır.",
      "Uygun koşullar olduğunda çalışanlar sorumluluk almak istemektedir.",
    ],
    correctAnswer: "İnsanlar tipik olarak tembeldir, çalışmak istemezler.",
  },
  {
    id: 14,
    questionText:
      "Kurt Lewin'in liderlik sınıflandırmasına göre aşağıdakilerden hangisi söylenemez?",
    options: [
      "Otokratik liderlikte tüm yetki liderde toplanmaktadır.",
      "Lewin'in araştırması esnasında otokratik rol üstlenen liderlerde grup üyelerinin iki tür tepki gösterdiği ortaya konmuştur: bunlardan biri saldırgan ve düşmanca tavır, diğeri uyumlu tavırdır.",
      "Demokratik (katılımcı) liderlikte yetki izleyicilerle paylaşılarak amaçlara ve iş dağılımına beraber karar verilmektedir.",
      "Lewin'in araştırması esnasında katılımcı liderlik ikliminde, liderin yokluğunda da grup üyelerinin çalışmaya devam ettiği gözlemlenmiştir.",
      "Özgür bırakıcı (Laissez-Faire) tarzda lider emirler vererek ve sıkı kontrollerde bulunarak izleyicileri yönlendirmektedir.",
    ],
    correctAnswer:
      "Özgür bırakıcı (Laissez-Faire) tarzda lider emirler vererek ve sıkı kontrollerde bulunarak izleyicileri yönlendirmektedir.",
  },
  {
    id: 15,
    questionText:
      "Aşağıdakilerden hangisi özellikler teorisine yöneltilen eleştiriler arasında sayılamaz?",
    options: [
      "Yalnızca liderlerin kişilik özelliklerini ele alarak liderliği etkileyen diğer faktörleri gözardı etmesi",
      "İnsanları nitelendirebilecek sınırsız özelliğin var olması nedeniyle lider özelliklerini sınıflandırma güçlüğü",
      "Etkili lideri tanımlayabilecek tüm özellikleri belirlemenin güçlüğü",
      "Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
      "Birbirinden farklı çalışmaların farklı lider özellikleri ortaya koyması",
    ],
    correctAnswer:
      "Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
  },
  {
    id: 16,
    questionText:
      "Rensis Likert'in Sistem 1 - Sistem 4 Yaklaşımına göre aşağıdakilerden hangisi doğrudur?",
    options: [
      "İstismarcı otokratik yönetim tarzında lider çalışanlara biraz yakın olmaya çalışır, ara sıra fikirlerini sorar.",
      "Katılımcı yönetim tarzında lider genellikle kendi fikrini kullanır.",
      "Yardımsever yönetim tarzında lider çalışanların fikirlerini ve beklentilerini sorar, onlarla beraber karar alır.",
      "Demokratik yönetim tarzında lider astlarına tam olarak güvenir, fikirlerine her zaman danışır.",
      "Likert'e göre verimliliğin yüksek olduğu gruplarda sistem-1 istismarcı otokratik liderlik tarzıdır.",
    ],
    correctAnswer:
      "Demokratik yönetim tarzında lider astlarına tam olarak güvenir, fikirlerine her zaman danışır.",
  },
  {
    id: 17,
    questionText:
      "Ohio State Üniversitesi çalışmasına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderin davranışları işe ve kişiye yönelik olmak üzere iki boyutta ele alınmaktadır.",
      "Kişiyi dikkate alan liderler izleyicilerin fikirlerini ve duygularını önemsemektedir.",
      "Kişiyi dikkate alan liderler dostça tavır, açık iletişim, takım çalışması aracılığıyla izleyicileri için bir güven ortamı hazırlamakta ve onları güçlendirmektedirler.",
      "İşe dönük liderler amaçları gerçekleştirmek için işleri planlamakta, örgütlemekte ve çalışanı görev odaklı bir şekilde yönlendirmektedir.",
      "İşe dönük liderler işin nasıl, hangi zamana kadar yapılması gerektiğine ilişkin kararları çalışanlara bırakmakta, dostluk ve güven ortamı inşa etmektedir.",
    ],
    correctAnswer:
      "İşe dönük liderler işin nasıl, hangi zamana kadar yapılması gerektiğine ilişkin kararları çalışanlara bırakmakta, dostluk ve güven ortamı inşa etmektedir.",
  },
  {
    id: 18,
    questionText:
      "Yönetim Tarzı Matrisi'ne ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Cılız liderlik ne işi yerine getirmek için ne de çalışanların arzu ve ihtiyaçlarını tatmin etmek için çaba göstermez.",
      "Cılız liderlikte hem üretim düzeyi hem çalışan tatmini düşüktür.",
      "Kulüp liderliğinde çalışanların tatminine ve arkadaşça bir ortam yaratmaya odak ve düşük iş ilgisi vardır.",
      "Görev liderliğinde üretim hedeflerine önem verilmekte, çalışanların istek ve ihtiyaçları göz ardı edilmektedir.",
      "En etkili liderlik tarzı orta yol liderliktir.",
    ],
    correctAnswer: "En etkili liderlik tarzı orta yol liderliktir.",
  },
  {
    id: 19,
    questionText:
      "Yönetim Tarzı Matrisi'ne ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Takım liderliğinde üretkenlik ve çalışan tatmini en üst düzeydedir.",
      "Fırsatçı lider merhametli bir davranış içindeki 'müşfik diktatör' gibidir.",
      "Orta yol liderliğinde üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlanmaktadır.",
      "Paternalist ve maternalist lider çalışanlara bir anne baba gibi ilgi ile davranır.",
      "Paternalist ve maternalist liderler örgütü bir aile gibi görür, önemli kararları kendileri verir, itaati ödüllendirir.",
    ],
    correctAnswer:
      "Fırsatçı lider merhametli bir davranış içindeki 'müşfik diktatör' gibidir.",
  },
  {
    id: 20,
    questionText:
      "Fırsatçı lidere ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Kişisel çıkarını sağlayabilmek için yönetim tarzı matrisinde sıralanan beş temel tarzın herhangi birini kullanan liderdir.",
      "Üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlamaktadır.",
      "Liderin önceliği kişisel faydasını artırmaktır.",
      "Kişisel faydasını sağlamak için en etkin olacak davranış şeklini içeren tarza bürünmektedir.",
      "Bu liderleri 'kurnaz' olarak nitelendiren ya da kimileri 'uyumlu' olarak nitelendiren düşünürler bulunmaktadır.",
    ],
    correctAnswer:
      "Üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlamaktadır.",
  },
  {
    id: 21,
    questionText:
      "Fiedler'in Durumsal Liderlik Yaklaşımına göre aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Yaklaşım üç durumsal değişken ile liderin çalışma ortamını etkileme ve kontrol etme gücünü belirlemeye dayalıdır.",
      "Durumsal kontrol değişkenleri şunlardır: lider-çalışan ilişkisi, işin niteliği, pozisyon gücü.",
      "Pozisyon gücü yöneticinin sahip olduğu kişisel güç kaynaklarıdır.",
      "Önceden iyi tanımlanmış, rutin işler yüksek nitelikli; yaratıcı, önceden tanımlanması güç işler düşük niteliklidir.",
      "Lider-çalışan ilişkisi, yöneticiye duyulan güven ve kabul ile ilişkilidir.",
    ],
    correctAnswer:
      "Pozisyon gücü yöneticinin sahip olduğu kişisel güç kaynaklarıdır.",
  },
  {
    id: 22,
    questionText:
      "Fiedler'in Durumsal Liderlik Yaklaşımına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Durumsal koşullar liderin durumsal kontrolü üzerinde etkili değildir.",
      "Durumsal kontrol, liderin çalışma ortamını etkileme ve kontrol etme gücü olarak tanımlanabilir.",
      "Durumsal kontrol yüksek ise lider işin sonuçlarını etkileyebilir, düşük ise liderin iş çıktısına etkisi zayıftır.",
      "Liderin her bir durumsal değişkenin farklı niteliklerde bir arada bulunmasına göre düşük, orta ve yüksek seviye durumsal kontrolü söz konusudur.",
      "Düşük ve yüksek kontrol durumlarında işe yönelik, orta kontrol durumunda kişiye yönelik bir liderlik tarzı etkili olmaktadır.",
    ],
    correctAnswer:
      "Durumsal koşullar liderin durumsal kontrolü üzerinde etkili değildir.",
  },
  {
    id: 23,
    questionText:
      "Durumsal liderlik yaklaşımına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Yönlendirici liderliğe göre işi yapamayacak durumda, isteksiz ve kendine güvensiz durumdaki çalışanlar için lider belirli görevleri açıkça vermelidir.",
      "Yönlendirici liderlik tarzı için işbirlikçi, kolaylaştırıcı, taahhüt edici isimleri de kullanılmaktadır.",
      "İkna edici liderin sadece yapılacak işi söylemesi yeterli olmayacak; yapılması gerekeni bir fikir olarak çalışana psikolojik olarak satması etkili olacaktır.",
      "Katılımcı liderin en etkin davranışı ilişki yönelimli, ikili iletişim kuran destekleyici davranışlardır. Yönlendirme düşük olmalıdır.",
      "Güçlendirici liderlikte çalışana neyi, nasıl yapması gerektiğini söylemek gereksiz olacaktır. En uygun davranış işleri çalışana bırakmaktır.",
    ],
    correctAnswer:
      "Yönlendirici liderlik tarzı için işbirlikçi, kolaylaştırıcı, taahhüt edici isimleri de kullanılmaktadır.",
  },
  {
    id: 24,
    questionText:
      "Aşağıdaki liderlik türünden hangisi Amaç Yol Yaklaşımının ortaya koyduğu sınıflandırmada bulunmaz?",
    options: [
      "Otoriter",
      "Destekleyici",
      "Katılımcı",
      "Başarı odaklı",
      "İstismarcı",
    ],
    correctAnswer: "İstismarcı",
  },
  {
    id: 25,
    questionText:
      "Amaç yol yaklaşımına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Motivasyon teorilerinden bekleyişler yaklaşımı ile liderlik teorilerini birleştiren bir bakış açısı sunmaktadır.",
      "Çalışanların işi yapmak için kendilerini yeterli gördüklerinde ve işi tamamlayarak ulaşacakları ödülü arzuladıklarında motive olacakları varsayımına dayanmaktadır.",
      "Liderin rolü çalışanları motive edecek ihtiyaçları karşılamaktır.",
      "Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
      "Amaç yol yaklaşımına göre lider çalışanlara amaçları gerçekleştirecekleri yolu açıklamakta, yol boyunca onlara eşlik etmektedir.",
    ],
    correctAnswer:
      "Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
  },
  {
    id: 26,
    questionText:
      "Lider üye etkileşimine (LMX) ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Lider Üye Etkileşimi teorisi lider ve izleyiciler arasında, karşılıklı olarak gelişen ilişkilere dayanmaktadır.",
      "Teorinin önceki yaklaşımlardan en temel farkı, lider ve/veya izleyicilerin özellikleri veya davranışlarına değil, aralarındaki ilişkinin kalitesine odaklanmasıdır.",
      "LMX, liderlerin tüm çalışanlara belirli bir tarz ile yaklaşmadığı, bunun yerine her bir çalışanla birebir ve özgün bir ilişki geliştirdikleri varsayımına dayanmaktadır.",
      "Davranış bilimciler LMX teorisinin ele aldığı davranışa 'dikey ikili' adını vermektedirler.",
      "Dikey ikili çalışanın herhangi bir görevi reddetmesiyle başlamaktadır.",
    ],
    correctAnswer:
      "Dikey ikili çalışanın herhangi bir görevi reddetmesiyle başlamaktadır.",
  },
  {
    id: 27,
    questionText:
      "Dikey ikilinin gelişme sürecinde aşağıdaki aşamalardan hangisi bulunamaz?",
    options: [
      "Liderle üyenin ilk etkileşimi",
      "Üyenin ailesiyle olan davranışları",
      "Lider tarafından üyeye görevler verilmesi",
      "Üyenin bu görevler karşısındaki tutum ve davranışları",
      "Liderin üye davranışına yönelik tutum ve davranışları",
    ],
    correctAnswer: "Üyenin ailesiyle olan davranışları",
  },
  {
    id: 28,
    questionText:
      "Lider üye etkileşiminin kalitesine (niteliğine) ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "LMX sürecinin ilk girdisi lider üye arasındaki etkileşiminin niteliğidir.",
      "Etkileşimin niteliği grup içi, grup dışı ve gruplar arası olmak üzere üç türlü olabilmektedir.",
      "Grup içi etkileşim liderle izleyici arasında karşılıklı güven, saygı ve hoşlanmanın eksik olduğu etkileşimdir.",
      "Grup dışı etkileşimde sadece görev odaklı bir ortaklık geliştirilebilmektedir.",
      "Düşük kaliteli etkileşimde lider ve izleyiciler karşılıklı güven, saygı ve hoşlanma özelliklerini taşıyan bir ortaklık geliştirmektedirler.",
    ],
    correctAnswer:
      "Grup dışı etkileşimde sadece görev odaklı bir ortaklık geliştirilebilmektedir.",
  },
  {
    id: 29,
    questionText:
      "Lider üye etkileşimin boyutlarına ilişkin tanımlamalardan hangisi yanlıştır?",
    options: [
      "Etki: Karşılıklı hoşlanma",
      "İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
      "Katkı: Görev odaklı ilişkiler geliştirmede başarılı olma",
      "Sadakat: Birbirinin beklediği doğrultuda davranma, birbirini destekleme, vefakarlık",
      "Profesyonel Saygı: İşini nasıl yaptığına ilişkin itibarı",
    ],
    correctAnswer:
      "İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
  },
  {
    id: 30,
    questionText:
      "Profesyonel saygı boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Lider ve çalışanın birbirlerinin örgüt içi ya da dışında mesleki itibarlarını algılamalarıdır.",
      "Profesyonel saygıya ilişkin algılama yöneticinin geçmişine dayalıdır.",
      "Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
      "Yöneticinin birlikte çalıştığı kişilerle yaşadığı deneyimler, başkalarının onun hakkındaki yorumları yoluyla profesyonel saygıya ilişkin algı oluşabilmektedir.",
      "Bu boyut güven ve yüksek saygı ile yakından ilişkilidir.",
    ],
    correctAnswer:
      "Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
  },
  {
    id: 31,
    questionText:
      "Günümüz işletmelerinde liderlik uygulamalarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderin paylaşılan bir vizyon yaratması ve herkesi buna dahil etmesi gerekmektedir.",
      "Herkesin kabul edildiği, ait hissettiği, anlamlı bulduğu pozitif iş ortamı yaratmak günümüz liderlerinin görevleri arasındadır.",
      "Verimliliği artırmak için çalışana ofiste geçirdiği saat kadar ücret vermek gerekir.",
      "Lider takipçi arasında ve çalışanların kendi arasında etkili insan ilişkileri geliştirmek önem taşımaktadır.",
      "Bilgi ve kaynak paylaşımında dürüst, adil ve etik olmak gerekmektedir.",
    ],
    correctAnswer:
      "Verimliliği artırmak için çalışana ofiste geçirdiği saat kadar ücret vermek gerekir.",
  },
  {
    id: 32,
    questionText:
      "Geçmişten günümüze rekabet avantajları düşünüldüğünde aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "1950'lerde işletmelere rekabet avantajı sağlayan en temel faktör 'operasyonel verimlilik' olarak görülmektedir.",
      "1960'larda 'stratejik planlama' önem kazanmaya başlamıştır.",
      "1970'lerde stratejik bakış açısında 'konumlandırma' önem taşımaya başlamıştır.",
      "1980'lerde 'kalite ve mükemmeli arayış' gündeme gelmiştir.",
      "2000'li yıllarda rekabet avantajı sağlayan en önemli kaynak finansal varlıklardır.",
    ],
    correctAnswer:
      "2000'li yıllarda rekabet avantajı sağlayan en önemli kaynak finansal varlıklardır.",
  },
  {
    id: 33,
    questionText:
      "Yakın dönem işletme yaklaşımlarına dair aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "1980'ler operasyonel verimliliğin ve kalite kontrolünün önemli olduğu yıllardır. Temel argüman, mümkün oldukça ucuz ve çok sayıda ürün üretebilmektir.",
      "1990'larda rekabet avantajı sağlayan en önemli kaynak 'öz yetenek' olarak görülmektedir.",
      "1990'lardan sonra mamullerin yaşam seyri iyice kısalmış, rekabet yerini sürekli yenilik ve yeni mamul geliştirmeye bırakmıştır.",
      "2000'li yıllarda işletmelerin performanslarının insanlar sayesinde yükseltildiği bir döneme girilmiştir.",
      "21. Yüzyılda işletmeler bilgiyi daha verimli kullanmaya ve entelektüel sermayeyi iyi yönetmeye yönelmektedirler.",
    ],
    correctAnswer:
      "1980'ler operasyonel verimliliğin ve kalite kontrolünün önemli olduğu yıllardır. Temel argüman, mümkün oldukça ucuz ve çok sayıda ürün üretebilmektir.",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi günümüz liderinin rolleri arasında sayılamaz?",
    options: [
      "Lider-takipçi arasında ve çalışanlar arasında etkili insan ilişkileri geliştirmek",
      "Zaman hareket etütleriyle bir işin daha hızlı nasıl yapılabileceğini analiz etmek",
      "Herkesin kabul edildiği, ait hissettiği, anlamlı bulduğu pozitif iş ortamı yaratmak",
      "Bilgi ve kaynak paylaşımında dürüst, adil ve etik olmak",
      "Paylaşılan bir vizyon yaratmalı ve herkesi buna dahil etmelidir.",
    ],
    correctAnswer:
      "Zaman hareket etütleriyle bir işin daha hızlı nasıl yapılabileceğini analiz etmek",
  },
  {
    id: 35,
    questionText:
      "Aşağıdakilerden hangisi günümüzde insan yönetmeyi zorlaştıran unsurlar arasında sayılamaz?",
    options: [
      "Gücün kötüye kullanımı",
      "Zorbalık, mobbing, taciz",
      "İş yerlerinde çalışan çeşitliliği, farklılık yönetimi sorunları",
      "Vizyona uygun stratejiler belirleme zorunluluğu",
      "Etik olmayan davranışlar",
    ],
    correctAnswer: "Vizyona uygun stratejiler belirleme zorunluluğu",
  },
  {
    id: 36,
    questionText:
      "Karizmatik liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Karizma bir kişiyi normal insanlardan ayıracak, az bulunur bir kişilik kalitesidir.",
      "Kişisel risk alabilme, yüksek bedel ödemeye razı olma ve beklenenin dışında davranışlar gösterebilme karizmatik liderlerin özellikleri arasındadır.",
      "Karizmatik liderlik her zaman olumlu sonuçlar doğurur.",
      "Karizmatik liderlik birey ve grupları çabuk etkileme ve yüksek performans ortaya koyma açısından faydalıdır.",
      "Karizmatik liderlere çalışanların hayranlığı, liderin yanlışlarını görme, uyarma gibi davranışları azaltmaktadır.",
    ],
    correctAnswer: "Karizmatik liderlik her zaman olumlu sonuçlar doğurur.",
  },
  {
    id: 37,
    questionText:
      "Geleneksel ve güncel liderlik teorileri düşünüldüğünde aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Etkileşimci liderlik, çalışanların rollerinin belirlenmesi ve performansa uygun ödül sağlanması için lider-çalışan etkileşimine odaklanır.",
      "Dönüşümcü liderler çalışanlara organizasyonel amaçlara ulaşmaya katkı sağlaması için ilham veren liderlerdir.",
      "Dönüşümcü liderler inovasyon ve değişim getirmede özel yeteneklere sahiptirler, statükoyu kabul etmezler.",
      "Geleneksel liderlik teorilerinde liderin bilgi yayıcı (iletişimci) rolü göz ardı edilmiştir.",
      "En iyi ve her ortamda geçerli tek bir liderlik tarzı vardır.",
    ],
    correctAnswer:
      "En iyi ve her ortamda geçerli tek bir liderlik tarzı vardır.",
  },
  {
    id: 38,
    questionText:
      "Aşağıdakilerden hangisi Karizmatik liderleri karakterize eden yeteneklerden biridir?",
    options: [
      "Çalışanları ezen",
      "Organizasyon üyelerine vizyon sağlama",
      "Çalışanları arasında saygı uyandıran",
      "Takip edenleri tarafından hayranlık uyandıran",
      "Çalışanlarında entelektüel faaliyetlerde hayal kırıklığı yaratan",
    ],
    correctAnswer: "Takip edenleri tarafından hayranlık uyandıran",
  },
  {
    id: 39,
    questionText:
      "Vizyon ve vizyoner liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "İşletme yönetiminde vizyon genel olarak 'hayal edilen gelecek', çalışanlar için hedefe ulaşma yolunu gösteren bir haritadır.",
      "Vizyoner liderlik çalışanlara vizyona uygun performanslarını ödüllendirmek, vizyondan sapan davranışları cezalandırmak üzerine kuruludur.",
      "Vizyon; kişilerin veya kurumların, kendilerinin gelecekte olmasını arzu ettikleri durumun ifadesidir.",
      "Vizyoner liderlik en yalın haliyle, net bir vizyon oluşturmak, bunu açıkça ifade etmek ve insanların dahil olmasını sağlamaktır.",
      "Vizyoner liderlik insanlara vizyon aşılayarak motive etmekle ilgilidir.",
    ],
    correctAnswer:
      "Vizyoner liderlik çalışanlara vizyona uygun performanslarını ödüllendirmek, vizyondan sapan davranışları cezalandırmak üzerine kuruludur.",
  },
  {
    id: 40,
    questionText:
      "Dönüşümcü liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderin birincil odağı organizasyondur.",
      "Dönüşümcü liderler vizyon oluşturma, yayma, çalışanlar arasında kabulünü sağlama gibi günümüz organizasyonlarının pek çok ihtiyacını karşılayamamakta, bunu etkileşimci liderlik karşılayabilmektedir.",
      "İzleyicilerin kişisel gelişimleri organizasyon için neyin iyi olduğu çerçevesinde değerlendirilir.",
      "Liderin organizasyonun amaçlarını kişisel amaçları doğrultusunda manipüle etme riski vardır.",
      "Dönüşümcü liderliğin en önemli farkı, izleyicilerin organizasyon ile eş güdülere sahip olmalarını sağlamasıdır.",
    ],
    correctAnswer:
      "Dönüşümcü liderler vizyon oluşturma, yayma, çalışanlar arasında kabulünü sağlama gibi günümüz organizasyonlarının pek çok ihtiyacını karşılayamamakta, bunu etkileşimci liderlik karşılayabilmektedir.",
  },
  {
    id: 41,
    questionText:
      "Aşağıdakilerden hangisi örgütsel değişimin aşamaları ararsında yer almaz?",
    options: [
      "Değişim ihtiyacını belirleme",
      "Değişim ekiplerini dağıtma",
      "Vizyon ve değerler yaratma",
      "İletişim kurma ve dahil olma",
      "Güçlendirme",
    ],
    correctAnswer: "Değişim ekiplerini dağıtma",
  },
  {
    id: 42,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Rutin bir teknik sorunu çözmek için gereken liderlik türü ile karmaşık örgütsel değişikliği sağlamak için gereken liderlik türü birbirinin aynısıdır.",
      "Değişim liderleri, çevredeki, insanlardaki ve kültürdeki değişiklikleri veya önemli süreçlerdeki değişiklikleri ele alarak, karmaşıklıkla başa çıkmalı ve uyum sağlamalıdır.",
      "Değişim liderleri insanlar için sorunları çözmek değil, onları sorunlardan sorumlu tutmaya, işin sahibi kılmaya yönelmektedirler.",
      "Etkili bir değişim süreci için olunda gitmeyen işler ve zorluklardan izleyicileri korumak değil, liderle beraber yolunda gitmeyen şeylerin sıkıntısını anlamalarına izin vermek gerekmektedir.",
    ],
    correctAnswer:
      "Rutin bir teknik sorunu çözmek için gereken liderlik türü ile karmaşık örgütsel değişikliği sağlamak için gereken liderlik türü birbirinin aynısıdır.",
  },
  {
    id: 43,
    questionText:
      "Değişim sürecinin vizyon ve değer yaratma aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "Fikirleri başlatmak",
      "Beyin fırtınası yapmak",
      "Farklı ve yaratıcı düşünmeyi teşvik etmek",
      "İkna etmek ve zorlamak",
      "Geleceği öngörmek",
    ],
    correctAnswer: "İkna etmek ve zorlamak",
  },
  {
    id: 44,
    questionText:
      "Değişim sürecinin güçlendirme aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "Açık ve net hedef belirleme",
      "İyi derecede yetki devri",
      "Gündemleri belirlemek ve emir vermek",
      "Detaylarla ilgili direktifler vermeden serbestçe yönetmek",
      "Koçluk yapmak",
    ],
    correctAnswer: "Gündemleri belirlemek ve emir vermek",
  },
  {
    id: 45,
    questionText:
      "Değişim sürecinin güçlendirme aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "Etkilemek",
      "Anlamak",
      "Araştırmak",
      "Dinlemek",
      "İzlemek ve kontrol etmek",
    ],
    correctAnswer: "İzlemek ve kontrol etmek",
  },
  {
    id: 46,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Değişim sürecinde işletmelere rekabet avantajı sağlayacak kilit roldeki faktör yenilik yaratma ve yaygınlaştırmaktır.",
      "Sürdürülebilir bir rekabet üstünlüğü için gerekli yeniliği yaratmada insan faktörü yüzyılın en önemli üretim faktörü olarak dikkat çekmekte, insanın yaratıcı ve yenilikçi kapasitesini ortaya çıkaracak yöntem ve liderlik süreçleri önem taşımaktadır.",
      "Toplam kalite yönetimi yaklaşımı insan unsurunu, faaliyetleri ve nihai ürünü belirleyen dış müşteriler ve üretimi gerçekleştiren, onu sürekli geliştiren iç müşteriler (çalışanlar) olarak odak noktasına oturtarak yeniliğin önemini vurgulamıştır.",
      "İşletme yönetiminde yenilik yaratmadan sürekli aynı ürünleri üreterek başarı sağlamak da mümkündür.",
      "Öğrenen organizasyonlar insan faktörü işletme içinde bilgi toplama ve işleme kapasitesine sahip, yaratıcılığı ortaya çıkartabilecek olan yegane unsur olarak görerek; yeniliğin önemini vurgulamıştır.",
    ],
    correctAnswer:
      "İşletme yönetiminde yenilik yaratmadan sürekli aynı ürünleri üreterek başarı sağlamak da mümkündür.",
  },
  {
    id: 47,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Başarılı işletmelerin ekonomideki ağırlıkları incelendiğinde tarihsel olarak geçmişte tarım toplumları, sonraları endüstri toplumları bugün ise bilgi toplumları önem kazanmıştır.",
      "İşletme yönetiminde mutlaka dış çevreye odaklanmak, değişmek ve yenilik yapmak gerekli değildir.",
      "Geleneksel üretim faktörlerinde azalan verim kanunu geçerliliğini korurken bilgi daha yoğun olarak kullanıldığında üretim artışına etkisi azalan değil artan verim yaratmaktadır.",
      "Bilginin az bulunurluğu varsayımının ortadan kalkmasıyla eskiden karşı karşıya olunan bilgi eksikliği (bilgi darboğazı) aşılmış, ancak şimdi de yeterli bilgi olduğunda bununla ne yapılacağına karar verilememesi yani düşünce eksikliği (düşünce darboğazı) karşımıza çıkmaktadır.",
      "Bugün bilgiyi elde etmek ve kullanmak her zamankinden daha önemli, ancak bilgiyi kullanma şekli bilginin kendisinden daha da önemlidir.",
    ],
    correctAnswer:
      "İşletme yönetiminde mutlaka dış çevreye odaklanmak, değişmek ve yenilik yapmak gerekli değildir.",
  },
  {
    id: 48,
    questionText:
      "Aşağıdakilerden hangisi yeniliğe liderlik etmede etkili olan liderlik tarzları arasında sayılamaz?",
    options: [
      "Dönüşümcü liderlik",
      "Çift yönlü liderlik",
      "Karizmatik liderlik",
      "Otokratik liderlik",
      "Vizyoner liderlik",
    ],
    correctAnswer: "Otokratik liderlik",
  },
  {
    id: 49,
    questionText:
      "'.......' akıllı, güvenilir bir danışman veya yol gösterici olan Yunan mitolojisinden bir karakterin adıdır.",
    options: ["Koçluk", "Mentorluk", "Yöneticilik", "Rehberlik", "Danışmanlık"],
    correctAnswer: "Mentorluk",
  },
  {
    id: 50,
    questionText:
      "'.......' son iki-üç yüzyıldır kullanılan, bir kişinin bilgi ve becerilerini bir öğretim veya öğretme biçimi aracılığıyla daha üst seviyeye taşımaya yardımcı olan kişiyi belirten bir terimdir. Yirminci yüzyılda özellikle, spor ve performans gerektiren işlerle ilgili olarak yaygın şekilde kullanılmaktadır.",
    options: ["Koçluk", "Mentorluk", "Yöneticilik", "Rehberlik", "Danışmanlık"],
    correctAnswer: "Koçluk",
  },
  {
    id: 51,
    questionText:
      "Aşağıdakilerden hangisi koçluk veya mentorluk süreçlerinin basamaklarından olamaz?",
    options: [
      "İhtiyaçların, arzuların ve benliğin farkına varmak için analiz",
      "Öz sorumluluk geliştirmek için planlama",
      "Stiller, teknikler ve beceriler kullanarak uygulama",
      "Başarı ve öğrenme düzeyini değerlendirme",
      "Danışanı gerektiğinde azarlama",
    ],
    correctAnswer: "Danışanı gerektiğinde azarlama",
  },
  {
    id: 52,
    questionText:
      "Takım liderliğine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Organizasyonlarda kurulan takımların içinde genellikle birbirini tamamlayıcı ve farklı bilgi ve profesyonel tecrübeye sahip üyeler bir arada çalışmaktadırlar. Bu çeşitlilikteki kapasitelerin bir arada çalışması sebebiyle takımlardan daha yüksek bir performans beklenmektedir.",
      "Takımlara liderlik, tüm takım üyelerinin ortak bir hedefe ulaşma yönünde etkileşime girdiği karmaşık bir etkileme süreci olarak ele alınmalıdır.",
      "Takımlara liderlik ederken takım üyelerinin tamamlayıcı özellik ve niteliklerine ortam tanıyan, daha esnek ve dinamik bir süreç gerekli olmaktadır.",
      "Organizasyonlarda takımlar genellikle belirli bir iş ya da projenin tamamlanması için oluşturulmakta, bu nedenle takımı oluşturan bireylerin kendi kendilerine liderliği, yürütülen projeye uygun genellikle geçici görevlerini gerçekleştirirken takıma uyum sağlamaları beklenmektedir. Burada vurgu daha çok liderlikten ziyade etkili bir izleyicilik (takipçilik) ortaya koymaktadır.",
      "Takım üyelerinin belirsizliğe toleransının yüksek olması, farklı insanlardan gelen liderliği kabulü pek mümkün olmayan bir durumdur.",
    ],
    correctAnswer:
      "Takım üyelerinin belirsizliğe toleransının yüksek olması, farklı insanlardan gelen liderliği kabulü pek mümkün olmayan bir durumdur.",
  },
  {
    id: 53,
    questionText:
      "Strateji, stratejik liderlik ve stratejik yönetime ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Strateji, rakiplerin faaliyetlerini inceleyerek, amaçlara ulaşmak için belirlenmiş, nihai sonuç odaklı, uzun dönemli, dinamik kararlar topluluğudur.",
      "Stratejik karar alma sürecinde yöneticiler yönetsel inisiyatifi etkileyen unsurlar ve kavramsal becerilerinin etkisi altında faaliyette bulunmaktadır. Bu nedenle stratejik liderlik, tüm bu stratejik kararları stratejik bir bilinç ile alabilme yeteneğine sahip üst yönetim liderliği olarak ele alınabilir.",
      "Yöneticilerin verdiği her karar stratejik karar değildir. Özellikle alt ve orta kademe yönetim günlük, rutin kararları yüksek belirlilik ortamında alabilmektedirler.",
      "Üst yönetim çoğunlukla rutin, belirli, kısa vadeli kararlar almaktadır.",
      "Stratejik yönetim süreci, sürdürülebilir rekabet üstünlüğü sağlamak amacıyla kaynakların etkili ve verimli olarak kullanılmasına odaklanmakta, bir başka deyişle en tepeden işletmenin gideceği yöne, rakipleriyle rekabet ediş şekline, uzun dönem amaç ve rekabet üstünlüğünü koruma biçimine karar vermekle ilgilidir.",
    ],
    correctAnswer:
      "Üst yönetim çoğunlukla rutin, belirli, kısa vadeli kararlar almaktadır.",
  },
  {
    id: 54,
    questionText:
      "İnsan odaklılığın düşük olduğu bir toplum ve organizasyona ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Toplumda bireysel çıkar, güç ve mülkiyet sahipliği değer görmektedir.",
      "Toplum üyeleri başkalarının refahı için bireysel düzeyde sorumluluk ve ayrımcılığa yönelik hassasiyet duymamakta, bunları devlet ve kurumlardan beklemektedir.",
      "Organizasyonda yöneticiler, formal iletişim, bürokrasiye dayalı kontrolün olduğu ve otonom çalışmanın hoş karşılanmadığı bir ortam oluşturmaktadırlar.",
      "Organizasyonlarda olumlu iş tutumları gözlemlenmektedir.",
      "Organizasyonlarda işten kaytarma ve tatminsizlik gibi olumsuz iş tutumları,",
    ],
    correctAnswer: "Organizasyonlarda olumlu iş tutumları gözlemlenmektedir.",
  },
  {
    id: 55,
    questionText:
      "İnsan odaklılıkla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "İnsan odaklı liderliğin önemi özellikle otokratik ya da hiyerarşi temelli liderlik tarzlarıyla kıyaslandığında anlaşılabilmektedir.",
      "Aşırı otokratik, emir verici ve kontrol odaklı davranışlar gösteren liderler çalışanların saygı ve güvenini kazanamaması olasıdır; insan odaklı liderlik bu davranışların tam tersinde bulunmaktadır.",
      "İnsan odaklı lider yaklaşımları, geleneksel otokratik liderlik yaklaşımlarının bugünün çalışanlarını motive etmekte yetersiz olduğu konuları da dikkate almaktadır.",
      "Kriz ortamındaki zor koşullarda, hızla kararlar verilmesi gerektiğinde insan odaklı liderler de otokratik liderler gibi tüm yetkiyi ele alabilmekte ve kesin kararlar verebilmektedirler.",
      "İnsan odaklı liderler zor koşullarda da mutlaka yetki devretme, kararın sorumluluğunu almama eğiliminde olabilmektedirler.",
    ],
    correctAnswer:
      "İnsan odaklı liderler zor koşullarda da mutlaka yetki devretme, kararın sorumluluğunu almama eğiliminde olabilmektedirler.",
  },
  {
    id: 56,
    questionText:
      "Laub'un örgüt sağlığının aşamaları yaklaşımına göre aşağıdaki ifadelerden hangisi doğru olamaz?",
    options: [
      "Zehirli örgüt sağlığında çalışanların kendilerini tehlikede görmekte, iş yapmak için zorlanmakta ve korkutulmaktadırlar.",
      "Zayıf örgüt sağlığında düşük derecede güven, yüksek derecede belirsizlik ve korku vardır.",
      "Kısıtlı örgüt sağlığında çalışanların tümünün birbirlerinin ihtiyaçlarına hizmet etmek için motive edildikleri ve birbirlerinden öğrenmeye açık oldukları, tam bir güven ortamıdır.",
      "Ortalama örgüt sağlığında ortalama bir güven düzeyinin, nadiren belirsizlik ve korkunun olduğu; yaratıcılığın, işletmeyi mevcut durumundan çok öteye götürmeye çalışılmadığı müddetçe özendirildiği; çalışanların risk alabildiği ama hata yapmaktan bazen korktukları bir ortamdır.",
      "Zehirli ve zayıf örgüt sağlığında otokratik liderlik tarzı görülmektedir; kısıtlı ve ortalama örgüt sağlığında paternalist; iyi ve ideal örgüt sağlığında hizmetkar liderlik mümkün olabilmektedir",
    ],
    correctAnswer:
      "Kısıtlı örgüt sağlığında çalışanların tümünün birbirlerinin ihtiyaçlarına hizmet etmek için motive edildikleri ve birbirlerinden öğrenmeye açık oldukları, tam bir güven ortamıdır.",
  },
  {
    id: 57,
    questionText:
      "Aşağıdakilerden hangisi hizmetkar liderliğin boyutları arasında sayılamaz?",
    options: [
      "Güçlendirme",
      "Otantiklik",
      "Karizma",
      "Geride Durma",
      "Cesaret",
    ],
    correctAnswer: "Karizma",
  },
  {
    id: 58,
    questionText:
      "Aşağıdakilerden hangisi otantik liderliğin bileşenleri arasında sayılamaz?",
    options: [
      "Öz farkındalık",
      "Hizmet",
      "İçselleştirilmiş ahlaki bakış açısı",
      "Dengeli yönlendirme",
      "İlişkilerde şeffaflık",
    ],
    correctAnswer: "Hizmet",
  },
  {
    id: 59,
    questionText:
      "Yönetsel etikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Yöneticiler gündelik pek çok karar verme sürecinde etkisi altında kaldığı pek çok faktör bulunmakta; bu süreçte adalet, dürüstlük, ortak iyilik, açıklık gibi değerler konusunda tutarlılık içinde olmaları gerekmektedir.",
      "Yöneticiler kararları alırken belirli ilkelere dayanmaları gerekmektedir.",
      "Etik, yönetsel kararlarda ülke yasaları, toplumsal ve kültürel değerler, yöneticinin özgür seçim alanı arasında tutarlı kuralların (ilkelerin) oluşturduğu bir bütündür.",
      "Her karar da olduğu gibi yönetsel kararlarda da, yöneticiden beklenen etik davranış sergilemesi, tutarlı kurallar bütünü içinde karar vermesidir.",
      "Yönetici bir kararında adil, dürüst, açık davranırken diğerinde davr",
    ],
    correctAnswer:
      "Yönetici bir kararında adil, dürüst, açık davranırken diğerinde davr",
  },
  {
    id: 60,
    questionText:
      "Etik ve ahlak kavramlarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Etik, iyiyle kötüyü doğruyla yanlışı ayırt etmemizi sağlayan ahlaki ilkelerin bütünü olarak görülebilir.",
      "Ahlak insanın yaşadığı toplum içinde kabul gören tutum ve davranışlar bütünüdür.",
      "Etik insanların nasıl davranması gerektiğine odaklanan daha evrensel bir kavram; ahlak ise belirli bir toplum veya alt kültür için doğru olan davranışlara odaklanan bir kavramdır.",
      "Ahlak her toplum için aynı evrensel kuralları olan bir kavramdır.",
      "Ahlak farklı kültürler ve toplumlar arasında değişiklik gösteren daha subjektif bir kavramdır.",
    ],
    correctAnswer:
      "Ahlak her toplum için aynı evrensel kuralları olan bir kavramdır.",
  },
  {
    id: 61,
    questionText:
      "Aşağıdakilerden hangisi yöneticinin bir birey olarak etik davranışını etkileyen faktörler arasında yer alamaz?",
    options: [
      "Bireyin ahlaki gelişim düzeyi",
      "Bireyin yaşı, eğitimi, geçmiş deneyimler, ailesi, sosyal ekonomik durumu",
      "Bireyin kişisel çıkarları",
      "Toplum kültürü ve değerler",
      "Norm ve görgü kuralları",
    ],
    correctAnswer: "Bireyin kişisel çıkarları",
  },
  {
    id: 62,
    questionText:
      "Etik liderliğin boyutlarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Etik ve adalet boyutu liderin dürüst, güvenilir, ilkeli, adaletli seçimler yapan ve çalışanlara karşı ilgili gösteren davranışlarına vurgu yapmaktadır.",
      "Görevlerin açıklığa kavuşturulması boyutu liderin açık iletişim kurma, çalışanlardan beklenen görev ve sorumlulukları açıklığa kavuşturma davranışlarına vurgu yapmaktadır.",
      "Güç paylaşımı boyutu liderin yetkiyi elinde toplayan ve pozisyon gücüne dayalı olarak çalışanları etkilemeye çalıştığı bir organizasyonu ifade etmektedir.",
      "Rollerin açıklığa kavuşturulması boyutu etik davranışı ödüllendirerek çalışanları teşvik etme gibi davranışlarını içermektedir.",
      "Güç paylaşımı boyutu liderin çalışanlara fikirlerini sorması, kararlara katılımı desteklemesi, yetki ve gücü paylaşması konularını kapsamaktadır.",
    ],
    correctAnswer:
      "Güç paylaşımı boyutu liderin yetkiyi elinde toplayan ve pozisyon gücüne dayalı olarak çalışanları etkilemeye çalıştığı bir organizasyonu ifade etmektedir.",
  },
  {
    id: 63,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderin etik davranış, norm ve standartları sayesinde çalışanlar açıkça neyin doğru veya yanlış olduğunu görebilmektedir.",
      "Liderler çalışanlar için etik karar alma ve problem çözmedeki hareket tarzlarını belirleyen etik değerleri ortaya koymaktadırlar.",
      "Etik değerler, liderin kişilerarası ilişkilerini, örgütsel amaç ve üst yönetimin baskılarını kabul etme şeklini ve performansını da etkilemektedir.",
      "Liderin sahip olduğu değerlere ve etik davranışa yönelik odağın yönetim literatüründe artmasıyla, dönüşümcü ve karizmatik liderlik alanlarındaki akademik çalışmalar eleştirilmeye başlanmış, hizmetkar liderlik ve etik liderlik teorileriyle etik davranışa vurgu yapılmıştır.",
      "Otokratik liderlik; eylem ve ilişkilerde normatif uygunluğa dayanan; izleyicileri iki yönlü iletişim kurma ve ahlaki düşünce biçimine sahip olmada teşvik eden bir liderlik tarzıdır. Etik lider dürüst, güvenilir, adil davranışlar sergileyerek, izleyicilerin güvendiği bir rol model olmaktadır.",
    ],
    correctAnswer:
      "Otokratik liderlik; eylem ve ilişkilerde normatif uygunluğa dayanan; izleyicileri iki yönlü iletişim kurma ve ahlaki düşünce biçimine sahip olmada teşvik eden bir liderlik tarzıdır. Etik lider dürüst, güvenilir, adil davranışlar sergileyerek, izleyicilerin güvendiği bir rol model olmaktadır.",
  },
  {
    id: 64,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Kültür bir toplumun, sosyal olarak iletilmiş davranış biçimlerinin, inançlarının, kurumlarının ve tüm diğer insanlar tarafından yaratılmış ürünlerinin ve düşünülen özelliklerinin toplamı olarak tanımlanmaktadır.",
      "Toplum kültürleri doğrudan örgüt kültürünün belirleyicisi olmasa da üzerinde ciddi etkisi olan önemli bir değişkendir. Bu nedenle toplum kültürleri arasında yapılan çeşitli sınıflandırmalarla, kullanılan yönetim yaklaşımları ve liderlik tarzları açıklanmaya çalışılmaktadır.",
      "Kültür çeşitli boyutlarla ele alınması ve ölçülmesi mümkün olmayan bir kavramdır, bu nedenle literatürde bu kültürlere ilişkin sınıflandırmalar ve kültürel boyutlara ilişkin bir boşluk vardır.",
      "Hofstede toplumların değer, inanç ve paylaşılan deneyimlerine dayalı kendilerine özgü bir kültürlerinin olduğunu ileri sürmekte ve farklı ülkelerdeki IBM şirketlerinde çalışanların algılarını ölçerek, kültürü beş boyut altında değerlendirmektedir.",
      "Hosftede'nin yöntemi pek çok açıdan eleştirilse de kültürle ilgili çalışmalarda halen yaygın olarak kullanılmaktadır.",
    ],
    correctAnswer:
      "Kültür çeşitli boyutlarla ele alınması ve ölçülmesi mümkün olmayan bir kavramdır, bu nedenle literatürde bu kültürlere ilişkin sınıflandırmalar ve kültürel boyutlara ilişkin bir boşluk vardır.",
  },
  {
    id: 65,
    questionText:
      "Aşağıdakilerden hangisi Hosftede'nin kültür boyutları arasında yoktur?",
    options: [
      "Düşük-yüksek güç mesafesi",
      "Klan kültürü",
      "Belirsizlikten kaçınma-kaçınmama",
      "Erillik-dişillik",
      "Bireycilik-kolektivizm",
    ],
    correctAnswer: "Klan kültürü",
  },
  {
    id: 66,
    questionText:
      "Güç mesafesine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Bir toplumun eşitsiz güç dağılımını, otorite ile mesafeyi kabul etme derecesidir.",
      "Yüksek güç mesafesi olan bir toplumda otoriteyi daha fazla kabul edilmekte, düşük güç mesafesi olan bir toplumda ise, gücün sadece belirli gruplarda toplanması, kötü bir şey, zorlama, yolsuzluğa ortam hazırlanması olarak görülür.",
      "Organizasyonlarda güç, yöneticilerin uyguladığı merkezileşme ve kontrol derecesine uzaklıktadır.",
      "Yüksek güç mesafesi olan toplumlardaki şirketlerde, iktidar konumundaki kişilerle (yöneticilerle) çalışanlar arasında formal bir ilişki ve itaate dayalı bir saygı söz konusudur.",
      "Güç mesafesi yüksek örgüt kültürlerinde çalışanlar yöneticileri rahatlıkla sorgulamakta ve karşı gelebilmektedirler.",
    ],
    correctAnswer:
      "Güç mesafesi yüksek örgüt kültürlerinde çalışanlar yöneticileri rahatlıkla sorgulamakta ve karşı gelebilmektedirler.",
  },
  {
    id: 67,
    questionText:
      "GLOBE çalışmasının kendine güven boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Bireylerin başkalarıyla olan ilişkilerinde kendine güvenli, rekabetçi, iddialı, çatışmacı, agresif olma eğilimleridir.",
      "Düşük kendine güven olan toplumlarda baskın ve zorlayıcı davranışlara değer verilmektedir.",
      "Bireyler yüksek kendine güven olan toplumlarda görüş ve düşüncelerini açıkça ifade etmeye çekinmektedirler.",
      "Yüksek kendine güven olan toplumlarda işbirliğine değer verilmekte ve dolayısıyla iletişimde daha dolaylı, kafa tutmayan bir tarz tercih edilmektedir.",
      "Yöneticiler için yüksek kendine güvenmenin olduğu bir organizasyonun anlamı, rekabetçi, herkesin görüşlerini söylemeye istekli olduğu, çatışmanın kaçınılmaz olduğu, ilişkilerden çok sonuçların değerli görüldüğü bir ortamda çalışanları yönlendirmesi gerektiğidir",
    ],
    correctAnswer:
      "Bireyler yüksek kendine güven olan toplumlarda görüş ve düşüncelerini açıkça ifade etmeye çekinmektedirler.",
  },
  {
    id: 68,
    questionText:
      "Performans odaklılığın yüksek olduğu bir işletmeye ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Yüksek performans odaklı toplumlardaki işletmelerin yöneticileri, çalışanlarını maddi ödüller ve para ile motive etmekte, bunun için de açık hedefler koymaktadırlar.",
      "Yüksek performans odaklı işletmeler açıkça bir performans değerleme kriteri belirlemektedirler.",
      "Çalışanlar, performanslarını iyileştirmek için yöneticilerden eğitim ve gelişme fırsatları sunmasını isteyebilmektedir.",
      "Çalışanların istenen performansı ortaya koymalarına yardımcı olmak için yöneticilerin geribildirim vermesi beklemektedir.",
      "Yöneticiler para kazanmaya dayalı hedefleri olan çalışanları motive etmekte güçlük çekebilmektedirler.",
    ],
    correctAnswer:
      "Yöneticiler para kazanmaya dayalı hedefleri olan çalışanları motive etmekte güçlük çekebilmektedirler.",
  },
];

const StratejikYonetim = [
  {
    id: 1,
    questionText:
      "Müşteri taleplerinin çok hızlı değiştiği, öngörülemez trendlerin hakim olduğu, ancak hammadde tedarik sürecinin nispeten istikrarlı çalıştığı bir pazarda faaliyet gösteren yenilikçi bir teknoloji veya moda markasının, rekabet avantajı sağlamak için aşağıdaki tedarik zinciri stratejilerinden hangisini uygulaması en mantıklıdır?",
    options: [
      "Etkin (Verimli) Tedarik Zinciri",
      "Risk Önleyici Tedarik Zinciri",
      "Muhafazakar Tedarik Zinciri",
      "Duyarlı (Tepkisel) Tedarik Zinciri",
      "Yalın Tedarik Zinciri",
    ],
    correctAnswer: "Duyarlı (Tepkisel) Tedarik Zinciri",
  },
  {
    id: 2,
    questionText:
      "Bir işletmenin pazarlama, insan kaynakları ve finansman departmanlarının; üst yönetim tarafından belirlenen genel büyüme ve sektörde maliyet lideri olma hedeflerine ulaşmak amacıyla hazırladıkları günlük ve orta vadeli eylem planları, stratejik hiyerarşide hangi düzeyde sınıflandırılır?",
    options: [
      "Kurumsal Stratejiler",
      "Rekabet (İş Birimi) Stratejileri",
      "İşlevsel (Bölümsel) Stratejiler",
      "Çeşitlendirme Stratejileri",
      "Çekilme Stratejileri",
    ],
    correctAnswer: "İşlevsel (Bölümsel) Stratejiler",
  },
  {
    id: 3,
    questionText:
      "Genellikle aynı büyüklükte iki veya daha fazla işletmenin sermaye alışverişi sonunda tüm kaynaklarını bir araya getirerek ortaya yeni bir işletme çıkarmasına ne ad verilir?",
    options: [
      "Satın alma stratejisi",
      "Birleşme stratejisi",
      "İşbirliği stratejisi",
      "Yönetim sözleşmesi",
      "Lisans anlaşması",
    ],
    correctAnswer: "Birleşme stratejisi",
  },
  {
    id: 4,
    questionText:
      "İşletmeler arasında ortaya çıkan dayanışma ve kaynak birleştirme faaliyetlerinin gerçekleştirildiği strateji aşağıdakilerden hangisidir?",
    options: [
      "Rekabet stratejisi",
      "Farklılaşma stratejisi",
      "Yenilik stratejisi",
      "Stratejik işbirlikleri",
      "Bütünleşme stratejisi",
    ],
    correctAnswer: "Stratejik işbirlikleri",
  },
  {
    id: 5,
    questionText:
      "İşletmelerin markalı ve özellikli mallarının üretimini başka işletmelere yaptırmalarına imkan veren işbirliği anlaşması aşağıdakilerden hangisidir?",
    options: [
      "Know-how anlaşmaları",
      "Outsourcing",
      "Sözleşmeli üretim",
      "Bayilik",
      "Konsorsiyum",
    ],
    correctAnswer: "Sözleşmeli üretim",
  },
  {
    id: 6,
    questionText:
      "İşletmenin kaynaklarının nasıl dağıtılacağı, hangi işlere girilip hangi işlerin terk edileceği, faaliyet alanlarının genişletilip genişletilmeyeceği, başka bir işletme ile birleşilip birleşilmeyeceği gibi konuların ele alındığı stratejik yönetim süreci aşaması aşağıdakilerden hangisidir?",
    options: [
      "Strateji uygulama",
      "Strateji değerleme",
      "Dış çevre analizi",
      "Strateji oluşturma",
      "Stratejilerin seçimi",
    ],
    correctAnswer: "Strateji oluşturma",
  },
  {
    id: 7,
    questionText:
      'Pazar büyüme durumu\'nu bir değişken, "rekabet durumunu" da bir diğer değişken olarak kabul ederek iki boyutlu bir matris geliştiren görüş aşağıdaki düşünürlerden hangisi tarafından ileri sürülmüştür?',
    options: [
      "Thompson - Strickland",
      "C. Hofer",
      "Patel - Younger",
      "Schoffler",
      "Walsh - Mach",
    ],
    correctAnswer: "C. Hofer",
  },
  {
    id: 8,
    questionText:
      "Tüm işletme birimlerinin ihtiyaçlarını ve potansiyellerini dikkate alarak ana şirketin kaynaklarını en iyi şekilde kullanmayı amaçlayan stratejilere ne ad verilir?",
    options: [
      "Uluslararası stratejiler",
      "İşletme stratejileri",
      "Şirket Stratejileri (Kurumsal stratejiler)",
      "Operasyonel stratejiler",
      "Farklılaştırma stratejileri",
    ],
    correctAnswer: "Şirket Stratejileri (Kurumsal stratejiler)",
  },
  {
    id: 9,
    questionText:
      "Üst yönetimin hazırladığı şirket ve işletme stratejilerine uygun olarak orta ve alt yönetim düzeylerince hazırlanıp uygulanan ve daha çok teknik bilgi ve uzmanlık isteyen stratejilere ne ad verilir?",
    options: [
      "Operasyonel stratejiler",
      "Odaklanma Stratejileri",
      "Farklılaştırma Stratejileri",
      "Maliyet Liderliği Stratejileri",
      "Liderlik Stratejileri",
    ],
    correctAnswer: "Operasyonel stratejiler",
  },
  {
    id: 10,
    questionText:
      "Aşağıdakilerden hangisi işletmelerde her yönetim düzeyinde uygulanabilen temel stratejiler arasında yer almaz?",
    options: [
      "Büyüme stratejileri",
      "Küçülme stratejileri",
      "Durağan stratejiler",
      "Karma stratejiler",
      "Kurumsal stratejiler",
    ],
    correctAnswer: "Kurumsal stratejiler",
  },
  {
    id: 11,
    questionText:
      "Aşağıdakilerden hangisi işletmenin tüm faaliyetlerini durdurması ve varlıklarını sona erdirmesi ile ilgili stratejilerdir?",
    options: [
      "Kısmi tasfiye stratejisi",
      "Tasarruf stratejisi",
      "İlişkisiz tek merkezli çeşitlendirme stratejisi",
      "Tam tasfiye stratejisi",
      "Rekabet stratejisi",
    ],
    correctAnswer: "Tam tasfiye stratejisi",
  },
  {
    id: 12,
    questionText:
      "İşletmeyi rakiplerinden farklılaştıran kabiliyet ve kapasiteye ne ad verilir?",
    options: [
      "Rekabet avantajı",
      "Operasyonel plan",
      "İşletme stratejileri",
      "Temel yetenekler",
      "Taktik plan",
    ],
    correctAnswer: "Temel yetenekler",
  },
  {
    id: 13,
    questionText:
      "Olası rakiplerin pazara girişini maliyetli duruma getirmek ve bu sayede sektördeki mevcut işletmeleri rekabetten korumak amacıyla geliştirilen faktörlere ne ad verilir?",
    options: [
      "Ölçek ekonomileri",
      "Pazara giriş engelleri",
      "Tehdit oluşturma",
      "Rekabetçi istihbarat",
      "Değer zinciri yaratma",
    ],
    correctAnswer: "Pazara giriş engelleri",
  },
  {
    id: 14,
    questionText:
      '"İşletme faaliyet veya iş alanında mevcut durumunu koruma amacı" aşağıdaki temel stratejilerden hangisinin tanımıdır?',
    options: ["Durağan", "Büyüme", "Küçülme", "Karma", "Farklılaştırma"],
    correctAnswer: "Durağan",
  },
  {
    id: 15,
    questionText:
      "İşletmelerin maksatlı olarak mevcut iş ve faaliyetlerinden bazılarını sürekli olarak terk etmesi, vazgeçmesi veya durdurması stratejisine ne ad verilir?",
    options: [
      "Tam tasfiye stratejisi",
      "Tasarruf stratejisi",
      "Kısmi tasfiye stratejisi",
      "Maliyet liderliği stratejisi",
      "Bağımlı küçülme stratejisi",
    ],
    correctAnswer: "Kısmi tasfiye stratejisi",
  },
  {
    id: 16,
    questionText:
      "Aşağıdakilerden hangisi strateji oluşturma kapsamında yer almaz?",
    options: [
      "Vizyon ve misyonun oluşturulması",
      "Stratejilerin değerlenmesi",
      "İşletme dışından kaynaklanan fırsat ve tehditlerin belirlenmesi",
      "İşletme içinden kaynaklanan güçlü ve zayıf yönlerin belirlenmesi SWOT",
      "Uzun dönemli amaçların saptanması",
    ],
    correctAnswer: "Stratejilerin değerlenmesi",
  },
  {
    id: 17,
    questionText:
      "Boston Danışma Grubu İşbirimleri Portföy Yönetim Matrisinde hem pazarın büyüme hızı, hem de göreceli pazar payı düşük olan işletmelere ne ad verilir?",
    options: [
      "Yıldızlar",
      "Belirsizler",
      "Nakit depoları",
      "Otonomlar",
      "İtler (Köpekler)",
    ],
    correctAnswer: "İtler (Köpekler)",
  },
  {
    id: 18,
    questionText:
      "Boston Danışma Grubu İşbirimleri Portföy Yönetim Matrisinde göreceli pazar payının belirlenmesinde kullanılan formül aşağıdakilerden hangisidir?",
    options: [
      "İşbiriminin satışları/Sektörde toplam satışlar",
      "İşbiriminin cari yıl satışları/Sektör ortalama satışları",
      "İşbiriminin satışları/Esas rakibin satışları",
      "Sektör satışları/İşbiriminin satışları",
      "Sektör satışları/Sektör ortalama satışları",
    ],
    correctAnswer: "İşbiriminin satışları/Esas rakibin satışları",
  },
  {
    id: 19,
    questionText:
      '"Beş Güç Modeli" ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      "Örgütün iş çevresinin analizinde kullanılır",
      "Modelde yer alan faktörlerin güçlenmesi işletmenin karlılığını artırır.",
      "Modelde yer alan faktörlerin şiddeti azaldıkça işletme için tehdit oluşturma olasılığı artar.",
      'D) Modeli oluşturan beş faktörden biri "çalışanların rekabet gücü"dür.',
      'E) Modeli oluşturan beş faktörden biri "teknolojik yeniliklerin varlığı"dır.',
    ],
    correctAnswer: "Örgütün iş çevresinin analizinde kullanılır",
  },
  {
    id: 20,
    questionText:
      "İşletmenin amaçlarına nasıl ulaşacağını belirleyen, rakiplerin faaliyetlerinin izlenmesini içeren, nihai sonuca odaklı, uzun dönemli bakış açısına dayalı, dinamik kararlar topluluğuna ne ad verilir?",
    options: [
      "Taktik",
      "Yönetim",
      "Strateji",
      "Kısa dönemli planlama",
      "Stratejik düşünme",
    ],
    correctAnswer: "Strateji",
  },
  {
    id: 21,
    questionText:
      "İşletmenin sahip olduğu yeteneklerin başka alternatif yetenekler kullanılarak gerçekleştirilememesi ile ilgili olan temel yetenek kriteri aşağıdakilerden hangisidir?",
    options: [
      "Nadir olması",
      "Taklit edilemez olması",
      "Değerli olması",
      "Güncel olması",
      "İkame edilemez olması",
    ],
    correctAnswer: "İkame edilemez olması",
  },
  {
    id: 22,
    questionText:
      "Aşağıdakilerden hangisi yeni işletmelerin pazara girişini zorlaştıran nedenlerden biri değildir?",
    options: [
      "Pazardaki mevcut firmaların ölçek ekonomisine sahip olması",
      "Pazardaki işletmelerin sadık müşteri grubuna sahip olması",
      "Pazara yeni girecek işletmenin pazardaki mevcut ürünü daha düşük fiyatla satabilmesi",
      "Pazardaki işletmelerin etkili dağıtım sistemine sahip olması",
      "Pazara girişte yüksek miktarda sermayeye ihtiyaç duyulması",
    ],
    correctAnswer:
      "Pazara yeni girecek işletmenin pazardaki mevcut ürünü daha düşük fiyatla satabilmesi",
  },
  {
    id: 23,
    questionText:
      "Aşağıdakilerden hangisi örgütsel misyon içerisinde yer alabilecek unsurlardan biri değildir?",
    options: [
      "Örgütün rekabet stratejileri",
      "Örgütün faaliyet alanı",
      "Örgütün değer ve inançları",
      "Örgütün ilişkide bulunduğu kitleler",
      "Örgütün ürettiği ürünler",
    ],
    correctAnswer: "Örgütün rekabet stratejileri",
  },
  {
    id: 24,
    questionText:
      'Aşağıdakilerden hangisi işletmenin genel çevresinde yer alan "politik faktörler" içinde yer almaz?',
    options: [
      "Adil rekabet kararları",
      "Enflasyon oranları",
      "AR-GE destekleri",
      "Patent yasaları",
      "Vergi düzenlemeleri",
    ],
    correctAnswer: "Enflasyon oranları",
  },
  {
    id: 25,
    questionText:
      "Aşağıdaki durumlardan hangisinde tedarikçilerin alıcılara karşı pazarlık gücü yüksektir?",
    options: [
      "Bir çok tedarikçinin varlığı söz konusuysa",
      "Yeterli düzeyde ikame tedarik kaynağı mevcutsa",
      "Tedarik edilen ürünlerin değiştirme maliyetleri düşükse",
      "Alıcının yaptığı satın almalar, tedarikçinin satışlarının büyük bölümünü oluşturuyorsa",
      "Tedarikçinin ürünlerinin alıcının pazardaki başarısı için önemliyse",
    ],
    correctAnswer:
      "Tedarikçinin ürünlerinin alıcının pazardaki başarısı için önemliyse",
  },
  {
    id: 26,
    questionText:
      "Aşağıdakilerden hangisi amaçların oluşturulmasında dikkate alınması gereken ilkelerden biri değildir?",
    options: [
      "Ölçülebilir olması",
      "Gerçekçi olması",
      "Durağan olması",
      "Motive edici olması",
      "Uyumlu olması",
    ],
    correctAnswer: "Durağan olması",
  },
  {
    id: 27,
    questionText:
      "İşletmelerin amaçlarını gerçekleştirmeye çalışırken etkiledikleri ve etkilendikleri birey ve gruplara ne ad verilir?",
    options: ["Rakipler", "Çalışanlar", "Paydaşlar", "Müşteriler", "Medya"],
    correctAnswer: "Paydaşlar",
  },
  {
    id: 28,
    questionText:
      '"Biz ne olmak istiyoruz" sorusunun cevabı aşağıdakilerden hangisini ifade eder?',
    options: ["Vizyon", "Amaçlar", "Fırsatlar", "Hedefler", "Misyon"],
    correctAnswer: "Vizyon",
  },
  {
    id: 29,
    questionText:
      '"İşletme olarak bizim işimiz nedir?" sorusunun cevabını veren kavram aşağıdakilerden hangisidir?',
    options: ["Vizyon", "Amaçlar", "Misyon", "Fırsatlar", "Görev tanımları"],
    correctAnswer: "Misyon",
  },
  {
    id: 30,
    questionText:
      "Aşağıdakilerden hangisi Porter yaklaşımının temel katkılarından biri değildir?",
    options: [
      "Beş rekabetçi güç analizi",
      "Jenerik rekabet stratejileri",
      "Değer zinciri yaklaşımı",
      "Öğrenen örgüt disiplinleri",
      "Rekabetçi konumlandırma vurgusu",
    ],
    correctAnswer: "Öğrenen örgüt disiplinleri",
  },
  {
    id: 31,
    questionText:
      "Aşağıdakilerden hangisi Değer Zincirini oluşturan temel faaliyetler arasında yer almaz?",
    options: ["İç lojistik", "İşlemler", "Dış lojistik", "Tedarik", "Servis"],
    correctAnswer: "Tedarik",
  },
  {
    id: 32,
    questionText:
      "Mintzberg'in sınıflandırmasına göre başlangıçta planlanmayan ancak süreçte ortaya çıkan strateji türü hangisidir?",
    options: [
      "Amaçlanan strateji",
      "Kurumsal strateji",
      "Gerçekleşen strateji",
      "Oluşan strateji",
      "Fonksiyonel strateji",
    ],
    correctAnswer: "Oluşan strateji",
  },
  {
    id: 33,
    questionText:
      '"Strateji doğru işi seçer, plan seçilen işi uygular" ifadesine göre aşağıdakilerden hangisi plan örneğidir?',
    options: [
      "Premium müşteri segmentine odaklanma kararı",
      "Farklılaşma stratejisiyle rekabet etme",
      "Q3'te 20 kurumsal müşteri ziyareti ve bütçe ataması",
      "Sektörde maliyet liderliği seçimi",
      "Hangi pazarda yarışılacağının belirlenmesi",
    ],
    correctAnswer: "Q3'te 20 kurumsal müşteri ziyareti ve bütçe ataması",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi uyumlu bir amaç-hedef-strateji setidir?",
    options: [
      "Amaç: Kârlılık artışı / Hedef: Instagram takipçisi +50% / Strateji: çekiliş",
      "Amaç: İş seyahati segmentinde güçlenme / Hedef: Hafta içi doluluk %62 -> %75 / Strateji: kurumsal müşteri odaklı farklılaşma",
      "Amaç: Marka imajı / Hedef: Elektrik giderini azaltma / Strateji: depo alanı kiralama",
      "Amaç: Verimlilik / Hedef: Yeni logo / Strateji: sosyal medya paylaşımı",
      "Amaç: Sürdürülebilirlik / Hedef: Fiyat indirimi / Strateji: yoğun promosyon",
    ],
    correctAnswer:
      "Amaç: İş seyahati segmentinde güçlenme / Hedef: Hafta içi doluluk %62 -> %75 / Strateji: kurumsal müşteri odaklı farklılaşma",
  },
  {
    id: 35,
    questionText:
      'Aşağıdakilerden hangisi "strateji-politika" ayrımını en doğru ifade eder?',
    options: [
      "Strateji iç kuralları, politika dış çevreyi belirler",
      "Strateji ve politika eş anlamlıdır",
      "Strateji dış çevrede nasıl rekabet edileceğini, politika karar ilkelerini belirler",
      "Politika stratejiden daha dinamiktir",
      "Politika sadece finans birimini ilgilendirir",
    ],
    correctAnswer:
      "Strateji dış çevrede nasıl rekabet edileceğini, politika karar ilkelerini belirler",
  },
  {
    id: 36,
    questionText:
      "Peters ve Waterman yaklaşımında stratejik başarının kilit unsuru hangisidir?",
    options: [
      "Sadece sektör analizi",
      "Sadece portföy matrisi",
      "Uygulama kalitesi, kültür, liderlik ve müşteri yakınlığı",
      "Sadece yazılı plan dokümanı",
      "Sadece düşük maliyet",
    ],
    correctAnswer: "Uygulama kalitesi, kültür, liderlik ve müşteri yakınlığı",
  },
  {
    id: 37,
    questionText:
      "Aşağıdakilerden hangisi strateji ile taktik arasındaki farkı doğru verir?",
    options: [
      "Strateji kısa vadeli, taktik uzun vadelidir",
      "Strateji iç süreç, taktik dış çevredir",
      "Strateji yön ve tercih; taktik kısa vadeli uygulama hamlesidir",
      "Taktik üst yönetim, strateji alt yönetim işidir",
      "İkisi tamamen aynıdır",
    ],
    correctAnswer:
      "Strateji yön ve tercih; taktik kısa vadeli uygulama hamlesidir",
  },
  {
    id: 38,
    questionText: "Aşağıdakilerden hangisi strateji ifadesidir?",
    options: [
      "Bu hafta sosyal medya reklamı başlatmak",
      "Ay sonuna kadar 3 personel almak",
      "Kitle turizmi yerine yüksek harcama segmentine odaklanmak",
      "Günlük doluluk raporu hazırlamak",
      "Bütçeyi üç aylık revize etmek",
    ],
    correctAnswer: "Kitle turizmi yerine yüksek harcama segmentine odaklanmak",
  },
  {
    id: 39,
    questionText:
      '"Kim, neyi, ne zaman, hangi kaynakla yapacak?" sorusu en çok hangi kavrama aittir?',
    options: ["Vizyon", "Misyon", "Strateji", "Plan", "Politika"],
    correctAnswer: "Plan",
  },
  {
    id: 40,
    questionText: "Aşağıdakilerden hangisi amaç ifadesidir?",
    options: [
      "6 ayda satışları %12 artırmak",
      "2027'de premium segmentte güçlü marka olmak",
      "Bu ay 30 kurumsal ziyaret yapmak",
      "Haftalık kampanya bütçesini 50.000 TL'ye çıkarmak",
      "Check-in süresini 4 dakikaya indirmek",
    ],
    correctAnswer: "2027'de premium segmentte güçlü marka olmak",
  },
  {
    id: 41,
    questionText:
      'Aşağıdaki senaryolardan hangisi Andy Grove\'un "Stratejik Kırılma Noktası"nı en iyi tarif eder?',
    options: [
      "Şirketin yıllık satış hedeflerine ulaşamaması.",
      "Rakip bir firmanın yeni bir reklam kampanyası başlatması.",
      "Sektör kurallarının, müşteri beklentilerinin ve rekabetin artık geri dönülemez şekilde değiştiği an.",
      "Ham madde fiyatlarında yaşanan %5'lik bir artış.",
      "Şirket CEO'sunun emekli olması.",
    ],
    correctAnswer:
      "Sektör kurallarının, müşteri beklentilerinin ve rekabetin artık geri dönülemez şekilde değiştiği an.",
  },
  {
    id: 42,
    questionText: "Strateji-operasyon ayrımı için en doğru ifade hangisidir?",
    options: [
      "İkisi de aynı anlama gelir",
      "Operasyon yönü belirler, strateji günlük işleri yürütür",
      "Strateji yön/tercih üretir; operasyon süreçleri etkin işletir",
      "Operasyon sadece üst yönetimin işidir",
      "Strateji sadece alt kademe işidir",
    ],
    correctAnswer:
      "Strateji yön/tercih üretir; operasyon süreçleri etkin işletir",
  },
  {
    id: 43,
    questionText:
      "Aşağıdakilerden hangisi Porter'ın Beş Rekabetçi Güç modelinde yer almaz?",
    options: [
      "Mevcut rakipler arasındaki rekabet",
      "Tedarikçilerin pazarlık gücü",
      "Devletin doğrudan fiyat belirleme gücü",
      "İkame ürünlerin tehdidi",
      "Yeni girenlerin tehdidi",
    ],
    correctAnswer: "Devletin doğrudan fiyat belirleme gücü",
  },
  {
    id: 44,
    questionText:
      "Hamel ve Prahalad'ın stratejik yönetime en önemli katkısı aşağıdakilerden hangisidir?",
    options: [
      "Beş Güç modelini geliştirmek",
      "Stratejik kırılma noktası kavramını ortaya koymak",
      "Temel yetenek (core competence) yaklaşımını geliştirme",
      "Fiyat liderliği stratejisini oluşturmak",
      "Pazar payı analizini geliştirmek",
    ],
    correctAnswer: "Temel yetenek (core competence) yaklaşımını geliştirme",
  },
  {
    id: 45,
    questionText: "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
    options: [
      "Porter - Sektör ve rekabet analizi",
      "Barney - Kaynak temelli yaklaşım",
      "Hamel & Prahalad - Temel yetenekler",
      "Slywotzky - Değer göçü ve iş modeli",
      "Andy Grove - Beş Güç modeli",
    ],
    correctAnswer: "Andy Grove - Beş Güç modeli",
  },
  {
    id: 46,
    questionText:
      "Aşağıdakilerden hangisi Endüstriyel Örgüt (I/O) yaklaşımının temel varsayımını en doğru şekilde yansıtır?",
    options: [
      "İşletme performansını yalnızca içsel kaynaklar belirler",
      "Rekabet avantajı işletmenin kültürel yapısından doğar",
      "Sektör yapısı ve rekabet koşulları firma performansını önemli ölçüde belirler",
      "İşletme performansı tamamen yöneticilerin sezgilerine bağlıdır",
      "Başarı yalnızca teknolojik yeniliklere bağlıdır",
    ],
    correctAnswer:
      "Sektör yapısı ve rekabet koşulları firma performansını önemli ölçüde belirler",
  },
  {
    id: 47,
    questionText:
      "Yapı-Davranış-Performans (SCP) paradigmasına göre, bir sektörde faaliyet gösteren firma sayısının çok az olması ve giriş engellerinin yüksekliği öncelikle hangi aşamayı belirler ve bu durum performansı nasıl etkiler?",
    options: [
      "Davranış aşamasını belirler; aşırı kârlılığa yol açar.",
      "Yapı aşamasını belirler; fiyat rekabetinin azalmasına ve yüksek kârlılığa zemin hazırlar.",
      "Performans aşamasını belirler; operasyonel verimliliği zorunlu kılar.",
      "Davranış aşamasını belirler; ürün farklılaştırmasını imkansız hale getirir.",
      "Yapı aşamasını belirler; ancak performans üzerinde doğrudan bir etkisi yoktur.",
    ],
    correctAnswer:
      "Yapı aşamasını belirler; fiyat rekabetinin azalmasına ve yüksek kârlılığa zemin hazırlar.",
  },
  {
    id: 48,
    questionText:
      "I/O Teorisi ile RBV arasındaki temel farkı en iyi hangi seçenek açıklar?",
    options: [
      'A) I/O "ne yapıldığına", RBV "nasıl yapıldığına" odaklanır.',
      "I/O sektörel çekiciliği (dış çevre), RBV ise içsel yetenekleri (kaynaklar) temel alır.",
      "I/O kısa vadeli, RBV uzun vadeli planlar için kullanılır.",
      "I/O sadece üretim, RBV ise hizmet sektörü için geçerlidir.",
      "Aralarında temel bir fark yoktur; her ikisi de dış çevreyi önceler.",
    ],
    correctAnswer:
      "I/O sektörel çekiciliği (dış çevre), RBV ise içsel yetenekleri (kaynaklar) temel alır.",
  },
  {
    id: 49,
    questionText:
      "Bir firmanın sahip olduğu patentli bir teknoloji, sektördeki diğer tüm firmalar tarafından kolayca lisanslanabiliyorsa, RBV perspektifinden bu kaynak için ne söylenebilir?",
    options: [
      "Sürdürülebilir rekabet avantajı sağlar.",
      "Değerli (Valuable) olsa bile nadir (Rare) olmadığı için sadece rekabet eşitliği sağlar.",
      "Taklit edilemez (Inimitable) bir kaynaktır.",
      "Şirketin kâr bölgesini sonsuza dek korur.",
      "10X kuvvetine karşı tek savunma hattıdır.",
    ],
    correctAnswer:
      "Değerli (Valuable) olsa bile nadir (Rare) olmadığı için sadece rekabet eşitliği sağlar.",
  },
  {
    id: 50,
    questionText:
      'Slywotzky\'nin "İş Tasarımı" modelinde yer alan "Müşteri Seçimi" bileşeni hakkında hangisi en doğru ifadedir?',
    options: [
      "Şirketin ulaşabileceği her müşteriye ürün satma çabasıdır.",
      "Pazardaki en ucuz ürünü talep eden kitleye odaklanmaktır.",
      "Hangi müşterilere hizmet verilmeyeceğinin belirlendiği stratejik bir eleme sürecidir.",
      "Sadece en yüksek geliri olan müşterileri seçmektir.",
      "Rakip firmaların müşterilerini çalma stratejisidir.",
    ],
    correctAnswer:
      "Hangi müşterilere hizmet verilmeyeceğinin belirlendiği stratejik bir eleme sürecidir.",
  },
  {
    id: 51,
    questionText:
      "Aşağıdakilerden hangisi işletmelerin stratejik işbirliği yapma amaçları arasında yer almaz?",
    options: [
      "Potansiyel rakiplerle işbirliği yaparak tehdit oluşturmalarını önlemek",
      "Tek başlarına geliştiremedikleri tamamlayıcı ürünleri/hizmetleri dışarıdan temin etmek",
      "İşbirliğinden doğan sinerji ile değer yaratmak",
      "Mevcut pazarlarda büyümek",
      "Rakip işletmenin mülkiyetini ele geçirmek",
    ],
    correctAnswer: "Rakip işletmenin mülkiyetini ele geçirmek",
  },
  {
    id: 52,
    questionText:
      "Stratejik değerlendirme ve kontrol sürecinde 'Standartların Belirlenmesi' aşamasıyla ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "Standartlar, çalışanların tepkisini çekmemek için her zaman ulaşılabilecek en düşük seviyede belirlenmelidir.",
      "Standartlar bir kez belirlendikten sonra, dış çevre koşulları ne kadar değişirse değişsin şirket tarihi boyunca asla revize edilmemelidir.",
      "Etkin bir stratejik kontrol için belirlenen standartların hem ölçülebilir (nicel/nitel) hem de işletmenin stratejik hedefleriyle doğrudan bağ kurması gerekir.",
      "Stratejik uyumun sağlanması için tüm departmanlara sektöre bakılmaksızın tamamen aynı operasyonel standartlar dayatılmalıdır.",
      "Çağdaş yaklaşımda standartlar, sadece geçmiş dönem muhasebe verilerinin aritmetik ortalaması alınarak statik şekilde kurulur.",
    ],
    correctAnswer:
      "Etkin bir stratejik kontrol için belirlenen standartların hem ölçülebilir (nicel/nitel) hem de işletmenin stratejik hedefleriyle doğrudan bağ kurması gerekir.",
  },
  {
    id: 53,
    questionText:
      "PIMS (Profit Impact of Market Strategy) Analizi ile ilgili olarak aşağıda verilen ifadelerden hangisi doğrudur?",
    options: [
      "Yeni kurulan start-up'ların ve yüksek teknoloji şirketlerinin stratejik kontrolünde en yüksek etkinliğe sahip yöntemdir.",
      "İşletmenin kendi performansını dünya genelindeki binlerce gerçek şirketin ampirik verileri ve endüstri standartları ile kıyaslamasını sağlayan bir benchmarking aracıdır.",
      "Strateji ile performans arasında doğrusal olmayan, tamamen sezgisel bağlar kurar.",
      "İşletmelerin finansal verilerini anlık (real-time) olarak takip eden bir ERP yazılımıdır.",
      "Sadece müşteri memnuniyeti ve sürdürülebilirlik gibi finansal olmayan değişkenleri ölçer.",
    ],
    correctAnswer:
      "İşletmenin kendi performansını dünya genelindeki binlerce gerçek şirketin ampirik verileri ve endüstri standartları ile kıyaslamasını sağlayan bir benchmarking aracıdır.",
  },
  {
    id: 54,
    questionText:
      "Stratejik kontrolde kullanılan 'Açıklık (Gap) Analizi' yöneticilere tam olarak hangi analitik çıktıyı sağlar?",
    options: [
      "İşletmenin mevcut performans düzeyi ile gelecekte ulaşmayı hedeflediği stratejik konum arasındaki 'makası' (boşluğu) ve gereken kaynak ihtiyacını gösterir.",
      "Sadece pazarlama departmanının reklam harcamalarındaki bütçe firesini kuruşu kuruşuna hesaplar.",
      "Sektördeki en büyük rakibin gizli finansal kaynaklarını ve hammadde tedarik zinciri maliyetlerini listeler.",
      "Departman çalışanlarının birbirleriyle olan iletişim kopukluklarının haritasını verir.",
      "Ürünün fabrikadan çıktıktan sonra müşteriye ulaşana kadar geçen lojistik süresini saniye bazında ölçer.",
    ],
    correctAnswer:
      "İşletmenin mevcut performans düzeyi ile gelecekte ulaşmayı hedeflediği stratejik konum arasındaki 'makası' (boşluğu) ve gereken kaynak ihtiyacını gösterir.",
  },
  {
    id: 55,
    questionText:
      "Balanced Scorecard (Kurumsal Karne) yaklaşımında, 'Eğitimli personelin süreçleri İyileştirmesi, hatasız süreçlerin müşteri memnuniyetini artırması ve bunun da finansal başarıyı getirmesi' döngüsü modelin hangi stratejik özelliğini kanıtlar?",
    options: [
      "Maliyet merkezlerinin bütçe sapmalarını esnek olarak hesapladığını",
      "Pazar payı ile karlılık arasındaki ampirik sektörel ilişkileri ölçtüğünü",
      "Sadece geçmişe odaklı finansal rasyoları temel aldığını",
      "Dört boyut arasında hiyerarşik bir neden-sonuç ilişkisi barındırdığını",
      "Yalnızca üst düzey yöneticilerin performansını puanlamaya yaradığını",
    ],
    correctAnswer:
      "Dört boyut arasında hiyerarşik bir neden-sonuç ilişkisi barındırdığını",
  },
  {
    id: 56,
    questionText:
      "Bir e-ticaret platformunun üst yönetimi, stratejik değerlendirme sürecinde 'Yapay Zeka Destekli Kişiselleştirilmiş Öneri Motoru' geliştirmeyi hedeflemektedir. Bu hedef, stratejik kontrol hiyerarşisinde hangi kavramın altında incelenmelidir?",
    options: [
      "Maliyet Merkezi bütçe varyans analizi",
      "Geleneksel kontrolün tek döngülü öğrenme mekanizması",
      "Stratejik Sıçrama Faktörleri ve Kontrolü",
      "PIMS Analizi ampirik pazar payı sabitlemesi",
      "Rumelt'in Tutarlılık (Consistency) kriterinin pasif denetimi",
    ],
    correctAnswer: "Stratejik Sıçrama Faktörleri ve Kontrolü",
  },
  {
    id: 57,
    questionText:
      "Aşağıdaki işletme sorumluluklarından hangisi işletmelerin varoluşu gereği yerine getirmesi gereken birincil sorumluluktur?",
    options: [
      "Yasal sorumluluk",
      "Gönüllü sorumluluk",
      "Sosyal sorumluluk",
      "Ahlaki sorumluluk",
      "Ekonomik sorumluluk",
    ],
    correctAnswer: "Ekonomik sorumluluk",
  },
  {
    id: 58,
    questionText:
      "Faaliyetleri, dünya çapında, koordine edilmiş bir şekilde uyumlaştırma ya da entegre etme eğilimi aşağıdakilerden hangisi ile ifade edilir?",
    options: [
      "Bölgeselleşme",
      "Küreselleşme",
      "Yerelleşme",
      "Uluslararasılaşma",
      "Ticarileşme",
    ],
    correctAnswer: "Küreselleşme",
  },
  {
    id: 59,
    questionText:
      "Tekstil işiyle uğraşan bir firmanın üretim yapmak için kullandığı kumaş veya ipliği başka firmalardan almak yerine kendinin üretmeye başlaması aşağıdakilerden hangisine örnek teşkil eder?",
    options: [
      "İleriye doğru dikey bütünleşme",
      "Yatay bütünleşme",
      "İlişkisiz çeşitlendirme",
      "İlişkili çeşitlendirme",
      "Geriye doğru dikey bütünleşme",
    ],
    correctAnswer: "Geriye doğru dikey bütünleşme",
  },
  {
    id: 60,
    questionText:
      "Hangi tür stratejiyi uygulayan bir firma değer zincirinde faaliyet gösterdiği aşamalardan daha sonraki aşamalara yönelir?",
    options: [
      "Geriye doğru dikey bütünleşme",
      "Bağlantılı ilişkisizi çeşitlendirme",
      "İleri doğru dikey bütünleşme",
      "Zorunlu ilişkisiz çeşitlendirme",
      "Pazara nüfuz",
    ],
    correctAnswer: "İleri doğru dikey bütünleşme",
  },
  {
    id: 61,
    questionText:
      "Üretim ve yönetim süreçlerinin iyileştirilmesinde kullanılabilecek, yeni üretim metotları, yeni yönetim yaklaşımları ve yeni teknolojilerin uygulanmasını içeren yenilik türü aşağıdakilerden hangisidir?",
    options: [
      "Ürün yeniliği",
      "Stratejik yenilik",
      "Davranışsal yenilik",
      "Pazarlama yeniliği",
      "Süreç yeniliği",
    ],
    correctAnswer: "Süreç yeniliği",
  },
  {
    id: 62,
    questionText:
      "I. Müşteriler\nII. Yasal unsurlar\nIII. Tedarikçiler\nYukarıdakilerden hangisi ya da hangileri yakın çevre unsurları kapsamına girmektedir?",
    options: ["Yalnız I", "I ve III", "II ve III", "I, II ve III", "I ve II"],
    correctAnswer: "I ve III",
  },
  {
    id: 63,
    questionText:
      "İşletmenin ana mal veya hizmetlerinin tasarımına ve geliştirilmesine yönelik olarak gerçekleştirilen araştırma ve geliştirme faaliyetleri aşağıdakilerden hangisi ile ifade edilmektedir?",
    options: [
      "Temel araştırma",
      "Fonksiyonel araştırma",
      "Süreç iyileştirme araştırması",
      "Ticari amaçlı araştırma",
      "Uygulamalı araştırma",
    ],
    correctAnswer: "Ticari amaçlı araştırma",
  },
  {
    id: 64,
    questionText:
      "Müşterilerin yeni ürünlere yönelmeye başlaması, ürünü üreten firma sayısında ve firmaların satışında, kârlılığında sürekli bir azalma görülmesi endüstrinin hangi yaşam döneminde yaşanır?",
    options: ["Giriş", "Olgunluk", "Düşüş", "Büyüme", "Sıçrama"],
    correctAnswer: "Düşüş",
  },
  {
    id: 65,
    questionText:
      "Johnson and Johnson firmasının 1982 yılında ürettiği ağrı kesicilerinden birine bulaşan siyanür yüzünden ölümlerle sonuçlanan bir krizle karşı karşıya kalmıştır. Firma bu durum karşısında işletme prensiplerinde yer alan felsefeden hareket etmiş ve testlerin, geri kalan kapsüllerin güvenli olduğuna dair olumlu sonuçlar vermesine rağmen ürünü gönüllü olarak piyasadan toplatmıştır.\nYukarıda yer alan olay stratejik yön belirleme unsurlarından hangisiyle ilgilidir?",
    options: ["Değerler", "Vizyon", "Misyon", "Amaç", "Hedef"],
    correctAnswer: "Değerler",
  },
  {
    id: 66,
    questionText:
      "Üretilen ürünleri bir araya getirme, depolama ve müşterilere dağıtma ile ilgili faaliyetler değer zincirinin temel faaliyetlerinin hangi aşamasında yapılır?",
    options: [
      "Üretim",
      "Pazarlama ve satış",
      "İç lojistik",
      "Dış lojistik",
      "Satış sonrası hizmetler",
    ],
    correctAnswer: "Dış lojistik",
  },
  {
    id: 67,
    questionText:
      "Pazar bölümlendirme ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Bir pazar bölümüne ürün üretmek, uzmanlaşma sebebiyle yüksek maliyetle sonuçlanır.",
      "Her bir pazar bölümünde başarıyı etkileyen faktörler değişebilir.",
      "Aynı endüstrideki firmalar, farklı stratejiler uygulayarak başarılı olabilir.",
      "Müşteri ihtiyaçlarını yakından tanıma imkânı sağlar.",
      "Belirli bir ürünün müşterilerinin ortak özellikleri açıklanabilir.",
    ],
    correctAnswer:
      "Bir pazar bölümüne ürün üretmek, uzmanlaşma sebebiyle yüksek maliyetle sonuçlanır.",
  },
  {
    id: 68,
    questionText:
      "Özel bir amaç dizisini gerçekleştirmek için tasarlanan, geniş kapsamlı faaliyetler dizisini içeren tek kullanımlı plana ne ad verilir?",
    options: ["Taktik", "Misyon", "Vizyon", "Program", "Politika"],
    correctAnswer: "Program",
  },
  {
    id: 69,
    questionText:
      "I. Vizyonu diğerlerine anlatabilme yeteneği\nII. Liderin vizyon paylaşımını yazılı ve sözlü iletişimle sınırlı tutması\nIII. Vizyonu, farklı liderlik durumlarına ya da ortamlarına uygun şekilde genişletebilmek\nYukarıdakilerden hangisi ya da hangileri vizyoner liderliğin özellikleri arasında yer alır?",
    options: ["Yalnız I", "I ve II", "I ve III", "I, II ve III", "II ve III"],
    correctAnswer: "I ve III",
  },
  {
    id: 70,
    questionText:
      "Aşağıdakilerden hangisi bir firmanın yetenekleri arasında sayılmaktadır?",
    options: [
      "Firmanın şöhreti",
      "Telif hakları",
      "Mülkiyet hakları",
      "Ticari sırlar",
      "Değişimi yönetme",
    ],
    correctAnswer: "Değişimi yönetme",
  },
  {
    id: 71,
    questionText:
      "İşletmelerin, yenilikte ilk olan işletmelerin ürünlerinin hatalarını düzeltmesi ya da yeni fonksiyonlar eklemesi yenilikçi işletme stratejilerinden hangisi ile açıklanır?",
    options: [
      "Saldırgan Strateji",
      "Savunma Stratejisi",
      "Geleneksel Stratejiler",
      "Fırsatları İzleme Stratejisi",
      "Bağımlı Stratejiler",
    ],
    correctAnswer: "Savunma Stratejisi",
  },
  {
    id: 72,
    questionText:
      "Değerlerle ilgili olarak aşağıdakilerden hangisi söylenemez?",
    options: [
      "Değerler çalışanların davranışlarının benzeşmesine yol açabilir.",
      "Değerler örgütlerde davranışları değerlendirmede yol gösterici rol oynar.",
      "Her örgüt; özelliği, kaynak ve yeteneği ne olursa olsun aynı değerlere sahiptir.",
      "Günümüzde tüm örgütler için ortak payda oluşturabilecek değerlerden bazıları dürüstlük, şeffaflık, sorumluluktur.",
      "Değerler zaman içerisinde nispeten kalıcıdır.",
    ],
    correctAnswer:
      "Her örgüt; özelliği, kaynak ve yeteneği ne olursa olsun aynı değerlere sahiptir.",
  },
  {
    id: 73,
    questionText:
      "Aşağıdakilerden hangisi stratejik kontrol faaliyetleri gerçekleştirmenin zorluklarından biri değildir?",
    options: [
      "Geleceği doğru tahmin etmek zorlaşmıştır.",
      "Kesin planlama yapılabilecek zaman aralığı daralmaktadır.",
      "Çevresel karmaşıklık düzeyi artmıştır.",
      "Dikkate alınması gereken değişken sayısı azalmıştır.",
      "Örgütleri etkileyen yerel ve uluslararası olayların sayısı artmıştır.",
    ],
    correctAnswer: "Dikkate alınması gereken değişken sayısı azalmıştır.",
  },
  {
    id: 74,
    questionText:
      '"Eğer belirli bir miktarın üzerinde satış gerçekleştirirsen sana araba alırım." şeklindeki ifade aşağıdaki liderlik yaklaşımlarından hangisi ile özdeşleşmektedir?',
    options: [
      "Etkileşimci liderlik",
      "Stratejik liderlik",
      "Mikro liderlik",
      "Dönüştürücü liderlik",
      "Vizyoner liderlik",
    ],
    correctAnswer: "Etkileşimci liderlik",
  },
  {
    id: 75,
    questionText:
      "Tüm şirket çalışanları, birimleri, süreçleri ve teknolojisinin müşteri istek ve ihtiyaçlarındaki değişime karşı hassas olmasını ve bu noktadaki yeni talepleri uygulamaya geçirebilmesini öngören üretim sistemi aşağıdakilerden hangisidir?",
    options: [
      "Matriks strateji",
      "Kitlesel özel üretim stratejisi",
      "Kitlesel üretim stratejisi",
      "Sürekli iyileştirme stratejisi",
      "Ürün stratejisi",
    ],
    correctAnswer: "Kitlesel özel üretim stratejisi",
  },
  {
    id: 76,
    questionText:
      "Tedarikçinin pazarlık gücü aşağıdaki durumların hangisinde artar?",
    options: [
      "Endüstriye az sayıda tedarikçinin hâkim olması",
      "Tedarikçinin ürünlerinin müşteri için önemli bir girdi olmaması",
      "Endüstrideki firmaların tedarikçinin ürünleri için önemli bir müşteri olarak görülmesi",
      "Tedarikçilerin ikame malların tehdidi altında olması",
      "Tedarikçilerin yüksek ölçüde farklılaştırılmış ürünler üretmemesi",
    ],
    correctAnswer: "Endüstriye az sayıda tedarikçinin hâkim olması",
  },
];
const KalkinmaEkonomisi = [
  // ===================== 36-39 =====================
  {
    id: 1,
    questionText:
      "Bir ülkede belli bir dönemde üretilen nihai mal ve hizmet miktarındaki artış neyi gösterir?",
    options: [
      "İktisadi kalkınma",
      "Nominal milli gelir",
      "İktisadi büyüme",
      "Satın alma gücü",
      "İstihdam düzeyini",
    ],
    correctAnswer: "İktisadi büyüme",
  },
  {
    id: 2,
    questionText:
      "Aşağıdakilerden hangisi iktisadi büyümeyi etkileyen faktörlerden değildir?",
    options: [
      "Fiziki ve beşeri sermaye birikimi",
      "Demografik etkenler",
      "Cinsiyet",
      "Eğitim düzeyi",
      "Makroekonomik istikrar",
    ],
    correctAnswer: "Cinsiyet",
  },
  {
    id: 3,
    questionText:
      "İktisadi büyümenin nedenleri arasında hangi faktör yer almaz?",
    options: [
      "Yatırımlar",
      "İstihdam oranı",
      "Eğitim düzeyi",
      "Yüzölçümü",
      "Yaşam kalitesi",
    ],
    correctAnswer: "Yüzölçümü",
  },
  {
    id: 4,
    questionText:
      "Aşağıdakilerden hangisi sürdürülebilir iktisadi büyümeyi sağlayan koşullardan biridir?",
    options: [
      "Tasarruf oranının düşüklüğü",
      "Genç işsiz oranındaki artış",
      "Kaynakların verimli kullanılması",
      "Ham madde fiyatlarının yükselişi",
      "Atıl kapasitenin artışı",
    ],
    correctAnswer: "Kaynakların verimli kullanılması",
  },
  {
    id: 5,
    questionText:
      "İktisadi büyümenin ölçülmesinde kullanılan gösterge hangisidir?",
    options: ["GSMH", "GSMH/100", "Nominal GSYIH", "Reel GSYIH", "100/Reel GSYIH"],
    correctAnswer: "Reel GSYIH",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi Birleşmiş Milletler tarafından tanımlanan 'kötü büyüme' türlerinden biri değildir?",
    options: [
      "Dengesiz büyüme",
      "Sessiz büyüme",
      "Köksüz büyüme",
      "İşsiz büyüme",
      "Sakin büyüme",
    ],
    correctAnswer: "Sakin büyüme",
  },
  {
    id: 7,
    questionText:
      "Bir ekonominin üretim potansiyeli arttığı zaman, üretim imkânları eğrisinde nasıl bir durum meydana gelir?",
    options: [
      "Sağa doğru kayar.",
      "Değişmez.",
      "Sola doğru kayar.",
      "Aşağıya doğru kayar.",
      "Yukarı doğru kayar.",
    ],
    correctAnswer: "Sağa doğru kayar.",
  },
  {
    id: 8,
    questionText:
      "Bir ülkenin milli gelir artış hızı ile nüfus artış hızı eşitse, bu ülkede görülen iktisadi büyüme türü aşağıdakilerden hangisidir?",
    options: [
      "Geleneksiz büyüme",
      "Durgun büyüme",
      "Sessiz büyüme",
      "Kapalı büyüme",
      "Açık büyüme",
    ],
    correctAnswer: "Durgun büyüme",
  },
  {
    id: 9,
    questionText:
      "Gayri Safi Yurtiçi Hasıla (GSYİH) kaç farklı yöntemle hesaplanabilir?",
    options: ["3", "2", "4", "1", "6"],
    correctAnswer: "3",
  },
  {
    id: 10,
    questionText: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "İktisadi büyümenin gelir dağılımını iyileştirici özelliği yoktur.",
      "Yoksulluk kısır döngüsünü kırmak için iktisadi büyümeye ihtiyaç vardır.",
      "İktisadi büyümenin ölçümünde reel GSYİH yerine nominal GSYİH kullanılır.",
      "Sürdürülebilir iktisadi büyüme için kabul edilebilir bir gelir dağılımı gerekir.",
      "İktisadi büyüme süreci temel olarak üretim fonksiyonu ile başlamaktadır.",
    ],
    correctAnswer:
      "İktisadi büyümenin ölçümünde reel GSYİH yerine nominal GSYİH kullanılır.",
  },
 
  // ===================== 60-62 =====================
  {
    id: 11,
    questionText:
      "Aşağıdakilerden hangisi iktisadi yapıyı oluşturan unsurlardan biri değildir?",
    options: [
      "Üretim ilişkileri",
      "Ticaret",
      "Milli gelir dağılımı",
      "GSYİH",
      "İstihdam yapısı",
    ],
    correctAnswer: "GSYİH",
  },
  {
    id: 12,
    questionText:
      "Schumpeter'e göre iktisadi gelişme bir çeşit sıçramadır. Ünlü iktisatçıya göre bu sıçramayı sağlayan en önemli itici güç aşağıdakilerden hangisidir?",
    options: ["Girişimciler", "İşçiler", "Büyüme", "Krediler", "Teknoloji"],
    correctAnswer: "Girişimciler",
  },
  {
    id: 13,
    questionText:
      "İktisadi gelişmeyi iktisadi büyümeden ayıran temel farklılık aşağıdakilerden hangisidir?",
    options: [
      "Sanayi sektöründe hızlı büyüme",
      "Gelişme sürecinin yapısal değişim içermesi",
      "Hizmet sektöründe hızlı büyüme",
      "Ticaretin gelişmesi",
      "Yüzde 10'un üzerinde yıllık GSYİH artışı",
    ],
    correctAnswer: "Gelişme sürecinin yapısal değişim içermesi",
  },
  {
    id: 14,
    questionText:
      "Aşağıdakilerden hangisi ekonomik büyümeyi açıklayan dört temel değişkenden biri değildir?",
    options: ["Teknoloji", "Reel sermaye", "Döviz kuru", "Doğal kaynaklar", "İşgücü"],
    correctAnswer: "Döviz kuru",
  },
  {
    id: 15,
    questionText:
      "İktisadi büyümenin bir noktada sınırlanması gerektiğini öne süren fikirlerin temelinde hangi kaygı yatmaktadır?",
    options: [
      "Çevre sorunları",
      "Sermaye yetersizliği",
      "Nüfusun azalması",
      "Teknolojik yetersizlik",
      "Hiçbiri",
    ],
    correctAnswer: "Çevre sorunları",
  },
  {
    id: 16,
    questionText: "Aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "Büyüme kalkınmayı kapsar.",
      "Kalkınma GSYİH artışı yüzde 10'un üzerinde ise gerçekleşir.",
      "Yapısal değişim ekonomik büyümeyi içerir.",
      "Bir ekonomi kalkınmadan büyüyemez.",
      "Kalkınma büyümeyi kapsar.",
    ],
    correctAnswer: "Kalkınma büyümeyi kapsar.",
  },
  {
    id: 17,
    questionText:
      "Sürdürülebilir kalkınma kavramının temel politika önceliği hangisidir?",
    options: [
      "Düşük faiz yüksek kur politikası",
      "Her yıl yüzde 5'in üzerinde büyüme",
      "Düşük kur yüksek faiz politikası",
      "Doğal kaynakların ve çevrenin savurganlığa yol açmadan kullanılması",
      "Hiçbiri",
    ],
    correctAnswer:
      "Doğal kaynakların ve çevrenin savurganlığa yol açmadan kullanılması",
  },
  {
    id: 18,
    questionText:
      "Aşağıdakilerden hangisi bir ülkenin kalkınma sürecinin içermesi gereken öğelerden biri değildir?",
    options: [
      "Büyüme",
      "Refah artışı",
      "Enflasyon",
      "Adil gelir paylaşımı",
      "Deflasyon",
    ],
    correctAnswer: "Deflasyon",
  },
  {
    id: 19,
    questionText:
      "Aşağıdakilerden hangisi ekonomik büyümenin doğal sonuçlarından biri değildir?",
    options: [
      "GSYİH artışı",
      "Refah artışı",
      "Gelir dağılımında düzelme",
      "İşsizlik artışı",
      "Eğitim düzeyinde artış",
    ],
    correctAnswer: "Gelir dağılımında düzelme",
  },
  {
    id: 20,
    questionText:
      "Aşağıdaki ifadelerden hangisi iktisadi büyümenin karakteristik olgularından biridir?",
    options: [
      "Sermaye/hâsıla katsayısı istikrarlıdır.",
      "İşgücü maliyetlerindeki artış sabittir.",
      "Sermayenin getiri oranı değişkendir.",
      "Uzun dönemde sermaye-emek arasındaki gelir bölüşümü emek lehinedir.",
      "Hiçbiri",
    ],
    correctAnswer: "Sermaye/hâsıla katsayısı istikrarlıdır.",
  },
 
  // ===================== 86-89 =====================
  {
    id: 21,
    questionText: "Bir ekonomide büyüme aşağıdakilerden hangisine bağlıdır?",
    options: ["Üretim faktörleri arzı", "İstihdam", "Enflasyon", "Tasarruf", "Hiçbiri"],
    correctAnswer: "Üretim faktörleri arzı",
  },
  {
    id: 22,
    questionText:
      "Aşağıdakilerden hangisi iktisadi büyüme ile gerçekleşmesi beklenen gelişmelerden biri değildir?",
    options: [
      "Üretim yapısının değişmesi",
      "Refah artışı",
      "Tüketim yapısının değişmesi",
      "Üretim kapasitesinde artış",
      "İşsizliğin artması",
    ],
    correctAnswer: "İşsizliğin artması",
  },
  {
    id: 23,
    questionText:
      "Aşağıdakilerden hangisi Kuznet'in iktisadi büyüme tanımındaki altı özellikten biri değildir?",
    options: [
      "Verimlilik artışı",
      "Ekonomide yapısal değişim",
      "Üretim artışı",
      "Yüksek oranlı sosyal ve ideolojik değişim",
      "Adil gelir bölüşümü",
    ],
    correctAnswer: "Adil gelir bölüşümü",
  },
  {
    id: 24,
    questionText:
      "Aşağıdakilerden hangisi Rostow'un iktisadi büyümeye ilişkin belirlediği aşamalardan biri değildir?",
    options: [
      "Geleneksel toplum aşaması",
      "Kalkış aşaması",
      "Kalkış sonrası aşaması",
      "Kalkışa hazırlık aşaması",
      "Olgunluk aşaması",
    ],
    correctAnswer: "Kalkış sonrası aşaması",
  },
  {
    id: 25,
    questionText:
      "İktisadi büyümeyi sınırlayabilecek temel faktörlerden biri aşağıdakilerden hangisidir?",
    options: [
      "Deflasyon",
      "Devalüasyon",
      "Nüfus kontrolü",
      "Çevre kirliliği",
      "Altyapı yetersizliği",
    ],
    correctAnswer: "Çevre kirliliği",
  },
  {
    id: 26,
    questionText:
      "Aşağıdaki faktörlerden hangisinde yaşanacak olan artışın sonunda iktisadi büyüme sağlanabilir?",
    options: ["Tarım ürünleri", "İstihdam", "Enflasyon", "Tüketim", "Hiçbiri"],
    correctAnswer: "İstihdam",
  },
  {
    id: 27,
    questionText:
      "Malthus'un nüfus kavramına göre, hızlı nüfus artışı uzun vadede ülke ekonomisine nasıl bir etki yapar?",
    options: [
      "Üretim yapısının değişmesi",
      "Refah artışı",
      "Tüketim yapısının değişmesi",
      "Üretim kapasitesinde artış",
      "İşsizliğin artması",
    ],
    correctAnswer: "İşsizliğin artması",
  },
  {
    id: 28,
    questionText:
      "Kurumsal yapı büyümenin kaynaklarından biridir. \"Mülkiyet haklarını koruyan ve sözleşmelerin işlemesini sağlayan\" kurumlar, iktisadi büyüme terminolojisinde hangi isimle anılır?",
    options: [
      "Piyasa yaratıcı kurumlar",
      "Piyasa düzenleyici kurumlar",
      "Piyasa istikrarını sağlayıcı kurumlar",
      "Piyasayı meşrulaştırıcı kurumlar",
      "Hiçbiri",
    ],
    correctAnswer: "Piyasa yaratıcı kurumlar",
  },
  {
    id: 29,
    questionText:
      "\"Ekonomik birimler arasındaki etkileşim için istikrarlı bir yapı kurarak belirsizliği azaltmayı amaçlayan\" kurumlar hangi isimle anılır?",
    options: [
      "Piyasa yaratıcı kurumlar",
      "Piyasa düzenleyici kurumlar",
      "Piyasa istikrarını sağlayıcı kurumlar",
      "Piyasayı meşrulaştırıcı kurumlar",
      "Hiçbiri",
    ],
    correctAnswer: "Piyasa istikrarını sağlayıcı kurumlar",
  },
  {
    id: 30,
    questionText:
      "\"Büyümenin sınırları paradigması\" ilk dönem çevre politikaları için önemli bir referans olarak kabul edilmektedir. Söz konusu paradigmayı ortaya atan rapor hangi oluşum tarafından ne zaman açıklanmıştır?",
    options: [
      "Chicago Okulu, 2000'li yıllar",
      "Frankfurt Okulu, 1980'li yıllar",
      "Fizyokratlar, 1950'li yıllar",
      "Neoklasikler, 1960'lı yıllar",
      "Roma Kulübü, 1970'li yıllar",
    ],
    correctAnswer: "Roma Kulübü, 1970'li yıllar",
  },
 
  // ===================== 109-111 =====================
  {
    id: 31,
    questionText:
      "Harrod-Domar büyüme modelinde kaç çeşit büyüme söz konusudur?",
    options: ["3", "2", "1", "7", "4"],
    correctAnswer: "3",
  },
  {
    id: 32,
    questionText:
      "Aşağıdakilerden hangisi Harrod-Domar modelinin varsayımlarından değildir?",
    options: [
      "Ekonomi tam istihdam seviyesindedir.",
      "Sermaye ve gelir arasında sabit bir teknolojik ilişki vardır.",
      "Dış ticaret yoktur ve kapalı ekonomi geçerlidir.",
      "Sermaye tek üretim faktörü olarak alınmaktadır.",
      "Ekonomide kamu harcamaları önemli yer tutar.",
    ],
    correctAnswer: "Ekonomide kamu harcamaları önemli yer tutar.",
  },
  {
    id: 33,
    questionText:
      "Harrod-Domar büyüme modeline göre aşağıdakilerden hangisi ekonominin itici gücüdür?",
    options: ["İşçiler", "Tasarruflar", "Sanayi", "Tüketim", "Yatırımlar"],
    correctAnswer: "Yatırımlar",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi Harrod-Domar modelinde kullanılan üretim fonksiyonunu tanımlar?",
    options: [
      "Artan üretim fonksiyonu",
      "Azalan üretim fonksiyonu",
      "Dalgalı üretim fonksiyonu",
      "Sabit üretim fonksiyonu",
      "Hiçbiri",
    ],
    correctAnswer: "Sabit üretim fonksiyonu",
  },
  {
    id: 35,
    questionText:
      "Ricardo'nun büyüme modelinde temel belirleyici aşağıdakilerden hangisidir?",
    options: [
      "Toprağın verimliliği",
      "Nüfus kontrolü",
      "Sanayi sektörünün payı",
      "İşgücünün verimliliği",
      "Üretim yapısı",
    ],
    correctAnswer: "Toprağın verimliliği",
  },
  {
    id: 36,
    questionText:
      "Marx, emek-değer teorisini oluştururken hangi iktisatçıdan etkilenmiştir?",
    options: [
      "Thomas R. Malthus",
      "J. Baptiste Say",
      "J. Maynard Keynes",
      "David Ricardo",
      "Hiçbiri",
    ],
    correctAnswer: "David Ricardo",
  },
  {
    id: 37,
    questionText:
      "Malthus'a göre efektif talebin ortaya çıkmasının tek yolu aşağıdakilerden hangisidir?",
    options: [
      "Nüfus yapısının değişmesi",
      "Adil gelir paylaşımı",
      "Üretim kapasitesinde artış",
      "İstihdamın artması",
      "Verimlilik artışı",
    ],
    correctAnswer: "Adil gelir paylaşımı",
  },
  {
    id: 38,
    questionText:
      "Aşağıdakilerden hangisi Ricardo'nun büyüme modelinin temel varsayımlarından biri değildir?",
    options: [
      "Tasarruf artışı istikrarlıdır.",
      "Sermaye birikimini uyaran kâr motivasyonudur.",
      "Sanayi kesiminde teknik ilerleme hızı yüksektir.",
      "Ekonomide tam istihdam ve tam rekabet koşulları egemendir.",
      "Üretim fonksiyonu veridir.",
    ],
    correctAnswer: "Tasarruf artışı istikrarlıdır.",
  },
  {
    id: 39,
    questionText:
      "Büyüme teorisini oluştururken Malthus'un düştüğü yanılgı aşağıdakilerden hangisidir?",
    options: [
      "Nüfus artışına odaklanmak",
      "Tasarrufları hesaba katmamak",
      "Sermaye birikimini göz ardı etmek",
      "Verimliliği göz ardı etmek",
      "Hiçbiri",
    ],
    correctAnswer: "Verimliliği göz ardı etmek",
  },
  {
    id: 40,
    questionText:
      "Harrod-Domar modelinin incelediği durum aşağıdaki ifadelerden hangisi ile açıklanabilir?",
    options: [
      "Üretim fonksiyonunun maksimizasyonu",
      "Tasarruf katsayısındaki değişim",
      "Büyüyen ekonominin denge şartları",
      "Refah artışının ölçümlenmesi",
      "Sanayinin tüketim içindeki payı",
    ],
    correctAnswer: "Büyüyen ekonominin denge şartları",
  },
 
  // ===================== 133-136 =====================
  {
    id: 41,
    questionText:
      "Ekonomiler hangi faktör nedeniyle Solow modelinde kalıcı büyüme gösterirler?",
    options: [
      "Nüfus artış hızı",
      "Sermaye birikimi",
      "Tasarruf artışı",
      "Teknolojik gelişme",
      "İstihdam yapısı",
    ],
    correctAnswer: "Teknolojik gelişme",
  },
  {
    id: 42,
    questionText:
      "Aşağıdakilerden hangisi içsel büyüme modellerinden biri değildir?",
    options: [
      "Ar-Ge modeli",
      "Durağan durum",
      "Beşeri sermaye modeli",
      "AK modeli",
      "Bilgi üretimi ve dışsallıklar",
    ],
    correctAnswer: "Durağan durum",
  },
  {
    id: 43,
    questionText:
      "Aşağıdakilerden hangisi Neoklasik büyüme modellerinin varsayımlarından biridir?",
    options: [
      "Eksik istihdam",
      "Açık ekonomi",
      "Nüfus artışı dışsaldır",
      "Ölçeğe göre artan getiri",
      "Tek sektörlü ekonomik yapı",
    ],
    correctAnswer: "Tek sektörlü ekonomik yapı",
  },
  {
    id: 44,
    questionText:
      "Aşağıdaki tanımlardan hangisi Neo-klasik büyüme modelindeki durağan durumu niteler?",
    options: [
      "İşçi başına yatırımın, işçi başına yıpranmaya eşit olması",
      "İşçi başına çıktı ile işçi başına yıpranma arasındaki farkın en fazla olduğu sermaye düzeyi",
      "Gelişmiş ve gelişmekte olan ülkeler arasındaki gelir farkının uzun dönemde yok olacağı inancı",
      "Faiz haddi farklılıklarının ortadan kalkması",
      "Hiçbiri",
    ],
    correctAnswer: "İşçi başına yatırımın, işçi başına yıpranmaya eşit olması",
  },
  {
    id: 45,
    questionText:
      "Aşağıdakilerden hangisi içsel büyüme modelleri için geçerli olan ifadelerden biridir?",
    options: [
      "Eksik rekabet piyasalarının modele dâhil edilmesi",
      "Sermayenin artan getiriye sahip olduğu varsayımı",
      "Fiziksel sermayeye, insan ve bilgiye yatırım yapılması",
      "Dışsallıkların varlığının modellere uygulanması",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    id: 46,
    questionText:
      "İçsel büyüme modellerinin çoğunda aşağıdakilerden hangisi kullanılmaktadır?",
    options: [
      "Yakınsama hipotezi",
      "Geleneksel kalkınma modeli",
      "AK modeli",
      "Beşeri sermaye faktörü",
      "Dışsallıklar",
    ],
    correctAnswer: "AK modeli",
  },
  {
    id: 47,
    questionText:
      "Nobel ödüllü iktisatçı Robert Lucas, aşağıdaki yaklaşımlardan hangisinin öncüsüdür?",
    options: [
      "Bilgi üretimi ve dışsallıklar",
      "Yakınsama hipotezi",
      "Beşeri sermaye modeli",
      "Kamu politikası modeli",
      "Cobb-Douglas fonksiyonu",
    ],
    correctAnswer: "Beşeri sermaye modeli",
  },
  {
    id: 48,
    questionText:
      "Aşağıdakilerden hangisi Barro'nun varsayımlarından biridir?",
    options: [
      "Kamu harcamaları büyüme sürecini hızlandıran önemli bir etkendir.",
      "Vergilendirmeden kaynaklanan özel tasarruflardaki azalma büyümeyi olumsuz etkiler.",
      "Hükümet politikalarıyla Ar-Ge çalışmalarının teşvik edilmesi gerekir.",
      "Gelişmiş ve gelişmekte olan ülkeler arasında beliren bilgi açığı ancak aktif politikalarla kapatılabilir.",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    id: 49,
    questionText:
      "Aşağıdaki iktisatçılardan hangisi içsel büyüme teorilerine katkıda bulunmamıştır?",
    options: ["Romer", "Solow", "Arrow", "Lucas", "Hiçbiri"],
    correctAnswer: "Solow",
  },
  {
    id: 50,
    questionText:
      "Aşağıdaki ikili ifadelerden hangisi Romer'a göre iktisadi büyümenin kaynağıdır?",
    options: [
      "Nüfus - Tarım",
      "Sermaye birikimi – Tasarruf",
      "Tasarruf - İstihdam",
      "Fikirler - Şeyler",
      "Fikirler - Nüfus",
    ],
    correctAnswer: "Fikirler - Şeyler",
  },
 
  // ===================== 160-163 =====================
  {
    id: 51,
    questionText:
      "Aşağıdakilerin hangisi \"ekonomik kalkınmanın\" gerçekleşmesi için gereken \"olmazsa olmalardan\" biri değildir?",
    options: [
      "Ekonomik büyüme",
      "Üretim artışı",
      "Kişi başına gayri safi yurtiçi hasılada artış",
      "Değerli yerel para",
      "İstihdam artışı",
    ],
    correctAnswer: "Değerli yerel para",
  },
  {
    id: 52,
    questionText:
      "Ünlü iktisatçı Hirschman, ekonomik kalkınmanın çok boyutlu yönünü vurgulamak için hangi benzetmeyi kullanır?",
    options: [
      "Yapboz bulmacası",
      "Dalgalı deniz",
      "Tüneldeki ışık",
      "Gemi çıpası",
      "İskambil destesi",
    ],
    correctAnswer: "Yapboz bulmacası",
  },
  {
    id: 53,
    questionText:
      "Hangi tarihsel dönem sonrasında kalkınma iktisatçıları ile politika yapıcılar çok daha yakın çalışmaya başlamış ve her ülkenin tarihsel yapısına özgü kalkınma planları hazırlanması eğilimi ağırlık kazanmıştır?",
    options: [
      "Birinci Dünya Savaşı",
      "İkinci Dünya Savaşı",
      "Sanayi Devrimi",
      "1915 Ekim Devrimi",
      "Büyük Buhran",
    ],
    correctAnswer: "İkinci Dünya Savaşı",
  },
  {
    id: 54,
    questionText:
      "\"………….. söz konusu olduğu ülkelerde gelişme daha hızlı yaşanmakta, girişimler daha fazla desteklenmekte ve yenilikçilik toplumsal kesime daha uygun hâle gelmektedir\" ifadesin noktalı alan en doğru şekilde aşağıdaki ifadelerin hangisiyle doldurulabilir?",
    options: [
      "Kendi kendine yeterliliğin",
      "Enflasyonda çok düşük bir seviyenin",
      "İstihdamda çok yüksek bir seviyenin",
      "Yerel para birimde aşırı değerliliğin",
      "Yerel para biriminde aşırı değersizliğin",
    ],
    correctAnswer: "Kendi kendine yeterliliğin",
  },
  {
    id: 55,
    questionText:
      "İktisatçı Amartya Sen, kalkınma kavramının geniş kapsamlı yapısını hangi çerçevede değerlendirmeyi tercih etmiştir?",
    options: ["Eşitlik", "Demokrasi", "Özgürlük", "Adalet", "Bağımsızlık"],
    correctAnswer: "Özgürlük",
  },
  {
    id: 56,
    questionText:
      "Ekonomik kalkınma uzun dönemde ekonomik büyümenin yanında neyin gerçekleşmesi gerektiğini öngörür?",
    options: [
      "Sosyal ve kültürel yapının da değiştirilmesini ve yenileştirilmesini",
      "Faiz politikasının sıkılaştırılmasını",
      "Sanayi sektörünün büyümeye liderlik etmesini",
      "Tam istihdam hedefine ulaşılmasını",
      "Girişimcilik ruhunun beslenmesini",
    ],
    correctAnswer:
      "Sosyal ve kültürel yapının da değiştirilmesini ve yenileştirilmesini",
  },
  {
    id: 57,
    questionText:
      "Kalkınma iktisadı terminolojisinde piyasaları düzgün işlemeyen, üreticiler ve tüketicilerin tam bilgiye sahip olmadığı, piyasa fiyatının arz ve talep tarafından belirlenemediği ve piyasa dengesizliğinin çok yaygın olduğu ülkeler için aşağıdaki ifadelerden hangisi kullanılır?",
    options: [
      "Gelişmiş ekonomi",
      "Kuzey ekonomisi",
      "Sanayileşmiş ekonomi",
      "Birinci dünya ekonomisi",
      "Gelişmekte olan ekonomi",
    ],
    correctAnswer: "Gelişmekte olan ekonomi",
  },
  {
    id: 58,
    questionText:
      "Ekonomik gelişmişliğin kişi başına düşen milli gelir ile ölçümlenmesi yöntemine göre kişi başına yıllık 10,000 dolar gelire sahip bir ekonomi aşağıdakilerden hangisine dâhildir?",
    options: [
      "Düşük gelirli",
      "Orta gelirli",
      "Yüksek gelirli ülkeler",
      "Zengin",
      "Yüksek orta gelirli",
    ],
    correctAnswer: "Yüksek orta gelirli",
  },
  {
    id: 59,
    questionText:
      "Aşağıdakilerden hangisi az gelişmiş ülke ekonomilerinin özelliklerinden biri değildir?",
    options: [
      "Üretimde en yüksek pay tarım sektörüne aittir.",
      "İstihdamda en yüksek pay tarım sektörüne aittir.",
      "Üretimde en yüksek pay hizmet sektörüne aittir.",
      "Eğitim seviyesi düşüktür.",
      "Nüfusun büyük bölümü kırsal alanda yaşamaktadır.",
    ],
    correctAnswer: "Üretimde en yüksek pay hizmet sektörüne aittir.",
  },
  {
    id: 60,
    questionText:
      "\"Hızlı kentleşme ile birlikte modern ve geleneksel kesimin faaliyetlerini beraber sürdürmeye çalıştığı …… bir yapı ortaya çıkmaktadır. Söz konusu …… yapı hem gelişmiş hem de az gelişmiş ülkelerde görülebilmektedir. Fakat az gelişmiş ülkelerde daha çok rastlanan bir olgudur\" şeklindeki paragrafta bulunan boşluklara aşağıdaki ifadelerden hangisi gelmelidir?",
    options: [
      "Monoist (Tekli)",
      "Dualist (İkili)",
      "Homojen",
      "Heterojen",
      "Hiçbiri",
    ],
    correctAnswer: "Dualist (İkili)",
  },
 
  // ===================== 185-188 =====================
  {
    id: 61,
    questionText:
      "Bütüncül kalkınma yöntemi, aşağıdakilerden hangisini içermez?",
    options: [
      "Kültürel faktörler",
      "Psikolojik faktörler",
      "Politik faktörler",
      "İktisadi faktörler",
      "Coğrafi faktörler",
    ],
    correctAnswer: "Coğrafi faktörler",
  },
  {
    id: 62,
    questionText:
      "Aşağıdakilerden hangisi geleneksel iktisada dayalı kalkınma yaklaşımını savunan iktisatçıların varsayımlarından biri değildir?",
    options: [
      "Az gelişmiş ülke ekonomileri, gelişmiş ülke ekonomilerinden nitelik olarak farklıdır.",
      "Azgelişmiş ülkeler, gelişmiş ülkelerin kapitalizm öncesi yapılarına benzer geleneksel toplumlardır.",
      "Azgelişmiş ülkeler, gelişmiş ülkelerin gelişim çizgisini izleyecektir.",
      "Az gelişmiş ülke ekonomilerine yönelik incelemelerin yöntemleri, gelişmiş ekonomilerinkilerle aynı olmalıdır.",
      "Az gelişmiş ülkeler, gelişmiş ülkeleri takip ederek modernleşebilirler.",
    ],
    correctAnswer:
      "Az gelişmiş ülke ekonomilerine yönelik incelemelerin yöntemleri, gelişmiş ekonomilerinkilerle aynı olmalıdır.",
  },
  {
    id: 63,
    questionText:
      "Geleneksel iktisada dayalı kalkınma teorisyenlerine göre aşağıdakilerden hangisi az gelişmişliğin nedenlerinden değildir?",
    options: [
      "İşçi sınıfının gelişmemesi",
      "Tasarruf oranlarındaki yetersizlik",
      "Pazarın yeterli büyüklükte olmaması",
      "Yatırımlardaki yetersizlik",
      "Sanayi sektörünün gelişmemiş olması",
    ],
    correctAnswer: "İşçi sınıfının gelişmemesi",
  },
  {
    id: 64,
    questionText:
      "Nurkse'a göre gelişmemiş ülkeler aşağıdakilerden hangi özelliklere sahiptir?",
    options: [
      "Geniş pazar büyüklüğü",
      "Yüksek üretim düzeyi",
      "Düşük üretkenlik düzeyi",
      "Yeterli sermaye birikimi",
      "Hiçbiri",
    ],
    correctAnswer: "Düşük üretkenlik düzeyi",
  },
  {
    id: 65,
    questionText:
      "Aşağıdakilerden hangisi geleneksel iktisada karşı geliştirilen yaklaşımlardan biridir?",
    options: [
      "İnsan merkezli kalkınma yaklaşımı",
      "Meta merkezli kalkınma yaklaşımı",
      "Coğrafi merkezli kalkınma yaklaşımı",
      "Toprak odaklı kalkınma yaklaşımı",
      "İşçi odaklı kalkınma yaklaşımı",
    ],
    correctAnswer: "İnsan merkezli kalkınma yaklaşımı",
  },
  {
    id: 66,
    questionText:
      "Aşağıdakilerden hangisi Nurkse'a göre az gelişmiş ülkeler içine düştükleri kısır döngüyü kırma yollarından biri değildir?",
    options: ["Tasarruflar", "Dış yardımlar", "Yabancı sermaye", "Borçlanma", "Hiçbiri"],
    correctAnswer: "Tasarruflar",
  },
  {
    id: 67,
    questionText:
      "İnsan merkezli kalkınma yaklaşımının odağında aşağıdaki unsurlardan hangisi yer almaz?",
    options: [
      "İyi bir eğitim",
      "Demokratik hak",
      "Özgürlükler",
      "Sağlıklı uzun yaşam",
      "Verimlilik artışı",
    ],
    correctAnswer: "Verimlilik artışı",
  },
  {
    id: 68,
    questionText:
      "Aşağıdakilerden hangisi temel ihtiyaçlar yaklaşımına göre az gelişmişliğin çözümlerinden biri değildir?",
    options: [
      "İşsizlik sorununun çözülmesi",
      "İstikrarlı tüketim yapısı",
      "İnsan kaynaklarının geliştirilmesi",
      "Kırsal kalkınmanın hızlandırılması",
      "Temel ihtiyaçların asgari ölçüde karşılanması",
    ],
    correctAnswer: "İstikrarlı tüketim yapısı",
  },
  {
    id: 69,
    questionText:
      "Sürdürülebilir kalkınma anlayışının odağında hangi faktör yatar?",
    options: ["İnsan", "Verimlilik", "Sermaye", "Artı değer", "Çevre"],
    correctAnswer: "Çevre",
  },
  {
    id: 70,
    questionText:
      "D.Seers'a göre kalkınmanın merkezinde yer alan faktör aşağıdakilerden hangisidir?",
    options: ["Üretim", "İnsan", "Tasarruf", "Refah artışı", "Sanayi"],
    correctAnswer: "İnsan",
  },
 
  // ===================== 206-208 =====================
  {
    id: 71,
    questionText:
      "Yapısalcılara göre ekonomik kalkınmada temel unsur aşağıdakilerden hangisidir?",
    options: ["Sermaye birikimi", "İnsan", "Çevre", "Sanayi", "Teknoloji"],
    correctAnswer: "Sermaye birikimi",
  },
  {
    id: 72,
    questionText:
      "Aşağıdakilerden hangisi Prebisch'in az gelişmiş ülkeler için sunduğu çözüm önerilerindendir?",
    options: [
      "Beşeri sermayeye dayalı kalkınma",
      "Tarıma dayalı kalkınma",
      "İnsan odaklı kalkınma",
      "İhracata dayalı kalkınma",
      "Kendine yeterli bir ekonomi kurma ve içe dönük kalkınma",
    ],
    correctAnswer: "Kendine yeterli bir ekonomi kurma ve içe dönük kalkınma",
  },
  {
    id: 73,
    questionText:
      "Aşağıdakilerden hangisi neo-yapısalcı yaklaşımın koşullarından biri değildir?",
    options: [
      "Yerli sanayinin gelişiminin teşvik edilmesi",
      "Tarımsal üretim artışı",
      "Devletin talep yaratması",
      "Girişimci sınıfın oluşturulması",
      "Çok yönlü yatırım planlaması",
    ],
    correctAnswer: "Tarımsal üretim artışı",
  },
  {
    id: 74,
    questionText:
      "Uluslararası bağımlılık teorileri hangi dönemde önem kazanmıştır?",
    options: ["1990'lar", "1980'ler", "1970'ler", "1960'lar", "1920'ler"],
    correctAnswer: "1960'lar",
  },
  {
    id: 75,
    questionText:
      "Aşağıdakilerden hangisi uluslararası bağımlılık teorilerinin içinde bulunan modellerden biridir?",
    options: [
      "Monopolist kalkınma tezi",
      "Yanlış paradigma modeli",
      "Meta merkezli kalkınma yaklaşımı",
      "Sermaye odaklı kalkınma yaklaşımı",
      "Hiçbiri",
    ],
    correctAnswer: "Yanlış paradigma modeli",
  },
  {
    id: 76,
    questionText:
      "Aşağıdakilerden hangisi 1990'lara damgasını vuran kalkınma yaklaşımıdır?",
    options: [
      "Yapısalcı değişim modeli",
      "Neo-yapısalcı yaklaşım",
      "Bağımlılık kuramı",
      "Neo-liberal yaklaşım",
      "Hiçbiri",
    ],
    correctAnswer: "Neo-liberal yaklaşım",
  },
  {
    id: 77,
    questionText:
      "Neo-liberal yaklaşımlara göre sermaye düzeyindeki bir değişme aşağıdakilerden hangisine bağlıdır?",
    options: [
      "Eğitim düzeyi",
      "Fiyat istikrarı",
      "Milli gelir düzeyi",
      "İstihdam",
      "Verimlilik artışı",
    ],
    correctAnswer: "Milli gelir düzeyi",
  },
  {
    id: 78,
    questionText:
      "Aşağıdakilerden hangisi kalkınma teorilerine yöneltilen eleştirilerden biridir?",
    options: [
      "Sosyokültürel etkileri hesaba katmamaları",
      "Toplumsal faktörleri göz ardı etmeleri",
      "Ekonomik olgulara yeterince önem vermeleri",
      "Kırsal kalkınmaya odaklanmaları",
      "Kalkınmayı siyaset temelli değerlendirmeleri",
    ],
    correctAnswer: "Sosyokültürel etkileri hesaba katmamaları",
  },
  {
    id: 79,
    questionText:
      "Aşağıdakilerden hangisi neo-liberal yaklaşımın varsayımlarından biri değildir?",
    options: [
      "Devletin ekonomik yaşama müdahalesinin sınırlandırılması",
      "Toplumsal etkinliğin yerini bireysel etkinliğe bırakması",
      "Artı değerde istikrar sağlanması",
      "Uluslararası alanda malların ve sermayenin serbest dolaşımı",
      "Pazara yönelik tüm dinamiklerin desteklenmesi",
    ],
    correctAnswer: "Artı değerde istikrar sağlanması",
  },
  {
    id: 80,
    questionText:
      "Aşağıdaki ülkelerden hangisi neo-liberal kalkınma modelini deneyimleyen ülkelerden değildir?",
    options: ["Güney Kore", "Çin", "Singapur", "Hong Kong", "Tayvan"],
    correctAnswer: "Çin",
  },
];;

const ImalatSilahSanayi = [
  {
    id: 1,
    questionText: "Aşağıdakilerden hangisi kişisel koruyucu donanım değildir?",
    options: [
      "Şapka",
      "İş önlüğü",
      "Koruyucu gözlük",
      "Gaz maskesi",
      "Talaş siperliği",
    ],
    correctAnswer: "Talaş siperliği",
  },
  {
    id: 2,
    questionText: "Aşağıdakilerden hangisi tesviyeci mengenesinin kısımlarından değildir?",
    options: [
      "Örs",
      "Tespit vidası",
      "Mengene ağzı",
      "Mengene kolu",
      "Hareketli çene",
    ],
    correctAnswer: "Tespit vidası",
  },
  {
    id: 3,
    questionText: "Aşağıdakilerden hangisi markalama aleti değildir ?",
    options: [
      "Mihengir",
      "Merkezleme çanı",
      "Çizecek",
      "Çelik cetvel",
      "Vida tarağı",
    ],
    correctAnswer: "Vida tarağı",
  },
  {
    id: 4,
    questionText: "Aşağıdakilerden hangisi düzlem yüzey kontrol aletlerindendir?",
    options: [
      "Kumpas",
      "Gönye",
      "Çizecek",
      "Mikrometre",
      "Vida tarağı",
    ],
    correctAnswer: "Çizecek",
  },
  {
    id: 5,
    questionText: "Eğeleme işlemi sırasında eğe parçanın yüzeyini çiziyor ve yüzeyden kayıyorsa ne yapılmalıdır?",
    options: [
      "Eğe temizleme fırçası ile eğe temizlenmelidir .",
      "Eğenin sapı sıkılmalıdır.",
      "Eğenin kesme yönü değiştirilmelidir.",
      "Parçanın konumu değiştirilmelidir.",
      "Eğeleme işlemine ara verilmelidir.",
    ],
    correctAnswer: "Eğe temizleme fırçası ile eğe temizlenmelidir .",
  },
  {
    id: 6,
    questionText: "Aşağıdakilerden hangisi el testeresi ile kesme işleminde dikkat edilecek hususlardan biri değildir?",
    options: [
      "Testere kolu öne doğru 5-10° eğik tutulup, ileri sürerken hafif bastırılır, geriye serbest çekilir.",
      "Testere arkaya doğru kuvvetlice bastırılmalıdır.",
      "Öne ve arkaya doğru sürülürken çok baskı uygulanmalıdır.",
      "Arka tarafa 5-10 derece yatırılarak kesme yapılmalıdır.",
      "Testere dişlerinin yönü önemli değildir.",
    ],
    correctAnswer: "Arka tarafa 5-10 derece yatırılarak kesme yapılmalıdır.",
  },
  {
    id: 7,
    questionText: "Testere laması takılırken nelere dikkat edilmelidir?",
    options: [
      "Kesici dişler arkaya doğru bakmalıdır.",
      "Kesici dişler öne doğru 5-10 derece eğik bakmalıdır.",
      "Kesici dişler öne bakmalı, lama düz ve gergin olarak sıkılmalıdır.",
      "Kesici dişler arkaya bakmalı, lama gevşek sıkılmalıdır.",
      "Kesici dişler yukarı doğru bakmalıdır.",
    ],
    correctAnswer: "Kesici dişler öne bakmalı, lama düz ve gergin olarak sıkılmalıdır.",
  },
  {
    id: 8,
    questionText: "Aşağıdakilerden hangisi testere ile kesme kurallarından değildir?",
    options: [
      "Ses ve titreşimi önlemek için parça mümkün olduğu kadar kısa bağlanmalıdır.",
      "Lama , testere koluna aşırı gergin bağlanmamalıdır.",
      "Tüm dişlerin kesme yapması için testere boydan boya sürülmelidir.",
      "Testere ile bir miktar kesme yapıldıktan sonra kalan kısmı çekiçle vurarak koparılmalıdır.",
      "Testere ile her iki yöndede kesme yapılmalıdır",
    ],
    correctAnswer: "Testere ile bir miktar kesme yapıldıktan sonra kalan kısmı çekiçle vurarak koparılmalıdır.",
  },
  {
    id: 9,
    questionText: "İş parçası üzerindeki delik çaplarının tolerans sınırları içerisinde yapılıp yapılmadığını kontrol etmekte kullanılan mastar çeşitleri hangisidir?",
    options: [
      "Tampon mastarları",
      "Çatal mastarlar",
      "Kalınlık mastarları",
      "Konik mastarlar",
      "Vida mastarları",
    ],
    correctAnswer: "Tampon mastarları",
  },
  {
    id: 10,
    questionText: "Üzerinde markalama işleminin yapıldığı düzlemsel yüzeye sahip metal malzemelere ne ad verilir?",
    options: [
      "Mihengir",
      "Pleyt masası",
      "Kumpas",
      "Gönye",
      "Merkezleme gönyesi",
    ],
    correctAnswer: "Pleyt masası",
  },
  {
    id: 11,
    questionText: "Aşağıdakilerden hangisi mengeneli aynaların özelliklerinden biri hangisidir?",
    options: [
      "Her bir ayak birbirinden bağımsız olarak hareket eder.",
      "Ayakların hepsi aynı anda hareket eder.",
      "Önce 1 nolu ayak hareket eder.",
      "Hiçbiri",
    ],
    correctAnswer: "Ayakların hepsi aynı anda hareket eder.",
  },
  {
    id: 12,
    questionText: "Aşağıdakilerden hangisi biçimlerine göre kalemlerden biridir?",
    options: [
      "Sert metal uçlu kalemler",
      "Vida kalemleri",
      "Yuvarlak kalemler",
      "Boşluk Kalemi",
    ],
    correctAnswer: "Vida kalemleri",
  },
  {
    id: 13,
    questionText: "Isıl genleşme oluşmasının nedeni aşağıdakilerden hangisi olabilir?",
    options: [
      "Sıcaklık artması",
      "Kesici ömrü",
      "Kesici açısı",
      "Punta yüksekliği",
    ],
    correctAnswer: "Sıcaklık artması",
  },
  {
    id: 14,
    questionText: "Aşağıdakilerden hangisi derinlik ölçme islemi verniyerli kumpasların hangi kısmı ile yapılır?",
    options: [
      "Tutma kısmı",
      "Çene kısmı",
      "Cetvel kısmı",
      "Kılıç kısmı",
    ],
    correctAnswer: "Kılıç kısmı",
  },
  {
    id: 15,
    questionText: "Sabit yatağa bağlanacak işin salgısını gidermek için aşağıdakilerden hangisi kullanılır?",
    options: [
      "Mikrometre",
      "Kumpas",
      "Komparatör",
      "Gönye",
    ],
    correctAnswer: "Gönye",
  },
  {
    id: 16,
    questionText: "Üzerine etki eden çekme ve basma kuvvetini depo eden, kuvvet kalktığında depo ettiği enerjiyi aynen ileten makine elemanı aşağıdakilerden hangisidir?",
    options: [
      "Kama",
      "Pim",
      "Vida",
      "Yay",
    ],
    correctAnswer: "Yay",
  },
  {
    id: 17,
    questionText: "Whitworth ve metrik üçgen vidaların uç açıları nedir?",
    options: [
      "Whitworth 55° Metrik 60°",
      "Whitworth 60° Metrik 55°",
      "Whitworth 50° Metrik 65°",
      "Whitworth 55° Metrik 65°",
    ],
    correctAnswer: "Whitworth 60° Metrik 55°",
  },
  {
    id: 18,
    questionText: "Metrik bir kare vida açmak için tezgâh üzerindeki tablodan neye bakarak ayar yapmalıyız?",
    options: [
      "Adımına",
      "Parmaktaki diş sayısına",
      "Diş derinliğine",
      "Diş yüksekliğine",
    ],
    correctAnswer: "Diş derinliğine",
  },
  {
    id: 19,
    questionText: "Aşağıdakilerden hangisi planlı bakımın amaçlarından değildir?",
    options: [
      "Üretimde meydana gelecek kesintiyi en aza indirmek",
      "Büyük makine hasarlarının oluşumunu engellemek",
      "Makinelerin ekonomik ömrünü azaltmak",
      "Arıza, bakım ve onarım sayısını azaltmak",
    ],
    correctAnswer: "Makinelerin ekonomik ömrünü azaltmak",
  },
  {
    id: 20,
    questionText: "Üretim sonrası meydana gelecek hurda ve atıkların değerlendirilmesinin planlanması hangi araştırmanın konuları arasındadır?",
    options: [
      "Mali",
      "Ekonomik",
      "Teknik",
      "Mali Yasal",
    ],
    correctAnswer: "Ekonomik",
  },
  {
    id: 21,
    questionText: "Aşağıda verilen seçeneklerden hangisi malzeme seçiminde dikkat edilmesi gereken kurallardan değildir?",
    options: [
      "Üretim işlerine uygunluk",
      "Korozyon direnci",
      "Teknolojik ve mekanik özellikle",
      "Malzemenin ucuz olması",
    ],
    correctAnswer: "Malzemenin ucuz olması",
  },
  {
    id: 22,
    questionText: "Kesme işlemlerinde kullanacağımız uçları sertleştirmemiz gerekmektedir. Bu sertleştirme işlemini hangi malzeme ile yapamayız?",
    options: [
      "Suda sertleştirme",
      "Yağda sertleştirme",
      "Havada sertleştirme",
      "Kumda sertleştirme",
    ],
    correctAnswer: "Kumda sertleştirme",
  },
  {
    id: 23,
    questionText: "Metal malzemeleri Korozyondan korumak için hangi yöntem kullanılmaz?",
    options: [
      "Boyama",
      "Ziftleme",
      "Vernikleme",
      "Metal kaplama",
    ],
    correctAnswer: "Ziftleme",
  },
  {
    id: 24,
    questionText: "Aşağıdakilerden hangisi bir talaşlı imalat yöntemidir?",
    options: [
      "Haddeleme",
      "Dövme",
      "Tavlama",
      "Tornalama",
    ],
    correctAnswer: "Tornalama",
  },
  {
    id: 25,
    questionText: "Aşağıdaki işlemlerden hangisi kaynak yöntemidir?",
    options: [
      "Tavlama",
      "Sertleştirme",
      "MIG Kaynağı",
      "Soğuk Şekil Verme",
    ],
    correctAnswer: "MIG Kaynağı",
  },
  {
    id: 26,
    questionText: "Isıl işlem işlemleri aşağıdakilerden hangisini kapsar?",
    options: [
      "Kum kalıba döküm",
      "Menevişleme",
      "Taşlama",
      "Frezeleme",
    ],
    correctAnswer: "Menevişleme",
  },
  {
    id: 27,
    questionText: "Hangisi bir plastik şekil verme işlemidir?",
    options: [
      "Ekstrüzyon",
      "Kaynak",
      "EDM",
      "Tavlama",
    ],
    correctAnswer: "Ekstrüzyon",
  },
  {
    id: 28,
    questionText: "Aşağıdakilerden hangisi talaşsız şekil verme yöntemidir?",
    options: [
      "Haddeleme",
      "Tornalama",
      "Taşlama",
      "Frezeleme",
    ],
    correctAnswer: "Haddeleme",
  },
  {
    id: 29,
    questionText: "Kaynak işlemlerinde genellikle hangi enerji türü kullanılır?",
    options: [
      "Mekanik enerji",
      "Isı enerjisi",
      "Manyetik enerji",
      "Hidrolik enerji",
    ],
    correctAnswer: "Isı enerjisi",
  },
  {
    id: 30,
    questionText: "Dövme işlemi aşağıdakilerden hangisine örnektir?",
    options: [
      "Talaşlı imalat",
      "Plastik şekil verme",
      "Kaynak",
      "Isıl işlem",
    ],
    correctAnswer: "Plastik şekil verme",
  },
  {
    id: 31,
    questionText: "Isıl işlemlerde kullanılan 'su verme' işlemi ne sağlar?",
    options: [
      "Parlatma",
      "Sertleştirme",
      "Soğutma",
      "Tavlama",
    ],
    correctAnswer: "Sertleştirme",
  },
  {
    id: 32,
    questionText: "Menevişleme işlemi hangi işlemden sonra yapılır?",
    options: [
      "Tavlama",
      "Su verme",
      "Taşlama",
      "Kaynak",
    ],
    correctAnswer: "Su verme",
  },
  {
    id: 33,
    questionText: "Kum kalıba dökümün en büyük avantajı nedir?",
    options: [
      "Yüzey kalitesi",
      "Düşük maliyet",
      "Yüksek hız",
      "Hızlı soğuma",
    ],
    correctAnswer: "Düşük maliyet",
  },
  {
    id: 34,
    questionText: "Ekstrüzyon işleminde hangi hareket kullanılır?",
    options: [
      "Malzemenin kalıptan itilmesi",
      "Döndürülmesi",
      "Talaş kaldırılması",
      "Ergitilmesi",
    ],
    correctAnswer: "Malzemenin kalıptan itilmesi",
  },
  {
    id: 35,
    questionText: "Haddeleme işlemi sonucunda ne elde edilir?",
    options: [
      "Silindirik parçalar",
      "İnceltilmiş levhalar",
      "Parlatılmış yüzey",
      "Sıcak şekillendirme",
    ],
    correctAnswer: "İnceltilmiş levhalar",
  },
  {
    id: 36,
    questionText: "Kalite kontrol neden önemlidir?",
    options: [
      "Maliyeti artırmak için",
      "Üretimde hata payını azaltmak",
      "Parlaklık sağlamak",
      "Renk uyumu için",
    ],
    correctAnswer: "Üretimde hata payını azaltmak",
  },
  {
    id: 37,
    questionText: "Aşağıdakilerden hangisi bir döküm yöntemidir?",
    options: [
      "Kaynak",
      "Kum kalıba döküm",
      "Haddeleme",
      "Taşlama",
    ],
    correctAnswer: "Kum kalıba döküm",
  },
  {
    id: 38,
    questionText: "Hangisi bir kaynak türüdür?",
    options: [
      "Tornalama",
      "TIG Kaynağı",
      "Tavlama",
      "Frezeleme",
    ],
    correctAnswer: "TIG Kaynağı",
  },
  {
    id: 39,
    questionText: "Talaş kaldırmayan işlemlerden biri aşağıdakilerden hangisidir?",
    options: [
      "Ekstrüzyon",
      "Frezeleme",
      "Taşlama",
      "Delme",
    ],
    correctAnswer: "Ekstrüzyon",
  },
  {
    id: 40,
    questionText: "Takım tezgahlarından biri değildir:",
    options: [
      "Torna",
      "Freze",
      "Kompresör",
      "Taşlama makinesi",
    ],
    correctAnswer: "Kompresör",
  },
  {
    id: 41,
    questionText: "EDM işlemi hangi koşulda kullanılır?",
    options: [
      "Ahşap işleme",
      "Sert metal işleme",
      "Plastik kalıplama",
      "Gaz şekil verme",
    ],
    correctAnswer: "Sert metal işleme",
  },
  {
    id: 42,
    questionText: "Soğuk şekillendirme işlemi aşağıdakilerden hangisidir?",
    options: [
      "Tavlama",
      "Çekme",
      "Menevişleme",
      "Sinterleme",
    ],
    correctAnswer: "Çekme",
  },
  {
    id: 43,
    questionText: "Aşağıdaki işlemlerden hangisi yüzey kalitesini artırır?",
    options: [
      "Taşlama",
      "Çekme",
      "Su verme",
      "Tavlama",
    ],
    correctAnswer: "Taşlama",
  },
  {
    id: 44,
    questionText: "Delme işleminde hangi takım kullanılır?",
    options: [
      "Testereler",
      "Matkap",
      "Torna ucu",
      "Planya takımı",
    ],
    correctAnswer: "Matkap",
  },
  {
    id: 45,
    questionText: "Kalite kontrolde hangi cihaz yüksek hassasiyetlidir?",
    options: [
      "Şerit metre",
      "Mikrometre",
      "Cetvel",
      "Mastar",
    ],
    correctAnswer: "Mikrometre",
  },
  {
    id: 46,
    questionText: "Haddeleme işleminin sonucunda ne olur?",
    options: [
      "Parça kalınlaşır",
      "Parça incelir",
      "Parça döner",
      "Parça ısınır",
    ],
    correctAnswer: "Parça incelir",
  },
  {
    id: 47,
    questionText: "Kalıp nedir?",
    options: [
      "Elektrik kaynağı",
      "Taşlama diski",
      "Şekil verme aracı",
      "Termik işlem cihazı",
    ],
    correctAnswer: "Şekil verme aracı",
  },
];

const VeriMadenciligi = [
  {
    id: 1,
    questionText: "Harf, rakam ya da çeşitli sembol ve işaretler ile temsil edilen ham gözlemler, işlenmemiş gerçekler ya da izlenimler hangi kavramın tanımıdır?",
    options: [
      "Veri Madenciliği",
      "Veri Tabanı",
      "Makine Öğrenimi",
      "Veri Yönetimi",
      "Veri"
    ],
    correctAnswer: "Veri"
  },
  {
    id: 2,
    questionText: "Veri madenciliğinde verilerin ilişkilendirilmiş, düzenlenmiş, anlamlandırılmış ve işlenmiş haline verilen ad nedir?",
    options: [
      "Veri",
      "Bilgi",
      "Enformasyon",
      "Sınıflandırma",
      "Bilgelik"
    ],
    correctAnswer: "Enformasyon"
  },
  {
    id: 3,
    questionText: "Aşağıdakilerden hangisi veri madenciliğinin temel kavramlarından değildir?",
    options: [
      "Teknoloji",
      "Enformasyon",
      "Veri",
      "Bilgelik",
      "Bilgi"
    ],
    correctAnswer: "Teknoloji"
  },
  {
    id: 4,
    questionText: "Uzun araştırmalar sonucunda bilgi keşfi yaptığımızı varsayalım. Bulduğumuz bilginin aşağıdaki özelliklerden hangisine sahip olması gerekmez?",
    options: [
      "Anlaşılabilir bir bilgi olmalıdır",
      "Önemli bir bilgi olmalıdır",
      "Gizli bir bilgi olmalıdır",
      "Yararlı bir bilgi olmalıdır",
      "Önceden bilinmeyen bir bilgi olmalıdır"
    ],
    correctAnswer: "Anlaşılabilir bir bilgi olmalıdır"
  },
  {
    id: 5,
    questionText: "Aşağıdakilerden hangisi veri madenciliği çalışmalarından biri değildir?",
    options: [
      "Kümeleme",
      "Veri Bulma",
      "İlişki Kurma",
      "Veri Özetleme",
      "Regresyon"
    ],
    correctAnswer: "Veri Bulma"
  },
  {
    id: 6,
    questionText: "İşletmelere ait veritabanlarının, belirli bir amaca göre konu odaklı olarak düzenlenmiş, veri madenciliğinde doğrudan kullanılabilir duruma getirilmiş hâli aşağıdakilerden hangisidir?",
    options: [
      "OLAP",
      "Veri Deposu",
      "Veri Merkezi",
      "Veri Madenciliği",
      "Veri Ambarı"
    ],
    correctAnswer: "Veri Ambarı"
  },
  {
    id: 7,
    questionText: "İşletmelerde iç veri kaynakları ile dış veri kaynaklarının birleştirilmesi ve düzenlenmesi ile oluşturulmuş, üzerinde veri madenciliği işlemlerinin gerçekleştirileceği veriyi sağlayan geniş ve özel veritabanlarına ne denir?",
    options: [
      "Veri Ambarı",
      "İç Veri",
      "Üst Veri",
      "Veri Deposu",
      "İç Veri Kaynakları"
    ],
    correctAnswer: "Veri Ambarı"
  },
  {
    id: 8,
    questionText: "Veri ambarına aktarılan veriler bir daha değiştirilmeyecek, sadece erişimin ve yeni veri yüklenmesinin mümkün olacağı verilere ne denir?",
    options: [
      "Ham veri",
      "Hareketli olmayan veriler",
      "Farklı tipteki veri",
      "Eksik veri",
      "Dinamik veri"
    ],
    correctAnswer: "Hareketli olmayan veriler"
  },
  {
    id: 9,
    questionText: "Aşağıdakilerden hangisinde \"Data Mart\"ı ifade eden bir tanım vardır?",
    options: [
      "Veri kaynaklarının birleştirilmesiyle başlar",
      "Birbiriyle ilişkili bilgilerin depolandığı alandır",
      "İlişkili verilerin sorgulandığı ve analizlerin yapılabildiği bir depodur",
      "Veri ambarlarının alt kümeleridir",
      "Farklı veritabanları arasında arabulucu katmandır"
    ],
    correctAnswer: "Veri ambarlarının alt kümeleridir"
  },
  {
    id: 10,
    questionText: "Veri pazarlarının iş yükünü azaltmadaki görevi nedir?",
    options: [
      "Veriyi kopyalayıp karar verme işlemi için saklar",
      "Veri ambarının tamamına bakış sağlar",
      "Veri tabanının küçük bir kopyasıdır",
      "Farklı iş birimlerine uygun veri sunar",
      "İlişkili verilerin sorgulanıp analizlerinin yapıldığı depo"
    ],
    correctAnswer: "Farklı iş birimlerine uygun veri sunar"
  },
  {
    id: 11,
    questionText: "İşletmelerin stratejik kararlarında destek olacak yararlı bilgiler sunan analitik işleme sistemi aşağıdakilerden hangisidir?",
    options: [
      "Veri Deposu",
      "Çevrimiçi Analitik İşleme",
      "Meta Veri",
      "Veri Ambarı",
      "Bilgi İşlem"
    ],
    correctAnswer: "Çevrimiçi Analitik İşleme"
  },
  {
    id: 12,
    questionText: "Çevrimiçi Analitik İşleme olarak adlandırılan sistem aşağıdakilerden hangisidir?",
    options: [
      "OLAP",
      "Veri Deposu",
      "Veri Ambarı",
      "NoSQL Veritabanı",
      "Veri Madenciliği"
    ],
    correctAnswer: "OLAP"
  },
  {
    id: 13,
    questionText: "Aşağıdakilerden hangisi bilgi keşfinin aşamalarından biri değildir?",
    options: [
      "Veri bütünleştirme",
      "Veri madenciliği",
      "Veri savunması",
      "Bilgi sunumu",
      "Veri dönüşümü"
    ],
    correctAnswer: "Veri savunması"
  },
  {
    id: 14,
    questionText: "\"Verilerdeki örüntülerin belirlenmesi için veri madenciliği yöntemlerinin uygulanması\" açıklaması hangi aşamaya aittir?",
    options: [
      "Veri madenciliği",
      "Veri temizleme",
      "Veri bütünleştirme",
      "Örüntü değerlendirme",
      "Veri dönüşümü"
    ],
    correctAnswer: "Veri madenciliği"
  },
  {
    id: 15,
    questionText: "Veri tabanlarında bilgi keşfi adımlarından örneklem kümesi elde edildikten sonra hatalı kayıtların çıkarıldığı ve eksik değerlerin değiştirildiği aşama hangisidir?",
    options: [
      "Veri Seçimi",
      "Veri Madenciliği",
      "Yorumlama",
      "Veri Temizleme ve Ön İşleme",
      "Veri Hazırlama"
    ],
    correctAnswer: "Veri Temizleme ve Ön İşleme"
  },
  {
    id: 16,
    questionText: "Aşağıdakilerden hangisi Veri Tabanlarında Bilgi Keşfi sürecinin ilk iki aşamasıdır?",
    options: [
      "Veriler Üzerinde Ön İşlemlerin Yapılması - Modelin İzlenmesi",
      "Amacın Tanımlanması - Veriler Üzerinde Ön İşlemlerin Yapılması",
      "Modelin İzlenmesi - Modelin Kullanılması ve Yorumlanması",
      "Modelin Kullanılması ve Yorumlanması - Modelin Kurulması",
      "Amacın Tanımlanması - Modelin İzlenmesi"
    ],
    correctAnswer: "Amacın Tanımlanması - Veriler Üzerinde Ön İşlemlerin Yapılması"
  },
  {
    id: 17,
    questionText: "Aşağıdakilerden hangisi veri tabanlarında bilgi keşif sürecinde izlenmesi gereken temel aşamalardan değildir?",
    options: [
      "Amacın Tanımlanması",
      "Veriler Üzerinde Ön İşlemlerin Yapılması",
      "Modelin Kullanılması ve Yorumlanması",
      "Modelin İzlenmesi",
      "Modelin Taranması"
    ],
    correctAnswer: "Modelin Taranması"
  },
  {
    id: 18,
    questionText: "Veritabanlarında bilgi keşfi sürecinin adımları hangi sırada verilmiştir? I) Amacın tanımlanması II) Modelin izlenmesi III) Modelin kullanılması ve yorumlanması IV) Veriler üzerinde ön işlemlerin yapılması V) Modelin kurulması ve değerlendirilmesi",
    options: [
      "I-III-V-II-IV",
      "I-IV-V-III-11",
      "V-I-III-IV-II",
      "I-IV-III-II-V",
      "V-IV-I-II-III"
    ],
    correctAnswer: "I-IV-V-III-11"
  },
  {
    id: 19,
    questionText: "Aşağıdakilerden hangisi veri ön işleme aşamalarından değildir?",
    options: [
      "Veri temizleme",
      "Veri birleştirme",
      "Veri dönüşümü",
      "Veri azaltımı",
      "Veri iletimi"
    ],
    correctAnswer: "Veri iletimi"
  },
  {
    id: 20,
    questionText: "Veri hazırlama sürecinde aşağıdakilerden hangisi yoktur?",
    options: [
      "Veri Temizleme",
      "Veri Dönüştürme",
      "Veri Bölme",
      "Veri İndirgeme",
      "Veri Birleştirme"
    ],
    correctAnswer: "Veri Bölme"
  },
  {
    id: 21,
    questionText: "Veri hazırlama süreçlerinden hangisi verideki tutarsızlıkların giderilmesi ve verideki gürültünün temizlenmesi için uygulanır?",
    options: [
      "Veri Dönüştürme",
      "Veri Birleştirme",
      "Veri Temizleme",
      "Veri İndirgeme",
      "Veri Denetimi"
    ],
    correctAnswer: "Veri Temizleme"
  },
  {
    id: 22,
    questionText: "Veri bütünleştirme hangi amaçla yapılır?",
    options: [
      "Birçok veri kaynağını birleştirebilmek",
      "Yapılacak analiz ile ilgili olan verileri belirlemek",
      "Elde edilen bilgilerin kullanıcılara sunumu",
      "İlginç örüntüleri bulmak ve değerlendirmek",
      "Değişen veya eklenen verileri kolayca kullanabilmek"
    ],
    correctAnswer: "Birçok veri kaynağını birleştirebilmek"
  },
  {
    id: 23,
    questionText: "Aşağıdakilerden hangisi veri birleştirme aşamasında karşılaşılabilecek uyumsuzluklardan biri değildir?",
    options: [
      "Farklı zamanlara ait veriler",
      "Farklı ölçü birimleri",
      "Güncelleme hataları",
      "Aynı formatta veriler",
      "Kodlama farklılıkları"
    ],
    correctAnswer: "Aynı formatta veriler"
  },
  {
    id: 24,
    questionText: "Aşağıdakilerden hangisi istatistiksel veri türü değildir?",
    options: [
      "Nümerik Veriler",
      "Nominal Veriler",
      "Koordinat Veriler",
      "Ordinal Veriler",
      "Ratio Veriler"
    ],
    correctAnswer: "Koordinat Veriler"
  },
  {
    id: 25,
    questionText: "Eğitim düzeyi, sosyoekonomik ölçek skorları gibi örnekler hangi istatistiksel veri türüne aittir?",
    options: [
      "Ordinal Veriler",
      "Ratio Veriler",
      "Sürekli Nümerik Veriler",
      "Nümerik Veriler",
      "Nominal Veriler"
    ],
    correctAnswer: "Ordinal Veriler"
  },
  {
    id: 26,
    questionText: "Sıfır başlangıç noktası tüm ölçüm araçlarında aynı anlamı taşıyan değişken tipi hangisidir?",
    options: [
      "İsimsel değişken",
      "Oranlı ölçülendirilmiş değişken",
      "İkili değişken",
      "Sıra gösteren değişken",
      "Tam sayılı değişken"
    ],
    correctAnswer: "Oranlı ölçülendirilmiş değişken"
  },
  {
    id: 27,
    questionText: "Temel değişken veri tiplerinden hangisi 0 ve 1, doğru ve yanlış, pozitif ve negatif şeklinde olan veri tipidir?",
    options: [
      "İkili veri",
      "Sıra gösteren değişken",
      "Tam sayılı değişken",
      "Aralıklı değişken",
      "Oranlı değişken"
    ],
    correctAnswer: "İkili veri"
  },
  {
    id: 28,
    questionText: "Bir anket yapılmış ve katılımcılara \"Sosyal medya kullanıyor musunuz?\" sorusu sorulmuştur. \"Evet/Hayır\" cevabı alınmıştır. Bu hangi veri türüne örnektir?",
    options: [
      "Nümerik veriler",
      "Ordinal veriler",
      "Aralıklı nümerik veriler",
      "Binary veriler",
      "Ratio veriler"
    ],
    correctAnswer: "Binary veriler"
  },
  {
    id: 29,
    questionText: "\"Nümerik verilere benzer. 100 santigrat derece 50 santigrat derecenin 2 katı denilemez ama derece Kelvin'e çevrilirse oran verilebilir.\" Tanımı verilen veri türü nedir?",
    options: [
      "Ratio veriler",
      "Ordinal veriler",
      "Nümerik veriler",
      "Binary veriler",
      "Nominal veriler"
    ],
    correctAnswer: "Ratio veriler"
  },
  {
    id: 30,
    questionText: "Aşağıdakilerden hangisi temel değişken tiplerinden değildir?",
    options: [
      "Tam sayılı değişkenler",
      "Oranlı ölçümlendirilmiş değişkenler",
      "Aralıklı ölçümlendirilmiş değişkenler",
      "İkili değişkenler",
      "Sıralı değişkenler"
    ],
    correctAnswer: "Sıralı değişkenler"
  },
  {
    id: 31,
    questionText: "Veritabanlarında doğru olmayacak kadar uç değerler, aykırı değer ya da sıra dışı değerler genel olarak ne olarak tanımlanır?",
    options: [
      "Kayıp Veri",
      "Denetimsiz Veri",
      "OLAP",
      "Gürültülü Veri",
      "Karmaşık Veri"
    ],
    correctAnswer: "Gürültülü Veri"
  },
  {
    id: 32,
    questionText: "Aşağıdakilerden hangisi veri madenciliği tekniği ile analiz edilmek istenilen verilerdeki beklenen değerlerden sapan aykırı değerler veya hatalardır?",
    options: [
      "Eksik Veri",
      "Tutarsız Veri",
      "Gürültülü Veri",
      "Hatalı Veri",
      "Yanlış Veri"
    ],
    correctAnswer: "Gürültülü Veri"
  },
  {
    id: 33,
    questionText: "Gürültülü veri nasıl düzeltilir?",
    options: [
      "Veri setindeki gürültülü örneklere filtreleme işlemi yapılır",
      "Gürültülü veri analiz için önemlidir, düzeltme yapılmaz",
      "Veri setinin %100 doğru olması için gerekli değildir",
      "Gürültülü verileri görmezden gelmek en iyi yaklaşımdır",
      "Model eğitimi sırasında otomatik olarak düzeltilir"
    ],
    correctAnswer: "Veri setindeki gürültülü örneklere filtreleme işlemi yapılır"
  },
  {
    id: 34,
    questionText: "Aşağıdakilerden hangisi verinin gürültülü olma nedenlerinden biri değildir?",
    options: [
      "İnsan, yazılım ya da donanım problemleri",
      "Veri toplandığı sırada bir nitelik değerinin elde edilememesi",
      "Boyutu büyük olan veri setlerinin bulunması",
      "Veri iletimi sırasında yaşanan problemler",
      "Verinin farklı veri kaynaklarında tutulması"
    ],
    correctAnswer: "Boyutu büyük olan veri setlerinin bulunması"
  },
  {
    id: 35,
    questionText: "Aşağıda verilen ifadelerden hangisi eksik verinin tahmin edilmesi için kullanılan başlıca stratejilerden biri değildir?",
    options: [
      "Eksik verinin el ile doldurulması",
      "Eksik verinin tamamlanmasında genel bir değişkenin kullanılması",
      "Eksik verinin tamamlanmasında genel bir sabitin kullanılması",
      "Eksik verinin kendi sınıfında yer alan değerlerin ortalaması ile tanımlanması",
      "Eksik verinin tamamlanmasında en uygun değerin kullanılması"
    ],
    correctAnswer: "Eksik verinin tamamlanmasında genel bir değişkenin kullanılması"
  },
  {
    id: 36,
    questionText: "Eksik verilerin tamamlanması için hangi yöntem daha doğru sonuçlar verebilir?",
    options: [
      "Veri setinin ortalama değeriyle doldurma",
      "En sık tekrar eden değerle doldurma",
      "Benzer örneklerin ortalamasıyla doldurma",
      "Veri setinin mod değeriyle doldurma",
      "Veri setinin medyan değeriyle doldurma"
    ],
    correctAnswer: "Benzer örneklerin ortalamasıyla doldurma"
  },
  {
    id: 37,
    questionText: "Aşağıdakilerden hangisi eksik veri oluşmasına neden olmaz?",
    options: [
      "Diğer veri kayıtlarıyla tutarsızlığı nedeniyle silinmesi",
      "Fazlasıyla veri kaydı ekleme",
      "Yanlış anlama sonucu kaydedilmeme",
      "Bazı nitelik değerlerinin hatalı olması dolayısıyla silinmesi",
      "Veri girişi sırasında bazı nitelikleri önemsiz görme"
    ],
    correctAnswer: "Fazlasıyla veri kaydı ekleme"
  },
  {
    id: 38,
    questionText: "Veri dönüştürmede düşük düzeydeki verinin kavram hiyerarşisi kullanılarak daha yüksek seviyeye dönüştürülmesine ne ad verilmektedir?",
    options: [
      "Genelleme",
      "Düzeltme",
      "Özellik oluşturma",
      "Bir araya getirme",
      "Normalleştirme"
    ],
    correctAnswer: "Genelleme"
  },
  {
    id: 39,
    questionText: "\"Verilerin kendi içerisinde yeniden düzenlenmesi işlemidir.\" Tanımda verilerin düzenlenmesinde söz konusu olan işlem başlığı aşağıdakilerden hangisidir?",
    options: [
      "Verilerin Dönüştürülmesi",
      "Verilerin Azaltılması",
      "Verilerin Normalizasyonu",
      "Verilerin Görselleştirilmesi",
      "Modelin İzlenmesi"
    ],
    correctAnswer: "Verilerin Dönüştürülmesi"
  },
  {
    id: 40,
    questionText: "Veri dönüştürme sürecinde, veri değerlerinin 0 ile 1 arasında ölçeklenmesini sağlayan yöntem hangisidir?",
    options: [
      "Enk-Enb Normalleştirme",
      "Z-Skor Normalleştirme",
      "Ondalık Ölçekleme",
      "Aralıklı Ölçümlendirilmiş Değişkenler",
      "Tam Sayılı Değişkenler"
    ],
    correctAnswer: "Enk-Enb Normalleştirme"
  },
  {
    id: 41,
    questionText: "Veri madenciliği işlevlerinden veriyi önceden belirlenmiş olan sınıflardan birine dahil eden aşama aşağıdakilerden hangisidir?",
    options: [
      "Eğri Uydurma",
      "Zaman Serileri İnceleme",
      "İstisna Analizi",
      "Sınıflandırma",
      "Kümeleme"
    ],
    correctAnswer: "Sınıflandırma"
  },
  {
    id: 42,
    questionText: "Veri madenciliği işlevinde \"veriyi gerçel değerli bir fonksiyona dönüştürme\" İşlevi aşağıdakilerden hangisidir?",
    options: [
      "Sınıflandırma",
      "Zaman Serileri İnceleme",
      "İstisna Analizi",
      "Özetleme",
      "Eğri Uydurma"
    ],
    correctAnswer: "Eğri Uydurma"
  },
  {
    id: 43,
    questionText: "Veri bir fonksiyona uydurulur. Bir değişkenin değeri diğer bir değişken kullanılarak bulunabilir. Tanımı verilen ifade aşağıdakilerden hangisidir?",
    options: [
      "Veri Birleştirme",
      "Gereksiz Veri",
      "Veri Dönüşümü",
      "Normalizasyon",
      "Eğri Uydurma"
    ],
    correctAnswer: "Eğri Uydurma"
  },
  {
    id: 44,
    questionText: "Aşağıdakilerden hangisi veri madenciliği yöntemlerinden olan denetimli yöntemlerden biri değildir?",
    options: [
      "En yakın k komşuluk",
      "Karar Ağaçları",
      "Sinir Ağları",
      "Birliktelik Kuralları",
      "Aşamalı Kümeleme"
    ],
    correctAnswer: "Aşamalı Kümeleme"
  },
  {
    id: 45,
    questionText: "Aşağıdakilerden hangisi öngörü yöntemlerinden sınıflandırma türlerine örnek verilemez?",
    options: [
      "Karar ağaçları",
      "Bayes sınıflandırma",
      "En uzak komşu",
      "Yapay sinir ağları",
      "En yakın komşu"
    ],
    correctAnswer: "En uzak komşu"
  },
  {
    id: 46,
    questionText: "Aşağıdakilerden hangisi veri madenciliği yöntemlerinden olan öngörü yöntemlerinden biri değildir?",
    options: [
      "Karar Ağaçları",
      "Yapay Sinir Ağları",
      "Sıralı Dizi Analizi",
      "En Yakın Komşu",
      "Bayes Sınıflandırma"
    ],
    correctAnswer: "Sıralı Dizi Analizi"
  },
  {
    id: 47,
    questionText: "Aşağıdakilerden hangisi tanımlayıcı modellerden biri değildir?",
    options: [
      "Özetleme",
      "Birliktelik Kuralları",
      "Yapay Sinir Ağları",
      "İstisna Analizi",
      "Kümeleme"
    ],
    correctAnswer: "Yapay Sinir Ağları"
  },
  {
    id: 48,
    questionText: "Tanımlayıcı modeller, veri madenciliğinde hangi amaçla kullanılır?",
    options: [
      "Gelecekteki olayları tahmin etmek için",
      "Veriler arasındaki ilişkileri tanımlamak ve özellikleri incelemek için",
      "Müşteri memnuniyetini artırmak için",
      "Rekabet avantajı sağlamak için",
      "Pazar payını artırmak için"
    ],
    correctAnswer: "Veriler arasındaki ilişkileri tanımlamak ve özellikleri incelemek için"
  },
  {
    id: 49,
    questionText: "Verileri basit tanımları yapılmış alt gruplar içine yerleştirme işlemidir. Karakterizasyon olarak da adlandırılır. Bu tanımlayıcı modelin adı nedir?",
    options: [
      "Özetleme",
      "Birliktelik Kuralları",
      "Karar Destek Makineleri",
      "Kümeleme",
      "Sıra Örüntü Analizi"
    ],
    correctAnswer: "Özetleme"
  },
  {
    id: 50,
    questionText: "Aşağıdakilerden hangisi Betimsel ve Keşifsel Yöntemlerden değildir?",
    options: [
      "Hiyerarşik Kümeleme Analizi",
      "K-Ortalamalar Kümeleme Analizi",
      "Sınıflandırma Analizi",
      "Birliktelik Kuralları",
      "Kohonen Ağlar"
    ],
    correctAnswer: "Sınıflandırma Analizi"
  },
  {
    id: 51,
    questionText: "Veri madenciliğinde kullanılan kümeleme algoritması olan K-means, hangi temel prensibe dayanır?",
    options: [
      "Hiyerarşik kümeleme",
      "Yoğunluk temelli kümeleme",
      "Merkez tabanlı kümeleme",
      "Doğrusal regresyon"
    ],
    correctAnswer: "Merkez tabanlı kümeleme"
  },
  {
    id: 52,
    questionText: "K-means algoritmasının seçilmesinde aşağıdaki özelliklerden hangisi etkili değildir?",
    options: [
      "Küme sayısının okunan bir parametre olması analizi dar hale getirmektedir",
      "Algoritmanın uygulanması kolaydır ve hızlı çalışmaktadır",
      "Değişik dağılımlarda başarılı sonuçlar alınabilmektedir",
      "Kategorik verilerle çalışacak şekilde adapte edilebilmektedir",
      "Kümeleme sonuçları grafik ve yazı/rakamlarla kolayca ifade edilebilir"
    ],
    correctAnswer: "Küme sayısının okunan bir parametre olması analizi dar hale getirmektedir"
  },
  {
    id: 53,
    questionText: "Karar ağaçları hakkında aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "Karar ağaçları sadece sınıflandırma problemleri için kullanılır",
      "Karar ağaçları regresyon problemleri için uygun değildir",
      "Karar ağaçları, veri setindeki özellikleri ve hedef değişkeni kullanarak karar kuralları oluşturur",
      "Karar ağaçları yalnızca küçük boyutlu veri setleri üzerinde etkili çalışır"
    ],
    correctAnswer: "Karar ağaçları, veri setindeki özellikleri ve hedef değişkeni kullanarak karar kuralları oluşturur"
  },
  {
    id: 54,
    questionText: "Hangisi karar ağaçları için doğru bir ifade değildir?",
    options: [
      "Karar ağaçları sayısal ve kategorik verilerle çalışabilir",
      "Hem sınıflandırma hem de regresyon problemleri için kullanılabilir",
      "Veri kümesindeki elemanları birleştirerek regresyon öğrenmesine katkı sağlar",
      "Sınıflandırma aşamasında veri kümesini bölerek kararlar alır",
      "Veri setinin boyutu eğitim süresini etkileyebilir"
    ],
    correctAnswer: "Veri kümesindeki elemanları birleştirerek regresyon öğrenmesine katkı sağlar"
  },
  {
    id: 55,
    questionText: "Aşağıdakilerden hangisi Apriori Algoritmasının tanımında geçer?",
    options: [
      "Örneklem kümesindeki gereksiz niteliklerdir",
      "Program geliştirmeye yardımcı gösterim teknikleridir",
      "Sıra dışı veri elemanlarını bulmak için kullanılır",
      "Sık geçen örüntülerin yakalanmasında kullanılır",
      "Kitle üyelerinin özelliklerinden biridir"
    ],
    correctAnswer: "Sık geçen örüntülerin yakalanmasında kullanılır"
  },
  {
    id: 56,
    questionText: "Bayes Teoremi ne demektir?",
    options: [
      "Alakalı verilerin saklandığı ortamdır",
      "Bir veri grubunda bir özelliğin olasılığını tahmin etme yöntemidir",
      "Benzer kayıtların gruplandırılmasını sağlayan tekniktir",
      "Etkileşim içindeki bireylerden oluşan topluluktur",
      "Bir şeyin olmasının matematiksel değeridir"
    ],
    correctAnswer: "Bir veri grubunda bir özelliğin olasılığını tahmin etme yöntemidir"
  },
  {
    id: 57,
    questionText: "Bir kümenin tanımlanması için başlangıçta evrenin elemanları hakkında bazı bilgilere gereksinim olduğu varsayımına dayanan yaklaşım aşağıdakilerden hangisidir?",
    options: [
      "Metadata",
      "Naive Bayes",
      "Hipotez",
      "Parametre",
      "Kaba Küme"
    ],
    correctAnswer: "Kaba Küme"
  },
  {
    id: 58,
    questionText: "Aşağıdaki algoritmalardan hangisi sınıflama algoritmasına ait değildir? I) Naive Bayes II) Karar Ağaçları III) Korelasyon Analizi IV) Regresyon Analizi V) Kaba Kümeler",
    options: [
      "Naive Bayes",
      "Karar Ağaçları",
      "Korelasyon Analizi",
      "Regresyon Analizi",
      "Kaba Kümeler"
    ],
    correctAnswer: "Korelasyon Analizi"
  },
  {
    id: 59,
    questionText: "Aşağıdakilerden hangisi veri madenciliğinin etkileşimde olduğu disiplinler arasından biri değildir?",
    options: [
      "İstatistik",
      "Makine Öğrenimi",
      "Görselleştirme",
      "Örüntü Tanıma",
      "İleri Beslenmeli Ağlar"
    ],
    correctAnswer: "İleri Beslenmeli Ağlar"
  },
  {
    id: 60,
    questionText: "Sistem performanslarına etki eden faktörlerin ve kuralların belirlenmesi örneği veri madenciliğinin hangi uygulama alanıdır?",
    options: [
      "Eğitim alanı",
      "Sağlık alanı",
      "Pazarlama alanı",
      "Endüstri ve mühendislik alanı",
      "Finans alanı"
    ],
    correctAnswer: "Endüstri ve mühendislik alanı"
  }
]

const ButunlesikPazarlama = [
  {
    id: 1,
    questionText:
      "Aşağıdakilerden hangisi AIDA modelinin unsurlarından biri değildir?",
    options: [
      "Dikkat çekme",
      "İlgi uyandırma",
      "Araştırma",
      "İstek uyandırma",
      "Harekete geçirme",
    ],
    correctAnswer: "Araştırma",
  },
  {
    id: 2,
    questionText:
      "İki işletme arasında gerçekleşen e-ticaret türü aşağıdakilerden hangisiyle ifade edilir?",
    options: ["B2C", "B2B", "C2C", "C2B", "G2C"],
    correctAnswer: "B2B",
  },
  {
    id: 3,
    questionText:
      "Bir televizyon kanalının, bir işletmenin yeni bir icadıyla ilgili haber yapması ve bu icadı kamuoyuna duyurması aşağıdakilerden hangisiyle adlandırılır?",
    options: [
      "Duyurum",
      "Halkla İlişkiler",
      "Reklam",
      "Satış Tutundurma",
      "Sponsorluk",
    ],
    correctAnswer: "Duyurum",
  },
  {
    id: 4,
    questionText:
      "Aşağıdakilerden hangisi tutundurma (Pazarlama İletişimi) karma elemanlarından değildir?",
    options: [
      "Halkla İlişkiler",
      "Reklam",
      "Satış Tutundurma",
      "Sponsorluk",
      "Ürün planlama",
    ],
    correctAnswer: "Ürün planlama",
  },
  {
    id: 5,
    questionText:
      "Aşağıdakilerden hangisi doğrudan pazarlama yöntemlerinden biri olup potansiyel müşteriler ile doğrudan iletişim kurmak amacıyla kullanılmaktadır?",
    options: [
      "İnternette pazarlama",
      "Reklam",
      "Halkla ilişkiler",
      "Satış tutundurma",
      "Sponsorluk",
    ],
    correctAnswer: "İnternette pazarlama",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi reklam ahlakının kapsamı içinde sayılmaz?",
    options: [
      "Dürüst olmak",
      "Nihai kararı tüketiciye bırakmak",
      "Yanıltmamak",
      "Aşırı ifadelerle ürünü yüceltmek",
      "Rakipleri kötülememek",
    ],
    correctAnswer: "Aşırı ifadelerle ürünü yüceltmek",
  },
  {
    id: 7,
    questionText:
      "Bir reklam mesajının taşıması gereken özellikler dikkate alındığında aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Reklama konu olan şey herhangi bir ürün ve/veya hizmet olabildiği gibi herhangi bir fikir de olabilir.",
      "Reklam, belirli bir ücret karşılığı yapılır.",
      "Reklam kitleye sesleniştir ve kitlesel araçları kullanır.",
      "Reklamı yapan kurum veya kişi belli değildir.",
      "Reklam amacı açıkça belirtilmesi gereken bir iletişimdir.",
    ],
    correctAnswer: "Reklamı yapan kurum veya kişi belli değildir.",
  },
  {
    id: 8,
    questionText:
      "Aşağıdakilerden hangisi kişisel satışın hedeflerinden biri değildir?",
    options: [
      "Mevcut müşteriler ile iletişim kurmak",
      "Sipariş almak",
      "Yeni müşteriler elde etmek",
      "Ödenmiş bir medya vasıtasıyla müşterilere bilgi vermek",
      "Müşterilere teknik bilgi ve yardım sağlamak",
    ],
    correctAnswer: "Ödenmiş bir medya vasıtasıyla müşterilere bilgi vermek",
  },
  {
    id: 9,
    questionText:
      "Satıcının müşterinin ihtiyaçlarını belirleyerek kendi firmasının ürün veya hizmetleri ile eşleştirmeye çabaladığı yüz yüze iletişim biçimi olarak tanımlanan kavram aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Halkla ilişkiler",
      "Doğrudan pazarlama",
      "Reklam",
      "Değer",
    ],
    correctAnswer: "Kişisel satış",
  },
  {
    id: 10,
    questionText:
      "Tüketici tarafından denenmesi amacıyla ürünün ücretsiz sunulduğu satış tutundurma aracı aşağıdakilerden hangisidir?",
    options: [
      "Kuponlar",
      "Örnek ürün dağıtımı",
      "İndirim",
      "Süreklilik programı",
      "Para iadesi",
    ],
    correctAnswer: "Örnek ürün dağıtımı",
  },
  {
    id: 11,
    questionText:
      "Endüstriyel malların tanıtımında kullanılması gereken en önemli pazarlama iletişimi elemanı (tutundurma karması elemanı) hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Kişisel satış",
  },
  {
    id: 12,
    questionText:
      "Aşağıdakilerden hangisi tutundurmanın önemini arttıran nedenlerden değildir?",
    options: [
      "Üreticiler ile tüketiciler arasındaki mesafenin artması",
      "Gelir artışı",
      "Nüfus artışı",
      "Rekabetin artması",
      "Ürün fiyatlarının artması",
    ],
    correctAnswer: "Ürün fiyatlarının artması",
  },
  {
    id: 13,
    questionText:
      "Tutundurma bütçesi, işletmenin finans yöneticisi ile görüşülerek ilgili dönem için ne kadar kaynak ayrılabileceği şeklindeki bilgi çerçevesinde belirleniyorsa hangi yöntem kullanılmıştır?",
    options: [
      "Katlanılabilir Miktar metodu",
      "Satışların yüzdesi metodu",
      "Rakiplerin harcamasını esas alan metot",
      "Amaç ve görev metodu",
      "Hiçbiri",
    ],
    correctAnswer: "Katlanılabilir Miktar metodu",
  },
  {
    id: 14,
    questionText:
      "Çok sayıda kişiye aynı zamanda ulaşabilmesi, marka imajına katkısı, esnek olması ve çok sayıda ortamda yayınlanabilmesi gibi avantajlara sahip olan tutundurma karması elemanı aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Reklam",
  },
  {
    id: 15,
    questionText:
      "İki yönlü iletişim aracı olmaları, müşteriye özel mesajları iletmesi gibi avantajlara sahip olan tutundurma karması elemanı aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Kişisel satış",
  },
  {
    id: 16,
    questionText:
      "Kısa süreli talebi etkilemede başarılı, kısa süreli satış artışı, farklı araçları kullanma esnekliği, diğer araçları destekleme özelliği gibi avantajlara sahip olan tutundurma karması elemanı aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Satış tutundurma (satış geliştirme)",
  },
  {
    id: 17,
    questionText:
      "Daha güvenilir mesajlar olarak görülmeleri, toplam maliyetinin genellikle düşük olması gibi avantajlara sahip olan tutundurma karması elemanı aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Halkla ilişkiler",
  },
  {
    id: 18,
    questionText:
      "\"İletişimin Dijital Dönüşümü Nasıl Gerçekleşiyor?\" adlı parçaya göre Geleneksel medya araçları (Radyo, TV, Gazete ve diğerleri) ile sosyal medya araçları arasındaki en önemli fark nedir?",
    options: [
      "Geleneksel medyada tek taraflı bir ilişki, sosyal medyada iki taraflı bir ilişki söz konusudur",
      "Sosyal medyanın daha pahalı olması",
      "Reklamların daha etkili olması",
      "Geleneksel medyada halkla ilişkilere önem verilmesi",
      "Hiçbiri",
    ],
    correctAnswer:
      "Geleneksel medyada tek taraflı bir ilişki, sosyal medyada iki taraflı bir ilişki söz konusudur",
  },
  {
    id: 19,
    questionText:
      "Çok sayıda veri ve bilginin internet ortamında sınır tanımaksızın çok kısa sürede yayılmasının mümkün hale gelmesi ile önemli bir pazarlama iletişim yolu ve aracı olarak kendini göstermiştir. İnsanlar arasında \"kulaktan kulağa\" deyimi ile de eşleştirilen bu pazarlama şekli aşağıdakilerden hangisidir?",
    options: [
      "İnternette pazarlama",
      "Viral pazarlama",
      "Marka pazarlaması",
      "Ağızdan ağıza pazarlama",
      "Doğrudan pazarlama",
    ],
    correctAnswer: "Viral pazarlama",
  },
  {
    id: 20,
    questionText:
      "\"Günümüz Çok Ekranlı Tüketicisini Anlamak\" adlı parçaya göre günümüz tüketicisinin en önemli özelliği nedir?",
    options: [
      "Çok okuması",
      "Sadece televizyon izlemeyip aynı zamanda TV izlerken sosyal medyayı da kullanması",
      "Reklamların etkisinde çok kalması",
      "Sadece geleneksel medyaya odaklanması",
      "Hiçbiri",
    ],
    correctAnswer:
      "Sadece televizyon izlemeyip aynı zamanda TV izlerken sosyal medyayı da kullanması",
  },
  {
    id: 21,
    questionText:
      "Aşağıdakilerden hangisi reklamları ekonomik açıdan eleştiren kişilerin öne sürdükleri görüşlerden değildir?",
    options: [
      "Reklamlar rekabeti kamçılar",
      "Reklamlar ürünlerin maliyetini yükseltir",
      "Reklamlar ürünlerin fiyatlarını yükseltir",
      "Fonları israf edecek şekilde kullanılmasının yolunu açar",
      "Reklamlar tekelci etkiler oluşturur",
    ],
    correctAnswer: "Reklamlar rekabeti kamçılar",
  },
  {
    id: 22,
    questionText:
      "P. Kotler (2003)'e göre reklamın amaçları dört başlık altında toplanmıştır. Aşağıdakilerden hangisi bu amaçlardan değildir?",
    options: [
      "Bilgi vermek",
      "İkna etmek",
      "Hatırlatmak",
      "Satışları belirli düzeylere getirmek",
      "Pekiştirmek",
    ],
    correctAnswer: "Satışları belirli düzeylere getirmek",
  },
  {
    id: 23,
    questionText:
      "Aşağıdakilerden hangisi İş Yaşamındaki Ahlaki Sorunları Ortaya Çıkaran Faktörlerden değildir?",
    options: [
      "Kar etme amacının diğer sosyal amaçların önüne geçmesi",
      "Personeller arasında yaşanan çıkar çatışmaları",
      "Adalet mekanizmasının yavaşlaması",
      "İşletmede denetim ve kontrol mekanizmasının eksikliği",
      "Çalışanların bireysel ahlaki değer yargıları",
    ],
    correctAnswer: "Adalet mekanizmasının yavaşlaması",
  },
  {
    id: 24,
    questionText:
      "Aşağıdakilerden hangisi İş Yaşamındaki Ahlaki Sorunları Ortaya Çıkaran Faktörlerden değildir?",
    options: [
      "Kar etme amacının diğer sosyal sorumluluk amaçlarının önüne geçmesi",
      "Bireylerin yaşam tarzının değişimiyle birlikte aşırı tüketime yönelim",
      "Reklamların yaygınlaşması",
      "Toplumun ahlaki yapısının zedelenmesi",
      "Çalışanların bireysel ahlaki değer yargıları",
    ],
    correctAnswer: "Reklamların yaygınlaşması",
  },
  {
    id: 25,
    questionText:
      "Satış elemanlarının müşterilerle olan ilişkilerinde ahlaki konular söz konusu olabilmektedir. Aşağıdakilerden hangisi bu ahlaki konulardan değildir?",
    options: [
      "Yüksek baskılı satış",
      "Müşteriler arasında ayrımcılık yapma",
      "Yanlış Tanıtım",
      "Müşteriyi ikna etmek için hediye vermek",
      "Ürün fiyatlarının yükseltilmesi",
    ],
    correctAnswer: "Ürün fiyatlarının yükseltilmesi",
  },
  {
    id: 26,
    questionText:
      "Aşağıdakilerden hangisi Tutundurmanın önemini arttıran faktörlerden değildir?",
    options: [
      "Üreticiler ile tüketiciler arasındaki mesafenin artması",
      "Pazarların büyümesi",
      "İkame malların artması ile rekabetin artması",
      "Aracı kurumların sayısının azalması",
      "Tüketici sayısının artışı",
    ],
    correctAnswer: "Aracı kurumların sayısının azalması",
  },
  {
    id: 27,
    questionText:
      "Talep eğrisinin elastikiyeti tutundurma ile azaltılabilmektedir. Bunun işletmeye sağlayacağı en büyük fayda nedir?",
    options: [
      "Ürünleri kısa sürede tanınır",
      "Ürünlerin satış giderleri azalır",
      "Fiyat yükselse bile satışlar artar",
      "Tutundurma bütçesinden tasarruf edilir",
      "Hiçbiri",
    ],
    correctAnswer: "Fiyat yükselse bile satışlar artar",
  },
  {
    id: 28,
    questionText:
      "Ürünün tasarımı, fiyatı, ambalajının şekli ve rengi ile reklam, satış geliştirme, halkla ilişkiler, doğrudan pazarlama, kişisel satış karma elemanlarını harmanlayarak kullanan bir firma aşağıdakilerden hangisini benimsemiştir?",
    options: [
      "Pazarlama iletişimi",
      "Tutundurma Karması",
      "Bütünleşik pazarlama iletişimi",
      "Reklam karmasını öne çıkarma",
      "Hiçbiri",
    ],
    correctAnswer: "Bütünleşik pazarlama iletişimi",
  },
  {
    id: 29,
    questionText:
      "Aşağıdakilerden hangisi AIDA modelinin unsurlarından biri değildir?",
    options: [
      "Dikkat çekme",
      "İlgi uyandırma",
      "Araştırma",
      "İstek uyandırma",
      "Harekete geçirme",
    ],
    correctAnswer: "Araştırma",
  },
  {
    id: 30,
    questionText:
      "İki işletme arasında gerçekleşen ticaret (veya e-ticaret) türü aşağıdakilerden hangisiyle ifade edilir?",
    options: ["B2C", "B2B", "C2C", "C2B", "4P"],
    correctAnswer: "B2B",
  },
  {
    id: 31,
    questionText:
      "Aşağıdakilerden hangisi tutundurma bütçesi belirlenirken kullanılan metotlardan biri değildir?",
    options: [
      "Satış geliştirme metodu",
      "Katlanılabilir miktar metodu",
      "Rakiplerin harcamalarını esas alma metodu",
      "Amaç-görev metodu",
      "Satış yüzdesi metodu",
    ],
    correctAnswer: "Satış geliştirme metodu",
  },
  {
    id: 32,
    questionText:
      "Aşağıdakilerden hangisi tutundurma (Pazarlama İletişimi) karma elemanlarından değildir?",
    options: [
      "Reklam",
      "Kişisel satış",
      "Ürün Geliştirme",
      "Halkla ilişkiler",
      "Doğrudan pazarlama",
    ],
    correctAnswer: "Ürün Geliştirme",
  },
  {
    id: 33,
    questionText:
      "Aşağıdakilerden hangi ürün türünde, pazarlama iletişimi sağlamak için kişisel satış yöntemi kullanılır?",
    options: ["Kalem", "Şeker", "Şampuan", "Çay", "Tekstil makinası"],
    correctAnswer: "Tekstil makinası",
  },
  {
    id: 34,
    questionText:
      "Bir işletme hakkında ürünlerinin \"sağlıklı olmayan ortamlarda üretildiğine ve çalışan insanların kanser riskine maruz kaldığına\" yönelik olumsuz bir karalama kampanyası ile karşı karşıyadır. Aşağıdaki araçlardan hangisi işletmenin bu durumla mücadele etmesinde en etkin olanıdır?",
    options: [
      "Reklam",
      "Satış Geliştirme",
      "Halkla İlişkiler",
      "Doğrudan Pazarlama",
      "Kişisel Satış",
    ],
    correctAnswer: "Halkla İlişkiler",
  },
  {
    id: 35,
    questionText:
      "Aşağıdakilerden hangisi üretici işletmenin pazarlama iletişimi faaliyetlerini nihai tüketicilere yönelttiği stratejidir?",
    options: [
      "İtme stratejisi",
      "Çekme stratejisi",
      "Pazarlama stratejisi",
      "Farklılaştırma stratejisi",
      "Satış geliştirme stratejisi",
    ],
    correctAnswer: "Çekme stratejisi",
  },
  {
    id: 36,
    questionText:
      "Satıcının müşterinin ihtiyaçlarını belirleyerek kendi firmasının ürün veya hizmetleri ile eşleştirmeye çabaladığı yüz yüze iletişim biçimi olarak tanımlanan kavram aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Halkla ilişkiler",
      "Doğrudan pazarlama",
      "Reklam",
      "Direkt satış",
    ],
    correctAnswer: "Kişisel satış",
  },
  {
    id: 37,
    questionText:
      "Bir markette alış-veriş esnasında yapılan bir anons ile gıda reyonundaki ürünlerden birini alana ikincisinin bedava verileceği duyurulmuştur. Böyle bir durum tutundurma karması (pazarlama iletişimi karması) elemanlarından hangisine girmektedir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Satış tutundurma (satış geliştirme)",
  },
  {
    id: 38,
    questionText:
      "Bir banka elemanı telefonla aradığı banka müşterisine bankacılık ürünlerinden satmak istemektedir. Böyle bir durumda hangi tutundurma karması (pazarlama iletişimi karması) elemanı kullanılmış olmaktadır?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Doğrudan pazarlama",
  },
  {
    id: 39,
    questionText:
      "Beyaz eşya üretimi yapan bir firmanın bir yöneticisi yeni üretmiş olduğu bir televizyon modelini insanlara tanıtabilmek amacı ile basın üyelerini firmaya davet ederek onların olduğu mekânda ürünün özellikleri hakkında bilgi vermesi durumunda hangi tutundurma karması (pazarlama iletişimi karması) elemanı kullanılmış olmaktadır?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Halkla ilişkiler",
  },
  {
    id: 40,
    questionText:
      "Endüstriyel ürünlerin tanıtımında kullanılması gereken en önemli pazarlama iletişimi elemanı (tutundurma karması elemanı) hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Kişisel satış",
  },
  {
    id: 41,
    questionText:
      "Aşağıdakilerden hangisi tutundurmanın önemini arttıran nedenlerden değildir?",
    options: [
      "Üreticiler ile tüketiciler arasındaki mesafenin artması",
      "Gelir artışı",
      "Nüfus artışı",
      "Rekabetin artması",
      "Ürün fiyatlarının artması",
    ],
    correctAnswer: "Ürün fiyatlarının artması",
  },
  {
    id: 42,
    questionText:
      "AIDA modelini kullanarak ürünlerine dikkat çekmek isteyen bir firma hangi tutundurma karması elemanlarını kullanmalıdır?",
    options: [
      "Reklam ve Halkla ilişkiler",
      "Reklam ve Satış geliştirme",
      "Kişisel satış ve satış geliştirme (satış tutundurma)",
      "Doğrudan pazarlama ve kişisel satış",
      "Halkla ilişkiler ve Satış geliştirme",
    ],
    correctAnswer: "Reklam ve Halkla ilişkiler",
  },
  {
    id: 43,
    questionText:
      "Üretmiş oldukları ürünler için AIDA modelini kullanarak insanları satın almaları için harekete geçirmeye çalışan bir firma hangi tutundurma karması elemanlarını kullanmalıdır?",
    options: [
      "Reklam ve Halkla ilişkiler",
      "Reklam ve Satış geliştirme",
      "Kişisel satış ve satış geliştirme (satış tutundurma)",
      "Doğrudan pazarlama ve kişisel satış",
      "Halkla ilişkiler ve Satış geliştirme",
    ],
    correctAnswer: "Kişisel satış ve satış geliştirme (satış tutundurma)",
  },
  {
    id: 44,
    questionText:
      "Tutundurma bütçesi, işletmenin finans yöneticisi ile görüşülerek ilgili dönem için ne kadar kaynak ayrılabileceği şeklindeki bilgi çerçevesinde belirleniyorsa hangi yöntem kullanılmıştır?",
    options: [
      "Katlanılabilir Miktar metodu",
      "Satışların yüzdesi metodu",
      "Rakiplerin harcamasını esas alan metot",
      "Amaç ve görev metodu",
      "Hiçbiri",
    ],
    correctAnswer: "Katlanılabilir Miktar metodu",
  },
  {
    id: 45,
    questionText:
      "Bir işletme yapmış olduğu reklamla tüketicilerin perakendecilere giderek bu ürünü talep etmelerini sağlamaları hangi strateji kapsamında değerlendirilir?",
    options: [
      "İtme stratejisi",
      "Çekme stratejisi",
      "Reklam stratejisi",
      "Pazarlama stratejisi",
      "Hiçbiri",
    ],
    correctAnswer: "Çekme stratejisi",
  },
  {
    id: 46,
    questionText:
      "Aşağıdakilerden hangisi tutundurma karmasının seçimini etkileyen faktörlerden değildir?",
    options: [
      "Tutundurma bütçesi",
      "Pazarın niteliği",
      "Tutundurma karmasının niteliği",
      "Mamulün niteliği",
      "Mamulün hayat seyrindeki dönemi",
    ],
    correctAnswer: "Tutundurma karmasının niteliği",
  },
  {
    id: 47,
    questionText:
      "Çok sayıda kişiye aynı zamanda ulaşabilmesi, marka imajına olumlu katkısı, esnek olması ve çok sayıda ortamda yayınlanabilmesi gibi avantajlara sahip olan tutundurma karması elemanı aşağıdakilerden hangisidir?",
    options: [
      "Kişisel satış",
      "Satış tutundurma (satış geliştirme)",
      "Doğrudan pazarlama",
      "Reklam",
      "Halkla ilişkiler",
    ],
    correctAnswer: "Reklam",
  },
  {
    id: 48,
    questionText:
      "Tutundurma (pazarlama iletişimi) açısından son yıllarda önem kazanan araçlar aşağıdakilerden hangisidir?",
    options: [
      "Dijital ve sosyal medya",
      "Dijital reklamlar",
      "TV reklamları",
      "Bütünleşik pazarlama iletişimi",
      "Pazarlama iletişimi",
    ],
    correctAnswer: "Dijital ve sosyal medya",
  },
  {
    id: 49,
    questionText:
      "Bir pazarlama iletişimcisinin yapacağı ilk şey hedef kitleyi belirlemesidir. Aşağıdakilerden hangisi bu hedef kitle içinde yer almaz?",
    options: [
      "Üst gelir düzeyine sahip olan kişiler",
      "Mevcut müşteriler",
      "Potansiyel müşteriler",
      "Satın alma kararını verenler",
      "Satın alma kararını verenleri etkileyenler",
    ],
    correctAnswer: "Üst gelir düzeyine sahip olan kişiler",
  },
  {
    id: 50,
    questionText:
      "Yeni üretilen bir ürün Mamulün hayat seyrinin ilk aşamasında iken aşağıdakilerden hangisi yapılmaz?",
    options: [
      "Ürünü tanıtıcı reklam",
      "Tüketicilere iskonto ve hediye kuponu",
      "Örnek ürün dağıtımları",
      "Aracılara yönelik tanıtım ziyaretleri",
      "Uygun iletişim araçlarında duyurum",
    ],
    correctAnswer: "Tüketicilere iskonto ve hediye kuponu",
  },
];
 

const MakroIktisat = [
  // ----- I. Bölüm -----
  {
    id: 1,
    questionText:
      "Aşağıdakilerden hangisi GSYH hesaplama yöntemlerinden biri değildir?",
    options: ["Üretim Yöntemi", "Gelir Yöntemi", "Servet", "Harcama Yöntemi"],
    correctAnswer: "Servet",
  },
  {
    id: 2,
    questionText:
      "Üretim faktörlerinin (emek, sermaye vb.) milli gelirden aldıkları payları gösteren gelir dağılımı türü aşağıdakilerden hangisidir?",
    options: ["Kişisel", "Bölgesel", "Fonksiyonel", "Sektörel"],
    correctAnswer: "Fonksiyonel",
  },
  {
    id: 3,
    questionText:
      "Gini katsayısı aşağıdaki eğrilerden hangisi yardımıyla hesaplanır?",
    options: ["Phillips Eğrisi", "Laffer Eğrisi", "IS Eğrisi", "Lorenz"],
    correctAnswer: "Lorenz",
  },
  {
    id: 4,
    questionText:
      "Gini katsayıları sırasıyla X: 0.45, Y: 0.35, Z: 0.28, W: 0.50 olan ülkelerden gelir dağılımı en adil olan ülke aşağıdakilerden hangisidir?",
    options: ["X", "Y", "Z", "W"],
    correctAnswer: "Z",
  },
  {
    id: 5,
    questionText:
      "Bir ekonomide 2024 (baz yıl) A malı fiyatı = 20 TL, B malı fiyatı = 10 TL'dir. 2025 yılında A malı fiyatı = 20 TL ve miktarı = 10 adet; B malı fiyatı = 20 TL ve miktarı = 30 adettir. Buna göre 2025 yılı nominal GSYH'si kaçtır?",
    options: ["500", "600", "700", "800"],
    correctAnswer: "800",
  },
  {
    id: 6,
    questionText:
      "Bir ekonomide 2024 (baz yıl) A malı fiyatı = 20 TL, B malı fiyatı = 10 TL'dir. 2025 yılında A malı fiyatı = 20 TL ve miktarı = 10 adet; B malı fiyatı = 20 TL ve miktarı = 30 adettir. Baz yılı 2024 kabul edildiğinde, 2025 yılı reel GSYH'si kaçtır?",
    options: ["400", "500", "600", "700"],
    correctAnswer: "500",
  },
  {
    id: 7,
    questionText:
      "Ekonomik konjonktürün, üretim ve istihdamın en alt düzeye indiği ve daralmanın en şiddetli yaşandığı evresine ne ad verilir?",
    options: ["Depresyon", "Canlanma", "Tepe", "Genişleme"],
    correctAnswer: "Depresyon",
  },
  {
    id: 8,
    questionText:
      "İşçilerin iş değiştirmeleri veya yeni mezunların iş aramaları nedeniyle ortaya çıkan geçici ve arızi işsizlik türü aşağıdakilerden hangisidir?",
    options: ["Yapısal", "Konjonktürel", "Gizli", "Friksiyonel"],
    correctAnswer: "Friksiyonel",
  },
  {
    id: 9,
    questionText:
      "Doğal işsizlik oranı aşağıdakilerden hangilerinin toplamından oluşur?",
    options: [
      "Yapısal + Friksiyonel",
      "Yapısal + Konjonktürel",
      "Friksiyonel + Konjonktürel",
      "Gizli + Mevsimlik",
    ],
    correctAnswer: "Yapısal + Friksiyonel",
  },
  {
    id: 10,
    questionText:
      "Bir ekonomide sivil nüfus 100.000, kurumsal olmayan sivil nüfus 80.000, işgücü 40.000 ve işsiz sayısı 5.000 ise, işsizlik oranı yüzde kaçtır?",
    options: ["%5", "%10", "%12,5", "%15"],
    correctAnswer: "%12,5",
  },
  {
    id: 11,
    questionText:
      "Bir ekonomideki büyüme hızı ile işsizlik oranı arasındaki ters yönlü ilişkiyi açıklayan iktisadi kural aşağıdakilerden hangisidir?",
    options: ["Okun Kanunu", "Say Kanunu", "Gresham Kanunu", "Lucas Kritiği"],
    correctAnswer: "Okun Kanunu",
  },
  {
    id: 12,
    questionText:
      "Satıcıların daha fazla kâr elde etme güdüsüyle fiyatları artırmaları sonucu ortaya çıkan enflasyon türü aşağıdakilerden hangisidir?",
    options: ["Talep", "Maliyet", "Kar", "Yapısal"],
    correctAnswer: "Kar",
  },
  {
    id: 13,
    questionText:
      "Hükümetin fiyat kontrolü uygulamadığı, fiyatların serbest piyasada belirlendiği enflasyon türüne ne ad verilir?",
    options: ["Bastırılmış", "Açık", "Kronik", "Hiperenflasyon"],
    correctAnswer: "Açık",
  },
  {
    id: 14,
    questionText:
      "Deflasyonist süreçten çıkmak amacıyla, ekonomiyi canlandırmak için fiyatlar genel düzeyinin bilinçli olarak artırılması politikasına ne ad verilir?",
    options: ["Devalüasyon", "Stagnasyon", "Reflasyon", "Stagflasyon"],
    correctAnswer: "Reflasyon",
  },
  {
    id: 15,
    questionText:
      "Enflasyon oranı ile işsizlik oranı arasındaki ters yönlü kısa dönemli ilişkiyi gösteren eğri aşağıdakilerden hangisidir?",
    options: ["Phillips Eğrisi", "Lorenz Eğrisi", "Laffer Eğrisi", "IS Eğrisi"],
    correctAnswer: "Phillips Eğrisi",
  },
  {
    id: 16,
    questionText:
      "Bir ekonomideki sefalet endeksi (misery index) aşağıdakilerden hangisinin toplamıyla hesaplanır?",
    options: [
      "Büyüme Oranı + Enflasyon Oranı",
      "İşsizlik Oranı + Faiz Oranı",
      "Bütçe Açığı + Dış Ticaret Açığı",
      "Enflasyon Oranı + İşsizlik Oranı",
    ],
    correctAnswer: "Enflasyon Oranı + İşsizlik Oranı",
  },
  {
    id: 17,
    questionText:
      "Bir ekonomide bütçe açığı ile dış ticaret açığının aynı anda gerçekleşmesi durumuna ne ad verilir?",
    options: [
      "Likidite Tuzağı",
      "Bütçe açığı ve dış ticaret açığının aynı anda gerçekleşmesi (İkiz Açık)",
      "Yapısal Açık",
      "Bütçe İllüzyonu",
    ],
    correctAnswer:
      "Bütçe açığı ve dış ticaret açığının aynı anda gerçekleşmesi (İkiz Açık)",
  },
 
  // ----- II. Bölüm -----
  {
    id: 18,
    questionText:
      "Aşağıdakilerden hangisi milli gelir modellerinde otonom harcamaların bileşenlerinden biri olup faiz oranına duyarlıdır?",
    options: [
      "Kamu Harcamaları",
      "Yatırım Harcamaları",
      "Tüketim Harcamaları",
      "İhracat",
    ],
    correctAnswer: "Yatırım Harcamaları",
  },
  {
    id: 19,
    questionText:
      "Gelirdeki bir birimlik değişimin tüketim harcamalarında meydana getirdiği değişimi gösteren oran aşağıdakilerden hangisidir?",
    options: [
      "Ortalama Tüketim Eğilimi",
      "Marjinal Tasarruf Eğilimi",
      "Marjinal Tüketim Eğilimi",
      "Ortalama Tasarruf Eğilimi",
    ],
    correctAnswer: "Marjinal Tüketim Eğilimi",
  },
  {
    id: 20,
    questionText:
      "Bir Keynesyen tüketim fonksiyonu C = 100 + 0.4Yd şeklinde ise, bu ekonomiye ait tasarruf fonksiyonu (S) aşağıdakilerden hangisidir?",
    options: [
      "S = 100 - 0.6Yd",
      "S = -100 + 0.4Yd",
      "S = -100 + 0.6Yd",
      "S = 100 + 0.6Yd",
    ],
    correctAnswer: "S = -100 + 0.6Yd",
  },
  {
    id: 21,
    questionText:
      "Marjinal tüketim eğilimi (MPC) ile marjinal tasarruf eğiliminin (MPS) toplamı kaça eşittir?",
    options: ["0", "1", "0.5", "Sonsuz"],
    correctAnswer: "1",
  },
  {
    id: 22,
    questionText:
      "Bir ekonomide marjinal tasarruf eğilimi (MPS) 0.2 ise, marjinal tüketim eğilimi (MPC) kaçtır?",
    options: ["0.2", "0.5", "0.6", "0.8"],
    correctAnswer: "0.8",
  },
  {
    id: 23,
    questionText:
      "Bir ekonomide yatırımlardaki 8.000 birimlik artış milli gelirde 10.000 birimlik artışa yol açıyorsa, yatırımların gelire oranını ifade eden ΔI / ΔY katsayısı kaçtır?",
    options: ["0.2", "0.4", "0.6", "0.8"],
    correctAnswer: "0.8",
  },
  {
    id: 24,
    questionText:
      "Yatırımların faize tamamen duyarsız olduğu durumda, yatırım eğrisinin matematiksel eğimi kaçtır?",
    options: ["Sonsuz", "0", "1", "-1"],
    correctAnswer: "Sonsuz",
  },
  {
    id: 25,
    questionText:
      "Sabit kur rejiminde hükümet kararı ile yerli paranın dış değerinin düşürülmesine ne ad verilir?",
    options: ["Revalüasyon", "Enflasyon", "Deflasyon", "Devalüasyon"],
    correctAnswer: "Devalüasyon",
  },
  {
    id: 26,
    questionText:
      "Sabit kur rejiminde hükümet kararı ile yerli paranın dış değerinin artırılmasına ne ad verilir?",
    options: ["Revalüasyon", "Devalüasyon", "Stagnasyon", "Amortisman"],
    correctAnswer: "Revalüasyon",
  },
  {
    id: 27,
    questionText:
      "Hükümetlerin devalüasyon yapmasının temel amacı aşağıdakilerden hangisidir?",
    options: [
      "Dış ticaret açığını kapatmak",
      "İthalatı artırmak",
      "Enflasyonu düşürmek",
      "Faizleri indirmek",
    ],
    correctAnswer: "Dış ticaret açığını kapatmak",
  },
  {
    id: 28,
    questionText:
      "Merkez bankasının resmi bir müdahale sınırı ilan etmeden, kuru kontrol altında tutmak amacıyla döviz piyasasına zaman zaman müdahale ettiği döviz kuru rejimine ne ad verilir?",
    options: [
      "Sabit Kur",
      "Serbest Dalgalı Kur",
      "Kirli Dalgalanma",
      "Ayarlanabilir Sabit Kur",
    ],
    correctAnswer: "Kirli Dalgalanma",
  },
 
  // ----- IV. Bölüm -----
  {
    id: 29,
    questionText:
      "Aşağıdakilerden hangisi paranın temel fonksiyonel özelliklerinden biri değildir?",
    options: [
      "Değişim aracı olması",
      "Değer biriktirme aracı olması",
      "Sürdürülebilirlik",
      "Hesap birimi olması",
    ],
    correctAnswer: "Sürdürülebilirlik",
  },
  {
    id: 30,
    questionText:
      "\"Kötü para iyi parayı kovar\" şeklinde ifade edilen iktisadi kanun aşağıdakilerden hangisidir?",
    options: ["Say Kanunu", "Okun Kanunu", "Gibson Paradoksu", "Gresham Kanunu"],
    correctAnswer: "Gresham Kanunu",
  },
  {
    id: 31,
    questionText:
      "Arkasında kıymetli maden desteği bulunmayan, devletin yasal gücüne ve ilanına dayanan paraya ne ad verilir?",
    options: ["Temsili Para", "İtibari Para", "Mal Para", "Kaydi Para"],
    correctAnswer: "İtibari Para",
  },
  {
    id: 32,
    questionText:
      "Ticari bankaların kredi açma işlemleri sonucunda mevduat sistemi aracılığıyla yarattıkları paraya ne ad verilir?",
    options: ["Kaydi Para", "İtibari Para", "Temsili Para", "Emisyon"],
    correctAnswer: "Kaydi Para",
  },
  {
    id: 33,
    questionText:
      "Yerleşiklerin ulusal para yerine yabancı para birimlerini kullanmaya ve tasarruflarını bu döviz cinsinden tutmaya başlaması durumuna ne ad verilir?",
    options: ["Seigniorage", "Dolarizasyon", "Monetizasyon", "Reflasyon"],
    correctAnswer: "Dolarizasyon",
  },
  {
    id: 34,
    questionText:
      "Kişilerin ve firmaların likiditeyi (nakit parayı) ellerinde tutma isteğine ne ad verilir?",
    options: ["Para Talebi", "Para Arzı", "Çarpan", "Rezerv"],
    correctAnswer: "Para Talebi",
  },
  {
    id: 35,
    questionText:
      "Keynesyen yaklaşıma göre ihtiyat amacıyla para talebi aşağıdakilerden hangisine bağlıdır?",
    options: ["Faiz Oranı", "Enflasyon", "Gelir", "Servet"],
    correctAnswer: "Gelir",
  },
  {
    id: 36,
    questionText:
      "Keynesyen yaklaşıma göre spekülasyon amacıyla para talebi aşağıdakilerden hangisine bağlıdır?",
    options: ["Faiz Oranı", "Gelir", "Teknolojik Gelişmeler", "Vergi Oranları"],
    correctAnswer: "Faiz Oranı",
  },
  {
    id: 37,
    questionText:
      "LM eğrisinin dikleşmesine (eğiminin artmasına) neden olan durum aşağıdakilerden hangisidir?",
    options: [
      "Para talebinin gelire duyarlılığının düşmesi",
      "Para talebinin faize duyarlılığının artması",
      "Para talebinin gelire duyarlılığı ↑ ve para talebinin faize duyarlılığı ↓",
      "Para arzının artması",
    ],
    correctAnswer:
      "Para talebinin gelire duyarlılığı ↑ ve para talebinin faize duyarlılığı ↓",
  },
  {
    id: 38,
    questionText:
      "Likidite Tercihi Teorisi'ni (Para Talebi Teorisi) ortaya koyan iktisatçı aşağıdakilerden hangisidir?",
    options: ["Friedman", "Fisher", "Keynes", "Marshall"],
    correctAnswer: "Keynes",
  },
  {
    id: 39,
    questionText:
      "Para piyasasında dengeyi sağlayan farklı faiz ve gelir bileşimlerini gösteren eğri aşağıdakilerden hangisidir?",
    options: ["IS Eğrisi", "BP Eğrisi", "AD Eğrisi", "LM Eğrisi"],
    correctAnswer: "LM Eğrisi",
  },
 
  // ----- V. Bölüm -----
  {
    id: 40,
    questionText:
      "Mal piyasasında dengeyi sağlayan farklı faiz ve gelir bileşimlerini gösteren eğri aşağıdakilerden hangisidir?",
    options: ["LM Eğrisi", "IS Eğrisi", "AE Eğrisi", "AS Eğrisi"],
    correctAnswer: "IS Eğrisi",
  },
 
  // ----- VI. Bölüm -----
  {
    id: 41,
    questionText:
      "Mal ve para piyasalarında eşanlı denge aşağıdaki eğrilerden hangisi ile gösterilir?",
    options: [
      "Talep Eğrisi-Arz Eğrisi",
      "IS Eğrisi-LM Eğrisi",
      "AD Eğrisi-AS Eğrisi",
      "Phillips Eğrisi-Lorenz Eğrisi",
    ],
    correctAnswer: "IS Eğrisi-LM Eğrisi",
  },
  {
    id: 42,
    questionText: "Faizlerin ineceği minimum seviyeye ne ad verilmektedir?",
    options: [
      "Likidite Tuzağı",
      "Tasarruf Paradoksu",
      "Tüketim Bilmecesi",
      "Terkip Hatası",
    ],
    correctAnswer: "Likidite Tuzağı",
  },
 
  // ----- VII. Bölüm -----
  {
    id: 43,
    questionText:
      "Dış dengeyi sağlayan farklı faiz oranları ve gelir bileşimlerini gösteren eğriye ne ad verilmektedir?",
    options: ["IS Eğrisi", "LM Eğrisi", "AD Eğrisi", "BP Eğrisi"],
    correctAnswer: "BP Eğrisi",
  },
  {
    id: 44,
    questionText:
      "Bir ülkenin diğer ülkeler ile gerçekleştiği ekonomik işlemleri sistematik olarak kayıt altına alan istatistiki rapor aşağıdakilerden hangisidir?",
    options: [
      "Ödemeler Bilançosu",
      "Gelir-Gider Tablosu",
      "Hesap Cetveli",
      "Arz-Talep Tablosu",
    ],
    correctAnswer: "Ödemeler Bilançosu",
  },
 
  // ----- IX. Bölüm -----
  {
    id: 45,
    questionText:
      "Orijinal Phillips Eğrisi aşağıdakilerden hangi ikisi arasındaki ilişkiyi göstermektedir?",
    options: [
      "Nominal Ücretlerdeki Değişim Oranı ve İşsizlik",
      "Enflasyon ve Ekonomik Büyüme",
      "Ekonomik Büyüme ve İşsizlik",
      "Dış Ticaret Açığı ve Döviz Kuru",
    ],
    correctAnswer: "Nominal Ücretlerdeki Değişim Oranı ve İşsizlik",
  },
];

export const lessons: Lesson[] = [
  {
    id: "Kalkinma Ekonomisi",
    title: "Kalkınma Ekonomisi (Güncellendi)",
    description: `${KalkinmaEkonomisi.length} soruluk tam tarama testi.`,
    accent: "emerald",
    questions: KalkinmaEkonomisi,
  },
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
    title: "Stratejik Yönetim (Slayt +AÖF)",
    description: `${StratejikYonetim.length} soruluk tam tarama testi.`,
    accent: "emerald",
    questions: StratejikYonetim,
  },
  {
    id: "İmalat Silah Sanayi",
    title: "İmalat (silah sanayi)",
    description: `${ImalatSilahSanayi.length} soruluk tam tarama testi.`,
    accent: "amber",
    questions: ImalatSilahSanayi,
  },
  {
    id: "Veri Madenciliği",
    title: "Veri Madenciliği",
    description: `${VeriMadenciligi.length} soruluk tam tarama testi.`,
    accent: "sky",
    questions: VeriMadenciligi,
  },
  {
    id: "Bütünleşik Pazarlama",
    title: "Bütünleşik Pazarlama",
    description: `${ButunlesikPazarlama.length} soruluk tam tarama testi.`,
    accent: "fuchsia",
    questions: ButunlesikPazarlama,
  },
  {
    id: "Makro İktisat",
    title: "Makro İktisat",
    description: `${MakroIktisat.length} soruluk tam tarama testi.`,
    accent: "emerald",
    questions: MakroIktisat,
  },
];
