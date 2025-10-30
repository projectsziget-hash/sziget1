import { TrendingUp, TrendingDown } from 'lucide-react';

export function TokenPrice() {
  const price = 0.0042;
  const priceChange = 12.5;
  const marketCap = 420000;
  const volume24h = 89000;

  return (
    <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-purple-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-600 text-sm font-medium mb-2 uppercase tracking-wider">$SZGT Price</h3>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">${price}</span>
            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full animate-pulse ${
              priceChange > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {priceChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm font-bold">{Math.abs(priceChange)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="transform group-hover:scale-105 transition-transform duration-300">
          <div className="text-gray-600 text-xs font-medium mb-2 uppercase tracking-wider">Market Cap</div>
          <div className="text-2xl font-bold text-gray-900">${marketCap.toLocaleString()}</div>
        </div>
        <div className="transform group-hover:scale-105 transition-transform duration-300 delay-75">
          <div className="text-gray-600 text-xs font-medium mb-2 uppercase tracking-wider">24h Volume</div>
          <div className="text-2xl font-bold text-gray-900">${volume24h.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
