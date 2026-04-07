import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { projects } from '../constants/projects';

const ProjectNavbar = ({ selectedIndex, onSelect }) => {
  const dockRef = useRef(null);

  useGSAP(() => {
    if (dockRef.current) {
      gsap.from(dockRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 1.5
      });
    }
  }, []);

  return (
    <nav className="project-dock-container">
      <div className="project-dock" ref={dockRef}>
        {projects.map((project, index) => (
          <button
            key={index}
            className={`dock-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => onSelect(index)}
            title={project.title}
          >
            <div className="dock-icon-wrapper">
              <img src={project.img} alt={project.title} className="dock-icon-img" />
            </div>
            <span className="dock-label">{project.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ProjectNavbar;
