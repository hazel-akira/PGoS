import React from 'react';
import { Users, BookOpen, BarChart2, School } from 'lucide-react';

const stats = [
  {
    icon: <Users size={32} />,
    title: 'Community & Collaboration',
    description: '1000+ Students Connected & Thriving',
    color: 'from-blue-500 to-yellow-500',
    position: 'md:top-0 md:left-1/2 md:-translate-x-1/2',
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Academic Excellence',
    description: '#1 in Academic Performance Countywide',
    color: 'from-orange-500 to-purple-600',
    position: 'md:top-1/3 md:left-1/4 md:-translate-x-1/2',
  },
  {
    icon: <BarChart2 size={32} />,
    title: 'Progress & Growth',
    description: '25% Year-Over-Year Growth in Key Areas',
    color: 'from-blue-400 to-yellow-400',
    position: 'md:top-1/3 md:left-3/4 md:-translate-x-1/2',
  },
  {
    icon: <School size={32} />,
    title: 'Dedicated Educators',
    description: 'Award-Winning Faculty with Over 15 Years Average Experience',
    color: 'from-orange-300 to-red-500',
    position: 'md:top-2/3 md:left-1/2 md:-translate-x-1/2',
  },
];

const GlanceSection = () => {
  return (
    <section className="relative bg-[#ECECFB] py-28 px-4">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-2xl font-semibold text-[#0D0B3B] mb-20">
          PIONEER GROUP OF SCHOOLS AT A GLANCE
        </h2>

        {/* Container */}
        <div className="relative md:h-[500px] flex flex-col gap-10 items-center md:block">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative md:absolute ${stat.position} transform flex flex-col items-center text-center w-64`}
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

        <button className="mt-10 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-semibold">
          MORE FACTS ABOUT PIONEER GROUP OF SCHOOLS
        </button>
      </div>
    </section>
  );
};

export default GlanceSection;
