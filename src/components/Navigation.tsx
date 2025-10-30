import { Link } from 'react-router-dom';
import { Home, Calendar, Info, HelpCircle, Shield } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-white">
            SZIGET <span className="text-pink-600">'26</span>
          </Link>

          <div className="flex gap-6">
            <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Home className="w-5 h-5" />
              <span className="hidden md:inline font-bold">Home</span>
            </Link>
            <Link to="/events" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Calendar className="w-5 h-5" />
              <span className="hidden md:inline font-bold">Events</span>
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Info className="w-5 h-5" />
              <span className="hidden md:inline font-bold">About</span>
            </Link>
            <Link to="/how-it-works" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <HelpCircle className="w-5 h-5" />
              <span className="hidden md:inline font-bold">How It Works</span>
            </Link>
            <Link to="/safety" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Shield className="w-5 h-5" />
              <span className="hidden md:inline font-bold">Safety</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
