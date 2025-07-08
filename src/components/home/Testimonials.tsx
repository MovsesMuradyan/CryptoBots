import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Professional Trader',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      content: "CryptoBot's Alpha algorithm has consistently outperformed my manual trading. The transparency and real-time analytics give me complete confidence in every trade.",
      rating: 5,
      profit: '+284%'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'DeFi Enthusiast',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      content: "Finally, a bot that actually works! The risk management is exceptional, and I love being part of such an active and knowledgeable community.",
      rating: 5,
      profit: '+192%'
    },
    {
      name: 'Emily Johnson',
      role: 'Crypto Investor',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      content: "The performance speaks for itself. I've tried many trading bots, but CryptoBot's approach to risk-balanced trading is in a league of its own.",
      rating: 5,
      profit: '+156%'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Traders Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real feedback from our community of successful crypto traders
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glassmorphism rounded-3xl p-8 md:p-12 text-center">
            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-crypto-neon text-crypto-neon" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-crypto-purple"
              />
              <div className="text-left">
                <div className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-crypto-neon font-bold">
                  {testimonials[currentIndex].profit} profit
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glassmorphism rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glassmorphism rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-crypto-purple'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;