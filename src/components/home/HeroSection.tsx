import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const targetUsers = 2847;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        if (prev < targetUsers) {
          return Math.min(prev + 35, targetUsers);
        }
        return targetUsers;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Reduced Purple Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-crypto-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-crypto-neon-purple/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-crypto-purple/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">High-Performance</span>
            <br />
            <span className="text-gradient">Crypto Trading Bots</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A platform for high-performing, risk-balanced crypto bots and the community that uses them. 
            Join thousands of traders maximizing their returns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/bots"
              className="group px-8 py-4 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-xl text-white font-semibold text-lg hover-glow transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore the Bot</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 glassmorphism rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Read Our Mission
            </Link>
          </div>

          {/* Enhanced Animated Bot Illustration */}
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 glassmorphism rounded-3xl animate-float">
              <div className="flex items-center justify-center h-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-2xl blur-lg opacity-60 animate-glow" />
                  <div className="relative bg-gradient-to-r from-crypto-purple to-crypto-neon-purple p-8 rounded-2xl shadow-2xl shadow-crypto-purple/50">
                    <Bot className="h-24 w-24 md:h-32 md:w-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating stats */}
            <div className="absolute -top-4 -right-4 glassmorphism rounded-lg p-3 animate-float shadow-lg shadow-crypto-purple/30" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-neon animate-pulse">
                  {activeUsers.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">Users</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glassmorphism rounded-lg p-3 animate-float shadow-lg shadow-crypto-purple/30" style={{ animationDelay: '3s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-neon-purple">24/7</div>
                <div className="text-xs text-gray-400">Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;