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
    <div className="bg-[#c7dcff]/20 rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
        <Heart className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#a680ff] shrink-0" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900">Make a Direct Donation</h2>
      </div>

      <p className="text-sm sm:text-base text-gray-600 font-light mb-5 sm:mb-6">
        Support Sziget Festival 2026 directly. 100% of your donation goes to the cause.
      </p>

      <div className="space-y-3.5 sm:space-y-4">
        <div>
          <label className="text-gray-500 font-light text-xs sm:text-sm mb-1.5 sm:mb-2 block">Your Name (Optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Anonymous"
            className="w-full bg-white text-gray-900 text-sm sm:text-base rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#a680ff] border border-gray-100"
          />
        </div>

        <div>
          <label className="text-gray-500 font-light text-xs sm:text-sm mb-1.5 sm:mb-2 block">Donation Amount (SOL)</label>
          <div className="grid grid-cols-4 gap-2 mb-2.5 sm:mb-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset.toString())}
                className="bg-white hover:bg-[#a680ff] text-gray-900 hover:text-white font-light py-2 sm:py-2.5 rounded-xl transition border border-gray-100 text-xs sm:text-sm"
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
            className="w-full bg-white text-gray-900 text-sm sm:text-base rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#a680ff] border border-gray-100"
          />
        </div>

        <div>
          <label className="text-gray-500 font-light text-xs sm:text-sm mb-1.5 sm:mb-2 block">Message (Optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your support..."
            rows={3}
            className="w-full bg-white text-gray-900 text-sm sm:text-base rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#a680ff] resize-none border border-gray-100"
          />
        </div>

        <button
          onClick={handleDonate}
          disabled={!amount || parseFloat(amount) <= 0}
          className="w-full bg-[#a680ff] hover:bg-[#9670ef] disabled:bg-gray-200 disabled:text-gray-400 text-white font-light py-3 sm:py-3.5 md:py-4 rounded-2xl transition-all text-base sm:text-lg"
        >
          Connect Wallet to Donate
        </button>
      </div>
    </div>
  );
}
