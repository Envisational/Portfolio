import React from 'react';
import { motion } from 'framer-motion';

//TODO: Add a more to click to reveal more
const About = () => {
  return (
    <section id="about" className="section bg-transparent bg-noise bg-cover bg-center bg-fixed py-4 mb-10 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="card max-w-lg mx-auto">
          <h2 className="section-heading text-center text-gray-700">About Me</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="p-4 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              A seasoned developer who's worked extensively with technologies such as Node.js, Express, MongoDB, PostgreSQL, and React for over 3 years.
              My focus is on creating clean, efficient, and scalable backend solutions, and sometimes acting like a goofball&nbsp;
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="inline-block rounded-lg bg-gray-200 p-2"
              >
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_yvk57q9n.json"
                  background="transparent"
                  speed="1"
                  style={{ height: "200px", width: "200px" }}
                  loop
                  autoplay
                ></lottie-player>
              </motion.span>
              &nbsp;
              I’m always eager to learn new technologies and continuously improve my skill set.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;



