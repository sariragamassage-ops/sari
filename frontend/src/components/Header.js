import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { NAV_LINKS, waLink } from "../lib/site";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = (to) => {
    setOpen(false);
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if ((path || "/") !== location.pathname) {
        navigate(path || "/");
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    navigate(to);
    window.scrollTo({ top: 0 });
  };

  const isActive = (to) => to === location.pathname;

  return (
    <header
      data-testid="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          data-testid="header-logo"
          onClick={() => window.scrollTo({ top: 0 })}
          className="flex items-center gap-2.5"
        >
          <img
            src="/logo-mark.png"
            alt="Logo Sari Raga Massage"
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-semibold tracking-tight text-[var(--brand-800)]">
              Sari Raga
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-500)]">
              Massage
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              type="button"
              data-testid={`nav-${item.label.toLowerCase()}`}
              onClick={() => handleNav(item.to)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.to)
                  ? "bg-[var(--brand-50)] text-[var(--brand-800)]"
                  : "text-slate-600 hover:bg-[var(--brand-50)] hover:text-[var(--brand-800)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="header-whatsapp-button"
            className="hidden sm:inline-flex"
          >
            <Button className="h-10 rounded-xl bg-[var(--brand-500)] px-4 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat WhatsApp
            </Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Buka menu"
                data-testid="header-menu-button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[var(--brand-800)] lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-white p-0">
              <div className="flex h-16 items-center justify-between border-b border-slate-200/70 px-5">
                <span className="font-heading text-base font-semibold text-[var(--brand-800)]">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Tutup menu"
                  data-testid="mobile-menu-close"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    onClick={() => handleNav(item.to)}
                    className="rounded-xl px-4 py-3 text-left text-[15px] font-medium text-slate-700 hover:bg-[var(--brand-50)] hover:text-[var(--brand-800)]"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="mobile-menu-whatsapp"
                  className="mt-3"
                  onClick={() => setOpen(false)}
                >
                  <Button className="h-12 w-full rounded-xl bg-[var(--brand-500)] text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
                    <Phone className="mr-2 h-4 w-4" /> Pesan Sekarang
                  </Button>
                </a>
                <p className="mt-3 px-1 text-xs text-slate-500">
                  Buka 24 jam • Jakarta, Tangerang, Bekasi, Depok, Bogor
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
