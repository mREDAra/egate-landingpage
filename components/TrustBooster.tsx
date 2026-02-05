
import React from 'react';
import { TRUST_BOOSTER_SECTION } from '../constants/content';

const TrustBooster: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#10b981]/5 blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-right">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                            {TRUST_BOOSTER_SECTION.title}
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            {TRUST_BOOSTER_SECTION.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            {TRUST_BOOSTER_SECTION.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                                    <span className="text-slate-300 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#lead-form"
                            className="inline-block w-full sm:w-auto text-center bg-[#10b981] text-white font-bold py-4 px-10 rounded-lg hover:bg-[#0f9a6d] transition-all duration-300 shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/40 transform hover:-translate-y-1"
                        >
                            {TRUST_BOOSTER_SECTION.cta}
                        </a>
                    </div>

                    {/* Image/Mockup */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-[#0A192F] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-[#0A192F] rounded-2xl border border-slate-700/50 p-2 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                                <img
                                    src="/dashboard.png"
                                    alt={TRUST_BOOSTER_SECTION.imageAlt}
                                    className="w-full h-auto rounded-xl"
                                />

                                {/* Floating Badge */}
                                <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-600 p-3 rounded-lg shadow-xl animate-float hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-slate-200 text-sm font-semibold">تحديث فوري</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBooster;
