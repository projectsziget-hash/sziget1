import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { DollarSign, Users, Activity } from 'lucide-react';

export function CampaignStats() {
  const [stats, setStats] = useState({
    totalRaised: 0,
    totalTrades: 0,
    uniqueTraders: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { data: contributions } = await supabase
        .from('contributions')
        .select('amount')
        .eq('status', 'completed');

      const { data: trades } = await supabase
        .from('trades')
        .select('wallet_address')
        .eq('status', 'completed');

      const totalRaised = contributions?.reduce((sum, c) => sum + Number(c.amount), 0) || 0;
      const totalTrades = trades?.length || 0;
      const uniqueTraders = new Set(trades?.map(t => t.wallet_address)).size;

      setStats({
        totalRaised,
        totalTrades,
        uniqueTraders,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const targetAmount = 100;
  const progress = Math.min((stats.totalRaised / targetAmount) * 100, 100);

  return (
    <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-8">
      <h2 className="text-3xl font-black text-white mb-6">Campaign Progress</h2>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Goal: {targetAmount} SOL</span>
          <span className="text-white font-bold">{progress.toFixed(1)}%</span>
        </div>
        <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-2xl font-black text-white mt-2">
          {stats.totalRaised.toFixed(2)} SOL Raised
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-900/50 rounded-xl p-4 text-center">
          <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">{stats.totalRaised.toFixed(1)}</div>
          <div className="text-sm text-gray-400">SOL Raised</div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 text-center">
          <Activity className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">{stats.totalTrades}</div>
          <div className="text-sm text-gray-400">Total Trades</div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 text-center">
          <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">{stats.uniqueTraders}</div>
          <div className="text-sm text-gray-400">Traders</div>
        </div>
      </div>
    </div>
  );
}
