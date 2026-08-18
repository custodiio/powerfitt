import React, { useState } from "react";
import { Play, Sparkles, Check, ExternalLink, X, Eye, Maximize2 } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function StructureShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Espaço Musculação & Biomecânica",
      subtitle: "Aparelhos modernos e articulados para estímulo muscular perfeito",
      category: "musculacao",
      image: "/images/hero_gym.jpg",
      tag: "Estrutura Principal"
    },
    {
      id: 2,
      title: "Área de Treinamento Híbrido & Funcional",
      subtitle: "Espaço dinâmico com grama sintética, kettlebells e cordas navais",
      category: "funcional",
      image: "/images/functional.jpg",
      tag: "Alta Queima"
    },
    {
      id: 3,
      title: "Área de Pesos Livres e Halteres",
      subtitle: "Dumbbells pesados de 1kg a 50kg e bancos reguláveis profissionais",
      category: "pesos",
      image: "/images/weight_zone.jpg",
      tag: "Performance"
    },
    {
      id: 4,
      title: "Acompanhamento de Treinadores Especializados",
      subtitle: "Profissionais qualificados sempre presentes para orientar sua execução",
      category: "equipe",
      image: "/images/trainer.jpg",
      tag: "Orientação"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="estrutura" className="section-padding structure-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Sparkles size={16} />
            <span>ESTRUTURA DE ALTO PADRÃO</span>
          </div>
          <h2 className="section-title">
            ONDE A SUA <span className="text-accent-red">TRANSFORMAÇÃO</span> ACONTECE
          </h2>
          <p className="section-subtitle">
            Conheça o espaço pensado em cada detalhe para quem busca resultado de verdade. Aparelhos novos, ambiente amplo, higienizado e 100% climatizado.
          </p>
        </div>

        {/* INSTAGRAM VIDEO BANNER & REEL HIGHLIGHT */}
        <div className="instagram-video-highlight glass-card">
          <div className="video-highlight-grid">
            <div className="video-text-col">
              <div className="insta-badge">
                <InstagramIcon size={18} className="text-accent-red" />
                <span>@powerfitt.academia no Instagram</span>
              </div>
              <h3 className="video-title">
                SINTA A ENERGIA E A VIBE DOS TREINOS NA POWERFITT
              </h3>
              <p className="video-desc">
                Acompanhe o dia a dia dos nossos alunos, rotinas de treinos intensos, dicas de execução e eventos da academia no nosso perfil oficial.
              </p>
              
              <div className="video-features-list">
                <div className="feature-line">
                  <Check size={18} className="text-accent-red" />
                  <span>Ambiente enérgico e motivador todos os dias</span>
                </div>
                <div className="feature-line">
                  <Check size={18} className="text-accent-red" />
                  <span>Treinos funcionais dinâmicos em grupo e individual</span>
                </div>
                <div className="feature-line">
                  <Check size={18} className="text-accent-red" />
                  <span>Comunidade unida e acolhedora em Rio Verde</span>
                </div>
              </div>

              <div className="video-actions">
                <a 
                  href="https://www.instagram.com/reel/DLKWOSZuwEx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Play size={18} />
                  <span>Assistir Reel Oficial</span>
                  <ExternalLink size={16} />
                </a>

                <a 
                  href="https://www.instagram.com/powerfitt.academia/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <InstagramIcon size={18} />
                  <span>Seguir no Instagram</span>
                </a>
              </div>
            </div>

            {/* VIDEO PREVIEW CARD */}
            <div className="video-preview-col">
              <div 
                className="video-preview-wrapper"
                onClick={() => window.open("https://www.instagram.com/reel/DLKWOSZuwEx/", "_blank")}
              >
                <img 
                  src="/images/functional.jpg" 
                  alt="Prévia do vídeo no Instagram PowerFitt"
                  className="video-poster"
                />
                <div className="video-overlay-tint"></div>
                <div className="video-play-button-pulse">
                  <Play size={32} className="text-dark fill-dark ml-1" />
                </div>
                <div className="video-card-footer">
                  <span className="reel-tag">Reel • PowerFitt Academia</span>
                  <span className="watch-prompt">Clique para reproduzir ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="gallery-tabs-row">
          <button 
            className={`gallery-tab-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            Todos os Ambientes
          </button>
          <button 
            className={`gallery-tab-btn ${activeCategory === "musculacao" ? "active" : ""}`}
            onClick={() => setActiveCategory("musculacao")}
          >
            Musculação & Aparelhos
          </button>
          <button 
            className={`gallery-tab-btn ${activeCategory === "funcional" ? "active" : ""}`}
            onClick={() => setActiveCategory("funcional")}
          >
            Treinamento Híbrido & Funcional
          </button>
          <button 
            className={`gallery-tab-btn ${activeCategory === "pesos" ? "active" : ""}`}
            onClick={() => setActiveCategory("pesos")}
          >
            Pesos Livres
          </button>
          <button 
            className={`gallery-tab-btn ${activeCategory === "equipe" ? "active" : ""}`}
            onClick={() => setActiveCategory("equipe")}
          >
            Nossa Equipe
          </button>
        </div>

        {/* GALLERY GRID */}
        <div className="structure-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="structure-card glass-card"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="structure-img-wrapper">
                <img src={item.image} alt={item.title} className="structure-img" />
                <span className="structure-badge">{item.tag}</span>
                <div className="structure-img-overlay">
                  <div className="view-icon-circle">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
              <div className="structure-info">
                <h4 className="structure-card-title">{item.title}</h4>
                <p className="structure-card-sub">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedMedia && (
        <div className="lightbox-backdrop" onClick={() => setSelectedMedia(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedMedia(null)}>
              <X size={24} />
            </button>
            <img src={selectedMedia.image} alt={selectedMedia.title} className="lightbox-img" />
            <div className="lightbox-footer">
              <span className="structure-badge">{selectedMedia.tag}</span>
              <h3>{selectedMedia.title}</h3>
              <p>{selectedMedia.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
