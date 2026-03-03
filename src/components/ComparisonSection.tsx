import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonData = {
    '16fps': {
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
        'Advanced Analytics': true,
      },
      pricing: '$29-199/month',
    },
    'Runway': {
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
        'Advanced Analytics': false,
      },
      pricing: '$15-76/month',
    },
    'Synthesia': {
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
        'Advanced Analytics': true,
      },
      pricing: '$30-200/month',
    },
    'Pictory': {
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
        'Advanced Analytics': false,
      },
      pricing: '$25-99/month',
    },
  };

  const features = Object.keys(comparisonData['16fps'].features);
  const platforms = Object.keys(comparisonData);

  return (
    <section className="py-32 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How 16fps Compares
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See how we stack up against other leading AI video generation platforms
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                {platforms.map((platform) => (
                  <th key={platform} className="text-center py-4 px-4">
                    <div className="flex flex-col items-center">
                      <span className="font-semibold text-white text-lg">{platform}</span>
                      <span className="text-xs text-white/40 mt-1">
                        {comparisonData[platform as keyof typeof comparisonData].pricing}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr
                  key={feature}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-white/80">{feature}</td>
                  {platforms.map((platform) => {
                    const hasFeature =
                      comparisonData[platform as keyof typeof comparisonData].features[
                        feature as keyof typeof comparisonData['16fps']['features']
                      ];
                    return (
                      <td key={`${platform}-${feature}`} className="text-center py-4 px-4">
                        {hasFeature ? (
                          <Check size={20} className="mx-auto text-white/80" />
                        ) : (
                          <X size={20} className="mx-auto text-white/20" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
