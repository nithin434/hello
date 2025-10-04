import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:developer@syntexa.app?subject=16fps%20Subscription%20Request&body=Email%3A%20${encodeURIComponent(email)}%0A%0AI%27d%20like%20to%20subscribe%20to%2016fps.%0A%0AThank%20you.`;
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-8 leading-none">
          Transform. Generate. Make.
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-3xl mx-auto leading-relaxed">
          1-minute consistent videos. Automated, clean, always ready.
        </p>

        <form onSubmit={handleSubscribe} className="flex items-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to start"
            required
            className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
          >
            Subscribe & Start
          </button>
        </form>
      </div>
    </section>
  );
}
