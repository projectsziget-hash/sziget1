import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-black border-b-2 border-pink-500 sticky top-0 z-50 backdrop-blur-sm bg-black/90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Music className="w-10 h-10 text-pink-500" />
            <span className="text-3xl font-black text-white">$SZIGET</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-200 hover:text-pink-400 transition font-bold">
              Home
            </Link>
            <Link to="/events" className="text-gray-200 hover:text-pink-400 transition font-bold">
              Events
            </Link>
            <Link to="/how-it-works" className="text-gray-200 hover:text-pink-400 transition font-bold">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-200 hover:text-pink-400 transition font-bold">
              About
            </Link>
            <Link to="/safety" className="text-gray-200 hover:text-pink-400 transition font-bold">
              Safety
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
