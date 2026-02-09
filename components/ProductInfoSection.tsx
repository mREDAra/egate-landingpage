import React from 'react';
import AnimatedSection from './AnimatedSection';

const ProductInfoSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#1e293b' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <AnimatedSection>
                        <h2 className="heading-lg">
                            <span style={{ color: '#38bdf8' }}>E-GATE Payment</span> <br />
                            نظام تحصيل مبيعات متكامل
                        </h2>
                        <h3 className="heading-md" style={{ fontWeight: '400', color: '#94a3b8' }}>
                            من الدفع إلى التسليم
                        </h3>

                        <p className="text-lead" style={{ margin: '2rem 0', fontSize: '1.1rem' }}>
                            هي شبكة بوابات دفع، مرتبطة بتطبيق خاص لكل تاجر يتيح له إدارة مبيعاته بأعلى كفاءة.
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['استقبال المدفوعات بعدة عملات', 'استمرار الدفع حتى عند تعطل أحد المسارات', 'متابعة المبيعات بدقة عبر التطبيق', 'طلب سحب المستحقات مباشرة'].map((item, index) => (
                                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ background: '#38bdf8', width: '8px', height: '8px', borderRadius: '50%', marginLeft: '10px' }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="card" style={{ marginTop: '2rem', borderColor: '#fbbf24' }}>
                            <h4 className="heading-md" style={{ fontSize: '1.1rem' }}>طرق استلام الأرباح:</h4>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>💵 كاش</span>
                                <span className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>🏦 تحويل بنكي</span>
                                <span className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>💎 USDT</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        {/* Placeholder for App Interface Image */}
                        <div style={{
                            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                            borderRadius: '20px',
                            padding: '2rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            minHeight: '400px',
                            display: 'flex',
                            flexDirection: 'col',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #38bdf8'
                        }}>
                            <div style={{ textAlign: 'center', opacity: 0.8 }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📱</div>
                                <h3 className="heading-md">تطبيق التاجر</h3>
                                <p>لوحة تحكم كاملة لمتابعة الأرصدة والسحوبات</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <h3 className="heading-md">
                        نحن نتحمّل كل التعقيد… وأنت تركز فقط على <span style={{ color: '#22c55e' }}>البيع والنمو</span>.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;
