export const WHATSAPP_NUMBER = "6285780247525";

export const formatRupiah = (value) => {
  if (value === null || value === undefined) return "-";
  return "Rp " + Number(value).toLocaleString("id-ID");
};

export const waLink = (message) => {
  const text = encodeURIComponent(
    message ||
      "Halo admin Sari Raga Massage, saya ingin bertanya mengenai layanan massage panggilan."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const waOrder = ({ service, duration, price, addon }) => {
  let msg = `Halo admin Sari Raga Massage, saya ingin memesan:\n\n`;
  if (service) msg += `• Layanan: ${service}\n`;
  if (duration) msg += `• Durasi: ${duration}\n`;
  if (price) msg += `• Harga: ${price}\n`;
  if (addon) msg += `• Tambahan: ${addon}\n`;
  msg += `\nAlamat saya: \nPatokan lokasi: \nJam yang diinginkan: \n\nMohon info ketersediaan terapisnya ya. Terima kasih.`;
  return waLink(msg);
};

export const NAV_LINKS = [
  { label: "Beranda", to: "/" },
  { label: "Layanan", to: "/#layanan" },
  { label: "Harga", to: "/harga" },
  { label: "Galeri", to: "/galeri" },
  { label: "Artikel", to: "/artikel" },
  { label: "FAQ", to: "/faq" },
];
