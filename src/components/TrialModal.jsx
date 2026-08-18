import React, { useState } from "react";
import { X, Zap, CheckCircle2, ArrowRight, ShieldCheck, Flame, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { openWhatsApp } from "../utils/whatsapp";

export default function TrialModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timePreference, setTimePreference] = useState("manha");
  const [goal, setGoal] = useState("hipertrofia");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);

    // Launch celebratory confetti
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });

    const timeLabels = {
      manha: "Manhã (05:30 às 11:30)",
      tarde: "Tarde (12:00 às 17:30)",
      noite: "Noite (18:00 às 22:30)"
    };

    const goalLabels = {
      hipertrofia: "Ganho de Massa Muscular / Hipertrofia",
      emagrecimento: "Emagrecimento & Definição",
      funcional: "Treinamento Híbrido & Funcional",
      saude: "Saúde & Condicionamento Geral"
    };

    const msg = `⚡ *SOLICITAÇÃO DE AULA EXPERIMENTAL VIP - POWERFITT*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `⏰ *Melhor Horário:* ${timeLabels[timePreference] || timePreference}\n` +
      `🎯 *Objetivo Principal:* ${goalLabels[goal] || goal}\n\n` +
      `Gostaria de confirmar minha aula gratuita na unidade Parque Dom Miguel!`;

    setTimeout(() => {
      openWhatsApp(msg);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card neon-border-glow" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar Modal">
          <X size={22} />
        </button>

        {!submitted ? (
          <div className="modal-body fade-in">
            <div className="modal-header">
              <div className="modal-badge">
                <Zap size={16} className="text-accent-red" />
                <span>EXPERIÊNCIA VIP 100% GRATUITA</span>
              </div>
              <h3 className="modal-title">
                GARANTA SUA <span className="text-accent-red">AULA EXPERIMENTAL</span>
              </h3>
              <p className="modal-subtitle">
                Venha treinar na melhor estrutura do Parque Dom Miguel. Sem custos, sem pegadinhas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Seu Nome Completo:</label>
                <input
                  type="text"
                  placeholder="Ex: Carlos Eduardo"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp (com DDD):</label>
                <input
                  type="tel"
                  placeholder="Ex: (64) 99999-9999"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Melhor Período para Treinar:</label>
                <select
                  value={timePreference}
                  onChange={(e) => setTimePreference(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="manha">🌅 Manhã (05:30 às 11:30)</option>
                  <option value="tarde">☀️ Tarde (12:00 às 17:30)</option>
                  <option value="noite">🌙 Noite (18:00 às 22:30)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Qual é o seu objetivo:</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="hipertrofia">💪 Ganhar Massa Muscular / Hipertrofia</option>
                  <option value="emagrecimento">🔥 Queimar Gordura & Emagrecer</option>
                  <option value="funcional">⚡ Treinamento Híbrido & Funcional</option>
                  <option value="saude">🏃 Saúde, Postura e Condicionamento</option>
                </select>
              </div>

              <div className="modal-guarantees">
                <div className="guarantee-item">
                  <CheckCircle2 size={16} className="text-accent-red" />
                  <span>Acesso a todos os aparelhos</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={16} className="text-accent-red" />
                  <span>Acompanhamento de instrutor</span>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full btn-submit-modal">
                <Zap size={20} />
                <span>Confirmar Minha Aula no WhatsApp</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-state fade-in">
            <div className="success-icon-ring">
              <CheckCircle2 size={48} className="text-accent-red" />
            </div>
            <h3>Agendamento Quase Concluído!</h3>
            <p>Estamos abrindo o WhatsApp da PowerFitt para confirmar seu horário com a recepção...</p>
          </div>
        )}
      </div>
    </div>
  );
}
