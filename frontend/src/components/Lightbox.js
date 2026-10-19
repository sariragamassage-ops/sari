import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

export const Lightbox = ({ items = [], index, onClose, onIndexChange }) => {
  const open = index !== null && index !== undefined;
  const item = open ? items[index] : null;

  const go = (delta) => {
    if (!open) return;
    const next = (index + delta + items.length) % items.length;
    onIndexChange(next);
  };

  useEffect(() => {
    if (!open) return undefined;
    const handler = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
      <DialogContent
        data-testid="gallery-lightbox-dialog"
        className="max-w-3xl overflow-hidden border-none bg-white p-0 sm:rounded-2xl"
      >
        {item ? (
          <div className="relative">
            <img src={item.image} alt={item.caption} className="h-auto max-h-[72vh] w-full object-contain bg-slate-900" />
            <button
              type="button"
              aria-label="Tutup"
              data-testid="gallery-lightbox-close"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Foto sebelumnya"
              data-testid="gallery-lightbox-prev"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/65"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Foto berikutnya"
              data-testid="gallery-lightbox-next"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/65"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="bg-white px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-600)]">
                {item.category}
              </p>
              <p className="mt-1 text-sm text-slate-700">{item.caption}</p>
              <p className="mt-1 text-xs text-slate-400">
                Foto {index + 1} dari {items.length}
              </p>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export const useLightbox = () => {
  const [index, setIndex] = useState(null);
  return {
    index,
    open: (i) => setIndex(i),
    close: () => setIndex(null),
    setIndex,
  };
};
