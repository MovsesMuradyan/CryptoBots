import React from 'react';
import { Bot, BarChart3, DollarSign } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Bot,
      title: 'Choose Your Bot',
      description: 'Select from our portfolio of proven trading algorithms, each with transparent performance history and risk metrics.',
    },
    {
      icon: BarChart3,
      title: 'Monitor Performance',
      description: 'Track real-time performance with detailed analytics, profit/loss reports, and comprehensive trading insights.',
    },
    {
      icon: DollarSign,
      title: 'Earn Profits',
      description: 'Watch your portfolio grow as our bots execute optimal trades 24/7, maximizing returns while managing risk.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started with professional crypto trading in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glassmorphism rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover-glow h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-crypto-purple" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-crypto-purple to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;