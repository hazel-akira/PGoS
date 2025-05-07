
import React from 'react';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Elementary Education",
      description: "Building a strong foundation with engaging curriculum for grades K-5.",
      buttonText: "Elementary Details"
    },
    {
      title: "Middle School",
      description: "Developing critical thinking and independence for grades 6-8.",
      buttonText: "Middle School Details"
    },
    {
      title: "High School",
      description: "College preparatory curriculum for grades 9-12 with specialized paths.",
      buttonText: "High School Details"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h6 className="text-indigo-600 font-semibold text-center mb-2">OUR PROGRAMS</h6>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Academic Excellence at Every Level</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our comprehensive educational programs designed to meet the needs of students at every stage of their academic journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Program Image {index + 1}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
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
