import React from 'react';
import AnimatedSection from './AnimatedSection';

const SolutionNetworkSection: React.FC = () => {
    return (
        <section className="section" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
            <div className="container">
                <AnimatedSection className="text-center">
                    <h2 className="heading-lg" style={{ color: 'var(--accent)' }}>الحل الحقيقي ليس بوابة… بل شبكة</h2>
                    <p className="text-lead">
                        أي نظام تحصيل صحي يجب أن لا يربط التاجر بمسار واحد.
                    </p>

                    <div style={{ margin: '3rem auto', maxWidth: '800px', textAlign: 'right' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="card" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success)', marginLeft: '1rem', fontSize: '1.2rem' }}>✔</span>
                                <span style={{ fontSize: '1.1rem' }}>لا يتوقف البزنس بسبب إغلاق حساب واحد</span>
                            </li>
                            <li className="card" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success)', marginLeft: '1rem', fontSize: '1.2rem' }}>✔</span>
                                <span style={{ fontSize: '1.1rem' }}>يتحمّل المخاطر التشغيلية عنك</span>
                            </li>
                            <li className="card" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success)', marginLeft: '1rem', fontSize: '1.2rem' }}>✔</span>
                                <span style={{ fontSize: '1.1rem' }}>يدعم تعدد العملات والاستلام المرن</span>
                            </li>
                            <li className="card" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success)', marginLeft: '1rem', fontSize: '1.2rem' }}>✔</span>
                                <span style={{ fontSize: '1.1rem' }}>يضمن تسليم المستحقات بمرونة وسرعة</span>
                            </li>
                        </ul>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h3 className="heading-xl" style={{ fontSize: '2rem' }}>
                            لهذا السبب، لم نبنِ بوابة دفع. <br />
                            <span style={{ color: 'var(--gold)' }}>بنينا شبكة بوابات.</span>
                        </h3>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SolutionNetworkSection;
