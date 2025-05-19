import React from "react";
import HeroAbout from "@/components/HeroAbout";
import MissioVission from "@/components/MissioVission";
import History from "@/components/History";
import Leadership from "@/components/Leadership";
import WhyChoosePioneer from "@/components/WhyChoosePioneer";




const About = () => {
  return (
    <div>
     <HeroAbout />
     <MissioVission />
     <History />
     <Leadership />
     <WhyChoosePioneer />
    </div>
  );
};

export default About;
