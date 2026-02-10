import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import PaymentLogos from './components/PaymentLogos';
import ProblemSection from './components/ProblemSection';
import RisksSection from './components/RisksSection';
import SolutionNetworkSection from './components/SolutionNetworkSection';
import ProductInfoSection from './components/ProductInfoSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import SocialProofSection from './components/SocialProofSection';
import HighTicketSection from './components/HighTicketSection';
import JoinStepsSection from './components/JoinStepsSection';
import './index.css';

const App: React.FC = () => {

    useEffect(() => {
        // Simple scroll to top on load
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="App">
            <HeroSection />
            <PaymentLogos />
            <ProblemSection />
            <RisksSection />
            <SolutionNetworkSection />
            <ProductInfoSection />
            <TargetAudienceSection />
            <SocialProofSection />
            <HighTicketSection />
            <JoinStepsSection />

            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'var(--bg-primary)',
                borderTop: '1px solid var(--card-border)',
                color: 'var(--text-secondary)'
            }}>
                <p>© {new Date().getFullYear()} E-GATE GROUP. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
