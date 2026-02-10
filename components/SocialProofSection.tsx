import React from 'react';
import AnimatedSection from './AnimatedSection';

const SocialProofSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
            <div className="container">
                <AnimatedSection>
                    <h2 className="heading-lg">نظام يعمل… ليس مجرد فكرة</h2>
                    <p className="text-lead">
                        تم ربط النظام مع أكثر من <strong style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>50 متجرًا</strong> في قطاعات مختلفة.
                    </p>

                    <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                        <div className="card">
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎓</div>
                            <h3 className="heading-md">قطاعات تعليمية</h3>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛒</div>
                            <h3 className="heading-md">متاجر تجارية</h3>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
                            <h3 className="heading-md">منتجات رقمية وخدمية</h3>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', border: '1px dashed var(--gold)', borderRadius: '1rem', display: 'inline-block' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>
                            بعض شركائنا يعملون معنا منذ أكثر من <strong style={{ fontSize: '1.5rem' }}>سنتين</strong> بدون أي انقطاع في التحصيل.
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>الاستمرارية هي الدليل الأقوى.</p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SocialProofSection;
