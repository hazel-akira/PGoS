import React from "react";


const HeroAbout: React.FC = () => {
  return(
    <section className="relative bg-cover bg-center h-[80vh] text-white flex items-center justify-center bg-fixed" style={{ backgroundImage: "url('/images/aboutushero.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="p-8 text-center rounded-lg max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F4B24A] tracking-wide leading-relaxed">
          Empowering generations through quality education.
        </h1>
      </div>
     
    </section>
  )
};

export default HeroAbout;
