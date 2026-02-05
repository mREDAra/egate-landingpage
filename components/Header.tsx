
import React from 'react';
import { COMPANY_NAME, CTA_PRIMARY_TEXT } from '../constants/content';

const EGateLogo: React.FC = () => (
  <div className="flex items-center gap-3">
    <img
      src="/assets/logo.png"
      alt={COMPANY_NAME}
      className="h-16 w-auto object-contain"
    />
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A192F]/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-row-reverse">
          <EGateLogo />
          <a
            href="#lead-form"
            className="hidden md:block bg-[#10b981] text-white font-bold text-sm md:text-base py-2 px-4 md:px-5 rounded-lg hover:bg-[#0f9a6d] transition-colors duration-300"
          >
            {CTA_PRIMARY_TEXT}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
