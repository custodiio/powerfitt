/**
 * WhatsApp Helper Utility
 * Formats message and opens WhatsApp Web or App
 */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5564999999999";

export function getWhatsAppLink(message) {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
}

export function openWhatsApp(message) {
  window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
