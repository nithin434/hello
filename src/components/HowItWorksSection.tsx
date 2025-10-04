import { ArrowRight, Upload, Wand2, Calendar, Share2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Content",
      description: "Provide your script, ideas, or reference materials to get started.",
      step: "01"
    },
    {
      icon: Wand2,
      title: "AI Agent Creates",
      description: "Our AI generates consistent characters and produces your 1-minute video with perfect quality.",
      step: "02"
    },
    {
      icon: Calendar,
      title: "Auto Schedule",
      description: "Set your posting schedule once and let the agent handle the rest automatically.",
      step: "03"
    },
    {
      icon: Share2,
      title: "Multi-Platform Publishing",
      description: "Videos are automatically optimized and posted across all your social platforms.",
      step: "04"
    }
  ];

  return (
    <section className="py-32 px-8" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How 16fps Agent Works
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Our AI-powered video generation process is designed to be simple, fast, and completely automated. 
            From concept to publication, everything happens seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/8 transition-all duration-300 group h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg mb-6 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-white/80" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Complete Automation in Minutes
            </h3>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Once setup, the 16fps agent works 24/7 to generate, schedule, and publish your content. 
              Consistent quality, perfect timing, zero manual work required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}