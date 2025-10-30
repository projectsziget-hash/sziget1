import { HeroSection } from '../components/HeroSection';
import { TokenPrice } from '../components/TokenPrice';
import { TradingInterface } from '../components/TradingInterface';
import { TradeHistory } from '../components/TradeHistory';
import { CampaignStats } from '../components/CampaignStats';
import { DonationSection } from '../components/DonationSection';
import { WalletTracker } from '../components/WalletTracker';
import { Music, Heart, Users, Zap, TrendingUp, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div>
      <HeroSection />

      <section
        ref={(el) => (sectionRefs.current['features'] = el)}
        id="features"
        className="bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              A Non-Profit Movement
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Every token traded brings us closer to Sziget 2026. Zero profit. Pure passion. Complete transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                gradient: 'from-pink-500 to-rose-600',
                title: '100% Non-Profit',
                desc: 'Every single dollar from trading fees goes directly to Sziget Festival 2026. No middlemen, no margins, no BS.',
                delay: '0s'
              },
              {
                icon: Shield,
                gradient: 'from-blue-500 to-cyan-500',
                title: 'Fully Transparent',
                desc: 'Track every transaction in real-time on Solana blockchain. Watch the festival fund grow with complete visibility.',
                delay: '0.2s'
              },
              {
                icon: Users,
                gradient: 'from-orange-500 to-red-500',
                title: 'Community Powered',
                desc: 'Built by festival lovers, for festival lovers. Together we make Sziget 2026 happen without corporate sponsorship.',
                delay: '0.4s'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: feature.delay }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current['stats'] = el)}
        id="stats"
        className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, value: '$420K', label: 'Market Cap', delay: '0s' },
              { icon: Zap, value: '12.5K', label: 'Total Trades', delay: '0.2s' },
              { icon: Shield, value: '100%', label: 'Transparent', delay: '0.4s' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible('stats') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: stat.delay }}
              >
                <stat.icon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-purple-200 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current['trading'] = el)}
        id="trading"
        className="bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
              isVisible('trading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="lg:col-span-2">
              <TradingInterface />
            </div>
            <div className="space-y-8">
              <TokenPrice />
              <WalletTracker />
            </div>
          </div>

          <div
            className={`mb-16 transition-all duration-1000 delay-200 ${
              isVisible('trading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <CampaignStats />
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${
              isVisible('trading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <TradeHistory />
            <DonationSection />
          </div>
        </div>
      </section>
    </div>
  );
}
