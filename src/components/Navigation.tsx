interface NavigationProps {
  onNavigate: (page: 'home' | 'demo') => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-sm bg-black/30">
      <button
        onClick={() => onNavigate('home')}
        className="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
      >
        16fps
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate('demo')}
          className="px-6 py-2.5 text-sm font-medium text-white border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          See Demo
        </button>
        <a
          href="mailto:developer@syntexa.app?subject=Get%2016fps%20Agent&body=Hi%2C%0A%0AI%27m%20interested%20in%20getting%20access%20to%20the%2016fps%20agent.%0A%0AThank%20you."
          className="px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-300"
        >
          Get Agent
        </a>
      </div>
    </nav>
  );
}
