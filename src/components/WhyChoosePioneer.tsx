import React from 'react';

// Add styles for 3D card flip effect
const styles = `
  .perspective {
    perspective: 1000px;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

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
      {/* Add style tag for 3D card effects */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

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
            
              {/* Star Decorations - Right Side */}
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
      
      {/* Interactive 3D Cards Grid */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="group" style={{ perspective: '1000px' }}>
                <div 
                  className="relative w-full h-[400px] transition-all duration-500 group-hover:rotate-y-180"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute w-full h-full"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={activity.image}
                        alt={activity.title}
                        loading='lazy'
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h3 className="absolute bottom-0 left-0 right-0 text-xl font-bold text-white p-6">
                        {activity.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div 
                    className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-[#02032d] mb-4">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                    <button className="mt-6 px-6 py-3 bg-[#02032d] text-white rounded-lg hover:bg-[#02032d]/90 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePioneer;