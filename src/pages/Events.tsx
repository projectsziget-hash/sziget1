import { Music, Star, Calendar, MapPin } from 'lucide-react';

export function Events() {
  const events = [
    {
      day: 'Day 1',
      date: 'August 6, 2026',
      headliners: ['Arctic Monkeys', 'Dua Lipa', 'Calvin Harris'],
      description: 'Opening night with incredible energy'
    },
    {
      day: 'Day 2',
      date: 'August 7, 2026',
      headliners: ['The Weeknd', 'Billie Eilish', 'Martin Garrix'],
      description: 'Non-stop music across all stages'
    },
    {
      day: 'Day 3',
      date: 'August 8, 2026',
      headliners: ['Ed Sheeran', 'Lizzo', 'David Guetta'],
      description: 'Saturday night spectacular'
    },
    {
      day: 'Day 4',
      date: 'August 9, 2026',
      headliners: ['Imagine Dragons', 'Doja Cat', 'Marshmello'],
      description: 'Keep the energy flowing'
    },
    {
      day: 'Day 5',
      date: 'August 10, 2026',
      headliners: ['Coldplay', 'Rihanna', 'The Chainsmokers'],
      description: 'Epic Monday lineup'
    },
    {
      day: 'Day 6',
      date: 'August 11, 2026',
      headliners: ['Harry Styles', 'SZA', 'Tiësto'],
      description: 'Penultimate night of freedom'
    },
    {
      day: 'Day 7',
      date: 'August 12, 2026',
      headliners: ['Foo Fighters', 'Travis Scott', 'Armin van Buuren'],
      description: 'Grand finale celebration'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-pink-600" />
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            SZIGET '26 LINEUP
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            7 days of non-stop music on the Island of Freedom
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-black text-white mb-2">Location</h3>
              <p className="text-gray-400">
                Óbudai-sziget (Óbuda Island), Budapest, Hungary<br />
                Multiple stages: Main Stage, A38 Stage, World Music Stage, and more
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-pink-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Music className="w-6 h-6 text-pink-600" />
                    <h2 className="text-3xl font-black text-white">{event.day}</h2>
                  </div>
                  <p className="text-gray-400 text-lg mb-4">{event.date}</p>
                  <p className="text-gray-500">{event.description}</p>
                </div>

                <div className="md:text-right">
                  <div className="text-sm text-gray-500 mb-2">Headliners</div>
                  {event.headliners.map((artist, i) => (
                    <div key={i} className="flex items-center gap-2 md:justify-end mb-2">
                      <Star className="w-4 h-4 text-pink-600 fill-current" />
                      <span className="text-white font-bold text-lg">{artist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-black text-lg">
            + 500 more artists across all stages
          </div>
        </div>
      </div>
    </div>
  );
}
