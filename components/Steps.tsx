
import React from 'react';
import { STEPS_SECTION } from '../constants/content';
import { Step } from '../types';

const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-12 md:py-28 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100">
            {STEPS_SECTION.title}
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-slate-800 via-[#10b981]/50 to-slate-800 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {STEPS_SECTION.steps.map((step: Step, index: number) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-800 border border-slate-700 group-hover:border-[#10b981] flex items-center justify-center text-3xl font-bold text-[#10b981] shadow-xl mb-6 transition-all duration-300 transform group-hover:-translate-y-2 relative">
                  {index + 1}
                  {/* Pulse effect for first step */}
                  {index === 0 && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>}
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-3">{step.name}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Steps;
