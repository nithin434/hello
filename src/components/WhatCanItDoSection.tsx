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
    <section className="py-32 px-8" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What can it do?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            The 16fps agent is designed to handle every aspect of video creation, 
            from generation to publishing, with complete automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg mb-6 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                <capability.icon className="w-6 h-6 text-white/80" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {capability.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}