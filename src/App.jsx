import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StructureCarousel from "./components/StructureCarousel";
import Modalities from "./components/Modalities";
import ConveniosSection from "./components/ConveniosSection";
import InstagramReelsSection from "./components/InstagramReelsSection";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import LocationSchedule from "./components/LocationSchedule";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import TrialModal from "./components/TrialModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./App.css";

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="powerfitt-app">
      {/* NAVBAR */}
      <Navbar onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION WITH FACADE & EDITORIAL STATS */}
        <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* AUTOMATIC REAL PHOTO STRUCTURE CAROUSEL */}
        <StructureCarousel />

        {/* MODALITIES & TRAINING (MUSCULAÇÃO & DANÇA) */}
        <Modalities onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* CONVENIOS CORPORATIVOS (WELLHUB, GYMPASS, TOTALPASS) */}
        <ConveniosSection />

        {/* 9:16 INSTAGRAM REELS SHOWCASE */}
        <InstagramReelsSection />

        {/* OFFICIAL PLANS & PRICES */}
        <Plans onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* GOOGLE MAPS 5-STAR REVIEWS */}
        <Reviews />

        {/* LOCATION & LIVE SCHEDULE (DARK MAP) */}
        <LocationSchedule />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <Faq />
      </main>

      {/* FOOTER */}
      <Footer onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* FLOATING CTA & TRIAL MODAL */}
      <FloatingWhatsApp />
      <TrialModal 
        isOpen={trialModalOpen} 
        onClose={() => setTrialModalOpen(false)} 
      />
    </div>
  );
}
