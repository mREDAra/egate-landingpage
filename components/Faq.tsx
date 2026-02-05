
import React, { useState } from 'react';
import { FAQ_SECTION } from '../constants/content';
import { FaqItem } from '../types';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);


const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onToggle: () => void; }> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="border border-slate-700/50 rounded-xl mb-4 overflow-hidden bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
            <button
                className="w-full flex justify-between items-center text-right p-6 focus:outline-none"
                onClick={onToggle}
            >
                <span className="text-lg md:text-xl font-bold text-slate-200">{item.question}</span>
                <span className={`flex-shrink-0 ml-4 bg-slate-700/50 p-2 rounded-full ${isOpen ? 'bg-[#10b981]/20' : ''}`}>
                    <ChevronDownIcon className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#10b981]' : ''}`} />
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-700/30 mt-2 pt-4">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default for engagement

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 md:py-28 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-[#10b981] font-bold mb-2">عندك استفسار؟</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-12">
                        {FAQ_SECTION.title}
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {FAQ_SECTION.faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

                {/* Visual reassurance - No Numbers/Ratios */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">إجابات شفافة — لا وعود وهمية</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;