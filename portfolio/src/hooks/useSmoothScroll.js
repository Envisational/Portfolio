import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// This all the scroll animation for the buttons in the nav bar
gsap.registerPlugin(ScrollToPlugin);

const useSmoothScroll = (target) => {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: target,
          autoKill: true, // stops the animation if the user interacts with the scroll
        },
        ease: 'power3.inOut',
      });
    };

    const element = document.querySelector(`a[href="${target}"]`);
    if (element) {
      element.addEventListener('click', handleClick);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  }, [target]);
};

export default useSmoothScroll;
