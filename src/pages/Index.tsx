import React from 'react';
import HeroSection from '@/components/HeroSection';
import AtGlanceSection from '@/components/AtGlanceSection';
import StudentsLifeSection from '@/components/StudentsLifeSection';
import AboutSection from '@/components/AboutSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SchoolsSection from '@/components/SchoolsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <HeroSection scrollToChat={() => {}} />
      <AboutSection />     
      <AtGlanceSection/>
      <StudentsLifeSection />
      <TestimonialCarousel />
      <SchoolsSection />
    </div>
  );
};

export default Index;
