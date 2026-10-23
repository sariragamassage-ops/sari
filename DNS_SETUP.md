# Panduan Pengaturan DNS — sariraga.site → Vercel

Website sudah tayang di Vercel. Langkah terakhir: arahkan domain `sariraga.site`
ke Vercel dengan mengubah DNS di tempat domain Anda terdaftar.

Saat ini domain masih memakai nameserver parkir (`lunar.dns-parking.com` /
`solar.dns-parking.com` — nameserver Hostinger), sehingga belum menampilkan website.

---

## Catatan Penting Sebelum Mulai

- **Jangan hapus record MX** bila Anda memakai email dengan domain ini
  (misal `admin@sariraga.site`) — record MX tidak ada hubungannya dengan website.
- **Hapus record AAAA** (IPv6) untuk `@` dan `www` bila ada. Vercel tidak
  mendukung IPv6 pada custom domain dan record ini bisa menghambat penerbitan SSL.
- Satu host tidak boleh punya A record dan CNAME record sekaligus.

---

## Pilihan 1 — Ubah Record DNS Saja (disarankan)

Email dan layanan lain tetap aman karena nameserver tidak diubah.

Masuk ke **Hostinger → Domains → sariraga.site → DNS / Nameservers → DNS Records**,
lalu buat/ubah record berikut:

### A. Hapus dulu record parkir

Hapus A record `@` yang nilainya `2.57.91.91` (ini IP parkir Hostinger),
begitu juga A/CNAME `www` bawaan parkir bila ada.

### B. Tambahkan record untuk domain utama

| Type | Name / Host | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `216.198.79.1` | 3600 (atau Auto) |
| A | `@` | `64.29.17.1` | 3600 (atau Auto) |

> Buat **dua** A record untuk `@` dengan nilai berbeda di atas. Bila panel Anda
> hanya mengizinkan satu A record, cukup gunakan `216.198.79.1`.

### C. Tambahkan record untuk www

| Type | Name / Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `8265bbc4d97d7d2e.vercel-dns-017.com` | 3600 (atau Auto) |

> Sebagian panel mengharuskan titik di akhir: `8265bbc4d97d7d2e.vercel-dns-017.com.`
> Bila nilai tersebut ditolak, gunakan alternatif: `cname.vercel-dns.com`

`www.sariraga.site` sudah diatur agar otomatis dialihkan (redirect 308) ke
`sariraga.site`, jadi pengunjung selalu berakhir di satu alamat yang sama.

---

## Pilihan 2 — Pindahkan Nameserver ke Vercel

Vercel mengelola seluruh DNS domain Anda. **Hanya pilih ini bila Anda tidak
memakai email di domain ini**, karena seluruh record lama (termasuk MX) harus
dibuat ulang di Vercel.

Ubah nameserver di Hostinger menjadi:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

## Setelah DNS Diubah

1. Perubahan DNS butuh waktu menyebar: biasanya 15–60 menit, maksimal 24–48 jam.
2. Vercel otomatis menerbitkan sertifikat SSL (HTTPS) begitu DNS terbaca benar.
3. Cek status di **Vercel → Project `sari` → Settings → Domains**. Label
   "Invalid Configuration" akan berubah menjadi "Valid Configuration".

Cek mandiri lewat terminal:

```bash
dig +short sariraga.site
# diharapkan: 216.198.79.1 dan/atau 64.29.17.1

dig +short www.sariraga.site
# diharapkan mengarah ke *.vercel-dns-017.com

curl -I https://sariraga.site
# diharapkan: HTTP/2 200
```

---

## Alamat Website Sementara

Selama menunggu DNS, website sudah bisa diakses di:

**https://sari-three.vercel.app**

---

## Ringkasan Pengaturan Vercel

| Item | Nilai |
| --- | --- |
| Project | `sari` |
| Repo GitHub | `sariragamassage-ops/sari` |
| Production Branch | `main` |
| Root Directory | `frontend` |
| Framework | Create React App |
| Build Command | `yarn build` |
| Output Directory | `build` |
| Domain utama | `sariraga.site` |
| Domain www | `www.sariraga.site` → redirect ke domain utama |

Setiap kali ada push ke branch `main`, Vercel otomatis membangun ulang dan
menayangkan versi terbaru.
