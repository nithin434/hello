import { useState } from 'react';
import { Upload, Shuffle } from 'lucide-react';

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('/demo1.mp4');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const demoVideos = [
    '/demo1.mp4',
    '/demo2.mp4',
    '/demo3.mp4',
    '/demo4.mp4',
    '/demo5.mp4',
  ];

  const handleRandomize = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomVideo = demoVideos[Math.floor(Math.random() * demoVideos.length)];
      setCurrentVideo(randomVideo);
      setIsLoading(false);
    }, 1500);
  };

  const handleSubscribe = () => {
    window.location.href = 'mailto:developer@syntexa.app?subject=16fps%20Demo%20Access%20Request&body=Hi%2C%0A%0AI%27d%20like%20to%20unlock%20full%20demo%20access.%0A%0AThank%20you.';
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Try the 16fps Agent Demo
        </h1>

        <div className="space-y-6 mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or describe what you want to create..."
              disabled
              className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 cursor-not-allowed opacity-50"
              onMouseEnter={() => setShowTooltip('search')}
              onMouseLeave={() => setShowTooltip(null)}
            />
            {showTooltip === 'search' && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-black text-sm whitespace-nowrap z-10">
                Subscribe to unlock demo access.
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <div className="relative flex-1">
              <button
                disabled
                className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white/30 cursor-not-allowed opacity-50 flex items-center justify-center gap-2"
                onMouseEnter={() => setShowTooltip('upload')}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <Upload className="w-5 h-5" />
                Upload Image
              </button>
              {showTooltip === 'upload' && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-black text-sm whitespace-nowrap z-10">
                  Subscribe to unlock demo access.
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={handleRandomize}
                disabled={isLoading}
                className="px-6 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
              >
                <Shuffle className="w-5 h-5" />
                Randomize
              </button>
            </div>

            <div className="relative">
              <button
                disabled
                className="px-8 py-4 bg-white/5 border border-white/10 text-white/30 cursor-not-allowed opacity-50"
                onMouseEnter={() => setShowTooltip('submit')}
                onMouseLeave={() => setShowTooltip(null)}
              >
                Submit
              </button>
              {showTooltip === 'submit' && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-black text-sm whitespace-nowrap z-10">
                  Subscribe to unlock demo access.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative aspect-video bg-white/5 border border-white/10 overflow-hidden mb-12">
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
              <p className="text-white/60 text-sm">Loading & extracting...</p>
            </div>
          ) : (
            <video
              key={currentVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={currentVideo} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="text-center">
          <p className="text-lg text-white/60 mb-6">
            Unlock full demo access with a subscription.
          </p>
          <button
            onClick={handleSubscribe}
            className="px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300"
          >
            Subscribe & Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
