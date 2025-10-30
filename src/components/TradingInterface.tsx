import { useState } from 'react';
import { ArrowUpDown, Wallet } from 'lucide-react';

export function TradingInterface() {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [solAmount, setSolAmount] = useState('');
  const [szgtAmount, setSzgtAmount] = useState('');

  const currentPrice = 0.0042;

  const handleSolChange = (value: string) => {
    setSolAmount(value);
    if (value) {
      setSzgtAmount((parseFloat(value) / currentPrice).toFixed(2));
    } else {
      setSzgtAmount('');
    }
  };

  const handleSzgtChange = (value: string) => {
    setSzgtAmount(value);
    if (value) {
      setSolAmount((parseFloat(value) * currentPrice).toFixed(4));
    } else {
      setSolAmount('');
    }
  };

  const handleTrade = () => {
    alert(`${tradeType === 'buy' ? 'Buying' : 'Selling'} ${szgtAmount} $SZGT for ${solAmount} SOL`);
  };

  return (
    <div className="bg-[#cdc7ff]/20 rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto hover:shadow-lg transition-shadow">
      <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
        <button
          onClick={() => setTradeType('buy')}
          className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl font-light text-sm sm:text-base transition ${
            tradeType === 'buy'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setTradeType('sell')}
          className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl font-light text-sm sm:text-base transition ${
            tradeType === 'sell'
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <label className="text-gray-500 text-xs sm:text-sm font-light">You Pay</label>
            <span className="text-gray-400 text-xs sm:text-sm font-light">Balance: 0 SOL</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              type="number"
              value={solAmount}
              onChange={(e) => handleSolChange(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-gray-900 text-2xl sm:text-3xl font-light outline-none flex-1 min-w-0"
            />
            <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shrink-0">
              <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-[#a680ff]" />
              <span className="font-light text-gray-900 text-sm sm:text-base">SOL</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-100 p-2.5 sm:p-3 rounded-full">
            <ArrowUpDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <label className="text-gray-500 text-xs sm:text-sm font-light">You Receive</label>
            <span className="text-gray-400 text-xs sm:text-sm font-light">Balance: 0 $SZGT</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              type="number"
              value={szgtAmount}
              onChange={(e) => handleSzgtChange(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-gray-900 text-2xl sm:text-3xl font-light outline-none flex-1 min-w-0"
            />
            <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shrink-0">
              <span className="text-xl sm:text-2xl">🎪</span>
              <span className="font-light text-gray-900 text-sm sm:text-base">$SZGT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 space-y-2 text-xs sm:text-sm border border-gray-100">
        <div className="flex justify-between text-gray-500 font-light">
          <span>Price</span>
          <span className="text-gray-900">{currentPrice} SOL</span>
        </div>
        <div className="flex justify-between text-gray-500 font-light">
          <span>Fee (1%)</span>
          <span className="text-gray-900">{(parseFloat(solAmount || '0') * 0.01).toFixed(4)} SOL</span>
        </div>
      </div>

      <button
        onClick={handleTrade}
        disabled={!solAmount || parseFloat(solAmount) <= 0}
        className="w-full bg-[#a680ff] hover:bg-[#9670ef] disabled:bg-gray-200 disabled:text-gray-400 text-white font-light py-3 sm:py-4 rounded-2xl transition-all text-base sm:text-lg"
      >
        Connect Wallet to Trade
      </button>
    </div>
  );
}
