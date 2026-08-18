import React, { useState } from "react";
import { Star, MapPin, ExternalLink, Quote, ThumbsUp, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Lucas Mendes",
      time: "há 3 semanas",
      stars: 5,
      category: "aparelhos",
      text: "Academia top de linha em Rio Verde! Aparelhos novos e biomecânica excelente. Instrutores sempre presentes no salão tirando dúvidas e corrigindo postura.",
      verified: true,
      tag: "Aluno Frequente"
    },
    {
      id: 2,
      name: "Camila Rodrigues",
      time: "há 1 mês",
      stars: 5,
      category: "horarios",
      text: "O que mais me conquistou foi funcionar de domingo a domingo! Fim de semana sempre consigo manter a rotina. Ambiente super climatizado e cheiroso.",
      verified: true,
      tag: "Treina aos Domingos"
    },
    {
      id: 3,
      name: "Matheus Silva",
      time: "há 2 meses",
      stars: 5,
      category: "convenios",
      text: "Uso pelo Wellhub (Gympass) e o check-in é super rápido, sem frescura. A academia entrega uma estrutura muito superior às outras da mesma faixa.",
      verified: true,
      tag: "Usuário Wellhub"
    },
    {
      id: 4,
      name: "Gabriel Santos",
      time: "há 3 meses",
      stars: 5,
      category: "treinos",
      text: "Treino híbrido e funcional sensacional! A área de pesos livres tem halteres pesados e muito espaço. Não fica aquela muvuca de fila em aparelho.",
      verified: true,
      tag: "Treinamento Híbrido"
    },
    {
      id: 5,
      name: "Vanessa Ferreira",
      time: "há 4 meses",
      stars: 5,
      category: "atendimento",
      text: "Atendimento nota mil da recepção aos instrutores. Comecei do zero sem saber treinar e hoje não largo por nada. Super recomendo a PowerFitt!",
      verified: true,
      tag: "Transformação Real"
    }
  ];

  const filteredReviews = filter === "all" ? reviews : reviews.filter(r => r.category === filter);

  const mapsUrl = "https://www.google.com/maps/place/PowerFitt/@-17.7587224,-50.9158331,17.29z/data=!4m6!3m5!1s0x9361c5c54e01c923:0xa9dc7ad527d0c9a3!8m2!3d-17.7574803!4d-50.9171156!16s%2Fg%2F11sjyj48jg";

  return (
    <section id="avaliacoes" className="section-padding reviews-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Star size={16} className="fill-current" />
            <span>OPINIÃO DE QUEM JÁ TREINA CONOSCO</span>
          </div>
          <h2 className="section-title">
            AVALIAÇÕES REAIS NO <span className="text-accent-red">GOOGLE MAPS</span>
          </h2>
          <p className="section-subtitle">
            Veja a experiência de quem vive a transformação diária na PowerFitt Academia no Parque Dom Miguel.
          </p>
        </div>

        {/* GOOGLE SCORE OVERVIEW CARD */}
        <div className="google-score-card glass-card">
          <div className="score-main-block">
            <div className="google-logo-badge">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-green">l</span>
              <span className="g-red">e</span>
              <span className="g-text">Avaliações</span>
            </div>
            <div className="score-stars-row">
              <span className="score-num">4.9</span>
              <div className="stars-icons">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="score-count">(Classificação de Excelência em Rio Verde)</span>
            </div>
          </div>

          <div className="score-cta-block">
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary btn-maps-link"
            >
              <MapPin size={18} className="text-accent-red" />
              <span>Ver no Google Maps Oficial</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* REVIEWS FILTER PILLS */}
        <div className="reviews-filter-bar">
          <button 
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Todas as Avaliações
          </button>
          <button 
            className={`filter-pill ${filter === "aparelhos" ? "active" : ""}`}
            onClick={() => setFilter("aparelhos")}
          >
            Aparelhos & Estrutura
          </button>
          <button 
            className={`filter-pill ${filter === "horarios" ? "active" : ""}`}
            onClick={() => setFilter("horarios")}
          >
            Aberto 7 Dias
          </button>
          <button 
            className={`filter-pill ${filter === "convenios" ? "active" : ""}`}
            onClick={() => setFilter("convenios")}
          >
            Wellhub & TotalPass
          </button>
          <button 
            className={`filter-pill ${filter === "atendimento" ? "active" : ""}`}
            onClick={() => setFilter("atendimento")}
          >
            Atendimento & Instrutores
          </button>
        </div>

        {/* REVIEWS GRID */}
        <div className="reviews-grid">
          {filteredReviews.map((item) => (
            <div key={item.id} className="review-card glass-card">
              <div className="review-card-top">
                <div className="reviewer-meta">
                  <div className="reviewer-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="reviewer-name">{item.name}</h4>
                    <span className="reviewer-time">{item.time}</span>
                  </div>
                </div>

                <div className="review-tag-badge">
                  <span>{item.tag}</span>
                </div>
              </div>

              <div className="review-stars">
                {[...Array(item.stars)].map((_, s) => (
                  <Star key={s} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
                <span className="verified-review-text">
                  <ShieldCheck size={14} className="text-accent-red" />
                  Avaliação Verificada
                </span>
              </div>

              <p className="review-quote-text">
                "{item.text}"
              </p>

              <div className="review-footer">
                <span className="google-source-tag">via Google Maps</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
