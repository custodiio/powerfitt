import React, { useState, useEffect } from "react";
import { Star, MapPin, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const reviews = [
    {
      id: 1,
      num: "01",
      name: "Lucas Mendes",
      time: "há 3 semanas",
      stars: 5,
      text: "Academia top de linha em Rio Verde! Aparelhos novos e biomecânica excelente. Instrutores sempre presentes no salão tirando dúvidas e corrigindo postura.",
      tag: "Aluno Frequente"
    },
    {
      id: 2,
      num: "02",
      name: "Camila Rodrigues",
      time: "há 1 mês",
      stars: 5,
      text: "O que mais me conquistou foi funcionar de domingo a domingo! Fim de semana sempre consigo manter a rotina. Ambiente super climatizado e cheiroso.",
      tag: "Treina aos Domingos"
    },
    {
      id: 3,
      num: "03",
      name: "Matheus Silva",
      time: "há 2 meses",
      stars: 5,
      text: "Uso pelo Wellhub (Gympass) e o check-in é super rápido, sem frescura. A academia entrega uma estrutura muito superior às outras da mesma faixa.",
      tag: "Usuário Wellhub"
    },
    {
      id: 4,
      num: "04",
      name: "Gabriel Santos",
      time: "há 3 meses",
      stars: 5,
      text: "Treino híbrido e funcional sensacional! A área de pesos livres tem halteres pesados e muito espaço. Não fica aquela muvuca de fila em aparelho.",
      tag: "Treinamento Híbrido"
    },
    {
      id: 5,
      num: "05",
      name: "Vanessa Ferreira",
      time: "há 4 meses",
      stars: 5,
      text: "Atendimento nota mil da recepção aos instrutores. Comecei do zero sem saber treinar e hoje não largo por nada. Super recomendo a PowerFitt!",
      tag: "Transformação Real"
    },
    {
      id: 6,
      num: "06",
      name: "Rodrigo Albuquerque",
      time: "há 2 meses",
      stars: 5,
      text: "Melhor maquinário de Rio Verde no Parque Dom Miguel. Aparelhos articulados de verdade, halteres até 50kg e vestiários impecáveis.",
      tag: "Musculação Pesada"
    }
  ];

  // Auto-advance continuously every 15 seconds (15000ms)
  // Resets timer back to 0 whenever timerKey updates (user interaction)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [timerKey, reviews.length]);

  const resetTimer = () => {
    setTimerKey((k) => k + 1);
  };

  const handlePrev = () => {
    resetTimer();
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    resetTimer();
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleSelectCard = (idx) => {
    resetTimer();
    setCurrentIndex(idx);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const [dimensions, setDimensions] = useState({
    cardWidth: 260,
    gap: 16
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        const mobileW = Math.max(210, Math.min(width * 0.72, 260));
        setDimensions({ cardWidth: mobileW, gap: 12 });
      } else if (width <= 768) {
        setDimensions({ cardWidth: 250, gap: 14 });
      } else {
        setDimensions({ cardWidth: 260, gap: 16 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Direct Google Maps Reviews URL provided by user
  const mapsUrl = "https://www.google.com/maps/place/PowerFitt/@-17.7587224,-50.9158331,17z/data=!4m8!3m7!1s0x9361c5c54e01c923:0xa9dc7ad527d0c9a3!8m2!3d-17.7574803!4d-50.9171156!9m1!1b1!16s%2Fg%2F11sjyj48jg?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="avaliacoes" className="section-padding reviews-section relative">
      {/* ATMOSPHERIC BACKGROUND GLOW */}
      <div className="reviews-ambient-glow-layer pointer-events-none">
        <div className="reviews-ambient-glow-center"></div>
      </div>

      <div className="container relative z-10">
        {/* SPLIT 2-COLUMN BALANCED LAYOUT */}
        <div className="reviews-split-layout">
          {/* LEFT COLUMN: TITLE (MATCHING STANDARD SECTION TITLE), RATING & CTA BUTTON */}
          <div className="reviews-info-column">
            <div className="section-badge red-badge">
              <Sparkles size={14} />
              <span>AVALIAÇÕES REAIS • GOOGLE MAPS</span>
            </div>

            <h2 className="section-title reviews-aligned-title">
              QUEM TREINA, <br />
              <span className="text-accent-red">RECOMENDA.</span>
            </h2>

            {/* INTEGRATED CLEAN RATING STRIP */}
            <div className="reviews-rating-hero-strip">
              <div className="rating-huge-number">4.9</div>
              <div className="rating-stars-col">
                <div className="stars-cluster">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="rating-excellence-tag">
                  Classificação Máxima em Rio Verde
                </span>
              </div>
            </div>

            <p className="reviews-short-summary">
              Estrutura moderna, ambiente 100% climatizado, aparelhos novos e acompanhamento profissional de verdade no Parque Dom Miguel.
            </p>

            {/* CTA BUTTON LOCATED IN THE LEFT COLUMN (DESKTOP ONLY) */}
            <div className="reviews-left-cta-wrap desktop-only">
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary-outline reviews-view-all-btn group"
              >
                <MapPin size={18} className="text-accent-red flex-shrink-0" />
                <span>Ver Todas as Avaliações</span>
                <ExternalLink size={16} className="btn-arrow-icon" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: COMPACT LATERAL CAROUSEL + CLEAN CENTERED CONTROLS */}
          <div 
            className="reviews-carousel-column"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="reviews-carousel-stage">
              <div 
                className="reviews-carousel-track"
                style={{
                  transform: `translateX(calc(50% - ${(currentIndex * (dimensions.cardWidth + dimensions.gap)) + (dimensions.cardWidth / 2)}px))`
                }}
              >
                {reviews.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectCard(idx)}
                      style={{
                        width: `${dimensions.cardWidth}px`,
                        flex: `0 0 ${dimensions.cardWidth}px`
                      }}
                      className={`review-bento-card stat-card ${isActive ? "card-in-focus" : "card-out-of-focus"}`}
                    >
                      {/* RADIAL PULSE HOVER */}
                      <div className="bg-pulse"></div>

                      {/* OUTLINE WATERMARK NUMBER */}
                      <div className="stat-card-outline-num review-outline-num">{item.num}</div>

                      <div className="stat-card-content review-card-inner">
                        {/* TOPBAR */}
                        <div className="review-card-topbar">
                          <div className="stat-card-red-bar review-red-bar"></div>
                          <span className="review-tag-chip">{item.tag}</span>
                        </div>

                        {/* REVIEWER INFO */}
                        <div className="reviewer-profile-row">
                          <div className="reviewer-avatar-box">
                            {item.name.charAt(0)}
                          </div>
                          <div className="reviewer-text-meta">
                            <h4 className="reviewer-display-name">{item.name}</h4>
                            <span className="reviewer-timestamp">{item.time}</span>
                          </div>
                        </div>

                        {/* STARS RATING */}
                        <div className="review-stars-strip">
                          <div className="stars-cluster">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                            ))}
                          </div>
                          <div className="review-verified-badge">
                            <ShieldCheck size={13} className="text-accent-red" />
                            <span>Verificada</span>
                          </div>
                        </div>

                        {/* TESTIMONIAL QUOTE */}
                        <p className="review-testimonial-text">
                          "{item.text}"
                        </p>

                        {/* FOOTER */}
                        <div className="review-card-bottom-info">
                          <span className="google-badge-text">Google Maps</span>
                          <Quote size={17} className="review-quote-icon" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CAROUSEL CONTROLS: ARROWS & DOTS CENTERED BELOW CAROUSEL */}
            <div className="reviews-carousel-bottom-nav">
              <button 
                onClick={handlePrev} 
                className="carousel-nav-btn"
                aria-label="Avaliação anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="reviews-dots-indicator">
                {reviews.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => handleSelectCard(dotIdx)}
                    className={`review-dot-btn ${dotIdx === currentIndex ? "active" : ""}`}
                    aria-label={`Ir para avaliação ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext} 
                className="carousel-nav-btn"
                aria-label="Próxima avaliação"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* MOBILE ONLY: CTA BUTTON BELOW CAROUSEL */}
            <div className="reviews-mobile-cta-wrap mobile-only">
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary-outline reviews-view-all-btn group w-full"
              >
                <MapPin size={18} className="text-accent-red flex-shrink-0" />
                <span>Ver Todas as Avaliações</span>
                <ExternalLink size={16} className="btn-arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
