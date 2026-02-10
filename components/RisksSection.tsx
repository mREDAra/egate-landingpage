import React from 'react';
import AnimatedSection from './AnimatedSection';

const RisksSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="heading-lg">لماذا البوابات التقليدية ليست حلًا آمنًا؟</h2>
                        <p className="text-lead">
                            هذه ليست حلول تحصيل موثوقة، بل مخاطرة على استمرارية عملك.
                        </p>
                    </div>

                    <div className="grid grid-2">
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: 'var(--error)', fontSize: '1.5rem' }}>⚠️</span>
                            <div>
                                <h3 className="heading-md">حساب واحد = خطر واحد</h3>
                                <p className="text-secondary">إذا توقف حسابك لأي سبب، يتوقف دخلك بالكامل فوراً.</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: 'var(--error)', fontSize: '1.5rem' }}>❄️</span>
                            <div>
                                <h3 className="heading-md">تجميد مفاجئ</h3>
                                <p className="text-secondary">سياسات صارمة وغامضة قد تؤدي لتجميد أموالك لشهور.</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: 'var(--error)', fontSize: '1.5rem' }}>⏳</span>
                            <div>
                                <h3 className="heading-md">تحويلات متأخرة</h3>
                                <p className="text-secondary">تنتظر أياماً أو أسابيع لاستلام مستحقاتك، مما يقتل السيولة.</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: 'var(--error)', fontSize: '1.5rem' }}>💸</span>
                            <div>
                                <h3 className="heading-md">فرق عملة وخسائر</h3>
                                <p className="text-secondary">رسوم تحويل عملة خفية تأكل نسبة كبيرة من أرباحك.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12" style={{ marginTop: '3rem' }}>
                        <h3 className="heading-md" style={{ color: 'var(--error)' }}>
                            هذه ليست أنظمة تحصيل. لأنها <span style={{ fontWeight: '800', borderBottom: '2px solid var(--error)' }}>تحتوي على مفاجئات خطرة</span>.
                        </h3>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default RisksSection;
