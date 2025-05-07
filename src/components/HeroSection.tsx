
import React from 'react';
import { Button } from '@/components/ui/button';

type HeroSectionProps = {
  scrollToChat: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToChat }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Meet Your AI Chat Assistant
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Get instant answers, support, and conversation anytime.
        </p>
        <Button 
          onClick={scrollToChat}
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-100"
        >
          Start Chatting Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
