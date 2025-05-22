import React from 'react';
import { Users, BookOpen, BarChart2, School } from 'lucide-react';
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users size={32} className='h-16 w-16 object-contain'/>,
    title: 'Community & Collaboration',
    description: '1000+ Students Connected & Thriving',
    color: 'from-blue-500 to-yellow-500',
    position: 'md:top-0 md:left-1/2 md:-translate-x-1/2',
    shadow: 'shadow-orange-200',
  },
  {
    icon: <BookOpen size={32} className='h-16 w-16 object-contain'/>,
    title: 'Academic Excellence',
    description: '#1 in Academic Performance Countywide',
    color: 'from-amber-500 to-purple-600',
    position: 'md:top-1/3 md:left-1/4 md:-translate-x-1/2',
    shadow: 'shadow-orange-200',
  },
  {
    icon: <BarChart2 size={32} className='h-16 w-16 object-contain' />,
    title: 'Progress & Growth',
    description: '25% Year-Over-Year Growth in Key Areas',
    color: 'from-blue-400 to-yellow-400',
    position: 'md:top-1/3 md:left-3/4 md:-translate-x-1/2',
    shadow: 'shadow-blue-200',
  },
  {
    icon: <School size={32} className='h-16 w-16 object-contain' />,
    title: 'Dedicated Educators',
    description: 'Award-Winning Faculty with Over 15 Years Average Experience',
    color: 'from-orange-300 to-amber-500',
    position: 'md:top-2/3 md:left-1/2 md:-translate-x-1/2',
    shadow: 'shadow-blue-200',
  },
];

const GlanceSection: React.FC = () => {
  return (
    <section className="relative bg-[#ECECFB] py-28 px-4">
      <div className="max-w-6xl mx-auto text-center relative">
        <hr className="border-t border-gray-300 mb-6" />
        <h2 className="text-2xl font-semibold text-[#0D0B3B] mb-20 tracking-wide">
          PIONEER SCHOOLS AT A GLANCE
        </h2>

        {/* Container */}
        <div className="relative md:h-[500px] mb-10 flex flex-col gap-10 items-center md:block">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative md:absolute ${stat.position} transform flex flex-col items-center text-center w-64 h-64 rounded-full shadow-lg ${stat.shadow} p-6 hover:bg-[#FAFAFC] focus:bg-[#FAFAFC] active:bg-[#FAFAFC] `}
              
            >
              <div
                className={`bg-gradient-to-br ${stat.color} text-white p-5 rounded-full shadow-2xl mb-4`}
              >
                {stat.icon}
              </div>
              <h3 className="font-bold text-[#0D0B3B]">{stat.title}</h3>
              <p className="text-sm mt-1 text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-20 bg-[#ff9b04b9] hover:bg-orange-200 text-white px-6 py-3 rounded hover:bg-orange-600  transition font-semibold rounded shadow-md transition-all text-base md:text-lg" style={{boxShadow: '2px 2px 0 #8884'}}>
          MORE FACTS
        </button>
      </div>
    </section>
  );
};

export default GlanceSection;
