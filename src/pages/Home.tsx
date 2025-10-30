import { HeroSection } from '../components/HeroSection';
import { TokenPrice } from '../components/TokenPrice';
import { TradingInterface } from '../components/TradingInterface';
import { TradeHistory } from '../components/TradeHistory';
import { CampaignStats } from '../components/CampaignStats';
import { DonationSection } from '../components/DonationSection';

export function Home() {
  return (
    <div>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-16">
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
    </div>
  );
}
