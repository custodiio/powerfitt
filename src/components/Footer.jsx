import React from "react";
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import PowerfitLogo from "./PowerfitLogo";
import InstagramIcon from "./InstagramIcon";
import { openWhatsApp } from "../utils/whatsapp";

export default function Footer({ onOpenTrialModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mapsUrl = "https://www.google.com/maps/place/PowerFitt/@-17.7587224,-50.9158331,17.29z/data=!4m6!3m5!1s0x9361c5c54e01c923:0xa9dc7ad527d0c9a3!8m2!3d-17.7574803!4d-50.9171156!16s%2Fg%2F11sjyj48jg";

  return (
    <footer className="footer-section">
      <div className="container">
        {/* MAIN FOOTER COLS */}
        <div className="footer-main-grid">
          {/* BRAND COL */}
          <div className="footer-col footer-col-brand">
            <PowerfitLogo size="large" />
            <p className="footer-brand-bio">
              A mais completa academia do Parque Dom Miguel em Rio Verde - GO. Musculação pesada, treinamento híbrido/funcional e acompanhamento profissional para você atingir seu ápice.
            </p>
            <div className="footer-social-links">
              <a 
                href="https://www.instagram.com/powerfitt.academia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Oficial"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Google Maps"
              >
                <MapPin size={20} />
              </a>
              <button 
                onClick={() => openWhatsApp("Olá! Vim pelo site da PowerFitt.")}
                className="social-icon-btn"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navegação Rápida</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">Início</a></li>
              <li><a href="#instagram-feed">Feed & Reels</a></li>
              <li><a href="#modalidades">Modalidades de Treino</a></li>
              <li><a href="#planos">Planos & Preços</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#localizacao">Localização & Horários</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* HORÁRIOS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Horário de Funcionamento</h4>
            <div className="footer-schedule-box">
              <div className="schedule-entry">
                <span className="sched-label">Segunda a Sexta:</span>
                <strong className="sched-val">05:30 às 22:30</strong>
              </div>
              <div className="schedule-entry">
                <span className="sched-label">Sábados:</span>
                <strong className="sched-val">08:00 às 16:00</strong>
              </div>
              <div className="schedule-entry">
                <span className="sched-label">Domingos:</span>
                <strong className="sched-val text-accent-red">09:00 às 12:00</strong>
              </div>
              <p className="sched-note">✓ Aberto 7 dias por semana</p>
            </div>
          </div>

          {/* CONTATO & CONVÊNIOS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contato & Convênios</h4>
            <div className="footer-contact-details">
              <p className="contact-line">
                <Phone size={16} className="text-accent-red" />
                <span>(64) 99252-7707</span>
              </p>
              <p className="contact-line">
                <MapPin size={16} className="text-accent-red" />
                <span>Parque Dom Miguel, Rio Verde - GO</span>
              </p>
            </div>

            <div className="footer-convenios-wrap">
              <span className="convenios-mini-label">Parceiros Oficiais:</span>
              <div className="convenios-tags-mini">
                <span className="mini-tag-wellhub">Wellhub</span>
                <span className="mini-tag-totalpass">TotalPass</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} PowerFitt Academia • Todos os direitos reservados.
          </p>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Voltar ao topo">
            <span>Voltar ao Topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
