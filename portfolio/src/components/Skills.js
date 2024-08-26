import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { SiJavascript, SiTypescript, SiPython, SiC, SiReact, SiExpress, SiFlask, SiDjango, SiPostgresql, SiMongodb, SiJenkins, SiGit, SiLinux } from 'react-icons/si';
import { DiNodejs } from "react-icons/di";
import { FaAws } from "react-icons/fa";

const Skills = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        x: 'random(-5, 5)',
        rotation: 'random(-2, 2)',
        scale: 'random(1, 1.05)',
        opacity: 'random(0.9, 1)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
            <ul className="text-white-700">
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[0] = el}>
                  <SiJavascript className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">JavaScript</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[1] = el}>
                  <SiTypescript className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">TypeScript</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[2] = el}>
                  <SiPython className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Python</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[3] = el}>
                  <SiC className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">C</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
            <ul className="text-white-700">
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[4] = el}>
                  <SiReact className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">React</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[5] = el}>
                  <DiNodejs className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Node.js</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[6] = el}>
                  <SiExpress className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Express.js</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[7] = el}>
                  <SiFlask className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Flask</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[8] = el}>
                  <SiDjango className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Django</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
            <ul className="text-white-700">
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[9] = el}>
                  <SiPostgresql className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">PostgreSQL</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[10] = el}>
                  <SiMongodb className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">MongoDB</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[11] = el}>
                  <FaAws className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">AWS</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[12] = el}>
                  <SiJenkins className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Jenkins</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[13] = el}>
                  <SiGit className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Git</span>
              </li>
              <li className="flex items-center mb-2">
                <motion.div ref={el => iconsRef.current[14] = el}>
                  <SiLinux className="inline-block mr-6 text-3xl" />
                </motion.div>
                <span className="text-xl">Linux</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;