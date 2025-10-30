import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

export function Safety() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">Safety & Security</h1>
        <p className="text-xl text-gray-400">
          Your security is our top priority
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/30 rounded-2xl p-10 mb-12">
        <div className="flex items-start gap-6">
          <Shield className="w-12 h-12 text-green-500 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Built on Solana</h2>
            <p className="text-gray-300 text-lg">
              $SZGT leverages Solana's industry-leading blockchain technology, providing
              fast, secure, and low-cost transactions. The platform has been battle-tested
              by billions of dollars in daily trading volume across the ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Lock className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Smart Contract Security</h3>
          <p className="text-gray-400 mb-4">
            All smart contracts are audited and follow best practices. Code is open-source
            and verifiable on-chain for complete transparency.
          </p>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold">Audited & Verified</span>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Eye className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Full Transparency</h3>
          <p className="text-gray-400 mb-4">
            Every transaction is recorded on the blockchain. Track funds, verify
            contributions, and see exactly where your money goes.
          </p>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold">100% Transparent</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Best Practices</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Use Official Links Only</h4>
              <p className="text-gray-400">
                Always access the platform through official channels. Bookmark our URL
                and verify you're on the correct site before connecting your wallet.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Protect Your Private Keys</h4>
              <p className="text-gray-400">
                Never share your seed phrase or private keys with anyone. We will never
                ask for this information. Store them securely offline.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Start Small</h4>
              <p className="text-gray-400">
                If you're new to crypto, start with small amounts until you're comfortable
                with the platform and understand how it works.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Enable Security Features</h4>
              <p className="text-gray-400">
                Use hardware wallets when possible, enable two-factor authentication,
                and keep your wallet software updated.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-8 mb-12">
        <div className="flex gap-4">
          <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Important Disclaimer</h3>
            <p className="text-gray-300 mb-4">
              Cryptocurrency trading carries risk. Never invest more than you can afford
              to lose. $SZGT is a memecoin created to support Sziget Festival 2026,
              and token value may fluctuate significantly.
            </p>
            <p className="text-gray-300">
              This is not financial advice. Always do your own research and understand
              the risks before trading any cryptocurrency.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">
        <div className="flex items-start gap-6">
          <FileText className="w-12 h-12 text-blue-500 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Questions?</h2>
            <p className="text-gray-300 text-lg mb-6">
              If you have any security concerns or questions about the platform,
              please reach out to our team. We're committed to maintaining the
              highest security standards and addressing any issues promptly.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition">
              Contact Security Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
