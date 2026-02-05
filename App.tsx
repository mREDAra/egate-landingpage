
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PaymentLogos from './components/PaymentLogos';

import Features from './components/Features';
import TrustBooster from './components/TrustBooster';
import UspSection from './components/UspSection';
import Steps from './components/Steps';
import SocialProof from './components/SocialProof';
import Faq from './components/Faq';
import Offer from './components/Offer';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import { CTA_PRIMARY_TEXT } from './constants/content';

const StickyCTA: React.FC = () => (
  <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#0A192F]/90 backdrop-blur-lg p-3 z-50 border-t border-slate-700/50 shadow-2xl">
    <a
      href="#lead-form"
      className="w-full text-center block bg-[#10b981] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#0f9a6d] transition-all duration-300 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)]"
    >
      {CTA_PRIMARY_TEXT}
    </a>
  </div>
);


const App: React.FC = () => {
  return (
    <div className="bg-[#0A192F] text-slate-300 overflow-x-hidden font-['Tajawal',sans-serif]">
      <Header />
      <main>
        {/* (A) Hero = Decision or Exit */}
        <Hero />

        {/* Logos as trust anchor immediately after Hero */}
        <PaymentLogos />



        {/* (C) Solution = We Choose For You */}
        <AnimatedSection>
          <Features />
        </AnimatedSection>

        {/* (D) Trust Booster (App Showcase) */}
        <AnimatedSection>
          <TrustBooster />
        </AnimatedSection>

        {/* (E) Entity Check (Do you need a company?) */}
        <AnimatedSection>
          <UspSection />
        </AnimatedSection>

        {/* (F) How we work (3 Steps) */}
        <AnimatedSection>
          <Steps />
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <SocialProof />
        </AnimatedSection>

        {/* (G) Objection Handling (FAQ) */}
        <AnimatedSection>
          <Faq />
        </AnimatedSection>

        {/* (H) Psychological Offer (Free Consultation) */}
        <AnimatedSection>
          <Offer />
        </AnimatedSection>

        {/* (I) Lead Form = Trap */}
        <AnimatedSection>
          <LeadForm />
        </AnimatedSection>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;