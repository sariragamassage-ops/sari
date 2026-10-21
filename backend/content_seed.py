"""Seed content (Bahasa Indonesia) untuk website Sari Raga Massage.
Semua konten disimpan ke MongoDB saat startup secara idempotent.
"""

PX = "https://images.pexels.com/photos/{}/pexels-photo-{}.jpeg?auto=compress&cs=tinysrgb&w=1400"


def img(pid: str, w: int = 1400) -> str:
    """Images are bundled locally in frontend/public/img for reliability & speed."""
    return f"/img/{pid}.jpg"


WHATSAPP_NUMBER = "6285780247525"

SITE_SETTINGS = {
    "id": "site",
    "brand_name": "Sari Raga Massage",
    "tagline": "Massage Panggilan 24 Jam",
    "whatsapp_number": WHATSAPP_NUMBER,
    "operating_hours": "Buka 24 jam, setiap hari",
    "primary_areas": ["Jakarta", "Tangerang", "Bekasi", "Depok", "Bogor"],
    "area_note": "Serta kota besar lainnya di Indonesia \u2014 silakan tanyakan dulu ke admin untuk ketersediaan terapis di kota Anda.",
    "email": "halo@sariragamassage.id",
    "instagram": "@sariraga.massage",
}

HERO_SLIDES = [
    {
        "id": "slide-1",
        "order": 1,
        "image": img("7233275"),
        "eyebrow": "Panggilan 24 Jam",
        "title": "Relaksasi Datang ke Pintu Anda",
        "subtitle": "Terapis profesional Sari Raga siap hadir di rumah, apartemen, atau hotel Anda \u2014 kapan pun badan butuh istirahat.",
    },
    {
        "id": "slide-2",
        "order": 2,
        "image": img("3757942"),
        "eyebrow": "Tenang & Higienis",
        "title": "Istirahat Tanpa Keluar Rumah",
        "subtitle": "Tidak perlu macet, tidak perlu antre. Cukup satu chat, suasana spa kami bawa ke ruangan Anda.",
    },
    {
        "id": "slide-3",
        "order": 3,
        "image": img("3997993"),
        "eyebrow": "Totok Wajah",
        "title": "Wajah Segar, Pikiran Lega",
        "subtitle": "Sentuhan lembut di titik-titik wajah dan kepala untuk meredakan penat setelah hari yang panjang.",
    },
    {
        "id": "slide-4",
        "order": 4,
        "image": img("19641816"),
        "eyebrow": "Body Massage",
        "title": "Lepaskan Pegal di Punggung",
        "subtitle": "Teknik pijat relaksasi dengan minyak pilihan untuk otot yang tegang karena kerja dan perjalanan.",
    },
    {
        "id": "slide-5",
        "order": 5,
        "image": img("36531898"),
        "eyebrow": "Harga Transparan",
        "title": "Tanpa Biaya Tersembunyi",
        "subtitle": "Semua tarif tertulis jelas di price list. Konfirmasi dulu lewat WhatsApp, baru terapis berangkat.",
    },
]

