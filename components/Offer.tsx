
import React from 'react';
import { OFFER_SECTION } from '../constants/content';

const Offer: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112d4e] to-[#0A192F] z-0"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"></div> {/* Optional grid pattern if available, or just ignore */}

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto border border-slate-700/50 bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#10b981] mb-6">
                        {OFFER_SECTION.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-medium">
                        {OFFER_SECTION.description}
                    </p>

                    <a
                        href="#lead-form"
                        className="inline-block bg-white text-[#0A192F] hover:text-[#10b981] font-extrabold py-5 px-12 rounded-full text-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                        {OFFER_SECTION.cta}
                    </a>

                    <p className="mt-6 text-slate-500 text-sm">
                        لا يوجد أي التزام مالي عليك
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Offer;
