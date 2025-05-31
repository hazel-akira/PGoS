import React, { useEffect, useState } from 'react';
const allImageSets = [
  [
    {
      src: '/images/koreaexchange.jpg',
      alt: 'Korea Exchange Program',
      offset: 'translate-y-6',
      title: 'Korea Exchange Program',
      description: 'Immerse in global cultures through our prestigious Mandarin exchange experience in South Korea.'
    },
    {
      src: '/images/marine.png',
      alt: 'Marine Studies',
      offset: 'translate-y-6',
      title: 'Marine Studies',
      description: 'Dive into marine science with real-world exploration of oceans, ecosystems, and conservation.'
    },
    {
      src: '/images/aviation.png',
      alt: 'Aviation Studies',
      offset: 'translate-y-6',
      title: 'Aviation Studies',
      description: 'Take flight with hands-on learning in aviation fundamentals, navigation, and aircraft systems.'
    }
  ],
  [
    {
      src: '/images/ai.png',
      alt: 'AI Studies',
      offset: 'translate-y-4',
      title: 'AI & Robotics',
      description: 'Shape the future with courses in Artificial Intelligence, coding, and robotics innovation.'
    },
    {
      src: '/images/whychoosepgos.png',
      alt: 'Why Choose Pioneer',
      offset: 'translate-y-8',
      title: 'A Tradition of Excellence',
      description: 'From academic awards to championship medals—our legacy speaks for itself.'
    },
    {
      src: '/images/golf.jpg',
      alt: 'Golf Club',
      offset: 'translate-y-2',
      title: 'Golf Club',
      description: 'Where discipline meets focus—students develop skill and sportsmanship on the green.'
    }
  ],
  [
    {
      src: '/images/debate.jpg',
      alt: 'Debate Club',
      offset: 'translate-y-4',
      title: 'Debate Club',
      description: 'Sharpen your voice and mind—our champions compete nationally with eloquence and logic.'
    },
    {
      src: '/images/art.jpg',
      alt: 'Arts & Creativity',
      offset: 'translate-y-8',
      title: 'Arts & Creativity',
      description: 'From painting to performance—our arts program nurtures imagination and expression.'
    },
    {
      src: '/images/mentorship.png',
      alt: 'Mentorship',
      offset: 'translate-y-2',
      title: 'Student Leadership & Mentorship',
      description: 'Empowering the next generation through guided mentorship and leadership roles.'
    }
  ],
  [
    {
      src: '/images/orchestra.jpg',
      alt: 'Orchestra Band',
      offset: 'translate-y-4',
      title: 'Orchestra Band',
      description: 'Fueling rhythm and teamwork through our celebrated school orchestra and music clubs.'
    },
    {
      src: '/images/sciencelab.jpg',
      alt: 'Science Lab',
      offset: 'translate-y-0',
      title: 'Modern Science Labs',
      description: 'Equipped for discovery—our labs inspire curiosity through cutting-edge experiments.'
    },
    {
      src: '/images/wellness.jpg',
      alt: 'Wellness & Spirituality',
      offset: 'translate-y-12',
      title: 'Wellness & Chaplaincy',
      description: 'Nurturing mind and soul through spiritual guidance, mental health, and holistic care.'
    }
  ]
];


const WhyChoosePioneer: React.FC = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentMobileImageIndex, setCurrentMobileImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        if (isMobile) {
          const currentSet = allImageSets[currentSetIndex];
          const nextImageIndex = (currentMobileImageIndex + 1) % currentSet.length;
          const nextSetIndex = nextImageIndex === 0 ? (currentSetIndex + 1) % allImageSets.length : currentSetIndex;
          setCurrentSetIndex(nextSetIndex);
          setCurrentMobileImageIndex(nextImageIndex);
        } else {
          setCurrentSetIndex((prev) => (prev + 1) % allImageSets.length);
        }
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, currentSetIndex, currentMobileImageIndex]);

  const currentImages = allImageSets[currentSetIndex];

  return (
    <section className="py-28 bg-[#f7f7f7]">
      <hr className="border-t border-gray-300 mb-6 mx-24 md:mx-60" />
      <div className="text-center pb-10">
        <h2 className="text-xl md:text-4xl font-bold font-serif text-[#F4B24A] px-4">
          WHY CHOOSE OUR SCHOOLS
        </h2>
      </div>

      <div className="relative container mx-auto px-4 w-full h-full">
        {/* Desktop: Grid View with slide-in from top */}
        {!isMobile && (
          <div className="relative h-[500px] mt-10"> {/* Adjust height to fit images smoothly */}
            {allImageSets.map((imageSet, idx) => {
              const isActive = idx === currentSetIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center transition-all duration-1000 ease-in-out transform ${
                    isActive
                      ? 'opacity-100 translate-y-0 z-10'
                      : 'opacity-0 -translate-y-10 pointer-events-none z-0'
                  }`}
                >
                  {imageSet.map((image, index) => {
                    const centerImageOffset = index === 1 ? 'mt-16' : 'mt-0'; // push center image down
                    return (
                      <div
                        key={index}
                        className={`w-80 transition-transform duration-700 ease-out ${centerImageOffset} `}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg relative drop-shadow-[5px_0px_2px_rgba(0,0,0,0.5)]"
                        />
                        <div className="mt-4 text-center">
                          <h3 className="text-xl font-bold font-serif text-[#f4b24a] leading-tight">{image.title}</h3>
                          <p className="text-base font-normal text-[#0e013d] mt-1 text-left">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile: Single Image View */}
        {isMobile && (
          <div className="relative w-[90%] max-w-md h-[400px] mx-auto overflow-hidden mt-10">
            {currentImages.map((image, index) => {
              const isActive = index === currentMobileImageIndex;
              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out rounded-lg shadow-lg ${
                    isActive
                      ? 'z-20 opacity-100 scale-100 translate-y-0'
                      : 'z-10 opacity-0 scale-90 translate-y-6'
                  }`}
                  style={{ transitionProperty: 'opacity, transform' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-2 px-2 rounded-b-lg">
                      <p className="text-base font-semibold font-serif text-[#f4b24a]">
                        {image.title}
                      </p>
                      <p className="text-sm font-normal text-center text-[#0e013d] mt-1">
                        {image.description}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>
      {/* add link to download prospectus */}
      <div className='flex flex-col  justify-center mx-auto md:mt-48 mt-24 flex flex-col justify-center items-center'>
       <button className="px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold font-serif rounded-r-full bg-gradient-to-r from-[#0E013d] to-[#F4B24A] text-white shadow-lg hover:scale-105 transition-transform duration-300">Get Prospectus</button>
      </div>
     
    </section>
  );
};

export default WhyChoosePioneer;
