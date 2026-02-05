
import React from 'react';
import { PAYMENT_METHODS } from '../constants/content';
import { PaymentMethod } from '../types';

const Icon: React.FC<{ name: string }> = ({ name }) => {
  let src = "";
  switch (name) {
    case 'visa': src = "/assets/logos/visa.png"; break;
    case 'mastercard': src = "/assets/logos/mastercard.png"; break;
    case 'mada': src = "/assets/logos/mada.png"; break;
    case 'amex': src = "/assets/logos/amex.png"; break;
    case 'applepay': src = "/assets/logos/applepay.png"; break;
    case 'googlepay': src = "/assets/logos/googlepay.png"; break;
    case 'knet': src = "/assets/logos/knet.png"; break;
    default: return null;
  }

  return (
    <div className="relative h-16 w-auto flex items-center justify-center">
      <img
        src={src}
        alt={name}
        className="h-16 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};

const PaymentLogos: React.FC = () => {
  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800 relative z-20 w-full">
      <div className="container mx-auto px-4">
        {/* Static Grid Display */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {PAYMENT_METHODS.map((method, idx) => (
            <div key={`${method.name}-${idx}`} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <Icon name={method.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentLogos;
