import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';

export default function ClosingSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePricingContact = () => {
    setIsLoading(true);

    setTimeout(() => {
      window.location.href = 'mailto:nithinjambula89@gmail.com?subject=16fps%20Agent%20-%20Pricing%20Inquiry&body=Hi%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20the%2016fps%20agent%20pricing.%0A%0ACould%20you%20please%20provide%20pricing%20information%20and%20available%20plans%3F%0A%0AThank%20you%21';
      setIsLoading(false);
    }, 4000);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-10 text-center max-w-lg mx-4 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Loader2 className="w-10 h-10 text-white animate-spin mr-4" />
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Crafting Message</h3>
          <p className="text-white/70 text-lg mb-6">Preparing your pricing inquiry...</p>
          <div className="mt-6 w-full bg-white/20 rounded-full h-3">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-3 rounded-full animate-pulse transition-all duration-1000" style={{ width: '85%' }}></div>
          </div>
          <p className="text-white/50 text-sm mt-4">Opening your mail client in a moment...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-32 px-8" id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Minimal Quote - No Box, Just Slanted Text */}
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <blockquote className="text-5xl md:text-6xl lg:text-7xl font-light italic text-white/90 leading-tight transform -skew-y-1">
            "Creativity moves at 16 frames per second."
          </blockquote>
        </div>

        {/* Simple Pricing Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Ready to transform your content creation? Contact us for pricing information 
            and get started with the 16fps agent.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handlePricingContact}
              className="px-12 py-4 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 text-lg"
            >
              Get Pricing Information
            </button>
            
            <p className="text-white/60 text-sm">
              Or manually email us at{' '}
              <a 
                href="mailto:k.abhinav1890@gmail.com" 
                className="text-white hover:text-white/80 underline transition-colors"
              >
                k.abhinav1890@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
