import React, { useRef } from "react";
import HeroAbout from "@/components/HeroAbout";
import MissionVission from "@/components/MissionVission";
import History from "@/components/History";
import Leadership from "@/components/Leadership";
import WhyChoosePioneer from "@/components/WhyChoosePioneer";

const About: React.FC = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const whyChoosePioneerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f1f2fc]">
      <div className="relative ">
        <HeroAbout />
        {/* Sticky Navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-md md:max-w-4xl px-4">
          <div className="bg-[#f1f2fc] shadow-md rounded-xl px-4 md:px-8 py-4 md:py-6 text-sm md:text-base">
            <div className="grid grid-cols-2 gap-3 md:flex md:justify-center md:items-center md:space-x-8">
              <button 
                onClick={() => scrollToSection(missionRef)}
                className="text-[#0e013d] hover:text-[#F4b24a] font-medium w-full md:w-auto text-center py-2 md:py-0"
              >
                Mission & Vision
              </button>
              <button 
                onClick={() => scrollToSection(historyRef)}
                className="text-[#0e013d] hover:text-[#F4b24a] font-medium w-full md:w-auto text-center py-2 md:py-0"
              >
                Our History
              </button>
              <button 
                onClick={() => scrollToSection(leadershipRef)}
                className="text-[#0e013d] hover:text-[#F4b24a] font-medium w-full md:w-auto text-center py-2 md:py-0"
              >
                Leadership
              </button>
              <button 
                onClick={() => scrollToSection(whyChoosePioneerRef)}
                className="text-[#0e013d] hover:text-[#F4b24a] font-medium w-full md:w-auto text-center py-2 md:py-0"
              >
                Why Choose Pioneer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <div ref={missionRef}>
          <MissionVission />
        </div>
        <div ref={historyRef}>
          <History />
        </div>
        <div ref={leadershipRef}>
          <Leadership />
        </div>
        <div ref={whyChoosePioneerRef}>
          <WhyChoosePioneer />
        </div>
      </div>
    </div>
  );
};

export default About;
