
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-indigo-600 font-bold text-2xl">PGOS</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.path}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              onClick={() => document.getElementById('chatSection')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Chat with Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white overflow-hidden transition-all duration-300",
        isMenuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-2 flex flex-col">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.path}
              className="py-3 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white mt-3"
            onClick={() => {
              document.getElementById('chatSection')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            Chat with Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
