import React, { useState } from "react";

import { ChevronDown, Award, Star } from "lucide-react";

const schools = {
  "St.Paul's Thomas Academy": [
    { year: '2024', description: "Top 5 National Level - Murang'a County", image: '/images/stpaulsdashboard.png', link: 'https://www.stpaulthomasacademy.co.ke/KCPE-Results/' },
  ],
  "Pioneer School": [
    { year: '2024', description: 'Top 5 National Level - Nairobi County', image: '/images/highschooldashboard.png', link: 'https://www.pioneerschools.ac.ke/KCSE-Past-Performance/' },
  ],
  "Pioneer Girl's School": [
    { year: '2020', description: 'Top 5 National Level - Nairobi County', image: '/images/highschooldashboard.png', link: 'https://www.pioneergirlsschool.co.ke/Be-Inspired/' },
  ],
  "Pioneer Girls Junior Academy": [
    { year: '2024', description: 'National Science Fair Finalist', image: '/images/juniorschooldashboard.png', link: 'https://www.pioneergirlsjunioracademy.co.ke/' },
  ],
  "Pioneer Junior Academy": [
    { year: '2024', description: 'National Music Champions', image: '/images/juniorschooldashboard.png', link: 'https://www.pioneerjunioracademy.co.ke/' },
  ]
};

const AcademicAchievements = () => {
  const [activeSchool, setActiveSchool] = useState("St.Paul's Thomas Academy");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeAchievements = schools[activeSchool];

  const getRankIcon = (year) => {
    if (year.includes('🥇')) return <Award className="w-6 h-6 text-yellow-400" />;
    if (year.includes('🥈')) return <Award className="w-6 h-6 text-gray-300" />;
    if (year.includes('🥉')) return <Award className="w-6 h-6 text-amber-600" />;
    return <Star className="w-6 h-6 text-blue-400" />;
  };

  const getRankColor = (year) => {
    if (year.includes('🥇')) return 'from-yellow-400 to-yellow-600';
    if (year.includes('🥈')) return 'from-gray-300 to-gray-500';
    if (year.includes('🥉')) return 'from-amber-500 to-amber-700';
    return 'from-blue-400 to-blue-600';
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#02032d] via-slate-900 to-[#02032d] py-20 px-4 text-white ">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-orange-300" />
            <h2 className="text-2xl md:text-4xl font-bold text-[#F4B24A] px-6 font-serif">
              Academic Highlights
            </h2>
            <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-orange-300" />
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Celebrating excellence across our educational institutions
          </p>
        </div>

        {/* Mobile Dropdown / Desktop Tabs */}
        <div className="mb-8">
          {/* Mobile Dropdown */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4 flex items-center justify-between text-left hover:bg-white/15 transition-all duration-200"
            >
              <span className="font-medium text-[#F4B24A]">{activeSchool}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/50 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden z-10">
                {Object.keys(schools).map((school) => (
                  <button
                    key={school}
                    onClick={() => {
                      setActiveSchool(school);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-6 py-4 text-left hover:bg-white/10 transition-all duration-200 border-b border-white/10 last:border-b-0 ${
                      activeSchool === school ? 'bg-white/15 text-[#F4B24A]' : 'text-white'
                    }`}
                  >
                    {school}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <nav className="flex flex-wrap justify-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2">
              {Object.keys(schools).map((school) => (
                <button
                  key={school}
                  onClick={() => setActiveSchool(school)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    activeSchool === school
                      ? "bg-gradient-to-r from-[#F4B24A] to-orange-400 text-white shadow-lg"
                      : "hover:bg-white/10 text-gray-300 hover:text-white"
                  }`}
                >
                  {school}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {activeAchievements.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.year} 
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Rank Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${getRankColor(item.year)} p-3 rounded-full shadow-lg`}>
                    {getRankIcon(item.year)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${getRankColor(item.year)} bg-clip-text text-transparent`}>
                    {item.year.replace(/[🥇🥈🥉]/g, '').trim()}
                  </h3>
                  <span className="text-2xl">
                    {item.year.match(/[🥇🥈🥉]/)?.[0]}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* School Badge */}
                <div className="pt-2">
                  <span className="inline-block bg-[#F4B24A]/20 text-[#F4B24A] px-3 py-1 rounded-full text-xs font-medium">
                    {activeSchool}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-[#F4B24A] mb-2">5</div>
            <div className="text-sm md:text-lg text-gray-300">Schools</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-sm md:text-lg text-gray-300">Awards at Science Contests</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-gray-300 mb-2">10+</div>
            <div className="text-sm md:text-lg text-gray-300">Awards at Maths Contests</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">5+ </div>
            <div className="text-sm md:text-lg text-gray-300">Award at Computer Studies Contests</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicAchievements;