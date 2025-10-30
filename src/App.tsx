import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Safety } from './pages/Safety';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-white border-t border-gray-100 py-16 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-2xl font-light text-gray-900 mb-3">
              SZIGET FESTIVAL '26
            </p>
            <p className="text-sm font-light text-gray-500">
              Powered by Solana Blockchain
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
