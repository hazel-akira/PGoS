import React from 'react';
import { motion } from "framer-motion";

const bubbles = [
  {
    icon: <img src="/images/icon-1.png" alt="icon" className="h-16 w-16 object-contain" />, // Community
    title: 'Community & Collaboration',
    desc: '1000+ Students Connected & Thriving',
    gradient: 'from-blue-400 via-indigo-400 to-amber-400',
    shadow: 'shadow-blue-200',
  },
  {
    icon: <img src="/images/icon-2.png" alt="icon" className="h-16 w-16 object-contain" />, // Academic Excellence
    title: 'Academic Excellence',
    desc: '#1 in Academic Performance Countywise',
    gradient: 'from-purple-700 via-rose-400 to-yellow-200',
    shadow: 'shadow-rose-200',
  },
  {
    icon: <img src="/images/icon-3.png" alt="icon" className="h-16 w-16 object-contain" />, // Progress & Growth
    title: 'Progress & Growth',
    desc: '25% Year-Over-Year Growth in Key Areas',
    gradient: 'from-blue-300 via-blue-500 to-yellow-200',
    shadow: 'shadow-blue-100',
  },
  {
    icon: <img src="/images/icon-1.png" alt="icon" className="h-16 w-16 object-contain" />, // Dedicated Educators
    title: 'Dedicated Educators',
    desc: 'Award-Winning Faculty with Over 15 Years Average Experience',
    gradient: 'from-amber-400 via-orange-400 to-purple-700',
    shadow: 'shadow-orange-200',
  },
];

const AtAGlanceSection: React.FC = () => (
  <section className="w-full bg-[#f5f6fa] py-12 px-2 md:px-0">
    <div className="max-w-6xl mx-auto">
      <hr className="border-t border-gray-300 mb-6" />
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0E013D] mb-10 tracking-wide">PIONEER GROUP OF SCHOOLS AT A GLANCE</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {bubbles.map((bubble, idx) => (
          <motion.div
            key={bubble.title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative flex flex-col items-center w-64 h-64 bg-gradient-radial ${bubble.gradient} rounded-full shadow-lg ${bubble.shadow} p-6`}
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
          >
            <div className="flex items-center justify-center w-20 h-20 mb-4">
              {bubble.icon}
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg text-[#0E013D] mb-2">{bubble.title}</h3>
              <p className="text-sm text-[#0E013D] opacity-80 font-medium">{bubble.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <a href="#" className="bg-[#FFA726] hover:bg-[#ff9800] text-white font-semibold py-3 px-8 rounded shadow-md transition-all text-base md:text-lg" style={{boxShadow: '2px 2px 0 #8884'}}>
          MORE FACTS ABOUT PIONEER GROUP OF SCHOOLS
        </a>
      </div>
    </div>
  </section>
);

export default AtAGlanceSection; 