
import React from 'react';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Pioneer School",
      description: "Building a strong foundation with engaging curriculum for grades K-5.",
      buttonText: "Pioneer School Details",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80"
    },
    {
      title: "Pioneer Girls High School",
      description: "Developing critical thinking and independence for grades 6-8.",
      buttonText: "Pioneer Girls HighSchool Details",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Pioneer junior School",
      description: "College preparatory curriculum for grades 9-12 with specialized paths.",
      buttonText: "Pioneer juniorSchool Details",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      title: "Pioneer Girls junior School",
      description: "College preparatory curriculum for grades 9-12 with specialized paths.",
      buttonText: "Pioneer Girls junior School Details",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      title: "St Paul Thomas Academy",
      description: "College preparatory curriculum for grades 9-12 with specialized paths.",
      buttonText: "St Paul Thomas Academy Details",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h6 className="text-indigo-600 font-semibold text-center mb-2">OUR PROGRAMS</h6>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Academic Excellence at Every Level</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover our comprehensive educational programs designed to meet the needs of students at every stage of their academic journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
                  {program.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
