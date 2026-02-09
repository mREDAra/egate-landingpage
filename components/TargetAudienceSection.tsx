import React from 'react';
import AnimatedSection from './AnimatedSection';

const TargetAudienceSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#0f172a' }}>
            <div className="container">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="heading-lg">هذا النظام ليس للجميع</h2>
                </AnimatedSection>

                <div className="grid grid-2">
                    {/* Suitable For */}
                    <AnimatedSection>
                        <div className="card" style={{ borderColor: '#22c55e', height: '100%' }}>
                            <div className="text-center mb-6">
                                <span style={{ color: '#22c55e', fontSize: '2rem' }}>✅</span>
                                <h3 className="heading-md" style={{ color: '#22c55e' }}>مناسب لك إذا:</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['لديك متجر يعمل حالياً ولديه مبيعات', 'تستهدف عملاء بعملات أجنبية', 'عانيت من تجميد الحسابات أو تعقيد البنوك', 'تريد تشغيل حملاتك الإعلانية بدون خوف', 'تبحث عن استمرارية حقيقية وطويلة الأمد'].map((item, i) => (
                                    <li key={i} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(34, 197, 94, 0.2)', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginLeft: '10px', color: '#22c55e' }}>✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Not Suitable For */}
                    <AnimatedSection>
                        <div className="card" style={{ borderColor: '#ef4444', height: '100%', opacity: 0.8 }}>
                            <div className="text-center mb-6">
                                <span style={{ color: '#ef4444', fontSize: '2rem' }}>❌</span>
                                <h3 className="heading-md" style={{ color: '#ef4444' }}>غير مناسب لك إذا:</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['متجرك وهمي أو لم يبدأ بعد', 'تبحث عن حلول مجانية تماماً', 'لا تريد الالتزام بقواعد العمل الاحترافي', 'تبيع منتجات مخالفة للقوانين'].map((item, i) => (
                                    <li key={i} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginLeft: '10px', color: '#ef4444' }}>✖</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
