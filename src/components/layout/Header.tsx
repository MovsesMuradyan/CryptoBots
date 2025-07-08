import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Sun, Moon, Menu, X, User, LogIn, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../ui/AuthModal';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/bots', label: 'Bots' },
    { path: '/blog', label: 'Blog' },
    { path: '/community', label: 'Community' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsThemeChanging(true);
    toggleTheme();
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsThemeChanging(false);
    }, 600);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? isDark 
            ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-crypto-purple/30' 
            : 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-crypto-purple/20'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-neon-purple rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300" />
                <div className="relative p-3 rounded-2xl bg-gradient-to-r from-crypto-purple to-crypto-neon-purple group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-crypto-purple/50 transition-all duration-300">
                  <Bot className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                  CryptoBot
                </span>
                <span className={`text-xs -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Trading Platform
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className={`flex items-center space-x-1 backdrop-blur-sm rounded-2xl p-2 border shadow-lg ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/30 border-crypto-purple/20'
              }`}>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group hover:transform hover:-translate-y-0.5 ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-crypto-purple to-crypto-purple-light shadow-lg shadow-crypto-purple/30'
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10'
                          : 'text-gray-700 hover:text-slate-900 hover:bg-white/20 hover:shadow-lg hover:shadow-crypto-purple/10'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive(item.path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-purple-light rounded-2xl opacity-20 animate-glow" />
                    )}
                    {!isActive(item.path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-inner" />
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Enhanced Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Theme Toggle with Animation */}
              <button
                onClick={handleThemeToggle}
                className={`relative p-3 rounded-2xl backdrop-blur-sm border hover:shadow-lg hover:shadow-crypto-purple/20 hover:transform hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/20 border-crypto-purple/20 hover:bg-white/30'
                }`}
              >
                <div className="relative w-5 h-5">
                  {/* Sun Icon for Light Mode */}
                  <Sun className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-600 ease-in-out ${
                    !isDark 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 rotate-180 scale-0'
                  } ${isThemeChanging && !isDark ? 'sun-animation' : ''}`} />
                  
                  {/* Moon Icon for Dark Mode */}
                  <Moon className={`absolute inset-0 h-5 w-5 text-crypto-purple transition-all duration-600 ease-in-out ${
                    isDark 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 -rotate-180 scale-0'
                  } ${isThemeChanging && isDark ? 'moon-animation' : ''}`} />
                </div>
                
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-600 ${
                  isDark 
                    ? 'bg-gradient-to-r from-crypto-purple/20 to-crypto-neon-purple/20' 
                    : 'bg-gradient-to-r from-yellow-400/20 to-crypto-purple/20'
                } opacity-0 group-hover:opacity-100 shadow-inner`} />
                
                {/* Click Animation Ring */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  isThemeChanging 
                    ? 'border-crypto-purple animate-ping scale-110' 
                    : 'border-transparent'
                }`} />
              </button>

              {/* Enhanced Auth Section */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl backdrop-blur-sm border hover:shadow-lg hover:shadow-crypto-purple/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 group ${
                      isDark 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                        : 'bg-white/20 border-crypto-purple/20 hover:bg-white/30'
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={user?.avatar}
                        alt={user?.name}
                        className="h-8 w-8 rounded-full border-2 border-crypto-purple group-hover:border-crypto-neon transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-crypto-neon rounded-full border-2 border-gray-900 animate-pulse" />
                    </div>
                    <div className="hidden sm:block text-left">
                      <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{user?.name}</div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Online</div>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      isUserMenuOpen ? 'rotate-180' : ''
                    } ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>

                  {/* User Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className={`absolute right-0 mt-2 w-56 backdrop-blur-xl rounded-2xl border shadow-2xl shadow-crypto-purple/20 animate-slide-up ${
                      isDark 
                        ? 'bg-slate-900/90 border-crypto-purple/30' 
                        : 'bg-white/90 border-crypto-purple/20'
                    }`}>
                      <div className={`p-4 border-b ${isDark ? 'border-white/10' : 'border-crypto-purple/10'}`}>
                        <div className="flex items-center space-x-3">
                          <img
                            src={user?.avatar}
                            alt={user?.name}
                            className="h-10 w-10 rounded-full border-2 border-crypto-purple"
                          />
                          <div>
                            <div className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{user?.name}</div>
                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{user?.email}</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <Link
                          to="/profile"
                          onClick={() => setIsUserMenuOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-xl hover:shadow-lg hover:transform hover:-translate-y-0.5 transition-all duration-200 ${
                            isDark 
                              ? 'hover:bg-white/10 text-gray-300 hover:text-white' 
                              : 'hover:bg-crypto-purple/10 text-gray-700 hover:text-slate-900'
                          }`}
                        >
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-red-500/10 hover:shadow-lg hover:transform hover:-translate-y-0.5 transition-all duration-200 ${
                            isDark 
                              ? 'text-gray-300 hover:text-red-400' 
                              : 'text-gray-700 hover:text-red-500'
                          }`}
                        >
                          <LogIn className="h-4 w-4 rotate-180" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="relative flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-crypto-purple to-crypto-purple-light rounded-2xl text-white font-medium hover:shadow-2xl hover:shadow-crypto-purple/40 hover:transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-neon-purple to-crypto-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-2xl shadow-inner opacity-30" />
                  <LogIn className="h-4 w-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </button>
              )}

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative p-3 rounded-2xl backdrop-blur-sm border hover:shadow-lg hover:shadow-crypto-purple/20 hover:transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/20 border-crypto-purple/20 hover:bg-white/30'
                }`}
              >
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className={`h-6 w-6 group-hover:rotate-90 transition-transform duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`} />
                  ) : (
                    <Menu className={`h-6 w-6 group-hover:scale-110 transition-transform duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`} />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple/20 to-crypto-neon/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-inner" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden backdrop-blur-xl border-t shadow-2xl animate-slide-up ${
            isDark 
              ? 'bg-slate-900/90 border-crypto-purple/30' 
              : 'bg-white/90 border-crypto-purple/20'
          }`}>
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 animate-slide-up hover:transform hover:-translate-y-0.5 ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-crypto-purple to-crypto-purple-light shadow-lg shadow-crypto-purple/30'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10'
                        : 'text-gray-700 hover:text-slate-900 hover:bg-white/20 hover:shadow-lg hover:shadow-crypto-purple/10'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
              
              {!isAuthenticated && (
                <div className={`pt-4 border-t mt-4 ${isDark ? 'border-white/10' : 'border-crypto-purple/10'}`}>
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-crypto-purple to-crypto-purple-light rounded-2xl text-white font-medium hover:shadow-2xl hover:shadow-crypto-purple/40 hover:transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Header;