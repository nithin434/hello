import { AlertCircle, ExternalLink } from 'lucide-react';

interface ErrorPageProps {
  errorCode?: number;
  errorMessage?: string;
}

interface SuggestedLink {
  title: string;
  url: string;
  icon?: any;
  external?: boolean;
}

export default function ErrorPage({ 
  errorCode = 404, 
  errorMessage = 'Page not found' 
}: ErrorPageProps) {
  const suggestedLinks: { category: string; links: SuggestedLink[] }[] = [
    {
      category: 'Navigation',
      links: [
        { title: 'Home', url: '/' },
        { title: 'Demo', url: '/demo' },
        { title: 'Features', url: '/#features' },
      ]
    },
    {
      category: 'Alternative AI Video Tools',
      links: [
        { title: 'Runway ML - Advanced Video Generation', url: 'https://runwayml.com', external: true },
        { title: 'Synthesia - AI Avatar Videos', url: 'https://synthesia.io', external: true },
        { title: 'Descript - AI Video Editor', url: 'https://descript.com', external: true },
        { title: 'Pictory AI - Video from Content', url: 'https://pictory.ai', external: true },
        { title: 'HeyGen - AI Video Platform', url: 'https://heygen.com', external: true },
        { title: 'Invideo AI - Text to Video', url: 'https://invideo.io', external: true },
      ]
    },
    {
      category: 'Video Creation Resources',
      links: [
        { title: 'Adobe Firefly - Generative AI', url: 'https://firefly.adobe.com', external: true },
        { title: 'CapCut - Free Video Editor', url: 'https://capcut.com', external: true },
        { title: 'Loom - Screen Recording', url: 'https://loom.com', external: true },
        { title: 'FlexClip - Online Video Maker', url: 'https://flexclip.com', external: true },
        { title: 'Vimeo Create - Video Creation', url: 'https://vimeo.com/create', external: true },
      ]
    },
    {
      category: 'Learning & Resources',
      links: [
        { title: 'AI Video Generation Guide', url: 'https://blog.16fps.com/guide', external: true },
        { title: 'Video Marketing Tips', url: 'https://blog.16fps.com/marketing', external: true },
        { title: 'AI Technology Explained', url: 'https://blog.16fps.com/ai-explained', external: true },
        { title: '16fps Blog', url: 'https://blog.16fps.com', external: true },
      ]
    }
  ];

  const searchKeywords = [
    'AI video generator',
    'best video creation tool',
    'text to video AI',
    'automated video production',
    'AI video maker comparison',
    'faster video creation',
    'video synthesis technology',
    'generative video AI'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-emerald-950/20 to-black relative overflow-hidden py-20 px-4">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/10 via-black to-cyan-950/10 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Error Header */}
        <div className="text-center mb-16">
          <AlertCircle size={64} className="mx-auto mb-6 text-red-500 animate-pulse" />
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            {errorCode}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {errorMessage}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            The page you're looking for doesn't exist, but you can explore our video generation ecosystem below.
          </p>
        </div>

        {/* Helpful Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {suggestedLinks.map((section) => (
            <div key={section.category} className="p-6 rounded-xl bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 border border-emerald-500/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">{section.category}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                    >
                      <span className="text-emerald-500">→</span>
                      <span>{link.title}</span>
                      {link.external && (
                        <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Search Keywords */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-cyan-900/20 to-emerald-900/20 border border-cyan-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Popular Search Terms</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {searchKeywords.map((keyword) => (
              <a
                key={keyword}
                href={`https://www.google.com/search?q=${encodeURIComponent(keyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-black/50 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-900/30 transition-all text-cyan-300 hover:text-cyan-200 flex items-center justify-between group"
              >
                <span className="text-sm">{keyword}</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
          >
            ← Return to Home
          </a>
        </div>

        {/* SEO Footer Content */}
        <div className="mt-20 pt-12 border-t border-emerald-900/30 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Explore the AI video generation ecosystem with 16fps and discover the best tools for your content creation needs.
          </p>
          <p className="text-gray-600 text-xs">
            Keywords: AI video generation, video creation tools, text-to-video, AI video maker, video automation, content creation AI, generative video, video synthesis
          </p>
        </div>
      </div>
    </div>
  );
}
