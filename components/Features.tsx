
import React from 'react';
import { FEATURES_SECTION } from '../constants/content';
import { Feature } from '../types';

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const iconClass = "w-8 h-8 text-[#10b981]";
  switch (icon) {
    case "currency":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="12" cy="12" r="8"></circle><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>
    case "globe":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    case "zap":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    case "filetext":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    case "clipboard":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
    case "headset":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
    case "barchart":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
    case "lock":
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    default: return null;
  }
};

const Features: React.FC = () => {
  // Cast to specific type if needed, but 'any' helps with loose typing from constant file changes
  const content = FEATURES_SECTION as any;

  return (
    <section id="features" className="py-12 md:py-28 bg-slate-900/40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-slate-900/90 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {content.badge && (
            <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-slate-400 text-sm font-medium mb-4 border border-slate-700">
              {content.badge}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-6 leading-tight">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              {content.subtitle}
            </p>
          )}
          <div className="w-20 h-1.5 bg-[#10b981] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature: Feature, index: number) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-[#10b981]/50 text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <div className="bg-[#10b981]/10 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-6 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#lead-form" className="inline-flex items-center gap-2 text-[#10b981] font-bold text-lg hover:underline underline-offset-4 decoration-2">
            <span>{content.cta}</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
