import React from 'react';
import {ArrowUp} from 'lucide-react';
import { RiTwitterXFill } from "react-icons/ri";
import { RiTiktokLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-48 text-white bg-cover bg-center border-t border-gray-500"
      style={{ backgroundImage: "url('/images/footerimage2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02032D] bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid md:grid-cols-4 gap-8 py-8">
        {/* Contact Us / Logos */}
        <div>
          <div className="flex space-x-2 mb-4">
            <img src="/images/pgos_logo.png" alt="pioneerschool" className="h-16" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#F4B24A] text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">About</a></li>
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">Visit</a></li>
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">Schools</a></li>
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">Students Life</a></li>
            <li><a href="#" className="hover:decoration-[#F4B24A] hover:underline">Why choose Pioneer Schools</a></li>
          </ul>
        </div>

        {/* Search and Socials */}
        <div className="space-y-4">

          {/* Social Icons */}
          <div className="flex space-x-4 mt-10 text">
            <a href="#" className='hover:text-[#F4B24A] transition-colors duration-300'><FiFacebook /></a>
            <a href="#" className='hover:text-[#F4B24A] transition-colors duration-300'><FiInstagram /></a>
            <a href="#" className='hover:text-[#F4B24A] transition-colors duration-300'><RiTwitterXFill /></a>
            <a href="#" className='hover:text-[#F4B24A] transition-colors duration-300'><FiLinkedin /></a>
            <a href="#" className='hover:text-[#F4B24A] transition-colors duration-300'><FiYoutube /></a>
            <a href="#" className='hover:text-[#F4B24A] transition-colors duration-300'><RiTiktokLine /></a>
          </div>

          
        </div>
        {/* Scroll to Top */}
        <button
            className="mt-6 bg-white bg-opacity-20 w-10 h-10 mb-10 rounded-full hover:bg-opacity-40 transition flex flex-col items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="text-white" size={24} />
          </button>
        
      </div>

      {/* Bottom Footer Row */}
      <div className="relative z-10 border-t border-gray-700 py-4 text-center text-sm text-gray-300 mt-10">
        <div className="flex md:flex-row justify-center items-center space-x-2 md:space-y-0 md:space-x-2">
          <p>&copy; {currentYear}</p>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Disclaimer</a>
          <span>|</span>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;