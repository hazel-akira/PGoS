import React from 'react';
import Carousel from './Carousel';

const customSettings = {
  slidesToShow: 3,
  dots: true,
  
};

type Activity = {
  title: string;
  description: string;
  image: string;
}


const activities: Activity[] = [
  {
    title: "Modern Facilities",
    description: "We offer state-of-the-art facilities to ensure a comfortable and conducive learning environment for our students.",
    image: "/images/sciencelab.jpg"
  },
  {
    title: "Proven Academic Performance",
    description: "Our students consistently achieve high scores in national exams, reflecting our commitment to academic excellence.",
    image: "/images/academicperformance.jpg"
  },
  {
    title: "Strong Co-Curricular Programs", 
    description: "We offer a wide range of co-curricular activities to help students develop their talents and interests.",
    image: "/images/orchestra.jpg"

  },
  {
    title: "Spirituality and Values",
    description: "We instill strong values and spiritual principles in our students to help them become responsible and compassionate individuals.",
    image: "/images/wellness.jpg"
  },
  
  
]




const WhyChoosePioneer: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Banner with CTA */}
      <div className="relative w-full h-[900px]">
        {/* Banner Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/whychoosepgos.png" 
            alt="Students celebrating with trophy" 
            className="w-full h-full object-cover"
          />
          
        </div>
        
        {/* CTA Text */}
        <div className="relative h-full flex flex-col justify-end">
          <div className="relative z-10">
            {/* Purple Overlay - Now only behind the text */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[#02032d] bg-opacity-80"></div>
              <h2 className="text-2xl md:text-4xl font-bold text-orange-400 text-center px-4 pb-10 relative z-20">
                WHY CHOOSE PIONEER GROUP OF SCHOOLS
              </h2>
              {/* Star Decorations - Left Side */}
              <div className="absolute bottom-0 left-0 md:w-32 md:h-32 w-8 h-8 overflow-visible">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 md:w-20 md:h-20 w-10 h-10 text-white transform -translate-x-1/4 -translate-y-1/4">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-12 md:w-14 md:h-14 w-6 h-6 text-orange-400 transform -translate-y-1/4">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            
              {/* Star Decorations - Right Side - Modified to stay within bounds */}
              <div className="absolute bottom-0 right-0 md:w-32 md:h-32 w-8 h-8 overflow-visible">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 right-0 md:w-20 md:h-20 w-10 h-10 text-white transform translate-x-1/4 -translate-y-1/4">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="absolute top-0 right-12 md:w-14 md:h-14 w-6 h-6 text-orange-400 transform -translate-y-1/4">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        
      
      {/* Features Grid */}
      <Carousel settings = {customSettings}>
        {activities.map((activity, index) => (
          <div key={index} className="px-4">
            <div className="w-full h-64 mb-4 overflow-hidden">
              <img 
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-white bg-[#02032d] px-6 py-2">
              {activity.title}
            </h3>
          </div>
        ))}
      </Carousel>
      
      {/* Bottom Divider */}
      <div className="w-full flex justify-center px-4 mb-16">
        <div className="h-2 bg-[#02032d] w-full max-w-xl rounded-full"></div>
      </div>
    </div>
  );
};

export default WhyChoosePioneer;