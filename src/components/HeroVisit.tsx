import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import CloudDivider from '@/components/CloudDivider';
type HeroSectionProps = {
  scrollToChat: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToChat }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOptions = [
    { name: 'campus tour', path: '/visit-us' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Get directions', path: '/maps' },
  ];

  return (
    <div className="relative min-h-[700px] md:min-h-[800px] text-white flex flex-col justify-center">
    {/* Background wrapper */}
    <div className="absolute inset-0 z-0">
      {/* Background image */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: 'url("/images/pgosadmin.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
          {/*<CloudDivider fillColor="#ffffff" />*/}
        {/* Overlay to dim the image only */}
        <div className="absolute inset-0 bg-black bg-opacity-75 z-0"></div>
      </div>
    </div>
    
      {/* Content */}
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between relative z-10">
        <div className="md:w-3/4 text-center md:text-center mb-10 md:mb-0">
          <h1 className="text-3xl text-white-800 md:text-5xl font-bold mb-6">
          Visit Our Schools
          </h1>
          <p className="text-xl mb-8">Experience our vibrant community and excellent facilities.</p>
          
          {/* Dropdown Menu */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#02032d] to-[#F4b24a] hover:brightness-110 hover:scale-105 text-white font-semibold  px-6 py-3 rounded-lg backdrop-blur-sm transition-colors z-10"
            >
              campus tour
              <ChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#FFBC04] rounded-lg shadow-lg overflow-hidden">
                {dropdownOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.path}
                    className="block px-4 py-3 text-white-800 hover:bg-[#f4b24a]/80 hover:text-[#02032d] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  
  );
};
<CloudDivider  flip fillColor="#0000000" />
export default HeroSection;
