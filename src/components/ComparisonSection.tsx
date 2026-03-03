import { Check, X, Zap } from 'lucide-react';

export default function ComparisonSection() {

  const comparisonData = {
    '16fps': {
      color: 'emerald',
      features: {
        'Lightning Fast Generation': true,
        'AI-Powered Editing': true,
        'Multiple Export Formats': true,
        'Social Media Optimization': true,
        'Batch Processing': true,
        'API Access': true,
        'Custom Branding': true,
        'Real-time Preview': true,
        'Voice Generation': true,
        'Scene Composition': true,
        'Advanced Analytics': true,
        'Team Collaboration': true
      },
      pricing: '$29-199/month',
      support: '24/7'
    },
    'Runway': {
      color: 'blue',
      features: {
        'Lightning Fast Generation': true,
        'AI-Powered Editing': true,
        'Multiple Export Formats': true,
        'Social Media Optimization': false,
        'Batch Processing': false,
        'API Access': true,
        'Custom Branding': false,
        'Real-time Preview': false,
        'Voice Generation': false,
        'Scene Composition': true,
        'Advanced Analytics': false,
        'Team Collaboration': true
      },
      pricing: '$15-76/month',
      support: 'Email'
    },
    'Synthesia': {
      color: 'purple',
      features: {
        'Lightning Fast Generation': false,
        'AI-Powered Editing': true,
        'Multiple Export Formats': true,
        'Social Media Optimization': false,
        'Batch Processing': true,
        'API Access': true,
        'Custom Branding': true,
        'Real-time Preview': false,
        'Voice Generation': true,
        'Scene Composition': false,
        'Advanced Analytics': true,
        'Team Collaboration': true
      },
      pricing: '$30-200/month',
      support: 'Chat Support'
    },
    'Pictory': {
      color: 'orange',
      features: {
        'Lightning Fast Generation': true,
        'AI-Powered Editing': false,
        'Multiple Export Formats': true,
        'Social Media Optimization': true,
        'Batch Processing': true,
        'API Access': false,
        'Custom Branding': true,
        'Real-time Preview': true,
        'Voice Generation': false,
        'Scene Composition': false,
        'Advanced Analytics': false,
        'Team Collaboration': false
      },
      pricing: '$25-99/month',
      support: 'Email'
    }
  };

  const features = Object.keys(comparisonData['16fps'].features);
  const platforms = Object.keys(comparisonData);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-black border-y border-emerald-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            How 16fps Compares
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how 16fps stacks up against other leading AI video generation platforms for your specific needs
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-emerald-900/50">
                <th className="text-left py-4 px-4 font-bold text-white">Feature</th>
                {platforms.map((platform) => (
                  <th key={platform} className="text-center py-4 px-4">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-lg">{platform}</span>
                      <span className="text-xs text-gray-400 mt-1">{comparisonData[platform as keyof typeof comparisonData].pricing}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature} className="border-b border-emerald-900/20 hover:bg-emerald-900/10 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white text-sm md:text-base">{feature}</td>
                  {platforms.map((platform) => {
                    const hasFeature = comparisonData[platform as keyof typeof comparisonData].features[feature as keyof typeof comparisonData['16fps']['features']];
                    return (
                      <td key={`${platform}-${feature}`} className="text-center py-4 px-4">
                        {hasFeature ? (
                          <Check size={24} className="mx-auto text-emerald-400" />
                        ) : (
                          <X size={24} className="mx-auto text-gray-600" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Comparison Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {platforms.map((platform) => {
            const data = comparisonData[platform as keyof typeof comparisonData];
            const topFeatures = Object.entries(data.features)
              .filter(([, hasIt]) => hasIt)
              .slice(0, 5)
              .map(([feature]) => feature);

            return (
              <div
                key={platform}
                className={`p-6 rounded-xl border transition-all ${
                  platform === '16fps'
                    ? 'bg-gradient-to-br from-emerald-900/30 to-cyan-900/20 border-emerald-400/50 shadow-lg shadow-emerald-500/20'
                    : 'bg-gradient-to-br from-gray-900/20 to-gray-900/10 border-gray-500/20 hover:border-gray-400/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${platform === '16fps' ? 'text-emerald-400' : 'text-gray-300'}`}>
                    {platform}
                  </h3>
                  {platform === '16fps' && <Zap className="text-emerald-400" size={24} />}
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Pricing</p>
                    <p className={`text-lg font-bold ${platform === '16fps' ? 'text-emerald-400' : 'text-gray-300'}`}>
                      {data.pricing}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Support</p>
                    <p className="text-gray-300">{data.support}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Top Features</p>
                  <ul className="space-y-1">
                    {topFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check size={16} className={`${platform === '16fps' ? 'text-emerald-400' : 'text-gray-500'} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {platform === '16fps' && (
                  <button className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors">
                    Choose 16fps
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Verdict Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 border border-emerald-500/30">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Why Choose 16fps?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>Fastest video generation in the industry</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>All-in-one platform with no separate tools needed</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>Best value for comprehensive video creation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>Powerful API for enterprise solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>24/7 priority support included</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-900/20 to-emerald-900/10 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Competitive Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {[
                '16fps vs Runway',
                '16fps vs Synthesia',
                '16fps vs Pictory',
                '16fps Alternative',
                '16fps Pricing',
                '16fps Review',
                'Best AI Video Maker',
                'Fastest Video Generator',
                '16fps vs HeyGen',
                '16fps vs Invideo',
                'AI Video Generator 2024',
                'Video Creation Software'
              ].map((term) => (
                <a
                  key={term}
                  href={`https://www.google.com/search?q=${encodeURIComponent(term)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs bg-cyan-900/30 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-900/50 transition-all"
                >
                  {term}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
