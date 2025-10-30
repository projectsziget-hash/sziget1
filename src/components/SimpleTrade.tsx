import { useState } from 'react';
import { TrendingUp, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function SimpleTrade() {
  const [type, setType] = useState<'buy' | 'sell'>('buy');
  const [name, setName] = useState('');
  const [wallet, setWallet] = useState('');
  const [solAmount, setSolAmount] = useState('');
  const [success, setSuccess] = useState(false);

  const price = 0.00042;
  const tokenAmount = solAmount ? (parseFloat(solAmount) / price).toFixed(0) : '0';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await supabase.from('trades').insert({
      trader_name: name,
      wallet_address: wallet,
      trade_type: type,
      sol_amount: parseFloat(solAmount),
      sziget_amount: parseFloat(tokenAmount),
      price_per_token: price,
      status: 'completed',
    });

    setSuccess(true);
    setName('');
    setWallet('');
    setSolAmount('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-800">
      <div className="text-center mb-8">
        <TrendingUp className="w-16 h-16 mx-auto mb-4 text-pink-600" />
        <h2 className="text-4xl font-black mb-3 text-white">
          TRADE $SZIGET
        </h2>
        <div className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
          {price} SOL per token
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setType('buy')}
          className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all border-2 ${
            type === 'buy'
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white border-green-500 shadow-lg scale-105'
              : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700'
          }`}
        >
          BUY
        </button>
        <button
          onClick={() => setType('sell')}
          className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all border-2 ${
            type === 'sell'
              ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-red-500 shadow-lg scale-105'
              : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700'
          }`}
        >
          SELL
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 font-bold focus:border-pink-600 focus:outline-none bg-gray-800 text-white placeholder-gray-500"
        />

        <input
          type="text"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="Your Solana wallet"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 font-mono text-sm focus:border-pink-600 focus:outline-none bg-gray-800 text-white placeholder-gray-500"
        />

        <input
          type="number"
          value={solAmount}
          onChange={(e) => setSolAmount(e.target.value)}
          placeholder="SOL amount"
          step="0.01"
          min="0.01"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 font-bold focus:border-pink-600 focus:outline-none bg-gray-800 text-white placeholder-gray-500"
        />

        <div className="grid grid-cols-4 gap-2">
          {[0.5, 1, 5, 10].map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setSolAmount(amt.toString())}
              className="py-2 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-pink-500 border-2 border-gray-700 hover:border-pink-600 transition-all"
            >
              {amt}
            </button>
          ))}
        </div>

        {solAmount && (
          <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-sm font-bold text-gray-400 mb-2">You will {type}</div>
            <div className="text-4xl font-black text-white">{tokenAmount}</div>
            <div className="text-xl font-bold text-gray-400">$SZIGET tokens</div>
          </div>
        )}

        {success && (
          <div className="bg-green-900 border-2 border-green-600 text-green-200 px-4 py-3 rounded-xl font-bold flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Trade successful!
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-black py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
        >
          {type === 'buy' ? 'BUY TOKENS' : 'SELL TOKENS'}
        </button>
      </form>
    </div>
  );
}
