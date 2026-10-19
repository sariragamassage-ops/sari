import React from "react";
import { MessageCircle, Check, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";
import { formatRupiah, waOrder } from "../lib/site";

export const PriceCards = ({ services = [], addons = [], compact = false }) => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {services.map((service, i) => (
      <Reveal key={service.id} delay={i * 0.06} className="h-full">
        <div
          data-testid={`pricing-card-${service.slug}`}
          className="card-soft relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white"
        >
          {service.popular ? (
            <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--brand-500)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Paling Dicari
            </span>
          ) : null}
          {!compact ? (
            <div className="h-44 w-full overflow-hidden bg-slate-100">
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-heading text-lg font-semibold text-slate-900">{service.name}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--brand-600)]">
              {service.short}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>

            <ul className="mt-4 space-y-2">
              {(service.benefits || []).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-500)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2.5 rounded-xl bg-[var(--brand-50)] p-3">
              {(service.tiers || []).map((tier) => (
                <div
                  key={tier.duration}
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 ring-1 ring-[var(--brand-100)]"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Clock className="h-4 w-4 text-[var(--brand-500)]" />
                    {tier.duration}
                  </span>
                  <span className="font-heading text-base font-semibold text-[var(--brand-800)]">
                    {formatRupiah(tier.price)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-2">
              {(service.tiers || []).map((tier) => (
                <a
                  key={tier.duration}
                  href={waOrder({
                    service: service.name,
                    duration: tier.duration,
                    price: formatRupiah(tier.price),
                  })}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`order-${service.slug}-${tier.duration.replace(/\s/g, "")}`}
                >
                  <Button className="h-11 w-full rounded-xl bg-[var(--brand-500)] text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                    <MessageCircle className="mr-2 h-4 w-4" /> Pesan {tier.duration}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    ))}

    {addons.map((addon, i) => (
      <Reveal key={addon.id} delay={(services.length + i) * 0.06} className="h-full">
        <div
          data-testid={`pricing-card-${addon.id}`}
          className="card-soft flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-[var(--brand-300)] bg-[var(--brand-50)]"
        >
          <div className="flex flex-1 flex-col p-5">
            <span className="w-fit rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-700)] ring-1 ring-[var(--brand-200)]">
              Paket Tambahan
            </span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-slate-900">{addon.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{addon.description}</p>
            <div className="mt-auto pt-5">
              <p className="font-heading text-2xl font-semibold text-[var(--brand-800)]">
                {formatRupiah(addon.price)}
              </p>
              <a
                href={waOrder({ service: `Paket Tambahan ${addon.name}`, price: formatRupiah(addon.price) })}
                target="_blank"
                rel="noreferrer"
                data-testid={`order-addon-${addon.id}`}
              >
                <Button className="mt-3 h-11 w-full rounded-xl bg-[var(--brand-700)] text-sm font-semibold text-white hover:bg-[var(--brand-800)]">
                  <MessageCircle className="mr-2 h-4 w-4" /> Tambahkan ke Pesanan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    ))}
  </div>
);
