import React from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    openWhatsApp("Olá! Gostaria de informações sobre os treinos e planos da PowerFitt Academia.");
  };

  return (
    <div className="floating-whatsapp-container">
      <button
        onClick={handleClick}
        className="floating-whatsapp-btn"
        aria-label="Falar no WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle size={26} className="fill-current" />
        <span>Falar no WhatsApp</span>
        <span className="whatsapp-badge-pulse">1</span>
      </button>
    </div>
  );
}
