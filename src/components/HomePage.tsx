import HeroSection from './HeroSection';
import DemoVideoSection from './DemoVideoSection';
import WhatCanItDoSection from './WhatCanItDoSection';
import HowItWorksSection from './HowItWorksSection';
import FeaturesSection from './FeaturesSection';
import MarketIntelligenceSection from './MarketIntelligenceSection';
import ComparisonSection from './ComparisonSection';
import ClosingSection from './ClosingSection';
import RollingFooter from './RollingFooter';

interface HomePageProps {
  onNavigate?: (page: 'home' | 'demo') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <DemoVideoSection onNavigate={onNavigate} />
      <WhatCanItDoSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MarketIntelligenceSection />
      <ComparisonSection />
      <ClosingSection />
      <RollingFooter />
    </>
  );
}
