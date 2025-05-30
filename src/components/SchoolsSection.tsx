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
    <div className="relative w-full">
      {/* Top Section - Dark Background */}
      <div className="bg-[#02032d] pt-20">
        {/* Main content container */}
        <div className="bg-[#02032d] flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="bg-[#02032d] text-white p-6 flex flex-col justify-center items-center text-center w-full md:w-1/2">
            <h2 className="text-2xl font-bold md:text-5xl font-serif text-[#F4B24A] mb-4">Our Schools</h2>
            <div className="w-16 h-px bg-[#F4B24A]"></div>
            <p className="text-md md:text-xl max-w-xl my-10">
              With cutting-edge programs, state-of-the-art facilities, a focus on character-building, and
              passionate educators, we create transformative educational experiences that shape futures
              and inspire greatness.
            </p>
            {/* CTA Button */}
            <div className="w-full bg-[#02032d] py-8 text-center">
              <button className="bg-[#F4B24A] hover:bg-[#e68a00] text-white font-bold py-3 px-8 rounded-full transition-colors">
                Explore Programs
                <span className="ml-3 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">➔</span>
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
      </div>
      
      {/* Schools navigation bar - Positioned absolutely between sections */}
      <div  className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
                      px-2 sm:px-4 md:px-6 -mt-8 md:-mt-16 md:-mb-16 z-20 relative mx-auto">
       
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center py-4 md:py-6">
              {schools.map((school, index) => (
                <React.Fragment key={school.name}>
                  <a
                    href={school.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 md:py-4 hover:text-[#F4B24A] 
                               border-b md:border-b-0 border-gray-200 last:border-b-0 
                               transition-all duration-300 hover:bg-gray-50 rounded-lg
                               w-full md:w-auto text-center md:text-left"
                  >
                    <span className="text-sm md:text-base font-medium text-gray-800 hover:text-[#F4B24A] transition-colors">
                      {school.name}
                    </span>
                    <ChevronRight size={18} className="ml-2 text-gray-400" />
                  </a>
                  {index < schools.length - 1 && (
                    <div className="hidden md:flex items-center px-2">
                      <div className="w-px h-8 bg-gray-200"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        
      </div>

      {/* Bottom Section - Light Background */}
      <div className="bg-[#f2f2f2] md:pt-32">
        {/* Extended Stats Strip */}
        <div className="relative text-[#02032d] py-24 overflow-hidden">
          {/* Animate this inner strip only */}
          <div className="animate-scrollX flex md:flex-row justify-around items-center gap-10 text-center px-4 w-max">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold md:text-6xl mb-2">5+</h3>
              <p className="text-base md:text-lg font-medium">Schools</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold md:text-6xl mb-2">50+</h3>
              <p className="text-base md:text-lg font-medium">Dedicated Educators</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold md:text-6xl mb-2">25+</h3>
              <p className="text-base md:text-lg font-medium">Years of Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold md:text-6xl mb-2">10K+</h3>
              <p className="text-base md:text-lg font-medium">Happy Students and Alumni</p>
            </div>
          </div>
        </div>

        {/* Apply Now Button Section */}
        <div className='flex flex-col justify-center mx-auto pb-12 flex flex-col justify-center items-center'>
          <button className="px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold font-serif rounded-r-full bg-gradient-to-r from-[#0E013d] to-[#F4B24A] text-white shadow-lg hover:scale-105 transition-transform duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolsSection;