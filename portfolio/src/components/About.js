import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../data/Lottie-files/Goofy.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation('.animate-on-scroll');
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="animate-on-scroll">
    <section id="about" className="section bg-transparent bg-noise bg-cover bg-center bg-fixed py-4 mb-10 rounded-lg shadow-lg">
    <div className="container mx-auto px-4">
      <div className="card max-w-lg mx-auto">
        <h2 className="section-heading text-center text-gray-700">About Me</h2>
        <div className="p-4 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            A seasoned developer who's worked extensively with technologies such as Node.js, Express, MongoDB, PostgreSQL, and React for over 3 years.
            My focus is on creating clean, efficient, and scalable backend solutions, and sometimes acting like a&nbsp;
            <span
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onMouseMove={handleMouseMove}
              className="relative inline-block font-semibold cursor-pointer"
              style={{
                color: hovering ? '#4a5568' : 'red',
                textDecoration: hovering ? 'none' : 'underline',
                transition: 'text-decoration 0.3s ease-out',
                textDecorationColor: hovering ? 'transparent' : 'red',
                textUnderlinePosition: 'under',
              }}
            >
              goofball
              {hovering && (
                <div
                  style={{
                    position: 'fixed',
                    top: position.y - 150,
                    left: position.x - 150,
                    pointerEvents: 'none',
                    width: '150px',
                    height: '150px',
                    zIndex: 1000,
                  }}
                >
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
                  />
                </div>
              )}
            </span>
            &nbsp;I’m always eager to learn new technologies and continuously improve my skill set.
          </p>
        </div>
      </div>
    </div>
  </section></div>

  );
};

export default About;
