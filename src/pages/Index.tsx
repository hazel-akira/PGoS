import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AtAGlanceSection from '@/components/AtAGlanceSection';
import AtGlanceSection from '@/components/AtGlanceSection';
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
      {/* <AtAGlanceSection /> */}
      <AtGlanceSection/>
      <StudentsLifeSection />
      <ProgramsSection />
      <ChatIcon />
      <Footer />
    </div>
  );
};

export default Index;
