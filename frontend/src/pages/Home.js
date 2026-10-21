import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useSite } from "../context/SiteContext";
import { HeroSlider } from "../components/HeroSlider";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { PriceCards } from "../components/PriceCards";
import { Testimonials } from "../components/Testimonials";
import { CtaStrip } from "../components/CtaStrip";
import { ArticleCard } from "../components/ArticleCard";
import { DynIcon } from "../components/icons";
import { Lightbox, useLightbox } from "../components/Lightbox";
import { PageLoader, ErrorState } from "../components/States";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { waLink, waOrder, formatRupiah } from "../lib/site";

export default function Home() {
  const { data, loading, error, reload } = useSite();
  const lb = useLightbox();

  if (loading) return <PageLoader />;
  if (error || !data) return <ErrorState message={error} onRetry={reload} />;

  const {
    settings,
    hero_slides: slides,
    services,
    addons,
    badges,
    steps,
    stats,
    testimonials,
    gallery,
    articles,
    faqs,
  } = data;

  const galleryPreview = gallery.slice(0, 6);

  return (
    <div data-testid="home-page" className="bg-white">
      <HeroSlider slides={slides} />

      {/* Stats bar */}
      <section className="brand-wash border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <div data-testid={`stat-${s.id}`} className="text-center">
                  <p className="font-heading text-2xl font-semibold text-[var(--brand-700)] sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Kenapa Sari Raga"
          title="Relaksasi yang bisa Anda percaya, kapan pun dibutuhkan"
          description="Kami membangun layanan ini untuk Anda yang lelah tapi tidak punya waktu ke spa. Cukup satu chat, sisanya kami yang urus."
          testid="section-why"
        />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {badges.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.05} className="h-full">
              <div
                data-testid={`trust-badge-${b.id}`}
                className="card-soft h-full rounded-2xl border border-slate-200/70 bg-white p-5 transition-colors hover:border-[var(--brand-200)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-100)]">
                  <DynIcon name={b.icon} className="h-5 w-5 text-[var(--brand-700)]" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="section-alt scroll-mt-20 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Pilih perawatan yang paling Anda butuhkan hari ini"
            description="Setiap layanan dikerjakan oleh terapis terlatih dengan perlengkapan sendiri yang bersih dan rapi."
            testid="section-services"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06} className="h-full">
                <div
                  data-testid={`service-card-${s.slug}`}
                  className="card-soft group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white"
                >
                  <div className="h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-100)]">
                      <DynIcon name={s.icon} className="h-5 w-5 text-[var(--brand-700)]" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">
                      {s.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                    <p className="mt-4 text-sm text-slate-500">
                      Mulai{" "}
                      <span className="font-heading text-lg font-semibold text-[var(--brand-800)]">
                        {formatRupiah(s.tiers[0].price)}
                      </span>{" "}
                      / {s.tiers[0].duration}
                    </p>
                    <a
                      href={waOrder({
                        service: s.name,
                        duration: s.tiers[0].duration,
                        price: formatRupiah(s.tiers[0].price),
                      })}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`service-order-${s.slug}`}
                    >
                      <Button className="mt-4 h-11 w-full rounded-xl bg-[var(--brand-500)] text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                        <MessageCircle className="mr-2 h-4 w-4" /> Pesan Layanan Ini
                      </Button>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="harga" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Price List"
          title="Harga jelas sejak awal, tanpa biaya kejutan"
          description="Semua tarif di bawah berlaku untuk layanan panggilan ke lokasi Anda di area utama kami."
          testid="section-pricing"
        />
        <div className="mt-8" data-testid="home-pricing-teaser">
          <PriceCards services={services} addons={addons} />
        </div>
        <Reveal>
          <div className="mt-6 flex justify-center">
            <Link to="/harga" onClick={() => window.scrollTo({ top: 0 })} data-testid="home-see-all-pricing">
              <Button
                variant="outline"
                className="h-12 rounded-xl border-[var(--brand-200)] px-5 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--brand-50)]"
              >
                Lihat Halaman Harga Lengkap <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* How to order */}
      <section className="section-alt py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Cara Pesan"
            title="Empat langkah, tidak sampai dua menit"
            description="Tidak ada aplikasi yang harus diunduh dan tidak ada formulir panjang. Cukup WhatsApp."
            testid="section-steps"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06} className="h-full">
                <div
                  data-testid={`step-${s.id}`}
                  className="card-soft relative h-full rounded-2xl border border-slate-200/70 bg-white p-5"
                >
                  <span className="absolute right-4 top-4 font-heading text-3xl font-semibold text-[var(--brand-100)]">
                    {s.order}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-500)]">
                    <DynIcon name={s.icon} className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Area */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Area Layanan"
              title="Kami menghampiri, Anda tinggal rebahan"
              description={settings.area_note}
              testid="section-area"
            />
            <Reveal delay={0.08}>
              <div className="mt-6 flex flex-wrap gap-2" data-testid="area-list">
                {settings.primary_areas.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-200)] bg-[var(--brand-50)] px-3.5 py-2 text-sm font-medium text-[var(--brand-800)]"
                  >
                    <MapPin className="h-3.5 w-3.5" /> {a}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full border border-dashed border-slate-300 px-3.5 py-2 text-sm text-slate-500">
                  + kota besar lainnya
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href={waLink(
                  "Halo admin Sari Raga Massage, saya ingin menanyakan apakah layanan tersedia di kota saya."
                )}
                target="_blank"
                rel="noreferrer"
                data-testid="area-check-whatsapp"
              >
                <Button className="mt-6 h-12 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                  <MessageCircle className="mr-2 h-4 w-4" /> Cek Ketersediaan Kota Anda
                </Button>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="card-soft overflow-hidden rounded-2xl border border-slate-200/70">
              <img
                src={gallery[0]?.image}
                alt="Terapis Sari Raga datang ke lokasi"
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96"
              />
              <div className="flex items-center gap-3 bg-white p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--brand-600)]" />
                <p className="text-sm text-slate-600">
                  Terapis membawa matras, handuk bersih, dan minyak sendiri. Anda cukup siapkan
                  ruangan yang nyaman.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-alt py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Testimoni"
              title="Cerita dari pelanggan kami"
              description="Ulasan nyata dari mereka yang sudah lebih dulu merasakan badan enteng kembali."
              testid="section-testimonials"
            />
            <Reveal>
              <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-heading text-lg font-semibold text-slate-900">4,9</span>
                <span className="text-xs text-slate-500">rata-rata dari 1.200+ ulasan</span>
              </div>
            </Reveal>
          </div>
          <div className="mt-8">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Galeri"
          title="Suasana sesi Sari Raga"
          description="Bersih, rapi, dan menenangkan — standar yang kami jaga di setiap kunjungan."
          testid="section-gallery"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3" data-testid="home-gallery-preview">
          {galleryPreview.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.04}>
              <button
                type="button"
                data-testid={`home-gallery-image-${i}`}
                onClick={() => lb.open(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100"
              >
                <img
                  src={g.image}
                  alt={g.caption}
                  loading="lazy"
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                />
              </button>
            </Reveal>
          ))}
        </div>
        <Lightbox
          items={galleryPreview}
          index={lb.index}
          onClose={lb.close}
          onIndexChange={lb.setIndex}
        />
        <Reveal>
          <div className="mt-6 flex justify-center">
            <Link to="/galeri" onClick={() => window.scrollTo({ top: 0 })} data-testid="home-see-gallery">
              <Button
                variant="outline"
                className="h-12 rounded-xl border-[var(--brand-200)] px-5 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--brand-50)]"
              >
                Lihat Semua Foto <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Articles */}
      <section className="section-alt py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Artikel"
            title="Tips kesehatan & relaksasi"
            description="Bacaan ringan untuk membantu Anda merawat badan di antara jadwal pijat."
            testid="section-articles"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3" data-testid="home-articles-preview">
            {articles.slice(0, 3).map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </div>
          <Reveal>
            <div className="mt-6 flex justify-center">
              <Link to="/artikel" onClick={() => window.scrollTo({ top: 0 })} data-testid="home-see-articles">
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[var(--brand-200)] bg-white px-5 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--brand-50)]"
                >
                  Baca Artikel Lainnya <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          description="Masih ada yang ingin ditanyakan? Admin kami siap menjawab lewat WhatsApp."
          testid="section-faq"
        />
        <div className="mt-6" data-testid="home-faq-preview">
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 5).map((f) => (
              <AccordionItem key={f.id} value={f.id} data-testid={`faq-item-${f.id}`}>
                <AccordionTrigger
                  data-testid={`faq-trigger-${f.id}`}
                  className="text-left font-heading text-[15px] font-semibold text-slate-900 hover:text-[var(--brand-700)]"
                >
                  {f.question}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${f.id}`}
                  className="text-sm leading-relaxed text-slate-600"
                >
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Reveal>
          <div className="mt-6 flex justify-center">
            <Link to="/faq" onClick={() => window.scrollTo({ top: 0 })} data-testid="home-see-faq">
              <Button
                variant="outline"
                className="h-12 rounded-xl border-[var(--brand-200)] px-5 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--brand-50)]"
              >
                Lihat Semua FAQ <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <CtaStrip />
        <Reveal>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" /> {settings.operating_hours}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
