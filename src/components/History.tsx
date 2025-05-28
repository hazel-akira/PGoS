import React from "react";

const History: React.FC = () => {
  return (
    <section>
     <div className="relative w-full">
        {/* Main content container */}
        <div className="flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="bg-[#02032d] text-white p-6 md:p-10 flex flex-col justify-center items-center w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-center tracking-wide font-serif text-[#f4b24a] md:my-0 my-4">From Heritage to Horizon</h2>
            <p className="text-lg md:text-xl font-sans font-light max-w-2xl border border-white/20 border-t-0 shadow-inner rounded-b-xl  md:p-6 p-2 backdrop-blur-sm">
            Our roots as Pioneer Group of Schools date back to 1996 when it was established on a former colonial sisal farm and factory along the ridges of Maragua river in Murang’a District, formerly Central Province; the traditional center of the Kikuyu plateau. The academic institution began by providing primary school education under the 8-4-4 system (Class 4 to Class 8) with around 100 pupils.Throughout its history it has been one of the leading independent schools in Kenya and it continues to provide a stimulating all-round education, coupled with academic excellence.Ours is a modern, forward-thinking school which embraces new opportunities within teaching and learning with focus on Science Technology, Engineering and Mathematics (STEM) education. Tradition teaching remains important and still shapes some of our guiding principles, but it is our willingness to innovate which has seen the schools thrive.
            </p>
         </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
          <img
              src="/images/history.png"
              alt="Students in uniform"
              className="w-full h-full object-cover"
              loading="lazy"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

