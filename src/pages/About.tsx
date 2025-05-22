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
    <div>
      <HeroAbout />
      
      {/* Sticky Navigation */}
      <div className="sticky top-[100px] z-30">
        <div className="bg-[#f1f2fc] shadow-md rounded-xl px-4 md:px-8 py-4 md:py-10 text-sm md:text-base">
          <div className="flex justify-center space-x-8">
            <p
              onClick={() => scrollToSection(missionRef)}
              className="text-[#0e013d] hover:text-[#FF8C00] font-medium"
            >
              Mission & Vision
            </p>
            <p
              onClick={() => scrollToSection(historyRef)}
              className="text-[#0e013d] hover:text-[#FF8C00] font-medium"
            >
              Our History
            </p>
            <p 
              onClick={() => scrollToSection(leadershipRef)}
              className="text-[#0e013d] hover:text-[#FF8C00] font-medium"
            >
              Leadership
            </p>
            <p 
              onClick={() => scrollToSection(whyChoosePioneerRef)}
              className="text-[#0e013d] hover:text-[#FF8C00] font-medium"
            >
              Why Choose Pioneer
            </p>
          </div>
        </div>
      </div>

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
  );
};

export default About;
