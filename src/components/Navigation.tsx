import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: 'home' | 'demo') => void;
  scrollToSection?: (section: string) => void;
}

export default function Navigation({ onNavigate, scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    if (section === 'demo') {
      onNavigate('demo');
    } else if (scrollToSection) {
      scrollToSection(section);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between backdrop-blur-sm bg-black/30">
      <button
        onClick={() => onNavigate('home')}
        className="text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
      >
        16fps
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <button
          onClick={() => handleNavClick('capabilities')}
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          Demo
        </button>
        <button
          onClick={() => handleNavClick('capabilities')}
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          What can it do
        </button>
        <button
          onClick={() => handleNavClick('how-it-works')}
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          How it Works
        </button>
        <button
          onClick={() => handleNavClick('features')}
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          Features
        </button>
        <button
          onClick={() => handleNavClick('pricing')}
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          Pricing
        </button>
      </div>

      {/* Desktop Try it button */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => onNavigate('demo')}
          className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 rounded"
        >
          Try out 16fps
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white p-2"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => handleNavClick('capabilities')}
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => handleNavClick('capabilities')}
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
            >
              What can it do
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick('demo')}
              className="px-8 py-3 text-lg font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 rounded mt-4"
            >
              Try it
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
