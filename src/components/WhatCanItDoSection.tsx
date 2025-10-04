import { Video, Brush, Clock, Share2, Sparkles, Zap } from 'lucide-react';

export default function WhatCanItDoSection() {
  const capabilities = [
    {
      icon: Video,
      title: "1-Minute Videos",
      description: "Create extended videos up to 60 seconds with perfect consistency"
    },
    {
      icon: Brush,
      title: "Multiple Styles",
      description: "Switch between different visual styles while maintaining character identity"
    },
    {
      icon: Clock,
      title: "Auto Scheduling",
      description: "Set it once and let the agent post content on your timeline"
    },
    {
      icon: Share2,
      title: "Multi-Platform",
      description: "Optimized for TikTok, Instagram, YouTube, and all major platforms"
    },
    {
      icon: Sparkles,
      title: "Consistent Quality",
      description: "Same character, same quality, every single frame and video"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate professional videos in under 60 seconds"
    }
  ];

  return (
    <section className="py-16 md:py-32 px-4 md:px-8" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            What can it do?
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto px-4">
            The 16fps agent is designed to handle every aspect of video creation, 
            from generation to publishing, with complete automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg mb-4 md:mb-6 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                <capability.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                {capability.title}
              </h3>
              
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}