
import React from 'react';
import { FOOTER_TEXT } from '../constants/content';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900/70">
            <div className="container mx-auto px-6 py-6 text-center text-slate-400">
                <p>{FOOTER_TEXT}</p>
            </div>
        </footer>
    );
};

export default Footer;
