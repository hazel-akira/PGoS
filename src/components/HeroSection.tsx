import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

type HeroSectionProps = {
  scrollToChat: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToChat }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOptions = [
    { name: 'Academic Programs', path: '#programs' },
    { name: 'Student Life', path: '#student-life' },
    { name: 'Admissions', path: '#admissions' },
    { name: 'Campus Tour', path: '#campus-tour' },
  ];

  return (
    <div className="relative min-h-[700px] md:min-h-[800px] text-white pt-32 pb-20 md:pt-40 md:pb-28">
    {/* Background wrapper */}
    <div className="absolute inset-0 z-0">
      {/* Background image */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay to dim the image only */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      </div>
    </div>
    
      {/* Content */}
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl text-white-800 md:text-5xl font-bold mb-6">
          Shaping Futures, One School at a Time.
          </h1>
          
          {/* Dropdown Menu */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-[#02032d] hover:bg-white/10 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-colors z-10"
            >
              Pioneer with us
              <ChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#FFBC04] rounded-lg shadow-lg overflow-hidden">
                {dropdownOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.path}
                    className="block px-4 py-3 text-white-800 hover:bg-[#02032d] hover:text-[#FFFF8] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
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
