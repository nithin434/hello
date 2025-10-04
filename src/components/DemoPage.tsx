import { useState, useEffect } from 'react';
import { Upload, Shuffle } from 'lucide-react';

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [hasGeneratedVideo, setHasGeneratedVideo] = useState(false);

  const demoPrompts = [
    {
      prompt: "Make a promotional insta post for Chobani, a protein shake drink",
      video: "/1.webm"
    },
    {
      prompt: "Invitation for the Christmas party on Friday Dec 20, inviting to house",
      video: "/2.webm"
    },
    {
      prompt: "A 2 minute video about how plants grow in a fun and interactive way for children",
      video: "/3.webm"
    },
    {
      prompt: "A hooky cartoonistic video for children like Dora the Explorer for YouTube (2 min length)",
      video: "/4.webm"
    },
    {
      prompt: "A woman talking about importance of health consciousness to pull customers to join sessions",
      video: "/5.webm"
    }
  ];

  const loadingSteps = [
    "Analyzing prompt...",
    "Generating character design...",
    "Creating visual style...",
    "Making images...",
    "Preparing script...",
    "Rendering video frames...",
    "Adding transitions...",
    "Finalizing video..."
  ];

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * demoPrompts.length);
    setCurrentPrompt(demoPrompts[randomIndex].prompt);
    setIsLoading(true);
    setLoadingStep(0);

    // Simulate realistic loading progression
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setCurrentVideoIndex(randomIndex);
            setHasGeneratedVideo(true);
            setIsLoading(false);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 3500); // Each step takes 3.5 seconds
  };

  useEffect(() => {
    // Component starts blank - no initial prompt or video
  }, []);

  const handleSubscribe = () => {
    window.location.href = 'mailto:developer@syntexa.app?subject=16fps%20Demo%20Access%20Request&body=Hi%2C%0A%0AI%27d%20like%20to%20unlock%20full%20demo%20access.%0A%0AThank%20you.';
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16">
          Try the 16fps Agent Demo
        </h1>

        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or describe what you want to create..."
              disabled
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 cursor-not-allowed opacity-50 text-sm md:text-base rounded-lg"
              onMouseEnter={() => setShowTooltip('search')}
              onMouseLeave={() => setShowTooltip(null)}
            />
            {showTooltip === 'search' && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 md:px-4 py-2 bg-white text-black text-xs md:text-sm whitespace-nowrap z-10 rounded">
                Subscribe to unlock demo access.
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="relative flex-1">
              <button
                disabled
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 text-white/30 cursor-not-allowed opacity-50 flex items-center justify-center gap-2 text-sm md:text-base rounded-lg"
                onMouseEnter={() => setShowTooltip('upload')}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <Upload className="w-4 h-4 md:w-5 md:h-5" />
                Upload Image
              </button>
              {showTooltip === 'upload' && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 md:px-4 py-2 bg-white text-black text-xs md:text-sm whitespace-nowrap z-10 rounded">
                  Subscribe to unlock demo access.
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={handleRandomize}
                disabled={isLoading}
                className="w-full sm:w-auto px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 text-sm md:text-base rounded-lg"
              >
                <Shuffle className="w-4 h-4 md:w-5 md:h-5" />
                Randomize
              </button>
            </div>

            <div className="relative">
              <button
                disabled
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 text-white/30 cursor-not-allowed opacity-50 text-sm md:text-base rounded-lg"
                onMouseEnter={() => setShowTooltip('submit')}
                onMouseLeave={() => setShowTooltip(null)}
              >
                Submit
              </button>
              {showTooltip === 'submit' && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 md:px-4 py-2 bg-white text-black text-xs md:text-sm whitespace-nowrap z-10 rounded">
                  Subscribe to unlock demo access.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Current Prompt Display */}
        {currentPrompt && (
          <div className="mb-6 md:mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4">
              <p className="text-white/80 text-xs md:text-sm italic">
                Current: "{currentPrompt}"
              </p>
            </div>
          </div>
        )}

        <div className="relative aspect-video bg-white/5 border border-white/10 overflow-hidden mb-8 md:mb-12 rounded-xl">
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mb-3 md:mb-4"></div>
              
              <div className="text-center space-y-2 max-w-xs md:max-w-sm">
                <p className="text-white/60 text-xs md:text-sm font-medium">
                  {loadingSteps[loadingStep]}
                </p>
                
                <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2">
                  <div 
                    className="bg-white h-1.5 md:h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
                  ></div>
                </div>
                
                <p className="text-white/40 text-xs">
                  {Math.max(0, (loadingSteps.length - loadingStep - 1) * 3.5).toFixed(0)}s remaining
                </p>
              </div>
            </div>
          ) : hasGeneratedVideo ? (
            <video
              key={demoPrompts[currentVideoIndex]?.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={demoPrompts[currentVideoIndex]?.video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8">
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-white/40 text-sm md:text-base">
                  Experience the power of 16fps AI video generation
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-white/60 mb-4 md:mb-6">
            Try out the full 16fps experience with a subscription.
          </p>
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 text-sm md:text-base rounded-lg"
          >
            Contact & Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
