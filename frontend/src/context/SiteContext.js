import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getBootstrap } from "../lib/api";

const SiteContext = createContext({ data: null, loading: true, error: null });

export const useSite = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getBootstrap();
      setData(res);
    } catch (e) {
      setError("Gagal memuat konten. Periksa koneksi Anda lalu coba lagi.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <SiteContext.Provider value={{ data, loading, error, reload: load }}>
      {children}
    </SiteContext.Provider>
  );
};
