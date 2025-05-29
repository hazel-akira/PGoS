import React from 'react';




const AcademicJourney = () => {

  return (
    <section className='w-full h-screen bg-[#f7f7f7] pt-32 px-4 text-[#02032d]'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-center px-4'>
          <span className="w-8 md:w-24 h-px bg-orange-300"/>
          <h1 className='text-xl md:text-3xl font-bold font-serif text-[#f4b24a]'> WHERE YOUR STORY GOES</h1>
          <span className="w-8 md:w-24 h-px bg-orange-300"/>
          <h2 className='text-xl md:text-4xl font-bold italic mb-8 text-[#02032d]'>Next</h2>
          <p className='text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-light'>
          Every student’s journey is a unique story filled with potential, passion, and growth. In a supportive environment that fosters excellence and curiosity, you'll be guided and inspired at every step—because the next chapter of your story starts here.
          </p>
          
        </div>
        {/* statistics cards */}
        <div className='bg-[#02032d]/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 md:p-12 text-center max-w-md mx-auto mt-12'>
          <div className="text-6xl md:text-7xl font-bold mb-4">
              81%
            </div>
            <div className="text-sm md:text-base font-medium tracking-wide">
              ADMITTANCE RATE FOR CLASS OF<br />
              2024 EARLY APPLICATIONS
            </div>

        </div>
        <button className='shadow-lg px-8  mt-24 py-3 font-bold italic text-xl bg-gradient-to-r from-[#0E013d] to-orange-300 z-10 rounded-full text-white'>Explore Admissions</button>

      </div>
      
     

    </section>
  ) 


};

export default AcademicJourney;
