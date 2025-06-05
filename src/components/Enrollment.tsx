import React from "react";
import Lottie from "lottie-react";
import topAnimation from "../animations/books.json";
import sideAnimation from "../animations/education-background.json";
import sceneAnimation from "../animations/bulbBooks.json";

const animations = [topAnimation, sideAnimation, sceneAnimation];

const steps = [
  {
    number: 1,
    icon: "📩",
    title: "Inquiry",
    description: "Begin your journey with us by reaching out through our inquiry platform or by calling the admissions office. Our friendly team is available to answer your questions, provide detailed information about our schools, and guide you through the admission process. This step ensures you're well-informed and confident as you move forward.",
    color: "bg-sky-300",
    link: "https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F",
    image: topAnimation,
  },
  {
    number: 2,
    icon: "🏫",
    title: "Visit the School",
    description: "Schedule a visit to experience the vibrant environment of our school firsthand. During your guided tour, you’ll meet our dedicated staff, explore our facilities, and see our unique teaching approach in action. It’s a valuable opportunity to envision your child’s future with us.",
    color: "bg-orange-400",
    link: "/visit-us",
    image: sceneAnimation,
  },
  {
    number: 3,
    icon: "📝",
    title: "Application",
    description: "After your visit, you can begin the formal application process. Complete the necessary forms either online or in person. Our admissions team will be available to assist with any requirements or documents needed to ensure a smooth application experience.",
    color: "bg-violet-700",
    link: "https://enquireto.pioneergroupofschools.co.ke/Account/Login/Register?returnUrl=%2F",
    image: sideAnimation,
  },
  {
    number: 4,
    icon: "🎤",
    title: "Interview",
    description: "We invite prospective students and their parents for an interview to better understand the learner’s strengths, needs, and aspirations. This personalized session helps us determine the best fit for your child and fosters a shared understanding of expectations and values.",
    color: "bg-red-700",
    link: "/contact",
    image: topAnimation,
  },
  {
    number: 5,
    icon: "✅",
    title: "Admission",
    description: "Once the interview and assessment are complete, successful applicants will receive an official admission offer. Welcome to the Pioneer Group of Schools! Our team will guide you through the final steps including orientation, uniform purchase, and class placement to ensure a seamless start.",
    color: "bg-green-600",
    link: "/contact",
    image: sceneAnimation,
  },
];

const EnrollmentProcess: React.FC = () => {
  return (
    <div className="relative bg-[#f1f1f1] text-[#0E013D] py-16 px-6">
      <h2 className="text-4xl font-bold mb-2 text-center">Enrolment Process</h2>
      <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
      <p className="text-center max-w-xl mx-auto mb-16">
        Steps to admission to the Pioneer Group of Schools
      </p>

      <div className="space-y-16 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12"
          >
            {/* Left Section - Icon and Number */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="relative">
                <span className={`absolute -top-3 -left-3 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm z-10 bg-[#c9a030]`}>
                  {step.number}
                </span>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md border ${step.color}`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
              </div>
              <div className="text-lg font-semibold mt-4">{step.title}</div>
            </div>

            {/* Middle Section - Description */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-orange-600 hover:underline font-medium"
              >
                Learn more →
              </a>
            </div>

            {/* Right Section - Animation/Image */}
            <div className="w-full md:w-1/3">
              <Lottie animationData={step.image} loop className="w-full h-48" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentProcess;
