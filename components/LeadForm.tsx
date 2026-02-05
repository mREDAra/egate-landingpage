
import React, { useState } from 'react';
import { LEAD_FORM_SECTION, FORM_LABELS } from '../constants/content';
import { supabase } from '@/lib/supabase';


const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        projectName: '',
        email: '',
        whatsapp: '',
        website: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        full_name: formData.fullName,
                        project_name: formData.projectName,
                        email: formData.email,
                        whatsapp: formData.whatsapp,
                        website: formData.website,
                        message: formData.message,
                    },
                ]);

            if (error) {
                console.error('Supabase error:', error);
                setStatus('error');
            } else {
                setStatus('success');
                setFormData({
                    fullName: '', projectName: '', email: '', whatsapp: '', website: '', message: ''
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    // Updated input classes with better focus ring and placeholder behavior
    const inputClasses = "block w-full bg-slate-900/80 border border-slate-700 rounded-lg py-3 px-4 text-white text-base focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981] outline-none transition-all duration-300 placeholder-transparent hover:border-slate-600 peer";

    // Fixed Floating Label Origin for RTL (origin-top-right)
    const labelClasses = "absolute right-3 top-3 text-slate-400 text-sm transition-all duration-200 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:text-[#10b981] peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:scale-90 origin-top-right bg-slate-900/80 px-1 pointer-events-none";

    return (
        <section id="lead-form" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[#0A192F]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#10b981]/5 to-transparent blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-slate-700/50 shadow-2xl">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-4">{LEAD_FORM_SECTION.title}</h2>
                        {LEAD_FORM_SECTION.subtitle && <p className="text-lg text-slate-400">{LEAD_FORM_SECTION.subtitle}</p>}
                    </div>

                    {status === 'success' ? (
                        <div className="text-center py-20 animate-fade-in-up">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">شكراً لك!</h3>
                            <p className="text-xl text-slate-300">{LEAD_FORM_SECTION.successMessage}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 text-right" dir="rtl">



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input type="text" name="fullName" id="fullName" required onChange={handleChange} value={formData.fullName} className={inputClasses} placeholder=" " />
                                    <label htmlFor="fullName" className={labelClasses}>{FORM_LABELS.fullName}</label>
                                </div>
                                <div className="relative">
                                    <input type="text" name="projectName" id="projectName" onChange={handleChange} value={formData.projectName} className={inputClasses} placeholder=" " />
                                    <label htmlFor="projectName" className={labelClasses}>{FORM_LABELS.projectName}</label>
                                </div>
                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input type="email" name="email" id="email" required onChange={handleChange} value={formData.email} className={inputClasses} placeholder=" " />
                                    <label htmlFor="email" className={labelClasses}>{FORM_LABELS.email}</label>
                                </div>
                                <div className="relative">
                                    <input type="tel" name="whatsapp" id="whatsapp" required onChange={handleChange} value={formData.whatsapp} className={inputClasses} placeholder=" " />
                                    <label htmlFor="whatsapp" className={labelClasses}>{FORM_LABELS.whatsapp}</label>
                                </div>
                            </div>

                            <div className="relative">
                                <input type="text" name="website" id="website" onChange={handleChange} value={formData.website} className={inputClasses} placeholder=" " />
                                <label htmlFor="website" className={labelClasses}>{FORM_LABELS.website}</label>
                            </div>

                            <div className="relative">
                                <textarea name="message" id="message" rows={3} onChange={handleChange} value={formData.message} className={inputClasses} placeholder=" "></textarea>
                                <label htmlFor="message" className={labelClasses}>{FORM_LABELS.message}</label>
                            </div>

                            <div className="pt-4">
                                <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#10b981] text-white text-xl font-bold py-4 px-8 rounded-xl hover:bg-[#0f9a6d] transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-1">
                                    {status === 'submitting' ? FORM_LABELS.submittingButton : FORM_LABELS.submitButton}
                                </button>
                                <p className="text-center mt-4 text-slate-500 text-xs">بياناتك آمنة 100% ولا نشاركها مع أي طرف ثالث.</p>
                            </div>

                            {status === 'error' && <p className="text-center text-red-400 bg-red-900/20 border border-red-900/50 p-3 rounded-md">{FORM_LABELS.errorMessage}</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadForm;