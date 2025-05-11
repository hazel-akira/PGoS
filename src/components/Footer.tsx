import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
   X,
  
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';
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
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/footerimage2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02032D] bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {/* Contact Us / Logos */}
        <div>
          <div className="flex space-x-2 mb-4">
            <img src="/images/pgos_logo.png" alt="pioneerschool" className="h-16" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Visit</a></li>
            <li><a href="#" className="hover:underline">Schools</a></li>
            <li><a href="#" className="hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Students Life</a></li>
            <li><a href="#" className="hover:underline">Why choose Pioneer Schools</a></li>
          </ul>
        </div>

        {/* Search and Socials */}
        <div className="space-y-4">
  
          {/* <div className="flex border-b border-orange-400 w-full items-center">
            <input
              type="text"
              placeholder="Search PGOS"
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-grow pr-2"
            />
            <svg
              className="h-5 w-5 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </div> */}

          {/* Social Icons */}
          <div className="flex space-x-4 mt-10 text">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiInstagram /></a>
            <a href="#"><RiTwitterXFill /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiYoutube /></a>
            <a href="#"><RiTiktokLine /></a>
          </div>
        </div>
        
      </div>

      {/* Bottom Footer Row */}
      <div className="relative z-10 border-t border-gray-700 py-4 text-center text-sm text-gray-300">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <p>&copy; {currentYear}</p>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Disclaimer</a>
          <span>|</span>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
      <ArrowUp className="text-white" size={24} />
      </button>
    </footer>
  );
};

export default Footer;