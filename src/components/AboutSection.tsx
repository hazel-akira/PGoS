import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-[#02032D] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-0">
        {/* Text Block */}
        <div className="bg-white text-black p-8 max-w-md shadow-lg  px-6 pl-8 md:pl-12">
          <p className="text-sm text-orange-500 font-medium mb-2">GROW & THRIVE</p>
          <h2 className="text-xl font-semibold mb-4">Pioneer Group of Schools</h2>
          <p className="mb-6 text-sm">
            For more than 25 years, Pioneer Schools have been nurturing and transforming the lives of young people through education.
            We take pride in being a trusted beacon of educational success.
          </p>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 flex items-center gap-2 hover:bg-orange-600 transition">
            DISCOVER MORE <ArrowRight size={16} />
          </button>
        </div>

        {/* Image Block */}
        <div className="relative w-full md:w-1/2 h-full pr-0 md:pr-8">
          <img
            src="/images/aboutsection.jpg"
            alt="aboutpgos"
            loading='lazy'
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;