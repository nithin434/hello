import HeroSection from './HeroSection';
import DemoVideoSection from './DemoVideoSection';
import WhatCanItDoSection from './WhatCanItDoSection';
import HowItWorksSection from './HowItWorksSection';
import FeaturesSection from './FeaturesSection';
import ClosingSection from './ClosingSection';
import RollingFooter from './RollingFooter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DemoVideoSection />
      <WhatCanItDoSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ClosingSection />
      <RollingFooter />
    </>
  );
}
