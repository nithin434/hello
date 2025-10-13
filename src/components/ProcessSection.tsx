export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Define Your Vision',
      description: 'Tell us about your content style, character, and creative direction. Set your preferences once.',
    },
    {
      number: '02',
      title: 'Agent Takes Over',
      description: 'Our AI agent works 24/7, generating videos that match your exact specifications and brand identity.',
    },
    {
      number: '03',
      title: 'Auto-Schedule & Post',
      description: 'Videos are automatically scheduled and published across your social platforms at optimal times.',
    },
    {
      number: '04',
      title: 'Scale & Grow',
      description: 'Watch your content library grow while you focus on strategy and engagement with your audience.',
    },
  ];

  return (
    <section className="py-32 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From concept to published content, 16fps automates your entire video production workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                <div className="text-5xl font-bold text-white/10 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
