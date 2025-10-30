import { useEffect, useState } from 'react';
import { Target, Users, Coins, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function CampaignStats() {
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalTradeVolume, setTotalTradeVolume] = useState(0);
  const [loading, setLoading] = useState(true);

  const goal = 10000;

  const fetchStats = async () => {
    try {
      const [donationsRes, tradesRes] = await Promise.all([
        supabase.from('contributions').select('amount'),
        supabase.from('trades').select('sol_amount'),
      ]);

      const donations = donationsRes.data?.reduce((sum, c) => sum + Number(c.amount), 0) || 0;
      const donors = donationsRes.data?.length || 0;
      const tradeVolume = tradesRes.data?.reduce((sum, t) => sum + Number(t.sol_amount), 0) || 0;

      setTotalDonations(donations);
      setTotalDonors(donors);
      setTotalTradeVolume(tradeVolume);
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();

    const donationsChannel = supabase
      .channel('donations-stats')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contributions' }, fetchStats)
      .subscribe();

    const tradesChannel = supabase
      .channel('trades-stats')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'trades' }, fetchStats)
      .subscribe();

    return () => {
      supabase.removeChannel(donationsChannel);
      supabase.removeChannel(tradesChannel);
    };
  }, []);

  const progress = Math.min((totalDonations / goal) * 100, 100);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-pulse">
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Overview</h2>

      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <div>
            <div className="text-4xl font-bold text-gray-900">
              {totalDonations.toFixed(2)} SOL
            </div>
            <div className="text-gray-600 font-medium">raised in donations</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-700">
              {goal.toLocaleString()} SOL
            </div>
            <div className="text-gray-500 text-sm">goal</div>
          </div>
        </div>

        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
          </div>
        </div>

        <div className="text-right mt-2 text-sm font-semibold text-gray-600">
          {progress.toFixed(1)}% of goal reached
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-emerald-600" />
            <div className="text-sm font-semibold text-gray-600">Donors</div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{totalDonors}</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <div className="text-sm font-semibold text-gray-600">Trade Volume</div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{totalTradeVolume.toFixed(1)}</div>
          <div className="text-xs text-gray-500">SOL</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200 col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-emerald-600" />
            <div className="text-sm font-semibold text-gray-600">Remaining</div>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {Math.max(0, goal - totalDonations).toFixed(1)}
          </div>
          <div className="text-xs text-gray-500">SOL needed</div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
        <div className="flex items-center gap-2 mb-1">
          <Coins className="w-4 h-4" />
          <p className="font-semibold">100% of donations go to Sziget Festival</p>
        </div>
        <p className="text-blue-800">
          All funds raised directly support keeping the festival alive for future generations.
        </p>
      </div>
    </div>
  );
}
