import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import AtAGlanceSection from '@/components/AtAGlanceSection';
import StudentsLifeSection from '@/components/StudentsLifeSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ChatIcon from '@/components/ChatIcon';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection scrollToChat={() => {}} />
      <AboutSection />
      <FeatureSection />
      <AtAGlanceSection />
      <StudentsLifeSection />
      <ProgramsSection />
      <ChatIcon />
      <Footer />
    </div>
  );
};

export default Index;
