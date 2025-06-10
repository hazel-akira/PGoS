import React from "react";
import { Menu } from "lucide-react"
import { useNavigate } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu";
import { useMenu } from './MenuContext';
import clsx from 'clsx';

// interface Navigation2Props {
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   isMenuOpen: boolean;
// }


const Navigation2: React.FC = () => {
  const { isMenuOpen, openMenu, closeMenu, isSubMenuOpen } = useMenu();

  

  const navigate = useNavigate();

  return (
    <nav className={clsx(
      "absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 transition-colors duration-300",
      isMenuOpen && isSubMenuOpen ? "bg-[#02032d]" : "bg-transparent"
    )}>
      {/* Logo */}
      <div className="flex items-center space-x-2 ">
        <img 
          src="/images/pgos_logo.png" 
          alt="Logo" 
          className="h-12 md:h-16 bg-[#02032d]/10 rounded-md transition-all duration-300 cursor-pointer brightness-105"
          onClick={() => navigate('/')} 
        />
      </div>

      {/*Desktop nav items */}
      <div className="hidden md:flex items-center space-x-4">
        <div className=" text-white md:text-md hover:text-[#f4b24a] hover:underline font-semi-bold text-sm px-4 py-2 flex items-center shadow-lg bg-gradient-to-r from-[#f4b24a] to-[#02032d] rounded-md" onClick={() => navigate('/')}>
            HOME
        </div>
        <button className="bg-[#F4B24A] hover:bg-white/30 text-[#02032d] hover:text-orange-400 font-semi-bold px-4  py-2 rounded-md text-sm flex items-center" onClick={() => navigate('/contact')}>
          <span className="mr-1">?</span> ENQUIRE
        </button>
        <button className="bg-[#F4B24A] hover:bg-white/30 text-[#02032dd] hover:text-orange-400 font-semi-bold px-4 py-2 rounded-md text-sm flex items-center" onClick={() => navigate('/admissions')}>
         JOIN US
        </button>
        {/* Hamburger button */}
        <button className="flex items-center px-4 md:text-md text-sm hover:text-[#f4b24a] text-white py-1 gap-2 shadow-lg bg-gradient-to-r from-[#f4b24a] to-[#02032d] rounded-md" onClick={openMenu}>
        MENU <Menu /> 
        </button>
      </div>
      {/* mobile only  */}
      <button className=" text-white flex md:hidden items-center px-4 py-1 md:text-md hover:text-[#f4b24a] gap-2 shadow-lg bg-gradient-to-r from-[#f4b24a] to-[#02032d] rounded-md " onClick={openMenu}>
        <Menu/>
      </button>

      {isMenuOpen && <FullScreenMenu onClose={closeMenu} />}
    </nav>
  );
};

export default Navigation2;