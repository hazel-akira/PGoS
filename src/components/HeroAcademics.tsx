import React, { useRef } from 'react';

const HeroAcademics: React.FC = () => {
  

    return(
      <section className="relative bg-[#f2f2f2] dark:bg-slate-900 bg-cover bg-center bg-fixed h-[80vh] text-white flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/academicbanner.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="p-8 text-center rounded-lg relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F4B24A]">
           Shaping bright futures through excellence in learning.
          </h1>
        </div>
       

      </section>
    )
};
  
export default HeroAcademics;
  