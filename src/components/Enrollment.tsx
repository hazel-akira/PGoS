import React from "react";
import Lottie from "lottie-react";
import topAnimation from "../animations/books.json";
import sideAnimation from "../animations/education-background.json";
import sceneAnimation from "../animations/bulbBooks.json";

// All animations
const animations = [topAnimation, sideAnimation, sceneAnimation];

// Array of randomized positions
const animationSpots = [
  { top: "10%", left: "5%" },
  { top: "20%", right: "10%" },
  { bottom: "15%", left: "15%" },
  { bottom: "5%", right: "5%" },
  { top: "35%", left: "50%" },
];

const steps = [
  {
    number: 1,
    icon: "📩",
    title: "Inquiry",
    description: "Submit an inquiry or call the admissions office.",
    color: "bg-sky-300",
    link: "https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F",
  },
  {
    number: 2,
    icon: "🏫",
    title: "Visit the School",
    description: "Schedule a guided tour.",
    color: "bg-orange-400",
    link: "https://example.com/visit",
  },
  {
    number: 3,
    icon: "📝",
    title: "Application",
    description: "Submit application forms.",
    color: "bg-violet-700",
    link: "https://example.com/application",
  },
  {
    number: 4,
    icon: "🎤",
    title: "Interview",
    description: "Attend a scheduled interview.",
    color: "bg-red-700",
    link: "https://example.com/interview",
  },
  {
    number: 5,
    icon: "✅",
    title: "Admission",
    description: "Receive admission confirmation.",
    color: "bg-green-600",
    link: "https://example.com/admission",
  },
];

// Generate a random float between min and max
const getRandomFloat = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2);

// Main Component
const EnrollmentProcess: React.FC = () => {
  return (
    <div className="relative bg-[#0E013D] text-white p-8 min-h-50vh flex flex-col items-center overflow-hidden">
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

      {/* Horizontal Stepper */}
      <div className="w-full bg-[#f7f7f7] py-8 flex justify-center z-10">
        <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center w-32 cursor-pointer" onClick={() => window.open(step.link, "_blank")}> 
              <div className="relative mb-2">
                <span className="absolute -top-3 -left-3 bg-[#c9a030] text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm z-10">
                  {step.number}
                </span>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                  <span className="text-3xl">{step.icon}</span>
                </div>
              </div>
              <div className="text-center text-base mt-2 font-bold text-[#0E013D]">{step.title}</div>
              <div className="text-center text-xs text-gray-600 mt-1">{step.description}</div>
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
