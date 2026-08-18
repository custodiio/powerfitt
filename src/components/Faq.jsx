import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como funciona a Aula Experimental VIP na PowerFitt?",
      answer: "É 100% gratuita e sem compromisso! Você agenda pelo nosso site ou WhatsApp, comparece com roupa esportiva e é recepcionado por um dos nossos instrutores, que vai te apresentar os aparelhos, entender seu objetivo e acompanhar seu treino de estreia."
    },
    {
      question: "Como funciona o acesso pelo Wellhub (antigo Gympass) e TotalPass?",
      answer: "Aceitamos o Wellhub a partir do plano Starter e o TotalPass normalmente! Basta abrir o aplicativo correspondente no seu celular ao chegar na academia, realizar o check-in selecionando a unidade PowerFitt (Parque Dom Miguel) e apresentar a validação na recepção."
    },
    {
      question: "Preciso pagar taxa de matrícula ou taxa de adesão?",
      answer: "No nosso Plano Anual VIP e promoções ativas, a taxa de matrícula é ZERO! Nos demais planos temos condições super flexíveis e sem cobrança surpresa de anuidade."
    },
    {
      question: "Nunca treinei antes. Terei acompanhamento de instrutores?",
      answer: "Com certeza! Nossa equipe de professores está presente no salão de musculação e treinamento funcional durante todo o horário de funcionamento para orientar a execução correta, montar sua ficha de treino e tirar qualquer dúvida."
    },
    {
      question: "A academia abre todos os dias mesmo?",
      answer: "Sim! Abrimos de domingo a domingo. De segunda a sexta das 05:30 às 22:30, aos sábados das 08:00 às 16:00 e aos domingos das 09:00 às 12:00, para que você nunca fique sem treinar."
    },
    {
      question: "Quais são as formas de pagamento aceitas para os planos?",
      answer: "Aceitamos cartões de crédito (com parcelamento em até 12x no plano anual), cartão de débito, Pix instantâneo e dinheiro na recepção."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <HelpCircle size={16} />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="section-title">
            TUDO O QUE VOCÊ <span className="text-accent-red">PRECISA SABER</span>
          </h2>
          <p className="section-subtitle">
            Respostas diretas e transparentes para você começar seu treino sem nenhuma dúvida.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="faq-accordion-wrapper">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-card ${isOpen ? "faq-item-open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <button className="faq-question-row">
                  <span className="faq-question-text">{faq.question}</span>
                  <div className={`faq-arrow-circle ${isOpen ? "rotated" : ""}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-block fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* EXTRA HELP BOX */}
        <div className="faq-contact-card glass-card">
          <div className="faq-contact-text">
            <MessageSquare size={24} className="text-accent-red" />
            <div>
              <h4>Ainda tem alguma pergunta específica?</h4>
              <p>Fale diretamente com nossa recepção pelo WhatsApp oficial.</p>
            </div>
          </div>
          <button 
            className="btn-primary"
            onClick={() => openWhatsApp("Olá! Tenho uma dúvida sobre a PowerFitt Academia.")}
          >
            <span>Conversar no WhatsApp</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
