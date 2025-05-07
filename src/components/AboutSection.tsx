
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <div className="bg-indigo-600 absolute top-0 left-0 w-full h-full -translate-x-4 -translate-y-4 -z-10 rounded-lg"></div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500">School Campus Image</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h6 className="text-indigo-600 font-semibold mb-2">ABOUT OUR SCHOOL</h6>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nurturing Minds, Building Futures</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, PGOS School has been committed to academic excellence and character development for over 25 years. Our school provides a supportive environment where students are encouraged to explore, learn, and grow.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in a holistic approach to education that balances academic rigor with creative expression, physical well-being, and social responsibility.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
