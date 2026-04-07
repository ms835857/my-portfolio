import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BackButton = ({ onClick }) => {
  const fabRef = useRef(null);

  useGSAP(() => {
    if (fabRef.current) {
      gsap.from(fabRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.2
      });
    }
  }, []);

  return (
    <button 
      className="back-button-fab" 
      onClick={onClick} 
      ref={fabRef}
      title="Back to Portfolio"
    >
      <div className="fab-inner">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span className="fab-text">Main Site</span>
      </div>
    </button>
  );
};

export default BackButton;
