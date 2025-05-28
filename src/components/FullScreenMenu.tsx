import {X} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type Props ={
  onClose: () => void;

}

const navLinks = [
  {
    name: 'Home',
    path: '/',
    sublinks: [
      {name: 'About', path: '/about-section'},
      {name: 'Pioneer Highlights', path:'/at-glance'},
      {name: 'Life in Abundance', path:'/student-life'},
      {name: 'Testimonials', path:'/testimonials'},
      {name: 'Schools', path:'/schools'}
    ]
  },
  {
    name: 'About',
    path: '/about',
    sublinks: [
      { name: 'Mission', path: '/about/mission' },
      { name: 'History', path: '/about/history' },
      { name: 'Leadership', path: '/about/leadership' },
      { name: 'Why Choose our schools', path: '/about/why-choose' },
    ],
  },
  {
    name: 'Academics',
    path: '/academics',
    sublinks: [
      { name: 'Curriculum', path: '/academics/curriculum' },
      { name: 'Elite Learning Paths', path: '/academics/learning-paths' },
      { name: 'Academic Highlights', path: '/academics/highlights' },
      { name: 'Where your story goes', path: '/academics/where-story-goes' },
    ],
  },
  {
    name: 'Admissions',
    path: '/admissions',
    sublinks: [
      {name: 'Enrollment process', path: '/admissions/enrollment'},
      {name: 'Admission Requirements', path: '/admissions/requirements'}
    ]
  },
  {
    name: 'Contact Us',
    path: '/contact',
  },
  
];


const navButtons = [
  {label: 'INQUIRE', icon: '?', path: '/contact'},
  {label: 'JOIN US', icon: '', path: '/admissions'},
  {label: 'VISIT', icon: '📍', path: '/visit-us'},

]

const FullScreenMenu = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
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
          {/* Top */}
          <div className="relative mb-6 md:mb-8">
            <div className="flex items-center justify-start">
              <img src="/images/pgos_logo.png" alt="Logo" className="h-16" />
            </div>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-[#f4b24a] transition"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>

          {/* Middle */}
          <div className="flex flex-col lg:flex-row flex-1 relative items-center gap-6 lg:gap-0 mt-10 md:mt-0">
            <div className="w-full lg:flex-1 flex flex-col z-10 self-center">
              <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl font-serif text-white text-left">
                {navLinks.map((item,index) => (
                  <li key={item.path} className={`relative ${openIndex === index ? 'z-30' : 'z-10'}`}>
                    <div className='relative'>
                    <button
                      className="w-full text-left text-white flex items-center justify-between py-1 px-4 hover:text-[#f4b24a] transition"
                      onClick={() => {
                        if (item.sublinks) {
                          toggleAccordion(index);
                        }else{
                          navigate(item.path);
                          onClose();
                        }
                        
                      }}
                    >
                      <span>{item.name}</span>
                      {item.sublinks && (
                        <ChevronDown
                          className={`ml-2 h-5 w-5 transform transition-transform duration-300 justify-right relative ${
                            openIndex === index ? 'rotate-180 z-40' : 'z-10'
                          }`}
                        />
                      )}
                    </button>

                    {/* Sublinks Accordion */}
                    <AnimatePresence initial={true}>
                      {openIndex === index && item.sublinks && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="absolute left-1/3 top-0 mx-2 mt-2 bg-[#1b104e] p-3 rounded-md shadow-lg z-30 min-w-[180px] space-y-2 text-sm text-gray-200 font-light justify-center"
                        >
                          {item.sublinks.map((sub) => (
                            <li key={sub.path}>
                              <button
                                onClick={() => {
                                  navigate(sub.path);
                                  onClose();
                                }}
                                className="block w-full text-left hover:underline hover:text-[#f4b24a] transition-colors"
                              >
                                {sub.name}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 border-l border-gray-300 opacity-70 z-0 top-0 bottom-0" />

            {/* Map */}
            <div className="w-full h-auto lg:flex-1 flex items-center justify-center lg:pl-8 z-10 mt-8 md:mt-0">
              <div className="max-w-md w-full lg:max-w-none">
                <iframe
                  title="School Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4016685206457!2d37.16211697582504!3d-0.8280403352987525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50c74d53417%3A0xff10395f6befaa0!2sPioneer%20School!5e0!3m2!1sen!2ske!4v1747380714086!5m2!1sen!2ske"
                  className="w-full h-[200px] sm:h-[100px] lg:h-[350px] rounded-xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-around py-4 bg-[#f4b24a] text-white rounded-md w-full mt-4">
            {navButtons.map((action) => (
              <button
                key={action.path}
                className="flex-1 flex items-center justify-center space-x-1 px-4 py-1 rounded hover:text-[#0e013d] transition"
                onClick={() => {
                  navigate(action.path);
                  onClose();
                }}
              >
                {action.icon && <span>{action.icon}</span>}
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default FullScreenMenu;