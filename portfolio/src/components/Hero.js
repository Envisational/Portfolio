import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const handleScrollToPortfolio = (e) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: '#portfolio',
        autoKill: false,
      },
      ease: 'power3.inOut',
    });
  };

  return (
    <section id="home" className="flex items-center justify-center h-screen">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Daniel Abbasy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl"
        >
          Backend Developer
        </motion.p>
        <motion.a
          href="#portfolio"
          onClick={handleScrollToPortfolio}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
