import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function TokenPrice() {
  const [price, setPrice] = useState(0.00042);
  const [priceChange, setPriceChange] = useState(0);
  const [volume24h, setVolume24h] = useState(0);
  const [trades24h, setTrades24h] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

        const { data, error } = await supabase
          .from('trades')
          .select('sol_amount, price_per_token, created_at')
          .gte('created_at', oneDayAgo)
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          const latestPrice = data[0].price_per_token;
          setPrice(latestPrice);

          const totalVolume = data.reduce((sum, trade) => sum + Number(trade.sol_amount), 0);
          setVolume24h(totalVolume);
          setTrades24h(data.length);

          if (data.length > 1) {
            const oldestPrice = data[data.length - 1].price_per_token;
            const change = ((latestPrice - oldestPrice) / oldestPrice) * 100;
            setPriceChange(change);
          }
        }
      } catch (err) {
        console.error('Error fetching token stats:', err);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);

    return () => clearInterval(interval);
  }, []);

  const isPositive = priceChange >= 0;

  return (
    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white border border-emerald-400">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">$SZIGET Token</h2>
          <p className="text-white text-opacity-80">Official Festival Memecoin</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
          <Activity className="w-8 h-8" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-white text-opacity-70 mb-1">Current Price</div>
          <div className="text-2xl font-bold">{price.toFixed(6)} SOL</div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-white text-opacity-70 mb-1">24h Change</div>
          <div className={`text-2xl font-bold flex items-center gap-1 ${isPositive ? 'text-green-300' : 'text-red-300'}`}>
            {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
            {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-white text-opacity-70 mb-1">24h Volume</div>
          <div className="text-2xl font-bold">{volume24h.toFixed(2)} SOL</div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-white text-opacity-70 mb-1">24h Trades</div>
          <div className="text-2xl font-bold">{trades24h}</div>
        </div>
      </div>

      <div className="mt-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-sm">
        <p className="text-white text-opacity-90">
          <strong>Token Address:</strong> SziGetFest1va1TokenMemeCo1nHunGary2o25
        </p>
      </div>
    </div>
  );
}
