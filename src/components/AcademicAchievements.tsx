import React from 'react';

const achievements = [
  {
    year: 2023,
    medal: '🥈',
    place: '2nd Place - Nairobi County',
    national: 'Top 10 National Level',
    image: 'images/achievement2023.jpg', // Replace with your actual image path
    showImage: true,
  },
  {
    year: 2022,
    medal: '🥉',
    place: '3rd Place - Nairobi County',
    national: 'Top 15 National Level',
    showImage: false,
  },
  {
    year: 2021,
    medal: '🥉',
    place: '5th Place - Nairobi County',
    national: 'Top 20 National Level',
    showImage: false,
  },
];

const AcademicAchievements = () => {
  return (
    <section className="bg-[#02032d] py-28 px-4">
      <div className="max-w-6xl mx-auto relative">
        <hr className="border-t border-gray-300 mb-6" />
        <h2 className="text-2xl font-semibold text-[#f4b24a] mb-20 tracking-wide text-center">
          ACADEMIC ACHIEVEMENTS
        </h2>
        <div className="flex flex-col md:flex-row md:items-start gap-8 relative">
          {/* Timeline */}
          <div className="relative md:w-2/3 w-full">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#f4b24a] rounded-full opacity-80 hidden md:block" style={{zIndex: 0}}></div>
            <div className="flex flex-col gap-16">
              {achievements.map((ach, idx) => (
                <div key={ach.year} className="flex items-start relative z-10">
                  {/* Dot */}
                  <div className="flex flex-col items-center mr-6">
                    <div className={`w-5 h-5 rounded-full border-4 border-[#f4b24a] bg-[#18044b] ${idx === 0 ? 'mt-2' : ''}`}></div>
                    {idx !== achievements.length - 1 && (
                      <div className="w-1 flex-1 bg-[#f4b24a] opacity-80" style={{minHeight: '40px'}}></div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-white mb-1">
                      <span>{ach.year}</span>
                      <span>{ach.medal}</span>
                    </div>
                    <div className="text-white text-base md:text-lg font-semibold mb-1">{ach.place}</div>
                    <div className="text-[#f4b24a] text-sm md:text-base font-medium">{ach.national}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image for most recent achievement (desktop only) */}
          <div className="hidden md:block md:w-1/3 pl-8">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white/10">
              <img
                src="images/achievement2023.jpg" // Replace with your actual image path
                alt="St Paul Thomas Academy"
                className="w-full h-56 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicAchievements;
