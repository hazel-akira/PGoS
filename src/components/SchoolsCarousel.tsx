import React from 'react';
import Slider from 'react-slick';
import { Play } from 'lucide-react';
import CloudBackground from '@/components/CloudBackground';


const SchoolsCarousel = () => {
  const schools = [
    {
      name: 'Pioneer Junior Academy',
      subhead: 'Subhead',
      image: '/images/pja.jpg',
      logo: '/images/pja-logo.png',
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Pioneer School High',
      subhead: 'Subhead',
      image: '/images/ps.png',
      logo: '/images/pioschoollogo.png',
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Pioneer Girls High',
      subhead: 'Subhead',
      image: '/images/pioneergirlshockey.jpg',
      logo: '/images/pgs_logo.png',
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'St Paul Thomas Academy',
      subhead: 'Subhead',
      image: '/images/stpaulsorchestra.jpg',
      logo: '/images/st.pauls_logo.png', 
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Pioneer Girls Junior Academy',
      subhead: 'Subhead',
      image: '/images/girls hockey.png',
      logo: '/images/pgirlsj_logo.png', 
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    }
    // schools here 
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 5 seconds
   
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: '10px',
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
     customPaging: (i: number) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
          margin: '0 4px',
          cursor: 'pointer'
        }}
      >
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 5000
        }
      }
    ]
  };

  return (
    <div className="relative py-12 overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom right, #fffff, #2C27C9)" }}>
      {/* Curved Frame Effect - Basic implementation using borders and pseudo-elements */}
      <div className="container mx-auto px-4">
          <CloudBackground />
        <div className="relative border bg-[#1b1b4e]  rounded-[60px] p-8 md:p-12" style={{ boxShadow: "0 0 30px rgba(255, 188, 4, 0.5)" }}>
          <Slider {...settings}>
            {schools.map((school, index) => (
              <div key={index} className="px-1">
                <div className="bg-[#ccccdf] rounded-lg p-10 text-center shadow-md text-[#02032d]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {/* School Logo */}
                      <img 
                        src={school.logo} 
                        alt={`${school.name} Logo`} 
                        className="h-15 w-12 mr-2"
                      />

                      <div>
                        <h3 className="text-lg font-semibold text-left">{school.name}</h3>
                        <p className="text-sm text-gray-600 text-left">{school.subhead}</p>
                      </div>
                    </div>
                  </div>

                  {/* Video/Image Placeholder with Play Icon */}
                  <div
                    className="relative w-full h-40 rounded-lg mb-4 bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('${school.image}')` }}
                  >
                    <div className="absolute inset-0  opacity-30 rounded-lg"></div>
                    <Play size={40} className="relative z-9 fill-white stroke-black" />

                  </div>

                  <p className="text-xs text-gray-600 mb-4">{school.subtitle}</p>
                  <p className="text-gray-700 text-sm mb-6">{school.description}</p>

                  <button className="bg-[#0f1170] hover:bg-indigo-900 text-[#ffbc04] font-bold py-2 px-6 rounded-full transition duration-300">
                    Schedule a Visit
                  </button>
                </div>
                
              </div>
              
            ))}
            
          </Slider>
          
          
        </div>
      </div>
    </div>
  );
};

export default SchoolsCarousel;