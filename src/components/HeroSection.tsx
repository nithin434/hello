import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAgent = () => {
    setIsLoading(true);

    setTimeout(() => {
      window.location.href = 'mailto:developer@lumox.app?subject=16fps%20Agent%20Access%20Request&body=Hi%2C%0A%0AI%27m%20interested%20in%20using%20the%2016fps%20agent%20for%20my%20content%20creation.%0A%0ACould%20you%20please%20provide%20me%20with%20access%20details%20and%20pricing%20information%3F%0A%0AThank%20you.';
      setIsLoading(false);
    }, 4500);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0">
        {/* Main Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 md:grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`col-${i}`} className="border-r border-white/20"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8 md:grid-rows-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`row-${i}`} className="border-b border-white/20"></div>
            ))}
          </div>
        </div>
        
        {/* Fine Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>

        {/* Lightning Effects */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-3xl md:max-w-5xl h-60 md:h-80">
            {/* Top Lightning */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 md:h-20 bg-gradient-to-b from-blue-400/60 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] md:shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
            
            {/* Bottom Lightning */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-12 md:h-20 bg-gradient-to-t from-purple-400/60 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)] md:shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
            
            {/* Left Lightning */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-px w-12 md:w-20 bg-gradient-to-r from-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)] md:shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            
            {/* Right Lightning */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-px w-12 md:w-20 bg-gradient-to-l from-emerald-400/60 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)] md:shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>

            {/* Corner Glows */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400/40 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)] md:shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400/40 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)] md:shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400/40 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)] md:shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400/40 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.6)] md:shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Text Glow Effect */}
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-none relative">
            <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text blur-lg opacity-40">
              1-Minute Consistent Video Generation Agent
            </span>
            <span className="relative">Transform. Generate. Make.</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-white/60 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
          1min + consistent videos. Automated, clean, always ready.
        </p>

        <button
          onClick={handleGetAgent}
          disabled={isLoading}
          className="px-8 md:px-12 py-4 md:py-5 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center gap-2 md:gap-3 text-base md:text-lg relative overflow-hidden group rounded-lg"
        >
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
              <span className="hidden sm:inline">Crafting a mail to contact about agent...</span>
              <span className="sm:hidden">Crafting mail...</span>
            </>
          ) : (
            'Use 16fps Agent'
          )}
        </button>
      </div>
    </section>
  );
}
