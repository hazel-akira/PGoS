import React from 'react';


const CurriculumOverview = [
    {
        title: 'Primary School',
        description: 'The primary school curriculum is designed to provide a comprehensive and engaging education for children aged 3-11. It focuses on developing essential skills, fostering creativity, and promoting critical thinking.',
        image: '/images/primaryschool1.png',
        alt: 'primaryschool',
    },
    {
        title: 'Junior Secondary School',
        description: 'The junior secondary school curriculum is designed to provide a comprehensive and engaging education for children aged 11-14. It focuses on developing essential skills, fostering creativity, and promoting critical thinking.',
        image: '/images/juniorsecondarypng',
        alt: 'juniorsecondary',
    },
    {
        title: 'Senior Secondary School',
        description: 'The senior secondary school curriculum is designed to provide a comprehensive and engaging education for children aged 14-18. It focuses on developing essential skills, fostering creativity, and promoting critical thinking.',
        image: '/images/seniorschool.png',
        alt: 'seniorschool',
    },
    
]

const Curriculum = () => {
  return (
    <div className='flex flex-col items-center justify-center md:py-16 py-2'>
        <div className='flex items-center justify-center mb-6 mt-2'>
            <span className="w-8 md:w-24 h-px bg-orange-300"/>
            <h1 className='text-lg md:text-2xl font-bold text-[#f4b24a] px-4'>Curriculum Overview</h1>
            <span className="w-8 md:w-24 h-px bg-orange-300"/>
        </div>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3'></div>
            {CurriculumOverview.map((image, index) => (
                <div key={index} className='md:w-1/3'>
                    <img src={image.image} alt={image.alt} className='w-full h-full object-cover' />
                </div>
            ))}
        </div>
      
    </div>
  );
};

export default Curriculum;
