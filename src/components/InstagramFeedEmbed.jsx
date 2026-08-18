import React, { useState } from "react";
import { Play, ExternalLink, ShieldCheck, Heart, MessageCircle, Sparkles, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function InstagramFeedEmbed() {
  const [activeMediaId, setActiveMediaId] = useState("reel1");
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const instagramPosts = [
    {
      id: "reel1",
      type: "reel",
      title: "Treino Intenso & Estrutura PowerFitt",
      subtitle: "Confira a vibe, os aparelhos e o ritmo dos alunos na academia",
      embedUrl: "https://www.instagram.com/reel/DLKWOSZuwEx/embed/",
      directUrl: "https://www.instagram.com/reel/DLKWOSZuwEx/",
      tag: "Reel Oficial"
    },
    {
      id: "post1",
      type: "post",
      title: "Aceitamos Wellhub (Gympass) e TotalPass",
      subtitle: "Dois grandes convênios para você treinar sem limites no Parque Dom Miguel",
      embedUrl: "https://www.instagram.com/p/DY4bncyqeb5/embed/",
      directUrl: "https://www.instagram.com/p/DY4bncyqeb5/",
      tag: "Convênios Oficiais"
    }
  ];

  const currentMedia = instagramPosts.find(p => p.id === activeMediaId) || instagramPosts[0];

  return (
    <section id="instagram-feed" className="section-padding insta-feed-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <InstagramIcon size={16} />
            <span>INSTAGRAM OFICIAL • @POWERFITT.ACADEMIA</span>
          </div>
          <h2 className="section-title">
            DIRETO DO NOSSO <span className="text-accent-red">FEED & REELS</span>
          </h2>
          <p className="section-subtitle">
            Veja em tempo real o que rola na PowerFitt: novidades, treinos, convênios aceitos e a motivação diária de mais de 4.400 seguidores.
          </p>
        </div>

        {/* FEED EMBED CONTAINER */}
        <div className="insta-embed-card glass-card">
          <div className="insta-embed-grid">
            {/* LEFT: INTERACTIVE POST SELECTOR & GYM CONVENIOS HIGHLIGHT */}
            <div className="insta-info-col">
              <div className="insta-profile-header">
                <div className="insta-avatar-ring">
                  <div className="insta-avatar-inner">
                    <Zap size={22} className="text-accent-red" />
                  </div>
                </div>
                <div className="insta-profile-meta">
                  <div className="insta-handle-row">
                    <span className="insta-handle">powerfitt.academia</span>
                    <span className="verified-badge" title="Perfil Verificado">✓</span>
                  </div>
                  <span className="insta-followers">+4.490 Seguidores • Parque Dom Miguel, Rio Verde</span>
                </div>
              </div>

              {/* POST TABS */}
              <div className="insta-tabs-list">
                {instagramPosts.map((post) => {
                  const isActive = post.id === activeMediaId;
                  return (
                    <button
                      key={post.id}
                      className={`insta-tab-item ${isActive ? "active" : ""}`}
                      onClick={() => {
                        setActiveMediaId(post.id);
                        setIsIframeLoaded(false);
                      }}
                    >
                      <div className="tab-icon-box">
                        {post.type === "reel" ? <Play size={18} className="fill-current" /> : <Sparkles size={18} />}
                      </div>
                      <div className="tab-text-box">
                        <div className="tab-tag-row">
                          <span className="tab-tag">{post.tag}</span>
                        </div>
                        <h4 className="tab-title">{post.title}</h4>
                        <p className="tab-sub">{post.subtitle}</p>
                      </div>
                      <ChevronRight size={18} className="tab-arrow" />
                    </button>
                  );
                })}
              </div>

              {/* CONVENIOS BANNER (WELLHUB & TOTALPASS) */}
              <div className="convenios-mini-banner">
                <div className="convenios-title-row">
                  <ShieldCheck size={20} className="text-accent-red" />
                  <h4>CONVÊNIOS ACEITOS NA POWERFITT</h4>
                </div>
                <div className="convenios-badges-row">
                  <div className="convenio-pill wellhub-pill">
                    <span className="pill-dot"></span>
                    <strong>Wellhub (Gympass)</strong>
                    <span className="pill-sub">A partir do Starter</span>
                  </div>
                  <div className="convenio-pill totalpass-pill">
                    <span className="pill-dot"></span>
                    <strong>TotalPass</strong>
                    <span className="pill-sub">Check-in Liberado</span>
                  </div>
                </div>
              </div>

              <div className="insta-actions-row">
                <a 
                  href="https://www.instagram.com/powerfitt.academia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary btn-insta-follow"
                >
                  <InstagramIcon size={18} />
                  <span>Seguir @powerfitt.academia</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT: DYNAMIC IFRAME EMBED */}
            <div className="insta-iframe-col">
              <div className="iframe-mockup-frame">
                <div className="iframe-topbar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="iframe-title-text">{currentMedia.title}</span>
                </div>

                <div className="iframe-container-wrapper">
                  <iframe 
                    key={currentMedia.id}
                    src={currentMedia.embedUrl}
                    className="instagram-embed-iframe"
                    title={currentMedia.title}
                    frameBorder="0" 
                    scrolling="no" 
                    allowTransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    onLoad={() => setIsIframeLoaded(true)}
                  ></iframe>

                  <div className="iframe-footer-bar">
                    <a 
                      href={currentMedia.directUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="open-in-insta-link"
                    >
                      <span>Abrir publicação no Instagram oficial</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
