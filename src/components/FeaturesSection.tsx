import { Clock, Zap, Target } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Agent',
      description: 'Always ready to generate and schedule your content.',
    },
    {
      icon: Zap,
      title: 'Auto-Generate & Post',
      description: 'Create once, and let Syntexa handle publishing on your socials.',
    },
    {
      icon: Target,
      title: 'Consistency Engine',
      description: 'Build your character once, and keep them across every video.',
    },
  ];

  return (
    <section className="py-32 px-8" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-white/60 group-hover:text-white/90 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
