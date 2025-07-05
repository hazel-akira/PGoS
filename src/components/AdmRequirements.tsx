import React from 'react';
import Lottie from 'lottie-react';
import sideAnimation from '../animations/education-background.json';
import topAnimation from '../animations/countdown.json';
import sceneAnimation from '../animations/books.json';


const AdmRequirements: React.FC = () => {
  return (
    <div className="bg-white-600 py-24 dark:bg-gray-900 min-h-screen text-black dark:text-white  flex justify-center items-start">
      
      {/* Left Lottie Animation */}
      <div className="hidden lg:block w-15 mr-8 mt-12">
        <Lottie
          animationData={sceneAnimation}
          loop
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
       

  
      {/* Content Section */}
      <div className="flex-1 bg-white-100 max-w-2xl"> 
      
       <h2 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
          Requirements for<br />Admission
        </h2>

        <p className="mb-8 text-center max-w-xl text-gray-600 dark:text-gray-300">
          Find the required documents for admission by level:- Primary and Secondary. Make sure to review and prepare all items
          before applying.
        </p>
      
        {/* Requirements List */}
        <div className="bg-[#efeff0] dark:bg-gray-800 p-6 rounded-lg mb-8">
          <ul className="text-lg text-gray-700 dark:text-gray-200">
            <li className="mb-3 flex items-center">📄<span className="ml-2">Birth Certificate Copy</span></li>
            <li className="mb-3 flex items-center">📚<span className="ml-2">Previous Academic Reports</span></li>
            <li className="mb-3 flex items-center">📸<span className="ml-2">Passport Photos</span></li>
            <li className="mb-3 flex items-center">📝<span className="ml-2">Filled Admission Form</span></li>
            <li className="flex items-center">🩺<span className="ml-2">Medical Form</span></li>
          </ul>
        </div>
     {/* top Lottie Animation 
     <div className="hidden lg:block w-14 ml-8">
        <Lottie
          animationData={topAnimation}
          loop
          style={{ width: '100%', height: 'auto' }}
        />
      </div>*/}
        <p className="mb-8 text-center max-w-xl text-gray-600 dark:text-gray-300">
        <span className='text-orange-600'>Download </span>  the Forms below. Fill them out and
          submit either online or at the school office.
        </p>

       {/* Download Forms List */}
{/* Download Forms List */}
<div className="text-gray-700 rounded px-5 py-5 bg-[#efeff0] dark:text-black-200">
  <h3 className="text-xl font-bold  mb-6">📥 Download Forms:</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

    {/* Left Column */}
    <div className="space-y-4 pr-4">
      <p className="flex items-center gap-2">
        🧾Pioneer school
        <a 
          href="/forms/application-form.docx" 
          download 
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          [Download]
        </a>
      </p>

      <p className="flex items-center gap-2">
        🩺 Pioneer Girls High School
        <a 
          href="/forms/medical-form.pdf" 
          download 
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          [Download]
        </a>
      </p>

      <p className="flex items-center gap-2">
        📝St Pauls Thomas Academy
        <a 
          href="/forms/fee-commitment-form.pdf" 
          download 
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          [Download]
        </a>
      </p>
    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>

    {/* Right Column */}
    <div className="space-y-4 pl-4">
      <p className="flex items-center gap-2">
        🚌 Pioneer Junior Academy
        <a 
          href="/forms/pickup-dropoff-form.pdf" 
          download 
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          [Download]
        </a>
      </p>

      <p className="flex items-center gap-2">
        🖊️ Pioneer Girls Junior Academy
        <a 
          href="/forms/declaration-form.pdf" 
          download 
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          [Download]
        </a>
      </p>

      <p className="flex items-center gap-2">
        🧾 Brochures
        <a 
          href="/forms/brochures.pdf" 
          download 
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          [Download]
        </a>
      </p>
    </div>

  </div>
</div>


       

        {/* Bottom Line */}
        <div className="w-50 h-2 bg-orange-600 dark:bg-orange-400 mt-8  mx-auto"></div>
      </div>
  {/* top Lottie Animation
  <div className="hidden lg:block w-10 ml-8">
        <Lottie
          animationData={topAnimation}
          loop
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      {/* Optional: Right Side Animation 
      <div className="hidden lg:block w-12 ml-8">
        <Lottie
          animationData={sideAnimation}
          loop
          style={{ width: '100%', height: 'auto' }}
        />
      </div> */}
    </div>
  );
};

export default AdmRequirements;
