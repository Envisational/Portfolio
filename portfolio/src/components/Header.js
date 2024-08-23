import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to('.header', {
      opacity: isVisible ? 1 : 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [isVisible]);

    return (
      <header
      className="header p-4 text-white fixed w-full top-0 z-20 shadow-2xl"
      style={{
        background: 'radial-gradient(circle, rgba(10, 10, 100, 0.9) 10%, rgba(10, 10, 100, 0) 85%)',
        clipPath: 'ellipse(150% 100% at 50% 0%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6">
          <li className="p-2 rounded-full">
            <a href="#home" className="hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block">
              Home
            </a>
          </li>
          <li className="p-2 rounded-full">
            <a href="#about" className="hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block">
              About Me
            </a>
          </li>
          <li className="p-2 rounded-full">
            <a href="#journey" className="hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block">
              My Journey
            </a>
          </li>
          <li className="p-2 rounded-full">
            <a href="#portfolio" className="hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block">
              Portfolio
            </a>
          </li>
          <li className="p-2 rounded-full">
            <a href="#skills" className="hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block">
              Skills
            </a>
          </li>
          <li className="p-2 rounded-full">
            <a href="#contact" className="hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
