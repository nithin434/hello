import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';
import useSEO from './hooks/useSEO';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'demo'>('home');

  // Dynamic SEO based on current page
  useSEO({
    title: currentPage === 'home' 
      ? '16fps - AI Video Generation Agent | Create Professional Videos with AI'
      : 'Try 16fps Demo - AI Video Generation | Experience the Power',
    description: currentPage === 'home'
      ? 'Transform your ideas into stunning videos with 16fps AI video generation agent. Create promotional content, educational videos, and engaging social media posts in minutes. Professional AI-powered video creation made simple.'
      : 'Experience the power of 16fps AI video generation with our interactive demo. See how artificial intelligence transforms text prompts into professional videos in real-time.',
    keywords: currentPage === 'home'
      ? 'AI video generation, video creation, artificial intelligence, 16fps, promotional videos, social media content, video marketing, AI agent, automated video production, digital content creation'
      : 'AI video demo, interactive video generation, AI video preview, video creation demo, artificial intelligence demo, 16fps demo',
    ogTitle: currentPage === 'home'
      ? '16fps - AI Video Generation Agent'
      : 'Try 16fps Demo - AI Video Generation',
    ogDescription: currentPage === 'home'
      ? 'Transform your ideas into stunning videos with 16fps AI video generation agent. Create promotional content, educational videos, and engaging social media posts in minutes.'
      : 'Experience the power of 16fps AI video generation with our interactive demo. See how artificial intelligence transforms text prompts into professional videos in real-time.',
    ogUrl: currentPage === 'home' ? 'https://16fps.com/' : 'https://16fps.com/demo',
    ogImage: 'https://16fps.com/og-image.jpg',
    twitterTitle: currentPage === 'home'
      ? '16fps - AI Video Generation Agent'
      : 'Try 16fps Demo - AI Video Generation',
    twitterDescription: currentPage === 'home'
      ? 'Transform your ideas into stunning videos with 16fps AI video generation agent. Create promotional content, educational videos, and engaging social media posts in minutes.'
      : 'Experience the power of 16fps AI video generation with our interactive demo. See how artificial intelligence transforms text prompts into professional videos in real-time.',
    twitterImage: 'https://16fps.com/twitter-image.jpg',
    canonicalUrl: currentPage === 'home' ? 'https://16fps.com/' : 'https://16fps.com/demo',
    structuredData: currentPage === 'home' ? {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "16fps",
      "description": "AI-powered video generation agent that transforms ideas into professional videos",
      "applicationCategory": "VideoEditingApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "category": "subscription"
      },
      "creator": {
        "@type": "Organization",
        "name": "Syntexa",
        "email": "developer@syntexa.app"
      },
      "url": "https://16fps.com",
      "screenshot": "https://16fps.com/screenshot.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127"
      }
    } : {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "16fps Demo - AI Video Generation",
      "description": "Interactive demo of 16fps AI video generation technology",
      "url": "https://16fps.com/demo",
      "isPartOf": {
        "@type": "WebSite",
        "name": "16fps",
        "url": "https://16fps.com"
      }
    }
  });

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
