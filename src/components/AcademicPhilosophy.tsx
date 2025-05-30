import React from 'react';

const AcademicPhilosophy = () => {
  return (
    <div className='flex flex-col items-center justify-center md:py-24 pt-48'>
        <div className='flex items-center justify-center mb-6'>
            <span className="w-8 md:w-24 h-px bg-orange-300"/>
            <h1 className='text-xl md:text-2xl font-bold text-[#f4b24a] px-4'>Academic Philosophy</h1>
            <span className="w-8 md:w-24 h-px bg-orange-300"/>
        </div>
       
        <p className='text-md md:text-lg text-justify md:text-center max-w-4xl py-8 text-[#0e013d] px-8'>
        At Pioneer Group of Schools, we believe education should ignite curiosity, develop critical thinking, and inspire learners to become leaders. Our curriculum is designed to meet national standards while integrating innovation, digital skills, and real-world learning.
        </p>
    </div>
  );
};

export default AcademicPhilosophy;