SERVICES = [
    {
        "id": "body-massage",
        "slug": "body-massage",
        "order": 1,
        "name": "Body Massage",
        "short": "Pijat relaksasi seluruh badan",
        "description": "Pijat relaksasi menyeluruh dengan tekanan yang bisa disesuaikan \u2014 lembut, sedang, atau agak kuat. Fokus pada punggung, bahu, leher, tangan, dan kaki untuk melepas pegal akibat duduk seharian, menyetir, atau berdiri terlalu lama.",
        "benefits": [
            "Meredakan pegal di bahu, leher, dan pinggang",
            "Membantu tidur lebih nyenyak",
            "Melancarkan peredaran darah",
            "Tekanan pijat bisa diminta sesuai selera",
        ],
        "image": img("19641816"),
        "icon": "HeartHandshake",
        "popular": True,
        "tiers": [
            {"duration": "90 menit", "price": 300000},
            {"duration": "120 menit", "price": 400000},
        ],
    },
    {
        "id": "totok-wajah",
        "slug": "massage-totok-wajah",
        "order": 2,
        "name": "Massage Totok Wajah",
        "short": "Pijat badan + totok wajah",
        "description": "Kombinasi pijat relaksasi dengan totok wajah: penekanan lembut pada titik-titik wajah, kepala, dan sekitar mata. Cocok untuk Anda yang sering lembur, menatap layar seharian, atau sering sakit kepala karena tegang.",
        "benefits": [
            "Membantu meredakan kepala berat dan mata lelah",
            "Wajah terasa lebih segar dan rileks",
            "Membantu mengendurkan otot rahang dan dahi",
            "Sudah termasuk pijat badan ringan",
        ],
        "image": img("3997993"),
        "icon": "Sparkles",
        "popular": False,
        "tiers": [
            {"duration": "90 menit", "price": 350000},
            {"duration": "120 menit", "price": 400000},
        ],
    },
    {
        "id": "scrub-lulur",
        "slug": "scrub-lulur",
        "order": 3,
        "name": "Scrub / Lulur",
        "short": "Perawatan kulit badan",
        "description": "Perawatan badan dengan lulur/scrub untuk mengangkat sel kulit mati, dipadukan dengan pijat relaksasi. Kulit terasa lebih halus, bersih, dan wangi. Pilihan favorit menjelang acara penting atau sekadar me-time akhir pekan.",
        "benefits": [
            "Mengangkat sel kulit mati, kulit terasa halus",
            "Badan terasa lebih ringan dan wangi",
            "Sudah termasuk pijat relaksasi",
            "Bahan lulur lembut dan aman di kulit",
        ],
        "image": img("3764013"),
        "icon": "Flower2",
        "popular": False,
        "tiers": [
            {"duration": "90 menit", "price": 400000},
            {"duration": "120 menit", "price": 500000},
        ],
    },
]

ADDONS = [
    {
        "id": "kerokan",
        "order": 1,
        "name": "Kerokan",
        "short": "Paket tambahan",
        "description": "Kerokan tradisional untuk badan yang terasa masuk angin, meriang, atau tidak enak badan. Bisa ditambahkan ke layanan apa pun.",
        "price": 150000,
        "image": img("5240677"),
        "icon": "Wind",
    }
]

GALLERY = [
    {"id": "g1", "order": 1, "image": img("7233275"), "caption": "Terapis datang langsung ke lokasi Anda", "category": "Layanan"},
    {"id": "g2", "order": 2, "image": img("19641816"), "caption": "Body massage dengan minyak pilihan", "category": "Body Massage"},
    {"id": "g3", "order": 3, "image": img("3997993"), "caption": "Totok wajah yang menenangkan", "category": "Totok Wajah"},
    {"id": "g4", "order": 4, "image": img("36531898"), "caption": "Handuk bersih untuk setiap sesi", "category": "Higienis"},
    {"id": "g5", "order": 5, "image": img("3865676"), "caption": "Aromaterapi dan minyak esensial", "category": "Suasana"},
    {"id": "g6", "order": 6, "image": img("5888075"), "caption": "Minyak pijat yang lembut di kulit", "category": "Suasana"},
    {"id": "g7", "order": 7, "image": img("3757942"), "caption": "Waktu rileks tanpa perlu keluar rumah", "category": "Suasana"},
    {"id": "g8", "order": 8, "image": img("5240677"), "caption": "Pijat kaki untuk yang sering berdiri", "category": "Layanan"},
    {"id": "g9", "order": 9, "image": img("3764013"), "caption": "Scrub & lulur untuk kulit lebih halus", "category": "Scrub/Lulur"},
    {"id": "g10", "order": 10, "image": img("6560312"), "caption": "Set perlengkapan rapi dan steril", "category": "Higienis"},
]

