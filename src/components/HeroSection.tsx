import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type HeroSectionProps = {
  scrollToChat: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToChat }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOptions = [
    { name: 'Academics', path: '/academics' },
    { name: 'The community', path: '/student-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus Tour', path: '/visit-us' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsDropdownOpen(false);
    window.addEventListener('scroll' , handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

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
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#02032d] to-[#F4b24a] hover:brightness-110 hover:scale-105 text-white font-semibold text-lg px-6 py-3 rounded-lg backdrop-blur-sm transition-colors z-10"
            >
              Pioneer with us
              <ChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-[#f4b24a] rounded-lg shadow-lg overflow-hidden z-20 md:left-0">
                {dropdownOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => {
                      navigate(option.path);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white-800 hover:bg-[#f4b24a]/80 hover:text-[#02032d] transition-colors"
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end bg-clip-padding:1">
          <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm w-full max-w-md">
            <h3 className="text-xl font-semibold mb-3">Upcoming Events</h3>
            <div className="bg-white/40 rounded p-4 mb-3 hover:bg-white/20 transition-colors">
              <p className="font-semibold">Annual Science Fair</p>
              <p className="text-sm opacity-90">May 15, 2025 • 9:00 AM</p>
            </div>
            <div className="bg-white/40 rounded p-4 mb-3 hover:bg-white/30 transition-colors">
              <p className="font-semibold">Parent-Teacher Conference</p>
              <p className="text-sm opacity-90">May 20, 2025 • 2:00 PM</p>
            </div>
            <div className="bg-white/40 rounded p-4 hover:bg-white/30 transition-colors">
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
