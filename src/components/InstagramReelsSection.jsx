import React, { useState, useEffect } from "react";
import { ExternalLink, Heart, MessageCircle, Users, Film, Dumbbell, Tag, Sparkles, Award, ChevronLeft, ChevronRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { getInstagramStats } from "../utils/instagramStats";

export default function InstagramReelsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mobileIndex, setMobileIndex] = useState(0);
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
      setMobileIndex((prev) => (prev + 1) % posts.length);
    } else if (distance < -minSwipeDistance) {
      setMobileIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
    }
  };

  const [dimensions, setDimensions] = useState({
    cardWidth: 220,
    gap: 12
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        const mobileW = Math.max(190, Math.min(width * 0.62, 230));
        setDimensions({ cardWidth: mobileW, gap: 12 });
      } else {
        setDimensions({ cardWidth: 240, gap: 16 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const stats = getInstagramStats();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const instagramProfileUrl = "https://www.instagram.com/powerfitt.academia/";

  const posts = [
    // Column 1 (2 posts)
    {
      id: 1,
      image: "/images/insta/623016302_18084882149330741_7733933975978133643_n.jpg",
      caption: "PERSISTÊNCIA, PROGRESSO E RESULTADO.",
      likes: "2,4K",
      comments: "72",
      heightClass: "card-h-tall"
    },
    {
      id: 2,
      image: "/images/insta/626219146_18091749611095573_7647902473012270390_n.jpg",
      caption: "RESULTADOS REAIS DE PESSOAS REAIS.",
      likes: "2,3K",
      comments: "58",
      heightClass: "card-h-compact"
    },
    // Column 2 (2 posts - Center)
    {
      id: 3,
      image: "/images/insta/623842772_18084857998929122_4823090371910835701_n.jpg",
      caption: "PLAY NO PROJETO: SUPERE SEUS LIMITES!",
      likes: "3,1K",
      comments: "94",
      heightClass: "card-h-medium"
    },
    {
      id: 4,
      image: "/images/insta/640392746_18093886469095573_4669562654762331703_n.jpg",
      caption: "MUDE SUA ROTINA, TRANSFORME SUA VIDA.",
      likes: "4,2K",
      comments: "128",
      heightClass: "card-h-tall insta-card-featured"
    },
    // Column 3 (2 posts - Right)
    {
      id: 5,
      image: "/images/insta/640136620_18565278127018813_3924115431159537064_n.jpg",
      caption: "MUSCULAÇÃO PARA O SEU DIA A DIA.",
      likes: "3,8K",
      comments: "115",
      heightClass: "card-h-tall"
    },
    {
      id: 6,
      image: "/images/insta/640395380_18571394956007498_7486707819919364956_n.jpg",
      caption: "TREINO COM PESOS E ALTA INTENSIDADE.",
      likes: "1,9K",
      comments: "46",
      heightClass: "card-h-compact"
    }
  ];

  const highlights = [
    {
      num: "01",
      icon: Dumbbell,
      title: "TREINOS E DICAS",
      desc: "Dicas de execução, postura e motivação prática para sua rotina de treino."
    },
    {
      num: "02",
      icon: Users,
      title: "ALUNOS REAIS",
      desc: "Histórias de superação, evolução física e conquistas de quem treina conosco."
    },
    {
      num: "03",
      icon: InstagramIcon,
      title: "BASTIDORES",
      desc: "A rotina da academia, novos equipamentos e o ambiente da nossa unidade."
    },
    {
      num: "04",
      icon: Tag,
      title: "OFERTAS EXCLUSIVAS",
      desc: "Benefícios, promoções e novidades divulgados em primeira mão no perfil."
    }
  ];

  return (
    <section id="instagram-feed" className="section-padding insta-showcase-section relative overflow-hidden">
      <div id="reels" className="absolute -top-24"></div>
      {/* ATMOSPHERIC BACKGROUND LIGHTING */}
      <div className="insta-bg-glow-layer pointer-events-none">
        <div className="insta-bg-glow-blob top-left"></div>
        <div className="insta-bg-glow-blob center-right"></div>
      </div>

      <div className="container relative z-10">
        {/* BALANCED 2-COLUMN HERO DISPLAY */}
        <div 
          className="insta-main-grid-layout"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* LEFT COLUMN: HERO HEADLINE & STATS & CTA */}
          <div className="insta-hero-content-col">
            <div className="section-badge red-badge mb-1">
              <InstagramIcon size={15} />
              <span>INSTAGRAM • @POWERFITT.ACADEMIA</span>
            </div>

            <h2 className="section-title text-left mb-3 leading-none">
              A ENERGIA <br />
              <span className="text-white">DOS </span>
              <span className="text-accent-red">NOSSOS</span> <br />
              <span className="text-accent-red">TREINOS</span>
            </h2>

            <p className="section-subtitle text-left mb-4">
              Fique por dentro da rotina da academia, conheça a evolução dos nossos alunos, novidades e eventos da unidade Parque Dom Miguel.
            </p>

            {/* STATS STRIP CARD (DYNAMIC FROM REAL PROFILE STATS) */}
            <div className="insta-stats-glass-card">
              <div className="insta-stat-item">
                <div className="insta-stat-icon-wrap">
                  <Users size={16} className="text-accent-red" />
                </div>
                <div className="insta-stat-meta">
                  <span className="stat-value">{stats.followers}</span>
                  <span className="stat-label">SEGUIDORES</span>
                </div>
              </div>

              <div className="insta-stat-divider"></div>

              <div className="insta-stat-item">
                <div className="insta-stat-icon-wrap">
                  <Film size={16} className="text-accent-red" />
                </div>
                <div className="insta-stat-meta">
                  <span className="stat-value">{stats.posts}</span>
                  <span className="stat-label">POSTS</span>
                </div>
              </div>

              <div className="insta-stat-divider"></div>

              <div className="insta-stat-item">
                <div className="insta-stat-icon-wrap">
                  <Award size={16} className="text-accent-red" />
                </div>
                <div className="insta-stat-meta">
                  <span className="stat-value">{stats.historyYears}</span>
                  <span className="stat-label">HISTÓRIA</span>
                </div>
              </div>
            </div>

            {/* FOLLOW PROFILE CTA BUTTON (DESKTOP ONLY) */}
            <div className="insta-cta-wrap desktop-only">
              <a 
                href={instagramProfileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary insta-follow-cta-btn"
              >
                <InstagramIcon size={20} />
                <span>SEGUE A GENTE LÁ!</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D PERSPECTIVE GRID (2, 2, 2 ASSYMETRIC BENTO) & MULTI-LAYER 3D ICONS */}
          <div className="insta-3d-grid-wrapper desktop-only">
            {/* ============================================================ */}
            {/* LAYER 1: 3D ICONS BEHIND THE GRID (Peeking from behind cards) */}
            {/* ============================================================ */}

            {/* Behind 1: 3D Save Bookmark (Top Center behind Column 1/2) */}
            <div 
              className="insta-floating-3d-badge bg-layer-badge save-behind-badge"
              style={{
                transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/salvar.png" 
                alt="3D Salvar" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Behind 2: 3D Instagram Logo (Bottom Center behind Column 2/3) */}
            <div 
              className="insta-floating-3d-badge bg-layer-badge logo-behind-badge"
              style={{
                transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -14}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/instagram_logo.png" 
                alt="3D Instagram Logo" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Behind 3: 3D Coração Invertido (Bottom Right behind Column 3) */}
            <div 
              className="insta-floating-3d-badge bg-layer-badge heart-inv-behind-badge"
              style={{
                transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/coracao_inv.png" 
                alt="3D Coração" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* ============================================================ */}
            {/* LAYER 2: 3D TILTED POSTS CONTAINER (2, 2, 2 ASSYMETRIC BENTO) */}
            {/* ============================================================ */}
            <div 
              className="insta-perspective-container"
              style={{
                transform: `perspective(1400px) rotateY(${-10 + mousePos.x * 5}deg) rotateX(${3 - mousePos.y * 5}deg)`
              }}
            >
              <div className="insta-cards-3col-grid">
                {/* COLUMN 1 (2 POSTS) */}
                <div className="insta-cards-col col-1">
                  {/* Card 1 (Tall) */}
                  <a 
                    href={instagramProfileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`insta-post-card ${posts[0].heightClass} group`}
                  >
                    <div className="insta-card-img-wrap">
                      <img src={posts[0].image} alt={posts[0].caption} className="insta-card-img" loading="lazy" decoding="async" />
                      <div className="insta-reels-badge">
                        <Film size={14} />
                      </div>
                      <div className="insta-card-gradient-overlay"></div>
                      <div className="insta-card-content-bottom">
                        <p className="insta-card-caption">{posts[0].caption}</p>
                        <div className="insta-card-engagement-row">
                          <span className="engage-item"><Heart size={13} className="fill-current" /> {posts[0].likes}</span>
                          <span className="engage-item"><MessageCircle size={13} /> {posts[0].comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Card 2 (Compact) */}
                  <a 
                    href={instagramProfileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`insta-post-card ${posts[1].heightClass} group`}
                  >
                    <div className="insta-card-img-wrap">
                      <img src={posts[1].image} alt={posts[1].caption} className="insta-card-img" loading="lazy" decoding="async" />
                      <div className="insta-reels-badge">
                        <Film size={14} />
                      </div>
                      <div className="insta-card-gradient-overlay"></div>
                      <div className="insta-card-content-bottom">
                        <p className="insta-card-caption">{posts[1].caption}</p>
                        <div className="insta-card-engagement-row">
                          <span className="engage-item"><Heart size={13} className="fill-current" /> {posts[1].likes}</span>
                          <span className="engage-item"><MessageCircle size={13} /> {posts[1].comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* COLUMN 2 (2 POSTS - CENTER) */}
                <div className="insta-cards-col col-center">
                  {/* Card 3 (Medium) */}
                  <a 
                    href={instagramProfileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`insta-post-card ${posts[2].heightClass} group`}
                  >
                    <div className="insta-card-img-wrap">
                      <img src={posts[2].image} alt={posts[2].caption} className="insta-card-img" loading="lazy" decoding="async" />
                      <div className="insta-reels-badge">
                        <Film size={14} />
                      </div>
                      <div className="insta-card-gradient-overlay"></div>
                      <div className="insta-card-content-bottom">
                        <p className="insta-card-caption">{posts[2].caption}</p>
                        <div className="insta-card-engagement-row">
                          <span className="engage-item"><Heart size={13} className="fill-current text-accent-red" /> {posts[2].likes}</span>
                          <span className="engage-item"><MessageCircle size={13} /> {posts[2].comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Card 4 (Tall Featured) */}
                  <a 
                    href={instagramProfileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`insta-post-card ${posts[3].heightClass} group`}
                  >
                    <div className="insta-card-img-wrap">
                      <img src={posts[3].image} alt={posts[3].caption} className="insta-card-img" loading="lazy" decoding="async" />
                      <div className="insta-reels-badge">
                        <Film size={14} />
                      </div>
                      <div className="insta-card-gradient-overlay"></div>
                      <div className="insta-card-content-bottom">
                        <p className="insta-card-caption">{posts[3].caption}</p>
                        <div className="insta-card-engagement-row">
                          <span className="engage-item"><Heart size={13} className="fill-current" /> {posts[3].likes}</span>
                          <span className="engage-item"><MessageCircle size={13} /> {posts[3].comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* COLUMN 3 (2 POSTS - RIGHT) */}
                <div className="insta-cards-col col-3">
                  {/* Card 5 (Tall) */}
                  <a 
                    href={instagramProfileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`insta-post-card ${posts[4].heightClass} group`}
                  >
                    <div className="insta-card-img-wrap">
                      <img src={posts[4].image} alt={posts[4].caption} className="insta-card-img" loading="lazy" decoding="async" />
                      <div className="insta-reels-badge">
                        <Film size={14} />
                      </div>
                      <div className="insta-card-gradient-overlay"></div>
                      <div className="insta-card-content-bottom">
                        <p className="insta-card-caption">{posts[4].caption}</p>
                        <div className="insta-card-engagement-row">
                          <span className="engage-item"><Heart size={13} className="fill-current" /> {posts[4].likes}</span>
                          <span className="engage-item"><MessageCircle size={13} /> {posts[4].comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Card 6 (Compact) */}
                  <a 
                    href={instagramProfileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`insta-post-card ${posts[5].heightClass} group`}
                  >
                    <div className="insta-card-img-wrap">
                      <img src={posts[5].image} alt={posts[5].caption} className="insta-card-img" loading="lazy" decoding="async" />
                      <div className="insta-reels-badge">
                        <Film size={14} />
                      </div>
                      <div className="insta-card-gradient-overlay"></div>
                      <div className="insta-card-content-bottom">
                        <p className="insta-card-caption">{posts[5].caption}</p>
                        <div className="insta-card-engagement-row">
                          <span className="engage-item"><Heart size={13} className="fill-current" /> {posts[5].likes}</span>
                          <span className="engage-item"><MessageCircle size={13} /> {posts[5].comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* LAYER 3: 3D ICONS IN FRONT (Foreground with glow and opacity 1) */}
            {/* ============================================================ */}

            {/* Front 1: 3D Curtida 1K (Top Left - Sharp + Glow) */}
            <div 
              className="insta-floating-3d-badge fg-layer-badge like-1k-front-badge"
              style={{
                transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/curtida_1k.png" 
                alt="3D Curtida 1K" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Front 2: 3D Coração (Top Right - Sharp + Glow) */}
            <div 
              className="insta-floating-3d-badge fg-layer-badge heart-front-badge"
              style={{
                transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/coracao.png" 
                alt="3D Coração" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Front 3: 3D Notificação (Middle Right - Sharp + Glow) */}
            <div 
              className="insta-floating-3d-badge fg-layer-badge notif-front-badge"
              style={{
                transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/notificacao.png" 
                alt="3D Notificação" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Front 4: 3D Comentário (Bottom Left/Center - Light Blur 0.8px + Glow) */}
            <div 
              className="insta-floating-3d-badge fg-layer-badge comment-front-badge"
              style={{
                transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`
              }}
            >
              <img 
                src="/images/insta_3d/comentario.png" 
                alt="3D Comentário" 
                className="floating-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* MOBILE ONLY: LATERAL REELS CAROUSEL WITH 3 3D DEPTH ICONS */}
          <div 
            className="insta-mobile-carousel-wrapper mobile-only"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* LATERAL STAGE & TRACK */}
            <div className="structure-carousel-stage relative">
              {/* 3 ANIMATED 3D ICONS ANCHORED TO ACTIVE CARD */}
              {/* 1. Canto Superior Esquerdo: ATRÁS do card */}
              <div className="insta-mobile-3d-card-corner top-left-behind pointer-events-none">
                <img src="/images/insta_3d/coracao.png" alt="3D Coração" />
              </div>

              {/* 2. Canto Superior Direito: NA FRENTE, 100% NÍTIDO, COM GLOW E DESTAQUE */}
              <div className="insta-mobile-3d-card-corner top-right-front pointer-events-none">
                <img src="/images/insta_3d/curtida_1k.png" alt="3D Curtida 1K" />
              </div>

              {/* 3. Canto Inferior Esquerdo: NA FRENTE, NO CANTO DO CARD, TOTALMENTE ACIMA DO PASSADOR */}
              <div className="insta-mobile-3d-card-corner bottom-left-front pointer-events-none">
                <img src="/images/insta_3d/notificacao.png" alt="3D Notificação" />
              </div>

              <div 
                className="structure-carousel-track"
                style={{
                  transform: `translateX(calc(50% - ${(mobileIndex * (dimensions.cardWidth + dimensions.gap)) + (dimensions.cardWidth / 2)}px))`
                }}
              >
                {posts.map((post, pIdx) => {
                  const isActive = pIdx === mobileIndex;
                  return (
                    <a
                      key={post.id}
                      href={instagramProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!isActive) {
                          e.preventDefault();
                          setMobileIndex(pIdx);
                        }
                      }}
                      style={{
                        width: `${dimensions.cardWidth}px`,
                        flex: `0 0 ${dimensions.cardWidth}px`
                      }}
                      className={`structure-bento-card insta-bento-carousel-card ${isActive ? "card-in-focus" : "card-out-of-focus"}`}
                    >
                      <div className="structure-card-img-wrap">
                        <img 
                          src={post.image} 
                          alt={post.caption} 
                          className="structure-card-img"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="structure-card-gradient-overlay"></div>
                        
                        {/* REELS BADGE TOP RIGHT */}
                        <div className="structure-modal-badge" style={{ right: "0.5rem", left: "auto" }}>
                          <Film size={11} className="text-white fill-white" />
                          <span>REELS</span>
                        </div>

                        {/* BOTTOM CAPTION & ENGAGEMENT */}
                        <div className="structure-card-caption-bento">
                          <h4 className="structure-caption-title" style={{ fontSize: "0.85rem", lineHeight: "1.2" }}>
                            {post.caption}
                          </h4>
                          <div className="flex items-center gap-3 mt-1.5 text-xs text-white/90">
                            <div className="flex items-center gap-1">
                              <Heart size={12} className="text-accent-red fill-accent-red" />
                              <span className="font-semibold text-[0.7rem]">{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle size={12} className="text-white" />
                              <span className="font-semibold text-[0.7rem]">{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CAROUSEL CONTROLS */}
            <div className="reviews-carousel-bottom-nav">
              <button 
                onClick={() => setMobileIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1))}
                className="carousel-nav-btn"
                aria-label="Reels anterior"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="reviews-dots-indicator">
                {posts.map((_, dIdx) => (
                  <button
                    key={dIdx}
                    onClick={() => setMobileIndex(dIdx)}
                    className={`review-dot-btn ${dIdx === mobileIndex ? "active" : ""}`}
                    aria-label={`Ir para Reels ${dIdx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setMobileIndex((prev) => (prev + 1) % posts.length)}
                className="carousel-nav-btn"
                aria-label="Próximo Reels"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* FOLLOW CTA BUTTON BELOW CAROUSEL (MOBILE ONLY) */}
            <div className="insta-mobile-cta-wrap mobile-only mt-6">
              <a 
                href={instagramProfileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary insta-follow-cta-btn w-full"
              >
                <InstagramIcon size={20} />
                <span>SEGUE A GENTE LÁ!</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM 4 STITCH BENTO CARDS (MATCHING SITE DESIGN & EFFECTS) */}
        <div className="insta-bottom-bento-grid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="stat-card insta-bento-stitch-card">
                {/* RADIAL PULSE HOVER LAYER */}
                <div className="bg-pulse"></div>

                {/* GIANT BACKGROUND WATERMARK OUTLINE NUMBER */}
                <div className="stat-card-outline-num">{item.num}</div>

                <div className="stat-card-content insta-bento-content-box">
                  {/* TOP HEADER ROW WITH ACCENT BAR & GLOWING ICON */}
                  <div className="pillar-header-row mb-3">
                    <div className="stat-card-red-bar"></div>
                    <div className="pillar-icon-glow-wrap">
                      <Icon size={18} className="text-accent-red" />
                    </div>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h4 className="insta-bento-stitch-title">{item.title}</h4>
                  <p className="stat-card-desc insta-bento-desc-text">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
