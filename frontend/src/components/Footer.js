import React from "react";
import { Link } from "react-router-dom";
import { Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { NAV_LINKS, waLink, WHATSAPP_NUMBER } from "../lib/site";

export const Footer = ({ settings }) => {
  const areas = settings?.primary_areas || ["Jakarta", "Tangerang", "Bekasi", "Depok", "Bogor"];
  return (
    <footer data-testid="site-footer" className="section-alt border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-mark.png" alt="Sari Raga Massage" className="h-14 w-14 object-contain" />
              <div>
                <p className="font-heading text-lg font-semibold text-[var(--brand-800)]">
                  Sari Raga Massage
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-500)]">
                  Panggilan 24 Jam
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Layanan pijat relaksasi profesional yang datang langsung ke rumah, apartemen, kos,
              maupun hotel Anda. Harga transparan, terapis terlatih, peralatan higienis.
            </p>
            <a href={waLink()} target="_blank" rel="noreferrer" data-testid="footer-whatsapp-button">
              <Button className="mt-5 h-11 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat Admin Sekarang
              </Button>
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((n) => !n.to.includes("#")).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="text-sm text-slate-600 hover:text-[var(--brand-700)]"
                    data-testid={`footer-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
              Kontak & Area
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-500)]" />
                <span>+{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-500)]" />
                <span>{settings?.operating_hours || "Buka 24 jam, setiap hari"}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-500)]" />
                <span>{areas.join(", ")} & kota besar lainnya</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-500)]" />
                <span>{settings?.email || "halo@sariragamassage.id"}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-500)]" />
                <span>{settings?.instagram || "@sariraga.massage"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/80 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            Sari Raga Massage hanya melayani terapi relaksasi profesional dan sopan. Kami tidak
            melayani permintaan di luar layanan yang tertera pada price list.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} Sari Raga Massage. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
