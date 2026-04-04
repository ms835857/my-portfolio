import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback, dependencies = []) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    }, containerRef);

    return () => ctx.revert();
  }, dependencies);

  return containerRef;
};

export const useScrollAnimation = (elementRef, animation, options = {}) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const animationConfig = {
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger,
      },
      ...animation,
    };

    gsap.from(elementRef.current, animationConfig);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [elementRef, animation, options.scrollTrigger]);
};

export const useStaggerAnimation = (elements, animation, stagger = 0.1) => {
  useEffect(() => {
    if (!elements || elements.length === 0) return;

    gsap.from(elements, {
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      ...animation,
      stagger,
    });
  }, [elements, animation, stagger]);
};
