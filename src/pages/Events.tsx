import { Calendar, MapPin, Music, Ticket } from 'lucide-react';

export function Events() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">Sziget Festival 2026</h1>
        <p className="text-xl text-gray-400">
          One of Europe's largest music and cultural festivals
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-12">
        <div className="h-64 bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
          <Music className="w-32 h-32 text-white opacity-20" />
        </div>
        <div className="p-10">
          <h2 className="text-3xl font-black text-white mb-6">The Island of Freedom</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Sziget Festival is one of the largest music and cultural events in Europe,
            held annually on Óbuda Island in Budapest, Hungary. For 7 days, the island
            transforms into a vibrant city of music, art, and freedom, hosting over
            400,000 visitors from around the world.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With multiple stages featuring international and local artists across every
            genre imaginable, Sziget is more than just a music festival—it's a
            celebration of diversity, creativity, and human connection.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Calendar className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">When</h3>
          <p className="text-gray-300 text-lg">August 2026</p>
          <p className="text-gray-400">7 days of non-stop music and entertainment</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <MapPin className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Where</h3>
          <p className="text-gray-300 text-lg">Óbuda Island, Budapest</p>
          <p className="text-gray-400">A magical island in the heart of Hungary</p>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <Music className="w-8 h-8 text-orange-500" />
          What to Expect
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">🎸 Multiple Stages</h4>
            <p className="text-gray-400">
              Main Stage, World Music, Electronic, Rock, and more—over 10 stages
              featuring diverse musical acts
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">🎨 Art & Culture</h4>
            <p className="text-gray-400">
              Installations, exhibitions, theater performances, and interactive
              cultural programs
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">🌍 Global Community</h4>
            <p className="text-gray-400">
              Meet people from over 100 countries in an atmosphere of openness
              and acceptance
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">🏕️ Camping Experience</h4>
            <p className="text-gray-400">
              Stay on the island with camping options, creating an immersive
              festival experience
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-10">
        <div className="flex items-start gap-6">
          <Ticket className="w-12 h-12 text-orange-500 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Support the Festival</h2>
            <p className="text-gray-300 text-lg mb-6">
              By trading $SZGT tokens, you're directly contributing to making this
              incredible event happen. Every transaction brings us closer to creating
              an unforgettable experience for hundreds of thousands of festival-goers.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition">
              Trade $SZGT Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
