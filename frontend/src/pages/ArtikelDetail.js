import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { getArticle } from "../lib/api";
import { PageLoader, ErrorState } from "../components/States";
import { ArticleCard } from "../components/ArticleCard";
import { CtaStrip } from "../components/CtaStrip";
import { Button } from "../components/ui/button";

export default function ArtikelDetail() {
  const { slug } = useParams();
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let active = true;
    setState({ loading: true, error: null, data: null });
    getArticle(slug)
      .then((res) => active && setState({ loading: false, error: null, data: res }))
      .catch((e) => {
        if (!active) return;
        const msg =
          e?.response?.status === 404
            ? "Artikel tidak ditemukan."
            : "Gagal memuat artikel. Periksa koneksi Anda lalu coba lagi.";
        setState({ loading: false, error: msg, data: null });
      });
    return () => {
      active = false;
    };
  }, [slug]);

  if (state.loading) return <PageLoader label="Memuat artikel..." />;
  if (state.error || !state.data)
    return (
      <div className="bg-white">
        <ErrorState message={state.error} />
        <div className="flex justify-center pb-16">
          <Link to="/artikel" data-testid="article-back-to-list">
            <Button className="h-11 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Artikel
            </Button>
          </Link>
        </div>
      </div>
    );

  const { article, related } = state.data;

  return (
    <div data-testid="article-detail-page" className="bg-white">
      <div className="relative h-64 w-full overflow-hidden bg-slate-200 sm:h-80">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,66,66,0.85)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-4 pb-6 sm:px-6">
          <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-white/30">
            {article.category}
          </span>
          <h1 className="mt-3 font-heading text-2xl font-semibold leading-tight text-white sm:text-4xl">
            {article.title}
          </h1>
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
