# plan.md — Sari Raga Massage (Web Massage Panggilan 24 Jam)

## 1) Objectives
- Deliver a professional, interactive **mobile-first** marketing website (Bahasa Indonesia) for **Sari Raga Massage**, aligned to the logo and a **white + teal/turquoise** visual system.
- Emphasize **massage panggilan 24 jam**, service coverage (Jakarta, Tangerang, Bekasi, Depok, Bogor + kota besar lain — **cek ketersediaan ke admin**), and drive conversions via **direct WhatsApp deep links** (`wa.me/6285780247525`).
- Provide complete content sections and conversion UX: **Hero slider**, **Price list** (exact prices), **CTA WhatsApp** (prefilled messages), **Testimonials**, **Gallery + Lightbox**, **FAQ**, **Blog/Artikel tips kesehatan**.
- Provide **app-like UX** on mobile with **fixed non-moving header** + **persistent bottom navigation**.
- Tech: **React (frontend) + FastAPI (backend) + MongoDB (content)** with **idempotent seeding**.

> Status update: Objectives for the V1 build are **achieved** (Phase 2 completed + tested). Next objectives focus on **user revisions**, **content expansion**, and **SEO/polish**.

## 2) Implementation Steps

### Phase 1 — Foundation (No POC needed) ✅ Completed
Core is a content/marketing site + WhatsApp deep link (no risky integrations).
1. Repo setup: React + FastAPI + MongoDB connection.
2. Environment config:
   - `REACT_APP_BACKEND_URL` (already used)
   - `MONGO_URL`, `DB_NAME`, CORS config
   - WhatsApp number constant: `6285780247525`
3. Static assets:
   - Integrated provided logo.
   - Created **cropped logo mark** for cleaner header/footer usage: `/logo-mark.png`.
4. MongoDB collections defined (seeded):
   - `settings`
   - `hero_slides`
   - `services`
   - `addons`
   - `gallery`
   - `testimonials`
   - `faqs`
   - `articles`
   - `steps`
   - `badges`
   - `stats`

**Phase 1 user stories** ✅
- Visitor can click WhatsApp buttons and start chat with prefilled message.
- Developer can update WhatsApp number and area text via seeded settings.
- Visitor sees brand logo clearly on first load.
- Header stays visible while scrolling.
- Visitor on mobile can navigate using app-style bottom navigation.

---

### Phase 2 — V1 App Development (Frontend + Backend + Seed Content) ✅ Completed

#### Backend (FastAPI) ✅
Implemented **read-only** content API with idempotent seed-on-start.
- Endpoints implemented and tested:
  - `GET /api/bootstrap`
  - `GET /api/settings`
  - `GET /api/hero-slides`
  - `GET /api/services`
  - `GET /api/addons`
  - `GET /api/gallery`
  - `GET /api/testimonials`
  - `GET /api/faqs`
  - `GET /api/steps`
  - `GET /api/badges`
  - `GET /api/stats`
  - `GET /api/articles`
  - `GET /api/articles/{slug}` (404 for invalid slug)

Seed content includes:
- 5 hero slides, 3 services, 1 addon (Kerokan), gallery items, testimonials, FAQ, 6 articles, steps, trust badges, stats.

#### Frontend (React) ✅
Built a mobile-first marketing site with app-like shell:
1. App shell + routing:
   - Home (`/`)
   - Harga (`/harga`)
   - Galeri (`/galeri`)
   - Artikel list (`/artikel`)
   - Artikel detail (`/artikel/:slug`)
   - FAQ (`/faq`)
   - 404 (`*`)
2. Global UI/UX:
   - White background + teal accents; calm premium-spa feel.
   - **Fixed header** (non-moving, always visible).
   - **Bottom navigation** (Beranda/Harga/Galeri/Artikel/Chat) app-style.
   - Floating WhatsApp CTA.
3. Hero banner slider:
   - 5 slides, autoplay ~5.5s, swipe (Embla), dots + arrows, reduced-motion aware.
   - Overlay tuned: photos remain clearly visible while text stays readable.
4. Conversion CTAs:
   - All ordering via WhatsApp deep links (no form), with Indonesian prefilled order templates (service, duration, location, time).
5. Price list (exact values) ✅
   - Body massage: 90m Rp300.000; 120m Rp400.000
   - Massage totok wajah: 90m Rp350.000; 120m Rp400.000
   - Scrub/lulur: 90m Rp400.000; 120m Rp500.000
   - Paket tambahan Kerokan: Rp150.000
