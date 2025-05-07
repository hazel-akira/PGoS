
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">ChatBot Assistant</h3>
            <p className="text-gray-400 mt-1">Your AI companion</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} ChatBot Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
