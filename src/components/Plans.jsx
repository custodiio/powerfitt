import React from "react";
import { Check, Star, ArrowRight, Zap, Gift, ShieldCheck, HeartHandshake } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Plans({ onOpenTrialModal }) {
  const plans = [
    {
      id: "mensal",
      name: "Plano Mensal",
      badge: "Mês a Mês",
      slogan: "Liberdade para treinar do seu jeito.",
      price: "90",
      cents: ",00",
      period: "/mês",
      installment: "Pagamento mensal flexível",
      benefits: [
        "Acesso livre à Musculação",
        "Aulas de Dança e Ritmos inclusas",
        "Acompanhamento de instrutores no salão",
        "Aberto 7 dias por semana (inclusive domingos)",
        "Ambiente 100% climatizado",
        "Sem taxa de matrícula ou anuidade"
      ],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de me matricular no Plano Mensal (R$ 90) da PowerFitt."
    },
    {
      id: "bimestral",
      name: "Plano Bimestral",
      badge: "2 Meses",
      slogan: "O compromisso certo para ver resultados.",
      price: "160",
      cents: ",00",
      period: "/total (2x R$ 80)",
      installment: "Economize R$ 20 no período",
      benefits: [
        "Acesso livre à Musculação",
        "Aulas de Dança e Ritmos inclusas",
        "Ficha de treino individualizada",
        "Acesso 7 dias por semana",
        "Parcelamento no cartão de crédito",
        "100% Climatizado"
      ],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de saber mais sobre o Plano Bimestral (R$ 160) da PowerFitt."
    },
    {
      id: "trimestral",
      name: "Plano Trimestral",
      badge: "3 Meses",
      slogan: "Mais constância, mais evolução.",
      price: "230",
      cents: ",00",
      period: "/total (3x R$ 76,66)",
      installment: "Economize R$ 40 no período",
      benefits: [
        "Acesso livre à Musculação",
        "Aulas de Dança e Ritmos inclusas",
        "Avaliação e atualização da ficha",
        "Acesso livre de segunda a domingo",
        "Parcelamento em até 3x",
        "Acompanhamento no salão"
      ],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de me matricular no Plano Trimestral (R$ 230) da PowerFitt."
    },
    {
      id: "semestral",
      name: "Plano Semestral",
      badge: "MAIS ESCOLHIDO 🔥",
      slogan: "O melhor custo-benefício para o seu objetivo.",
      price: "450",
      cents: ",00",
      period: "/total (6x R$ 75,00)",
      installment: "Apenas R$ 75,00 por mês!",
      benefits: [
        "Maior economia: Economize R$ 90 no total",
        "Acesso livre à Musculação",
        "Aulas de Dança e Ritmos inclusas",
        "Acompanhamento e evolução contínua",
        "Parcelamento em até 6x no cartão",
        "Acesso completo 7 dias por semana"
      ],
      isPopular: true,
      whatsappMsg: "Olá! Quero garantir a condição do Plano Semestral (R$ 450) da PowerFitt."
    }
  ];

  return (
    <section id="planos" className="section-padding plans-redesigned-section">
      <div className="container">
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

        {/* 4 PLANS GRID */}
        <div className="official-plans-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`official-plan-card glass-card ${plan.isPopular ? "featured-plan" : ""}`}
            >
              {plan.isPopular && (
                <div className="popular-ribbon">
                  <Star size={13} className="fill-current" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="plan-card-header">
                {!plan.isPopular && (
                  <span className="plan-badge-pill">{plan.badge}</span>
                )}
                <h3 className="plan-title">{plan.name}</h3>
                <p className="plan-slogan">"{plan.slogan}"</p>
              </div>

              <div className="plan-price-display">
                <div className="price-main-line">
                  <span className="price-symbol">R$</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-cents">{plan.cents}</span>
                </div>
                <span className="price-period-label">{plan.period}</span>
                <span className="price-installment-tag">{plan.installment}</span>
              </div>

              <div className="plan-card-divider"></div>

              <div className="plan-features-list">
                {plan.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="plan-feature-row">
                    <div className="feature-check-dot">
                      <Check size={13} className="text-white" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="plan-card-footer">
                <button 
                  className={`w-full ${plan.isPopular ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => openWhatsApp(plan.whatsappMsg)}
                >
                  <span>Matricular via WhatsApp</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CONVENIOS STRIP CALLOUT */}
        <div className="plans-convenio-reminder glass-card">
          <div className="reminder-text">
            <ShieldCheck size={24} className="text-accent-red" />
            <div>
              <h4>Possui convênio corporativo?</h4>
              <p>Aceitamos <strong>Wellhub (Gympass)</strong> e <strong>TotalPass</strong> sem burocracia para você treinar quando quiser.</p>
            </div>
          </div>
          <a href="#convenios" className="btn-secondary">
            <span>Ver Detalhes dos Convênios</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
