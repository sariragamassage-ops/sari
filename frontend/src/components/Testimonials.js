import React from "react";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = ({ items = [] }) => {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });

  if (!items.length) return null;

  return (
    <div data-testid="testimonial-carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((t) => (
            <div
              key={t.id}
              data-testid={`testimonial-${t.id}`}
              className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
            >
              <div className="card-soft flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-5">
                <Quote className="h-7 w-7 text-[var(--brand-200)]" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-100)] font-heading text-sm font-semibold text-[var(--brand-800)]">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.city} • {t.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Testimoni sebelumnya"
          data-testid="testimonial-prev"
          onClick={() => embla && embla.scrollPrev()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--brand-700)] hover:bg-[var(--brand-50)]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Testimoni berikutnya"
          data-testid="testimonial-next"
          onClick={() => embla && embla.scrollNext()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--brand-700)] hover:bg-[var(--brand-50)]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
