import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BotPage from './pages/BotPage';
import BlogPage from './pages/BlogPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen transition-all duration-500 ease-in-out">
            <Header />
            <main className="relative">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bots" element={<BotPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;