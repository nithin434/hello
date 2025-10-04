import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'demo'>('home');

  const scrollToSection = (section: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-cyan-950/20 pointer-events-none"></div>

      <div className="relative z-10">
        <Navigation onNavigate={setCurrentPage} scrollToSection={scrollToSection} />

        {currentPage === 'home' ? (
          <HomePage />
        ) : (
          <DemoPage />
        )}
      </div>
    </div>
  );
}

export default App;
