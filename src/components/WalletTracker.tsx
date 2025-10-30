import { useState, useEffect } from 'react';
import { Wallet, TrendingUp, Copy, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';

const WALLET_ADDRESS = 'AhJ8eJHJqJVefJpVnNzc6V62ZZfJhSMPWmnCqWLx1QxG';

export function WalletTracker() {
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.mainnet-beta.solana.com`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getBalance',
          params: [WALLET_ADDRESS]
        })
      });
      const data = await response.json();
      if (data.result?.value !== undefined) {
        setBalance(data.result.value / 1000000000);
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
    const interval = setInterval(fetchBalance, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openExplorer = () => {
    window.open(`https://solscan.io/account/${WALLET_ADDRESS}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-800">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-4 rounded-2xl">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-white mb-1">Official Wallet</h2>
            <p className="text-gray-400 font-bold">Live Solana Balance</p>
          </div>
        </div>
        <button
          onClick={fetchBalance}
          disabled={loading}
          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-all border border-gray-700"
        >
          <RefreshCw className={`w-5 h-5 text-gray-400 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-2xl p-8 mb-6 border border-pink-600/20">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="w-6 h-6 text-pink-600" />
          <span className="text-gray-400 font-bold text-lg">Current Balance</span>
        </div>
        <div className="text-6xl md:text-7xl font-black text-white mb-2">
          {loading ? (
            <div className="animate-pulse bg-gray-800 h-16 w-64 rounded-lg"></div>
          ) : (
            <>{balance?.toFixed(2) || '0.00'} <span className="text-pink-600">SOL</span></>
          )}
        </div>
        {!loading && balance !== null && (
          <div className="text-gray-400 text-lg font-bold">
            ≈ ${(balance * 150).toLocaleString()} USD
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">
            Wallet Address
          </div>
          <div className="flex items-center gap-3">
            <code className="flex-1 font-mono text-sm break-all text-gray-300 bg-gray-800 px-4 py-3 rounded-xl">
              {WALLET_ADDRESS}
            </code>
            <button
              onClick={handleCopy}
              className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-xl transition-all flex-shrink-0"
              title="Copy address"
            >
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={openExplorer}
            className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-black py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View on Solscan
          </button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-black text-white mb-1">Solana</div>
            <div className="text-sm text-gray-500 font-bold">Blockchain</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white mb-1">Real-time</div>
            <div className="text-sm text-gray-500 font-bold">Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
}
