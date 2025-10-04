import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'demo'>('home');

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-cyan-950/20 pointer-events-none"></div>

      <div className="relative z-10">
        <Navigation onNavigate={setCurrentPage} />

        {currentPage === 'home' ? (
          <HomePage onNavigate={setCurrentPage} />
        ) : (
          <DemoPage />
        )}
      </div>
    </div>
  );
}

export default App;
