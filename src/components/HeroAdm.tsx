import React from "react";
// Removed: import { Link } from "react-router-dom";
import EnrollmentProcess from "../components/Enrollment";
import AdmRequirements from "@/components/AdmRequirements";

const HeroAdm: React.FC = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[50vh] text-white flex flex-col items-center justify-end"
        style={{ backgroundImage: "url('/images/adm.png')" }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Main content */}
        <div className="p-8 text-center rounded-lg max-w-2xl relative z-10 ">
          <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-4 text-[#FFC300]">
            Discover Your Future at Pioneer Group Of Schools
          </h1>
        </div>

        {/* Enrollment Box */}
        <div className="md:w-1/3 flex justify-center md:justify-end bg-clip-padding:1">
          <div className="bg-white/50 rounded-lg p-4 mb-7 mt-2 backdrop-blur-sm w-full max-w-md">
            <h3 className="text-xl font-semibold mb-3">Enrollment Now Open</h3>
            <div className="bg-white/40 rounded p-2 mb-3 hover:bg-white/20 transition-colors">
              <p className="font-semibold mb-4">Start Your Journey Today!</p>
              <a
                href="https://enquireto.pioneergroupofschools.co.ke/Account/Login/Register?returnUrl=%2F"
                className="mt-2 inline-block px-6 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar 
        <div className="relative z-10 w-full bg-gray-100 text-black py-4 px-8 rounded-t-3xl shadow-lg">
          <nav className="container mx-auto flex justify-around items-center">
            <a
              href="#enrolment"
              className="text-lg font-semibold hover:text-orange-600 transition"
            >
              Enrolment process
            </a>
            <a
              href="#requirements"
              className="text-lg font-semibold hover:text-orange-600 transition"
            >
              Requirements for admission
            </a>
            
          </nav>
        </div>*/}
      </section>

      
     
    </>
  );
};

export default HeroAdm;
