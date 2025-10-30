import { TrendingUp, Users, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-black">
      <div className="relative h-[700px] overflow-hidden">
        <img
          src="/SZ25-SZIGET-LOGO-PRESALE-26-16x9-EN-1.jpg"
          alt="Sziget Festival"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-8xl font-black text-white mb-8 drop-shadow-2xl leading-tight">
              Trade for a Cause
            </h1>
            <p className="text-3xl font-bold text-white max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              Join the movement! Trade $SZIGET memecoin and help fund amazing events
              while building a community of festival lovers on Solana.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border-2 border-pink-500 rounded-xl p-8 text-center hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/50 transition-all">
            <TrendingUp className="w-14 h-14 text-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-3">Trade Tokens</h3>
            <p className="text-gray-200 font-medium">
              Buy and sell $SZIGET tokens on Solana with instant transactions
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border-2 border-pink-500 rounded-xl p-8 text-center hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/50 transition-all">
            <Heart className="w-14 h-14 text-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-3">Support Events</h3>
            <p className="text-gray-200 font-medium">
              Trading fees go directly to funding Sziget Festival 2026
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border-2 border-pink-500 rounded-xl p-8 text-center hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/50 transition-all">
            <Users className="w-14 h-14 text-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-3">Join Community</h3>
            <p className="text-gray-200 font-medium">
              Be part of a global community of music and festival enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
