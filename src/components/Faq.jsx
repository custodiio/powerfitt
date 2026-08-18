import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      num: "01",
      question: "Como funciona a Aula Experimental na PowerFitt?",
      answer: "É 100% gratuita e sem compromisso! Você agenda pelo nosso site ou WhatsApp, comparece com roupa esportiva e é recepcionado por um dos nossos professores, que vai te apresentar a estrutura, entender seu objetivo e acompanhar seu treino de estreia."
    },
    {
      num: "02",
      question: "Como funciona o acesso pelo Wellhub e TotalPass?",
      answer: "Aceitamos o Wellhub a partir do plano Starter e o TotalPass normalmente! Ao chegar na academia, basta abrir o app no seu celular, realizar o check-in selecionando a unidade PowerFitt (Parque Dom Miguel) e apresentar a validação na recepção."
    },
    {
      num: "03",
      question: "Preciso pagar taxa de matrícula ou taxa de adesão?",
      answer: "No nosso Plano Anual e campanhas ativas, a taxa de matrícula é ZERO! Nos demais planos temos condições acessíveis, sem cobranças ocultas ou taxas de anuidade surpresa."
    },
    {
      num: "04",
      question: "Nunca treinei antes. Terei acompanhamento de instrutores?",
      answer: "Com certeza! Nossa equipe de professores fica presente no salão de musculação e treinamento funcional durante todo o horário de funcionamento para orientar a postura correta, montar sua rotina de treino e tirar todas as suas dúvidas."
    },
    {
      num: "05",
      question: "A academia abre todos os dias da semana?",
      answer: "Sim! Abrimos de domingo a domingo. De segunda a sexta das 05:30 às 22:30, aos sábados das 08:00 às 16:00 e aos domingos das 09:00 às 12:00, para que você nunca perca o foco no seu treino."
    },
    {
      num: "06",
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos cartões de crédito (com parcelamento em até 12x no plano anual), cartão de débito, Pix instantâneo e dinheiro na recepção."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding faq-section relative overflow-hidden">
      {/* ATMOSPHERIC AMBIENT GLOW */}
      <div className="faq-ambient-glow-layer pointer-events-none">
        <div className="faq-ambient-glow-center"></div>
      </div>

      <div className="container relative z-10">
        {/* HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <HelpCircle size={16} />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="section-title">
            PERGUNTAS & <span className="text-accent-red">RESPOSTAS RÁPIDAS</span>
          </h2>
          <p className="section-subtitle">
            Tudo o que você precisa saber sobre matrículas, horários, convênios e treinos na PowerFitt.
          </p>
        </div>

        {/* ACCORDION CONTAINER (STITCH BENTO CARDS) */}
        <div className="faq-stitch-grid">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.num} 
                className={`stat-card faq-stitch-card ${isOpen ? "faq-stitch-open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                {/* RADIAL PULSE HOVER LAYER */}
                <div className="bg-pulse"></div>

                {/* WATERMARK NUMBER */}
                <div className="stat-card-outline-num faq-outline-num">{faq.num}</div>

                <div className="stat-card-content faq-card-inner">
                  {/* QUESTION HEADER ROW */}
                  <div className="faq-question-flex-row">
                    <div className="faq-num-pill">{faq.num}</div>
                    <h3 className="faq-question-heading">{faq.question}</h3>
                    <div className={`faq-stitch-arrow-btn ${isOpen ? "arrow-active" : ""}`}>
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  {/* ANSWER COLLAPSIBLE BLOCK */}
                  {isOpen && (
                    <div className="faq-stitch-answer-block fade-in">
                      <div className="faq-answer-accent-line"></div>
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* EXTRA HELP CALLOUT (STITCH BENTO CARD) */}
        <div className="stat-card faq-contact-stitch-banner mt-8">
          <div className="bg-pulse"></div>
          <div className="pillar-header-row mb-0">
            <div className="stat-card-red-bar"></div>
          </div>
          
          <div className="faq-contact-inner-content">
            <div className="faq-contact-meta">
              <div className="pillar-icon-glow-wrap flex-shrink-0">
                <MessageSquare size={22} className="text-accent-red" />
              </div>
              <div className="faq-contact-titles">
                <h4 className="faq-contact-title">Ainda tem alguma pergunta específica?</h4>
                <p className="faq-contact-desc">Fale diretamente com nossa recepção pelo WhatsApp oficial e tire todas as suas dúvidas.</p>
              </div>
            </div>

            <button 
              className="btn-primary faq-contact-btn"
              onClick={() => openWhatsApp("Olá! Tenho uma dúvida sobre a PowerFitt Academia.")}
            >
              <span>Falar com Atendente</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
