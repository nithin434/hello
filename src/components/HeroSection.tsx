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
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20 relative">
      <div className="absolute inset-0 grid grid-cols-12 gap-px opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-8 leading-none">
          Transform. Generate. Make.
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-3xl mx-auto leading-relaxed">
          1-minute consistent videos. Automated, clean, always ready.
        </p>

        <button
          onClick={handleGetAgent}
          disabled={isLoading}
          className="px-12 py-5 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center gap-3 text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Crafting a mail to contact about agent...
            </>
          ) : (
            'Use 16fps Agent'
          )}
        </button>
      </div>
    </section>
  );
}
