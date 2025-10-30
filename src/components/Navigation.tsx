import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Music className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-black text-white">$SZIGET</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link to="/events" className="text-gray-300 hover:text-white transition">
              Events
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-white transition">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link to="/safety" className="text-gray-300 hover:text-white transition">
              Safety
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
