import React from 'react';
import { Button } from '@/components/ui/button';
import ContactInfoSection from '@/components/ContactInfoSection';
import CampusesSection from '@/components/CampusesSection';

const ContactPage = () => {


  return (

    

    <div className="min-h-screen bg-[#0D0B3B] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left section with text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">We'd love to hear from you!</h2>
            <p className="text-lg leading-relaxed">
              Please fill out the form and we'll get back to you as soon as possible.
            </p>
            {/* Add more contact details here if needed */}
            {/* <p className="mt-4">Phone: +254 20 5038097</p> */}
            {/* <p>Email: info@pioneergroupofschools.co.ke</p> */}
          </div>

          {/* Right section with the Contact Form */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-8 w-full max-w-md">
              <h3 className="text-xl font-semibold text-center mb-6">CONTACT</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"/>
                </div>
                 <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                  <input type="text" id="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FFC300] hover:bg-[#D3AF37] text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                >
                  SUBMIT
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 