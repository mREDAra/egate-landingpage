import React from 'react';
import AnimatedSection from './AnimatedSection';

const HighTicketSection: React.FC = () => {
    return (
        <section className="section" style={{ background: 'linear-gradient(to right, #020617, #0f172a)' }}>
            <div className="container">
                <AnimatedSection className="text-center">
                    <div style={{ display: 'inline-block', padding: '0.5rem 2rem', background: 'var(--gold)', color: '#000', fontWeight: 'bold', borderRadius: '50px', marginBottom: '2rem' }}>
                        High-Ticket Service
                    </div>

                    <h2 className="heading-lg">لماذا هذا نظام High-Ticket؟</h2>

                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'right' }}>
                        <div className="grid grid-2" style={{ gap: '2rem', marginTop: '3rem' }}>
                            <div className="card" style={{ background: 'transparent', border: 'none' }}>
                                <h3 className="heading-md" style={{ color: '#fff' }}>🛡️ المخاطرة علينا</h3>
                                <p className="text-secondary">نحن نتحمل مخاطر الحسابات والبوابات والامتثال بدلاً عنك.</p>
                            </div>
                            <div className="card" style={{ background: 'transparent', border: 'none' }}>
                                <h3 className="heading-md" style={{ color: '#fff' }}>📈 التوسع مدروس</h3>
                                <p className="text-secondary">لا نقبل الجميع، لضمان جودة الخدمة واستقرار الشبكة للمشتركين الحاليين.</p>
                            </div>
                            <div className="card" style={{ background: 'transparent', border: 'none' }}>
                                <h3 className="heading-md" style={{ color: '#fff' }}>💎 شبكة حصرية</h3>
                                <p className="text-secondary">الشبكة متاحة لعدد محدود من التجار الجادين فقط.</p>
                            </div>
                            <div className="card" style={{ background: 'transparent', border: 'none' }}>
                                <h3 className="heading-md" style={{ color: '#fff' }}>🤝 التزام حقيقي</h3>
                                <p className="text-secondary">كل تاجر داخل النظام يمثل شريكاً نهتم بنجاحه.</p>
                            </div>
                        </div>
                    </div>

                    <p className="heading-md" style={{ marginTop: '3rem', color: 'var(--gold)' }}>
                        أنت لا تدفع مقابل التفعيل فقط.<br />
                        أنت تنضم <span style={{ textDecoration: 'underline' }}>لنظام يتحمّل أخطر جزء في البزنس بدلًا عنك</span>.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default HighTicketSection;
