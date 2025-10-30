import { Shield, Lock, Eye, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

export function Safety() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 mx-auto mb-6 text-pink-600" />
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            SAFETY & SECURITY
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your security and trust are our top priorities
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-pink-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-black text-white mb-4">Blockchain Security</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  All transactions are secured by the Solana blockchain, one of the most advanced and secure blockchain networks in the world. Every donation and trade is recorded on an immutable, transparent ledger that cannot be altered or tampered with.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The decentralized nature of blockchain technology means there's no single point of failure, and all transactions are cryptographically secured.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <Eye className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Full Transparency</h3>
              <p className="text-gray-400 leading-relaxed">
                All contributions and trades are publicly viewable on the Solana blockchain. You can verify every transaction independently using blockchain explorers. We believe in complete transparency with our community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <Lock className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Secure Wallet</h3>
              <p className="text-gray-400 leading-relaxed">
                Our official Solana wallet is protected by multi-signature security and cold storage practices. Funds are managed by trusted custodians with extensive experience in cryptocurrency security.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-pink-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Safety Guidelines</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Always verify wallet addresses</h4>
                    <p className="text-gray-400">Double-check you're sending SOL to our official wallet address. Never trust addresses from unofficial sources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Use secure wallet providers</h4>
                    <p className="text-gray-400">Only use reputable Solana wallet providers like Phantom, Solflare, or Ledger hardware wallets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Never share private keys</h4>
                    <p className="text-gray-400">We will never ask for your private keys or seed phrases. Keep this information completely private.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Beware of scams</h4>
                    <p className="text-gray-400">Only interact with our official website and verified social media accounts. Report any suspicious activity immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 mb-8">
          <div className="flex items-start gap-4">
            <FileText className="w-8 h-8 text-pink-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Data Privacy</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We collect minimal personal information and never share it with third parties. Your name and wallet address are only used for transaction records and supporter recognition.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We comply with GDPR and international data protection regulations. You have the right to request deletion of your personal information at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Questions or Concerns?</h2>
          <p className="text-lg leading-relaxed mb-6">
            If you have any questions about security, safety, or need to report suspicious activity, please contact our support team immediately.
          </p>
          <div className="inline-block bg-black/30 px-6 py-3 rounded-full font-bold">
            security@sziget-support.com
          </div>
        </div>
      </div>
    </div>
  );
}
