import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
            <ul className="text-white-700">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>C</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
            <ul className="text-white-700">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Flask</li>
              <li>Django</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
            <ul className="text-white-700">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>AWS</li>
              <li>Jenkins</li>
              <li>Git</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
