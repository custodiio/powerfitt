import React, { useState, lazy, Suspense } from "react";
import { ScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrialModal from "./components/TrialModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./App.css";

/* LAZY LOAD SECTIONS BELOW THE FOLD FOR FASTER INITIAL PAINT */
const StructureCarousel = lazy(() => import("./components/StructureCarousel"));
const Modalities = lazy(() => import("./components/Modalities"));
const ConveniosSection = lazy(() => import("./components/ConveniosSection"));
const InstagramReelsSection = lazy(() => import("./components/InstagramReelsSection"));
const Plans = lazy(() => import("./components/Plans"));
const Reviews = lazy(() => import("./components/Reviews"));
const LocationSchedule = lazy(() => import("./components/LocationSchedule"));
const TransformationCta = lazy(() => import("./components/TransformationCta"));
const Faq = lazy(() => import("./components/Faq"));
const Footer = lazy(() => import("./components/Footer"));

/* Minimal loading fallback - invisible placeholder to avoid layout shifts */
const SectionFallback = () => <div style={{ minHeight: "200px" }} />;

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="powerfitt-app">
      {/* NAVBAR */}
      <Navbar onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO - LOADS IMMEDIATELY (ABOVE THE FOLD) */}
        <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* ALL SECTIONS BELOW THE FOLD: LAZY LOADED + SCROLL REVEAL */}
        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <StructureCarousel />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <Modalities onOpenTrialModal={() => setTrialModalOpen(true)} />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <ConveniosSection />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <InstagramReelsSection />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <Plans onOpenTrialModal={() => setTrialModalOpen(true)} />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <Reviews />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <LocationSchedule />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <TransformationCta onOpenTrialModal={() => setTrialModalOpen(true)} />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <Faq />
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <Footer onOpenTrialModal={() => setTrialModalOpen(true)} />
          </ScrollReveal>
        </Suspense>
      </main>

      {/* FLOATING CTA & TRIAL MODAL */}
      <FloatingWhatsApp />
      <TrialModal 
        isOpen={trialModalOpen} 
        onClose={() => setTrialModalOpen(false)} 
      />
    </div>
  );
}
