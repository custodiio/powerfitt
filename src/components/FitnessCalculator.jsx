import React, { useState } from "react";
import { Calculator, Flame, Activity, Sparkles, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { openWhatsApp } from "../utils/whatsapp";

export default function FitnessCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.375"); // Moderate
  const [goal, setGoal] = useState("hypertrophy"); // "hypertrophy" | "fatloss" | "health"

  const [result, setResult] = useState(null);

  const calculateFitness = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const actFactor = parseFloat(activity);

    if (!w || !h || !a) return;

    // BMI Calculation
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    let bmiStatus = "";
    let bmiColor = "";
    if (bmi < 18.5) {
      bmiStatus = "Abaixo do peso ideal";
      bmiColor = "#38BDF8";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStatus = "Peso saudável & Ideal";
      bmiColor = "#22C55E";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStatus = "Sobrepeso leve";
      bmiColor = "#EAB308";
    } else {
      bmiStatus = "Obesidade (recomendado início imediato)";
      bmiColor = "#EF4444";
    }

    // Basal Metabolic Rate (Mifflin-St Jeor)
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // Total Daily Energy Expenditure (TDEE)
    const tdee = Math.round(bmr * actFactor);

    // Goal recommendations
    let targetCalories = tdee;
    let workoutSplit = "";
    let goalTitle = "";

    if (goal === "hypertrophy") {
      targetCalories = tdee + 350;
      workoutSplit = "Musculação Pesada 4-5x na semana + Treino Híbrido 1x";
      goalTitle = "Hipertrofia & Ganho de Massa Muscular";
    } else if (goal === "fatloss") {
      targetCalories = tdee - 450;
      workoutSplit = "Treino Funcional Híbrido + Musculação em Circuito 4x na semana";
      goalTitle = "Queima Acelerada de Gordura & Definição";
    } else {
      targetCalories = tdee;
      workoutSplit = "Musculação Moderada + Cardio 3x na semana";
      goalTitle = "Saúde, Postura e Condicionamento Físico";
    }

    setResult({
      bmi: bmi.toFixed(1),
      bmiStatus,
      bmiColor,
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      workoutSplit,
      goalTitle
    });

    // Launch celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const handleSendToWhatsApp = () => {
    if (!result) return;
    const msg = `Olá, equipe da PowerFitt! Fiz o cálculo fitness no site:\n\n` +
      `📊 *Meu IMC:* ${result.bmi} (${result.bmiStatus})\n` +
      `🔥 *Gasto Calórico Estimado:* ${result.tdee} kcal/dia\n` +
      `🎯 *Meu Objetivo:* ${result.goalTitle}\n` +
      `🏋️ *Treino Recomendado:* ${result.workoutSplit}\n\n` +
      `Gostaria de agendar uma aula experimental para começar meu acompanhamento!`;
    openWhatsApp(msg);
  };

  const resetForm = () => {
    setResult(null);
    setWeight("");
    setHeight("");
    setAge("");
  };

  return (
    <section id="calculadora" className="section-padding calculator-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header-center">
          <div className="section-badge red-badge">
            <Calculator size={16} />
            <span>FERRAMENTA FITNESS INTERATIVA</span>
          </div>
          <h2 className="section-title">
            DESCUBRA SEU <span className="text-accent-red">PONTO DE PARTIDA</span>
          </h2>
          <p className="section-subtitle">
            Calcule seu IMC, taxa metabólica diária e receba a indicação exata de treino para o seu corpo na PowerFitt.
          </p>
        </div>

        {/* CALCULATOR WRAPPER */}
        <div className="calculator-card glass-card">
          <div className="calculator-grid">
            {/* FORM */}
            <div className="calculator-form-col">
              <h3 className="calculator-form-title">
                <Flame size={22} className="text-accent-red" />
                <span>Preencha seus dados:</span>
              </h3>

              <form onSubmit={calculateFitness} className="fitness-form">
                {/* GENDER SELECTOR */}
                <div className="form-group">
                  <label className="form-label">Sexo Biológico:</label>
                  <div className="gender-selector">
                    <button
                      type="button"
                      className={`gender-btn ${gender === "male" ? "active" : ""}`}
                      onClick={() => setGender("male")}
                    >
                      Masculino
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${gender === "female" ? "active" : ""}`}
                      onClick={() => setGender("female")}
                    >
                      Feminino
                    </button>
                  </div>
                </div>

                {/* AGE, WEIGHT, HEIGHT */}
                <div className="form-inputs-row">
                  <div className="form-group">
                    <label className="form-label">Idade (anos):</label>
                    <input
                      type="number"
                      placeholder="Ex: 26"
                      required
                      min="12"
                      max="90"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Peso (kg):</label>
                    <input
                      type="number"
                      placeholder="Ex: 75.5"
                      step="0.1"
                      required
                      min="30"
                      max="250"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Altura (cm):</label>
                    <input
                      type="number"
                      placeholder="Ex: 175"
                      required
                      min="100"
                      max="240"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* ACTIVITY LEVEL */}
                <div className="form-group">
                  <label className="form-label">Nível de Atividade Atual:</label>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="1.2">Sedentário (pouco ou nenhum exercício)</option>
                    <option value="1.375">Levemente Ativo (1 a 3 dias na semana)</option>
                    <option value="1.55">Moderadamente Ativo (3 a 5 dias na semana)</option>
                    <option value="1.725">Muito Ativo (6 a 7 dias de treino intenso)</option>
                  </select>
                </div>

                {/* GOAL */}
                <div className="form-group">
                  <label className="form-label">Seu Principal Objetivo:</label>
                  <div className="goal-selector-grid">
                    <button
                      type="button"
                      className={`goal-btn ${goal === "hypertrophy" ? "active" : ""}`}
                      onClick={() => setGoal("hypertrophy")}
                    >
                      💪 Ganhar Massa (Hipertrofia)
                    </button>
                    <button
                      type="button"
                      className={`goal-btn ${goal === "fatloss" ? "active" : ""}`}
                      onClick={() => setGoal("fatloss")}
                    >
                      🔥 Queimar Gordura & Definir
                    </button>
                    <button
                      type="button"
                      className={`goal-btn ${goal === "health" ? "active" : ""}`}
                      onClick={() => setGoal("health")}
                    >
                      🏃 Saúde & Condicionamento
                    </button>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary w-full">
                    <span>Calcular Meu Diagnóstico Fitness</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* RESULTS VIEW */}
            <div className="calculator-result-col">
              {result ? (
                <div className="result-card-inner fade-in">
                  <div className="result-header">
                    <span className="result-badge">Diagnóstico Pronto!</span>
                    <button onClick={resetForm} className="reset-btn" title="Recalcular">
                      <RotateCcw size={16} />
                      <span>Refazer</span>
                    </button>
                  </div>

                  {/* BMI DISPLAY */}
                  <div className="result-metric-card">
                    <span className="metric-label">Seu Índice de Massa Corporal (IMC)</span>
                    <div className="metric-big-val" style={{ color: result.bmiColor }}>
                      {result.bmi} <span className="text-sm font-normal">kg/m²</span>
                    </div>
                    <span className="metric-status-pill" style={{ borderColor: result.bmiColor, color: result.bmiColor }}>
                      {result.bmiStatus}
                    </span>
                  </div>

                  {/* CALORIES */}
                  <div className="result-calories-row">
                    <div className="cal-box">
                      <span className="cal-label">Metabolismo Basal (TMB)</span>
                      <span className="cal-val">{result.bmr} kcal</span>
                    </div>
                    <div className="cal-box highlight-cal">
                      <span className="cal-label">Meta Calórica Sugerida</span>
                      <span className="cal-val text-accent-red">{result.targetCalories} kcal</span>
                    </div>
                  </div>

                  {/* WORKOUT SPLIT RECOMMENDATION */}
                  <div className="result-split-box">
                    <span className="split-title">
                      <Sparkles size={16} className="text-accent-red" />
                      Treino Recomendado na PowerFitt:
                    </span>
                    <p className="split-desc">{result.workoutSplit}</p>
                  </div>

                  {/* WHATSAPP CTA */}
                  <button
                    className="btn-whatsapp btn-result-cta"
                    onClick={handleSendToWhatsApp}
                  >
                    <span>Enviar Resultado para o Treinador no WhatsApp</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <div className="result-placeholder">
                  <div className="placeholder-icon-ring">
                    <Activity size={36} className="text-accent-red" />
                  </div>
                  <h4>Seus resultados aparecerão aqui</h4>
                  <p>Preencha os campos ao lado para descobrir seus números e a melhor estratégia para sua rotina na PowerFitt.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
