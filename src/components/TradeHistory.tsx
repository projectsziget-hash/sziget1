import { useEffect, useState } from 'react';
import { History, TrendingUp, TrendingDown } from 'lucide-react';
import { supabase, type Trade } from '../lib/supabase';

export function TradeHistory() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrades = async () => {
    try {
      const { data, error } = await supabase
        .from('trades')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setTrades(data || []);
    } catch (err) {
      console.error('Error fetching trades:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrades();

    const channel = supabase
      .channel('trade-history')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'trades' },
        () => {
          fetchTrades();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return `${Math.floor(diffMins / 1440)}d ago`;
  };

  const truncateAddress = (address: string) => {
    if (!address || address.length < 10) return address;
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full p-3">
          <History className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Recent Trades</h2>
      </div>

      {trades.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No trades yet. Be the first to trade!</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className={`rounded-xl p-4 border-2 transition-all hover:shadow-md ${
                trade.trade_type === 'buy'
                  ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'
                  : 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-full p-2 ${
                      trade.trade_type === 'buy'
                        ? 'bg-emerald-500'
                        : 'bg-orange-500'
                    }`}
                  >
                    {trade.trade_type === 'buy' ? (
                      <TrendingUp className="w-5 h-5 text-white" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 flex items-center gap-2">
                      {trade.trader_name}
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          trade.trade_type === 'buy'
                            ? 'bg-emerald-200 text-emerald-800'
                            : 'bg-orange-200 text-orange-800'
                        }`}
                      >
                        {trade.trade_type.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      {truncateAddress(trade.wallet_address)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatTime(trade.created_at)}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-gray-900 text-lg">
                    {Number(trade.sziget_amount).toFixed(2)} SZIGET
                  </div>
                  <div className="text-sm text-gray-600">
                    {Number(trade.sol_amount).toFixed(4)} SOL
                  </div>
                  <div className="text-xs text-gray-500">
                    @ {Number(trade.price_per_token).toFixed(6)} SOL
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
