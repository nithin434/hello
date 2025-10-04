import HeroSection from './HeroSection';
import DemoVideoSection from './DemoVideoSection';
import FeaturesSection from './FeaturesSection';
import ProcessSection from './ProcessSection';
import UseCasesSection from './UseCasesSection';
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
      <ProcessSection />
      <UseCasesSection />
      <ClosingSection />
      <RollingFooter />
    </>
  );
}
