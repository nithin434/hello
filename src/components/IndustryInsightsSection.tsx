import { TrendingUp, Award, Zap, Target, Users, Cpu } from 'lucide-react';

export default function IndustryInsightsSection() {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Video Content Dominates',
      stat: '80%',
      description: 'Video content generates 80% more engagement than static content across all social media platforms',
      keywords: ['video engagement', 'content marketing', 'social media analytics', 'viewer retention']
    },
    {
      icon: Cpu,
      title: 'AI Video Market Growth',
      stat: '27.3%',
      description: 'Expected CAGR for AI video generation market from 2024-2030, reaching $19.2B',
      keywords: ['AI market', 'video technology', 'generative AI', 'market analysis']
    },
    {
      icon: Users,
      title: 'Creator Adoption',
      stat: '65%',
      description: 'Content creators are now using AI tools to accelerate their production workflow',
      keywords: ['content creators', 'productivity tools', 'workflow automation', 'creator economy']
    },
    {
      icon: Target,
      title: 'Short-Form Video',
      stat: '92%',
      description: 'Short-form videos (under 3 minutes) drive highest engagement on TikTok, Instagram Reels, and YouTube Shorts',
      keywords: ['short-form video', 'social media trends', 'video marketing strategy', 'audience engagement']
    },
    {
      icon: Award,
      title: 'Production Speed',
      stat: '10x',
      description: 'AI video tools reduce production time by 10x compared to traditional video creation methods',
      keywords: ['production efficiency', 'time-saving tools', 'automation', 'content production']
    },
    {
      icon: Zap,
      title: 'ROI Improvement',
      stat: '3.8x',
      description: 'Companies using AI video generation see 3.8x return on investment in marketing expenses',
      keywords: ['ROI metrics', 'marketing analytics', 'conversion optimization', 'business growth']
    }
  ];

  const relatedServices = [
    'AI video generation',
    'Text-to-video',
    'Video synthesis',
    'Automated video editing',
    'AI video enhancement',
    'Video upscaling',
    'AI script writing',
    'Voice generation',
    'Subtitle generation',
    'Video summarization',
    'Content repurposing',
    'Video translation',
    'Avatar generation',
    'Scene generation',
    'Motion capture',
    'Video composition',
    'Color grading AI',
    'Background removal',
    'Video quality enhancement',
    'Deepfake creation',
    'Neural rendering',
    'Generative video',
    'Video interpolation',
    'Style transfer video'
  ];

  const keywordCategories = {
    'AI & Technology': [
      'artificial intelligence',
      'machine learning',
      'deep learning',
      'neural networks',
      'computer vision',
      'generative AI',
      'transformer models',
      'large language models'
    ],
    'Video Creation': [
      'video generation',
      'text-to-video',
      'video synthesis',
      'video creation software',
      'video editing tools',
      'video maker',
      'video production',
      'video processing'
    ],
    'Social Media': [
      'TikTok video generator',
      'Instagram Reels creator',
      'YouTube video generator',
      'short-form video',
      'viral video content',
      'social media marketing',
      'content calendar',
      'engagement metrics'
    ],
    'Enterprise': [
      'video marketing automation',
      'B2B video content',
      'corporate video production',
      'employee training videos',
      'product demonstration',
      'marketing automation',
      'content management system',
      'digital asset management'
    ],
    'Industry Applications': [
      'retail video marketing',
      'real estate video tours',
      'e-learning video content',
      'news video generation',
      'sports video highlights',
      'medical explainer videos',
      'product demo videos',
      'tutorial video creation'
    ]
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-black border-y border-emerald-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Industry Insights Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI Video Generation Market Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry trends, statistics, and insights driving the future of video creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="text-emerald-400" size={32} />
                    <div className="text-3xl font-bold text-cyan-400">{insight.stat}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{insight.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{insight.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {insight.keywords.map((kw) => (
                      <span key={kw} className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-20 pt-12 border-t border-emerald-900/30">
          <h3 className="text-3xl font-bold text-white mb-8">Related AI Video Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {relatedServices.map((service) => (
              <div
                key={service}
                className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-500/20 hover:border-emerald-400/50 transition-all cursor-pointer group"
              >
                <p className="text-emerald-300 group-hover:text-emerald-200 transition-colors">
                  → {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Keywords by Category */}
        <div className="pt-12 border-t border-emerald-900/30">
          <h3 className="text-3xl font-bold text-white mb-12">Comprehensive Keyword Coverage</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(keywordCategories).map(([category, keywords]) => (
              <div key={category}>
                <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {category}
                </h4>
                <div className="space-y-2">
                  {keywords.map((keyword) => (
                    <div
                      key={keyword}
                      className="flex items-center gap-2 p-2 rounded hover:bg-emerald-900/20 transition-all"
                    >
                      <span className="text-emerald-400 text-sm">•</span>
                      <span className="text-gray-300 text-sm">{keyword}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Comparison Keywords */}
        <div className="mt-20 pt-12 border-t border-emerald-900/30">
          <h3 className="text-2xl font-bold text-white mb-8">Comparison Search Terms</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              '16fps vs Runway',
              '16fps vs Synthesia',
              '16fps vs Pictory',
              '16fps vs HeyGen',
              '16fps Alternative',
              '16fps Review',
              'Best AI Video Generator',
              'Cheapest AI Video Tool',
              'Fastest Video Generation',
              'Free AI Video Maker',
              'Enterprise Video AI',
              'Video Generator Comparison'
            ].map((term) => (
              <div
                key={term}
                className="p-4 rounded-lg bg-gradient-to-r from-cyan-900/20 to-emerald-900/20 border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              >
                <p className="text-cyan-300 text-sm font-medium">{term}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
