import React from 'react';

const LOGOS = [
  { name: 'Visa', src: '/assets/logos/visa.png' },
  { name: 'Mastercard', src: '/assets/logos/mastercard.png' },
  { name: 'Mada', src: '/assets/logos/mada.png' },
  { name: 'Apple Pay', src: '/assets/logos/applepay.png' },
  { name: 'Google Pay', src: '/assets/logos/googlepay.png' },
  { name: 'Amex', src: '/assets/logos/amex.png' },
  { name: 'KNET', src: '/assets/logos/knet.png' }
];

const PaymentLogos: React.FC = () => {
  return (
    <section className="section" style={{ padding: '2rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
          {LOGOS.map((logo, idx) => (
            <div key={idx} style={{
              opacity: 0.7,
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentLogos;
