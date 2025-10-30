import { HeroSection } from '../components/HeroSection';
import { WalletTracker } from '../components/WalletTracker';
import { SimpleStats } from '../components/SimpleStats';
import { SimpleDonate } from '../components/SimpleDonate';
import { SimpleTrade } from '../components/SimpleTrade';

export function Home() {
  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        <WalletTracker />

        <SimpleStats />

        <div className="grid md:grid-cols-2 gap-8">
          <SimpleDonate />
          <SimpleTrade />
        </div>
      </div>
    </>
  );
}
