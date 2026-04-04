import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectListRef = useRef(null);

  const categories = ['All', 'University Projects', 'Personal Projects'];
  
  const projects = [
    { title: 'Naqsha Bazaar', category: 'university projects', img: './assets/images/project-1.jpg', description: 'University Project - A marketplace platform' },
    { title: 'Anime & Movie Streaming', category: 'university projects', img: './assets/images/project-2.png', description: 'University Project - React-based streaming website' },
    { title: 'GOLD Trading Bot', category: 'personal projects', img: './assets/images/project-3.jpg', description: 'Personal Project - Python trading bot for GOLD', badge: 'Ongoing' },
    { title: 'Forex Trading Bot', category: 'personal projects', img: './assets/images/project-4.png', description: 'Personal Project - Python trading bot for Forex', badge: 'Ongoing' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      const projectItems = projectListRef.current?.querySelectorAll('.project-item') || [];
      gsap.from(projectItems, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: projectListRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const items = projectListRef.current?.querySelectorAll('.project-item');
    if (items && items.length > 0) {
      gsap.fromTo(items, 
        { scale: 0.5, opacity: 0, rotation: 5 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' }
      );
    }
  }, [filter]);

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
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">
                  {project.title}
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </h3>
                <p className="project-category">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
