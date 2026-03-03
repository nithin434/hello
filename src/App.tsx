import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';
import GlobalAudioControl from './components/GlobalAudioControl';
import { AudioProvider } from './contexts/AudioContext';
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
      ? 'AI video generation, video generation agent, video creation, artificial intelligence, 16fps, promotional videos, social media content, video marketing, AI agent, automated video production, digital content creation, text-to-video AI, video synthesis, video transformer, neural network video, deep learning video, generative video AI, video agent technology, video generation platform, AI video tool, video creation software, TikTok video generator, Instagram Reels maker, YouTube short creator, short-form video AI, long-form video generation, AI video editing, video upscaling AI, voice generation, subtitle generation AI, video translation AI, avatar video, virtual presenter, video composition AI, scene generation, motion synthesis, video enhancement, video quality improvement, 4K video generation, HD video maker, Runway alternative, Synthesia alternative, Pictory alternative, HeyGen alternative, video transformation tool, best AI video generator, free video generator AI, cheap video maker'
      : 'AI video demo, interactive video generation, AI video preview, video creation demo, video generation technology, 16fps demo, live video synthesis, real-time video generation, video agent demo, text-to-video demo',
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
      "description": "Advanced AI video generation agent using neural networks and generative AI technology. Transform text prompts and ideas into professional-quality videos with our video transformation platform.",
      "applicationCategory": "VideoEditingApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "JavaScript enabled",
      "keywords": "AI video generation, video agent, text-to-video, video synthesis, generative AI, neural networks",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "category": "subscription",
        "url": "https://16fps.com/pricing"
      },
      "creator": {
        "@type": "Organization",
        "name": "Syntexa",
        "email": "developer@syntexa.app",
        "url": "https://syntexa.com"
      },
      "url": "https://16fps.com",
      "screenshot": "https://16fps.com/screenshot.jpg",
      "image": "https://16fps.com/og-image.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Syntexa Team"
      },
      "featureList": [
        "AI-powered video generation",
        "Text-to-video conversion",
        "Video transformation technology",
        "Neural network synthesis",
        "Real-time preview",
        "Batch processing",
        "Video agent automation",
        "Social media optimization"
      ],
      "relatedVideo": [
        {
          "@type": "VideoObject",
          "name": "How AI Video Generation Works",
          "description": "Overview of 16fps video generation agent technology",
          "url": "https://16fps.com/video/how-it-works"
        }
      ],
      "inLanguage": "en-US"
    } : {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "16fps Demo - AI Video Generation Agent",
      "description": "Interactive demo of 16fps AI video generation technology and video agent capabilities",
      "url": "https://16fps.com/demo",
      "image": "https://16fps.com/og-image.jpg",
      "isPartOf": {
        "@type": "WebSite",
        "name": "16fps",
        "url": "https://16fps.com",
        "description": "AI video generation and video transformation platform"
      },
      "author": {
        "@type": "Organization",
        "name": "Syntexa"
      },
      "keywords": "AI video demo, video generation demo, video agent demo, text-to-video demo"
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
    <AudioProvider>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-cyan-950/20 pointer-events-none"></div>

        <div className="relative z-10">
          <Navigation onNavigate={setCurrentPage} scrollToSection={scrollToSection} />
          <GlobalAudioControl />

          {currentPage === 'home' ? (
            <HomePage onNavigate={setCurrentPage} />
          ) : (
            <DemoPage />
          )}
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
