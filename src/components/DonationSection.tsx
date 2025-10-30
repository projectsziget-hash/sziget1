import { useState } from 'react';
import { Heart, Wallet, Copy, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const DONATION_WALLET = 'SziGetFest1va1HunGary2o25SaveTheMus1cF3st1va1';

export function DonationSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DONATION_WALLET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const { error: insertError } = await supabase
        .from('contributions')
        .insert({
          contributor_name: name.trim(),
          amount: parseFloat(amount),
          wallet_address: '',
          message: message.trim(),
          status: 'completed',
        });

      if (insertError) throw insertError;

      setSuccess(`Thank you ${name}! Your donation has been registered.`);
      setName('');
      setAmount('');
      setMessage('');

      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      setError('Failed to register donation. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [0.5, 1, 5, 10];

  return (
    <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white border border-rose-400">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <h2 className="text-2xl font-bold">Direct SOL Donations</h2>
      </div>

      <p className="mb-6 text-white text-opacity-90 leading-relaxed">
        Send SOL directly to our donation wallet. Every contribution helps save Sziget Festival!
      </p>

      <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Wallet className="w-5 h-5" />
          <div className="text-sm font-semibold uppercase tracking-wide">Donation Wallet</div>
        </div>
        <div className="flex items-center gap-3">
          <code className="flex-1 text-sm font-mono break-all">
            {DONATION_WALLET}
          </code>
          <button
            onClick={handleCopy}
            className="flex-shrink-0 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all"
            title="Copy address"
          >
            {copied ? (
              <CheckCircle className="w-5 h-5 text-green-300" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 text-gray-900">
        <h3 className="font-bold text-lg mb-4">Register Your Donation</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="donor-name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="donor-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="donor-amount" className="block text-sm font-semibold text-gray-700 mb-2">
              SOL Amount
            </label>
            <input
              type="number"
              id="donor-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0.01"
              step="0.01"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
              placeholder="0.00"
            />
            <div className="flex gap-2 mt-3">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setAmount(amt.toString())}
                  className="flex-1 px-3 py-2 bg-gray-100 hover:bg-rose-100 text-gray-700 hover:text-rose-700 rounded-lg font-medium transition-all text-sm"
                >
                  {amt} SOL
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="donor-message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="donor-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
              placeholder="Why does Sziget matter to you?"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Registering...
              </span>
            ) : (
              'Register Donation'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
