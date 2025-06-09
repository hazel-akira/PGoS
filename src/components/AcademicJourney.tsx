import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  {
    value: "81%",
    description: "ADMITTANCE RATE FOR CLASS OF 2025 EARLY APPLICATIONS",
  },
  {
    value: "95%",
    description: "STUDENT RETENTION RATE ACROSS ALL SUBJECTS",
  },
  {
    value: "5+",
    description: "UNIQUE PROGRAMS OFFERED ACROSS DEPARTMENTS",
  },
  {
    value: "10+",
    description: "EXTRACURRICULAR CLUBS FOR ALL INTERESTS",
  },
  {
    value: "89%",
    description: "GRADUATES ACCEPTED INTO TOP 100 UNIVERSITIES WORLDWIDE",
  },
  {
    value: "10+",
    description: "INTERNATIONAL EXCHANGE PROGRAMS AND GLOBAL PARTNERSHIPS",
  },
];

const AcademicJourney = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-white/40 rounded-full hover:bg-white/80 transition-all duration-200"></div>
    ),
    dotsClass: "slick-dots !bottom-4 !flex !justify-center !gap-2",
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const navigate = useNavigate();

  return (
    <section  className=" relative z-10 w-full min-h-screen bg-no-repeat bg-cover bg-center sm:bg-right flex items-center justify-center px-4 bg-fixed"
      style={{ backgroundImage: "url(/images/wherenext.png)" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#010218E6] via-[#0f172aE6] to-[#010218E6] z-0"></div>
      <div  className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Carousel */}
        <div className="relative order-2 lg:order-1">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-2xl">
            <Slider ref={sliderRef} {...settings}>
              {stats.map((stat, idx) => (
                <div key={idx} className="px-4">
                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/30 rounded-xl p-12 text-center text-white min-h-[280px] flex flex-col justify-center">
                    <div className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-medium tracking-wide leading-relaxed opacity-90">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Custom Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Column - Text Content */}
        <div className="relative z-10 text-white order-1 lg:order-2 space-y-8 mt-3">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
            WHERE YOUR STORY 
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold italic bg-gradient-to-r from-[#b38300] to-[#f4b24a] bg-clip-text text-transparent">
            GOES <span className="italic">next</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed font-light text-white/90">
            Every student’s journey is a unique story filled with potential,
            passion, and growth. In a supportive environment that fosters
            excellence and curiosity, you'll be guided and inspired at every
            step—because the next chapter of your story starts here.
            </p>
          </div>

          <button className="mt-4 mx-auto lg:mx-0 block px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold font-serif rounded-r-full bg-gradient-to-r from-[#010218E6] to-[#F4B24A] text-white shadow-lg hover:scale-105 transition-transform duration-300"
           onClick={() => navigate('/admissions')} >
            Explore Admissions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicJourney;