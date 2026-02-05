
import React from 'react';
import { HERO_CONTENT, CTA_PRIMARY_TEXT } from '../constants/content';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#10b981]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
          <span className="text-[#10b981] text-sm font-bold tracking-wide">
            {HERO_CONTENT.badge}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight max-w-5xl mx-auto animate-fade-in-up delay-100">
          {HERO_CONTENT.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-medium leading-relaxed animate-fade-in-up delay-200">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Trust Badges (Metrics as Trust Elements) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up delay-300">
          {HERO_CONTENT.metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
              <div className="bg-[#10b981]/20 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-slate-200 font-bold text-sm leading-tight">{metric.title}</p>
                {/* Optional description if needed, currently just hiding or making subtle */}
                {/* <p className="text-slate-500 text-xs">{metric.description}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="animate-fade-in-up delay-400">
          <a
            href="#lead-form"
            className="group relative inline-flex items-center gap-3 bg-[#10b981] text-white text-lg md:text-xl font-bold py-5 px-10 rounded-xl hover:bg-[#0f9a6d] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">{CTA_PRIMARY_TEXT}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <svg className="w-6 h-6 relative z-10 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
