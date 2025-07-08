import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import BotPreview from '../components/home/BotPreview';
import CommunityStats from '../components/home/CommunityStats';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import CommunityCallout from '../components/home/CommunityCallout';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <HowItWorks />
      <BotPreview />
      <CommunityStats />
      <Testimonials />
      <BlogPreview />
      <CommunityCallout />
    </div>
  );
};

export default HomePage;