TESTIMONIALS = [
    {
        "id": "t1", "order": 1, "name": "Rina A.", "initials": "RA", "city": "Jakarta Selatan",
        "service": "Body Massage 120 menit", "rating": 5,
        "quote": "Pesan jam 11 malam, terapisnya datang tepat waktu dan sopan banget. Pegal di bahu langsung enteng, besoknya badan segar. Sekarang jadi langganan tiap bulan.",
    },
    {
        "id": "t2", "order": 2, "name": "Dimas P.", "initials": "DP", "city": "Tangerang Selatan",
        "service": "Body Massage 90 menit", "rating": 5,
        "quote": "Kerja dari rumah bikin punggung kaku. Enaknya di sini harga sudah jelas di awal, tidak ada biaya tambahan aneh-aneh. Prosesnya rapi dan profesional.",
    },
    {
        "id": "t3", "order": 3, "name": "Shinta K.", "initials": "SK", "city": "Bekasi",
        "service": "Massage Totok Wajah 90 menit", "rating": 5,
        "quote": "Totok wajahnya juara. Kepala yang tadinya berat jadi ringan, mata juga nggak setegang sebelumnya. Admin fast response, jelas menjelaskan paketnya.",
    },
    {
        "id": "t4", "order": 4, "name": "Bapak Hendra", "initials": "BH", "city": "Depok",
        "service": "Body Massage + Kerokan", "rating": 5,
        "quote": "Istri saya yang pesankan waktu saya masuk angin. Tambah kerokan jadi lega sekali. Terapisnya bawa peralatan sendiri, bersih dan tertib.",
    },
    {
        "id": "t5", "order": 5, "name": "Maya L.", "initials": "ML", "city": "Bogor",
        "service": "Scrub/Lulur 120 menit", "rating": 5,
        "quote": "Lulurnya wangi dan kulit terasa jauh lebih halus. Dipesan buat persiapan kondangan, hasilnya memuaskan. Recommended untuk me-time.",
    },
    {
        "id": "t6", "order": 6, "name": "Andre S.", "initials": "AS", "city": "Jakarta Pusat",
        "service": "Body Massage 90 menit", "rating": 5,
        "quote": "Pesan dari hotel setelah perjalanan dinas. Konfirmasinya cepat, terapis mengikuti prosedur lobby tanpa ribet. Pelayanannya profesional.",
    },
]

