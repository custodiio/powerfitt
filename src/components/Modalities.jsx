import React from "react";
import { Dumbbell, Activity, Music, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Modalities({ onOpenTrialModal }) {
  const modalities = [
    {
      num: "01",
      icon: Dumbbell,
      tag: "Força & Estética",
      title: "Musculação & Hipertrofia",
      desc: "Equipamentos biomecânicos modernos e ampla sala de pesos livres (halteres de 1kg a 50kg) para ganho de massa muscular com máxima segurança.",
      features: [
        "Aparelhos articulados e convergentes",
        "Área ampla de agachamento e halteres",
        "Ficha personalizada para iniciantes e avançados"
      ],
      whatsappMsg: "Olá! Gostaria de agendar uma aula experimental de Musculação na PowerFitt."
    },
    {
      num: "02",
      icon: Activity,
      tag: "Alta Queima Calórica",
      title: "Treinamento Híbrido & Funcional",
      desc: "Combinação dinâmica entre força e cardio com cordas navais, kettlebells e esteiras para acelerar o metabolismo e queimar gordura.",
      features: [
        "Aulas dinâmicas e sem rotina monótona",
        "Melhora do fôlego, agilidade e postura",
        "Espaço com grama sintética dedicada"
      ],
      whatsappMsg: "Olá! Gostaria de fazer uma aula experimental de Treinamento Funcional / Híbrido na PowerFitt."
    },
    {
      num: "03",
      icon: Music,
      tag: "Movimento & Energia",
      title: "Aulas de Dança & Ritmos",
      desc: "Aulas coletivas contagiantes para quem quer perder peso se divertindo ao som das músicas mais animadas.",
      features: [
        "Ambiente descontraído e integrador",
        "Gasto calórico elevado por sessão",
        "Melhora da coordenação e ritmo"
      ],
      whatsappMsg: "Olá! Gostaria de saber os horários das Aulas de Dança na PowerFitt."
    }
  ];

  return (
    <section id="modalidades" className="section-padding modalities-redesigned-section relative">
      {/* ATMOSPHERIC BACKGROUND AMBIENT GLOW */}
      <div className="modalities-ambient-glow-layer pointer-events-none">
        <div className="modalities-ambient-glow-center"></div>
      </div>

      <div className="container relative z-10">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Sparkles size={16} />
            <span>MODALIDADES & TREINOS</span>
          </div>
          <h2 className="section-title">
            TREINOS FEITOS PARA O SEU <span className="text-accent-red">OBJETIVO</span>
          </h2>
          <p className="section-subtitle">
            Musculação pesada, treinamento híbrido e aulas de dança com estrutura de alto padrão no Parque Dom Miguel.
          </p>
        </div>

        {/* 3 STITCH BENTO MODALITY CARDS */}
        <div className="modalities-cards-grid">
          {modalities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="stat-card modality-stitch-card">
                {/* RADIAL PULSE HOVER LAYER */}
                <div className="bg-pulse"></div>

                {/* GIANT BACKGROUND WATERMARK OUTLINE NUMBER */}
                <div className="stat-card-outline-num">{item.num}</div>

                <div className="stat-card-content modality-card-content-box">
                  {/* TOP HEADER ROW WITH ACCENT BAR & GLOWING ICON */}
                  <div className="pillar-header-row">
                    <div className="stat-card-red-bar"></div>
                    <div className="pillar-icon-glow-wrap">
                      <Icon size={20} className="text-accent-red" />
                    </div>
                  </div>

                  {/* TAG BADGE */}
                  <span className="modality-tag-pill">{item.tag}</span>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="modality-stitch-title">{item.title}</h3>
                  <p className="stat-card-desc modality-desc-text">{item.desc}</p>

                  {/* BENEFITS CHECKLIST */}
                  <ul className="modality-benefits-checklist">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="modality-benefit-item">
                        <CheckCircle2 size={18} className="text-accent-red flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA BUTTON */}
                  <div className="modality-btn-wrap">
                    <button 
                      className="w-full plan-whatsapp-cta-btn btn-secondary-outline btn-modality-stitch-cta"
                      onClick={() => openWhatsApp(item.whatsappMsg)}
                    >
                      <span>Quero Treinar Nesta Modalidade</span>
                      <ArrowRight size={17} className="btn-arrow-icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA CALLOUT BANNER */}
        <div className="modalities-cta-banner glass-card neon-border-glow">
          <div className="banner-text">
            <h4>Ainda não sabe qual modalidade escolher?</h4>
            <p>Faça uma aula experimental gratuita e conheça todas as opções na prática.</p>
          </div>
          <button 
            className="btn-primary"
            onClick={onOpenTrialModal}
          >
            <span>Garantir Aula Experimental</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
