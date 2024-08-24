import React, { useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X'; 
import TelegramIcon from '@mui/icons-material/Telegram';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

const SocialLinks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "elastic.out(1, 0.5)" } });
          tl.fromTo(".icon", 
            { opacity: 0, y: 50, scale: 0.5 }, 
            { opacity: 1, y: 0, scale: 1, stagger: 0.3 }
          )
          .to(".icon", { rotation: 360, duration: 2, stagger: 0.3 }, "-=1.2")
          .to(".icon", { color: "#ff4081", duration: 1, stagger: 0.3 }, "-=1.5");
          observer.unobserve(containerRef.current); // Stop observing after animation
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-4 flex space-x-10 justify-center mb-20">
      <motion.a 
        href="https://github.com/Envisational" 
        target="_blank" 
        rel="noopener noreferrer"
        className="icon"
        whileHover={{ scale: 1.5, rotate: 15, color: "#ff4081" }}
        whileTap={{ scale: 0.8 }}
      >
        <GitHubIcon sx={{ color: 'grey', fontSize: 60 }} />
      </motion.a>
      <motion.a 
        href="https://x.com/a97_daniel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="icon"
        whileHover={{ scale: 1.5, rotate: 15, color: "#ff4081" }}
        whileTap={{ scale: 0.8 }}
      >
        <XIcon sx={{ color: 'grey', fontSize: 60 }} />
      </motion.a>
      <motion.a 
        href="https://t.me/Daniel_97_76" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="icon"
        whileHover={{ scale: 1.5, rotate: 15, color: "#ff4081" }}
        whileTap={{ scale: 0.8 }}
      >
        <TelegramIcon sx={{ color: 'grey', fontSize: 60 }} />
      </motion.a>
    </div>
  );
};

export default SocialLinks;