import React, { useState } from 'react';
import { Bot, TrendingUp, Shield, Clock, DollarSign, CheckCircle, Copy, Calendar, Video, MessageCircle, Star, ArrowRight, Mail, CreditCard, Plus } from 'lucide-react';

const BotPage: React.FC = () => {
  const [selectedBot, setSelectedBot] = useState<string | null>(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [email, setEmail] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const bots = [
    {
      id: 'alpha-pro',
      name: 'Alpha Pro Bot',
      subtitle: 'Our Flagship Trading Algorithm',
      price: 139,
      returns: '30-40%',
      description: 'Our flagship trading algorithm delivering consistent 30-40% annual returns. Join hundreds of successful traders who trust Alpha Pro Bot with their investments.',
      features: [
        { icon: TrendingUp, title: 'Consistent Returns', description: '30-40% annual returns with proven algorithm', color: 'text-crypto-neon' },
        { icon: Shield, title: 'Risk Management', description: 'Advanced stop-loss and position sizing', color: 'text-crypto-purple' },
        { icon: Clock, title: '24/7 Trading', description: 'Automated trading across global markets', color: 'text-crypto-neon-purple' },
        { icon: Bot, title: 'Solid Algorithm', description: 'Proven mathematical trading strategies', color: 'text-crypto-neon' }
      ],
      metrics: [
        { label: 'Annual Return', value: '30-40%', color: 'text-crypto-neon' },
        { label: 'Max Drawdown', value: '8.2%', color: 'text-crypto-purple' },
        { label: 'Sharpe Ratio', value: '2.8', color: 'text-crypto-neon-purple' }
      ],
      testimonials: [
        { name: 'Alex Thompson', profit: '+42%', text: 'This bot has consistently outperformed my manual trading. The free consultation was incredibly valuable.', rating: 5 },
        { name: 'Sarah Chen', profit: '+38%', text: 'Professional setup and excellent support. The Zoom call explained everything perfectly.', rating: 5 },
        { name: 'Marcus Rodriguez', profit: '+35%', text: 'Reliable returns and transparent performance. Worth every penny.', rating: 5 }
      ],
      isMain: true,
      available: true
    },
    {
      id: 'beta-scalper',
      name: 'Beta Scalper',
      subtitle: 'High-Frequency Trading Bot',
      price: 89,
      returns: '20-30%',
      description: 'Fast-paced scalping algorithm designed for quick profits in volatile markets.',
      isMain: false,
      available: false
    },
    {
      id: 'gamma-hodl',
      name: 'Gamma HODL',
      subtitle: 'Long-Term Investment Bot',
      price: 199,
      returns: '15-25%',
      description: 'Conservative long-term strategy focused on steady growth and capital preservation.',
      isMain: false,
      available: false
    },
    {
      id: 'delta-arbitrage',
      name: 'Delta Arbitrage',
      subtitle: 'Cross-Exchange Arbitrage',
      price: 299,
      returns: '25-35%',
      description: 'Advanced arbitrage bot that exploits price differences across multiple exchanges.',
      isMain: false,
      available: false
    }
  ];

  const mainBot = bots.find(bot => bot.isMain);
  const otherBots = bots.filter(bot => !bot.isMain);

  const handleBotSelect = (botId: string) => {
    setSelectedBot(botId);
  };

  const handlePurchaseClick = () => {
    setShowPurchaseModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && transactionId) {
      setIsSubmitted(true);
    }
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If no bot is selected, show the bots overview
  if (!selectedBot) {
    return (
      <div className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Trading <span className="text-gradient">Bots</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from our collection of proven trading algorithms. Each bot is designed for different trading styles and risk preferences.
            </p>
          </div>

          {/* Main Bot - Alpha Pro */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                <span className="text-gradient">Featured Bot</span>
              </h2>
              <p className="text-gray-300">Our flagship algorithm with proven results</p>
            </div>

            <div className="glassmorphism-dark rounded-3xl p-8 hover-glow cursor-pointer transition-all duration-300 hover:scale-[1.02]" 
                 onClick={() => handleBotSelect(mainBot!.id)}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-2xl flex items-center justify-center">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{mainBot!.name}</h3>
                      <p className="text-crypto-purple font-medium">{mainBot!.subtitle}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-3 py-1 bg-gradient-to-r from-crypto-neon to-crypto-neon-purple rounded-full text-xs font-bold text-white">
                        MAIN BOT
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {mainBot!.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center glassmorphism rounded-xl p-4">
                      <div className="text-2xl font-bold text-crypto-neon">{mainBot!.returns}</div>
                      <div className="text-xs text-gray-400">Annual Returns</div>
                    </div>
                    <div className="text-center glassmorphism rounded-xl p-4">
                      <div className="text-2xl font-bold text-crypto-purple">${mainBot!.price}</div>
                      <div className="text-xs text-gray-400">One-time Price</div>
                    </div>
                    <div className="text-center glassmorphism rounded-xl p-4">
                      <div className="text-2xl font-bold text-crypto-neon-purple">FREE</div>
                      <div className="text-xs text-gray-400">Zoom Call</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="w-full py-4 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-xl text-white font-semibold hover-glow transition-all duration-300 flex items-center justify-center space-x-2 group mb-4">
                    <span>View Details</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p className="text-sm text-gray-400">Click to see full details and purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Bots */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                More Bots <span className="text-gradient">Coming Soon</span>
              </h2>
              <p className="text-gray-300">Additional trading algorithms in development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherBots.map((bot, index) => (
                <div
                  key={bot.id}
                  className="glassmorphism rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-slide-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Plus className="h-6 w-6 text-crypto-purple" />
                      </div>
                      <div className="text-white font-bold mb-1">Coming Soon</div>
                      <div className="text-xs text-gray-400">In Development</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20 rounded-xl flex items-center justify-center">
                      <Bot className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{bot.name}</h3>
                      <p className="text-sm text-crypto-purple">{bot.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {bot.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center glassmorphism rounded-lg p-3">
                      <div className="text-lg font-bold text-crypto-neon">{bot.returns}</div>
                      <div className="text-xs text-gray-400">Returns</div>
                    </div>
                    <div className="text-center glassmorphism rounded-lg p-3">
                      <div className="text-lg font-bold text-crypto-purple">${bot.price}</div>
                      <div className="text-xs text-gray-400">Price</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show selected bot details (existing bot detail view)
  const selectedBotData = bots.find(bot => bot.id === selectedBot);
  if (!selectedBotData || !selectedBotData.available) {
    return (
      <div className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Bot Not Available</h1>
          <button 
            onClick={() => setSelectedBot(null)}
            className="px-6 py-3 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-xl text-white font-semibold hover-glow transition-all duration-300"
          >
            Back to Bots
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => setSelectedBot(null)}
          className="mb-8 flex items-center space-x-2 px-4 py-2 glassmorphism rounded-xl text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          <span>Back to All Bots</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet <span className="text-gradient">{selectedBotData.name}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {selectedBotData.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Bot Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Metrics */}
            <div className="glassmorphism-dark rounded-3xl p-8 hover-glow">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-crypto-neon" />
                <span>Performance Metrics</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedBotData.metrics?.map((metric, index) => (
                  <div key={index} className="text-center glassmorphism rounded-xl p-6">
                    <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedBotData.features?.map((feature, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover-glow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Free Consultation Section */}
            <div className="glassmorphism-dark rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Video className="h-6 w-6 text-crypto-purple" />
                <span>Free Zoom Consultation</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300">30-minute personal walkthrough</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300">Bot functionality explanation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300">Q&A session about strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300">Setup guidance and support</span>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">What We'll Cover:</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• How the algorithm works</li>
                    <li>• Risk management strategies</li>
                    <li>• Optimal settings for your portfolio</li>
                    <li>• Market analysis techniques</li>
                    <li>• Long-term trading strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            {selectedBotData.testimonials && (
              <div className="glassmorphism-dark rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-crypto-purple" />
                  <span>What Our Users Say</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedBotData.testimonials.map((testimonial, index) => (
                    <div key={index} className="glassmorphism rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-crypto-neon text-crypto-neon" />
                          ))}
                        </div>
                        <span className="text-crypto-neon font-bold text-sm">{testimonial.profit}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3 italic">"{testimonial.text}"</p>
                      <div className="text-crypto-purple font-medium text-sm">{testimonial.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Purchase Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="glassmorphism-dark rounded-3xl p-8 hover-glow pulse-glow">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedBotData.name}</h3>
                  <div className="text-4xl font-bold text-gradient mb-2">${selectedBotData.price}</div>
                  <p className="text-gray-400 text-sm">One-time payment + FREE consultation</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300 text-sm">{selectedBotData.returns} annual returns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300 text-sm">Complete bot setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300 text-sm">FREE 30-minute Zoom call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300 text-sm">Full documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-crypto-neon" />
                    <span className="text-gray-300 text-sm">24/7 support</span>
                  </div>
                </div>

                <button
                  onClick={handlePurchaseClick}
                  className="w-full py-4 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-lg text-white font-semibold hover-glow transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <DollarSign className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Buy {selectedBotData.name}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 glassmorphism rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Video className="h-4 w-4 text-crypto-purple mt-0.5" />
                    <div>
                      <div className="text-white font-medium">FREE 30-Minute Zoom Call</div>
                      <div className="text-gray-400">Personal walkthrough and Q&A session</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Bot className="h-4 w-4 text-crypto-neon mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Complete Bot Setup</div>
                      <div className="text-gray-400">Fully configured trading bot ready to deploy</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-4 w-4 text-crypto-neon-purple mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Ongoing Support</div>
                      <div className="text-gray-400">24/7 technical support and updates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Instructions Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPurchaseModal(false)}
          />
          
          <div className="relative w-full max-w-md mx-4 glassmorphism-dark rounded-2xl p-6 animate-slide-up">
            <button
              onClick={() => setShowPurchaseModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Purchase Instructions</h2>
                  <p className="text-gray-400">Follow these simple steps to get your bot</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Send Payment</h3>
                      <p className="text-gray-300 text-sm mb-3">Send ${selectedBotData.price} USD (in crypto) to our wallet:</p>
                      <div className="glassmorphism rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <code className="text-crypto-neon text-xs font-mono break-all">
                            bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                          </code>
                          <button
                            onClick={copyWalletAddress}
                            className="ml-2 p-1 hover:bg-white/10 rounded transition-colors duration-200"
                          >
                            <Copy className={`h-4 w-4 ${copied ? 'text-crypto-neon' : 'text-gray-400'}`} />
                          </button>
                        </div>
                        {copied && (
                          <div className="text-crypto-neon text-xs mt-1">✓ Address copied!</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Submit Details</h3>
                      <p className="text-gray-300 text-sm">After sending, fill out the form below with your email and transaction ID</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-crypto-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder="Enter transaction hash/ID"
                      className="w-full px-4 py-3 bg-white/5 border border-crypto-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple transition-colors duration-200"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-lg text-white font-medium hover-glow transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Submit Purchase Details</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center success-bounce">
                <div className="w-16 h-16 bg-gradient-to-r from-crypto-neon to-crypto-neon-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Purchase Submitted!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you! We've received your purchase details and will verify your payment.
                </p>
                
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4 text-crypto-purple" />
                    <span>We'll contact you within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Video className="h-4 w-4 text-crypto-neon" />
                    <span>FREE Zoom consultation will be scheduled</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Bot className="h-4 w-4 text-crypto-neon-purple" />
                    <span>Bot setup begins after payment confirmation</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowPurchaseModal(false)}
                  className="mt-6 px-6 py-2 glassmorphism rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BotPage;