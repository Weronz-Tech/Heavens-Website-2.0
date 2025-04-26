import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // Duration of scroll animation
      easing: 'ease',       // Easing for smooth scroll
      smoothWheel: true,    // Smooth scrolling for mouse wheel
      smoothTouch: true,    // Smooth scrolling for touch
    });

    // Continuously call the `raf` method on each frame
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();  // Clean up Lenis instance on unmount
    };
  }, []);
};

export default useLenis;