FAQS = [
    {"id": "f1", "order": 1, "question": "Apakah benar melayani 24 jam?",
     "answer": "Betul. Admin kami menerima pesanan 24 jam setiap hari, termasuk tengah malam dan hari libur. Ketersediaan terapis menyesuaikan jam dan area, jadi sebaiknya chat dulu untuk memastikan jadwal."},
    {"id": "f2", "order": 2, "question": "Area mana saja yang dilayani?",
     "answer": "Area utama kami adalah Jakarta, Tangerang, Bekasi, Depok, dan Bogor. Untuk kota besar lainnya di Indonesia, silakan tanyakan dulu ke admin mengenai ketersediaan terapis di kota Anda."},
    {"id": "f3", "order": 3, "question": "Apakah layanannya profesional dan aman?",
     "answer": "Sari Raga Massage hanya melayani terapi relaksasi yang profesional dan sopan. Kami tidak melayani permintaan di luar layanan yang tertera pada price list. Terapis kami terlatih dan menjaga etika selama sesi berlangsung."},
    {"id": "f4", "order": 4, "question": "Apakah bisa dipesan ke hotel atau apartemen?",
     "answer": "Bisa. Mohon informasikan nama gedung, nomor unit/kamar, serta aturan akses lobby atau parkir saat chat agar terapis tidak terkendala saat tiba."},
    {"id": "f5", "order": 5, "question": "Perlengkapan apa yang dibawa terapis?",
     "answer": "Terapis membawa matras/alas pijat, handuk bersih, minyak, serta bahan lulur bila Anda memesan scrub. Anda cukup menyiapkan ruangan yang nyaman dan kamar mandi untuk layanan scrub/lulur."},
    {"id": "f6", "order": 6, "question": "Bagaimana cara pembayarannya?",
     "answer": "Pembayaran dilakukan setelah sesi selesai. Opsi tunai dan transfer tersedia \u2014 admin akan menginformasikan detailnya saat konfirmasi pesanan."},
    {"id": "f7", "order": 7, "question": "Apakah ada biaya transport tambahan?",
     "answer": "Harga pada price list sudah mencakup kedatangan terapis untuk area layanan utama. Untuk lokasi yang sangat jauh dari titik terapis, admin akan menginformasikan penyesuaian di awal sebelum Anda menyetujui pesanan."},
    {"id": "f8", "order": 8, "question": "Berapa lama terapis sampai ke lokasi?",
     "answer": "Umumnya 45\u201390 menit sejak konfirmasi, tergantung jarak dan kondisi lalu lintas. Admin akan memberikan estimasi kedatangan saat pesanan dikonfirmasi."},
    {"id": "f9", "order": 9, "question": "Bisakah memilih terapis wanita atau pria?",
     "answer": "Silakan sampaikan preferensi Anda saat chat. Admin akan menyesuaikan dengan ketersediaan terapis pada jam tersebut."},
    {"id": "f10", "order": 10, "question": "Apakah aman untuk ibu hamil atau lansia?",
     "answer": "Untuk ibu hamil, lansia, atau Anda dengan kondisi medis tertentu (cedera, tekanan darah tinggi, pasca operasi), mohon beri tahu admin terlebih dahulu. Kami akan menyesuaikan teknik, atau menyarankan konsultasi dokter bila diperlukan."},
]

