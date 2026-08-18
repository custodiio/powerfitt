import React, { useState } from "react";
import { MapPin, Clock, Navigation, Phone, MessageSquare, Car, Shield, ExternalLink, Calendar } from "lucide-react";
import { getGymOpenStatus } from "../utils/gymStatus";
import { openWhatsApp } from "../utils/whatsapp";

export default function LocationSchedule() {
  const gymStatus = getGymOpenStatus();

  const mapsUrl = "https://www.google.com/maps/place/PowerFitt/@-17.7587224,-50.9158331,17.29z/data=!4m6!3m5!1s0x9361c5c54e01c923:0xa9dc7ad527d0c9a3!8m2!3d-17.7574803!4d-50.9171156!16s%2Fg%2F11sjyj48jg";
  const wazeUrl = "https://www.waze.com/ul?ll=-17.7574803,-50.9171156&navigate=yes";

  const scheduleList = [
    { day: "Segunda-feira", hours: "05:30 – 22:30", highlight: false },
    { day: "Terça-feira", hours: "05:30 – 22:30", highlight: false },
    { day: "Quarta-feira", hours: "05:30 – 22:30", highlight: false },
    { day: "Quinta-feira", hours: "05:30 – 22:30", highlight: false },
    { day: "Sexta-feira", hours: "05:30 – 22:30", highlight: false },
    { day: "Sábado", hours: "08:00 – 16:00", highlight: true },
    { day: "Domingo", hours: "09:00 – 12:00", highlight: true }
  ];

  return (
    <section id="localizacao" className="section-padding location-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <MapPin size={16} />
            <span>LOCALIZAÇÃO & HORÁRIOS</span>
          </div>
          <h2 className="section-title">
            FÁCIL ACESSO NO <span className="text-accent-red">PARQUE DOM MIGUEL</span>
          </h2>
          <p className="section-subtitle">
            Localização estratégica em Rio Verde - GO com facilidade para estacionar e horários amplos de segunda a domingo.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="location-grid">
          {/* INFO & SCHEDULE CARD */}
          <div className="location-info-card glass-card">
            {/* LIVE STATUS BANNER */}
            <div className="live-schedule-banner">
              <div className="status-pill">
                <span className={`status-dot ${gymStatus.isOpen ? "dot-open" : "dot-closed"}`}></span>
                <strong>{gymStatus.statusText}</strong>
              </div>
              <span className="live-detail-text">({gymStatus.detailText})</span>
            </div>

            {/* ADDRESS DETAILS */}
            <div className="address-block">
              <div className="address-icon-wrap">
                <MapPin size={24} className="text-accent-red" />
              </div>
              <div className="address-text-content">
                <h4>Endereço da Unidade:</h4>
                <p className="address-line">Av. Cemat / Rua JA-08, Qd. 14, Lt. 01-C</p>
                <p className="address-neighborhood">Parque Dom Miguel • Rio Verde - GO</p>
                <span className="address-cep">CEP: 75910-312</span>
              </div>
            </div>

            {/* SCHEDULE TABLE */}
            <div className="schedule-table-wrap">
              <h5 className="schedule-heading">
                <Clock size={18} className="text-accent-red" />
                <span>Horário de Treinamento:</span>
              </h5>
              <div className="schedule-list">
                {scheduleList.map((item, idx) => (
                  <div key={idx} className={`schedule-row ${item.highlight ? "schedule-weekend" : ""}`}>
                    <span className="schedule-day">{item.day}</span>
                    <span className="schedule-hours">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AMENITIES */}
            <div className="amenities-row">
              <div className="amenity-item">
                <Car size={16} className="text-accent-red" />
                <span>Estacionamento Fácil</span>
              </div>
              <div className="amenity-item">
                <Shield size={16} className="text-accent-red" />
                <span>Ambiente Seguro & Climatizado</span>
              </div>
            </div>

            {/* ROUTE BUTTONS */}
            <div className="location-action-buttons">
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <Navigation size={18} />
                <span>Abrir no Google Maps</span>
              </a>

              <a 
                href={wazeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
                title="Navegar pelo Waze"
              >
                <span>Waze</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* MAP EMBED CARD */}
          <div className="location-map-card glass-card">
            <div className="map-frame-wrapper">
              <iframe
                title="Mapa de Localização PowerFitt Academia Rio Verde"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.749007421396!2d-50.91969052410889!3d-17.757480283196923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9361c5c54e01c923%3A0xa9dc7ad527d0c9a3!2sPowerFitt!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="google-map-iframe"
              ></iframe>

              <div className="map-overlay-badge">
                <div className="pin-indicator">
                  <span className="pin-pulse"></span>
                  <MapPin size={18} className="text-dark" />
                </div>
                <div className="pin-info">
                  <strong>PowerFitt Academia</strong>
                  <span>Parque Dom Miguel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
