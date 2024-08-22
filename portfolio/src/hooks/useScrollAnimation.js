import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (triggerSelector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(triggerSelector);

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotationX: -30,
          rotationY: 30,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 1.5,
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: true,
            markers: false, // Set to true for debugging
            onEnter: () => {
              gsap.to(element, {
                duration: 0.6,
                ease: 'power1.inOut',
              });
            },
            onLeaveBack: () => {
              gsap.to(element, {
                duration: 0.6,
                ease: 'power1.inOut',
              });
            },
          },
        }
      );
    });
  }, [triggerSelector]);
};

export default useScrollAnimation;
