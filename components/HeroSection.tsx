import React from 'react';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC = () => {
    return (
        <section className="section hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
            textAlign: 'center'
        }}>
            <div className="container">
                <AnimatedSection className="hero-content">
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            background: 'rgba(56, 189, 248, 0.1)',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            color: '#38bdf8',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem'
                        }}>
                            للمتاجر الإلكترونية الجادة فقط 🚀
                        </span>

                        <h1 className="heading-xl">
                            بوابة الدفع ليست مشكلة تقنية… <br />
                            <span style={{ color: '#ef4444', display: 'block', marginTop: '0.5rem' }}>
                                إنها أخطر نقطة فشل في أي متجر إلكتروني.
                            </span>
                        </h1>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                        <h2 className="heading-md" style={{ color: '#cbd5e1', fontWeight: '400', lineHeight: '1.6' }}>
                            نظام تحصيل مبيعات متعدد العملات، مصمم ليستمر <br />
                            <span style={{ color: '#fff', fontWeight: '700' }}>حتى لو تعطلت إحدى البوابات التقليدية.</span>
                        </h2>

                        <p className="text-lead" style={{ marginTop: '2rem' }}>
                            نحن لا نقدم لك بوابة دفع. <br />
                            نحن نضمك <strong style={{ color: '#fff' }}>لشبكة تحصيل تتحمّل المخاطر بدلًا عنك</strong> <br />
                            وتضمن استمرار استقبال المدفوعات بدون انقطاع.
                        </p>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        تحقق إن كان متجرك مؤهلًا للانضمام
                    </button>
                </AnimatedSection>
            </div>

            {/* Background elements */}
            <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', opacity: 0.1 }}></div>
        </section>
    );
};

export default HeroSection;
