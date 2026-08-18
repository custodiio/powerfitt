import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, X, Eye } from "lucide-react";

export default function StructureCarousel() {
  const slides = [
    {
      id: 1,
      image: "/images/fachada.png",
      title: "Fachada & Recepção Oficial",
      subtitle: "Localizada na Av. Cemat / Parque Dom Miguel em Rio Verde - GO com fácil acesso e estacionamento."
    },
    {
      id: 2,
      image: "/images/boa2.png",
      title: "Salão Principal & Aparelhos Biomecânicos",
      subtitle: "Equipamentos modernos e novos pensados para isolamento muscular com máxima segurança."
    },
    {
      id: 3,
      image: "/images/weight_zone.jpg",
      title: "Área de Pesos Livres Completa",
      subtitle: "Halteres de 1kg a 50kg, barras olímpicas, anilhas e bancos profissionais."
    },
    {
      id: 4,
      image: "/images/functional.jpg",
      title: "Espaço de Treinamento Híbrido & Funcional",
      subtitle: "Área com grama sintética, kettlebells e cordas para condicionamento físico e alta queima calórica."
    },
    {
      id: 5,
      image: "/images/trainer.jpg",
      title: "Acompanhamento de Instrutores no Salão",
      subtitle: "Profissionais qualificados presentes em tempo integral para tirar dúvidas e corrigir exercícios."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Auto-play timer (12 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="estrutura" className="section-padding structure-carousel-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Sparkles size={16} />
            <span>ESTRUTURA & ESPAÇO FÍSICO</span>
          </div>
          <h2 className="section-title">
            CONHEÇA O ESPAÇO DA <span className="text-accent-red">POWERFITT</span>
          </h2>
          <p className="section-subtitle">
            Estrutura 100% climatizada, equipamentos novos e higienizados no Parque Dom Miguel.
          </p>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div 
          className="carousel-main-container glass-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* SLIDE IMAGE WITH OVERLAY */}
          <div className="carousel-slide-viewport" onClick={() => setLightboxOpen(true)}>
            <img 
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].title}
              className="carousel-current-img fade-in"
              key={slides[currentIndex].id}
            />

            <div className="carousel-img-gradient-overlay"></div>

            {/* EXPAND ICON HINT */}
            <button className="carousel-expand-btn" aria-label="Expandir foto">
              <Maximize2 size={18} />
              <span>Ampliar</span>
            </button>

            {/* SLIDE INFO CAPTION */}
            <div className="carousel-caption-box">
              <div className="carousel-counter-badge">
                <span className="current-num">0{currentIndex + 1}</span>
                <span className="divider">/</span>
                <span className="total-num">0{slides.length}</span>
              </div>
              <h3 className="carousel-slide-title">{slides[currentIndex].title}</h3>
              <p className="carousel-slide-desc">{slides[currentIndex].subtitle}</p>
            </div>
          </div>

          {/* CONTROLS BAR */}
          <div className="carousel-navigation-bar">
            {/* THUMBNAIL DOTS */}
            <div className="carousel-dots-group">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={`carousel-dot-btn ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para foto ${idx + 1}`}
                >
                  <span className="dot-progress-fill"></span>
                </button>
              ))}
            </div>

            {/* PREV / NEXT ARROWS */}
            <div className="carousel-arrows-group">
              <button 
                className="carousel-arrow-btn" 
                onClick={handlePrev}
                aria-label="Foto Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="carousel-arrow-btn" 
                onClick={handleNext}
                aria-label="Próxima Foto"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Fechar">
              <X size={24} />
            </button>
            <img 
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-footer">
              <div className="carousel-counter-badge">
                0{currentIndex + 1} / 0{slides.length}
              </div>
              <h3>{slides[currentIndex].title}</h3>
              <p>{slides[currentIndex].subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
