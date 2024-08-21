import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (triggerSelector) => {
  useEffect(() => {
    gsap.fromTo(
      triggerSelector,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerSelector,
          start: 'top 75%',
        },
        duration: 1.2,
        ease: 'power3.out'
      }
    );
  }, [triggerSelector]);
};

export default useScrollAnimation;
