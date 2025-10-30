import { useState } from 'react';
import { Heart, Copy, CheckCircle, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

const WALLET = 'AhJ8eJHJqJVefJpVnNzc6V62ZZfJhSMPWmnCqWLx1QxG';

export function SimpleDonate() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await supabase.from('contributions').insert({
      contributor_name: name,
      amount: parseFloat(amount),
      wallet_address: '',
      message: message,
      status: 'completed',
    });

    setSuccess(true);
    setName('');
    setAmount('');
    setMessage('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-800">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 mx-auto mb-4 fill-current text-pink-600" />
        <h2 className="text-4xl font-black mb-3 text-white">
          DONATE SOL
        </h2>
        <p className="text-xl font-bold text-gray-400">Help save the festival!</p>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
        <div className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-400">Send SOL to:</div>
        <div className="flex items-center gap-3 bg-gray-900 rounded-xl p-4">
          <code className="flex-1 font-mono text-sm break-all text-gray-300">{WALLET}</code>
          <button
            onClick={handleCopy}
            className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-lg transition-all"
          >
            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-black text-xl mb-4 text-white">Register Your Support</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 font-bold focus:border-pink-600 focus:outline-none bg-gray-800 text-white placeholder-gray-500"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="SOL amount"
            step="0.01"
            min="0.01"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 font-bold focus:border-pink-600 focus:outline-none bg-gray-800 text-white placeholder-gray-500"
          />

          <div className="grid grid-cols-4 gap-2">
            {[1, 5, 10, 50].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setAmount(amt.toString())}
                className="py-2 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-pink-500 border-2 border-gray-700 hover:border-pink-600 transition-all"
              >
                {amt}
              </button>
            ))}
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a message... (optional)"
            rows={2}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 focus:border-pink-600 focus:outline-none resize-none bg-gray-800 text-white placeholder-gray-500"
          />

          {success && (
            <div className="bg-green-900 border-2 border-green-600 text-green-200 px-4 py-3 rounded-xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Thanks for supporting Sziget!
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-black py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            REGISTER DONATION
          </button>
        </form>
      </div>
    </div>
  );
}
