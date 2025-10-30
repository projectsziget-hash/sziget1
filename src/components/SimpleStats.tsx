import { useEffect, useState } from 'react';
import { Coins, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function SimpleStats() {
  const [totalRaised, setTotalRaised] = useState(0);
  const [supporters, setSupporters] = useState(0);
  const [loading, setLoading] = useState(true);

  const goal = 10500;

  const fetchStats = async () => {
    try {
      const { data } = await supabase.from('contributions').select('amount');
      const total = data?.reduce((sum, c) => sum + Number(c.amount), 0) || 0;
      const count = data?.length || 0;

      setTotalRaised(total);
      setSupporters(count);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const channel = supabase
      .channel('stats-updates')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contributions' }, fetchStats)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const progress = Math.min((totalRaised / goal) * 100, 100);

  if (loading) {
    return <div className="animate-pulse h-64 bg-gray-900 rounded-3xl border border-gray-800"></div>;
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-800">
      <div className="text-center mb-8">
        <div className="text-6xl md:text-7xl font-black mb-2 text-white">
          {totalRaised.toFixed(0)} SOL
        </div>
        <div className="text-2xl font-bold text-gray-400">
          of {goal.toLocaleString()} SOL goal
        </div>
      </div>

      <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden mb-8 border border-gray-700">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
          {progress.toFixed(0)}%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
          <Users className="w-10 h-10 mx-auto mb-3 text-gray-400" />
          <div className="text-4xl font-black text-white">{supporters}</div>
          <div className="font-bold text-gray-400">Supporters</div>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
          <Coins className="w-10 h-10 mx-auto mb-3 text-gray-400" />
          <div className="text-4xl font-black text-white">{(goal - totalRaised).toFixed(0)}</div>
          <div className="font-bold text-gray-400">SOL to go</div>
        </div>
      </div>
    </div>
  );
}
