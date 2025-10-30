import { useState } from 'react';
import { ArrowDownUp, Loader2, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function TradingInterface() {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [solAmount, setSolAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const currentPrice = 0.00042;

  const calculateTokenAmount = (sol: string) => {
    const solNum = parseFloat(sol) || 0;
    return (solNum / currentPrice).toFixed(2);
  };

  const handleTrade = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const solNum = parseFloat(solAmount);
      const szigetNum = parseFloat(calculateTokenAmount(solAmount));

      const { error: insertError } = await supabase
        .from('trades')
        .insert({
          trader_name: name.trim(),
          wallet_address: walletAddress.trim(),
          trade_type: tradeType,
          sol_amount: solNum,
          sziget_amount: szigetNum,
          price_per_token: currentPrice,
          status: 'completed',
        });

      if (insertError) throw insertError;

      setSuccess(`Successfully ${tradeType === 'buy' ? 'bought' : 'sold'} ${szigetNum} SZIGET tokens!`);
      setName('');
      setWalletAddress('');
      setSolAmount('');

      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      setError('Failed to process trade. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [0.1, 0.5, 1, 5];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full p-3">
          <ArrowDownUp className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Trade SZIGET Token</h2>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTradeType('buy')}
          className={`flex-1 py-3 rounded-lg font-bold transition-all ${
            tradeType === 'buy'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Buy SZIGET
        </button>
        <button
          onClick={() => setTradeType('sell')}
          className={`flex-1 py-3 rounded-lg font-bold transition-all ${
            tradeType === 'sell'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Sell SZIGET
        </button>
      </div>

      <form onSubmit={handleTrade} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="wallet" className="block text-sm font-semibold text-gray-700 mb-2">
            Solana Wallet Address
          </label>
          <input
            type="text"
            id="wallet"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-mono text-sm"
            placeholder="Your Solana wallet address"
          />
        </div>

        <div>
          <label htmlFor="sol" className="block text-sm font-semibold text-gray-700 mb-2">
            SOL Amount
          </label>
          <input
            type="number"
            id="sol"
            value={solAmount}
            onChange={(e) => setSolAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="0.00"
          />
          <div className="flex gap-2 mt-3">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setSolAmount(amt.toString())}
                className="flex-1 px-3 py-2 bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 rounded-lg font-medium transition-all text-sm"
              >
                {amt} SOL
              </button>
            ))}
          </div>
        </div>

        {solAmount && (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-1">You will {tradeType}</div>
                <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  {calculateTokenAmount(solAmount)} SZIGET
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Price per token</div>
                <div className="text-lg font-bold text-gray-900">{currentPrice} SOL</div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing Trade...
            </span>
          ) : (
            `${tradeType === 'buy' ? 'Buy' : 'Sell'} SZIGET Tokens`
          )}
        </button>
      </form>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
        <p className="font-semibold mb-1">How it works:</p>
        <p>
          {tradeType === 'buy'
            ? 'Send SOL to acquire SZIGET tokens. All proceeds support Sziget Festival!'
            : 'Sell your SZIGET tokens back to SOL. Prices are determined by market activity.'}
        </p>
      </div>
    </div>
  );
}
