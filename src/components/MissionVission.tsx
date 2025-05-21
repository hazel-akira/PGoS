import React from "react";
import { BrainIcon } from "lucide-react";
import { RocketIcon } from "lucide-react";


const MissionVission: React.FC = () => {

   
  return (
    <section className="bg-[#f1f2fc] py-20 md:max-h-[900px] py-16" style={{backgroundImage: 'url(/images/admin.png)'}}>
        <div className="max-w-4xl mx-auto space-y-16 border-t-0  bg-white shadow-md rounded-xl p-6 text-gray-800 max-w-3xl mx-auto">
        {/* Mission Section */}
        <div>
            <h2 className="text-xl font-semibold text-orange-500 text-center">Our Mission</h2>
            <div className="flex items-center justify-center mt-2 mb-6">
            <span className="w-20 h-px bg-orange-300" />
            <RocketIcon className="mx-4 text-orange-500" />
            <span className="w-20 h-px bg-orange-300" />
            </div>
            <div>
            <p className="text-sm sm:text-base">
                "At Pioneer Group of Schools, our mission is to empower young minds with knowledge,
                inspire creativity, and cultivate integrity. We are dedicated to providing a holistic
                education that nurtures academic excellence, personal growth, and social responsibility.
                Through innovation, passion, and a commitment to high standards, we prepare our students
                to become confident leaders and lifelong learners who will shape a better future."
            </p>
            </div>
        </div>

        {/* Education Philosophy Section */}
        <div>
            <h2 className="text-xl font-semibold text-orange-500 text-center">Our Education Philosophy</h2>
            <div className="flex items-center justify-center mt-2 mb-6">
            <span className="w-20 h-px bg-orange-300" />
            <BrainIcon className="mx-4 text-orange-500" />
            <span className="w-20 h-px bg-orange-300" />
            </div>
            <div>
            <p className="text-sm sm:text-base">
                "At Pioneer Group of Schools, we believe in the transformative power of education to ignite
                curiosity, foster critical thinking, and shape character. Our philosophy is rooted in nurturing
                a learning environment that values individuality, collaboration, and innovation. We strive to
                create a culture where students are encouraged to explore their passions, challenge boundaries,
                and grow into resilient, responsible global citizens. Through a balance of academic rigor,
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
