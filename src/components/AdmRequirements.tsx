import React from 'react';
import Lottie from 'lottie-react';
import sideAnimation from '../animations/education-background.json';
import topAnimation from '../animations/countdown.json';
import sceneAnimation from '../animations/books.json';


const AdmRequirements: React.FC = () => {
  return (
    <div className="bg-[#D9D9D9] h-screen text-black px-8 py-32 flex justify-center items-start">
      {/* Left Lottie Animation */}
      <div className="hidden lg:block w-15 mr-8 mt-12">
        <Lottie
          animationData={sceneAnimation}
          loop
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
       

  
      {/* Content Section */}
      <div className="flex-1 max-w-2xl">
       

        <h2 className="text-3xl font-bold mb-2 text-center">
          Requirements for<br />Admission
        </h2>

        <p className="mb-8 text-center max-w-xl">
          Find the required documents for admission by level—Primary and Secondary. Make sure to review and prepare all items
          before applying.
        </p>
      
        {/* Requirements List */}
        <div className="bg-[#fbfbfc] p-6 rounded-lg mb-8">
          <ul className="text-lg">
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
        <p className="mb-8 text-center max-w-xl">
          Download the Admission and Medical Forms below. Fill them out and
          submit either online or at the school office.
        </p>

        {/* Download Forms List */}
        <div className="bg-[#fbfbfc] p-6 rounded-lg">
          <h2 className="font-bold mb-4 text-lg">📥 Download Forms:</h2>
          <ul className="text-lg">
            <li className="mb-3">🧾<span className="ml-2">Inquiry Form [Download]</span></li>
            <li className="mb-3">📝<span className="ml-2">Admission Form [Download]</span></li>
            <li>🩺<span className="ml-2">Medical Form [Download]</span></li>
          </ul>
        </div>
       

        {/* Bottom Line */}
        <div className="w-50 h-2 bg-orange-600 mt-8  mx-auto"></div>
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
