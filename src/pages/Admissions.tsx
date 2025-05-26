import React from "react";
import Lottie from 'lottie-react';
import { ChevronRight } from "lucide-react";
import backgroundAnimation from '../animations/education-background.json'; 
import EnrollmentProcess from "../components/Enrollment";
import AdmRequirements from "@/components/AdmRequirements";
import ContactInfoSection from "@/components/ContactInfoSection";
import CampusesSection from "@/components/CampusesSection";

const HeroAdm: React.FC = () => {
  const schools = [
    { name: 'Pioneer School', link: 'https://www.pioneerschools.ac.ke/' },
    { name: 'Pioneer Girls School', link: 'https://www.pioneergirlsschool.co.ke/' },
    { name: 'Pioneer Junior Academy', link: 'https://www.pioneerjunioracademy.co.ke/' },
    { name: 'Pioneer Girls Junior Academy', link: 'https://www.pioneergirlsjunioracademy.co.ke/' },
    { name: 'St. Paul Thomas Academy', link: 'https://www.stpaulthomasacademy.co.ke/' },
  ];

  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-[60vh] md:h-[80vh] text-white flex flex-col items-center justify-end"
        style={{ backgroundImage: "url('/images/adm.png')" }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-55 z-0"></div>

        {/* Main content */}
        <div className="p-4 md:p-8 text-center rounded-lg max-w-2xl relative z-10 mb-10 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#FFC300]">
            Discover Your Future at Pioneer Group Of Schools
          </h1>
        </div>

        {/* Enrollment Box */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end bg-clip-padding:1">
          <div className="bg-white/50 rounded-lg p-4 mb-7 mt-2 backdrop-blur-sm w-full max-w-md mx-4">
            <h3 className="text-xl font-semibold mb-3">Enrollment Now Open</h3>
            <div className="bg-white/40 rounded p-2 mb-3 hover:bg-white/20 transition-colors">
              <p className="font-semibold mb-4">Start Your Journey Today!</p>
              <a
                href="#enrolment"
                className="mt-2 inline-block px-6 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition"
              >
                Enrol Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="relative z-10 w-full md:w-1/2 bg-gray-100 text-black py-3 px-4 md:px-8 rounded-t-2xl shadow-lg">
          <nav className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0">
            <a
              href="#enrolment"
              className="text-base md:text-lg font-semibold hover:text-orange-600 transition"
            >
              Enrolment process
            </a>
            <a
              href="#requirements"
              className="text-base md:text-lg font-semibold hover:text-orange-600 transition"
            >
              Requirements for admission
            </a>
            <a
              href="#contact"
              className="text-base md:text-lg font-semibold hover:text-orange-600 transition"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </section>

      {/* Target Sections */}
      <div id="enrolment" className="scroll-mt-20">
        <EnrollmentProcess />
      </div>

      <div id="requirements" className="scroll-mt-20">
        <AdmRequirements />
      </div>

      <div id="contact" className="scroll-mt-20">
        <ContactInfoSection />
      </div>
      <div id="contact" className="scroll-mt-20">
        <CampusesSection />
      </div>
    </>
  );
};

export default HeroAdm;
