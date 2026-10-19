import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { waLink } from "../lib/site";
import { Reveal } from "./Reveal";

export const CtaStrip = ({
  title = "Badan sudah minta istirahat?",
  description = "Chat admin kami sekarang — aktif 24 jam. Kami bantu pilihkan layanan dan durasi yang paling cocok untuk kondisi Anda.",
  testid = "cta-strip",
}) => (
  <Reveal>
    <div
      data-testid={testid}
      className="relative overflow-hidden rounded-2xl bg-[var(--brand-700)] px-6 py-10 sm:px-10"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--brand-500)] opacity-40 blur-2xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[var(--brand-400)] opacity-25 blur-2xl" />
      <div className="relative max-w-2xl">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={waLink()} target="_blank" rel="noreferrer" data-testid={`${testid}-whatsapp`}>
            <Button className="h-12 rounded-xl bg-white px-5 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--brand-50)]">
              <MessageCircle className="mr-2 h-4 w-4" /> Chat Admin
            </Button>
          </a>
          <a
            href={waLink("Halo admin Sari Raga Massage, saya ingin konsultasi dulu sebelum memesan.")}
            target="_blank"
            rel="noreferrer"
            data-testid={`${testid}-consult`}
          >
            <Button
              variant="outline"
              className="h-12 rounded-xl border-white/45 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/20 hover:text-white"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> Konsultasi Dulu
            </Button>
          </a>
        </div>
      </div>
    </div>
  </Reveal>
);
