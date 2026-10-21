import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Tag, Images, Newspaper, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { waLink } from "../lib/site";

const items = [
  { label: "Beranda", to: "/", icon: Home, testid: "bottom-nav-home" },
  { label: "Harga", to: "/harga", icon: Tag, testid: "bottom-nav-pricing" },
  { label: "Galeri", to: "/galeri", icon: Images, testid: "bottom-nav-gallery" },
  { label: "Artikel", to: "/artikel", icon: Newspaper, testid: "bottom-nav-articles" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav
      data-testid="bottom-nav"
      aria-label="Navigasi aplikasi"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          const active =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.label}
              to={item.to}
              data-testid={item.testid}
              onClick={() => window.scrollTo({ top: 0 })}
              className="relative flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5"
            >
              {active ? (
                <motion.span
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 rounded-xl bg-[var(--brand-100)]"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <Icon
                className={`relative h-[22px] w-[22px] ${
                  active ? "text-[var(--brand-700)]" : "text-slate-400"
                }`}
              />
              <span
                className={`relative text-[10px] font-semibold ${
                  active ? "text-[var(--brand-800)]" : "text-slate-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          data-testid="bottom-nav-chat"
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5"
        >
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--brand-500)]">
            <MessageCircle className="h-4 w-4 text-white" />
          </span>
          <span className="text-[10px] font-semibold text-[var(--brand-800)]">Chat</span>
        </a>
      </div>
    </nav>
  );
};
