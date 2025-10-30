import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Clock, TrendingUp, TrendingDown } from 'lucide-react';

interface Trade {
  id: string;
  wallet_address: string;
  trader_name: string | null;
  trade_type: 'buy' | 'sell';
  sol_amount: number;
  sziget_amount: number;
  price_per_token: number;
  created_at: string;
}

export function TradeHistory() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTrades();
  }, []);

  const loadTrades = async () => {
    try {
      const { data, error } = await supabase
        .from('trades')
        .select('*')
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setTrades(data || []);
    } catch (error) {
      console.error('Error loading trades:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  if (loading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Recent Trades</h3>
        <div className="text-center py-8 text-gray-400">Loading trades...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Recent Trades</h3>

      {trades.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No trades yet. Be the first to trade!
        </div>
      ) : (
        <div className="space-y-3">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  trade.trade_type === 'buy' ? 'bg-green-900/30' : 'bg-red-900/30'
                }`}>
                  {trade.trade_type === 'buy' ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div>
                  <div className="text-white font-bold">
                    {trade.trader_name || formatAddress(trade.wallet_address)}
                  </div>
                  <div className="text-sm text-gray-400">
                    {trade.trade_type === 'buy' ? 'Bought' : 'Sold'} {trade.sziget_amount.toLocaleString()} $SZIGET
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-white font-bold">{trade.sol_amount} SOL</div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {formatTime(trade.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
