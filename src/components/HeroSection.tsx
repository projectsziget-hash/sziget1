import { TrendingUp, Users, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-black">
      <div className="relative h-[600px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Festival crowd"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-7xl font-black text-white mb-6 drop-shadow-2xl">
              Trade for a Cause
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
              Join the movement! Trade $SZIGET memecoin and help fund amazing events
              while building a community of festival lovers on Solana.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition">
            <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Trade Tokens</h3>
            <p className="text-gray-400">
              Buy and sell $SZIGET tokens on Solana with instant transactions
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition">
            <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Support Events</h3>
            <p className="text-gray-400">
              Trading fees go directly to funding Sziget Festival 2026
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Join Community</h3>
            <p className="text-gray-400">
              Be part of a global community of music and festival enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
