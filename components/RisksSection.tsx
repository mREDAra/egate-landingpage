import React from 'react';
import AnimatedSection from './AnimatedSection';

const RisksSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#1e293b' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="heading-lg">لماذا البوابات التقليدية ليست حلًا آمنًا؟</h2>
                        <p className="text-lead">
                            الاعتماد على بوابة دفع واحدة هو الخطر الأكبر على استمرارية تجارتك.
                        </p>
                    </div>

                    <div className="grid grid-2">
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.5rem' }}>⚠️</span>
                            <div>
                                <h3 className="heading-md">حساب واحد = خطر واحد</h3>
                                <p className="text-secondary">إذا توقف حسابك لأي سبب، يتوقف دخلك بالكامل فوراً.</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.5rem' }}>❄️</span>
                            <div>
                                <h3 className="heading-md">تجميد مفاجئ</h3>
                                <p className="text-secondary">سياسات صارمة وغامضة قد تؤدي لتجميد أموالك لشهور.</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.5rem' }}>⏳</span>
                            <div>
                                <h3 className="heading-md">تحويلات متأخرة</h3>
                                <p className="text-secondary">تنتظر أياماً أو أسابيع لاستلام مستحقاتك، مما يقتل السيولة.</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.5rem' }}>💸</span>
                            <div>
                                <h3 className="heading-md">فرق عملة وخسائر</h3>
                                <p className="text-secondary">رسوم تحويل عملة خفية تأكل نسبة كبيرة من أرباحك.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <h3 className="heading-md" style={{ color: '#ef4444' }}>
                            هذه ليست أنظمة تحصيل. هذه <span style={{ fontWeight: '800', borderBottom: '2px solid #ef4444' }}>رهانات خطرة</span>.
                        </h3>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default RisksSection;
