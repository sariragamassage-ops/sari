# Sari Raga Massage — Website Massage Panggilan 24 Jam

Website profil & pemesanan untuk **Sari Raga Massage**, layanan pijat panggilan 24 jam.
Nuansa putih dengan aksen teal mengikuti warna logo, berbahasa Indonesia, dan dirancang
*mobile-first* sehingga terasa seperti aplikasi di ponsel.

## Fitur Utama

- **Slider banner** bernuansa massage (autoplay, swipe, tombol panah, dot indikator)
- **Header menempel (fixed)** yang tidak bergerak saat halaman di-scroll
- **Navigasi bawah ala aplikasi** — Beranda, Harga, Galeri, Artikel, Chat
- **Tombol WhatsApp melayang** di setiap halaman
- **Price list lengkap** dengan tombol pesan per durasi, pesan WhatsApp sudah terisi otomatis
- **Testimoni pelanggan** (carousel), **galeri foto** dengan filter kategori + lightbox
- **Artikel tips kesehatan** (daftar + halaman detail) dan **FAQ** (accordion)
- Seluruh konten disajikan dari MongoDB melalui REST API

## Daftar Harga

| Layanan | 90 menit | 120 menit |
| --- | --- | --- |
| Body Massage | Rp 300.000 | Rp 400.000 |
| Massage Totok Wajah | Rp 350.000 | Rp 400.000 |
| Scrub / Lulur | Rp 400.000 | Rp 500.000 |

**Paket tambahan:** Kerokan — Rp 150.000

## Area Layanan

Jakarta, Tangerang, Bekasi, Depok, Bogor, serta kota besar lainnya di Indonesia
(ketersediaan terapis di luar area utama ditanyakan terlebih dahulu ke admin).

## Teknologi

| Lapisan | Teknologi |
| --- | --- |
| Frontend | React (CRA), React Router, Tailwind CSS, shadcn/ui, Framer Motion, Embla Carousel |
| Backend (opsional) | FastAPI, Motor (async MongoDB driver), Pydantic |
| Database (opsional) | MongoDB |
| Hosting | Vercel (situs statis) |

> **Catatan penting:** website ini tayang sebagai **situs statis** — seluruh konten
> di-*bundle* bersama frontend (`frontend/src/data/content.json`), sehingga tidak
> memerlukan database maupun server untuk tampil. Backend FastAPI tetap disertakan
> di repo dan menyajikan konten yang sama melalui REST API, berguna bila nanti
> dibutuhkan fitur yang menyimpan data (misalnya formulir pemesanan).

## Struktur Proyek

```
backend/
  server.py            # FastAPI app + seluruh endpoint /api (opsional)
  content_seed.py      # SUMBER KEBENARAN seluruh konten website
  export_content.py    # Ekspor konten -> frontend/src/data/content.json
  requirements.txt
frontend/
  vercel.json          # Konfigurasi build & routing untuk Vercel
  public/img/          # Gambar bernuansa spa/massage (di-bundle lokal)
  public/logo.png      # Logo penuh Sari Raga Massage
  src/data/content.json# Konten statis hasil ekspor (jangan diedit manual)
  src/pages/           # Home, Harga, Galeri, Artikel, ArtikelDetail, Faq, NotFound
  src/components/      # Header, BottomNav, HeroSlider, PriceCards, Lightbox, dll.
  src/context/         # SiteContext (menyediakan konten statis ke seluruh halaman)
  src/lib/site.js      # Nomor WhatsApp, format rupiah, template pesan pesanan
```

## Menjalankan Secara Lokal

### Backend

```bash
cd backend
cp .env.example .env        # lalu sesuaikan MONGO_URL & DB_NAME
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Konten awal otomatis di-*seed* ke MongoDB saat backend pertama kali dijalankan
(bersifat idempotent, aman dijalankan berulang kali).

### Frontend

```bash
cd frontend
cp .env.example .env        # arahkan REACT_APP_BACKEND_URL ke backend Anda
yarn install
yarn start
```

## Endpoint API

| Method | Endpoint | Keterangan |
| --- | --- | --- |
| GET | `/api/bootstrap` | Seluruh konten halaman dalam satu panggilan |
| GET | `/api/settings` | Nama brand, nomor WhatsApp, jam operasional, area layanan |
| GET | `/api/hero-slides` | Slide banner |
| GET | `/api/services` | Layanan beserta durasi & harga |
| GET | `/api/addons` | Paket tambahan (Kerokan) |
| GET | `/api/gallery` | Foto galeri |
| GET | `/api/testimonials` | Testimoni pelanggan |
| GET | `/api/faqs` | Daftar pertanyaan & jawaban |
| GET | `/api/steps` | Langkah cara pemesanan |
| GET | `/api/badges` | Poin keunggulan |
| GET | `/api/stats` | Angka ringkasan |
| GET | `/api/articles` | Daftar artikel |
| GET | `/api/articles/{slug}` | Detail artikel + artikel terkait |

## Mengubah Konten

Seluruh teks, harga, testimoni, FAQ, dan artikel berada di `backend/content_seed.py`
(satu-satunya sumber kebenaran). Setelah mengubahnya, jalankan:

```bash
cd backend && python export_content.py
```

Perintah di atas memperbarui `frontend/src/data/content.json`. Commit dan push
kedua berkas tersebut — Vercel akan otomatis membangun ulang dan konten baru tayang.

Nomor WhatsApp tujuan pemesanan diatur di `backend/content_seed.py`
(`WHATSAPP_NUMBER`) dan `frontend/src/lib/site.js`.

## Deploy ke Vercel

Project Vercel terhubung ke repo ini dengan pengaturan:

| Pengaturan | Nilai |
| --- | --- |
| Root Directory | `frontend` |
| Framework Preset | Create React App |
| Build Command | `yarn build` |
| Output Directory | `build` |
| Production Branch | `main` |

Setiap push ke `main` otomatis memicu deployment produksi. Routing SPA dan
cache aset diatur melalui `frontend/vercel.json`.

## Catatan

Sari Raga Massage hanya melayani terapi relaksasi profesional dan sopan. Website ini
tidak memuat formulir pemesanan maupun halaman admin — seluruh pesanan diarahkan
langsung ke WhatsApp admin.
