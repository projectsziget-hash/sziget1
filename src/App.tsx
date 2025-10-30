import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Safety } from './pages/Safety';
import { Music } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>

        <footer className="bg-black border-t-2 border-pink-500 text-white py-16 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Music className="w-16 h-16 mx-auto mb-4 text-pink-500" />
            <p className="text-3xl font-black mb-3 text-white">
              SZIGET FESTIVAL '26
            </p>
            <p className="text-base font-bold text-pink-400">
              Powered by Solana Blockchain
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
