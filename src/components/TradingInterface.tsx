import { useState } from 'react';
import { ArrowUpDown, Wallet } from 'lucide-react';

export function TradingInterface() {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [solAmount, setSolAmount] = useState('');
  const [szigetAmount, setSzigetAmount] = useState('');

  const currentPrice = 0.0042;

  const handleSolChange = (value: string) => {
    setSolAmount(value);
    if (value) {
      setSzigetAmount((parseFloat(value) / currentPrice).toFixed(2));
    } else {
      setSzigetAmount('');
    }
  };

  const handleSzigetChange = (value: string) => {
    setSzigetAmount(value);
    if (value) {
      setSolAmount((parseFloat(value) * currentPrice).toFixed(4));
    } else {
      setSolAmount('');
    }
  };

  const handleTrade = () => {
    alert(`${tradeType === 'buy' ? 'Buying' : 'Selling'} ${szigetAmount} $SZIGET for ${solAmount} SOL`);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTradeType('buy')}
          className={`flex-1 py-3 px-6 rounded-xl font-bold transition ${
            tradeType === 'buy'
              ? 'bg-green-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setTradeType('sell')}
          className={`flex-1 py-3 px-6 rounded-xl font-bold transition ${
            tradeType === 'sell'
              ? 'bg-red-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-400 text-sm">You Pay</label>
            <span className="text-gray-400 text-sm">Balance: 0 SOL</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={solAmount}
              onChange={(e) => handleSolChange(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-white text-2xl font-bold outline-none flex-1"
            />
            <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
              <Wallet className="w-5 h-5 text-purple-400" />
              <span className="font-bold text-white">SOL</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-800 p-2 rounded-full">
            <ArrowUpDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-400 text-sm">You Receive</label>
            <span className="text-gray-400 text-sm">Balance: 0 $SZIGET</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={szigetAmount}
              onChange={(e) => handleSzigetChange(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-white text-2xl font-bold outline-none flex-1"
            />
            <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
              <span className="text-2xl">🎪</span>
              <span className="font-bold text-white">$SZIGET</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-4 mb-6 space-y-2 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Price</span>
          <span className="text-white">{currentPrice} SOL</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Fee (1%)</span>
          <span className="text-white">{(parseFloat(solAmount || '0') * 0.01).toFixed(4)} SOL</span>
        </div>
      </div>

      <button
        onClick={handleTrade}
        disabled={!solAmount || parseFloat(solAmount) <= 0}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-4 rounded-xl transition"
      >
        Connect Wallet to Trade
      </button>
    </div>
  );
}
