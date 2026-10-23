import React, { createContext, useContext, useMemo } from "react";
import content from "../data/content.json";

/**
 * Seluruh konten website di-bundle langsung bersama aplikasi (lihat
 * `frontend/src/data/content.json`, dihasilkan dari `backend/content_seed.py`
 * melalui `python backend/export_content.py`).
 *
 * Dengan begitu website dapat tayang sebagai situs statis tanpa database:
 * tidak ada panggilan jaringan, tidak ada kondisi gagal memuat, dan halaman
 * langsung tampil seketika.
 */
const SiteContext = createContext({ data: content, loading: false, error: null });

export const useSite = () => useContext(SiteContext);

export const getArticleBySlug = (slug) => {
  const article = content.articles.find((a) => a.slug === slug);
  if (!article) return null;
  const related = content.articles.filter((a) => a.slug !== slug).slice(0, 3);
  return { article, related };
};

export const SiteProvider = ({ children }) => {
  const value = useMemo(
    () => ({ data: content, loading: false, error: null, reload: () => {} }),
    []
  );
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
