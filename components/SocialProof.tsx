
import React from 'react';
import { TESTIMONIALS_SECTION } from '../constants/content';
import { Testimonial } from '../types';

const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4">
            {TESTIMONIALS_SECTION.title}
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_SECTION.testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 flex flex-col">
              <p className="text-slate-300 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="font-bold text-slate-100">{testimonial.author}</p>
                <p className="text-sm text-[#10b981]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
