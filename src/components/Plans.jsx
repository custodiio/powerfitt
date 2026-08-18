import React from "react";
import { CheckCircle2, Flame, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Plans({ onOpenTrialModal }) {
  const plans = [
    {
      id: "mensal",
      num: "01",
      name: "PLANO MENSAL",
      slogan: "Liberdade para treinar do seu jeito.",
      price: "90,00",
      period: "/mês",
      installment: null,
      benefits: [
        "Acesso livre à Musculação",
        "Aulas de Dança e Ritmos inclusas",
        "Acompanhamento de instrutores no salão"
      ],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de me matricular no Plano Mensal (R$ 90) da PowerFitt."
    },
    {
      id: "bimestral",
      num: "02",
      name: "PLANO BIMESTRAL",
      slogan: "O compromisso certo para ver resultados.",
      price: "160,00",
      period: "/total",
      installment: null,
      benefits: [
        "Ficha de treino individualizada",
        "Acesso 7 dias por semana",
        "Parcelamento no cartão de crédito"
      ],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de saber mais sobre o Plano Bimestral (R$ 160) da PowerFitt."
    },
    {
      id: "trimestral",
      num: "03",
      name: "PLANO TRIMESTRAL",
      slogan: "Mais constância, mais evolução.",
      price: "230,00",
      period: "/total",
      installment: null,
      benefits: [
        "Avaliação e atualização da ficha",
        "Acesso livre de segunda a domingo",
        "Parcelamento em até 3x"
      ],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de me matricular no Plano Trimestral (R$ 230) da PowerFitt."
    },
    {
      id: "semestral",
      num: "04",
      name: "PLANO SEMESTRAL",
      slogan: "O melhor custo-benefício para o seu objetivo.",
      price: "450,00",
      period: "",
      installment: "TOTAL (6X R$ 75,00)",
      benefits: [
        "Maior economia",
        "Acesso completo 7 dias por semana",
        "Acompanhamento e evolução contínua"
      ],
      isPopular: true,
      whatsappMsg: "Olá! Quero garantir a condição do Plano Semestral (R$ 450) da PowerFitt."
    }
  ];

  return (
    <section id="planos" className="section-padding plans-redesigned-section relative">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="plans-ambient-glow-layer pointer-events-none">
        <div className="plans-ambient-glow-center"></div>
      </div>

      <div className="container relative z-10">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Zap size={16} />
            <span>VALORES OFICIAIS & ACESSÍVEIS</span>
          </div>
          <h2 className="section-title">
            ESCOLHA SEU PLANO. <br />
            <span className="text-accent-red">ESCOLHA SER SUA MELHOR VERSÃO!</span>
          </h2>
          <p className="section-subtitle">
            Musculação e Dança inclusas. Sem taxas ocultas no Parque Dom Miguel.
          </p>
        </div>

        {/* 4 STITCH PRICING BENTO GRID */}
        <div className="stitch-pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`plan-pricing-card ${plan.isPopular ? "featured-pricing-card" : "regular-pricing-card"}`}
            >
              {/* RADIAL PULSE HOVER LAYER */}
              <div className="plan-bg-pulse"></div>

              {/* POPULAR RIBBON BADGE */}
              {plan.isPopular && (
                <div className="plan-ribbon-tag">
                  <Flame size={15} className="fill-current" />
                  <span>MAIS ESCOLHIDO</span>
                </div>
              )}

              {/* GIANT BACKGROUND OUTLINE WATERMARK NUMBER */}
              <div className="plan-outline-num-giant">
                {plan.num}
              </div>

              {/* CARD TOP CONTENT */}
              <div className={`plan-card-body-wrap ${plan.isPopular ? "mt-4" : ""}`}>
                <h3 className="plan-card-title">{plan.name}</h3>
                <p className="plan-card-slogan">{plan.slogan}</p>

                {/* PRICE ROW */}
                <div className="plan-price-row">
                  <span className="plan-price-currency">R$</span>
                  <span className={`plan-price-val ${plan.isPopular ? "text-white drop-shadow-neon" : ""}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="plan-price-period">{plan.period}</span>
                  )}
                </div>

                {/* INSTALLMENT HIGHLIGHT */}
                {plan.installment && (
                  <p className="plan-installment-label">{plan.installment}</p>
                )}

                {/* BENEFITS LIST */}
                <ul className="plan-benefits-checklist">
                  {plan.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="plan-benefit-item">
                      <CheckCircle2 size={19} className="text-accent-red flex-shrink-0" />
                      <span className={plan.isPopular && bIdx === 0 ? "text-white font-semibold" : ""}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTON */}
              <div className="plan-card-btn-wrap">
                <button 
                  className={`w-full plan-whatsapp-cta-btn ${plan.isPopular ? "btn-primary-glow" : "btn-secondary-outline"}`}
                  onClick={() => openWhatsApp(plan.whatsappMsg)}
                >
                  <span>Matricular via WhatsApp</span>
                  <ArrowRight size={17} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CONVENIOS STRIP CALLOUT (STITCH BENTO DESIGN) */}
        <div className="stat-card stitch-cta-banner plans-convenio-stitch-banner">
          <div className="bg-pulse"></div>
          <div className="stitch-cta-ambient-glow"></div>
          
          <div className="stitch-cta-inner-wrap">
            <div className="stitch-cta-left-content">
              <div className="stitch-cta-icon-box">
                <ShieldCheck size={26} className="text-accent-red" />
              </div>
              <div className="stitch-cta-text-box">
                <div className="stitch-cta-header-line">
                  <h4 className="stitch-cta-title">Possui convênio corporativo?</h4>
                  <div className="convenio-mini-tags-group">
                    <span className="convenio-mini-pill wellhub-pill">Wellhub (Gympass)</span>
                    <span className="convenio-mini-pill totalpass-pill">TotalPass</span>
                  </div>
                </div>
                <p className="stitch-cta-desc">
                  Treine na PowerFitt sem burocracia ou taxas adicionais. Faça check-in direto pelo app do seu convênio e comece a treinar hoje mesmo.
                </p>
              </div>
            </div>
            
            <a href="#convenios" className="btn-secondary stitch-cta-action-btn">
              <span>Ver Detalhes dos Convênios</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
