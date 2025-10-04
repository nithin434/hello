import HeroSection from './HeroSection';
import DemoVideoSection from './DemoVideoSection';
import FeaturesSection from './FeaturesSection';
import ClosingSection from './ClosingSection';
import RollingFooter from './RollingFooter';

interface HomePageProps {
  onNavigate: (page: 'demo') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <DemoVideoSection onNavigate={onNavigate} />
      <FeaturesSection />
      <ClosingSection />
      <RollingFooter />
    </>
  );
}
