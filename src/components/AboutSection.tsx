import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-[#FAFAFC] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-0">
        {/* Text Block */}
        <div className="bg-white text-black p-8 py-20 max-w-md shadow-lg  px-6 pl-8 md:pl-12 md:ml-20">
          <p className="text-sm text-[#ff9800] font-medium mb-2">GROW & THRIVE</p>
          <h2 className="text-xl font-semibold mb-4">Pioneer Group of Schools</h2>
          <p className="mb-6 text-sm">
            For more than 25 years, Pioneer Schools have been nurturing and transforming the lives of young people through education.
            We take pride in being a trusted beacon of educational success.
          </p>
          <button className="bg-[#ff9800] text-white font-bold px-6 py-2 flex items-center gap-2 hover:bg-orange-600 transition">
            DISCOVER MORE <ArrowRight size={16} />
          </button>
        </div>

       {/* Image Block */}
        <div className="relative w-full max-w-5xl mx-auto shadow-xl">
          <div className="absolute bottom-0 right-0 w-full h-full border-r-[12px] border-b-[12px] border-[#a21c30] z-0" />
          <img
            src="/images/aboutsection2.jpg"
            alt="aboutpgos"
            loading="lazy"
            className="relative z-10 w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;