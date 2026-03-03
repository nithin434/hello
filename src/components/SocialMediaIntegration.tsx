import { useState } from 'react';
import { Share2, Twitter, Linkedin, Facebook, Copy, CheckCircle } from 'lucide-react';

interface SocialShareProps {
  title?: string;
  url?: string;
}

export default function SocialMediaIntegration({ 
  title = '16fps - AI Video Generation Agent',
  url = 'https://16fps.com'
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=AI,VideoGeneration,16fps`,
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-900/20',
      borderColor: 'hover:border-blue-500/50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-900/20',
      borderColor: 'hover:border-blue-500/50'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-900/20',
      borderColor: 'hover:border-blue-500/50'
    },
    {
      name: 'WhatsApp',
      icon: Share2,
      url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-900/20',
      borderColor: 'hover:border-green-500/50'
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-r from-black via-emerald-900/10 to-black border-y border-emerald-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Share 16fps with Your Network</h3>
            <p className="text-gray-400">Spread the word about AI video generation and help creators worldwide</p>
          </div>

          {/* Right side - Social buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border border-gray-700 transition-all duration-300 ${platform.bgColor} ${platform.borderColor}`}
                  title={`Share on ${platform.name}`}
                  aria-label={`Share on ${platform.name}`}
                >
                  <Icon size={24} className={`text-gray-400 ${platform.color} transition-colors`} />
                </a>
              );
            })}
            
            {/* Copy Link button */}
            <button
              onClick={handleCopyLink}
              className="p-3 rounded-lg border border-gray-700 hover:bg-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300"
              title="Copy link to clipboard"
              aria-label="Copy link to clipboard"
            >
              {copied ? (
                <CheckCircle size={24} className="text-emerald-400" />
              ) : (
                <Copy size={24} className="text-gray-400 hover:text-emerald-400 transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Hashtag suggestions */}
        <div className="mt-8 pt-8 border-t border-emerald-900/20">
          <h4 className="text-sm font-semibold text-gray-400 mb-4">Popular Related Hashtags:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              '#AIVideoGeneration',
              '#VideoCreation',
              '#AI',
              '#VideoMarketing',
              '#ContentCreator',
              '#AITools',
              '#DigitalMarketing',
              '#TechInnovation',
              '#VideoProduction',
              '#AutomatedContent',
              '#ArtificialIntelligence',
              '#SocialMediaContent',
              '#VideoEditing',
              '#MarketingAutomation',
              '#FutureOfMedia'
            ].map((hashtag) => (
              <a
                key={hashtag}
                href={`https://twitter.com/search?q=${encodeURIComponent(hashtag)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-sm bg-emerald-900/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-900/40 transition-all"
              >
                {hashtag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
