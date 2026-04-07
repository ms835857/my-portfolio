import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../constants/projects';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = ({ onProjectSelect }) => {
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectListRef = useRef(null);

  const categories = ['All', 'University Projects', 'Personal Projects'];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: '.world-front',
        start: 'top 80%',
      },
    });
  }, { dependencies: [], revertOnUpdate: true });

  useGSAP(() => {
    const items = projectListRef.current?.querySelectorAll('.project-item');
    if (items && items.length > 0) {
      gsap.fromTo(items, 
        { scale: 0.5, opacity: 0, rotation: 5 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' }
      );
    }
  }, { dependencies: [filter], scope: projectListRef });

  return (
    <div className="portfolio" ref={containerRef}>
      <header>
        <h2 className="h2 article-title" ref={titleRef}>Portfolio</h2>
      </header>

      <div className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li key={cat} className="filter-item">
              <button
                className={filter === cat.toLowerCase() ? 'active' : ''}
                onClick={() => setFilter(cat.toLowerCase())}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list" ref={projectListRef}>
          {filteredProjects.map((project, index) => {
            // Find global index for the project
            const globalIndex = projects.findIndex(p => p.title === project.title);
            
            return (
              <li key={index} className="project-item active">
                <button 
                  className="project-link-button" 
                  onClick={() => onProjectSelect(globalIndex)}
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src={project.img} alt={project.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title">
                    {project.title}
                    {project.badge && <span className="project-badge">{project.badge}</span>}
                  </h3>
                  <p className="project-category">{project.description}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
