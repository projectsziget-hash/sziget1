import { TrendingUp, TrendingDown } from 'lucide-react';

export function TokenPrice() {
  const price = 0.0042;
  const priceChange = 12.5;
  const marketCap = 420000;
  const volume24h = 89000;

  return (
    <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-purple-100">
      <div className="mb-5 sm:mb-6">
        <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-2 uppercase tracking-wider">$SZGT Price</h3>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">${price}</span>
          <div className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full animate-pulse ${
            priceChange > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {priceChange > 0 ? <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            <span className="text-xs sm:text-sm font-bold">{Math.abs(priceChange)}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className="transform group-hover:scale-105 transition-transform duration-300">
          <div className="text-gray-600 text-xs font-medium mb-1.5 sm:mb-2 uppercase tracking-wider">Market Cap</div>
          <div className="text-xl sm:text-2xl font-bold text-gray-900">${(marketCap/1000).toFixed(0)}K</div>
        </div>
        <div className="transform group-hover:scale-105 transition-transform duration-300 delay-75">
          <div className="text-gray-600 text-xs font-medium mb-1.5 sm:mb-2 uppercase tracking-wider">24h Volume</div>
          <div className="text-xl sm:text-2xl font-bold text-gray-900">${(volume24h/1000).toFixed(0)}K</div>
        </div>
      </div>
    </div>
  );
}
