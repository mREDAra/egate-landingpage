import React from 'react';
import AnimatedSection from './AnimatedSection';

const ProblemSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#0f172a' }}>
            <div className="container">
                <AnimatedSection className="text-center">
                    <h2 className="heading-lg">
                        لماذا أغلب المتاجر تخسر مبيعات… <span style={{ color: '#ef4444' }}>بدون ما تنتبه؟</span>
                    </h2>

                    <div className="grid grid-3" style={{ marginTop: '3rem', gap: '2rem' }}>
                        <div className="card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📉</div>
                            <h3 className="heading-md">المشكلة ليست في الزوار</h3>
                            <p className="text-secondary">تصرف ميزانيات ضخمة على الإعلانات لجلب الزوار، وهم جاهزون للشراء.</p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
                            <h3 className="heading-md">وليست في المنتج</h3>
                            <p className="text-secondary">منتجك مطلوب، وسعرك منافس، والعميل مقتنع تماماً.</p>
                        </div>
                        <div className="card" style={{ border: '1px solid #ef4444', background: 'rgba(239, 68, 68, 0.1)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
                            <h3 className="heading-md" style={{ color: '#f87171' }}>المشكلة في لحظة الدفع</h3>
                            <p className="text-secondary" style={{ color: '#fca5a5' }}>
                                العميل يتوقف عند وسيلة الدفع... وهنا تتبخر كل جهودك.
                            </p>
                        </div>
                    </div>

                    <p className="heading-md" style={{ marginTop: '3rem', color: '#fff' }}>
                        الدفع قرار <span style={{ textDecoration: 'underline', textDecorationColor: '#fbbf24' }}>نفسي</span> قبل أن يكون تقني.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ProblemSection;
