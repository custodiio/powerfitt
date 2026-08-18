import React from "react";
import { Sparkles, MessageCircle, ArrowRight, Flame, Shield, Dumbbell, Clock, CheckCircle2 } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function TransformationCta({ onOpenTrialModal }) {
  const highlights = [
    { icon: Sparkles, text: "Aula Experimental 100% Gratuita" },
    { icon: Dumbbell, text: "Estrutura Completa & Pesos Livres" },
    { icon: Shield, text: "Professores Presentes no Salão" },
    { icon: Clock, text: "Aberto de Domingo a Domingo" }
  ];

  return (
    <section className="transformation-cta-section relative overflow-hidden">
      {/* ATMOSPHERIC AMBIENT GLOW */}
      <div className="transformation-ambient-glow pointer-events-none">
        <div className="transformation-glow-blob center"></div>
      </div>

      <div className="container relative z-10">
        {/* GRAND STITCH BENTO CARD */}
        <div className="stat-card grand-transformation-card">
          <div className="bg-pulse"></div>

          <div className="grand-transformation-content">
            {/* TOP BADGE */}
            <div className="grand-top-row">
              <div className="section-badge red-badge mb-0">
                <Flame size={15} className="text-accent-red animate-pulse" />
                <span>COMECE SUA TRANSFORMAÇÃO HOJE</span>
              </div>
            </div>

            {/* MAIN TITLE */}
            <h2 className="grand-transformation-title">
              PRONTO PARA TRANSFORMAR SEU CORPO NA <span className="text-accent-red">POWERFITT</span>?
            </h2>

            {/* SUBTITLE */}
            <p className="grand-transformation-sub">
              Dê o primeiro passo hoje. Agende sua aula experimental gratuita ou fale diretamente com a nossa equipe no WhatsApp.
            </p>

            {/* VALUE PROPOSITION CHIPS */}
            <div className="grand-highlights-grid">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="grand-highlight-chip">
                    <div className="grand-chip-icon-wrap">
                      <IconComponent size={15} className="text-accent-red" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* ACTION BUTTONS (STRICTLY EQUAL HEIGHT & BALANCED) */}
            <div className="grand-transformation-actions">
              <button 
                className="btn-primary grand-cta-btn grand-btn-primary" 
                onClick={onOpenTrialModal}
              >
                <Sparkles size={18} />
                <span>AGENDAR AULA GRÁTIS</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn-whatsapp grand-cta-btn grand-btn-whatsapp"
                onClick={() => openWhatsApp("Olá! Quero transformar meu treino e conhecer a PowerFitt Academia.")}
              >
                <MessageCircle size={19} className="fill-current" />
                <span>FALAR NO WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
