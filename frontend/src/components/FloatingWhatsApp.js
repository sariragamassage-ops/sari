import React from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "../lib/site";

export const FloatingWhatsApp = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat admin via WhatsApp"
    data-testid="floating-whatsapp-button"
    className="shadow-floating fixed bottom-[86px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-500)] text-white transition-colors hover:bg-[var(--brand-600)] sm:bottom-24 sm:right-6"
  >
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-400)] opacity-30" />
    <MessageCircle className="relative h-6 w-6" />
  </a>
);
