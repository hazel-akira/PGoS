import React, { useRef } from 'react';
import HeroAcademics from '../components/HeroAcademics';
import AcademicPhilosophy from '../components/AcademicPhilosophy';
import Curriculum from '../components/Curriculum';
import UniquePrograms from '../components/UniquePrograms';
import AcademicAchievements from '../components/AcademicAchievements';
import AcademicJourney from '../components/AcademicJourney';


const Academics = () => {
  const curriculumRef = useRef(null);
  const learningpathRef = useRef(null);
  const highlightsRef = useRef(null);
  const wherestorygoesRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeroAcademics />
      
      {/* Enhanced Navigation - Fixed positioning and spacing */}
      <div className="relative -mt-8 md:-mt-10 z-20 mb-0">
        <div className="w-full max-w-5xl bg-[#f1f2fc] shadow-lg rounded-xl px-4 py-4 md:py-6 text-sm md:text-base mx-auto border border-white/20">
          
          {/* Mobile: Grid layout for better stacking */}
          <div className="grid grid-cols-1 md:hidden gap-3">
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-4 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(curriculumRef)}
            >
              Curriculum Overview
            </button>
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-4 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(learningpathRef)}
            >
              Elite Learning Paths
            </button>
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-4 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(highlightsRef)}
            >
              Academic Highlights
            </button>
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-4 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(wherestorygoesRef)}
            >
              Where your story goes
            </button>
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex justify-center items-center font-serif space-x-8">
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-6 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(curriculumRef)}
            >
              Curriculum Overview
            </button>
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-6 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(learningpathRef)}
            >
              Elite Learning Paths
            </button>
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-6 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(highlightsRef)}
            >
              Academic Highlights
            </button>
            <button 
              className="text-[#0e013d] hover:text-[#F4B24A] hover:bg-white/50 font-medium text-center py-3 px-6 rounded-lg transition-all duration-200 border border-transparent hover:border-[#F4B24A]/30"
              onClick={() => scrollToSection(wherestorygoesRef)}
            >
              Where your story goes
            </button>
          </div>
        </div>
      </div>
      
      {/* Content sections - No gap between navbar and first section */}
      <div className="mt-0">
        <AcademicPhilosophy />
        <div ref={curriculumRef}><Curriculum /></div>
        <div ref={learningpathRef}><UniquePrograms /></div>
        <div ref={highlightsRef}><AcademicAchievements /></div>
        <div ref={wherestorygoesRef}><AcademicJourney /></div>
      </div>
    </div>
  );
};

export default Academics;