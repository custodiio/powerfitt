import React, { useState, useEffect } from "react";
import { Play, ExternalLink, Heart, MessageCircle, Send, Bookmark, Music, Volume2, Sparkles, Zap } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function InstagramReelsSection() {
  const [likesCount, setLikesCount] = useState(482);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const reelUrl = "https://www.instagram.com/reel/DLKWOSZuwEx/";
  const reelEmbed = "https://www.instagram.com/reel/DLKWOSZuwEx/embed/";

  const handleLike = () => {
    if (!isLiked) {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <section id="reels" className="section-padding reels-showcase-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <InstagramIcon size={16} />
            <span>INSTAGRAM REELS • @POWERFITT.ACADEMIA</span>
          </div>
          <h2 className="section-title">
            VIVA A ENERGIA DOS <span className="text-accent-red">NOSSOS TREINOS</span>
          </h2>
          <p className="section-subtitle">
            Acompanhe em primeira mão a motivação, aparelhos e o dia a dia dos nossos alunos direto pelo Reels oficial.
          </p>
        </div>

        {/* REELS SHOWCASE DISPLAY */}
        <div className="reels-editorial-layout">
          {/* LEFT: 9:16 SMARTPHONE MOCKUP */}
          <div className="phone-mockup-wrapper">
            <div className="phone-device-frame">
              {/* Dynamic Island / Notch */}
              <div className="phone-dynamic-island">
                <span className="phone-camera-lens"></span>
              </div>

              {/* PHONE SCREEN CONTENT */}
              <div className="phone-screen-inner">
                {/* DARK MODE INSTAGRAM TOPBAR */}
                <div className="instagram-dark-topbar">
                  <span className="insta-top-brand">Reels</span>
                  <div className="insta-top-icons">
                    <span className="insta-sound-pill">
                      <Volume2 size={14} />
                    </span>
                  </div>
                </div>

                {/* 9:16 REEL CONTAINER */}
                <div className="reels-video-container">
                  <iframe
                    src={reelEmbed}
                    className="reels-iframe-9-16"
                    title="PowerFitt Academia Instagram Reel"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>

                  {/* BOTTOM REEL OVERLAY */}
                  <div className="reels-bottom-overlay">
                    <div className="reels-author-row">
                      <img 
                        src="/images/logo.png" 
                        alt="PowerFitt Avatar" 
                        className="reels-author-avatar"
                      />
                      <div className="reels-author-meta">
                        <div className="reels-handle-line">
                          <span className="reels-handle">powerfitt.academia</span>
                          <span className="verified-dot">✓</span>
                        </div>
                        <a 
                          href="https://www.instagram.com/powerfitt.academia/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="reels-follow-btn"
                        >
                          Seguir
                        </a>
                      </div>
                    </div>

                    <p className="reels-caption-text">
                      Venha treinar e evoluir com a gente! 💪🔥 Treinamento pesado, aparelhos novos e comunidade focada. #PowerFitt #RioVerde
                    </p>

                    <div className="reels-audio-track">
                      <Music size={12} className="text-accent-red animate-spin" />
                      <span>Áudio Original • PowerFitt Academia</span>
                    </div>
                  </div>

                  {/* RIGHT ACTION BUTTONS */}
                  <div className="reels-side-actions">
                    <button 
                      className={`reels-action-btn ${isLiked ? "liked" : ""}`}
                      onClick={handleLike}
                      aria-label="Curtir"
                    >
                      <Heart size={24} className={isLiked ? "fill-current text-accent-red" : ""} />
                      <span>{likesCount}</span>
                    </button>

                    <a 
                      href={reelUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="reels-action-btn"
                      aria-label="Comentar"
                    >
                      <MessageCircle size={24} />
                      <span>Comentar</span>
                    </a>

                    <a 
                      href={reelUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="reels-action-btn"
                      aria-label="Compartilhar"
                    >
                      <Send size={24} />
                      <span>Enviar</span>
                    </a>

                    <button 
                      className={`reels-action-btn ${isSaved ? "saved" : ""}`}
                      onClick={() => setIsSaved(!isSaved)}
                      aria-label="Salvar"
                    >
                      <Bookmark size={24} className={isSaved ? "fill-current text-white" : ""} />
                      <span>Salvar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTEXT & INSTAGRAM CTA */}
          <div className="reels-context-col glass-card">
            <div className="reels-profile-card">
              <img 
                src="/images/logo.png" 
                alt="PowerFitt Oficial" 
                className="reels-profile-logo"
              />
              <div className="reels-profile-info">
                <div className="reels-profile-name-row">
                  <span className="profile-handle">@powerfitt.academia</span>
                  <span className="verified-badge">✓</span>
                </div>
                <p className="profile-bio-summary">
                  🏋️‍♀️ Transformando vidas há mais de 4 anos no Parque Dom Miguel.<br />
                  🤝 Planos acessíveis a partir de R$ 90 e treino para todos!
                </p>
                <div className="profile-stats-row">
                  <div className="p-stat"><strong>48</strong> <span>posts</span></div>
                  <div className="p-stat"><strong>+4.490</strong> <span>seguidores</span></div>
                  <div className="p-stat"><strong>887</strong> <span>seguindo</span></div>
                </div>
              </div>
            </div>

            <div className="reels-features-box">
              <h4 className="features-box-title">O que você encontra no nosso feed:</h4>
              <ul className="reels-bullet-list">
                <li>✓ Dicas semanais de execução correta e postura com os professores</li>
                <li>✓ Desafios, eventos especiais e aulas coletivas de dança</li>
                <li>✓ Evolução real e bastidores de treinos dos nossos alunos</li>
                <li>✓ Atualizações de horários, feriados e novos equipamentos</li>
              </ul>
            </div>

            <div className="reels-action-buttons-group">
              <a 
                href={reelUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <Play size={18} />
                <span>Assistir no Instagram</span>
                <ExternalLink size={16} />
              </a>

              <a 
                href="https://www.instagram.com/powerfitt.academia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <InstagramIcon size={18} />
                <span>Seguir Perfil</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
