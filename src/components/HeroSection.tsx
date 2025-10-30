import { useState, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = Math.max(0.85, 1 - scrollY / 3000);
  const blur = Math.min(8, scrollY / 100);

  return (
    <div className="relative bg-black">
      <div className="relative h-[40vh] md:h-[60vh] lg:h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            opacity,
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`
          }}
        >
          <img
            src="/SZ25-SZIGET-LOGO-PRESALE-26-16x9-EN-1.jpg"
            alt="Sziget Festival"
            className="w-full h-full object-cover animate-scaleIn"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
        </div>

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20"
          style={{ opacity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm font-light">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 md:py-16 lg:py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-fadeInDown">
              <span className="text-white/90 text-sm font-medium tracking-wider">
                SZIGET FESTIVAL 2026
              </span>
            </div>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-none transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            THE ISLAND
          </h1>

          <div
            className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-white/90 mb-12 px-4 transition-all duration-1000 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">Community Funded</span>. <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">100% Transparent</span>. Zero Profit.
          </div>

          <div
            className={`flex flex-col gap-3 justify-center px-4 max-w-sm mx-auto md:max-w-none md:flex-row md:gap-4 transition-all duration-1000 delay-600 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="group w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-base md:text-lg text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-glow">
              <span className="flex items-center gap-2 justify-center">
                Start Trading
                <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md rounded-full font-bold text-base md:text-lg text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
