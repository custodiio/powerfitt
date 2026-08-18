import React from "react";
import { Dumbbell, Activity, Music, Users, Check, ArrowRight, Sparkles } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Modalities({ onOpenTrialModal }) {
  const modalities = [
    {
      num: "01",
      icon: Dumbbell,
      title: "Musculação & Hipertrofia",
      tag: "Força & Estética",
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
      title: "Treinamento Híbrido & Funcional",
      tag: "Alta Queima Calórica",
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
      title: "Aulas de Dança & Ritmos",
      tag: "Movimento & Energia",
      desc: "Aulas coletivas contagiantes para quem quer perder peso se divertindo ao som das músicas mais animadas.",
      features: [
        "Ambiente descontraído e integrador",
        "Gasto calórico elevado por sessão",
        "Melhora da coordenação e ritmo"
      ],
      whatsappMsg: "Olá! Gostaria de saber os horários das Aulas de Dança na PowerFitt."
    },
    {
      num: "04",
      icon: Users,
      title: "Acompanhamento de Instrutores",
      tag: "Orientação Completa",
      desc: "Professores presentes no salão em tempo integral para tirar dúvidas, ajustar cargas e garantir a execução perfeita dos seus exercícios.",
      features: [
        "Professores credenciados no salão",
        "Correção de postura e prevenção de lesões",
        "Suporte diário para tirar dúvidas de treino"
      ],
      whatsappMsg: "Olá! Gostaria de saber como funciona o acompanhamento dos instrutores na PowerFitt."
    }
  ];

  return (
    <section id="modalidades" className="section-padding modalities-redesigned-section">
      <div className="container">
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

        {/* 4 EDITORIAL MODALITY CARDS */}
        <div className="modalities-cards-grid">
          {modalities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="modality-card-item glass-card">
                <div className="modality-card-topbar">
                  <span className="modality-num-tag">{item.num}</span>
                  <div className="modality-icon-ring">
                    <Icon size={22} className="text-accent-red" />
                  </div>
                </div>

                <div className="modality-tag-pill">{item.tag}</div>
                <h3 className="modality-card-title">{item.title}</h3>
                <p className="modality-card-desc">{item.desc}</p>

                <div className="modality-features-checklist">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="modality-feat-line">
                      <Check size={15} className="text-accent-red flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="modality-card-actions">
                  <button 
                    className="btn-secondary w-full btn-modality-cta"
                    onClick={() => openWhatsApp(item.whatsappMsg)}
                  >
                    <span>Quero Treinar Nesta Modalidade</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA CALLOUT */}
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
