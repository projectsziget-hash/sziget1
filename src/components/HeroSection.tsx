export function HeroSection() {
  return (
    <div className="relative bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-light text-gray-900 leading-tight tracking-tight">
            Trade for
          </h1>
          <h1 className="text-8xl md:text-9xl font-light text-gray-900 leading-tight tracking-tight">
            a <span className="text-[#a680ff]">Cause</span>
          </h1>

          <div className="pt-8 space-y-2">
            <p className="text-xl text-gray-600 font-light">Festival Supporter</p>
            <p className="text-xl text-gray-600 font-light">Memecoin Trader</p>
            <p className="text-xl text-gray-600 font-light">Community Builder</p>
          </div>
        </div>

        <div className="mt-20 text-gray-400 text-sm font-light">
          Scroll to know more
        </div>
      </div>
    </div>
  );
}
