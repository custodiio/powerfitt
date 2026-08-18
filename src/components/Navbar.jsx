import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getGymOpenStatus } from "../utils/gymStatus";

export default function Navbar({ onOpenTrialModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gymStatus, setGymStatus] = useState(getGymOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(() => {
      setGymStatus(getGymOpenStatus());
    }, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      {/* ANIMATED EXPANDING BORDER LINE ON SCROLL */}
      <div className={`navbar-scroll-border ${isScrolled ? "active" : ""}`}></div>

      <div className="container navbar-container">
        {/* BRAND LOGO + SUBTLE STATUS BADGE UNDERNEATH */}
        <a href="#hero" className="navbar-logo-link" aria-label="PowerFitt Início">
          <img 
            src="/images/logo.png" 
            alt="PowerFitt Academia" 
            className="navbar-brand-logo-img"
          />
          <div className="navbar-brand-col">
            <span className="navbar-brand-name">POWER<span className="text-accent-red">FITT</span></span>
            <div className="navbar-subtle-status">
              <span className={`status-mini-dot ${gymStatus.isOpen ? "dot-open" : "dot-closed"}`}></span>
              <span className="status-mini-text">{gymStatus.statusText} • {gymStatus.detailText}</span>
            </div>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-nav desktop-only">
          <a href="#estrutura" className="nav-link">Estrutura</a>
          <a href="#planos" className="nav-link">Planos & Preços</a>
          <a href="#avaliacoes" className="nav-link">Avaliações</a>
          <a href="#localizacao" className="nav-link">Localização</a>
          <a href="#faq" className="nav-link">Dúvidas</a>
        </nav>

        {/* HEADER ACTIONS (CLEAN CTA) */}
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
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer fade-in">
          <div className="mobile-nav-links">
            <a href="#estrutura" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Estrutura & Fotos</a>
            <a href="#planos" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Planos e Valores</a>
            <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Depoimentos 5★ Google</a>
            <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Localização & Horários</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Dúvidas Frequentes</a>
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
