import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Daniel Abbasy</h1>
        <p className="mt-4 text-xl">Backend Developer</p>
        <a href="#portfolio" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
