import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const features = [
  {
    title: "Aviation",
    icon: "/images/aviationicon.png",
    description: "Soar to new heights with hands-on training and real-world exposure. Our aviation program equips students with the skills, confidence, and ambition to become the next generation of aviation leaders.",
    link: "https://www.pioneerschools.ac.ke/Leaders/Aviator/"
  },
  {
    title: "Maritime",
    icon: "/images/marineicon.jpg",
    description: "Chart your course to a future on the seas. The maritime program offers expert-led training and exploration that prepare students for dynamic careers in marine science and global trade.",
    link: "https://www.pioneergirlsschool.co.ke/Inspired-Path/Marine-Program/"
  },
  {
    title: "Foreign Languages",
    icon: "/images/mandarinicon.jpg",
    description: "Unlock the world through language. Our immersive foreign language program broadens cultural horizons, builds communication skills, and prepares students to thrive in global environments and international careers.",
    link: "https://www.pioneerschools.ac.ke/Student-Life/Korea-Exchange-Program/"
  },
  {
    title: "AI Studies",
    icon: "/images/roboticsicon.png",
    description: "Discover the future through innovation. Our AI studies program empowers students to explore coding, machine learning, and data science—nurturing digital thinkers who are ready to shape tomorrow’s world.",
    link: "https://www.stpaulthomasacademy.co.ke/Study-Life/Coding-Life/"
  }
];

const UniquePrograms = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!swiperInstance) return;

    const handleTouchStart = () => swiperInstance.autoplay?.stop();
    const handleTouchEnd = () => swiperInstance.autoplay?.start();

    const swiperEl = swiperInstance.el;

    swiperEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    swiperEl.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      swiperEl.removeEventListener('touchstart', handleTouchStart);
      swiperEl.removeEventListener('touchend', handleTouchEnd);
    };
  }, [swiperInstance]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 bg-[#ECECFB] overflow-hidden">
      {/* Background */}
      {isMobile ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/images/specialprogs.jpg)',
            opacity: 0.05,
            zIndex: 0,
          }}
        />
      ) : (
        <video
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none bg-fixed"
          style={{ width: '100%', height: '100%', opacity: 0.05, zIndex: 0, objectFit: 'cover' }}
          src="/images/specialprogs.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Section */}
          <div className="md:w-full lg:w-1/2 lg:pr-8 max-w-2xl flex-1 md:pt-48">
            <div className="rounded-2xl px-16 justify-center items-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F4b24a] mb-6 font-serif">
                Elite Learning Paths
              </h1>
              <div className="w-16 h-px bg-[#F4B24A] mb-8"></div>
              <p className="text-[#18144b] text-lg md:text-xl leading-relaxed font-serif sm:text-base">
                At Pioneer Group of Schools, we believe education should ignite curiosity, develop critical thinking, and inspire learners to become leaders. Our curriculum is designed to meet national standards while integrating innovation, digital skills, and real-world learning.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {isMobile ? (
              <div className="w-full max-w-md mx-auto">
                <Swiper
                  modules={[Autoplay]}
                  onSwiper={setSwiperInstance}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  freeMode={true}
                  slidesPerView={1.2}
                  spaceBetween={20}
                  centeredSlides={true}
                  allowTouchMove={true}
                  className="pb-8"
                  style={{
                    '--swiper-theme-color': '#F4b24a',
                  } as React.CSSProperties}
                >
                  {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                      <div className="p-2 sm:p-4 w-full max-w-xs mx-auto">
                        <div className="bg-[#f1f2fc] w-full rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                          <div className="flex justify-center mb-6">
                            <img src={feature.icon} alt={feature.title} className="w-16 h-16 rounded-full" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#f4b24a] text-center mb-4 break-words">
                            {feature.title}
                          </h3>
                          <p className="text-[#0e013d] text-center text-md sm:text-base leading-relaxed mb-6 break-words">
                            {feature.description}
                          </p>
                          <div className="text-center">
                            <a
                              href={feature.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0e013d] hover:text-[#f4b24a] font-semibold border-b border-[#0e013d] hover:border-[#f4b24a] transition-colors duration-200 bg-transparent"
                            >
                              More
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white w-full rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100"
                  >
                    <div className="flex justify-center mb-6">
                      <img src={feature.icon} alt={feature.title} className="w-16 h-16 rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold text-[#f4b24a] text-center mb-4 break-words">
                      {feature.title}
                    </h3>
                    <p className="text-[#0e013d] text-center text-md leading-relaxed mb-6 break-words">
                      {feature.description}
                    </p>
                    <div className="text-center">
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0e013d] hover:text-[#f4b24a] font-semibold border-b border-[#0e013d] hover:border-[#f4b24a] transition-colors duration-200 bg-transparent"
                      >
                        More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniquePrograms;
