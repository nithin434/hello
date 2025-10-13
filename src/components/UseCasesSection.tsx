import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Sparkles,
      title: 'Content Creators',
      description: 'Maintain a consistent posting schedule without burnout. Generate engaging shorts while focusing on your main content.',
      gradient: 'from-emerald-500/20 to-green-500/20',
    },
    {
      icon: TrendingUp,
      title: 'Brand Marketing',
      description: 'Scale your social presence with brand-consistent videos. Test multiple content strategies effortlessly.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Users,
      title: 'Agencies',
      description: 'Manage multiple clients with ease. Deliver high-quality video content at scale without expanding your team.',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Zap,
      title: 'Startups',
      description: 'Build your brand presence from day one. Create professional content without hiring a full production team.',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built For Every Creator
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Whether you're a solo creator or a growing team, 16fps adapts to your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>

              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 group-hover:border-white/40 transition-colors duration-300">
                  <useCase.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
