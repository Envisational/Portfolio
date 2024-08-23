import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const useExpand = () => {
  const [expandedId, setExpandedId] = useState(null);

  const expandElement = (id) => {
    setExpandedId(id);
    gsap.to(`#expandable-${id}`, {
      height: 'auto',
      maxHeight: '80vh',
      ease: 'power3.inOut',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.3)',
    });
    gsap.to('.overlay', { opacity: 0.6, display: 'block' });
  };

  const minimizeElement = () => {
    if (expandedId !== null) {
      gsap.to(`#expandable-${expandedId}`, {
        height: 'auto',
        maxHeight: '300px', 
        zIndex: 1,
        ease: 'power3.inOut',
        boxShadow: 'none',
      });
      gsap.to('.overlay', { opacity: 0, display: 'none' });
      setExpandedId(null);
    }
  };

  useEffect(() => {
    if (expandedId !== null) {
      const handleClickOutside = (event) => {
        if (!document.querySelector(`#expandable-${expandedId}`).contains(event.target)) {
          minimizeElement();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [expandedId]);

  return { expandedId, expandElement, minimizeElement };
};

export default useExpand;
