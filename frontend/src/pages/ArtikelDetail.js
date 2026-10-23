import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { getArticleBySlug } from "../context/SiteContext";
import { ErrorState } from "../components/States";
import { ArticleCard } from "../components/ArticleCard";
import { CtaStrip } from "../components/CtaStrip";
import { Button } from "../components/ui/button";

export default function ArtikelDetail() {
  const { slug } = useParams();
  const result = useMemo(() => getArticleBySlug(slug), [slug]);

  if (!result)
    return (
      <div className="bg-white">
        <ErrorState message="Artikel tidak ditemukan." />
        <div className="flex justify-center pb-16">
          <Link to="/artikel" data-testid="article-back-to-list">
            <Button className="h-11 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Artikel
            </Button>
          </Link>
        </div>
      </div>
    );

  const { article, related } = result;

  return (
    <div data-testid="article-detail-page" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-200 sm:aspect-[21/9]">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(10,34,34,0.92) 0%, rgba(10,34,34,0.68) 34%, rgba(10,34,34,0.18) 68%, rgba(10,34,34,0) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:px-8 sm:pb-7">
            <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-white/30">
              {article.category}
            </span>
            <h1 className="mt-3 max-w-3xl font-heading text-2xl font-semibold leading-tight text-white sm:text-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-wrap items-center gap-4 border-b border-slate-200/80 pb-5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" /> {article.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {article.published_at}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {article.read_minutes} menit baca
          </span>
        </div>

        <div className="prose-sari mt-6">
          {(article.content || []).map((block, i) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="font-heading">
                  {block.text}
                </h2>
              );
            if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        <div className="mt-10">
          <CtaStrip
            title="Sudah waktunya badan Anda diistirahatkan"
            description="Pesan sesi pijat relaksasi ke rumah Anda. Harga jelas, terapis profesional, buka 24 jam."
            testid="article-cta"
          />
        </div>

        {related?.length ? (
          <div className="mt-12">
            <h2 className="font-heading text-lg font-semibold text-slate-900">Artikel lainnya</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a, i) => (
                <ArticleCard key={a.id} article={a} index={i} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <Link to="/artikel" data-testid="article-back-link" onClick={() => window.scrollTo({ top: 0 })}>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-[var(--brand-200)] px-5 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--brand-50)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Artikel
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
