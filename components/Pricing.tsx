
import React from 'react';
import { PRICING_SECTION, CTA_PRIMARY_TEXT } from '../constants/content';
import { PricingPlan, FeeDetail } from '../types';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#10b981] ml-2 flex-shrink-0">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const PricingIcon: React.FC<{ icon: string }> = ({ icon }) => {
    const iconClass = "w-8 h-8 text-[#10b981]";
    switch (icon) {
        case "settings":
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
        case "repeat":
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>;
        case "percent":
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>;
        default: return null;
    }
};

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-12 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4">
                        {PRICING_SECTION.title}
                    </h2>
                    <p className="text-lg text-slate-400 mb-12">
                        {PRICING_SECTION.description}
                    </p>
                </div>

                {PRICING_SECTION.showPlans && PRICING_SECTION.plans.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {PRICING_SECTION.plans.map((plan: PricingPlan, index: number) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-100 mb-2">{plan.name}</h3>
                                <div className="my-4">
                                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                    <span className="text-slate-400"> {plan.extra}</span>
                                </div>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-slate-300">
                                            <CheckIcon />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#lead-form" className="w-full text-center bg-slate-700 text-slate-200 font-bold py-3 px-8 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                                    {CTA_PRIMARY_TEXT}
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {PRICING_SECTION.feeDetails.map((detail: FeeDetail, index: number) => (
                                <div key={index} className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700 text-right">
                                    <div className="bg-[#10b981]/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                                        <PricingIcon icon={detail.icon} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100 mb-2">{detail.title}</h3>
                                    <p className="text-slate-400">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#lead-form"
                            className="bg-[#10b981] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0f9a6d] transition-colors duration-300"
                        >
                            {CTA_PRIMARY_TEXT}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Pricing;
