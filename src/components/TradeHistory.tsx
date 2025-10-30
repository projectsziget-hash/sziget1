import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Clock, TrendingUp, TrendingDown } from 'lucide-react';

interface Trade {
  id: string;
  wallet_address: string;
  trader_name: string | null;
  trade_type: 'buy' | 'sell';
  sol_amount: number;
  szgt_amount: number;
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
      <div className="bg-[#7888de]/20 rounded-3xl p-5 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Recent Trades</h3>
        <div className="text-center py-8 text-gray-500 font-light text-sm sm:text-base">Loading trades...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#7888de]/20 rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
      <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-5 sm:mb-6">Recent Trades</h3>

      {trades.length === 0 ? (
        <div className="text-center py-8 text-gray-500 font-light text-sm sm:text-base">
          No trades yet. Be the first to trade!
        </div>
      ) : (
        <div className="space-y-2.5 sm:space-y-3">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="flex items-center justify-between bg-white rounded-2xl p-3.5 sm:p-4 md:p-5 hover:shadow-md transition border border-gray-100"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 min-w-0">
                <div className={`p-1.5 sm:p-2 rounded-xl shrink-0 ${
                  trade.trade_type === 'buy' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {trade.trade_type === 'buy' ? (
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-base text-gray-900 font-light truncate">
                    {trade.trader_name || formatAddress(trade.wallet_address)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light">
                    {trade.trade_type === 'buy' ? 'Bought' : 'Sold'} {trade.szgt_amount.toLocaleString()} $SZGT
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0 ml-2">
                <div className="text-sm sm:text-base text-gray-900 font-light">{trade.sol_amount} SOL</div>
                <div className="flex items-center justify-end gap-1 text-xs text-gray-400 font-light">
                  <Clock className="w-3 h-3" />
                  <span className="hidden sm:inline">{formatTime(trade.created_at)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
