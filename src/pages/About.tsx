import { Music, Target, Users, Zap, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">The $SZIGET Story</h1>
          <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Where blockchain meets beats, community meets culture, and trading creates magic
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12 mb-16 border border-pink-100">
          <h2 className="text-4xl font-black text-gray-900 mb-6">A Revolution in Festival Funding</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
            Imagine a world where your passion for music and crypto converge to create something extraordinary.
            $SZIGET isn't just another token—it's a radical experiment in collective action, where every trade
            becomes a vote for freedom, every holder becomes a patron, and every transaction brings us closer
            to the ultimate celebration of life and music.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-light">
            We're rewriting the rules of how festivals get funded. No corporate sponsors dictating the vibe.
            No compromise on artistic vision. Just pure, unfiltered community power channeled through the
            lightning-fast Solana blockchain. This is the Island of Freedom—and you're invited.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pure Festival Vibes</h3>
            <p className="text-gray-600 font-light">
              Seven days of non-stop music, art, and freedom on the legendary Island of Freedom in Budapest.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Movement</h3>
            <p className="text-gray-600 font-light">
              Uniting music lovers from every corner of the planet in one unstoppable community.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Built with Love</h3>
            <p className="text-gray-600 font-light">
              Every line of code, every trade, every moment—crafted by people who believe in the magic of music.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Crystal Clear Mission</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Fund Sziget Festival 2026 through community-driven trading. Every transaction fee flows directly
              into making this the most legendary festival the world has ever seen. No middlemen. No BS.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Power to the People</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              This isn't a top-down project. It's a bottom-up revolution. The community decides, the blockchain
              validates, and together we build something that belongs to all of us.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <Zap className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Solana Speed</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Built on Solana for transactions so fast they'll make your head spin. Sub-second confirmations,
              pennies in fees, and the greenest blockchain in the game.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <Music className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">For True Believers</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              If you believe music can change the world, if you think festivals are sacred, if you know crypto
              is the future—then you're already one of us. Welcome home.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-black mb-4">Ready to Make History?</h2>
          <p className="text-xl font-light mb-8 opacity-90">
            This is your invitation to be part of something bigger than yourself.
          </p>
          <button className="bg-white text-purple-600 font-bold px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all text-lg shadow-xl">
            Join the Revolution
          </button>
        </div>
      </div>
    </div>
  );
}
