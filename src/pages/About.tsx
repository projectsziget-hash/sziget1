import { Heart, Globe, Users, Music, Award, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-600 fill-current" />
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            ABOUT SZIGET
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Europe's most iconic music and cultural festival
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-4xl font-black text-white mb-6">The Island of Freedom</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Since 1993, Sziget Festival has been a celebration of music, art, and freedom on the beautiful Óbuda Island in the heart of Budapest. What started as a small student gathering has grown into one of Europe's largest and most beloved music festivals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every August, over 500,000 visitors from more than 100 countries transform this island into a temporary city of music, culture, and unforgettable experiences. It's not just a festival—it's a way of life, a celebration of diversity, and a testament to the power of music to bring people together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <Globe className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Global Community</h3>
              <p className="text-gray-400">
                Visitors from over 100 countries unite on the Island of Freedom, creating a truly international celebration of diversity and music.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <Users className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">500,000+ Szigetizens</h3>
              <p className="text-gray-400">
                Half a million festival-goers become "Szigetizens" each year, living together in harmony on our island paradise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <Music className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">500+ Artists</h3>
              <p className="text-gray-400">
                From legendary headliners to emerging talents, experience an incredible diversity of music across multiple stages.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Award className="w-8 h-8 text-pink-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Award-Winning Festival</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Sziget has been recognized as one of the world's best festivals, winning multiple European Festival Awards including "Best Major European Festival." Our commitment to sustainability, diversity, and unforgettable experiences has made us a benchmark in the festival industry.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="flex items-start gap-4">
            <Sparkles className="w-8 h-8 text-pink-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Why Save Sziget?</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Sziget Festival is more than just music—it's a movement that celebrates freedom, diversity, and human connection. The festival faces unprecedented challenges, and we need your help to ensure that the Island of Freedom continues to welcome Szigetizens from around the world.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By supporting Sziget, you're not just saving a festival—you're preserving a cultural landmark that brings joy, unity, and unforgettable memories to hundreds of thousands of people every year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
