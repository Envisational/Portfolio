import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About Me</a></li>
          <li><a href="#journey" className="hover:text-blue-400">My Journey</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
