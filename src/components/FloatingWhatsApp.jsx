import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsApp("Olá! Gostaria de informações sobre os treinos e planos da PowerFitt Academia.");
  };

  return (
    <div className="floating-whatsapp-container">
      {showTooltip && (
        <div className="whatsapp-floating-tooltip fade-in">
          <button 
            className="tooltip-close-btn" 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Fechar mensagem"
          >
            <X size={14} />
          </button>
          <div className="tooltip-header">
            <span className="tooltip-dot"></span>
            <strong>Recepção Online</strong>
          </div>
          <p>Tire suas dúvidas ou agende sua aula experimental agora!</p>
        </div>
      )}

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
