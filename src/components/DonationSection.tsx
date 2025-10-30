import { useState } from 'react';
import { Heart } from 'lucide-react';

export function DonationSection() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const presetAmounts = [1, 5, 10, 25];

  const handleDonate = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    alert(`Thank you for donating ${amount} SOL!`);
  };

  return (
    <div className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 border-2 border-pink-500 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-10 h-10 text-pink-500" />
        <h2 className="text-3xl font-black text-white">Make a Direct Donation</h2>
      </div>

      <p className="text-gray-200 font-medium mb-6">
        Support Sziget Festival 2026 directly. 100% of your donation goes to the cause.
      </p>

      <div className="space-y-4">
        <div>
          <label className="text-gray-300 font-bold text-sm mb-2 block">Your Name (Optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Anonymous"
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="text-gray-300 font-bold text-sm mb-2 block">Donation Amount (SOL)</label>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset.toString())}
                className="bg-gray-800 hover:bg-pink-600 text-white font-bold py-2 rounded-lg transition border border-gray-700 hover:border-pink-500"
              >
                {preset} SOL
              </button>
            ))}
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Custom amount"
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="text-gray-300 font-bold text-sm mb-2 block">Message (Optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your support..."
            rows={3}
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          />
        </div>

        <button
          onClick={handleDonate}
          disabled={!amount || parseFloat(amount) <= 0}
          className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-black py-5 rounded-xl transition-all shadow-lg hover:shadow-pink-500/50 text-lg"
        >
          Connect Wallet to Donate
        </button>
      </div>
    </div>
  );
}
