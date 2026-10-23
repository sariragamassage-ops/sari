import React, { useMemo, useState } from "react";
import { useSite } from "../context/SiteContext";
import { SectionHeading } from "../components/SectionHeading";
import { ArticleCard } from "../components/ArticleCard";
import { PageLoader, ErrorState } from "../components/States";
import { CtaStrip } from "../components/CtaStrip";

export default function Artikel() {
  const { data, loading, error, reload } = useSite();
  const [cat, setCat] = useState("Semua");

  const articles = useMemo(() => data?.articles || [], [data]);
  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles]
  );
  const filtered = useMemo(
    () => (cat === "Semua" ? articles : articles.filter((a) => a.category === cat)),
    [articles, cat]
  );

  if (loading) return <PageLoader label="Memuat artikel..." />;
  if (error || !data) return <ErrorState message={error} onRetry={reload} />;

  return (
    <div data-testid="articles-list-page" className="bg-white">
      <section className="brand-wash border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Artikel"
            title="Tips kesehatan, relaksasi, dan perawatan tubuh"
            description="Ditulis sederhana agar bisa langsung Anda praktikkan di rumah."
            testid="articles-heading"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2" data-testid="article-filters">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              data-testid={`article-filter-${c}`}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-[var(--brand-500)] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-[var(--brand-50)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} />
          ))}
        </div>

        {!filtered.length ? (
          <p data-testid="articles-empty" className="py-10 text-center text-sm text-slate-500">
            Belum ada artikel untuk kategori ini.
          </p>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <CtaStrip
          title="Butuh lebih dari sekadar peregangan?"
          description="Jadwalkan sesi pijat relaksasi di rumah Anda. Admin aktif 24 jam."
          testid="articles-cta"
        />
      </section>
    </div>
  );
}
