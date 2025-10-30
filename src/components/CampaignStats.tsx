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

  const targetAmount = 100000;
  const progress = Math.min((stats.totalRaised / targetAmount) * 100, 100);

  return (
    <div className="bg-[#ffe2c7]/20 rounded-3xl p-8 hover:shadow-lg transition-shadow">
      <h2 className="text-3xl font-light text-gray-900 mb-6">Campaign Progress</h2>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 font-light">Goal: {targetAmount.toLocaleString()} SOL</span>
          <span className="text-gray-900 font-light">{progress.toFixed(1)}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#a680ff] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-3xl font-light text-gray-900 mt-3">
          {stats.totalRaised.toFixed(2)} SOL Raised
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 text-center border border-gray-100">
          <DollarSign className="w-8 h-8 text-[#a680ff] mx-auto mb-2" />
          <div className="text-2xl font-light text-gray-900">{stats.totalRaised.toFixed(1)}</div>
          <div className="text-sm text-gray-500 font-light">SOL Raised</div>
        </div>

        <div className="bg-white rounded-2xl p-5 text-center border border-gray-100">
          <Activity className="w-8 h-8 text-[#a680ff] mx-auto mb-2" />
          <div className="text-2xl font-light text-gray-900">{stats.totalTrades}</div>
          <div className="text-sm text-gray-500 font-light">Total Trades</div>
        </div>

        <div className="bg-white rounded-2xl p-5 text-center border border-gray-100">
          <Users className="w-8 h-8 text-[#a680ff] mx-auto mb-2" />
          <div className="text-2xl font-light text-gray-900">{stats.uniqueTraders}</div>
          <div className="text-sm text-gray-500 font-light">Traders</div>
        </div>
      </div>
    </div>
  );
}
