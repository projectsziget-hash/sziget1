import { TrendingUp, TrendingDown } from 'lucide-react';

export function TokenPrice() {
  const price = 0.0042;
  const priceChange = 12.5;
  const marketCap = 420000;
  const volume24h = 89000;

  return (
    <div className="bg-[#e3c7ff]/20 rounded-3xl p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-500 text-sm font-light mb-2">$SZIGET Price</h3>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-light text-gray-900">${price}</span>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              priceChange > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {priceChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm font-light">{Math.abs(priceChange)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-gray-500 text-sm font-light mb-1">Market Cap</div>
          <div className="text-2xl font-light text-gray-900">${marketCap.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-light mb-1">24h Volume</div>
          <div className="text-2xl font-light text-gray-900">${volume24h.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
