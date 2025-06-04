import React, { useState, useEffect } from 'react';

const schools = [
  {
    title: 'Primary School',
    description:
      'The primary school curriculum is designed to provide a comprehensive and engaging education for children aged 3-11. It focuses on developing essential skills, fostering creativity, and promoting critical thinking.',
    image: '/images/primaryschool1.png',
    alt: 'primaryschool',
  },
  {
    title: 'Junior Secondary School',
    description:
      'The junior secondary school curriculum is designed to provide a comprehensive and engaging education for children aged 11-14. It focuses on developing essential skills, fostering creativity, and promoting critical thinking.',
    image: '/images/juniorsecondary.png',
    alt: 'juniorsecondary',
  },
  {
    title: 'Senior Secondary School',
    description:
      'The senior secondary school curriculum is designed to provide a comprehensive and engaging education for children aged 14-18. It focuses on developing essential skills, fostering creativity, and promoting critical thinking.',
    image: '/images/seniorschool.png',
    alt: 'seniorschool',
  },
];

const Curriculum: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setSelected((current) => (current + 1) % schools.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handleSchoolClick = (index: number) => {
    setSelected(index);
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section
      className="relative w-full h-auto md:h-[800px] overflow-hidden py-16"
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile View: One school at a time */}
      <div className="block md:hidden w-full">
        <div className="w-full h-64 relative">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 rounded-b-2xl"
            style={{ backgroundImage: `url(${schools[selected].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0 rounded-b-2xl" />
        </div>
        <div className="relative z-10 -mt-10 px-4">
          <div className="bg-white bg-opacity-90 backdrop-blur-md px-6 py-8 shadow-2xl rounded-lg max-w-lg w-full mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-grow h-px bg-[#F4B24A]" />
                <h2 className="text-md font-bold text-[#0e013d] whitespace-nowrap">
                  Curriculum Overview
                </h2>
              <span className="flex-grow h-px bg-[#F4B24A]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#F4B24A] text-center">{schools[selected].title}</h3>
            <p className="text-sm text-[#0e013d] text-center">{schools[selected].description}</p>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {schools.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${selected === idx ? 'bg-[#F4B24A]' : 'bg-gray-300'}`}
                onClick={() => handleSchoolClick(idx)}
                aria-label={`Show ${schools[idx].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View: Overlapping text and image */}
      <div className="hidden md:flex w-full h-full flex-row">
        {/* Image Column (background) */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-700"
            style={{ backgroundImage: `url(${schools[selected].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
        </div>
        {/* Text Column */}
        <div
          className="
            absolute left-0 top-1/2 transform -translate-y-1/2
            w-2/3 z-10 flex items-center justify-center
            h-[400px] 
          "
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-md px-10 py-8 shadow-2xl overflow-y-auto rounded-lg max-w-lg w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-grow h-px bg-orange-300" />
              <h2 className="text-3xl font-bold text-[#F4B24A] whitespace-nowrap">
                Curriculum Overview
              </h2>
              <span className="flex-grow h-px bg-orange-300" />
            </div>
            <div className="flex flex-col space-y-8 pr-4">
              {schools.map((school, idx) => (
                <div
                  key={school.title}
                  className={`cursor-pointer transition-all duration-300 p-4 rounded-md ${
                    idx === selected ? 'bg-[#fef6ec]' : ''
                  }`}
                  onClick={() => handleSchoolClick(idx)}
                >
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      idx === selected ? 'text-[#F4B24A]' : 'text-gray-900'
                    }`}
                  >
                    {school.title}
                  </h3>
                  <p className="text-base text-[#0e013d] max-w-md">{school.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
