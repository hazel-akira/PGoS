import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

type Testimonial = {
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    role: 'Grade 10 Parent',
    text: "Sending my child to Pioneer was the best decision we made. It's not just a school; it's a nurturing community where they've blossomed academically and personally. Pioneer truly lives up to its name – it sets a strong foundation for future success!",
    image: '/images/classboysalumni.jpg',
  },
  {
    role: 'Alumni,',
    text: "Pioneer didn't just give me an education; it equipped me with the skills and confidence to thrive in university and beyond. I'm proud to be a Pioneer alumnus and grateful for the launchpad it provided for my journey.",
    image: '/images/classalumnigirls.jpg',
  },
  {
    role: 'Grade 7 Student',
    text: "Pioneer Junior School is SO much fun! My teachers are really kind and make learning exciting. We get to do cool projects, play with our friends, and there's always something new to discover. I love coming to school!",
    image: '/images/juniorboystestimony.jpg',
  },
  {
    role: 'Form 3 Student',
    text: "Pioneer Girls School has empowered me to become a confident and ambitious young woman. The supportive all-girls environment fosters leadership and encourages us to excel in all areas.",
    image: '/images/girltestimony.jpg',
  },
  {
    role: 'Grade 5 pupil',
    text: "I like St.Paul's Academy because the teachers help me when I don't understand things, and they make learning like a game! We have fun activities, and I've made so many friends. It's a happy place to learn!",
    image: '/images/stptestimony.jpg',
  },
  {
    role: 'Form 4 Student',
    text: "Pioneer School has challenged me to grow both academically and as a young man of character. The emphasis on discipline, teamwork, and leadership has been invaluable. I'm graduating with strong values and the drive to make a positive impact.",
    image: '/images/boystestimony.jpg',
  },

];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const getPosition = (i: number) => {
    const diff = i - index;
    if (diff === 0) return 'z-30 scale-100';
    if (diff === -1 || (index === 0 && i === testimonials.length - 1)) return 'z-20 scale-90 -translate-x-20 opacity-50';
    if (diff === 1 || (index === testimonials.length - 1 && i === 0)) return 'z-20 scale-90 translate-x-20 opacity-50';
    return 'z-10 scale-75 opacity-0';
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[750px] flex items-center justify-center overflow-hidden bg-[#F0F0F4] py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className={clsx(
            'absolute transition-all duration-700 ease-in-out w-[80%] max-w-5xl h-full rounded-xl shadow-xl',
            getPosition(i)
          )}
        >
          <img
            src={testimonial.image}
            alt={testimonial.role}
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Testimonial card overlay */}
          {i === index && (
            <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 bg-white bg-opacity-80 p-4 sm:p-6 max-w-sm sm:max-w-md max-h-[60vh] overflow-y-auto rounded-lg shadow backdrop-blur">
              <h3 className="text-[#ff9800] font-semibold text-base sm:text-lg mb-1">Testimonials</h3>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Hear It From Us</h2>
              <p className="text-xs sm:text-sm font-semibold mt-2">{testimonial.role}</p>
              <p className="text-gray-800 mt-3 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
