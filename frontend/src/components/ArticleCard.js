import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

export const ArticleCard = ({ article, index = 0 }) => (
  <Reveal delay={index * 0.05} className="h-full">
    <Link
      to={`/artikel/${article.slug}`}
      data-testid={`article-card-${article.slug}`}
      onClick={() => window.scrollTo({ top: 0 })}
      className="card-soft group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white"
    >
      <div className="h-44 w-full overflow-hidden bg-slate-100">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[var(--brand-100)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-800)]">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-slate-500">
            <Clock className="h-3 w-3" /> {article.read_minutes} menit baca
          </span>
        </div>
        <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-slate-900 group-hover:text-[var(--brand-700)]">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-600)]">
          Baca artikel <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  </Reveal>
);
