import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-8');
          }
        });
      },
      { threshold }
    );

    // Add initial styles
    element.classList.add('opacity-0', 'translate-y-8', 'translate-x-8', 'transition-all', 'duration-700', 'ease-out');
    
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return elementRef;
};