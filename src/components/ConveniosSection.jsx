import React from "react";
import { Building2, Check, ArrowRight, ShieldCheck, HeartPulse, Dumbbell, Users, CalendarCheck } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function ConveniosSection() {
  const pillars = [
    {
      num: "01",
      icon: Dumbbell,
      title: "Estrutura Completa",
      desc: "Aparelhos modernos e biomecânicos para todos os grupos musculares e ampla área de pesos livres."
    },
    {
      num: "02",
      icon: Users,
      title: "Profissionais Qualificados",
      desc: "Professores experientes e atenciosos no salão para orientar sua execução e montar sua ficha de treino."
    },
    {
      num: "03",
      icon: HeartPulse,
      title: "Saúde, Disposição & Bem-Estar",
      desc: "Mais energia no seu dia a dia, evolução estética e saúde cardiovascular com acompanhamento contínuo."
    },
    {
      num: "04",
      icon: CalendarCheck,
      title: "Flexibilidade na sua Rotina",
      desc: "Horário amplo das 05:30 às 22:30 de segunda a sexta, além de funcionamento aos sábados e domingos."
    }
  ];

  return (
    <section id="convenios" className="section-padding convenios-official-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Building2 size={16} />
            <span>CONVÊNIOS & BENEFÍCIOS CORPORATIVOS</span>
          </div>
          <h2 className="section-title">
            ACEITAMOS DOIS GRANDES PLANOS <br />
            <span className="text-accent-red">PARA VOCÊ TREINAR SEM LIMITES!</span>
          </h2>
          <p className="section-subtitle">
            Se você possui benefício corporativo pela sua empresa, você treina com acesso total na PowerFitt.
          </p>
        </div>

        {/* 2 MAIN CORPORATE BENEFIT CARDS */}
        <div className="convenios-two-cards-grid">
          {/* WELLHUB & GYMPASS CARD */}
          <div className="convenio-brand-card wellhub-card glass-card">
            <div className="convenio-card-badge wellhub-badge">
              <span>Wellhub & Gympass</span>
            </div>
            <div className="convenio-brand-header">
              <h3 className="convenio-brand-title">wellhub <span className="text-sm font-normal text-muted">(Gympass)</span></h3>
              <span className="convenio-status-chip">Aceito a partir do Starter</span>
            </div>
            <p className="convenio-quote">
              "Mais saúde. Mais bem-estar. Seu treino, seu jeito!"
            </p>
            <div className="convenio-features-list">
              <div className="convenio-feature-item">
                <Check size={16} className="text-wellhub" />
                <span>Check-in rápido na recepção pelo app Wellhub</span>
              </div>
              <div className="convenio-feature-item">
                <Check size={16} className="text-wellhub" />
                <span>Acesso a musculação, funcional e dança</span>
              </div>
              <div className="convenio-feature-item">
                <Check size={16} className="text-wellhub" />
                <span>Sem taxa de adesão ou taxas extras</span>
              </div>
            </div>
            <button 
              className="btn-secondary w-full btn-convenio-cta"
              onClick={() => openWhatsApp("Olá! Quero saber como utilizar meu Wellhub / Gympass na PowerFitt Academia.")}
            >
              <span>Como Usar Wellhub / Gympass</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* TOTALPASS CARD */}
          <div className="convenio-brand-card totalpass-card glass-card">
            <div className="convenio-card-badge totalpass-badge">
              <span>TotalPass</span>
            </div>
            <div className="convenio-brand-header">
              <h3 className="convenio-brand-title">TOTAL<span className="font-light">PASS</span></h3>
              <span className="convenio-status-chip">Check-in Liberado</span>
            </div>
            <p className="convenio-quote">
              "+ Academias. + Opções. + Resultados! Treine onde e quando quiser!"
            </p>
            <div className="convenio-features-list">
              <div className="convenio-feature-item">
                <Check size={16} className="text-totalpass" />
                <span>Check-in instantâneo via aplicativo TotalPass</span>
              </div>
              <div className="convenio-feature-item">
                <Check size={16} className="text-totalpass" />
                <span>Acesso ilimitado a toda a nossa estrutura</span>
              </div>
              <div className="convenio-feature-item">
                <Check size={16} className="text-totalpass" />
                <span>Treine 7 dias por semana no Parque Dom Miguel</span>
              </div>
            </div>
            <button 
              className="btn-secondary w-full btn-convenio-cta"
              onClick={() => openWhatsApp("Olá! Gostaria de fazer meu check-in pelo TotalPass na PowerFitt.")}
            >
              <span>Como Usar TotalPass</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 4 EDITORIAL PILLARS */}
        <div className="convenios-four-pillars-grid">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="pillar-card glass-card">
                <div className="pillar-header">
                  <span className="pillar-num">{p.num}</span>
                  <div className="pillar-icon-box">
                    <Icon size={20} className="text-accent-red" />
                  </div>
                </div>
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* OFFICIAL SLOGAN FOOTER STRIP */}
        <div className="convenios-slogan-strip glass-card neon-border-glow">
          <div className="slogan-content">
            <span className="slogan-pre">ESCOLHA SEU PLANO. ESCOLHA SER SUA MELHOR VERSÃO!</span>
            <h3 className="slogan-main">
              POWERFITT É MAIS QUE ACADEMIA. <span className="text-accent-red">É TRANSFORMAÇÃO!</span>
            </h3>
          </div>
          <button 
            className="btn-primary btn-slogan-cta"
            onClick={() => openWhatsApp("Olá! Gostaria de conhecer a PowerFitt Academia.")}
          >
            <span>Falar com a Recepção</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
