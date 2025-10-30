import { useState, useEffect } from 'react';

export function HeroSection() {
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-1000 ${curtainOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative h-full w-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-black via-gray-900 to-black transition-all duration-[2000ms] ease-in-out ${
              curtainOpen ? '-translate-x-full' : 'translate-x-0'
            }`}
            style={{ width: '50%' }}
          />
          <div
            className={`absolute top-0 right-0 h-full bg-gradient-to-l from-black via-gray-900 to-black transition-all duration-[2000ms] ease-in-out ${
              curtainOpen ? 'translate-x-full' : 'translate-x-0'
            }`}
            style={{ width: '50%' }}
          />
        </div>
      </div>

      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/SZ25-SZIGET-LOGO-PRESALE-26-16x9-EN-1.jpg")',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 mb-4">
            Fund the Festival. Earn Returns.
          </h2>
          <p className="text-lg text-gray-400 font-bold">
            Support Europe's legendary music festival and trade $SZIGET tokens on the blockchain
          </p>
        </div>
      </div>
    </>
  );
}
