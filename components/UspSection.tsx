
import React from 'react';
import { USP_SECTION } from '../constants/content';

const CheckIcon: React.FC = () => (
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);


const UspSection: React.FC = () => {
    return (
        <section className="py-20 bg-slate-800/20 md:py-28 border-y border-slate-700/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 border border-slate-700 shadow-2xl relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#10b981]/10 rounded-full blur-[80px]"></div>

                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-6 leading-tight">
                            {USP_SECTION.title}
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed whitespace-pre-line mb-8">
                            {USP_SECTION.content}
                        </p>

                        <a
                            href="#lead-form"
                            className="inline-block bg-white text-[#0A192F] font-bold py-4 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                        >
                            {USP_SECTION.cta}
                        </a>
                    </div>

                    <div className="w-full md:w-5/12 relative z-10">
                        <div className="grid grid-cols-1 gap-4">
                            {USP_SECTION.points.map((point, index) => (
                                <div key={index} className="flex items-center gap-4 bg-slate-700/30 p-4 rounded-xl border border-slate-600/50 backdrop-blur-sm">
                                    <CheckIcon />
                                    <span className="text-slate-200 font-bold text-lg">{point.replace("✔", "").trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UspSection;