6. Page content sections implemented ✅
   - Home: hero, stats, trust badges, services, pricing, cara pesan, area layanan, testimonials carousel, gallery preview + lightbox, article previews, FAQ preview, CTA.
   - Harga: price cards + **Ringkasan Tarif** table + notes + CTA.
   - Galeri: category filters + lightbox.
   - Artikel: list + category filters.
   - Artikel detail: typography page + related articles + CTA.
   - FAQ: full accordion + CTA.

#### Image Reliability ✅
- Stock images are bundled locally for speed/reliability: `/app/frontend/public/img/*`.

**Phase 2 user stories** ✅
- Visitor immediately understands the 24-hour on-call positioning from hero slider.
- Visitor sees prices clearly and can choose quickly.
- Visitor taps WhatsApp from bottom nav and chats instantly.
- Visitor browses testimonials, gallery, and FAQ to build trust.
- Visitor reads tips articles and navigates to detail pages.

**Phase 2 testing (end-to-end)** ✅
- Completed iteration_1:
  - Backend: **100% pass**
  - Frontend desktop: **98% pass** (one minor lightbox close overlay issue)
  - Mobile: **100% pass**
- Fix applied:
  - Lightbox close-button overlay interception fixed with z-index adjustments; verified working.

---

### Phase 3 — Content Expansion + Polish (Pending user revision feedback) 🔜
Focus now shifts from “building” to “refining + expanding.”

1. Copywriting revision loop (with user) 🔜
   - Adjust tone, claims, and wording to match desired market positioning.
   - Tighten hero messages, CTA labels, and benefit statements.
   - Ensure the disclaimer (professional/family-safe, no out-of-scope requests) matches your preference.

2. WhatsApp message customization 🔜
   - Customize prefilled templates (e.g., include city selector phrasing, preferred therapist gender, add-on selection).
   - Optional: add “quick pick” chips (Body 90/120, Totok 90/120, Scrub 90/120, +Kerokan) that open WhatsApp with the exact package.

3. SEO + share previews 🔜
   - Per-route meta tags (title/description) for: Home, Harga, Galeri, Artikel, FAQ.
   - OpenGraph improvements for article pages (better previews).
   - Optional: simple sitemap/robots.

4. Content enrichment 🔜
   - Add more gallery items (or user-provided images) and captions.
   - Add more articles (weekly tips) + improve article taxonomy.
   - Add more testimonials (or placeholders that can be replaced).

5. Optional feature: therapist profiles (only if requested) 🔜
   - A “Terapis” section/page with cards (name/skill/experience/coverage hours) without exposing sensitive personal info.

**Phase 3 user stories (targets)**
- Visitor sees sharper, more persuasive copy and clearer differentiation.
- Visitor can order faster via richer WhatsApp templates.
- Visitor can share a link with good preview cards.
- Visitor sees richer content (gallery/articles/testimonials) that increases trust.

**Phase 3 testing (end-to-end)**
- Re-validate:
  - WhatsApp links still correct after template changes.
  - Meta tags render as intended.
  - Responsive behavior (header + bottom nav do not overlap content).
  - Gallery lightbox interactions remain correct.

---

### Phase 4 — Optional (Only if requested later)
- CMS-lite admin (protected) to edit services/testimonials/FAQ/articles without editing seed files.
- City availability toggles + per-city transport notes.
- Analytics events (CTA clicks: hero, header WA, bottom nav chat, pricing order buttons) + simple dashboard.

## 3) Next Actions
1. Collect your revision feedback:
   - Copywriting: headline/CTA wording, service descriptions, disclaimers.
   - Pricing presentation: any notes about transport/terms that must be shown.
   - Hero images: approve/replace, reorder slides, or change captions.
2. Apply revisions and deploy V1.1.
3. (Optional) Add SEO per-route meta and expand article/gallery content.

## 4) Success Criteria
✅ Achieved (V1)
- Visual matches brand: white + teal, logo mark integrated.
- Sticky/fixed header + app-like bottom nav work smoothly on mobile.
- Hero slider interactive (autoplay, swipe, dots/arrows).
- Price list matches exactly the provided values.
- Testimonials, gallery + lightbox, FAQ, and blog sections present and functional.
- WhatsApp deep links work and include prefilled messages.
- Content loads from API/MongoDB; images load reliably from local `/img/*`.

🔜 Next (V1.1 / Phase 3)
- Copywriting finalized per your preferences.
- SEO/share previews improved.
- Content expanded (more articles/gallery/testimonials), optional therapist profiles.
