import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', isButton: false },
    { name: 'About', path: '/about', isButton: false },
    { name: 'Academics', path: '/academics', isButton: false },
    { name: 'VisitUs', path: '/visit-us', isButton: false },
    { name: 'Contact', path: '/contact', isButton: false },
    { name: 'Join Us', path: '/join', isButton: true },
  ];
  
  const navigate = useNavigate()

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-colors duration-300",
      isScrolled ? "bg-[#02032d] shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/images/Pgos Logo.png" 
              alt="PGOS School Logo" 
              className="h-13 w-auto mr-2"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => item.isButton ?(
              <Button
                key={item.name} 
                variant = "outline"
                onClick={() => navigate(item.path)}
                className="text-white hover:text-[#e6e6eb] transition-colors font-medium bg-[#ffbc04] hover:bg-orange-500 rounded-full"
                className="text-white hover:text-[#02032d] transition-colors font-medium bg-[#F4B24A] hover:bg-[#FF8C00] rounded-full"
              >
                {item.name}
              </Button>
            ) : (
              <a 
                key={item.name} 
                href={item.path}
                className="text-white hover:text-[#F4B24A] transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="p-2 text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300",
        isScrolled ? "bg-[#0E013D]" : "bg-transparent",
        isMenuOpen ? "max-h-96 bg-[#0E013D]" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-2 flex flex-col">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.path}
              className="py-3 text-white hover:text-indigo-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
         <a 
          href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F" 
          target="_blank" 
          rel="noopener noreferrer"
         >
  <Button 
    variant="outline" 
    className="border-orange text-white hover:bg-white hover:text-[#0E013D] mt-3"
  >
    Join US
  </Button>
</a>



        </div>
      </div>
    </nav>
  );
};

export default Navigation;
