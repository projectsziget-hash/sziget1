import { Music, Target, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">About $SZIGET</h1>
        <p className="text-xl text-gray-400">
          A revolutionary memecoin bringing people together to fund amazing music experiences
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          $SZIGET is more than just a memecoin—it's a movement to democratize event funding
          and create a community-driven approach to supporting the festivals and events we love.
          By trading $SZIGET tokens, you're not just participating in the crypto market;
          you're directly contributing to making Sziget Festival 2026 a reality.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Built on Solana for lightning-fast transactions and minimal fees, $SZIGET represents
          the future of community-powered event funding. Every trade helps us get closer to
          our goal, and every trader becomes part of festival history.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Music className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">For Music Lovers</h3>
          <p className="text-gray-400">
            Join thousands of festival enthusiasts in creating unforgettable experiences.
            Your participation helps bring world-class artists and events to life.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Target className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Transparent Goals</h3>
          <p className="text-gray-400">
            Every contribution is tracked on the blockchain. See exactly how funds are
            raised and used to support Sziget Festival 2026.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Users className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Community Driven</h3>
          <p className="text-gray-400">
            Be part of a global community that believes in the power of music and shared
            experiences. Together, we make it happen.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Zap className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Powered by Solana</h3>
          <p className="text-gray-400">
            Experience instant trades with minimal fees. Solana's technology ensures
            your transactions are fast, secure, and environmentally friendly.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Join the Movement</h2>
        <p className="text-gray-300 text-lg mb-6">
          Whether you're a crypto enthusiast, a music lover, or both—there's a place for you in the $SZIGET community.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition">
          Start Trading Now
        </button>
      </div>
    </div>
  );
}
