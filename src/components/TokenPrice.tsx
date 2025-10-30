import { TrendingUp, TrendingDown } from 'lucide-react';

export function TokenPrice() {
  const price = 0.0042;
  const priceChange = 12.5;
  const marketCap = 420000;
  const volume24h = 89000;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-400 text-sm mb-1">$SZIGET Price</h3>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-white">${price}</span>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              priceChange > 0 ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
            }`}>
              {priceChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm font-bold">{Math.abs(priceChange)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">Market Cap</div>
          <div className="text-xl font-bold text-white">${marketCap.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">24h Volume</div>
          <div className="text-xl font-bold text-white">${volume24h.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
