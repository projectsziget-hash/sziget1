import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/about', label: 'About' },
    { path: '/safety', label: 'Safety' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-black tracking-tight transition-all duration-300 hover:scale-105 ${
              scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}
          >
            $SZGT
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                } ${
                  location.pathname === item.path ? 'font-bold' : ''
                }`}
                style={{
                  animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />
                )}
              </Link>
            ))}
            <Link
              to="/"
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                scrolled
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'bg-white text-purple-600'
              }`}
            >
              Trade Now
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl animate-slideDown">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 font-medium py-2 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
