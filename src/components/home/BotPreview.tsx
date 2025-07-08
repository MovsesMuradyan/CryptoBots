import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const BotPreview: React.FC = () => {
  const data = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 125 },
    { month: 'Mar', value: 115 },
    { month: 'Apr', value: 145 },
    { month: 'May', value: 165 },
    { month: 'Jun', value: 180 },
    { month: 'Jul', value: 195 },
    { month: 'Aug', value: 220 },
    { month: 'Sep', value: 210 },
    { month: 'Oct', value: 245 },
    { month: 'Nov', value: 265 },
    { month: 'Dec', value: 290 },
  ];

  const stats = [
    { icon: TrendingUp, label: 'APY Range', value: '180-350%', color: 'text-crypto-neon' },
    { icon: Shield, label: 'Max Drawdown', value: '12.5%', color: 'text-crypto-purple' },
    { icon: Clock, label: 'Active Users', value: '2,847', color: 'text-crypto-neon-purple' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism-dark rounded-3xl p-8 md:p-12 hover-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet Our <span className="text-gradient">Alpha Bot</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our flagship trading algorithm combines advanced technical analysis with 
                  machine learning to identify optimal entry and exit points across multiple 
                  cryptocurrency markets.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-4 text-center">
                    <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/bots"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-xl text-white font-semibold hover-glow transition-all duration-300 group"
              >
                <span>See Full Bot Overview</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Right side - Chart */}
            <div className="glassmorphism rounded-2xl p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Live Performance</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-crypto-neon">+247.8%</span>
                  <span className="text-sm text-gray-400">12 months</span>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="url(#gradient)" 
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: '#8b5cf6' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#bf00ff" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotPreview;