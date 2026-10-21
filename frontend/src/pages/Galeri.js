import React, { useMemo, useState } from "react";
import { useSite } from "../context/SiteContext";
import { SectionHeading } from "../components/SectionHeading";
import { Lightbox, useLightbox } from "../components/Lightbox";
import { PageLoader, ErrorState } from "../components/States";
import { Reveal } from "../components/Reveal";
import { CtaStrip } from "../components/CtaStrip";

export default function Galeri() {
  const { data, loading, error, reload } = useSite();
  const [filter, setFilter] = useState("Semua");
  const lb = useLightbox();

  const gallery = data?.gallery || [];
  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(gallery.map((g) => g.category)))],
    [gallery]
  );
  const filtered = useMemo(
    () => (filter === "Semua" ? gallery : gallery.filter((g) => g.category === filter)),
    [gallery, filter]
  );

  if (loading) return <PageLoader label="Memuat galeri..." />;
  if (error || !data) return <ErrorState message={error} onRetry={reload} />;

  return (
    <div data-testid="gallery-page" className="bg-white">
      <section className="brand-wash border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Galeri"
            title="Suasana dan perlengkapan sesi kami"
            description="Setiap kunjungan dilakukan dengan perlengkapan bersih dan suasana yang menenangkan."
            testid="gallery-heading"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2" data-testid="gallery-filters">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              data-testid={`gallery-filter-${c}`}
              onClick={() => {
                setFilter(c);
                lb.close();
              }}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-[var(--brand-500)] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-[var(--brand-50)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.03} className="h-full">
              <button
                type="button"
                data-testid={`gallery-image-button-${i}`}
                onClick={() => lb.open(i)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 text-left"
              >
                <img
                  src={g.image}
                  alt={g.caption}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
                />
                <span className="flex flex-1 items-center bg-white px-3 py-2.5 text-xs text-slate-600">
                  {g.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {!filtered.length ? (
          <p data-testid="gallery-empty" className="py-10 text-center text-sm text-slate-500">
            Belum ada foto untuk kategori ini.
          </p>
        ) : null}

        <Lightbox items={filtered} index={lb.index} onClose={lb.close} onIndexChange={lb.setIndex} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <CtaStrip
          title="Ingin merasakan sendiri?"
          description="Terapis kami siap datang ke lokasi Anda hari ini juga. Chat admin untuk cek jadwal."
          testid="gallery-cta"
        />
      </section>
    </div>
  );
}
