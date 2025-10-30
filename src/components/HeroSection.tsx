import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0.8, 1 - scrollY / 2000);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          opacity,
          transform: `scale(${scale})`
        }}
      >
        <img
          src="/SZ25-SZIGET-LOGO-PRESALE-26-16x9-EN-1.jpg"
          alt="Sziget Festival"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <h1
          className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight leading-none"
          style={{
            opacity,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          THE ISLAND
        </h1>
        <h2
          className="text-3xl md:text-5xl font-light text-white/90 mb-8"
          style={{
            opacity,
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        >
          Of Freedom & Music
        </h2>
        <p
          className="text-xl md:text-2xl text-white/80 max-w-2xl font-light"
          style={{
            opacity,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          Trade $SZIGET tokens. Fund the festival. Join the revolution.
        </p>

        <div
          className="absolute bottom-12 animate-bounce"
          style={{ opacity }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </div>
  );
}
