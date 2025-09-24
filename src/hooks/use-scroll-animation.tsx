import { useEffect, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(delay = 0) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Add initial styles
    element.classList.add('opacity-0', 'transition-opacity', 'duration-700', 'ease-out');
    
    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return elementRef;
};