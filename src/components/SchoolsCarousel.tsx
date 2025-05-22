import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

// Custom Arrow components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
      onClick={onClick}
    >
     
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
       style={{ ...style, display: "block", left: "-25px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
      onClick={onClick}
    >
     
    </div>
  );
};

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
      name: 'Pioneer Girls Academy',
      subhead: 'Subhead',
      image: '/images/pioneergirlshockey.png',
      logo: '/images/pgs_logo.png',
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'St Paul Thomas Academy',
      subhead: 'Subhead',
      image: '/images/adminblock2.png',
      logo: '/images/st.pauls_logo.png', 
      subtitle: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Pioneer Girls Junior Academy',
      subhead: 'Subhead',
      image: '/images/adminblock2.png',
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="relative py-12 overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom right, #0E013D, #02032d)" }}>
      {/* Curved Frame Effect - Basic implementation using borders and pseudo-elements */}
      <div className="container mx-auto px-4">
        <div className="relative border border-[#c9a030be] rounded-[50px] p-8 md:p-12" style={{ boxShadow: "0 0 30px rgba(255, 188, 4, 0.5)" }}>
          <Slider {...settings}>
            {schools.map((school, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-lg p-10 text-center shadow-md text-[#02032d]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {/* School Logo */}
                      <img 
                        src={school.logo} 
                        alt={`${school.name} Logo`} 
                        className="h-13 w-auto mr-2"
                      />

                      <div>
                        <h3 className="text-lg font-semibold text-left">{school.name}</h3>
                        <p className="text-sm text-gray-600 text-left">{school.subhead}</p>
                      </div>
                    </div>
                    {/* Three Dots Icon Placeholder */}
                    <div>...
                    </div>
                  </div>

                  {/* Video/Image Placeholder with Play Icon */}
                  <div
                    className="relative w-full h-40 rounded-lg mb-4 bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('${school.image}')` }}
                  >
                    <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                    <Play size={40} color="white" className="relative z-10" />
                  </div>

                  <p className="text-xs text-gray-600 mb-4">{school.subtitle}</p>
                  <p className="text-gray-700 text-sm mb-6">{school.description}</p>

                  <button className="bg-[#3134e0] hover:bg-indigo-900 text-[#ffbc04] font-bold py-2 px-6 rounded-full transition duration-300">
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