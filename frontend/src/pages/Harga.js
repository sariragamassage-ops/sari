import React from "react";
import { Info, MessageCircle, ShieldCheck } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { PriceCards } from "../components/PriceCards";
import { SectionHeading } from "../components/SectionHeading";
import { CtaStrip } from "../components/CtaStrip";
import { PageLoader, ErrorState } from "../components/States";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/button";
import { formatRupiah, waLink } from "../lib/site";

export default function Harga() {
  const { data, loading, error, reload } = useSite();

  if (loading) return <PageLoader label="Memuat price list..." />;
  if (error || !data) return <ErrorState message={error} onRetry={reload} />;

  const { services, addons, settings } = data;

  return (
    <div data-testid="pricing-page" className="bg-white">
      <section className="brand-wash border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Price List"
            title="Daftar harga Sari Raga Massage"
            description="Semua tarif sudah termasuk kedatangan terapis ke lokasi Anda di area utama. Pembayaran dilakukan setelah sesi selesai."
            testid="pricing-heading"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <PriceCards services={services} addons={addons} />
      </section>

      {/* Quick table */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <Reveal>
          <div
            data-testid="pricing-table"
            className="card-soft overflow-hidden rounded-2xl border border-slate-200/70 bg-white"
          >
            <div className="border-b border-slate-200/70 bg-[var(--brand-50)] px-5 py-4">
              <h3 className="font-heading text-base font-semibold text-[var(--brand-800)]">
                Ringkasan Tarif
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {services.map((s) =>
                s.tiers.map((t) => (
                  <div
                    key={`${s.id}-${t.duration}`}
                    className="flex items-center justify-between gap-4 px-5 py-3.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">{s.name}</p>
                      <p className="text-xs text-slate-500">{t.duration}</p>
                    </div>
                    <p className="font-heading text-base font-semibold text-[var(--brand-800)]">
                      {formatRupiah(t.price)}
                    </p>
                  </div>
                ))
              )}
              {addons.map((a) => (
                <div key={a.id} className="flex items-center justify-between gap-4 bg-[var(--brand-50)] px-5 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Paket Tambahan: {a.name}</p>
                    <p className="text-xs text-slate-500">Bisa digabung dengan layanan apa pun</p>
                  </div>
                  <p className="font-heading text-base font-semibold text-[var(--brand-800)]">
                    {formatRupiah(a.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
              <Info className="h-5 w-5 text-[var(--brand-600)]" />
              <h4 className="mt-3 font-heading text-sm font-semibold text-slate-900">
                Yang perlu diketahui
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li>• Harga berlaku untuk satu orang per sesi.</li>
                <li>• Durasi dihitung sejak sesi dimulai, bukan sejak terapis tiba.</li>
                <li>• Untuk lokasi yang sangat jauh, admin akan menginformasikan penyesuaian di awal.</li>
                <li>• Layanan scrub/lulur membutuhkan akses kamar mandi.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
              <ShieldCheck className="h-5 w-5 text-[var(--brand-600)]" />
              <h4 className="mt-3 font-heading text-sm font-semibold text-slate-900">
                Komitmen kami
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Sari Raga Massage hanya melayani terapi relaksasi profesional dan sopan. Kami tidak
                melayani permintaan di luar layanan yang tertera pada price list ini.
              </p>
              <p className="mt-3 text-xs text-slate-500">{settings.operating_hours}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 flex justify-center">
            <a
              href={waLink(
                "Halo admin Sari Raga Massage, saya ingin bertanya mengenai price list dan ketersediaan terapis."
              )}
              target="_blank"
              rel="noreferrer"
              data-testid="pricing-ask-whatsapp"
            >
              <Button className="h-12 rounded-xl bg-[var(--brand-500)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                <MessageCircle className="mr-2 h-4 w-4" /> Tanya Admin Soal Harga
              </Button>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <CtaStrip
          title="Sudah menemukan paket yang pas?"
          description="Kirim layanan dan durasi pilihan Anda ke WhatsApp admin. Kami akan konfirmasi ketersediaan terapis terdekat."
          testid="pricing-cta"
        />
      </section>
    </div>
  );
}
