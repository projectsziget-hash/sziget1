import { Mail, MessageSquare, Globe, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 font-light mb-4">
                Get in touch with our team via email
              </p>
              <a
                href="mailto:contact@szgt.io"
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                contact@szgt.io
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Discord</h3>
              <p className="text-gray-600 font-light mb-4">
                Join our community and chat with us
              </p>
              <a
                href="https://discord.gg/szgt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                discord.gg/szgt
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Send className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Telegram</h3>
              <p className="text-gray-600 font-light mb-4">
                Connect with us on Telegram
              </p>
              <a
                href="https://t.me/szgt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                t.me/szgt
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Website</h3>
              <p className="text-gray-600 font-light mb-4">
                Visit our official website
              </p>
              <a
                href="https://szgt.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                szgt.io
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Stay Updated
            </h2>
            <p className="text-center text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              Follow us on social media to stay up to date with the latest news, announcements, and updates about the SZIGET Festival 2026 fundraising campaign.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://twitter.com/szgt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white rounded-full font-medium text-gray-900 hover:shadow-lg transition-all hover:scale-105"
              >
                Twitter/X
              </a>
              <a
                href="https://instagram.com/szgt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white rounded-full font-medium text-gray-900 hover:shadow-lg transition-all hover:scale-105"
              >
                Instagram
              </a>
              <a
                href="https://github.com/szgt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white rounded-full font-medium text-gray-900 hover:shadow-lg transition-all hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
