import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroVisit';
import SchoolsCarousel from '@/components/SchoolsCarousel';
import ContactForm from '@/components/contactForm';
import { ContactIcon } from 'lucide-react';
import ContactInfoSection from '@/components/ContactInfoSection';
import VisitUsFormAndTour from '@/components/VisitUsFormAndTour';

const schools = [
  "Pioneer School",
  "Pioneer Girls School",
  "Pioneer Junior Academy",
  "Pioneer Girls Junior Academy",
  "St. Paul Thomas Academy",
];

const VisitUs: React.FC = () => {
  const tabNames = ['schools', 'map', 'contact'];
  const [activeTab, setActiveTab] = useState<'schools' | 'map' | 'contact' | 'faq'>(tabNames[0] as 'schools');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [form, setForm] = useState({
    school: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just clear the form
    setForm({ school: "", date: "", time: "", name: "", email: "", phone: "" });
    alert("Form submitted! (Demo only)");
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen w-full">
      <div className="w-full">
        <HeroSection scrollToChat={() => {}} />
      </div>
      <div className="min-h-screen bg-white text-[#2C27C9]">
        <hr className="border-t border-gray-300 mb-6 mx-96" />
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
        <div className="py-6 px-2 md:px-8 lg:px-16 w-full">
          <VisitUsFormAndTour />
          <SchoolsCarousel />
        </div>
      </div>
    </div>
  );
};

export default VisitUs;


