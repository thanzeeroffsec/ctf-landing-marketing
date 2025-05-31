import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (): void => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observer instance
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    // Select all elements with the 'reveal' class
    const elements = document.querySelectorAll('.reveal');
    
    // Observe each element
    elements.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};

export default useIntersectionObserver;