ARTICLES = [
    {
        "id": "a1", "order": 1, "slug": "tanda-badan-butuh-dipijat",
        "title": "7 Tanda Badan Anda Sudah Minta Dipijat",
        "category": "Tips Kesehatan",
        "excerpt": "Pegal bukan satu-satunya sinyal. Kenali tanda-tanda halus yang sering diabaikan sebelum badan benar-benar drop.",
        "image": img("3757942"),
        "author": "Tim Sari Raga",
        "read_minutes": 5,
        "published_at": "2025-01-12",
        "content": [
            {"type": "p", "text": "Tubuh biasanya memberi peringatan jauh sebelum benar-benar tumbang. Sayangnya, sinyal itu sering kita anggap angin lalu karena sudah terbiasa dengan rasa lelah. Berikut tanda-tanda yang paling sering muncul dan artinya bagi tubuh Anda."},
            {"type": "h2", "text": "1. Bahu terasa seperti menggendong beban"},
            {"type": "p", "text": "Otot trapezius di bahu adalah tempat favorit stres bersembunyi. Kalau bahu terasa kaku bahkan setelah tidur semalaman, artinya otot tidak pernah benar-benar rileks. Pijat relaksasi membantu mengendurkan serat otot yang menegang terus-menerus."},
            {"type": "h2", "text": "2. Sering sakit kepala di sore hari"},
            {"type": "p", "text": "Sakit kepala tegang (tension headache) sering berasal dari otot leher dan rahang yang kencang, bukan dari kepala itu sendiri. Totok wajah dan pijat leher biasanya memberi kelegaan yang terasa langsung."},
            {"type": "h2", "text": "3. Tidur cukup tapi bangun tetap lelah"},
            {"type": "p", "text": "Kalau tidur 7\u20138 jam tapi tetap merasa belum istirahat, kemungkinan kualitas tidur Anda rendah karena tubuh masih dalam mode siaga. Pijat membantu menurunkan ketegangan sehingga tubuh lebih mudah masuk ke fase tidur dalam."},
            {"type": "h2", "text": "4. Punggung bawah nyeri saat berdiri dari duduk"},
            {"type": "p", "text": "Ini khas pekerja kantoran dan pengemudi. Duduk lama membuat otot pinggul memendek dan punggung bawah bekerja ekstra. Pijat pada area pinggang dan paha belakang sering kali meredakan keluhan ini."},
            {"type": "h2", "text": "5. Kaki terasa berat dan bengkak"},
            {"type": "p", "text": "Berdiri atau berjalan seharian membuat cairan menumpuk di tungkai. Pijat dengan arah ke atas membantu kelancaran sirkulasi sehingga kaki terasa lebih ringan."},
            {"type": "h2", "text": "6. Mudah tersinggung dan sulit fokus"},
            {"type": "p", "text": "Kelelahan fisik dan mental saling terkait. Ketika tubuh tegang, kesabaran ikut menipis. Satu sesi relaksasi sering kali cukup untuk mengembalikan kejernihan pikiran."},
            {"type": "h2", "text": "7. Badan terasa \u2018masuk angin\u2019"},
            {"type": "p", "text": "Rasa meriang, perut kembung, dan badan tidak enak sering diredakan dengan kerokan yang dilakukan dengan benar dan tidak berlebihan."},
            {"type": "quote", "text": "Memijat badan bukan kemewahan \u2014 ini bagian dari perawatan diri yang membuat Anda bisa bekerja lebih lama tanpa tumbang."},
            {"type": "p", "text": "Bila dua atau lebih tanda di atas Anda alami dalam seminggu terakhir, pertimbangkan untuk menjadwalkan sesi relaksasi. Tidak perlu menunggu sampai benar-benar sakit."},
        ],
    },
    {
        "id": "a2", "order": 2, "slug": "persiapan-sebelum-massage-panggilan",
        "title": "Checklist Persiapan Sebelum Terapis Datang ke Rumah",
        "category": "Panduan",
        "excerpt": "Lima menit persiapan membuat sesi 90 menit Anda jauh lebih nyaman. Ini yang perlu disiapkan.",
        "image": img("6560312"),
        "author": "Tim Sari Raga",
        "read_minutes": 4,
        "published_at": "2025-01-20",
        "content": [
            {"type": "p", "text": "Kelebihan massage panggilan adalah Anda bisa langsung rebahan setelah sesi selesai, tanpa perlu pulang. Agar pengalamannya maksimal, siapkan beberapa hal sederhana berikut."},
            {"type": "h2", "text": "Siapkan ruangan yang lapang"},
            {"type": "p", "text": "Terapis membawa matras sendiri, jadi cukup sediakan area lantai atau kasur dengan ruang gerak sekitar 2 x 2 meter. Singkirkan barang yang bisa tersenggol dan pastikan pencahayaan bisa diredupkan."},
            {"type": "h2", "text": "Atur suhu ruangan"},
            {"type": "p", "text": "AC terlalu dingin membuat otot kembali menegang, terlalu panas membuat gerah. Suhu 24\u201326\u00b0C biasanya paling nyaman untuk sesi pijat."},
            {"type": "h2", "text": "Mandi dulu bila sempat"},
            {"type": "p", "text": "Mandi air hangat sebelum sesi membantu otot lebih mudah dikendurkan. Untuk layanan scrub/lulur, pastikan kamar mandi siap digunakan setelah sesi."},
            {"type": "h2", "text": "Jangan makan terlalu kenyang"},
            {"type": "p", "text": "Beri jeda sekitar satu jam setelah makan besar. Perut yang terlalu penuh membuat posisi tengkurap kurang nyaman."},
            {"type": "h2", "text": "Sampaikan kondisi Anda di awal"},
            {"type": "p", "text": "Beri tahu terapis bagian mana yang paling bermasalah, serta riwayat cedera, kehamilan, atau kondisi medis tertentu. Informasi ini membantu terapis menyesuaikan tekanan dan teknik."},
            {"type": "h2", "text": "Informasi lokasi yang jelas"},
            {"type": "p", "text": "Saat chat dengan admin, kirimkan share location, patokan terdekat, serta aturan akses bila Anda tinggal di apartemen atau kompleks. Ini menghemat waktu kedatangan."},
            {"type": "h2", "text": "Setelah sesi selesai"},
            {"type": "p", "text": "Minum air putih yang cukup dan hindari aktivitas berat selama beberapa jam. Biarkan tubuh menikmati efek rileksnya."},
        ],
    },
    {
        "id": "a3", "order": 3, "slug": "manfaat-totok-wajah",
        "title": "Totok Wajah: Bukan Sekadar Perawatan Kecantikan",
        "category": "Tips Kesehatan",
        "excerpt": "Kenapa totok wajah bisa membuat kepala terasa ringan? Ini penjelasan sederhananya.",
        "image": img("3997993"),
        "author": "Tim Sari Raga",
        "read_minutes": 4,
        "published_at": "2025-02-02",
        "content": [
            {"type": "p", "text": "Banyak yang mengira totok wajah hanya soal penampilan. Padahal, area wajah dan kepala dipenuhi otot-otot kecil yang bekerja nyaris tanpa henti \u2014 saat kita mengerutkan dahi, menyipitkan mata ke layar, atau mengatupkan rahang karena stres."},
            {"type": "h2", "text": "Otot wajah juga bisa kelelahan"},
            {"type": "p", "text": "Ketegangan di dahi, pelipis, dan rahang adalah penyebab umum kepala terasa berat di sore hari. Penekanan lembut pada titik-titik ini membantu otot kembali ke panjang normalnya."},
            {"type": "h2", "text": "Membantu sirkulasi di area wajah"},
            {"type": "p", "text": "Gerakan mengurut ke arah tertentu membantu kelancaran peredaran darah dan cairan limfa. Efek yang biasa dirasakan: wajah tampak lebih segar dan tidak sembap, terutama di pagi hari."},
            {"type": "h2", "text": "Mata yang lelah ikut terbantu"},
            {"type": "p", "text": "Bagi Anda yang menatap layar lebih dari delapan jam sehari, penekanan di sekitar alis dan tulang pipi memberi kelegaan yang sering langsung terasa."},
            {"type": "h2", "text": "Efek menenangkan"},
            {"type": "p", "text": "Sentuhan ritmis yang lambat membantu tubuh beralih dari mode siaga ke mode istirahat. Tidak sedikit klien yang tertidur di tengah sesi totok wajah."},
            {"type": "quote", "text": "Totok wajah paling terasa manfaatnya bila dilakukan rutin \u2014 dua hingga empat minggu sekali."},
            {"type": "p", "text": "Di Sari Raga, layanan Massage Totok Wajah sudah dipadukan dengan pijat badan ringan, sehingga Anda mendapat relaksasi menyeluruh dalam satu sesi."},
        ],
    },
    {
        "id": "a4", "order": 4, "slug": "scrub-lulur-untuk-kulit",
        "title": "Scrub dan Lulur: Seberapa Sering Sebaiknya Dilakukan?",
        "category": "Perawatan Tubuh",
        "excerpt": "Terlalu jarang kulit jadi kusam, terlalu sering malah iritasi. Ini panduan frekuensi yang aman.",
        "image": img("3764013"),
        "author": "Tim Sari Raga",
        "read_minutes": 4,
        "published_at": "2025-02-14",
        "content": [
            {"type": "p", "text": "Kulit memperbarui dirinya kira-kira setiap 28 hari. Sel kulit mati yang menumpuk membuat permukaan kulit terasa kasar dan tampak kusam. Di sinilah scrub dan lulur berperan."},
            {"type": "h2", "text": "Frekuensi yang disarankan"},
            {"type": "p", "text": "Untuk kulit normal, satu hingga dua kali sebulan sudah cukup. Kulit sensitif sebaiknya cukup sekali sebulan dengan butiran yang halus. Jangan lakukan scrub pada kulit yang sedang terluka, terbakar matahari, atau sedang berjerawat parah."},
            {"type": "h2", "text": "Perbedaan scrub dan lulur"},
            {"type": "p", "text": "Scrub umumnya berbutir dan bekerja secara mekanis mengangkat sel kulit mati. Lulur tradisional Indonesia biasanya berbahan rempah dan beras, lebih lembut, serta memberi aroma khas yang menenangkan."},
            {"type": "h2", "text": "Jangan lupa pelembap"},
            {"type": "p", "text": "Setelah eksfoliasi, kulit lebih mudah menyerap pelembap. Oleskan losion atau minyak alami segera setelah mandi agar kelembapan terkunci."},
            {"type": "h2", "text": "Waktu terbaik"},
            {"type": "p", "text": "Malam hari adalah waktu ideal, karena kulit tidak langsung terpapar sinar matahari setelah eksfoliasi. Banyak klien memesan layanan ini dua hingga tiga hari sebelum acara penting agar kulit tampil prima."},
        ],
    },
    {
        "id": "a5", "order": 5, "slug": "kerokan-aman",
        "title": "Kerokan yang Benar: Lega Tanpa Berlebihan",
        "category": "Tradisional",
        "excerpt": "Kerokan sudah jadi tradisi turun-temurun. Begini cara menikmatinya dengan aman.",
        "image": img("5240677"),
        "author": "Tim Sari Raga",
        "read_minutes": 3,
        "published_at": "2025-02-26",
        "content": [
            {"type": "p", "text": "Bagi banyak orang Indonesia, kerokan adalah pertolongan pertama saat badan terasa masuk angin. Rasa lega setelah dikerok memang nyata, terutama karena efek hangat dan pelebaran pembuluh darah di permukaan kulit."},
            {"type": "h2", "text": "Tekanan secukupnya saja"},
            {"type": "p", "text": "Warna merah bukan ukuran keberhasilan. Kerokan yang terlalu kuat justru bisa melukai kulit. Terapis kami menggunakan tekanan sedang dengan minyak yang cukup agar alat meluncur tanpa menggores."},
            {"type": "h2", "text": "Arah dan area"},
            {"type": "p", "text": "Dilakukan searah, mengikuti alur tulang punggung dan tulang rusuk, tidak bolak-balik. Area leher dan tulang belakang bagian tengah dihindari agar tidak mengenai tonjolan tulang."},
            {"type": "h2", "text": "Siapa yang sebaiknya menghindari"},
            {"type": "p", "text": "Hindari kerokan bila Anda memiliki gangguan pembekuan darah, sedang mengonsumsi obat pengencer darah, memiliki luka terbuka, atau sedang demam tinggi. Konsultasikan ke dokter bila ragu."},
            {"type": "h2", "text": "Setelah kerokan"},
            {"type": "p", "text": "Jangan langsung mandi atau terkena angin kencang. Kenakan pakaian yang menutup punggung, minum air hangat, dan istirahat yang cukup."},
        ],
    },
    {
        "id": "a6", "order": 6, "slug": "peregangan-pekerja-kantoran",
        "title": "5 Peregangan 3 Menit untuk Pekerja Kantoran",
        "category": "Tips Kesehatan",
        "excerpt": "Bisa dilakukan di kursi kerja. Cocok sebagai perawatan harian di antara jadwal pijat Anda.",
        "image": img("3865676"),
        "author": "Tim Sari Raga",
        "read_minutes": 3,
        "published_at": "2025-03-08",
        "content": [
            {"type": "p", "text": "Pijat membantu melepaskan ketegangan yang sudah menumpuk, tapi kebiasaan harian yang menentukan apakah ketegangan itu kembali dengan cepat. Lima gerakan berikut bisa Anda lakukan di sela pekerjaan."},
            {"type": "h2", "text": "1. Chin tuck"},
            {"type": "p", "text": "Tarik dagu ke belakang seperti membuat dagu berlipat, tahan 5 detik, ulangi 10 kali. Melawan kebiasaan kepala maju ke depan saat menatap layar."},
            {"type": "h2", "text": "2. Peregangan leher samping"},
            {"type": "p", "text": "Miringkan kepala ke kanan, tangan kanan menarik lembut. Tahan 20 detik, ganti sisi. Jangan mengangkat bahu."},
            {"type": "h2", "text": "3. Buka dada di kursi"},
            {"type": "p", "text": "Satukan kedua tangan di belakang punggung, busungkan dada perlahan, tahan 15 detik. Melawan posisi bahu membungkuk."},
            {"type": "h2", "text": "4. Putaran punggung duduk"},
            {"type": "p", "text": "Duduk tegak, putar badan ke satu sisi sambil berpegangan pada sandaran kursi. Tahan 15 detik, ganti sisi."},
            {"type": "h2", "text": "5. Peregangan pergelangan tangan"},
            {"type": "p", "text": "Luruskan satu tangan ke depan, tekuk telapak ke bawah lalu ke atas dengan bantuan tangan lain. Penting bagi pengguna mouse dan keyboard sepanjang hari."},
            {"type": "p", "text": "Lakukan setiap dua jam sekali. Bila ketegangan sudah terlanjur menumpuk dan tidak reda dengan peregangan, itulah saat terbaik untuk menjadwalkan sesi pijat."},
        ],
    },
]

