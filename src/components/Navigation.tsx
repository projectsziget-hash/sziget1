import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light text-gray-900 hover:text-[#a680ff] transition-colors">
            $SZIGET
          </Link>

          <div className="flex items-center gap-12">
            <Link to="/" className="text-gray-600 hover:text-[#a680ff] transition-colors font-light">
              Home
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-[#a680ff] transition-colors font-light">
              Events
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-[#a680ff] transition-colors font-light">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#a680ff] transition-colors font-light">
              About
            </Link>
            <Link to="/safety" className="text-gray-600 hover:text-[#a680ff] transition-colors font-light">
              Safety
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
