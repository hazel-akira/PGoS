
import React from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-indigo-600" />,
      title: "Excellence in Education",
      description: "Our comprehensive curriculum is designed to challenge and inspire students to achieve their academic goals and prepare for future success."
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: "Dedicated Faculty",
      description: "Our experienced teachers are committed to providing personalized attention and fostering a supportive learning environment for every student."
    },
    {
      icon: <Calendar className="h-12 w-12 text-indigo-600" />,
      title: "Enriching Activities",
      description: "We offer a wide range of extracurricular activities to develop well-rounded individuals beyond academics and build important life skills."
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose PGOS School?
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We're committed to providing a nurturing environment where students can discover their potential and excel in all areas of life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
