import React from "react";
import Lottie from "lottie-react";
import topAnimation from "../animations/books.json";
import sideAnimation from "../animations/education-background.json";
import sceneAnimation from "../animations/bulbBooks.json";

// All animations
const animations = [topAnimation, sideAnimation, sceneAnimation];

// Array of randomized positions
const animationSpots = [
  { top: "50%", left: "50%" },
  { top: "30%", right: "30%" },
  { bottom: "35%", left: "15%" },
  { bottom: "15%", right: "5%" },
  { top: "50%", left: "35%" },
];
const steps = [
  {
    number: 1,
    title: "Inquiry",
    description: "Submit an inquiry or call the admissions office.",
    color: "bg-sky-300",
    link: "https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F",
  },
  {
    number: 2,
    title: "Visit the School",
    description: "Schedule a guided tour.",
    color: "bg-orange-400",
    link: "https://example.com/visit",
  },
  {
    number: 3,
    title: "Application",
    description: "Submit application forms.",
    color: "bg-violet-700",
    link: "https://enquireto.pioneergroupofschools.co.ke/Account/Login/Register?returnUrl=%2F",
  },
  {
    number: 4,
    title: "Interview",
    description: "Attend a scheduled interview.",
    color: "bg-red-700",
    link: "https://example.com/interview",
  },
  {
    number: 5,
    title: "Admission",
    description: "Receive admission confirmation.",
    color: "bg-green-800",
    link: "https://example.com/admission",
  },
];
// Generate a random float between min and max
const getRandomFloat = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2);

// Main Component
const EnrollmentProcess: React.FC = () => {
  return (
    <div className="relative bg-[#EDEDED] text-black p-8 min-h-50vh flex flex-col items-center overflow-hidden">
      {/* Floating Animations */}
      {animationSpots.map((pos, index) => {
        const animation = animations[index % animations.length]; // rotate animations
        const floatDuration = `${getRandomFloat(5, 12)}s`; // random duration
        const floatDelay = `${getRandomFloat(0, 4)}s`; // random delay

        return (
          <div
            key={index}
            className="absolute w-16 opacity-70 pointer-events-none"
            style={{
              ...pos,
              animation: `floatY ${floatDuration} ease-in-out infinite`,
              animationDelay: floatDelay,
              zIndex: 0,
            }}
          >
            <Lottie animationData={animation} loop />
          </div>
        );
      })}

      {/* Title and Steps */}
      <h2 className="text-[35px] font-bold mb-2 z-10">Enrolment Process</h2>
      <span className="w-20 h-px bg-orange-300 z-10" />
      <p className="mb-12 text-center max-w-xl z-10">
        Steps to admission to the Pioneer Group of Schools
      </p>

      {/* Container with stroke and shadow */}
      <div className="bg-[#02032de1] p-4 md:p-6 rounded-3xl border-2 border-orange-400 max-w-6xl w-full mx-4 md:mx-8 shadow-[0_0_20px_rgba(255,165,0,0.3)] z-10">
        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center min-h-[350px] px-4 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(step.link, "_blank")}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-black font-extrabold text-3xl mb-2 border-2 border-orange-400 ${step.color} shadow-md hover:shadow-lg`}
              >
                {step.number}
              </div>
              <div className="font-black text-white hover:text-orange-300">{step.title}</div>
              <div className="text-sm mt-1 text-gray-300 px-2">{step.description}</div>

              {/* Connecting Lines - Only show on desktop */}
              {index < steps.length - 1 && (
                <div
                  className="hidden   absolute w-[120px] h-[2px] bg-orange-600"
                  style={{
                    top: index % 2 === 0 ? "20px" : "60px",
                    left: "120px",
                    transform: `rotate(${index % 2 === 0 ? "23deg" : "-25deg"})`,
                    transformOrigin: "left center",
                  }}
                />
              )}

              {/* Vertical Lines for Mobile */}
              {index < steps.length - 1 && (
                <div
                  className="md:hidden absolute w-[2px] h-12 bg-orange-600"
                  style={{
                    top: "97%",
                    left: "50",
                    transform: "translateX(-60%)",
                  }}
                />
              )}
               {/* Vertical Lines for ipad 
             {index < steps.length - 1 && (
              <div
                className="lg:hidden absolute w-[120px] h-2 bg-orange-600"
                style={{
                  top: "100%",
                  left: "50px",
                  transform: "translateX(-60%)",
                }}
              />
            )}*/}
       
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes floatY {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EnrollmentProcess;