STEPS = [
    {"id": "s1", "order": 1, "title": "Pilih layanan & durasi", "desc": "Tentukan Body Massage, Totok Wajah, atau Scrub/Lulur beserta durasinya. Bisa tambah Kerokan.", "icon": "ListChecks"},
    {"id": "s2", "order": 2, "title": "Chat admin via WhatsApp", "desc": "Kirim alamat, patokan lokasi, dan jam yang diinginkan. Admin aktif 24 jam.", "icon": "MessageCircle"},
    {"id": "s3", "order": 3, "title": "Konfirmasi ketersediaan", "desc": "Admin cek jadwal terapis terdekat dan memberi estimasi kedatangan.", "icon": "CalendarCheck"},
    {"id": "s4", "order": 4, "title": "Terapis datang, Anda rileks", "desc": "Terapis tiba membawa perlengkapan lengkap. Pembayaran setelah sesi selesai.", "icon": "Sparkles"},
]

BADGES = [
    {"id": "b1", "order": 1, "title": "Buka 24 Jam", "desc": "Admin siap melayani kapan pun, termasuk tengah malam dan hari libur.", "icon": "Clock"},
    {"id": "b2", "order": 2, "title": "Terapis Profesional", "desc": "Terlatih, sopan, dan menjaga etika selama sesi berlangsung.", "icon": "ShieldCheck"},
    {"id": "b3", "order": 3, "title": "Higienis & Rapi", "desc": "Handuk bersih, perlengkapan steril, dan minyak berkualitas.", "icon": "Sparkles"},
    {"id": "b4", "order": 4, "title": "Datang ke Lokasi", "desc": "Rumah, apartemen, kos, hingga hotel \u2014 kami yang menghampiri.", "icon": "MapPin"},
    {"id": "b5", "order": 5, "title": "Harga Transparan", "desc": "Tarif tertulis jelas. Tidak ada biaya kejutan di akhir sesi.", "icon": "BadgeCheck"},
    {"id": "b6", "order": 6, "title": "Respons Cepat", "desc": "Balasan WhatsApp rata-rata di bawah 5 menit.", "icon": "Zap"},
]

STATS = [
    {"id": "st1", "label": "Sesi terlayani", "value": "5.000+"},
    {"id": "st2", "label": "Rating pelanggan", "value": "4,9/5"},
    {"id": "st3", "label": "Jam operasional", "value": "24/7"},
    {"id": "st4", "label": "Kota utama", "value": "5"},
]
