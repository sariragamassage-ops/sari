import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SiteProvider, useSite } from "./context/SiteContext";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import Harga from "./pages/Harga";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import ArtikelDetail from "./pages/ArtikelDetail";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

const Shell = () => {
  const { data } = useSite();
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/:slug" element={<ArtikelDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer settings={data?.settings} />
        <div className="h-20" />
      </main>
      <FloatingWhatsApp />
      <BottomNav />
      <Toaster position="top-center" />
    </div>
  );
};

function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </SiteProvider>
  );
}

export default App;
