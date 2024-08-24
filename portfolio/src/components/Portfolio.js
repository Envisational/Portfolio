import React from 'react';

const Portfolio = () => {
  
  const projects = [
    {
      title: 'Slickdeals',
      role: 'Full Stack Developer',
      description: 'Developed and maintained complex features for a high-traffic deal-sharing platform, optimizing backend performance and enhancing user experience. Worked with a tech stack including Node.js, Express.js, React.js, PostgreSQL, MongoDB, and AWS.',
      technologies: 'Node.js, Express.js, React.js, PostgreSQL, MongoDB, AWS',
      link: 'https://slickdeals.net/'
    },
    {
      title: 'International Humanitarian Development (IHD)',
      role: 'Full Stack Developer',
      description: 'Built scalable and secure web applications for humanitarian projects. Focused on security, scalability, and seamless integration with third-party services, using Flask, React.js, PostgreSQL, and AWS.',
      technologies: 'Flask, React.js, PostgreSQL, AWS',
      link: 'https://www.ihd.ae/'
    },
    {
      title: 'Kick.com',
      role: 'Full Stack Developer',
      description: 'Led full-stack development for a streaming platform, implementing real-time data processing and optimizing performance. Utilized a tech stack including Node.js, React.js, WebSocket, AWS, and Cloudflare for a seamless streaming experience.',
      technologies: 'Node.js, React.js, WebSocket, AWS, Cloudflare',
      link: 'https://kick.com/'
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
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies Used:</strong> {project.technologies}</p>
                <a
                  href={project.link}
                  className="link-style"
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
