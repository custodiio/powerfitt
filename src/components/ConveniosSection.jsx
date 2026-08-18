import React from "react";
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  HeartPulse, 
  Dumbbell, 
  Users, 
  CalendarCheck,
  Smartphone,
  ShieldCheck,
  Sparkles
} from "lucide-react";
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

        {/* 2 MAIN CORPORATE BENEFIT CARDS WITH FLOATING LOGOS & GLOW */}
        <div className="convenios-two-cards-grid">
          {/* WELLHUB & GYMPASS CARD */}
          <div className="convenio-brand-card wellhub-card glass-panel glow-red group">
            {/* RADIAL GLOW HOVER */}
            <div className="convenio-accent-gradient wellhub-gradient"></div>

            <div className="convenio-card-content-wrap">
              {/* FLOATING LOGO STAGE (WITHOUT TEXT TITLE) */}
              <div className="convenio-logo-stage float-anim">
                <img 
                  src="/images/wellhub-logo.png" 
                  alt="Wellhub Gympass Logo" 
                  className="convenio-floating-logo wellhub-img"
                />
              </div>

              {/* FEATURES WITH DETAILED DESCRIPTIONS */}
              <ul className="convenio-rich-features">
                <li className="convenio-rich-item">
                  <CheckCircle2 size={22} className="text-wellhub-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="convenio-item-title">Aceito a partir do plano Starter</h5>
                    <p className="convenio-item-sub">Comece sua jornada fitness com planos acessíveis e cobertura completa.</p>
                  </div>
                </li>

                <li className="convenio-rich-item">
                  <Smartphone size={22} className="text-wellhub-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="convenio-item-title">Check-in rápido via app Wellhub</h5>
                    <p className="convenio-item-sub">Liberação instantânea na recepção usando apenas o seu smartphone.</p>
                  </div>
                </li>

                <li className="convenio-rich-item">
                  <Dumbbell size={22} className="text-wellhub-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="convenio-item-title">Acesso total à musculação e aulas</h5>
                    <p className="convenio-item-sub">Sem restrições. Usufrua de toda a nossa infraestrutura e grade de aulas.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* ACTION CTA BUTTON */}
            <div className="convenio-btn-wrap">
              <button 
                className="btn-secondary w-full btn-convenio-cta btn-wellhub-cta"
                onClick={() => openWhatsApp("Olá! Quero ativar e utilizar meu Wellhub / Gympass na PowerFitt Academia.")}
              >
                <span>Ativar Wellhub</span>
                <ArrowRight size={17} className="btn-arrow-icon" />
              </button>
            </div>
          </div>

          {/* TOTALPASS CARD */}
          <div className="convenio-brand-card totalpass-card glass-panel glow-green group">
            {/* RADIAL GLOW HOVER */}
            <div className="convenio-accent-gradient totalpass-gradient"></div>

            <div className="convenio-card-content-wrap">
              {/* FLOATING LOGO STAGE (WITHOUT TEXT TITLE) */}
              <div className="convenio-logo-stage float-anim float-delay">
                <img 
                  src="/images/totalpass-logo.png" 
                  alt="TotalPass Logo" 
                  className="convenio-floating-logo totalpass-img"
                />
              </div>

              {/* FEATURES WITH DETAILED DESCRIPTIONS */}
              <ul className="convenio-rich-features">
                <li className="convenio-rich-item">
                  <CheckCircle2 size={22} className="text-totalpass-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="convenio-item-title">Check-in Liberado</h5>
                    <p className="convenio-item-sub">Processo simplificado na recepção para você focar 100% no seu treino.</p>
                  </div>
                </li>

                <li className="convenio-rich-item">
                  <Building2 size={22} className="text-totalpass-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="convenio-item-title">Acesso ilimitado a toda estrutura</h5>
                    <p className="convenio-item-sub">Cardio, peso livre, máquinas de alta tecnologia e vestiários completos.</p>
                  </div>
                </li>

                <li className="convenio-rich-item">
                  <CalendarCheck size={22} className="text-totalpass-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="convenio-item-title">Treine onde e quando quiser</h5>
                    <p className="convenio-item-sub">Aberto de segunda a domingo na PowerFitt Parque Dom Miguel.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* ACTION CTA BUTTON */}
            <div className="convenio-btn-wrap">
              <button 
                className="btn-secondary w-full btn-convenio-cta btn-totalpass-cta"
                onClick={() => openWhatsApp("Olá! Quero ativar e utilizar meu TotalPass na PowerFitt Academia.")}
              >
                <span>Ativar TotalPass</span>
                <ArrowRight size={17} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 STITCH-STYLED PILLARS BENTO GRID */}
        <div className="convenios-four-pillars-grid">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="stat-card pillar-stat-card">
                <div className="bg-pulse"></div>
                <div className="stat-card-outline-num">{p.num}</div>
                <div className="stat-card-content">
                  <div className="pillar-header-row">
                    <div className="stat-card-red-bar"></div>
                    <div className="pillar-icon-glow-wrap">
                      <Icon size={20} className="text-accent-red" />
                    </div>
                  </div>
                  <h4 className="pillar-stitch-title">{p.title}</h4>
                  <p className="stat-card-desc">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM MOTIVATIONAL STRIP */}
        <div className="convenios-slogan-strip glass-card neon-border-glow">
          <div className="slogan-text">
            <span className="slogan-pre">TREINAMENTO DE VERDADE NO PARQUE DOM MIGUEL</span>
            <h3 className="slogan-main">
              VENHA VIVER A EXPERIÊNCIA <span className="text-accent-red">POWERFITT</span>
            </h3>
          </div>
          <button 
            className="btn-primary"
            onClick={() => openWhatsApp("Olá! Gostaria de conhecer a PowerFitt Academia e agendar um horário.")}
          >
            <span>Falar com Atendimento</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
