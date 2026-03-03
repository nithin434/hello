import { ExternalLink, Video, Zap, BarChart3 } from 'lucide-react';

export default function AlternativePlatformsSection() {
  const platforms = [
    {
      name: 'Runway ML',
      description: 'Advanced AI video generation with style transfer and editing capabilities',
      url: 'https://runwayml.com',
      features: ['Text-to-Video', 'Image-to-Video', 'Video Editing', 'Motion Control'],
      category: 'Video Generation'
    },
    {
      name: 'Synthesia',
      description: 'AI video generation with avatar-based content creation',
      url: 'https://synthesia.io',
      features: ['Avatar Videos', 'Text-to-Speech', 'Multi-Language', 'Enterprise'],
      category: 'AI Avatars'
    },
    {
      name: 'Descript',
      description: 'Video editor that works like a document with AI-powered editing',
      url: 'https://descript.com',
      features: ['Video Editing', 'Transcription', 'Screen Recording', 'Collaboration'],
      category: 'Video Editing'
    },
    {
      name: 'Pictory AI',
      description: 'Convert long-form content to short-form videos automatically',
      url: 'https://pictory.ai',
      features: ['Auto Captions', 'Stock Media', 'Brand Templates', 'Fast Export'],
      category: 'Content Repurposing'
    },
    {
      name: 'HeyGen',
      description: 'AI video generation with realistic avatars and voices',
      url: 'https://heygen.com',
      features: ['Avatar Studio', 'Video Translator', 'Custom Avatars', 'API Access'],
      category: 'AI Avatars'
    },
    {
      name: 'Adobe Firefly',
      description: 'Generative AI for video editing and creative content',
      url: 'https://firefly.adobe.com',
      features: ['Generative Fill', 'Style Reference', 'Motion Blur', 'Color Grading'],
      category: 'Creative Suite'
    },
    {
      name: 'Loom',
      description: 'Screen recording and video messaging for quick communication',
      url: 'https://loom.com',
      features: ['Screen Recording', 'Instant Sharing', 'Transcriptions', 'Interactive'],
      category: 'Screen Recording'
    },
    {
      name: 'Vimeo Create',
      description: 'Simple video creation with templates and stock media',
      url: 'https://vimeo.com/create',
      features: ['Templates', 'Stock Library', 'Editing Tools', 'Hosting'],
      category: 'Video Creation'
    },
    {
      name: 'FlexClip',
      description: 'Online video editor with AI-powered features',
      url: 'https://flexclip.com',
      features: ['Templates', 'Stock Media', 'Subtitle AI', 'Batch Processing'],
      category: 'Video Editing'
    },
    {
      name: 'Invideo AI',
      description: 'AI video creation from text with automatic scripting',
      url: 'https://invideo.io',
      features: ['Text-to-Video', 'AI Script Writing', 'Voice Over', 'Subtitles'],
      category: 'AI Video'
    },
    {
      name: 'Opus Clip',
      description: 'Turn long videos into viral short clips with AI',
      url: 'https://opusclip.com',
      features: ['Auto Clips', 'Hook Detection', 'Captions', 'Multi-Platform'],
      category: 'Content Repurposing'
    },
    {
      name: 'CapCut',
      description: 'Free AI-powered video editor with trending effects',
      url: 'https://capcut.com',
      features: ['AI Tools', 'Effects Library', 'Trending Sounds', 'Collaboration'],
      category: 'Mobile Editing'
    }
  ];

  const videoTransformers = [
    {
      name: 'Topaz Video Enhance AI',
      description: 'Upscale and enhance video quality using AI',
      url: 'https://topazlabs.com/video-enhance-ai',
      tech: 'Deep Learning Upscaling'
    },
    {
      name: 'NVIDIA GauGAN2',
      description: 'AI-powered content creation and image synthesis',
      url: 'https://www.nvidia.com/en-us/products/ai-video/',
      tech: 'Generative Models'
    },
    {
      name: 'Stable Diffusion Video',
      description: 'Open-source video generation and manipulation',
      url: 'https://github.com/Stability-AI/generative-models',
      tech: 'Latent Diffusion'
    },
    {
      name: 'Pika Labs',
      description: 'AI video generation with physics-based simulation',
      url: 'https://pika.art',
      tech: 'Neural Rendering'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Video Intelligence Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the complete landscape of AI video transformation tools, generators, and platforms shaping the future of video creation
          </p>
        </div>

        {/* Video Transformer Agents */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-cyan-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Advanced Video Transformers & Agents</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {videoTransformers.map((transformer) => (
              <a
                key={transformer.name}
                href={transformer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <h4 className="font-bold text-emerald-400 mb-2 group-hover:text-cyan-400 transition-colors">
                  {transformer.name}
                </h4>
                <p className="text-sm text-gray-400 mb-3">{transformer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300">
                    {transformer.tech}
                  </span>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Platforms Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="text-emerald-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Popular Video Creation Platforms</h3>
          </div>
          
          {/* Category grouping */}
          <div className="space-y-12">
            {['AI Video', 'AI Avatars', 'Video Generation', 'Content Repurposing', 'Video Editing', 'Creative Suite', 'Screen Recording', 'Mobile Editing'].map((category) => {
              const categoryPlatforms = platforms.filter(p => p.category === category);
              if (categoryPlatforms.length === 0) return null;
              
              return (
                <div key={category}>
                  <h4 className="text-xl font-bold text-emerald-300 mb-6 flex items-center gap-2">
                    <Video size={24} className="text-cyan-400" />
                    {category}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryPlatforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 rounded-xl bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">
                            {platform.name}
                          </h4>
                          <ExternalLink size={18} className="text-gray-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {platform.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="mt-20 pt-12 border-t border-emerald-900/30">
          <h3 className="text-2xl font-bold text-white mb-8">Industry Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Active AI Video Platforms', value: '50+' },
              { label: 'Global Video AI Market Size (2024)', value: '$5.2B' },
              { label: 'Expected CAGR (2024-2030)', value: '27.3%' },
              { label: 'Corporate Video Usage with AI', value: '72%' }
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 border border-cyan-500/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
