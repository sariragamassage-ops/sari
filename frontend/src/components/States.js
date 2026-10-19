import React from "react";
import { Loader2, RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";

export const PageLoader = ({ label = "Memuat konten..." }) => (
  <div
    data-testid="page-loader"
    className="flex min-h-[55vh] flex-col items-center justify-center gap-3 bg-white px-6"
  >
    <Loader2 className="h-7 w-7 animate-spin text-[var(--brand-500)]" />
    <p className="text-sm text-slate-500">{label}</p>
  </div>
);

export const ErrorState = ({ message, onRetry }) => (
  <div
    data-testid="error-state"
    className="mx-auto flex min-h-[55vh] max-w-md flex-col items-center justify-center gap-4 px-6 text-center"
  >
    <p data-testid="error-message" className="text-sm text-slate-600">
      {message || "Terjadi kesalahan saat memuat data."}
    </p>
    {onRetry ? (
      <Button
        onClick={onRetry}
        data-testid="retry-button"
        className="h-11 rounded-xl bg-[var(--brand-500)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-600)]"
      >
        <RefreshCcw className="mr-2 h-4 w-4" /> Coba Lagi
      </Button>
    ) : null}
  </div>
);
