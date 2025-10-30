import { HeroSection } from '../components/HeroSection';
import { TokenPrice } from '../components/TokenPrice';
import { TradingInterface } from '../components/TradingInterface';
import { TradeHistory } from '../components/TradeHistory';
import { CampaignStats } from '../components/CampaignStats';
import { DonationSection } from '../components/DonationSection';
import { Music, Sparkles, Users } from 'lucide-react';

export function Home() {
  return (
    <div>
      <HeroSection />

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Where Music Meets Innovation
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              $SZIGET is not just a memecoin. It's a movement that transforms festival dreams into reality
              through the power of blockchain technology and community passion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trade & Earn</h3>
              <p className="text-gray-600 font-light">
                Every transaction fuels the festival. Buy, sell, and watch your impact grow with real-time trading on Solana.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fund Freedom</h3>
              <p className="text-gray-600 font-light">
                100% of trading fees go directly to making Sziget Festival 2026 the most epic celebration of music and culture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Tribe</h3>
              <p className="text-gray-600 font-light">
                Be part of a global community of music lovers, crypto enthusiasts, and freedom seekers building the future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <TradingInterface />
            </div>
            <div>
              <TokenPrice />
            </div>
          </div>

          <div className="mb-16">
            <CampaignStats />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <TradeHistory />
            <DonationSection />
          </div>
        </div>
      </section>
    </div>
  );
}
