
import React, { useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GlanceSection from '@/components/AtGlanceSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ChatContainer from '@/components/ChatContainer';
import Footer from '@/components/Footer';

const Index = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  
  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection scrollToChat={scrollToChat} />
      <GlanceSection />
      <AboutSection />
      <ProgramsSection />
      
      <div ref={chatRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h6 className="text-indigo-600 font-semibold mb-2">VIRTUAL ASSISTANT</h6>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Have Questions? Ask Our School Assistant
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our virtual assistant can help answer your questions about admissions, programs, 
            schedules, and more. Try it now!
          </p>
          <div className="flex justify-center">
            <ChatContainer />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
