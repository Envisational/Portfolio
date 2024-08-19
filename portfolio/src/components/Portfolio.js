import React from 'react';

const Portfolio = () => {
  // Sample data
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform built with Node.js, Express, and MongoDB.',
      link: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A chat application using React, WebSocket, and Firebase for real-time communication.',
      link: 'https://github.com/yourusername/chat-app'
    },
    {
      title: 'Personal Portfolio',
      description: 'My personal portfolio website to showcase my projects and skills.',
      link: 'https://github.com/yourusername/personal-portfolio'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
