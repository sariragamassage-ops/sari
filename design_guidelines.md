{
  "brand": {
    "name": "Sari Raga Massage",
    "tone": [
      "tenang",
      "bersih",
      "premium-spa",
      "profesional",
      "family-safe",
      "cepat dihubungi"
    ],
    "language": "id-ID",
    "logo": {
      "url": "https://customer-assets-cm19k8pv.emergentagent.net/job_11d52f2c-7cd5-4f72-ac3c-8ddff419b7ef/artifacts/5553257ae78dfc41_Logo%20Spa%20Sari%20Raga%20dengan%20Sentuhan%20Daun.png",
      "usage": {
        "header": "Logo kiri + nama brand. Tinggi logo 28px (mobile) / 32px (desktop).",
        "footer": "Logo kecil 24px + tagline singkat.",
        "favicon": "Gunakan versi ikon/mark jika tersedia; jika tidak, gunakan logo full dengan padding putih."
      }
    }
  },
  "visual_personality": {
    "style_fusion": [
      "Expressive minimalism (banyak whitespace, tipografi rapi)",
      "Soft clinical-luxury (border hairline, kartu putih bersih)",
      "Mobile-app shell (bottom nav dock + sticky header)"
    ],
    "layout_principles": {
      "reading_flow": "F-pattern untuk konten informatif; CTA selalu terlihat (bottom nav + floating WA).",
      "density": "2–3x lebih lega dari default; kartu tidak rapat.",
      "imagery": "Foto spa/massage yang netral, profesional, tidak sugestif; fokus tangan/shoulder/back, towel, oil, ambience bersih."
    }
  },
  "design_tokens": {
    "colors": {
      "rules": {
        "palette_constraint": "WAJIB dominan putih + teal/turquoise logo. Hindari warna tema lain. Netral (abu) diperbolehkan hanya sebagai pendukung (border/text).",
        "no_dark_mode": true
      },
      "hex": {
        "canvas": "#FFFFFF",
        "canvas_subtle": "#F7FBFB",
        "teal": "#3E9A9A",
        "teal_2": "#4FA8A3",
        "teal_ink": "#1F5E5E",
        "teal_soft": "#D9F0EE",
        "text": "#0F172A",
        "text_muted": "#475569",
        "border": "#E6EFF0",
        "shadow": "rgba(15, 23, 42, 0.08)",
        "success": "#3E9A9A",
        "danger": "#B42318",
        "warning": "#B54708"
      },
      "css_variables_hsl_for_shadcn": {
        "note": "Project memakai token HSL shadcn di index.css. Map teal ke primary & ring. Jangan aktifkan .dark.",
        "root": {
          "--background": "0 0% 100%",
          "--foreground": "222.2 84% 4.9%",
          "--card": "0 0% 100%",
          "--card-foreground": "222.2 84% 4.9%",
          "--popover": "0 0% 100%",
          "--popover-foreground": "222.2 84% 4.9%",
          "--primary": "180 42% 43%",
          "--primary-foreground": "0 0% 100%",
          "--secondary": "180 25% 96%",
          "--secondary-foreground": "180 45% 18%",
          "--muted": "210 20% 96%",
          "--muted-foreground": "215 16% 47%",
          "--accent": "180 25% 96%",
          "--accent-foreground": "180 45% 18%",
          "--destructive": "0 74% 42%",
          "--destructive-foreground": "0 0% 100%",
          "--border": "186 28% 92%",
          "--input": "186 28% 92%",
          "--ring": "180 42% 43%",
          "--radius": "0.9rem"
        }
      },
      "tailwind_extension": {
        "note": "Jika perlu extend tailwind.config.js, tambahkan warna brand agar mudah dipakai.",
        "colors": {
          "brand": {
            "50": "#F2FBFA",
            "100": "#D9F0EE",
            "200": "#B7E2DE",
            "300": "#86CEC8",
            "400": "#4FA8A3",
            "500": "#3E9A9A",
            "600": "#2F7C7C",
            "700": "#256363",
            "800": "#1F4F4F",
            "900": "#1B4242"
          }
        }
      },
      "gradients_and_texture": {
        "gradient_restriction": "Ikuti GRADIENT RESTRICTION RULE. Untuk brand ini, gunakan wash teal yang sangat lembut saja.",
        "allowed_background_wash": {
          "hero": "radial-gradient(1200px 600px at 20% 0%, rgba(79,168,163,0.18), rgba(255,255,255,0) 60%), radial-gradient(900px 500px at 90% 20%, rgba(62,154,154,0.12), rgba(255,255,255,0) 55%)",
          "section_alt": "linear-gradient(180deg, rgba(217,240,238,0.55), rgba(255,255,255,0) 70%)"
        },
        "noise_overlay": {
          "usage": "Tambahkan noise halus global (2–4% opacity) via pseudo-element pada body atau wrapper utama.",
          "css_snippet": "body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.18\"/></svg>');opacity:.035;mix-blend-mode:multiply;}"
        }
      }
    },
    "typography": {
      "google_fonts": {
        "heading": {
          "family": "Space Grotesk",
          "weights": [500, 600, 700],
          "why": "Terasa modern-premium, rapi untuk headline dan angka harga."
        },
        "body": {
          "family": "Inter",
          "weights": [400, 500, 600],
          "why": "Sangat terbaca di mobile, cocok untuk artikel & FAQ."
        }
      },
      "css": {
        "note": "Implement via index.css: set font-family body ke Inter, heading class memakai Space Grotesk.",
        "snippet": ":root{--font-sans:'Inter',ui-sans-serif,system-ui;--font-heading:'Space Grotesk','Inter',ui-sans-serif;} body{font-family:var(--font-sans);} .font-heading{font-family:var(--font-heading);}"
      },
      "scale": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight",
        "h2": "text-base md:text-lg font-medium text-slate-700",
        "section_title": "text-xl sm:text-2xl font-heading font-semibold",
        "body": "text-sm sm:text-base leading-relaxed text-slate-900",
        "small": "text-xs sm:text-sm text-slate-600"
      }
    },
    "spacing_and_layout": {
      "container": {
        "mobile": "px-4",
        "desktop": "max-w-[1100px] mx-auto px-6",
        "app_shell": "Desktop tetap terasa seperti app: gunakan wrapper max-w + background putih, jangan full-bleed teks panjang."
      },
      "section_spacing": {
        "y": "py-10 sm:py-14",
        "gap": "gap-6 sm:gap-8"
      },
      "radii": {
        "card": "rounded-2xl",
        "button": "rounded-xl",
        "pill": "rounded-full",
        "bottom_nav": "rounded-t-2xl"
      },
      "shadows": {
        "card": "shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
        "floating": "shadow-[0_14px_40px_rgba(15,23,42,0.12)]"
      },
      "borders": {
        "default": "border border-[color:var(--border)]",
        "hairline": "border border-slate-200/70"
      }
    }
  },
  "copywriting_id": {
    "brand_tagline": "Panggilan 24 Jam • Terapis Profesional • Datang ke Lokasi Anda",
    "hero": {
      "headline": "Massage Panggilan 24 Jam di Jabodetabek",
      "subheadline": "Relaksasi yang rapi, higienis, dan profesional—langsung ke rumah, apartemen, atau hotel Anda. Harga jelas. Chat WhatsApp sekarang.",
      "primary_cta": "Chat WhatsApp",
      "secondary_cta": "Lihat Harga"
    },
    "trust_badges": [
      {"title": "24 Jam", "desc": "Siap bantu kapan pun"},
      {"title": "Terapis Wanita Profesional", "desc": "Ramah & terlatih"},
      {"title": "Higienis", "desc": "Peralatan bersih & rapi"},
      {"title": "Datang ke Lokasi", "desc": "Rumah • Apartemen • Hotel"}
    ],
    "cara_pesan": {
      "title": "Cara Pesan (Cepat, Tanpa Ribet)",
      "steps": [
        {"title": "Pilih layanan & durasi", "desc": "Body massage, totok wajah, atau scrub/lulur."},
        {"title": "Kirim lokasi & jadwal", "desc": "Alamat, patokan, dan jam yang diinginkan."},
        {"title": "Konfirmasi & terapis berangkat", "desc": "Admin konfirmasi ketersediaan dan estimasi kedatangan."}
      ]
    },
    "area_layanan": {
      "title": "Area Layanan",
      "desc": "Jakarta • Tangerang • Bekasi • Depok • Bogor + kota besar lain (cek ketersediaan ke admin)."
    },
    "cta_strip": {
      "title": "Siap relaks sekarang?",
      "desc": "Klik WhatsApp—admin bantu rekomendasikan layanan yang paling cocok.",
      "cta": "Chat Admin"
    },
    "faq_seed": [
      {"q": "Apakah benar 24 jam?", "a": "Ya, kami menerima permintaan 24 jam. Ketersediaan terapis menyesuaikan jadwal dan area."},
      {"q": "Apakah layanan ini profesional dan aman?", "a": "Kami fokus pada terapi relaksasi yang profesional, rapi, dan family-safe. Tidak melayani permintaan di luar layanan yang tertera."},
      {"q": "Bisa untuk hotel/apartemen?", "a": "Bisa. Kirim detail lokasi dan aturan akses (lobby/parkir) via WhatsApp."},
      {"q": "Metode pembayaran?", "a": "Konfirmasi metode pembayaran saat chat. Admin akan informasikan opsi yang tersedia."}
    ]
  },
  "pages_blueprint": {
    "global_shell": {
      "sticky_header": {
        "requirement": "Header harus sticky dan TIDAK bergerak/hide saat scroll.",
        "spec": {
          "height": "h-14 sm:h-16",
          "position": "fixed top-0 inset-x-0 z-50",
          "background": "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70",
          "border": "border-b border-slate-200/70",
          "content": "Logo + nama brand kiri; kanan: tombol WhatsApp (desktop) + menu (mobile sheet).",
          "data_testids": {
            "logo": "header-logo",
            "whatsapp": "header-whatsapp-button",
            "menu": "header-menu-button"
          }
        },
        "shadcn_components": [
          "/app/frontend/src/components/ui/button.jsx",
          "/app/frontend/src/components/ui/sheet.jsx",
          "/app/frontend/src/components/ui/navigation-menu.jsx",
          "/app/frontend/src/components/ui/separator.jsx"
        ]
      },
      "bottom_nav": {
        "requirement": "Bottom navigation bar persisten (app-style).",
        "spec": {
          "position": "fixed bottom-0 inset-x-0 z-50",
          "safe_area": "pb-[calc(env(safe-area-inset-bottom)+0.75rem)]",
          "height": "min-h-[72px]",
          "background": "bg-white/92 backdrop-blur supports-[backdrop-filter]:bg-white/70",
          "border": "border-t border-slate-200/70",
          "desktop_behavior": "Pada desktop: tampilkan sebagai dock kecil di bawah (max-w) atau sembunyikan di md+ jika header nav sudah lengkap. Rekomendasi: tampilkan sampai md, lalu hide di lg untuk kesan web premium.",
          "items": [
            {"label": "Beranda", "route": "/", "icon": "Home", "testid": "bottom-nav-home"},
            {"label": "Harga", "route": "/harga", "icon": "Tag", "testid": "bottom-nav-pricing"},
            {"label": "Galeri", "route": "/galeri", "icon": "Images", "testid": "bottom-nav-gallery"},
            {"label": "Artikel", "route": "/artikel", "icon": "Newspaper", "testid": "bottom-nav-articles"},
            {"label": "Chat", "route": "wa.me", "icon": "MessageCircle", "testid": "bottom-nav-chat"}
          ],
          "interaction": "Active state: teks + ikon teal, background pill tipis teal_soft."
        },
        "icons": {
          "library": "lucide-react",
          "note": "Jangan pakai emoji."
        }
      },
      "floating_whatsapp": {
        "spec": {
          "position": "fixed bottom-[92px] right-4 z-50",
          "size": "h-12 w-12",
          "style": "bg-[color:var(--brand-500)] text-white rounded-full shadow-floating",
          "testid": "floating-whatsapp-button",
          "link": "https://wa.me/6285780247525"
        }
      },
      "content_insets": {
        "top": "pt-16 sm:pt-20 (untuk offset header fixed)",
        "bottom": "pb-24 (untuk offset bottom nav)"
      }
    },
    "home": {
      "sections_order": [
        "Hero Banner Slider",
        "Trust/Benefit Badges",
        "Layanan Unggulan",
        "Ringkasan Harga (teaser)",
        "Cara Pesan (3 langkah)",
        "Area Layanan",
        "Testimoni (carousel)",
        "Galeri (preview grid)",
        "Artikel (preview list)",
        "FAQ (preview accordion)",
        "Footer CTA"
      ],
      "hero_slider": {
        "component": "/app/frontend/src/components/ui/carousel.jsx",
        "spec": {
          "height": "h-[420px] sm:h-[520px]",
          "slides": "3–5 gambar, auto-rotate 5s, pause on hover (desktop), swipe on mobile, dots indicator.",
          "overlay": "Gradient wash lembut (teal) + scrim putih tipis agar teks terbaca.",
          "content_layout": "Z-pattern: headline kiri atas, CTA bawah, badge 24 jam kecil.",
          "cta": {
            "primary": {"label": "Chat WhatsApp", "href": "https://wa.me/6285780247525", "testid": "hero-whatsapp-cta"},
            "secondary": {"label": "Lihat Price List", "href": "/harga", "variant": "outline", "testid": "hero-pricing-cta"}
          }
        }
      },
      "trust_badges": {
        "component": "/app/frontend/src/components/ui/badge.jsx",
        "layout": "Bento 2x2 di mobile, 4 kolom di desktop. Setiap badge punya ikon lucide + judul + deskripsi.",
        "testid_prefix": "trust-badge"
      },
      "services": {
        "component": "/app/frontend/src/components/ui/card.jsx",
        "layout": "Card grid 1 kolom (mobile) -> 3 kolom (lg).",
        "cards": [
          {"title": "Body Massage", "desc": "Relaksasi otot, bantu pulihkan badan lelah.", "testid": "service-card-body"},
          {"title": "Totok Wajah", "desc": "Rileks, bantu segarkan area wajah & kepala.", "testid": "service-card-face"},
          {"title": "Scrub/Lulur", "desc": "Perawatan kulit agar terasa lebih halus & bersih.", "testid": "service-card-scrub"}
        ]
      },
      "pricing_teaser": {
        "layout": "2 kartu highlight + 1 kartu add-on. CTA ke halaman Harga.",
        "testid": "home-pricing-teaser"
      },
      "testimonials": {
        "component": "/app/frontend/src/components/ui/carousel.jsx",
        "spec": "Carousel 1 kartu per slide (mobile), 2 per slide (md). Gunakan Avatar + rating bintang (ikon) + kutipan singkat.",
        "testid": "testimonial-carousel"
      },
      "gallery_preview": {
        "layout": "Grid 2 kolom (mobile) -> 4 kolom (md). Klik membuka lightbox dialog.",
        "components": [
          "/app/frontend/src/components/ui/dialog.jsx",
          "/app/frontend/src/components/ui/aspect-ratio.jsx"
        ],
        "testid": "home-gallery-preview"
      },
      "articles_preview": {
        "layout": "List card (thumbnail kecil kiri, judul + excerpt kanan).",
        "components": [
          "/app/frontend/src/components/ui/card.jsx",
          "/app/frontend/src/components/ui/badge.jsx"
        ],
        "testid": "home-articles-preview"
      },
      "faq_preview": {
        "component": "/app/frontend/src/components/ui/accordion.jsx",
        "spec": "Accordion single-open. Pertanyaan ringkas, jawaban jelas.",
        "testid": "home-faq-preview"
      }
    },
    "harga": {
      "layout": "Header section + price cards per layanan. Setiap layanan punya 2 tier durasi + CTA WhatsApp.",
      "price_cards": {
        "component": "/app/frontend/src/components/ui/card.jsx",
        "spec": {
          "tiers": [
            {"duration": "90 menit", "price": "Rp 300.000"},
            {"duration": "120 menit", "price": "Rp 400.000"}
          ],
          "services": [
            {
              "name": "Body Massage",
              "tiers": [
                {"duration": "90 menit", "price": "Rp 300.000"},
                {"duration": "120 menit", "price": "Rp 400.000"}
              ],
              "testid": "pricing-card-body"
            },
            {
              "name": "Massage Totok Wajah",
              "tiers": [
                {"duration": "90 menit", "price": "Rp 350.000"},
                {"duration": "120 menit", "price": "Rp 400.000"}
              ],
              "testid": "pricing-card-face"
            },
            {
              "name": "Scrub/Lulur",
              "tiers": [
                {"duration": "90 menit", "price": "Rp 400.000"},
                {"duration": "120 menit", "price": "Rp 500.000"}
              ],
              "testid": "pricing-card-scrub"
            },
            {
              "name": "Paket Tambahan: Kerokan",
              "tiers": [{"duration": "Add-on", "price": "Rp 150.000"}],
              "testid": "pricing-card-kerokan"
            }
          ],
          "cta": {
            "label": "Pesan via WhatsApp",
            "href_template": "https://wa.me/6285780247525?text={ENCODED_MESSAGE}",
            "message_examples": [
              "Halo admin Sari Raga Massage, saya mau pesan Body Massage 90 menit. Lokasi saya di [alamat], untuk jam [jam].",
              "Halo admin, saya mau Totok Wajah 120 menit + Kerokan. Lokasi [alamat], jadwal [jam]."
            ]
          }
        }
      }
    },
    "galeri": {
      "layout": "Grid foto + filter sederhana (opsional) + lightbox dialog.",
      "components": [
        "/app/frontend/src/components/ui/dialog.jsx",
        "/app/frontend/src/components/ui/scroll-area.jsx",
        "/app/frontend/src/components/ui/aspect-ratio.jsx"
      ],
      "testid": "gallery-page"
    },
    "artikel": {
      "list": {
        "layout": "List card dengan kategori badge (Tips, Relaksasi, Kesehatan).",
        "components": [
          "/app/frontend/src/components/ui/card.jsx",
          "/app/frontend/src/components/ui/pagination.jsx"
        ],
        "testid": "articles-list-page"
      },
      "detail": {
        "layout": "Typography-focused: judul besar, meta kecil, konten dengan max-w-prose, TOC opsional.",
        "components": [
          "/app/frontend/src/components/ui/separator.jsx",
          "/app/frontend/src/components/ui/breadcrumb.jsx"
        ],
        "testid": "article-detail-page"
      }
    },
    "faq": {
      "layout": "Accordion full page + CTA strip ke WhatsApp.",
      "components": [
        "/app/frontend/src/components/ui/accordion.jsx",
        "/app/frontend/src/components/ui/card.jsx"
      ],
      "testid": "faq-page"
    }
  },
  "component_specs": {
    "buttons": {
      "variants": {
        "primary": "bg-[color:var(--brand-500)] text-white hover:bg-[color:var(--brand-600)] focus-visible:ring-[color:var(--brand-500)]",
        "secondary": "bg-[color:var(--brand-50)] text-[color:var(--brand-800)] hover:bg-[color:var(--brand-100)]",
        "outline": "border border-[color:var(--brand-200)] text-[color:var(--brand-800)] hover:bg-[color:var(--brand-50)]",
        "ghost": "text-[color:var(--brand-800)] hover:bg-[color:var(--brand-50)]"
      },
      "sizes": {
        "md": "h-11 px-4 text-sm",
        "lg": "h-12 px-5 text-sm"
      },
      "motion": "hover: translateY(-1px) + shadow ringan; active: scale(0.98). Jangan pakai transition-all."
    },
    "cards": {
      "base": "rounded-2xl border border-slate-200/70 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
      "header": "space-y-1",
      "content": "space-y-4",
      "micro_interaction": "hover (desktop): shadow sedikit naik + border jadi brand-200."
    },
    "slider": {
      "hero": {
        "autoplay": "setInterval 5000ms; pause on user interaction.",
        "swipe": "Gunakan shadcn carousel (embla) untuk swipe.",
        "dots": "Dots kecil 8px, active brand-500, inactive slate-300.",
        "performance": "Gunakan loading='lazy' untuk slide non-aktif; prefetch 1 slide berikutnya."
      }
    },
    "lightbox": {
      "implementation": "Gunakan shadcn Dialog. Isi: gambar besar + caption + tombol next/prev.",
      "a11y": "Focus trap default dialog; tombol close jelas.",
      "testids": {
        "open": "gallery-image-button",
        "dialog": "gallery-lightbox-dialog",
        "close": "gallery-lightbox-close"
      }
    },
    "faq_accordion": {
      "implementation": "shadcn Accordion type='single' collapsible.",
      "testids": {
        "item": "faq-item",
        "trigger": "faq-trigger",
        "content": "faq-content"
      }
    }
  },
  "motion_and_microinteractions": {
    "library": {
      "recommended": "framer-motion",
      "why": "Entrance animation halus untuk section, slider caption, dan bottom nav active indicator.",
      "install": "npm i framer-motion"
    },
    "principles": {
      "durations": {
        "fast": "150–180ms",
        "base": "220–260ms",
        "slow": "320–420ms"
      },
      "easing": {
        "standard": "cubic-bezier(0.2, 0.8, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)"
      },
      "patterns": [
        "Section reveal: fade + y 8px saat masuk viewport (once).",
        "Buttons: hover shadow + translateY(-1px), active scale(0.98).",
        "Bottom nav: active pill animate layoutId.",
        "Carousel caption: crossfade 200ms saat slide berubah."
      ]
    },
    "reduced_motion": "Hormati prefers-reduced-motion: matikan autoplay slider dan animasi entrance."
  },
  "accessibility": {
    "contrast": "Pastikan teks teal di atas putih minimal AA; untuk teks kecil gunakan teal_ink (#1F5E5E) bukan teal terang.",
    "tap_targets": ">=44px untuk item bottom nav, tombol, dan kartu yang clickable.",
    "focus": "Gunakan focus-visible:ring-2 ring-brand-500 ring-offset-2 ring-offset-white.",
    "aria": "Semua tombol ikon wajib aria-label. Carousel controls wajib accessible."
  },
  "image_urls": {
    "hero_slider": [
      {
        "url": "https://images.pexels.com/photos/6560312/pexels-photo-6560312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "desc": "Ambience spa bersih dengan towel teal (cocok untuk hero slide 1)."
      },
      {
        "url": "https://images.pexels.com/photos/7233275/pexels-photo-7233275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "desc": "Terapi massage profesional (hero slide 2)."
      },
      {
        "url": "https://images.pexels.com/photos/19641816/pexels-photo-19641816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "desc": "Close-up oil/massage (hero slide 3 / section layanan)."
      }
    ],
    "gallery": [
      {
        "url": "https://images.pexels.com/photos/5888075/pexels-photo-5888075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "desc": "Detail hands + oil (galeri)."
      },
      {
        "url": "https://images.pexels.com/photos/36531898/pexels-photo-36531898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "desc": "Towel teal minimal (galeri / background section)."
      }
    ],
    "testimonials_avatars": {
      "note": "Gunakan avatar ilustratif/placeholder (shadcn Avatar) untuk privasi; jangan pakai foto orang nyata tanpa izin."
    }
  },
  "component_path": {
    "shadcn_primary": [
      "/app/frontend/src/components/ui/button.jsx",
      "/app/frontend/src/components/ui/card.jsx",
      "/app/frontend/src/components/ui/badge.jsx",
      "/app/frontend/src/components/ui/carousel.jsx",
      "/app/frontend/src/components/ui/accordion.jsx",
      "/app/frontend/src/components/ui/dialog.jsx",
      "/app/frontend/src/components/ui/sheet.jsx",
      "/app/frontend/src/components/ui/navigation-menu.jsx",
      "/app/frontend/src/components/ui/separator.jsx",
      "/app/frontend/src/components/ui/avatar.jsx",
      "/app/frontend/src/components/ui/sonner.jsx"
    ],
    "notes": {
      "js_only": "Semua komponen/pages ditulis dalam .js (bukan .tsx).",
      "toasts": "Gunakan sonner dari /app/frontend/src/components/ui/sonner.jsx"
    }
  },
  "instructions_to_main_agent": {
    "global": [
      "Hapus styling default CRA di App.css (App-header gelap) agar tidak mengganggu. Jangan center align container global.",
      "Update index.css token shadcn: set primary/ring ke teal (lihat css_variables_hsl_for_shadcn). Jangan gunakan .dark.",
      "Implement app-shell: header fixed + bottom nav fixed. Pastikan konten punya padding top/bottom agar tidak ketutup.",
      "Semua CTA WhatsApp harus deep link ke https://wa.me/6285780247525 (tanpa form booking).",
      "Tambahkan data-testid untuk semua tombol, link, input (jika ada), item nav, kartu harga, carousel controls, dan pesan error.",
      "Gunakan lucide-react untuk ikon (Home, Tag, Images, Newspaper, MessageCircle, ShieldCheck, Clock, Sparkles, MapPin)."
    ],
    "routing": [
      "Pages: / (Home), /harga, /galeri, /artikel, /artikel/:slug, /faq.",
      "Bottom nav item 'Chat' langsung membuka wa.me (external)."
    ],
    "performance": [
      "Gunakan <img loading='lazy'> untuk galeri dan slide non-aktif.",
      "Gunakan WebP jika memungkinkan; jika tidak, gunakan Pexels URL compress.",
      "Carousel autoplay harus berhenti saat prefers-reduced-motion."
    ]
  }
}

<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
