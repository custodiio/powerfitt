import React, { useState, useEffect } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import { getGymOpenStatus } from "../utils/gymStatus";

export default function Hero({ onOpenTrialModal }) {
  const [gymStatus, setGymStatus] = useState(getGymOpenStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setGymStatus(getGymOpenStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
      isStar: false,
      label: "Alunos Ativos",
      sub: "Treinando todos os dias com foco e consistência."
    },
    {
      index: "02",
      number: "4.9",
      isStar: true,
      label: "Google Maps",
      sub: "Classificação máxima em satisfação e estrutura."
    },
    {
      index: "03",
      number: "7 Dias",
      isStar: false,
      label: "Por Semana",
      sub: "Aberto de segunda a domingo para sua rotina."
    },
    {
      index: "04",
      number: "+4 Anos",
      isStar: false,
      label: "Em Rio Verde",
      sub: "Transformando vidas no Parque Dom Miguel."
    }
  ];

  return (
    <>
      {/* 16:9 LOCKED FULL HERO VIEWPORT */}
      <section id="hero" className="hero-editorial-section">
        {/* BACKGROUND MEDIA WITH BOA2.PNG, SOFT RADIAL CENTER DARKENING & AMBIENT RED */}
        <div className="hero-bg-wrapper">
          <img 
            src="/images/boa2.png" 
            alt="Estrutura e Maquinário PowerFitt Academia Rio Verde"
            className="hero-bg-image"
            fetchPriority="high"
            decoding="async"
          />
          {/* SOFT CENTER ELLIPSE TO PREVENT TEXT CLASH WITHOUT CRUSHING SIDES */}
          <div className="hero-center-dark-ellipse"></div>
          <div className="hero-gradient-overlay"></div>
          <div className="hero-red-ambient-light"></div>
        </div>

        <div className="container hero-inner-container">
          {/* HERO MAIN CONTENT */}
          <div className="hero-main-content">
            {/* DISCRETE, REFINED TOP BADGES */}
            <div className="hero-badges-wrapper">
              <div className="hero-top-badge">
                <span className="live-dot-pulse"></span>
                <span>PARQUE DOM MIGUEL • RIO VERDE - GO</span>
              </div>

              <div className="hero-status-badge">
                <span className={`status-mini-dot ${gymStatus.isOpen ? "dot-open" : "dot-closed"}`}></span>
                <span className="hero-status-text">{gymStatus.statusText} • {gymStatus.detailText}</span>
              </div>
            </div>

            <h1 className="hero-headline">
              ELEVE SEU CORPO AO <br />
              <span className="text-accent-red">NÍVEL MÁXIMO DE PERFORMANCE</span>
            </h1>

            <p className="hero-lead-text">
              Treinamento Híbrido, Musculação Pesada com aparelhos novos de última geração e acompanhamento profissional. Aberto 7 dias por semana para você não perder&nbsp;o&nbsp;ritmo.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn-primary hero-btn-cta"
                onClick={onOpenTrialModal}
                id="hero-trial-cta-btn"
              >
                <span>Garantir Aula Experimental</span>
                <ArrowRight size={19} />
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
                <Check size={15} className="text-accent-red stroke-[3]" />
                <span>Sem Taxa de Matrícula</span>
              </div>
              <div className="proof-item">
                <Check size={15} className="text-accent-red stroke-[3]" />
                <span>Aceitamos Wellhub, Gympass & TotalPass</span>
              </div>
              <div className="proof-item">
                <Check size={15} className="text-accent-red stroke-[3]" />
                <span>100% Climatizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STITCH GOOGLE-DESIGNED STATS CARDS SECTION WITH NEON PULSE & OUTLINE NUMBERS */}
      <section className="hero-stats-band-section">
        {/* ATMOSPHERIC BACKGROUND AMBIENT GLOWS */}
        <div className="stats-bg-ambient-layer pointer-events-none">
          <div className="stats-ambient-glow-left"></div>
          <div className="stats-ambient-glow-right"></div>
        </div>

        <div className="container relative z-10">
          <div className="hero-editorial-stats-grid">
            {stats.map((item) => (
              <div key={item.index} className="stat-card">
                <div className="bg-pulse"></div>
                <div className="stat-card-outline-num">{item.index}</div>
                <div className="stat-card-content">
                  <div className="stat-card-red-bar"></div>
                  <div className="stat-card-number-row">
                    <h3 className="stat-card-num-val">{item.number}</h3>
                    {item.isStar && (
                      <Star className="stat-card-star-icon" size={26} fill="var(--accent-red)" stroke="none" />
                    )}
                  </div>
                  <h4 className="stat-card-label">{item.label}</h4>
                  <p className="stat-card-desc">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
