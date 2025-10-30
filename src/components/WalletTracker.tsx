import { Wallet, Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

export function WalletTracker() {
  const [copied, setCopied] = useState(false);
  const walletAddress = 'AhJ8eJHJqJVefJpVnNzc6V62ZZfJhSMPWmnCqWLx1QxG';
  const balance = 1234567.89;
  const transactions = 45678;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-blue-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <Wallet className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Festival Fund Wallet</h3>
          <p className="text-sm text-gray-600">100% Transparent</p>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">Wallet Address</span>
          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
              title="Copy address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-gray-600" />
              )}
            </button>
            <a
              href={`https://solscan.io/account/${walletAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
              title="View on Solscan"
            >
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </a>
          </div>
        </div>
        <div className="font-mono text-sm text-gray-900 break-all">
          {walletAddress}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 transform group-hover:scale-105 transition-transform duration-300">
          <div className="text-gray-600 text-xs font-medium mb-2 uppercase tracking-wider">Total Raised</div>
          <div className="text-3xl font-black text-gray-900">
            ${balance.toLocaleString()}
          </div>
          <div className="text-xs text-green-600 font-medium mt-1">+12.5% today</div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 transform group-hover:scale-105 transition-transform duration-300 delay-75">
          <div className="text-gray-600 text-xs font-medium mb-2 uppercase tracking-wider">Transactions</div>
          <div className="text-3xl font-black text-gray-900">
            {transactions.toLocaleString()}
          </div>
          <div className="text-xs text-blue-600 font-medium mt-1">All on-chain</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-blue-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 font-medium">Funds Allocation</span>
          <span className="text-gray-900 font-bold">100% to Festival</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}
