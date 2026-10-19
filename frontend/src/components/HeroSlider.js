import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Tag } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./ui/button";
import { waLink } from "../lib/site";

export const HeroSlider = ({ slides = [] }) => {
  const reduce = useReducedMotion();
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    return () => embla.off("select", onSelect);
  }, [embla, onSelect]);

  useEffect(() => {
    if (!embla || reduce || paused || slides.length < 2) return undefined;
    const id = setInterval(() => embla.scrollNext(), 5500);
    return () => clearInterval(id);
  }, [embla, reduce, paused, slides.length]);

  if (!slides.length) return null;
  const active = slides[selected] || slides[0];

  return (
    <section
      data-testid="hero-slider"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-b-[2rem] sm:rounded-[1.75rem]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, idx) => (
              <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
                <div className="relative h-[520px] w-full sm:h-[560px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgba(10,34,34,0.94) 0%, rgba(10,34,34,0.86) 22%, rgba(10,34,34,0.55) 42%, rgba(10,34,34,0.18) 62%, rgba(10,34,34,0) 85%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="pointer-events-auto max-w-xl"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm ring-1 ring-white/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  {active.eyebrow}
                </span>
                <h1
                  data-testid="hero-title"
                  className="mt-4 font-heading text-[30px] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl"
                >
                  {active.title}
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                  {active.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink()} target="_blank" rel="noreferrer" data-testid="hero-whatsapp-cta">
                    <Button className="h-12 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                      <MessageCircle className="mr-2 h-4 w-4" /> Pesan via WhatsApp
                    </Button>
                  </a>
                  <Link to="/harga" data-testid="hero-pricing-cta" onClick={() => window.scrollTo({ top: 0 })}>
                    <Button
                      variant="outline"
                      className="h-12 rounded-xl border-white/50 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                    >
                      <Tag className="mr-2 h-4 w-4" /> Lihat Price List
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 sm:bottom-6">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              data-testid={`hero-dot-${idx}`}
              onClick={() => embla && embla.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === selected ? "w-7 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Slide sebelumnya"
          data-testid="hero-prev"
          onClick={() => embla && embla.scrollPrev()}
          className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/22 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/35 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Slide berikutnya"
          data-testid="hero-next"
          onClick={() => embla && embla.scrollNext()}
          className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/22 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/35 sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
