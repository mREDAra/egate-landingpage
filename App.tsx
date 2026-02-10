import React, { useEffect, useState } from 'react';
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
import EligibilityForm from './components/EligibilityForm';
import './index.css';

const App: React.FC = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        // Simple scroll to top on load
        window.scrollTo(0, 0);
    }, []);

    const handleOpenForm = () => setIsFormOpen(true);

    return (
        <div className="App">
            {isFormOpen && <EligibilityForm onClose={() => setIsFormOpen(false)} />}

            <HeroSection onOpenForm={handleOpenForm} />
            <PaymentLogos />
            <ProblemSection />
            <RisksSection />
            <SolutionNetworkSection />
            <ProductInfoSection />
            <TargetAudienceSection />
            <SocialProofSection />
            <HighTicketSection />
            <JoinStepsSection onOpenForm={handleOpenForm} />

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
