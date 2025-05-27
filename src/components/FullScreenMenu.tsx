import {X} from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props ={
  onClose: () => void;

}

const FullScreenMenu = ({onClose}: Props) => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-[999] flex">
            {/* Left: Image */}
            <div className="w-1/2 hidden lg:block">
                <img
                src="/images/menuimage.png"
                loading="lazy"
                alt="Campus"
                className="h-full w-full object-cover"
                />
            </div>
        
            {/* Right: Menu */}
            <div className="w-full lg:w-1/2 bg-[#0e013d] p-6 sm:p-6 md:p-8 flex flex-col justify-between relative min-h-screen">
              {/* Logo & Close Icon at the top */}
              <div className="relative mb-6 md:mb-8">
                <div className="flex items-center justify-start">
                  <img src="/images/pgos_logo.png" alt="Logo" className='h-16' />
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-[#f4b24a] transition"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 sm:h-8 sm:w-8" />
                </button>
              </div>
              {/* Middle: Nav and Map side by side */}
              <div className="flex flex-col lg:flex-row flex-1 relative items-center gap-6 lg:gap-0 mt-10 md:mt-0">
                {/* Nav Items */}
                <div className=" w-full lg:flex-1 flex flex-col z-10 self-center">
                  <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl font-serif text-white text-left">
                    <li><button className="hover:underline hover:text-[#f4b24a] transition-colors text-left" onClick={() => {navigate('/about'); onClose();} }>About Pioneer Schools</button></li>
                    <li><button className="hover:underline hover:text-[#f4b24a] transition-colors text-left" onClick={() => {navigate('/academics'); onClose();}}>Academics</button></li>
                    <li><button className="hover:underline hover:text-[#f4b24a] transition-colors text-left" onClick={() => {navigate('/admissions'); onClose();}}>Admissions</button></li>
                    <li><button className="hover:underline hover:text-[#f4b24a] transition-colors text-left" onClick={() => {navigate('/contact us'); onClose();}}>Contact Us</button></li>
                  </ul>
                </div>
                {/* Vertical Center Border */}
                <div
                  className=" hidden lg:block absolute left-1/2 -translate-x-1/2 border-l border-gray-300 opacity-70 z-0"
                  style={{
                    top: '0',
                    bottom: '0',
                  }}
                />
                {/* Map */}
                <div className=" w-full lg:flex-1 flex items-center justify-center lg:pl-8 z-10">
                  <div className='max-w-md w-full lg:max-w-none'>
                    <iframe
                      title="School Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4016685206457!2d37.16211697582504!3d-0.8280403352987525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50c74d53417%3A0xff10395f6befaa0!2sPioneer%20School!5e0!3m2!1sen!2ske!4v1747380714086!5m2!1sen!2ske"
                      width="100%"
                      height="350"
                      className='sm:h-[200px] lg:h-[350px]'
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* Bottom Buttons: full width */}
              <div className="flex justify-around py-4 bg-[#f4b24a] text-white rounded-md w-full md:mt-4">
                <button className="flex-1 flex items-center justify-center space-x-1 px-4 py-1 rounded hover:text-[#0e013d] transition" onClick={() => navigate('/')}>! <span>INQUIRE</span></button> 
                <button className="flex-1 flex items-center justify-center space-x-1 px-4 py-1 rounded hover:text-[#0e013d] transition"  onClick={() => navigate('/admissions')}><span>JOIN US</span></button>
                <button className="flex-1 flex items-center justify-center space-x-1 px-4 py-1 rounded hover:text-[#0e013d] transition"  onClick={() => navigate('/visit-us')}>📍 <span>VISIT</span></button>
              </div>
            </div>
        </div>
    );  
}
export default FullScreenMenu;