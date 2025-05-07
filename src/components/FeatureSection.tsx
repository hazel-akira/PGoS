
import React from 'react';
import { MessageCircle, Clock, Zap } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <MessageCircle className="h-10 w-10 text-indigo-600" />,
      title: "24/7 Availability",
      description: "Get support and answers whenever you need them, day or night."
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: "Instant Responses",
      description: "No waiting around - receive immediate replies to your questions."
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-600" />,
      title: "Time-Saving",
      description: "Skip the search and get straight to the information you need."
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Choose Our Chatbot?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
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
