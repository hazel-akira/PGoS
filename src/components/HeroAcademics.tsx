import React from 'react';

const HeroAcademics: React.FC = () => {
    return(
      <section className="relative bg-cover bg-center h-[80vh] text-white flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/academicbanner.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="p-8 text-center rounded-lg relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F4B24A]">
           Shaping bright futures through excellence in learning.
          </h1>
        </div>
       {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0 z-10 transform translate-y-1/2">
            <div className="bg-[#f1f2fc] shadow-md rounded-xl px-4 md:px-8 py-4 md:py-6 text-sm md:text-base mx-4 md:mx-96">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <button className="text-[#0e013d] hover:text-[#F4B24A] font-small w-full md:w-auto text-center py-2 md:py-0">
                    Curriculum Overview
                </button>
                <button className="text-[#0e013d] hover:text-[#F4B24A] font-small w-full md:w-auto text-center py-2 md:py-0">
                    Unique Programs
                </button>
                <button className="text-[#0e013d] hover:text-[#F4B24A] font-small w-full md:w-auto text-center py-2 md:py-0">
                    Academic Achievements
                </button>
                <button className="text-[#0e013d] hover:text-[#F4B24A] font-small w-full md:w-auto text-center py-2 md:py-0">
                    Experienced Moderators
                </button>
                </div>
            </div>
        </div>

      </section>
    )
  };
  
export default HeroAcademics;
  