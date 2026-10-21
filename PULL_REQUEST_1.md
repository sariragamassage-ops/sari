## Ringkasan

Pull request pertama ini berisi **seluruh kode website Sari Raga Massage** — layanan pijat panggilan 24 jam. Website berbahasa Indonesia, bernuansa putih dengan aksen teal mengikuti warna logo, dan dirancang *mobile-first* sehingga terasa seperti aplikasi di ponsel.

## Yang Termasuk di PR Ini

### Tampilan & Navigasi
- **Header menempel (fixed)** yang tidak bergerak saat halaman di-scroll
- **Navigasi bawah ala aplikasi** — Beranda, Harga, Galeri, Artikel, Chat
- **Tombol WhatsApp melayang** di setiap halaman
- **Slider banner** 5 gambar bernuansa massage: autoplay, bisa digeser, tombol panah, dot indikator

### Halaman
| Rute | Isi |
| --- | --- |
| `/` | Hero slider, statistik, 6 poin keunggulan, 3 kartu layanan, price list, cara pesan 4 langkah, area layanan, testimoni, galeri, artikel, FAQ |
| `/harga` | Price list lengkap + tabel Ringkasan Tarif + catatan penting |
| `/galeri` | Galeri foto dengan filter kategori + lightbox |
| `/artikel` | Daftar artikel tips kesehatan + filter kategori |
| `/artikel/:slug` | Halaman detail artikel + artikel terkait |
| `/faq` | 10 pertanyaan & jawaban (accordion) |
| `*` | Halaman 404 |

### Daftar Harga
| Layanan | 90 menit | 120 menit |
| --- | --- | --- |
| Body Massage | Rp 300.000 | Rp 400.000 |
| Massage Totok Wajah | Rp 350.000 | Rp 400.000 |
| Scrub / Lulur | Rp 400.000 | Rp 500.000 |

**Paket tambahan:** Kerokan — Rp 150.000

### Pemesanan
Seluruh pemesanan diarahkan **langsung ke WhatsApp admin** (`wa.me`), dengan pesan yang sudah terisi otomatis berisi layanan, durasi, harga, serta kolom alamat dan jam. Tidak ada formulir pemesanan maupun halaman admin.

### Area Layanan
Jakarta, Tangerang, Bekasi, Depok, Bogor, serta kota besar lainnya di Indonesia (ketersediaan terapis di luar area utama ditanyakan dulu ke admin).

## Perubahan Teknis

**Backend — FastAPI + MongoDB**
- `backend/server.py` — seluruh endpoint `/api` (read-only) + *seeding* konten yang idempotent saat startup
- `backend/content_seed.py` — seluruh konten website (layanan, harga, slide, galeri, testimoni, FAQ, 6 artikel) terpusat di satu berkas agar mudah direvisi
- Endpoint: `/api/bootstrap`, `/api/settings`, `/api/hero-slides`, `/api/services`, `/api/addons`, `/api/gallery`, `/api/testimonials`, `/api/faqs`, `/api/steps`, `/api/badges`, `/api/stats`, `/api/articles`, `/api/articles/{slug}`

**Frontend — React + Tailwind + shadcn/ui**
- Halaman di `frontend/src/pages/`, komponen di `frontend/src/components/`
- `SiteContext` memuat seluruh konten dalam satu panggilan `/api/bootstrap`
- Animasi dengan Framer Motion, slider dengan Embla Carousel, serta penanganan kondisi *loading* dan *error*
- Gambar bernuansa spa disimpan lokal di `frontend/public/img/` agar cepat dan andal

**Keamanan & Dokumentasi**
- `.gitignore` diperketat: berkas `.env` asli tidak akan pernah ikut ter-*commit*
- Ditambahkan `backend/.env.example` dan `frontend/.env.example` sebagai templat aman
- Ditambahkan `README.md` berisi fitur, price list, cara menjalankan, dan daftar endpoint

## Pengujian
- Backend: seluruh endpoint lolos pengujian, nilai harga diverifikasi sesuai daftar di atas
- Frontend: navigasi, slider, lightbox, accordion, dan seluruh tautan WhatsApp diverifikasi pada tampilan desktop maupun mobile
- Tidak ada *console error* dan tidak ada gambar yang gagal dimuat

## Catatan
Copywriting, testimoni, dan artikel saat ini bersifat **contoh yang bisa direvisi** — seluruhnya dapat diubah dari `backend/content_seed.py`.
