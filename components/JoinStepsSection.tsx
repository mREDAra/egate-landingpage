import React from 'react';
import AnimatedSection from './AnimatedSection';

const JoinStepsSection: React.FC = () => {
    return (
        <section id="join-section" className="section" style={{ backgroundColor: '#1e293b' }}>
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
                                <div style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '-10px', left: '10px', fontWeight: 'bold' }}>{item.step}</div>
                                <h3 className="heading-md" style={{ position: 'relative', zIndex: 1 }}>{item.title}</h3>
                                <p className="text-secondary" style={{ position: 'relative', zIndex: 1 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card" style={{ marginTop: '4rem', background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', border: 'none' }}>
                        <h2 className="heading-lg" style={{ color: '#fff' }}>هل متجرك جاهز لنظام لا يتوقف؟</h2>
                        <p className="text-lead" style={{ color: '#bfdbfe' }}>
                            القبول يتم لعدد محدود فقط.
                        </p>
                        <a href="https://tally.so/r/example" target="_blank" rel="noopener noreferrer" className="btn" style={{
                            background: '#fff',
                            color: '#2563eb',
                            fontWeight: 'bold',
                            padding: '1.2rem 4rem',
                            fontSize: '1.3rem',
                            marginTop: '1rem'
                        }}>
                            قدّم طلب الانضمام الآن
                        </a>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>واكتشف إن كان نشاطك مؤهلًا للدخول إلى شبكة E-GATE Payment</p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default JoinStepsSection;
