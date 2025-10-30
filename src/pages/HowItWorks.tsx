import { Wallet, ArrowRight, Coins, Heart, TrendingUp, Shield } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">How It Works</h1>
        <p className="text-xl text-gray-400">
          Simple steps to start trading and supporting Sziget Festival
        </p>
      </div>

      <div className="space-y-8 mb-16">
        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white">
            1
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Wallet className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Connect Your Wallet</h3>
            </div>
            <p className="text-gray-400 text-lg">
              Use any Solana-compatible wallet like Phantom, Solflare, or Backpack.
              If you don't have one yet, they're free and easy to set up in minutes.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white">
            2
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Coins className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Buy $SZIGET Tokens</h3>
            </div>
            <p className="text-gray-400 text-lg">
              Trade your SOL for $SZIGET tokens directly on our platform. Transactions
              are instant and fees are minimal thanks to Solana's fast blockchain.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white">
            3
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Trade & Support</h3>
            </div>
            <p className="text-gray-400 text-lg">
              Hold your tokens or trade them as the market moves. A portion of every
              transaction fee goes directly to funding Sziget Festival 2026.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white">
            4
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Join the Community</h3>
            </div>
            <p className="text-gray-400 text-lg">
              Become part of a global movement of music lovers and crypto enthusiasts
              working together to make amazing events happen.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Understanding the Tokenomics</h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Token Distribution</h4>
            <p className="text-gray-400">
              $SZIGET has a fixed supply with transparent distribution. No hidden
              allocations, no team tokens—everything is community-driven.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Transaction Fees</h4>
            <p className="text-gray-400">
              A small 1% fee on each trade goes directly to the festival fund. This
              ensures sustainable funding while keeping trading accessible.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Price Discovery</h4>
            <p className="text-gray-400">
              Token price is determined by market supply and demand. As more people
              join the community, the ecosystem grows organically.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-10">
        <div className="flex items-start gap-6">
          <Shield className="w-12 h-12 text-orange-500 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Safe & Transparent</h2>
            <p className="text-gray-300 text-lg mb-4">
              All transactions are recorded on the Solana blockchain, providing complete
              transparency. You can verify every trade, contribution, and fund movement.
            </p>
            <p className="text-gray-300 text-lg">
              Smart contracts ensure funds are handled securely and automatically,
              removing the need for intermediaries and building trust through code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
