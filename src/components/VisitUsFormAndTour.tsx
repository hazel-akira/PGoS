import React, { useState } from 'react';
import { motion } from 'framer-motion';


const schools = [
  "Pioneer School",
  "Pioneer Girls School",
  "Pioneer Junior Academy",
  "Pioneer Girls Junior Academy",
  "St. Paul Thomas Academy",
];

const VisitUsFormAndTour: React.FC = () => {
  const [form, setForm] = useState({
    school: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ school: "", date: "", time: "", name: "", email: "", phone: "" });
    alert("Form submitted! (Demo only)");
  };

  return (
    
    <div className="bg-[#f1f1f1] dark:bg-[#02032d] w-auto h-auto py-10 px-2 sm:px-4 md:px-8">
<hr className="border-t  border-gray-300 mb-6 mx-30" />
<motion.h2
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6 }}
  className="text-3xl md:text-5xl font-semibold font-serif text-[#02032d] dark:text-white  text-center mb-20 tracking-wide"
>
  Schedule <span className='text-orange-400'>a Campus Tour</span>
</motion.h2>
<p className="text-gray-600 mb-6 text-center text-2xl max-w-2xl mx-auto">
<div className="flex items-start justify-center mb-6 max-w-2xl mx-auto">
  <div className="w-1 h-10 bg-orange-600 mr-4"></div>
  <p className="text-gray-600 text-2xl text-left">
    <span className="text-[#02032d] font-semibold dark:text-white">
      Are you interested in experiencing life as an Eagle?
    </span>
  </p>
</div>

          <h3 className='text-[#02032d] dark:text-white'>We'd be thrilled to give you a tour of our PGOS community!</h3>
        </p> 
<hr className="border-t w-20  border-orange-500 h-6 mx-auto" />
     <p className="text-gray-600 dark:text-gray-400 mb-6 text-center text-2xl max-w-2xl mx-auto">
          Experience our vibrant campus firsthand. Schedule a visit to explore our facilities, meet our faculty, and discover the unique opportunities that await you at Pioneer Group of Schools.
        </p> 
        <div className="bg-white rounded-xl shadow dark:bg-gray-500 pt-8 p-4 sm:p-6 mb-8 sm:mb-12 w-full max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
        
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-white rounded-xl shadow dark:bg-gray-600 backdrop:pt-8 p-4 sm:p-6 mb-8 sm:mb-12 w-full max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl"
>


        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="school"
              value={form.school}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 text-orange-400 focus:ring-blue-200"
              required
            >
              <option value="" className='text-orange-400' >Select a School</option>
              {schools.map((school) => (
                <option key={school} value={school} className='text-orange-400'>{school} </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded text-orange-400 px-3 py-2"
              placeholder="Preferred Date"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded text-orange-400 px-3 py-2"
              placeholder="Preferred Time"
              required
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border text-orange-400 rounded px-3 py-2"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border text-orange-400 rounded px-3 py-2"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0E013d] to-[#F4B24A] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form></motion.div>
      </div>
      {/* Video and Paragraph Section */}
      <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time it's 30% in view
  className="mb-8 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center"
>
  <div className="w-full text-[#02032d] text-lg mb-4 md:mb-0"> 
    <hr className="border-t border-gray-500 mb-6 mx-20" />
    <h2 className="text-3xl md:text-5xl font-semibold font-serif dark:text-white text-[#02032d] text-center mb-20 tracking-wide">
      Take a Virtual Tour
    </h2>
    <p className="mb-2 text-left text-2xl dark:text-white md:text-center">
      Can't make it to campus in person <span className='text-orange-400  text-3xl'>? Explore</span> our facilities, classrooms, and vibrant student life from anywhere in the world with our virtual tour video.
    </p>
  </div>

  <div className="w-full">
    <div className="rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/A7rrEq1t8Js?si=mEnpAASjEovpVVzy"
        title="Virtual Tour"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</motion.div>
</div>
  );
};
export default VisitUsFormAndTour; 