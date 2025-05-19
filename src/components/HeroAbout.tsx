import React from "react";


const HeroAbout: React.FC = () => {
  return(
    <section className="relative bg-cover bg-center h-[80vh] text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/aboutushero.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="p-8 text-center rounded-lg max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF8C00]">
          Empowering generations through quality education.
        </h1>
      </div>
      {/* Navbar at the bottom */}
      <div className="absolute left-1/2 bottom-[-2.5rem] transform -translate-x-1/2 z-20 w-full md:h-[100px] h-[50px] flex justify-center pointer-events-none">
        <div className="bg-white rounded-xl shadow-lg flex justify-center items-center px-8 py-6 space-x-12 w-[90vw] max-w-3xl pointer-events-auto">
          <button className="text-black font-semibold md:text-lg text-sm focus:outline-black hover:text-[#FF8C00]">Mission &amp; Philosophy</button>
          <button className="text-black font-semibold md:text-lg text-sm focus:outline-black hover:text-[#FF8C00]">Our History</button>
          <button className="text-black font-semibold md:text-lg text-sm focus:outline-black hover:text-[#FF8C00]">Leadership</button>
        </div>
      </div>
    </section>)
};

export default HeroAbout;
