import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, BookOpen, TrendingUp } from 'lucide-react';

const CommunityStats: React.FC = () => {
  const [stats, setStats] = useState({
    users: 0,
    threads: 0,
    articles: 0,
    trades: 0,
  });

  const targetStats = {
    users: 2847,
    threads: 1293,
    articles: 156,
    trades: 48592,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: Math.min(prev.users + 25, targetStats.users),
        threads: Math.min(prev.threads + 12, targetStats.threads),
        articles: Math.min(prev.articles + 2, targetStats.articles),
        trades: Math.min(prev.trades + 450, targetStats.trades),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const communityStats = [
    { icon: Users, label: 'Total Users', value: stats.users.toLocaleString(), color: 'text-crypto-neon' },
    { icon: MessageSquare, label: 'Forum Threads', value: stats.threads.toLocaleString(), color: 'text-crypto-purple' },
    { icon: BookOpen, label: 'Blog Articles', value: stats.articles.toLocaleString(), color: 'text-crypto-neon-purple' },
    { icon: TrendingUp, label: 'Successful Trades', value: stats.trades.toLocaleString(), color: 'text-crypto-neon' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Growing <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with thousands of successful crypto traders sharing strategies, insights, and results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20 mb-4`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join the community?
            </h3>
            <p className="text-gray-300 mb-6">
              Get access to exclusive trading strategies, real-time market analysis, and connect with like-minded traders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-crypto-purple to-crypto-purple-light rounded-xl text-white font-semibold hover-glow transition-all duration-300">
                Join Our Discord
              </button>
              <button className="px-6 py-3 glassmorphism rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Browse Forum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;