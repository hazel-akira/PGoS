import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
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
      <div className="py-6 px-2 md:px-8 lg:px-16 w-full">
        <VisitUsFormAndTour />
        <SchoolsCarousel />
      </div>
    </div>
  );
};

export default VisitUs;


