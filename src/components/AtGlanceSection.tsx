import React from 'react';
import { Users, BookOpen, BarChart2, School } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const stats = [
  {
    icon: <Users size={32} className='h-18 w-18 object-contain'/>,
    title: 'Community & Collaboration',
    description: '1000+ Students Connected & Thriving',
    color: 'from-blue-500 to-yellow-500',
    position: 'md:top-0 md:left-1/2 md:-translate-x-1/2',
    shadow: 'shadow-blue-200',
    hover: 'hover:shadow-blue-900'
  },
  {
    icon: <BookOpen size={32} className='h-18 w-18 object-contain'/>,
    title: 'Academic Excellence',
    description: '#1 in Academic Performance Countywide',
    color: 'from-amber-500 to-purple-600',
    position: 'md:top-1/3 md:left-1/4 md:-translate-x-1/2',
    shadow: 'shadow-orange-200',
    hover: 'hover:shadow-yellow-900'
  },
  {
    icon: <BarChart2 size={32} className='h-18 w-18 object-contain' />,
    title: 'Progress & Growth',
    description: '25% Year-Over-Year Growth in Key Areas',
    color: 'from-blue-900 to-yellow-600',
    position: 'md:top-1/3 md:left-3/4 md:-translate-x-1/2',
    shadow: 'shadow-blue-200',
    hover: 'hover:shadow-blue-900'
  },
  {
    icon: <School size={32} className='h-18 w-18 object-contain' />,
    title: 'Dedicated Educators',
    description: 'Award-Winning Faculty with Over 15 Years Average Experience',
    color: 'from-orange-300 to-amber-500',
    position: 'md:top-2/3 md:left-1/2 md:-translate-x-1/2',
    shadow: 'shadow-orange-200',
    hover: 'hover:shadow-yellow-900'
  },
];

const AtGlanceSection: React.FC = () => {

  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-[#02032d] via-slate-900 to-[#02032d] py-28 px-4">
      <div className="max-w-6xl mx-auto text-center relative">
        <hr className="border-t border-gray-300 mb-6 mx-20" />
        <h2 className=" text-3xl md:text-5xl font-semibold font-serif text-white mb-20 tracking-wide">
          Pioneer Schools At a Glance
        </h2>

        {/* Container */}
        <div className="relative md:h-[500px] mb-10 flex flex-col gap-10 items-center md:block">
          {stats.map((stat, index) => (
            <div
            key={index}
            className={`relative md:absolute ${stat.position} transform flex flex-col items-center text-center w-64 h-64 rounded-full shadow-lg ${stat.shadow} p-6 
              transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 hover:shadow-xl ${stat.hover}
            `}
              
            >
              <div
                className={`bg-gradient-to-br ${stat.color} text-white p-5 rounded-full shadow-2xl mb-4`}
              >
                {stat.icon}
              </div>
              <h3 className="font-bold text-[#F4B24A]">{stat.title}</h3>
              <p className="text-md mt-1 text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-20 bg-[#F4B24A] hover:bg-[#e68a00] text-white px-6 py-3 font-semibold rounded shadow-md transition-all text-md md:text-lg" style={{boxShadow: '2px 2px 0 #8884'}}
          onClick={() => navigate('/academics')}>
          More Facts
        </button>
      </div>
    </section>
  );
};

export default AtGlanceSection;
