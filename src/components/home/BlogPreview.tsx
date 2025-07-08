import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogPreview: React.FC = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'The Future of DeFi: Trends to Watch in 2025',
      excerpt: 'Explore the emerging trends in decentralized finance that will shape the crypto landscape this year.',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Alex Thompson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'DeFi'
    },
    {
      id: 2,
      title: 'Risk Management Strategies for Crypto Trading',
      excerpt: 'Learn proven techniques to protect your portfolio while maximizing returns in volatile markets.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Sarah Martinez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Trading'
    },
    {
      id: 3,
      title: 'Understanding Market Psychology in Crypto',
      excerpt: 'Dive deep into the behavioral patterns that drive cryptocurrency market movements.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Michael Chen',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Psychology'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest trends and strategies in crypto trading
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:flex items-center space-x-2 px-6 py-3 glassmorphism rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 group"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <article
              key={article.id}
              className="glassmorphism rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover-glow animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-crypto-purple to-crypto-purple-light rounded-full text-xs font-semibold text-white">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-crypto-purple transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <span className="text-crypto-purple font-medium">{article.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 glassmorphism rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 group"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;