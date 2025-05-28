import React, { useState, useEffect } from 'react';
// import Navigation from '@/components/Navigation';
import HeroVisit from '@/components/HeroVisit';
import SchoolsCarousel from '@/components/SchoolsCarousel';
import ContactForm from '@/components/contactForm';
import { ContactIcon } from 'lucide-react';
import ContactInfoSection from '@/components/ContactInfoSection';

const VisitUs = () => {
  const tabNames = ['schools', 'map', 'contact'];
  const [activeTab, setActiveTab] = useState<'schools' | 'map' | 'contact' | 'faq'>(tabNames[0] as 'schools');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTab((currentTabName) => {
          const currentIndex = tabNames.indexOf(currentTabName);
          const nextIndex = (currentIndex + 1) % tabNames.length;
          return tabNames[nextIndex] as typeof activeTab;
        });
      }, 5000); // Change tab every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, tabNames]);

  const handleTabClick = (tabName: 'schools' | 'map' | 'contact' | 'faq') => {
    setActiveTab(tabName);
    setIsAutoPlaying(false); // Pause auto-play on user interaction
  };

  const handleMouseEnterTabs = () => {
    setIsAutoPlaying(false); // Pause on hover
  };

  const handleMouseLeaveTabs = () => {
    setIsAutoPlaying(true); // Resume on mouse leave
  };

  return (
    <div className="min-h-screen bg-white text-#2C27C9">

      {/* <Navigation /> */}
      <HeroVisit scrollToChat={() => {}} />
      <hr className="border-t border-gray-300 mb-6 mx-96" />
      
         {/* Tabs */}
      <div className="py-1" onMouseEnter={handleMouseEnterTabs} onMouseLeave={handleMouseLeaveTabs}>
        <div className="container mx-auto px-4">
        <div className="bg-[#0d0d4e] text-white py-1 px-6 
  rounded-tl-x4 rounded-tr-xl rounded-bl-md rounded-br-md 
  flex justify-center space-x-8 mx-auto w-fit my-8">
            {tabNames.map((tab) => (
             <span
  key={tab}
  onClick={() => handleTabClick(tab as 'schools' | 'map' | 'contact' | 'faq')}
  className={`cursor-pointer font-medium px-4 py-2 
    ${
      activeTab === tab
        ? 'border-b-2 border-[#ffbc04] text-[#ffbc04]'
        : 'hover:text-[#ffbc04]'
    } 
    rounded-tl-xl rounded-tr-xl rounded-bl-sm rounded-br-sm
  `}
>
                {tab === 'schools' && 'Our Schools'}
                {tab === 'map' && 'View on Map'}
                {tab === 'contact' && 'Contact'}
              
              </span>
            ))}
          </div>
        </div>
      </div>
      {activeTab === 'schools' && <SchoolsCarousel />}
      {activeTab === 'contact' &&  <ContactInfoSection />}
     
 {activeTab === 'map' && (
        <div className="container mx-auto px-4 py-12">
          <iframe
            className="w-full h-96 rounded-lg border-2 border-[#ffbc04]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank you for your interest.</h2>
          <p className="text-lg leading-relaxed mb-4">
            We value your feedback, inquiries, and suggestions. Please reach out using the contact
            info below.
          </p>
          <div className="space-y-2 text-white">
            <p>Email: info@pioneerschools.ac.ke</p>
            <p>Phone: +254 712 345 678</p>
            <p>Address: Pioneer Campus, Nairobi, Kenya</p>
          </div>
        </div>
      )}

     
     
    </div>
  );
};

export default VisitUs;


