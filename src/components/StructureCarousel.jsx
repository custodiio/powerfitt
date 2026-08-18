import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, X, Eye, ShieldCheck, MapPin } from "lucide-react";

export default function StructureCarousel() {
  const slides = [
    {
      id: 1,
      num: "01",
      image: "/real_images/fachada.png",
      title: "Fachada & Recepção Oficial",
      tag: "Fachada Oficial",
      subtitle: "Localizada no Parque Dom Miguel em Rio Verde - GO com fácil acesso e estacionamento amplo."
    },
    {
      id: 2,
      num: "02",
      image: "/real_images/boa2.png",
      title: "Salão Principal & Aparelhos Biomecânicos",
      tag: "Salão Principal",
      subtitle: "Equipamentos modernos e novos pensados para isolamento muscular com máxima segurança e ergonomia."
    },
    {
      id: 3,
      num: "03",
      image: "/real_images/3.jpg",
      title: "Área de Pesos Livres & Puxadas",
      tag: "Pesos Livres",
      subtitle: "Racks profissionais, barras olímpicas, anilhas e estações completas para treino pesado e hipertrofia."
    },
    {
      id: 4,
      num: "04",
      image: "/real_images/4.jpg",
      title: "Sala de Musculação & Articulados",
      tag: "Musculação",
      subtitle: "Ampla variedade de máquinas convergentes e articuladas para todos os grupos musculares."
    },
    {
      id: 5,
      num: "05",
      image: "/real_images/5.jpg",
      title: "Orientação de Instrutores no Salão",
      tag: "Acompanhamento",
      subtitle: "Professores qualificados presentes em tempo integral para montar sua ficha e corrigir sua postura."
    },
    {
      id: 6,
      num: "06",
      image: "/real_images/6.jpg",
      title: "Área de Cardio & Treino Integrado",
      tag: "Cardio & Esteiras",
      subtitle: "Esteiras modernas e estações multifuncionais para aquecimento, resistência cardiovascular e queima calórica."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Auto-play timer (15 seconds), resets back to 0 whenever timerKey updates (user interaction)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [timerKey, slides.length]);

  const resetTimer = () => {
    setTimerKey((k) => k + 1);
  };

  const handlePrev = () => {
    resetTimer();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetTimer();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleSelectSlide = (idx) => {
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
    cardWidth: 410,
    gap: 20
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        const mobileW = Math.max(190, Math.min(width * 0.62, 230));
        setDimensions({ cardWidth: mobileW, gap: 12 });
      } else if (width <= 768) {
        setDimensions({ cardWidth: 320, gap: 16 });
      } else {
        setDimensions({ cardWidth: 410, gap: 20 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section id="estrutura" className="section-padding structure-carousel-section relative">
      {/* ATMOSPHERIC BACKGROUND GLOW */}
      <div className="structure-ambient-glow-layer pointer-events-none">
        <div className="structure-ambient-glow-center"></div>
      </div>

      <div className="container relative z-10">
        {/* SECTION HEADER — STANDARD TITLE & SUBTITLE IDENTICAL TO OTHER SECTIONS */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Sparkles size={14} />
            <span>ESTRUTURA & ESPAÇO FÍSICO</span>
          </div>
          <h2 className="section-title">
            CONHEÇA O ESPAÇO DA <span className="text-accent-red">POWERFITT</span>
          </h2>
          <p className="section-subtitle">
            Ambiente 100% climatizado, aparelhos novos e higienizados no Parque Dom Miguel em Rio Verde.
          </p>
        </div>

        {/* 4:3 LATERAL CAROUSEL STAGE WITH FOCUS / BLUR TRANSITIONS */}
        <div 
          className="structure-lateral-carousel-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="structure-carousel-stage">
            <div 
              className="structure-carousel-track"
              style={{
                transform: `translateX(calc(50% - ${(currentIndex * (dimensions.cardWidth + dimensions.gap)) + (dimensions.cardWidth / 2)}px))`
              }}
            >
              {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={slide.id}
                    onClick={() => {
                      if (isActive) {
                        setLightboxOpen(true);
                      } else {
                        handleSelectSlide(idx);
                      }
                    }}
                    style={{
                      width: `${dimensions.cardWidth}px`,
                      flex: `0 0 ${dimensions.cardWidth}px`
                    }}
                    className={`structure-bento-card ${isActive ? "card-in-focus" : "card-out-of-focus"}`}
                  >
                    {/* 4:3 RATIO IMAGE CONTAINER */}
                    <div className="structure-card-img-wrap">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="structure-card-img"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* GRADIENT OVERLAYS */}
                      <div className="structure-card-gradient-overlay"></div>
                      <div className="bg-pulse"></div>

                      {/* OUTLINE WATERMARK NUMBER */}
                      <div className="stat-card-outline-num structure-outline-num">{slide.num}</div>

                      {/* TOP BADGES */}
                      <div className="structure-card-top-strip">
                        <span className="structure-tag-chip">{slide.tag}</span>
                        {isActive && (
                          <button 
                            className="structure-expand-icon-btn" 
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxOpen(true);
                            }}
                            aria-label="Expandir foto"
                          >
                            <Maximize2 size={15} />
                            <span>Ampliar</span>
                          </button>
                        )}
                      </div>

                      {/* BOTTOM CAPTION */}
                      <div className="structure-card-bottom-caption">
                        <div className="structure-caption-counter">
                          <span className="current-num">{slide.num}</span>
                          <span className="divider">/</span>
                          <span className="total-num">0{slides.length}</span>
                        </div>
                        <h3 className="structure-caption-title">{slide.title}</h3>
                        <p className="structure-caption-desc">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CENTERED CONTROLS BAR: ARROWS & DOTS */}
          <div className="structure-carousel-bottom-nav">
            <button 
              onClick={handlePrev} 
              className="carousel-nav-btn"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="structure-dots-indicator">
              {slides.map((slide, dotIdx) => (
                <button
                  key={slide.id}
                  onClick={() => handleSelectSlide(dotIdx)}
                  className={`structure-dot-btn ${dotIdx === currentIndex ? "active" : ""}`}
                  aria-label={`Ir para foto ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext} 
              className="carousel-nav-btn"
              aria-label="Próxima foto"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR FULL RESOLUTION PREVIEW */}
      {lightboxOpen && (
        <div className="structure-lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
          <div className="structure-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-icon"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fechar visualização"
            >
              <X size={24} />
            </button>

            <div className="lightbox-image-box">
              <img 
                src={slides[currentIndex].image} 
                alt={slides[currentIndex].title} 
                className="lightbox-full-img"
              />
            </div>

            <div className="lightbox-details-footer">
              <div className="structure-tag-chip">{slides[currentIndex].tag}</div>
              <h3 className="lightbox-slide-title">{slides[currentIndex].title}</h3>
              <p className="lightbox-slide-desc">{slides[currentIndex].subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
