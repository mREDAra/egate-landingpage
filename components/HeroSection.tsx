import React from 'react';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
    return (
        <section className="section hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, var(--bg-primary) 70%)',
            textAlign: 'center',
            paddingTop: 0,
        }}>
            <div style={{
                width: '100%',
                padding: '2rem',
                display: 'flex',
                justifyContent: 'flex-end', // Aligns left in RTL
                zIndex: 10
            }}>
                <img
                    src="/assets/logo.png"
                    alt="E-GATE GROUP"
                    style={{
                        height: '60px',
                        width: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>
            <div className="container" style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <AnimatedSection className="hero-content">
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            color: 'var(--accent)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            backdropFilter: 'blur(10px)'
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
                        <h2 className="heading-md" style={{ color: 'var(--text-secondary)', fontWeight: '400', lineHeight: '1.6' }}>
                            نظام تحصيل مبيعات متعدد العملات، مصمم ليستمر <br />
                            <span style={{ color: '#fff', fontWeight: '700' }}>حتى لو تعطلت إحدى البوابات التقليدية.</span>
                        </h2>

                        <p className="text-lead" style={{ marginTop: '2rem' }}>
                            نحن لا نقدم لك بوابة دفع. <br />
                            نحن نضمك <strong style={{ color: 'var(--accent)' }}>لشبكة تحصيل تتحمّل المخاطر بدلًا عنك</strong> <br />
                            وتضمن استمرار استقبال المدفوعات بدون انقطاع.
                        </p>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={onOpenForm}
                    >
                        تحقق إن كان متجرك مؤهلًا للانضمام
                    </button>
                </AnimatedSection>
            </div>

            {/* Background elements */}
            <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', opacity: 0.15 }}></div>
        </section>
    );
};

export default HeroSection;
