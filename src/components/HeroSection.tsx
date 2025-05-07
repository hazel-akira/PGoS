
import React from 'react';
import { Button } from '@/components/ui/button';

type HeroSectionProps = {
  scrollToChat: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToChat }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Welcome to PGOS School
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
            Empowering students with knowledge, innovation, and excellence in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              onClick={scrollToChat}
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
            >
              Chat with Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-semibold"
            >
              Explore Programs
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm w-full max-w-md">
            <h3 className="text-xl font-semibold mb-3">Upcoming Events</h3>
            <div className="bg-white/10 rounded p-4 mb-3 hover:bg-white/20 transition-colors">
              <p className="font-semibold">Annual Science Fair</p>
              <p className="text-sm opacity-90">May 15, 2025 • 9:00 AM</p>
            </div>
            <div className="bg-white/10 rounded p-4 mb-3 hover:bg-white/20 transition-colors">
              <p className="font-semibold">Parent-Teacher Conference</p>
              <p className="text-sm opacity-90">May 20, 2025 • 2:00 PM</p>
            </div>
            <div className="bg-white/10 rounded p-4 hover:bg-white/20 transition-colors">
              <p className="font-semibold">Summer Break Begins</p>
              <p className="text-sm opacity-90">June 12, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
