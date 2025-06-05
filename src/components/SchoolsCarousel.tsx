import React, { useState } from 'react';
import Slider from 'react-slick';
import { X } from 'lucide-react';

const SchoolsCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('');
  const schools = [
    {
      name: 'Pioneer Junior Academy',
      subhead: 'Vitae Abudante',
      videoUrl: 'https://www.youtube.com/embed/Wpdk5cIc3nM?si=-7y4csw5cg4pN4xC',
      logo: '/images/pja-logo.png',
      subtitle: 'Laying Strong Foundations for Young Minds',
      description: 'Pioneer Junior Academy fosters a nurturing environment where young learners build strong academic foundations, develop character, and explore their creativity. With engaging teaching methods and a supportive community, we prepare children for lifelong learning',
    },
    {
      name: 'Pioneer School High',
      subhead: 'Vitae Abudante',
      videoUrl: 'https://www.youtube.com/embed/A7rrEq1t8Js?si=EVUslFlxcOy8gMA1',
      logo: '/images/pioschoollogo.png',
      subtitle: 'transforming young men into leaders and agents of change',
      description: 'At Pioneer School High, we empower students to excel academically while nurturing leadership, innovation, and discipline. Our vibrant learning environment encourages students to discover their potential and contribute meaningfully to society.',
    },
    {
      name: 'Pioneer Girls High',
      subhead: 'Vitae Abudante',
      videoUrl: 'https://www.youtube.com/embed/oDwDqg9oBG8?si=BeNCFnGBf3w1HDqd',
      logo: '/images/pgs_logo.png',
      subtitle: 'Empowering Young Women Through Excellence',
      description: 'Pioneer Girls High is dedicated to nurturing confident, intelligent, and empowered young women. We combine academic excellence with mentorship and extracurricular opportunities to shape future leaders and changemakers.',
    },
    {
      name: 'St Paul Thomas Academy',
      subhead: 'Vitae Abudante',
      videoUrl: 'https://www.youtube.com/embed/IvoKeax6FLU?si=_Un2tTjXVZjepDOM',
      logo: '/images/st.pauls_logo.png', 
      subtitle: 'Academic Brilliance, Spiritual Strength',
      description: 'St. Paul Thomas Academy offers a rich blend of academic rigor and spiritual growth. We instill strong moral values and a passion for learning, preparing students to thrive both in school and in life beyond the classroom.',
    },
    {
      name: 'P. Girls Junior Academy',
      subhead: 'Vitae Abudante',
      videoUrl: 'https://www.youtube.com/embed/jtvxPoea1sQ?si=koQqp2ZrD4H-5MIT',
      logo: '/images/pgirlsj_logo.png', 
      subtitle: 'Inspiring Growth in Every Girl',
      description: 'Pioneer Girls Junior Academy provides a safe, caring environment where girls thrive academically and socially. With a focus on holistic development, we encourage curiosity, confidence, and collaboration among our learners.',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    appendDots: dots => (
      <div style={{ position: 'relative', bottom: '-30px', width: '100%', textAlign: 'center' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', margin: '0 4px', cursor: 'pointer' }} />
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
  const handleOpenModal = (schoolName: string) => {
    setSelectedSchool(schoolName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSchool('');
  };


  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative py-12 overflow-hidden" >
          <div className="container mx-auto px-4">
          <hr className="border-t border-gray-300 mb-6 mx-20" />
            <h1 className='text-3xl md:text-5xl font-semibold font-serif text-[#02032d] text-center mb-20 tracking-wide'>Visit <span className='text-orange-400'>Our</span> Schools</h1>
            <div className="relative border rounded-3xl bg-[#0c0c31ec] max-w-[1400px] mx-auto p-8 md:p-12">

              <div className="bg-white p-6 rounded-2xl shadow-md mb-8 text-center">
                <h2 className="text-4xl md:text-4xl font-bold text-[#02032d] mb-4">Experience the Pioneer Community</h2>
                <p className="text-gray-700 text-x3 mb-4 font-serif">
                  Discover our vibrant school community, engage with faculty, and see what makes us exceptional.
                </p>
                <p className="text-[#f89500d3] mb-6">
                  Take a tour of our beautiful campuses, meet our students, and see our values in action.
                </p>
                <p className="text-[#0f1170] font-medium italic">
                  Watch our school video tours below and explore life at Pioneer Schools.
                </p>
              </div>

              <Slider {...settings}>
                {schools.map((school, index) => (
                  <div key={index} className="px-2">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg text-[#1f2937] transition-transform hover:scale-105 duration-300 h-[420px] flex flex-col justify-between">                
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <img src={school.logo} alt={`${school.name} Logo`} className="h-12 w-12 object-contain mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold  text-left">{school.name}</h3>
                            <p className="text-sm text-[#F4B24A] text-left">{school.subhead}</p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full aspect-video mb-3">
  <iframe
    src={school.videoUrl}
    title={school.name}
    className="w-full h-full rounded-xl"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>


                      <p className="text-xs text-[#ce8e28] mb-2 italic">{school.subtitle}</p>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{school.description}</p>

                      <button
                        className="bg-gradient-to-r from-[#0E013d] to-[#F4B24A] hover:bg-[#1e1e99] text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300"
                        onClick={() => handleOpenModal(school.name)}
                      >
                        Schedule a Visit
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-xl relative">
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={handleCloseModal}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#0f1170]">Schedule a Visit to {selectedSchool}</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
              <input type="text" value={selectedSchool} readOnly className="w-full p-2 border rounded bg-gray-100" />
              <input type="date" className="w-full p-2 border rounded" required />
              <textarea placeholder="Message (optional)" className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-[#0f1170] text-white py-2 px-4 rounded hover:bg-[#1e1e99]">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
    
};

export default SchoolsCarousel;