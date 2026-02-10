import React from 'react';
import AnimatedSection from './AnimatedSection';

const JoinStepsSection: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
    return (
        <section id="join-section" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <AnimatedSection className="text-center">
                    <h2 className="heading-lg">كيف تبدأ؟</h2>

                    <div className="grid grid-3" style={{ marginTop: '3rem', alignItems: 'flex-start' }}>
                        {[
                            { step: '1', title: 'تعبئة النموذج', desc: 'املأ نموذج التأهيل لنراجع نشاط متجرك.' },
                            { step: '2', title: 'مراجعة النشاط', desc: 'نتأكد من أن نشاطك يوافق معايير الشبكة.' },
                            { step: '3', title: 'مكالمة تشخيص', desc: 'نناقش احتياجاتك ونحدد المسار الأنسب لك.' },
                            { step: '4', title: 'التفعيل', desc: 'يتم تفعيل حسابك وربطك بالشبكة خلال 24 ساعة.' },
                            { step: '5', title: 'الانطلاق', desc: 'ابدأ استقبال المدفوعات فوراً.' }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                                <div style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.03)', position: 'absolute', top: '-10px', left: '10px', fontWeight: 'bold' }}>{item.step}</div>
                                <h3 className="heading-md" style={{ position: 'relative', zIndex: 1 }}>{item.title}</h3>
                                <p className="text-secondary" style={{ position: 'relative', zIndex: 1 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card" style={{ marginTop: '4rem', background: 'linear-gradient(135deg, var(--accent-dark) 0%, #064e3b 100%)', border: '1px solid var(--accent)' }}>
                        <h2 className="heading-lg" style={{ color: '#fff' }}>هل متجرك جاهز لنظام لا يتوقف؟</h2>
                        <p className="text-lead" style={{ color: '#d1fae5' }}>
                            القبول يتم لعدد محدود فقط.
                        </p>
                        <button onClick={onOpenForm} className="btn" style={{
                            background: '#fff',
                            color: 'var(--accent-dark)',
                            fontWeight: 'bold',
                            padding: '1.2rem 4rem',
                            fontSize: '1.3rem',
                            marginTop: '1rem',
                            cursor: 'pointer',
                            border: 'none',
                            borderRadius: '50px'
                        }}>
                            قدّم طلب الانضمام الآن
                        </button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8, color: '#ecfdf5' }}>واكتشف إن كان نشاطك مؤهلًا للدخول إلى شبكة E-GATE Payment</p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default JoinStepsSection;
