
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ChatContainer from '@/components/ChatContainer';
import Footer from '@/components/Footer';

const Index = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  
  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection scrollToChat={scrollToChat} />
      
      <FeatureSection />
      
      <div ref={chatRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Start a Conversation Now
          </h2>
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
