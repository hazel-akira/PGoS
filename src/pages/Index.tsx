import React from 'react';
import HeroSection from '@/components/HeroSection';
import AtGlanceSection from '@/components/AtGlanceSection';
import StudentsLifeSection from '@/components/StudentsLifeSection';
import AboutSection from '@/components/AboutSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SchoolsSection from '@/components/SchoolsSection';
import CampusesSection from '@/components/CampusesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <HeroSection scrollToChat={() => {}} />
      <AboutSection />     
      <AtGlanceSection/>
      <StudentsLifeSection />
      <TestimonialCarousel />
      <SchoolsSection />
<<<<<<< HEAD
=======
      <ChatIcon />
      <CampusesSection />
     
>>>>>>> 10ba065e4472e015d9ad49c57900aff86a7ecaab
    </div>
  );
};

export default Index;

