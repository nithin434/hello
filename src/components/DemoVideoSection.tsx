import { useEffect, useState } from 'react';

interface DemoVideoSectionProps {
  onNavigate?: (page: 'home' | 'demo') => void;
}

export default function DemoVideoSection({ onNavigate }: DemoVideoSectionProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ['/demo1.webm', '/demo2.webm'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 4000); // Changed to 4 seconds for videos

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="py-16 md:py-32 px-4 md:px-8" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              AI Video Generation Agent
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 leading-relaxed">
              Create up to 1-minute long videos with perfect consistency across different styles and frames. Our AI agent handles everything from generation to auto-scheduling, delivering professional results every time.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Up to 1 Minute Videos</h3>
                  <p className="text-white/60 text-sm md:text-base">Generate extended content with perfect consistency from start to finish.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Multiple Styles & Frames</h3>
                  <p className="text-white/60 text-sm md:text-base">Switch between different visual styles while maintaining character consistency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Auto Scheduler & Publisher</h3>
                  <p className="text-white/60 text-sm md:text-base">Set your schedule once and let the agent generate and post content automatically across all platforms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Frame-Perfect Consistency</h3>
                  <p className="text-white/60 text-sm md:text-base">Same character, same quality, across every single frame and video generated.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto" style={{ aspectRatio: '9/16' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>

              <div className="relative bg-white/5 border border-white/10 overflow-hidden rounded-lg h-full">
                <div className="relative h-full overflow-hidden">
                  {videos.map((video, index) => (
                    <video
                      key={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <source src={video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-black/70 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1.5 md:py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs md:text-sm">Demo {currentVideoIndex + 1}/2</span>
                  </div>
                </div>

                {/* Auto-play indicator */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/70 backdrop-blur-sm rounded-full px-2 md:px-3 py-1">
                  <span className="text-white text-xs">AUTO</span>
                </div>
              </div>

              {/* Video Controls */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex
                        ? 'bg-white w-6 md:w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Try it out button - Mobile positioned under video */}
              <div className="flex justify-center mt-6 md:mt-8">
                <button
                  onClick={() => onNavigate?.('demo')}
                  className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 rounded-lg text-sm md:text-base"
                >
                  Try 16fps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
