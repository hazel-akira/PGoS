import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schools = [
  {
    name: 'Swimming',
    image: '/images/pioneerboysswimming.jpg',
  },
  {
    name: 'Playing Hockey',
    image: '/images/pioneergirlshockey.jpg',
  },
  {
    name: 'Aviation Trip',
    image: '/images/boysjunioraviation.jpg',
  },
  {
    name: 'Drama Club',
    image: '/images/girlsjuniordramaclub.jpg',
  },
  {
    name: 'The Band',
    image: '/images/stpaulsorchestra.jpg',
  },
];

const StudentsLifeSection: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setSelected((current) => (current + 1) % schools.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play when user interacts
  const handleSchoolClick = (index: number) => {
    setSelected(index);
    setIsAutoPlaying(false);
  };

  // Resume auto-play when mouse leaves the section
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const navigate = useNavigate();

  return (
    <section 
      className="w-full bg-[#f2f2f2] dark:bg-slate-900  py-32 px-2 md:px-0"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <hr className="border-t border-gray-300 mb-6 mx-20" />
        <h2 className="text-2xl md:text-5xl font-bold font-serif text-center mb-10 tracking-wide text-[#F4B24A] mt-4 md:py-12">Life in Abundance</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Timeline */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-start">
              {schools.map((school, idx) => (
                <div
                  key={school.name}
                  className="flex items-center mb-4 last:mb-0 cursor-pointer transition-all duration-300"
                  onClick={() => handleSchoolClick(idx)}
                >
                  <div className="flex flex-col items-center mr-4">
                    <span 
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                        idx === selected 
                          ? 'bg-[#F4B24A] dark:bg-white border-[#F4B24A]  dark:border-white scale-110' 
                          : 'bg-[#02032d] dark:bg-[#F4B24A] border-[#02032d]'
                      }`}
                    ></span>
                    {idx !== schools.length - 1 && (
                      <span className={`w-0.5 h-8 bg-[#02032d] dark:bg-white transition-all duration-300 ${
                        idx === selected ? 'bg-[#F4B24A]' : ''
                      }`}></span>
                    )}
                  </div>
                  <span 
                    className={`text-lg font-medium transition-all duration-300 ${
                      idx === selected 
                        ? 'text-[#F4B24A] dark:text-gray-200 scale-105' 
                        : 'text-gray-900 dark:text-[#f4b24a]' 
                    }`}
                  >
                    {school.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center border-r-5 border-b-5  relative drop-shadow-[5px_0px_2px_rgba(0,0,0,0.5)]">
            <img
              src={schools[selected].image}
              alt={schools[selected].name}
              className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110"
            />
          </div>
        </div>
        <div className="flex justify-left">
          <button className="border border-[#F4B24A] text-[#F4B24A] rounded px-6 py-2 font-medium hover:bg-[#e68a00] hover:text-white transition-all"
           onClick={() => navigate('/about/why-choose')}>
            What distinguishes your journey with us?
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentsLifeSection; 