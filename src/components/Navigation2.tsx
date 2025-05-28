import React from "react";
import { Menu } from "lucide-react"
import { useNavigate } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu";

interface Navigation2Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}


const Navigation2: React.FC<Navigation2Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/images/pgos_logo.png" alt="Logo" className="h-12 md:h-16" onClick={() => navigate('/')} />
      </div>

      {/*Desktop nav items */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="text-orange-400 text-lg hover:text-[#f4b24a] font-semi-bold text-sm px-4 py-2 flex items-center shadow-lg bg-white/30 rounded-md" onClick={() => navigate('/')}>
            HOME
        </div>
        <button className="bg-[#F4B24A] hover:bg-white/30 text-[#oe013d] hover:text-white font-semi-bold px-4  py-2 rounded-md text-sm flex items-center" onClick={() => navigate('/contact')}>
          <span className="mr-1">?</span> INQUIRE
        </button>
        <button className="bg-[#F4B24A] hover:bg-white/30 text-[#oe013d] hover:text-white font-semi-bold px-4 py-2 rounded-md text-sm flex items-center" onClick={() => navigate('/admissions')}>
         JOIN US
        </button>
        {/* Hamburger button */}
        <button className="flex items-center px-4 text-lg hover:text-[#f4b24a] text-white py-1 gap-2 shadow-lg bg-white/30 rounded-md" onClick={() => setIsMenuOpen(true)}>
        MENU <Menu /> 
        </button>
      </div>
      {/* mobile only  */}
      <button className="flex md:hidden items-center px-4 py-1 text-lg text-white hover:text-[#f4b24a] gap-2 shadow-lg bg-white/30 rounded-md " onClick={() => setIsMenuOpen(true)}>
        MENU <Menu/>
      </button>

      {isMenuOpen && <FullScreenMenu onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default Navigation2;