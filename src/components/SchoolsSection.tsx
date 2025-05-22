import React from 'react';
import { ChevronRight } from 'lucide-react';

const SchoolsSection: React.FC = () => {
  const schools = [
    { name: 'Pioneer School', link: 'https://www.pioneerschools.ac.ke/' },
    { name: 'Pioneer Girls School', link: 'https://www.pioneergirlsschool.co.ke/' },
    { name: 'Pioneer Junior Academy', link: 'https://www.pioneerjunioracademy.co.ke/' },
    { name: 'Pioneer Girls Junior Academy', link: 'https://www.pioneergirlsjunioracademy.co.ke/' },
    { name: 'St. Paul Thomas Academy', link: 'https://www.stpaulthomasacademy.co.ke/' },
  ];

  return (
    <div className="relative w-full md:pt-24">
      {/* Main content container */}
      <div className="flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="bg-[#02032d] text-white p-6 flex flex-col justify-center items-center text-center w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#FFC300] mb-4">Our Schools</h2>
          <p className="text-sm md:text-base max-w-xl">
            With cutting-edge programs, state-of-the-art facilities, a focus on character-building, and
            passionate educators, we create transformative educational experiences that shape futures
            and inspire greatness.
          </p>
            {/* CTA Button */}
            <div className="w-full bg-[#02032d] py-8 text-center">
                <button className="bg-[#FFC300] hover:bg-[#FFD86D] text-white font-bold py-3 px-8 rounded-full transition-colors">
                Explore Programs
                </button>
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/studentscelebrating.jpg"
            alt="Students in uniform"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* Schools navigation bar - Overlapping both sections */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 md:-bottom-20 z-20 
                      w-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] md:w-full max-w-6xl 
                      bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] px-2 sm:px-4 md:h-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:pt-5">
            {schools.map((school, index) => (
              <React.Fragment key={school.name}>
                <a
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-4 hover:text-[#FFC300] 
                            border-b md:border-b-0 border-gray-200 last:border-b-0 transition-all"
                >
                  <span className="text-sm md:text-base font-medium">{school.name}</span>
                  <ChevronRight size={16} className="ml-2" />
                </a>
                {index < schools.length - 1 && (
                  <span className="hidden md:block text-gray-300 self-center">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default SchoolsSection;