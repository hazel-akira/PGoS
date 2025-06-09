import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div>
       <section className="text-[#02032d] dark:text-white py-12 mt-5 px-6 rounded-2xl shadow-xl my-8">
     
        
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-orange-400 font-bold mb-4">
            Schedule Your Visit Today
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
            Discover firsthand the vibrant learning environment and values that make our schools exceptional. We can't wait to welcome you!
          </p>

          {/* Scroll to form using anchor link */}
          <Link to="#visit-form">
            <Button className="bg-[#02032d] dark:bg-white text-orange-400 hover:bg-white dark:hover:bg-[#02032d] hover:text-[#02032d] dark:hover:text-white transition font-semibold text-lg px-8 py-3 rounded-full">
              Schedule a Visit
            </Button>
          </Link>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/images/High School-bro.png" 
            alt="Visit Our School"
            className="rounded-xl shadow-lg w-[500px] h-[400px] object-cover"
          />
        </motion.div>
      
    </section></div>
  );
};

export default CallToAction;
