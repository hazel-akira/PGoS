import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Trustee = {
  name: string;
  title: string;
  school: string;
  image: string;
};

const trustees: Trustee[] = [
  {
    name: "Madam Susan",
    title: "Headmistress",
    school: "Pioneer Girls Junior Academy",
    image: "/images/headmistressgirls.png",
  },
  {
    name: "Mr. Ananda",
    title: "Deputy Principal",
    school: "Pioneer School",
    image: "/images/deputy2pgos.png",
  },
  {
    name: "Mrs. Kongo",
    title: "Principal",
    school: "Pioneer Girls School",
    image: "/images/principalgirls.png",
  },
  {
    name: "Mr. Mwaura",
    title: "Deputy Principal",
    school: "Pioneer Group",
    image: "/images/deputypgos.png",
  },
  // {
  //   name: "Ms Fenty",
  //   title: "Deputy Headmistress",
  //   school: "Pioneer Girls Junior Academy",
  //   image: "/images/usher.png",
  // },
  {
    name: "Mr. Kuria",
    title: "Deputy Principal",
    school: "Pioneer  girls School",
    image: "/images/deputygirls.png",
  },
  {
    name: "Mr. Gichengo",
    title: "Principal",
    school: "Pioneer Group",
    image: "/images/principalpgos.png",
  },
  // Add 2 more entries here to make 5
];

const Leadership: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#f1f2fc] py-16 text-center">
      <div className="max-w-7xl mx-auto">
        <hr className="border-t border-gray-300 mb-6" />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold font-serif text-[#FFC300] mb-8 mt-10 text-center">LEADERSHIP</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <img src="/images/directorpgos.png" alt="Leadership" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-md shadow-md" />
            <div className="mt-6 text-center">
              <h5 className="text-xl font-bold text-[#02032d]">Dr. P. Munga</h5>
              <h6 className="text-md font-semibold text-gray-[#02032d] mt-2">Chairman Group of Schools</h6>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-10 md:mt-0 px-4 md:px-0">
            <p className="text-sm md:text-base md:shadow-none shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded p-4 text-left">
              Welcome to Pioneer Group of Schools, where excellence meets opportunity!
              At our schools, we believe that education is the foundation of a brighter tomorrow. With a commitment to nurturing every child's unique potential, we provide a dynamic learning environment that blends academic rigor, creativity, and character-building.
              Our educators are passionate about inspiring young minds, equipping them with the skills and values needed to thrive in a rapidly changing world. From cutting-edge facilities to a curriculum that encourages exploration and innovation, we ensure that every student is prepared to succeed not just in the classroom, but in life.
              Join our community and be part of a legacy that empowers leaders, thinkers, and dreamers. At Pioneer Group of Schools, we don't just teach – we transform.
              Together, let's shape the future!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-center mb-6 mt-2"> 
          <span className="w-8 md:w-24 h-px bg-orange-300"/>
            <h2 className="text-2xl font-bold font-serif text-[#FFC300] px-2">BOARD OF TRUSTEES</h2>
          <span className="w-8 md:w-24 h-px bg-orange-300"/>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <Slider ref={sliderRef} {...settings}>
            {trustees.map((trustee, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center h-full">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <p className="font-semibold">{trustee.name}</p>
                  <div className="mt-2 bg-[#02032d] text-white text-xs px-4 py-2 rounded-lg">
                    <p className="font-bold">{trustee.title}</p>
                    <p>{trustee.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
