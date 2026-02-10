import React from 'react';
import AnimatedSection from './AnimatedSection';

const ProductInfoSection: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <AnimatedSection>
                        <h2 className="heading-lg">
                            <span style={{ color: 'var(--accent)' }}>E-GATE Payment</span> <br />
                            نظام تحصيل مبيعات متكامل
                        </h2>
                        <h3 className="heading-md" style={{ fontWeight: '400', color: 'var(--text-secondary)' }}>
                            من الدفع إلى التسليم
                        </h3>

                        <p className="text-lead" style={{ margin: '2rem 0', fontSize: '1.1rem' }}>
                            هي شبكة بوابات دفع، مرتبطة بتطبيق خاص لكل تاجر يتيح له إدارة مبيعاته بأعلى كفاءة.
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['استقبال المدفوعات بعدة عملات', 'استمرار الدفع حتى عند تعطل أحد المسارات', 'متابعة المبيعات بدقة عبر التطبيق', 'طلب سحب المستحقات مباشرة'].map((item, index) => (
                                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ background: 'var(--accent)', width: '8px', height: '8px', borderRadius: '50%', marginLeft: '10px' }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="card" style={{ marginTop: '2rem', borderColor: 'var(--gold)' }}>
                            <h4 className="heading-md" style={{ fontSize: '1.1rem' }}>طرق استلام الأرباح:</h4>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(251, 191, 36, 0.1)', color: 'var(--gold)' }}>💵 كاش</span>
                                <span className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(251, 191, 36, 0.1)', color: 'var(--gold)' }}>🏦 تحويل بنكي</span>
                                <span className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(251, 191, 36, 0.1)', color: 'var(--gold)' }}>💎 USDT</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        {/* App Interface Image */}
                        <div style={{
                            borderRadius: '20px',
                            padding: '1rem',
                            border: '1px solid var(--card-border)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            background: 'var(--bg-secondary)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)',
                                zIndex: 0
                            }}></div>
                            <img
                                src="/dashboard.png"
                                alt="Merchant Dashboard"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    zIndex: 1,
                                    boxShadow: '0 0 20px rgba(0,0,0,0.2)'
                                }}
                            />
                        </div>
                    </AnimatedSection>
                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <h3 className="heading-md">
                        نحن نتحمّل كل التعقيد… وأنت تركز فقط على <span style={{ color: 'var(--success)' }}>البيع والنمو</span>.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;
