import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroVisit';
import SchoolsCarousel from '@/components/SchoolsCarousel';
import ContactForm from '@/components/contactForm';
import { ContactIcon } from 'lucide-react';
import ContactInfoSection from '@/components/ContactInfoSection';
import VisitUsFormAndTour from '@/components/VisitUsFormAndTour';
import CallToAction from '@/components/VisitCTA';

const schools = [
  "Pioneer School",
  "Pioneer Girls School",
  "Pioneer Junior Academy",
  "Pioneer Girls Junior Academy",
  "St. Paul Thomas Academy",
];

const VisitUs: React.FC = () => {
  const tabNames = ['schools', 'map', 'contact'];
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

   

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, tabNames]);

  

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
    <div className=" min-h-screen w-full">
      <div className="w-full">
        <HeroSection scrollToChat={() => {}} />
      </div>
      <div className="min-h-screen bg-[#f1f1f1] text-[#2C27C9]">
        <hr className="border-t border-gray-300 mb-6 mx-96" />
        <div className="py-1" onMouseEnter={handleMouseEnterTabs} onMouseLeave={handleMouseLeaveTabs}>
          <div className="container mx-auto px-4">
            
          </div>
        </div>
        <div className="py-6 px-2 md:px-8 lg:px-16 w-full">
          <VisitUsFormAndTour />
          <SchoolsCarousel />
          <CallToAction/>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;


