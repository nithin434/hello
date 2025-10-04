import { useEffect, useState } from 'react';

interface DemoVideoSectionProps {
  onNavigate: (page: 'demo') => void;
}

export default function DemoVideoSection({ onNavigate }: DemoVideoSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Content, Perfected in Minutes
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              16fps transforms your ideas into polished, professional videos at scale. Whether you're building a brand, telling stories, or growing your audience, our AI-powered agent handles everything from creation to publishing.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Consistent Character Design</h3>
                  <p className="text-white/60">Create once, use forever. Your character stays identical across every video.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Smart Scheduling</h3>
                  <p className="text-white/60">Set it and forget it. Our agent generates and posts content on your schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Multi-Platform Ready</h3>
                  <p className="text-white/60">Optimized for TikTok, Instagram Reels, YouTube Shorts, and more.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('demo')}
              className="px-8 py-4 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2 font-medium"
            >
              See the Demo
              <span>→</span>
            </button>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '9/16' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>

              <div className="relative bg-white/5 border border-white/10 overflow-hidden rounded-lg h-full">
                <div className="relative h-full overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={img}
                      src={img}
                      alt={`Demo ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
