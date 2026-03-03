import { TrendingUp, Award, Zap, Target, Users, Cpu } from 'lucide-react';

export default function MarketIntelligenceSection() {
  const insights = [
    {
      icon: TrendingUp,
      stat: '80%',
      title: 'Video Content Dominates',
      description: 'Video generates more engagement than static content',
    },
    {
      icon: Cpu,
      stat: '27.3%',
      title: 'AI Video Market Growth',
      description: 'Expected CAGR for AI video generation 2024-2030',
    },
    {
      icon: Users,
      stat: '65%',
      title: 'Creator Adoption',
      description: 'Content creators using AI to accelerate workflow',
    },
    {
      icon: Target,
      stat: '92%',
      title: 'Short-Form Performance',
      description: 'Short videos drive highest engagement rates',
    },
    {
      icon: Award,
      stat: '10x',
      title: 'Production Speed',
      description: 'AI tools reduce time vs traditional methods',
    },
    {
      icon: Zap,
      stat: '3.8x',
      title: 'ROI Improvement',
      description: 'Companies see higher returns using AI video',
    },
  ];

  return (
    <section className="py-32 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Video Generation Market Intelligence
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Industry trends and insights driving the future of video creation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <div
                key={idx}
                className="p-8 border border-white/10 hover:border-white/30 transition-colors duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-8 h-8 text-white/60 group-hover:text-white/90 transition-colors" />
                  <div className="text-3xl font-bold text-white/80">{insight.stat}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
