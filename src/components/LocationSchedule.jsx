import React from "react";
import { MapPin, Clock, Navigation, Car, Shield, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { getGymOpenStatus } from "../utils/gymStatus";

export default function LocationSchedule() {
  const gymStatus = getGymOpenStatus();

  const mapsUrl = "https://www.google.com/maps/place/PowerFitt/@-17.7587224,-50.9158331,17.29z/data=!4m6!3m5!1s0x9361c5c54e01c923:0xa9dc7ad527d0c9a3!8m2!3d-17.7574803!4d-50.9171156!16s%2Fg%2F11sjyj48jg";
  const wazeUrl = "https://www.waze.com/ul?ll=-17.7574803,-50.9171156&navigate=yes";

  const scheduleList = [
    { day: "Segunda a Sexta", hours: "05:30 às 22:30", isToday: gymStatus.currentDay >= 1 && gymStatus.currentDay <= 5, highlight: false },
    { day: "Sábado", hours: "08:00 às 16:00", isToday: gymStatus.currentDay === 6, highlight: true },
    { day: "Domingo", hours: "09:00 às 12:00", isToday: gymStatus.currentDay === 0, highlight: true }
  ];

  return (
    <section id="localizacao" className="section-padding location-section relative overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND AMBIENT GLOW */}
      <div className="location-ambient-glow-layer pointer-events-none">
        <div className="location-ambient-glow-center"></div>
      </div>

      <div className="container relative z-10">
        {/* HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <MapPin size={16} />
            <span>LOCALIZAÇÃO & HORÁRIOS</span>
          </div>
          <h2 className="section-title">
            ONDE ESTAMOS & <span className="text-accent-red">HORÁRIOS DE TREINO</span>
          </h2>
          <p className="section-subtitle">
            Localização de fácil acesso no Parque Dom Miguel em Rio Verde - GO, com estacionamento facilitado e funcionamento 7 dias por semana.
          </p>
        </div>

        {/* 2-COLUMN STITCH BENTO GRID */}
        <div className="location-stitch-grid">
          {/* CARD 1: QUADRO DE HORÁRIOS & STATUS AO VIVO */}
          <div className="stat-card location-stitch-card">
            {/* RADIAL PULSE HOVER LAYER */}
            <div className="bg-pulse"></div>

            {/* GIANT BACKGROUND WATERMARK NUMBER */}
            <div className="stat-card-outline-num">01</div>

            <div className="stat-card-content location-card-content">
              {/* TOP HEADER ROW WITH RED BAR & ICON */}
              <div className="pillar-header-row mb-4">
                <div className="stat-card-red-bar"></div>
                <div className="pillar-icon-glow-wrap">
                  <Clock size={20} className="text-accent-red" />
                </div>
              </div>

              {/* LIVE GYM STATUS PILL */}
              <div className={`location-live-status-pill ${gymStatus.isOpen ? "status-open-pill" : "status-closed-pill"}`}>
                <span className={`status-pulse-dot ${gymStatus.isOpen ? "dot-open" : "dot-closed"}`}></span>
                <span className="status-main-label">{gymStatus.statusText}</span>
                <span className="status-sub-label">• {gymStatus.detailText}</span>
              </div>

              <h3 className="location-stitch-title">QUADRO DE HORÁRIOS</h3>
              <p className="location-stitch-desc">
                Horários amplos de domingo a domingo para você encaixar o treino na sua rotina sem desculpas.
              </p>

              {/* SCHEDULE ROWS */}
              <div className="location-schedule-list">
                {scheduleList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`location-schedule-row ${item.isToday ? "row-today-active" : ""} ${item.highlight ? "row-weekend" : ""}`}
                  >
                    <div className="schedule-day-meta">
                      <span className="schedule-day-title">{item.day}</span>
                      {item.isToday && <span className="today-badge">HOJE</span>}
                    </div>
                    <span className="schedule-hours-tag">{item.hours}</span>
                  </div>
                ))}
              </div>

              {/* HIGHLIGHT FOOTER NOTE */}
              <div className="location-schedule-footer-note">
                <Sparkles size={16} className="text-accent-red flex-shrink-0" />
                <span>Aberta todos os dias, incluindo feriados em horários especiais divulgados no Instagram.</span>
              </div>
            </div>
          </div>

          {/* CARD 2: ENDEREÇO, FACILIDADES & MAPA COMPACTO OTIMIZADO */}
          <div className="stat-card location-stitch-card">
            {/* RADIAL PULSE HOVER LAYER */}
            <div className="bg-pulse"></div>

            {/* GIANT BACKGROUND WATERMARK NUMBER */}
            <div className="stat-card-outline-num">02</div>

            <div className="stat-card-content location-card-content">
              {/* TOP HEADER ROW WITH RED BAR & ICON */}
              <div className="pillar-header-row mb-4">
                <div className="stat-card-red-bar"></div>
                <div className="pillar-icon-glow-wrap">
                  <MapPin size={20} className="text-accent-red" />
                </div>
              </div>

              {/* ADDRESS TITLE */}
              <h3 className="location-stitch-title">UNIDADE PARQUE DOM MIGUEL</h3>
              
              <div className="location-address-box">
                <p className="address-street">Av. Cemat / Rua JA-08, Qd. 14, Lt. 01-C</p>
                <p className="address-sub">Bairro Parque Dom Miguel • Rio Verde - GO</p>
                <span className="address-zip">CEP: 75910-312</span>
              </div>

              {/* AMENITIES CHIPS */}
              <div className="location-amenities-wrap">
                <div className="location-amenity-chip">
                  <Car size={15} className="text-accent-red" />
                  <span>Estacionamento Fácil</span>
                </div>
                <div className="location-amenity-chip">
                  <Shield size={15} className="text-accent-red" />
                  <span>Ambiente Climatizado & Seguro</span>
                </div>
              </div>

              {/* COMPACT FAST-LOADING MAP (OPTIMIZED HEIGHT) */}
              <div className="location-compact-map-stage">
                <iframe
                  title="Mapa de Localização PowerFitt Academia Rio Verde"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.749007421396!2d-50.91969052410889!3d-17.757480283196923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9361c5c54e01c923%3A0xa9dc7ad527d0c9a3!2sPowerFitt!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="google-map-compact-iframe"
                ></iframe>

                <div className="map-compact-pin-overlay">
                  <MapPin size={14} className="text-accent-red animate-bounce" />
                  <span>PowerFitt Academia • Dom Miguel</span>
                </div>
              </div>

              {/* ROUTE ACTION BUTTONS */}
              <div className="location-actions-row">
                <a 
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary location-route-btn"
                >
                  <Navigation size={17} />
                  <span>Abrir no Google Maps</span>
                </a>

                <a 
                  href={wazeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary location-waze-btn"
                  title="Navegar pelo Waze"
                >
                  <span>Waze</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
