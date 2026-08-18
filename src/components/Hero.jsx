import React from "react";
import { ArrowRight, Check, Star, Trophy, Clock, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Hero({ onOpenTrialModal }) {
  const handlePlansClick = (e) => {
    e.preventDefault();
    const plansSection = document.getElementById("planos");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    {
      index: "01",
      number: "+1.200",
      label: "Alunos Ativos",
      sub: "Treinando todos os dias com foco e consistência"
    },
    {
      index: "02",
      number: "4.9 ★",
      label: "Google Maps",
      sub: "Classificação máxima em satisfação e estrutura"
    },
    {
      index: "03",
      number: "7 Dias",
      label: "Por Semana",
      sub: "Aberto de segunda a domingo para sua rotina"
    },
    {
      index: "04",
      number: "+4 Anos",
      label: "Em Rio Verde",
      sub: "Transformando vidas no Parque Dom Miguel"
    }
  ];

  return (
    <section id="hero" className="hero-editorial-section">
      {/* BACKGROUND MEDIA WITH BOA2.PNG & DARK OVERLAY */}
      <div className="hero-bg-wrapper">
        <img 
          src="/images/boa2.png" 
          alt="Estrutura e Maquinário PowerFitt Academia Rio Verde"
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay"></div>
        <div className="hero-red-ambient-light"></div>
      </div>

      <div className="container hero-inner-container">
        {/* HERO MAIN CONTENT */}
        <div className="hero-main-content">
          <div className="hero-top-badge">
            <span className="live-dot-pulse"></span>
            <span>PARQUE DOM MIGUEL • RIO VERDE - GO</span>
          </div>

          <h1 className="hero-headline">
            ELEVE SEU CORPO AO <br />
            <span className="text-accent-red">NÍVEL MÁXIMO DE PERFORMANCE</span>
          </h1>

          <p className="hero-lead-text">
            Treinamento Híbrido, Musculação Pesada com aparelhos novos de última geração e acompanhamento profissional. Aberto 7 dias por semana para você não perder o ritmo.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn-primary hero-btn-cta"
              onClick={onOpenTrialModal}
              id="hero-trial-cta-btn"
            >
              <span>Garantir Aula Experimental</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#planos" 
              onClick={handlePlansClick}
              className="btn-secondary hero-btn-plans"
            >
              <span>Conhecer Nossos Planos</span>
            </a>
          </div>

          <div className="hero-proofs-strip">
            <div className="proof-item">
              <Check size={16} className="text-accent-red stroke-[3]" />
              <span>Sem Taxa de Matrícula</span>
            </div>
            <div className="proof-item">
              <Check size={16} className="text-accent-red stroke-[3]" />
              <span>Aceitamos Wellhub, Gympass & TotalPass</span>
            </div>
            <div className="proof-item">
              <Check size={16} className="text-accent-red stroke-[3]" />
              <span>100% Climatizado</span>
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="hero-editorial-stats-grid">
          {stats.map((item) => (
            <div key={item.index} className="editorial-stat-card">
              <div className="stat-card-header">
                <span className="stat-index-num">{item.index}</span>
                <span className="stat-card-line"></span>
              </div>
              <div className="stat-card-body">
                <div className="stat-giant-num">{item.number}</div>
                <h4 className="stat-primary-label">{item.label}</h4>
                <p className="stat-sub-desc">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
