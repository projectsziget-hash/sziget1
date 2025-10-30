import { Wallet, Coins, TrendingUp, Gift, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 mx-auto mb-6 text-pink-600" />
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            HOW IT WORKS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Support Sziget and trade $SZIGET tokens on the Solana blockchain
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-black text-white text-center mb-12">Donation Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-black text-xl">
                1
              </div>
              <Wallet className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Send SOL</h3>
              <p className="text-gray-400 leading-relaxed">
                Copy our Solana wallet address and send any amount of SOL from your wallet. Every contribution helps save the festival.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-black text-xl">
                2
              </div>
              <Coins className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Register</h3>
              <p className="text-gray-400 leading-relaxed">
                Fill out the simple form with your name and donation amount to register your contribution and join the supporters list.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-black text-xl">
                3
              </div>
              <Gift className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Make Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                Your donation goes directly toward saving Sziget Festival and ensuring it continues for years to come.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-black text-white text-center mb-12">Trading $SZIGET</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
              <TrendingUp className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-3xl font-black text-white mb-4">Buy $SZIGET Tokens</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Purchase $SZIGET tokens at 0.00042 SOL per token. By buying tokens, you're directly supporting the festival while potentially benefiting from future token value growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">Enter your name and Solana wallet address</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">Choose how much SOL to spend</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">Receive $SZIGET tokens to your wallet</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
              <Coins className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-3xl font-black text-white mb-4">Sell $SZIGET Tokens</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Already holding $SZIGET tokens? You can sell them back at the current rate of 0.00042 SOL per token. Quick and easy conversion to SOL.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">Enter your wallet details</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">Specify SOL amount to receive</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">Complete the sale instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-black mb-4">Why Solana?</h2>
          <p className="text-lg leading-relaxed mb-4">
            We chose Solana blockchain for its lightning-fast transactions, extremely low fees, and eco-friendly proof-of-stake consensus. This means your donations and trades are processed almost instantly with minimal cost and environmental impact.
          </p>
          <p className="text-lg leading-relaxed">
            Solana's technology enables us to create a transparent, secure, and efficient platform for supporting Sziget Festival while giving our community the ability to trade and hold $SZIGET tokens.
          </p>
        </div>
      </div>
    </div>
  );
}
