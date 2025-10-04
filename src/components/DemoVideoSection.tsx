interface DemoVideoSectionProps {
  onNavigate: (page: 'demo') => void;
}

export default function DemoVideoSection({ onNavigate }: DemoVideoSectionProps) {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '9/16' }}>
          <div className="absolute inset-0 bg-white/5 border border-white/10 overflow-hidden mb-8">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/demo-preview.mp4" type="video/mp4" />
          </video>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-white/60 mb-6">
            See what 16fps creates. Every second counts.
          </p>
          <button
            onClick={() => onNavigate('demo')}
            className="px-8 py-3 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2"
          >
            Try the Demo
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
