import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="mt-20 glassmorphism-dark border-t border-crypto-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-crypto-purple to-crypto-neon-purple">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">CryptoBot</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-performing, risk-balanced crypto bots built for the modern trader. 
              Join our community of successful crypto enthusiasts.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-lg glassmorphism hover:bg-crypto-purple/20 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glassmorphism hover:bg-crypto-purple/20 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glassmorphism hover:bg-crypto-purple/20 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              {[
                { label: 'Trading Bots', href: '/bots' },
                { label: 'Performance', href: '/bots' },
                { label: 'Pricing', href: '/bots' },
                { label: 'API Access', href: '/about' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-crypto-purple transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2">
              {[
                { label: 'Forum', href: '/community' },
                { label: 'Blog', href: '/blog' },
                { label: 'Discord', href: '#' },
                { label: 'Telegram', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-crypto-purple transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights and bot performance updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/5 border border-crypto-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gradient-to-r from-crypto-purple to-crypto-purple-light rounded-md hover:shadow-lg transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
              {subscribed && (
                <p className="text-crypto-neon text-sm">✓ Successfully subscribed!</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-crypto-purple/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 CryptoBot Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-crypto-purple transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-crypto-purple transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-crypto-purple transition-colors duration-200">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;