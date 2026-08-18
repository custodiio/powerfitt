import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ onOpenTrialModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      {/* ANIMATED EXPANDING BORDER LINE ON SCROLL */}
      <div className={`navbar-scroll-border ${isScrolled ? "active" : ""}`}></div>

      <div className="container navbar-container">
        {/* BRAND LOGO + PROMINENT POWERFITT NAME */}
        <a href="#hero" className="navbar-logo-link" aria-label="PowerFitt Início">
          <img 
            src="/images/icone.png" 
            alt="PowerFitt Academia" 
            className="navbar-brand-logo-img"
          />
          <span className="navbar-brand-name">POWER<span className="text-accent-red">FITT</span></span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-nav desktop-only">
          <a href="#estrutura" className="nav-link">Estrutura</a>
          <a href="#instagram-feed" className="nav-link">Feed & Reels</a>
          <a href="#planos" className="nav-link">Planos & Preços</a>
          <a href="#avaliacoes" className="nav-link">Avaliações</a>
          <a href="#localizacao" className="nav-link">Localização</a>
          <a href="#faq" className="nav-link">Dúvidas</a>
        </nav>

        {/* HEADER ACTIONS (CLEAN, CENTERED CTA) */}
        <div className="navbar-actions desktop-only">
          <button 
            className="btn-primary btn-nav-cta"
            onClick={onOpenTrialModal}
            id="nav-trial-cta-btn"
          >
            <span>Garantir Aula Experimental</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="mobile-toggle-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer fade-in">
          <div className="mobile-nav-links">
            <a href="#estrutura" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Estrutura & Fotos</a>
            <a href="#instagram-feed" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Feed & Reels</a>
            <a href="#modalidades" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Modalidades</a>
            <a href="#planos" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Planos & Preços</a>
            <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Avaliações</a>
            <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Localização & Horários</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Perguntas Frequentes</a>
          </div>

          <div className="mobile-menu-cta">
            <button 
              className="btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
            >
              Garantir Aula Experimental
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
