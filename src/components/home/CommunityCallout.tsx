import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Users, TrendingUp, ArrowRight } from 'lucide-react';

const CommunityCallout: React.FC = () => {
  const trendingThreads = [
    {
      title: 'Best strategies for the current market conditions?',
      author: 'CryptoMaster2025',
      replies: 23,
      time: '2 hours ago'
    },
    {
      title: 'Alpha Bot vs Beta Bot - Performance Comparison',
      author: 'TradingPro',
      replies: 45,
      time: '5 hours ago'
    },
    {
      title: 'Risk management techniques that actually work',
      author: 'SafeTrader',
      replies: 67,
      time: '1 day ago'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism-dark rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Join the <span className="text-gradient">Conversation</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Connect with thousands of traders sharing strategies, market insights, 
                  and real trading experiences. Learn from the community and share your own success stories.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glassmorphism rounded-xl p-4 text-center">
                  <Users className="h-6 w-6 text-crypto-neon mx-auto mb-2" />
                  <div className="text-lg font-bold text-crypto-neon">2,847</div>
                  <div className="text-xs text-gray-400">Active Members</div>
                </div>
                <div className="glassmorphism rounded-xl p-4 text-center">
                  <MessageCircle className="h-6 w-6 text-crypto-purple mx-auto mb-2" />
                  <div className="text-lg font-bold text-crypto-purple">1,293</div>
                  <div className="text-xs text-gray-400">Discussions</div>
                </div>
                <div className="glassmorphism rounded-xl p-4 text-center">
                  <TrendingUp className="h-6 w-6 text-crypto-neon-purple mx-auto mb-2" />
                  <div className="text-lg font-bold text-crypto-neon-purple">24/7</div>
                  <div className="text-xs text-gray-400">Activity</div>
                </div>
              </div>

              <Link
                to="/community"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-xl text-white font-semibold hover-glow transition-all duration-300 group"
              >
                <span>Join Our Community</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Right side - Trending Threads */}
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-crypto-neon" />
                <span>Trending Discussions</span>
              </h3>

              <div className="space-y-4">
                {trendingThreads.map((thread, index) => (
                  <div
                    key={index}
                    className="p-4 glassmorphism rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                  >
                    <h4 className="text-white font-medium mb-2 group-hover:text-crypto-purple transition-colors duration-200 line-clamp-2">
                      {thread.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>by {thread.author}</span>
                      <div className="flex items-center space-x-3">
                        <span>{thread.replies} replies</span>
                        <span>{thread.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/community"
                  className="text-crypto-purple hover:text-crypto-neon-purple font-medium text-sm transition-colors duration-200"
                >
                  View all discussions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCallout;