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
    name: "Gaga Lordes",
    title: "Headmistress",
    school: "Pioneer Girls Junior",
    image: "/images/gaga.png",
  },
  {
    name: "Usher Raymond",
    title: "Deputy Principal",
    school: "Pioneer School",
    image: "/images/usher.png",
  },
  {
    name: "Oprah Sia",
    title: "Principal",
    school: "Pioneer Girls",
    image: "/images/oprah.png",
  },
  {
    name: "Usher Raymond",
    title: "Deputy Principal",
    school: "Pioneer School",
    image: "/images/usher.png",
  },
  {
    name: "Usher Raymond",
    title: "Deputy Principal",
    school: "Pioneer School",
    image: "/images/usher.png",
  },
  {
    name: "Usher Raymond",
    title: "Deputy Principal",
    school: "Pioneer School",
    image: "/images/usher.png",
  },
  {
    name: "Usher Raymond",
    title: "Deputy Principal",
    school: "Pioneer School",
    image: "/images/usher.png",
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
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-orange-500 mb-8">Leadership</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 text-center justify-center items-center">
                    <img src="/images/leadership.png" alt="Leadership" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    
                    <p className="text-sm md:text-base text-justify">
                    Welcome to Pioneer Group of Schools, where excellence meets opportunity!
                    At our schools, we believe that education is the foundation of a brighter tomorrow. With a commitment to nurturing every child's unique potential, we provide a dynamic learning environment that blends academic rigor, creativity, and character-building.
                    Our educators are passionate about inspiring young minds, equipping them with the skills and values needed to thrive in a rapidly changing world. From cutting-edge facilities to a curriculum that encourages exploration and innovation, we ensure that every student is prepared to succeed not just in the classroom, but in life.
                    Join our community and be part of a legacy that empowers leaders, thinkers, and dreamers. At Pioneer Group of Schools, we don’t just teach – we transform.
                    Together, let’s shape the future!
                    </p>
                </div>
            </div>
        </div>
      <h2 className="text-2xl font-bold text-orange-500 mb-8">BOARD OF TRUSTEES</h2>
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
                <div className="mt-2 bg-[#3E1DAE] text-white text-xs px-4 py-2 rounded-lg">
                  <p className="font-bold">{trustee.title}</p>
                  <p>{trustee.school}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Leadership;
