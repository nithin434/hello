import { useEffect, useState } from 'react';

export default function DemoVideoSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ['/demo1.webm', '/demo2.webm'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 4000); // Changed to 4 seconds for videos

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="py-32 px-8" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI Video Generation Agent
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Create up to 1-minute long videos with perfect consistency across different styles and frames. Our AI agent handles everything from generation to auto-scheduling, delivering professional results every time.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Up to 1 Minute Videos</h3>
                  <p className="text-white/60">Generate extended content with perfect consistency from start to finish.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Multiple Styles & Frames</h3>
                  <p className="text-white/60">Switch between different visual styles while maintaining character consistency.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Auto Scheduler & Publisher</h3>
                  <p className="text-white/60">Set your schedule once and let the agent generate and post content automatically across all platforms.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Frame-Perfect Consistency</h3>
                  <p className="text-white/60">Same character, same quality, across every single frame and video generated.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '9/16' }}>
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
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Demo {currentVideoIndex + 1}/2</span>
                  </div>
                </div>

                {/* Auto-play indicator */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-xs">AUTO</span>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex
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
