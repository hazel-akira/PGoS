import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#f2f2f2] dark:bg-gray-900 py-4 md:py-12 overflow-x-hidden">
     <div className="mt-24 flex flex-col items-center text-center px-4">
        <hr className="border-t border-gray-300 mb-6 w-11/12 sm:w-3/4 md:w-1/2" />
        {/* Large Outlined Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold dark:text-[#848485] font-serif tracking-wide text-[#0E013d] whitespace-nowrap">
          Grow <span className="text-[#f4b24a]">&amp;</span> Thrive
        </h2>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 relative z-10 pt-24 md:pt-40">
        {/* Text Block */}
        <div className="relative flex flex-col items-center w-full md:w-auto md:ml-28">
          <div className="bg-white dark:bg-gray-400 text-[#02032d] p-6 md:p-12 max-w-md w-full shadow-lg text-center">
            <h3 className="text-2xl md:text-4xl font-light mb-2">Excellence Rooted in </h3>
            <div className="text-[#F4B24A] text-2xl md:text-4xl font-normal leading-tight mb-4">
            Character and <br />Leadership
            </div>
            <p className="mb-6 text-base md:text-lg">
              For more than 25 years, Pioneer Schools have been nurturing and transforming the lives of young people through education. We take pride in being a trusted beacon of educational success.
            </p>
          </div>
          {/* Button below, overlapping the card */}
          <span className="inline-flex items-center justify-center w-40 h-12 bg-[#F4B24A] rounded-r-full font-semibold text-white cursor-pointer transition hover:bg-[#e68a00] shadow-[-8px_8px_20px_0_rgba(0,0,0,0.15)] -mt-6 md:-mt-6 mx-auto"
           onClick={() => navigate('/about/history')}>
            Core &amp; Culture   
            <ArrowRight className="ml-3 w-5 h-5" />
          </span>
        </div>
       
        {/* Image Block */}
        <div className="flex-1 flex justify-center md:justify-start relative w-full max-w-xl md:mr-15 mt-8 md:mt-0">
          {/* Accent border */}
          <div className="absolute -top-2 -right-2 w-full h-full p-1 rounded-lg bg-gradient-to-br from-[#0E013d] to-[#F4B24A] z-0"></div>
          <img
            src="/images/aboutsection2.jpg"
            alt="aboutpgos"
            loading="lazy"
            className="relative w-full h-auto rounded-lg shadow-xl z-10"
          />
          {/* Circular Badge */}
          <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-10 md:-right-10 bg-gradient-to-br from-[#0E013d] via-[#1E2A60] to-[#F4B24A] text-white flex items-center justify-center rounded-full shadow-lg w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 z-20 p-2">
            <span className="text-[0.6rem] sm:text-sm md:text-lg font-light text-center leading-tight">
              A Tradition of Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;