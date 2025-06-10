import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const SchoolsSection: React.FC = () => {
  const schools = [
    { name: 'Pioneer School', link: 'https://www.pioneerschools.ac.ke/' },
    { name: 'Pioneer Girls School', link: 'https://www.pioneergirlsschool.co.ke/' },
    { name: 'Pioneer Junior Academy', link: 'https://www.pioneerjunioracademy.co.ke/' },
    { name: 'Pioneer Girls Junior Academy', link: 'https://www.pioneergirlsjunioracademy.co.ke/' },
    { name: 'St. Paul Thomas Academy', link: 'https://www.stpaulthomasacademy.co.ke/' },
  ];

  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Top Section - Dark Background */}
      <div className="bg-[#02032d] pt-20 md:pt-0">
        <div className="flex flex-col md:flex-row">
          {/*Text Section with Background Image + Overlay */}
          <div
            className="relative text-white p-6 flex flex-col justify-center items-center text-center w-full md:w-1/2"
            style={{
              backgroundImage: 'url("/images/specialprogsnobg.png")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#02032d] bg-opacity-90 z-0" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold md:text-5xl font-serif text-[#F4B24A] mb-4">Our Schools</h2>
              <div className="w-16 h-px bg-[#F4B24A] mx-auto"></div>
              <p className="text-md md:text-xl max-w-xl my-10">
                With cutting-edge programs, state-of-the-art facilities, a focus on character-building, and
                passionate educators, we create transformative educational experiences that shape futures
                and inspire greatness.
              </p>
              <div className="w-full py-8 text-center">
                <button
                  className="bg-[#F4B24A] hover:bg-[#e68a00] text-white font-bold py-3 px-8 rounded-full transition-colors"
                  onClick={() => navigate('/academics')}
                >
                  Explore Programs
                  <span className="ml-3 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">➔</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
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
      <div className="bg-[#f2f2f2] dark:bg-slate-900 md:pt-32">
        {/* Extended Stats Strip */}
        <div className="relative text-[#02032d] dark:text-gray-200 py-24 overflow-hidden">
          <style>
            {`
              @keyframes scrollX {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
              .scroll-container {
                animation: scrollX 25s linear infinite;
                width: max-content;
                will-change: transform;
                display: flex;
                gap: 2.5rem;
                padding: 0 2.5rem
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
              .stats-wrapper {
                position: relative;
                overflow: hidden;
                width: 100%;
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              }
              .stats-wrapper::before,
              .stats-wrapper::after {
                content: '';
                position: absolute;
                top: 0;
                width: 100px;
                height: 100%;
                z-index: 2;
                pointer-events: none;
              }
              .stats-wrapper::before {
                left: 0;
                background: linear-gradient(to right, #f2f2f2, transparent);
              }
              .stats-wrapper::after {
                right: 0;
                background: linear-gradient(to left, #f2f2f2, transparent);
              }
              
              /* Dark mode styles triggered by a 'dark' class on a parent element */
              .dark .stats-wrapper::before {
                background: linear-gradient(to right, #010218, transparent);
              }
              .dark .stats-wrapper::after {
                background: linear-gradient(to left, #010218, transparent);
              }
            `}
          </style>
          <div className="stats-wrapper">
            <div className="scroll-container">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
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
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold md:text-6xl mb-2">24/7</h3>
                    <p className="text-base md:text-lg font-medium">Digital Learning Access</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold md:text-6xl mb-2">95%</h3>
                    <p className="text-base md:text-lg font-medium">Student Satisfaction Rate</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold md:text-6xl mb-2">20+</h3>
                    <p className="text-base md:text-lg font-medium">Community Partnership</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold md:text-6xl mb-2">8:1</h3>
                    <p className="text-base md:text-lg font-medium">Student Teacher Ratio</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold md:text-6xl mb-2">200+</h3>
                    <p className="text-base md:text-lg font-medium">Global University Placements</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold md:text-6xl mb-2">1st</h3>
                    <p className="text-base md:text-lg font-medium">In Local Education Impact Rankings</p>
                  </div>
            
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>


        {/* Apply Now Button Section */}
        <div className='mx-auto pb-12 flex flex-col justify-center items-center'>
          <button className="px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold font-serif rounded-r-full bg-gradient-to-r from-[#0E013d] to-[#F4B24A] dark:bg-gradient-to-r from-[#010218] to-[#F4B24A] text-white shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/admissions')} >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolsSection;