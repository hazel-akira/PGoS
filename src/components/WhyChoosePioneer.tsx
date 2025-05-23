import React, { useEffect, useState } from 'react';

const allImageSets = [
  [
    { src: '/images/academicperformance.jpg', alt: 'Academic Performance', offset: 'translate-y-6', title: 'Academic Performance' },
    { src: '/images/sciencelab.jpg', alt: 'Science Lab', offset: 'translate-y-0', title: 'Modern Facilities' },
    { src: '/images/wellness.jpg', alt: 'Wellness', offset: 'translate-y-12', title: 'Wellness & Spirituality' },
  ],
  [
    { src: '/images/orchestra.jpg', alt: 'Orchestra', offset: 'translate-y-4', title: 'Extra-curricular Activities' },
    { src: '/images/whychoosepgos.png', alt: 'Why Choose Pioneer', offset: 'translate-y-8', title: 'A Tradition of Excellence' },
    { src: '/images/activitiesfield.png', alt: 'Activities Field', offset: 'translate-y-2', title: 'Sports & Games' },
  ],
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
    <section className="py-28 bg-white">
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
                          <h3 className="text-lg font-semibold text-[#0e013d] drop-shadow-[5px_0px_2px_rgba(255,255,255,0)]">{image.title}</h3>
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
                    <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 py-2 px-2 rounded-b-lg">
                      <p className="text-sm font-bold text-center text-[#0e013d]">
                        {image.title}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default WhyChoosePioneer;
