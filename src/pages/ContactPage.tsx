import React from 'react';
import { Button } from '@/components/ui/button';
import ContactInfoSection from '@/components/ContactInfoSection';
import CampusesSection from '@/components/CampusesSection';

const ContactPage = () => {


  return (

    

    <div className="min-h-screen bg-[#0D0B3B] text-white py-20">
      <ContactInfoSection/>
      <CampusesSection/>
      </div>
  );
};

export default ContactPage; 