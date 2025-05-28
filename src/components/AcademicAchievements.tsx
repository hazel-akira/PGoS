import React, { useState } from "react";

const schools = {
  "St.Paul's Thomas Academy": [
    { year: '2022 🥇', description: 'Top 5 National Level - Murang’a County', image: '/images/pioneergirlshockey.jpg' },
    
  ],
  "Pioneer School": [
    { year: '2024 🥈', description: 'Top 10 National Level - Nairobi County', image: '/images/pioneerboysswimming.jpg' },
    
  ],
  "Pioneer Girl's School": [
    { year: '2020 🥉', description: 'Top 15 National Level - Nairobi County', image: '/images/girlsjuniordramaclub.jpg' },
    
  ],
  "Pioneer Girls Junior School": [
    { year: '2022 🥈', description: 'National Science Fair Finalist', image: '/images/stpaulsorchestra.jpg' },
  ],
  "Pioneer Junior School": [
    { year: '2023 🥇', description: 'National Music Champions', image: '/images/boysjunioraviation.jpg' },
  ]
};

const AcademicAchievements: React.FC = () => {
  const [activeSchool, setActiveSchool] = useState<keyof typeof schools>("St.Paul's Thomas Academy");

  const activeAchievements = schools[activeSchool];

  return (
    <section className="w-full bg-[#02032d] py-12 px-2 md:px-0 text-white">
      <div className="max-w-6xl mx-auto">
        <div className='flex items-center justify-center mb-6 mt-2'>
           <span className="w-8 md:w-24 h-px bg-orange-300"/>
              <h2 className="md:text-2xl text-xl font-bold text-center text-[#F4B24A] px-4">Academic Achievements</h2>
           <span className="w-8 md:w-24 h-px bg-orange-300"/>
          </div>
        

        {/* School Tabs */}
        <nav className="flex flex-wrap flex-row justify-center gap-6 py-6 border-b border-gray-500">
          {Object.keys(schools).map((school) => (
            <button
              key={school}
              onClick={() => setActiveSchool(school as keyof typeof schools)}
              className={`px-4 py-2 border-b-2 transition-all duration-300 ${
                activeSchool === school
                  ? "border-[#F4B24A] text-[#F4B24A]"
                  : "border-transparent hover:border-[#F4B24A]"
              }`}
            >
              {school}
            </button>
          ))}
        </nav>

        {/* Achievements Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {activeAchievements.map((item, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 shadow-md">
              <img src={item.image} alt={item.year} className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-[#F4B24A] mb-2">{item.year}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicAchievements;
