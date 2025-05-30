import React from "react";
import { BrainIcon } from "lucide-react";
import { RocketIcon } from "lucide-react";


const MissionVission: React.FC = () => {

   
  return (
    <section className="bg-[#f1f2fc] mx-auto md:h-screen md:py-16 py-10">
       <div className=" overflow-hidden">
            
            <div className=" mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                <hr className="border-t border-gray-300 mb-6 mx-24 md:mx-60 mt-16 md:mt-0" />
                <h1 className="text-xl md:text-5xl font-bold font-serif text-[#02032d] mb-2">About Us</h1>
                <p className="text-lg text-gray-600 pt-10"><span className="text-orange-400">"</span>Discover our commitment to educational excellence <span className="text-orange-400">"</span></p>
                    
                </div>
            </div>
        </div>
        <div className="mx-4 md:mx-auto my-32 md:p-10  p-6 space-y-20 border-t-0 shadow-lg rounded-xl text-gray-800 max-w-6xl">
        {/* Mission Section */}
        <div>
            <h2 className="text-2xl font-semibold text-[#f4b24a] text-center">Our Mission</h2>
            <div className="flex items-center justify-center mt-2 mb-6">
            <span className="w-20 h-px bg-[#f4b24a]" />
            <RocketIcon className="mx-4 text-[#f4b24a]" />
            <span className="w-20 h-px bg-[#f4b24a]" />
            </div>
            <div>
            <p className="text-md sm:text-base font-sans">
                "To empower young minds with knowledge,
                inspire creativity, and cultivate integrity. We are dedicated to providing a holistic
                education that nurtures academic excellence, personal growth, and social responsibility.
                Through innovation, passion, and a commitment to high standards, we prepare our students
                to become confident leaders and lifelong learners who will shape a better future."
            </p>
            </div>
        </div>

        {/* Education Philosophy Section */}
        <div>
            <h2 className="text-2xl font-semibold text-[#f4b24a] text-center">Our Philosophy</h2>
            <div className="flex items-center justify-center mt-2 mb-6">
            <span className="w-20 h-px bg-[#f4b24a]" />
            <BrainIcon className="mx-4 text-[#f4b24a]" />
            <span className="w-20 h-px bg-[#f4b24a]" />
            </div>
            <div>
            <p className="text-md sm:text-base">
                "We believe in the transformative power of education to ignite
                curiosity, foster critical thinking, and shape character. Our philosophy is rooted in nurturing
                a learning environment that values individuality, collaboration, and innovation.Through a balance of academic rigor,
                creative exploration, and moral guidance, we aim to empower students to lead lives of purpose
                and impact."
            </p>
            </div>
        </div>
        </div>
    </section>
  )
};

export default MissionVission;
