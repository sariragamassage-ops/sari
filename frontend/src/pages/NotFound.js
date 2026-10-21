import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div
      data-testid="not-found-page"
      className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <img src="/logo-mark.png" alt="Sari Raga Massage" className="h-24 w-24 object-contain" />
      <h1 className="font-heading text-2xl font-semibold text-slate-900">Halaman tidak ditemukan</h1>
      <p className="text-sm text-slate-600">
        Maaf, halaman yang Anda cari tidak tersedia. Silakan kembali ke beranda.
      </p>
      <Link to="/" data-testid="notfound-home-link">
        <Button className="h-11 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]">
          <Home className="mr-2 h-4 w-4" /> Kembali ke Beranda
        </Button>
      </Link>
    </div>
  );
}
