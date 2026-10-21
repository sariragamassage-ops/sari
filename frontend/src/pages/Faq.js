import React from "react";
import { useSite } from "../context/SiteContext";
import { SectionHeading } from "../components/SectionHeading";
import { PageLoader, ErrorState } from "../components/States";
import { CtaStrip } from "../components/CtaStrip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Faq() {
  const { data, loading, error, reload } = useSite();

  if (loading) return <PageLoader label="Memuat FAQ..." />;
  if (error || !data) return <ErrorState message={error} onRetry={reload} />;

  return (
    <div data-testid="faq-page" className="bg-white">
      <section className="brand-wash border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Kumpulan jawaban atas hal-hal yang paling sering ditanyakan pelanggan kami."
            testid="faq-heading"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Accordion type="single" collapsible className="w-full">
          {data.faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id} data-testid={`faq-page-item-${f.id}`}>
              <AccordionTrigger
                data-testid={`faq-page-trigger-${f.id}`}
                className="text-left font-heading text-[15px] font-semibold text-slate-900 hover:text-[var(--brand-700)]"
              >
                {f.question}
              </AccordionTrigger>
              <AccordionContent
                data-testid={`faq-page-content-${f.id}`}
                className="text-sm leading-relaxed text-slate-600"
              >
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <CtaStrip
          title="Pertanyaan Anda belum terjawab?"
          description="Chat admin kami langsung lewat WhatsApp. Kami balas rata-rata di bawah 5 menit."
          testid="faq-cta"
        />
      </section>
    </div>
  );
}
