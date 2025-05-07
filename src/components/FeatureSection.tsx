
import React from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
      title: "Excellence in Education",
      description: "Our comprehensive curriculum is designed to challenge and inspire students to achieve their academic goals."
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: "Dedicated Faculty",
      description: "Our experienced teachers are committed to providing personalized attention and fostering a supportive learning environment."
    },
    {
      icon: <Calendar className="h-10 w-10 text-indigo-600" />,
      title: "Enriching Activities",
      description: "We offer a wide range of extracurricular activities to develop well-rounded individuals beyond academics."
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Why Choose PGOS School?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're committed to providing a nurturing environment where students can discover their potential and excel in all areas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
