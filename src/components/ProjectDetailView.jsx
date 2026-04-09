import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailView = ({ project, onReturn }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);

  useGSAP(() => {
    if (!project || !containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.cinematic-section');
    sections.forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index === 0 ? 0.2 : 0, // First section appears almost immediately
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            scroller: ".side-content",
            start: 'top 85%',
            toggleActions: 'play none none reverse', // Fades back out when scrolling up
          }
        }
      );
    });
  }, { dependencies: [project], revertOnUpdate: true }); // No scope to allow scroller: .side-content

  // Gestalt Swipe / Rapid Scroll detection
  const handleWheel = (e) => {
    const scroller = e.currentTarget.closest('.side-content');
    if (scroller && scroller.scrollTop <= 0 && e.deltaY < -50) {
      onReturn();
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const scroller = e.currentTarget.closest('.side-content');
    if (scroller && scroller.scrollTop <= 0 && touchEndY - touchStartY.current > 100) {
      onReturn();
    }
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
  };

  if (!project) return null;

  return (
    <div
      className="project-detail-view"
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="swipe-indicator"></div>

      {/* Cinematic Hero Header with Carousel */}
      <section className="media-carousel">
        {project.media && project.media.length > 0 && (
          <img
            src={project.media[currentMediaIndex]}
            alt={`${project.title} media ${currentMediaIndex + 1}`}
            className="carousel-slide"
            key={currentMediaIndex}
          />
        )}

        {project.media && project.media.length > 1 && (
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevMedia}>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="carousel-btn" onClick={nextMedia}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        )}

        <div className="detail-header-cinematic">
          <h1 className="detail-title-large">{project.title}</h1>
          <div className="detail-stats-bar">
            <div className="stat-item">Role: <span className="stat-value">{project.role}</span></div>
            <div className="stat-item">Timeline: <span className="stat-value">{project.timeline}</span></div>
          </div>
        </div>
      </section>

      {/* Structured Content Body */}
      <div className="detail-body-cinematic">

        <section className="cinematic-section">
          <span className="section-label">The Challenge</span>
          {project.challenge?.paragraphs?.map((para, i) => (
            <p key={i} className="section-text-large" style={{ marginBottom: '16px' }}>{para}</p>
          ))}
          {project.challenge?.bullets && (
            <ul className="detail-bullets">
              {project.challenge.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="cinematic-section">
          <span className="section-label">The Solution</span>
          {project.solution?.paragraphs?.map((para, i) => (
            <p key={i} className="section-text-large" style={{ marginBottom: '16px' }}>{para}</p>
          ))}
          {project.solution?.bullets && (
            <ul className="detail-bullets">
              {project.solution.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </section>

        {project.keyFeatures && (
          <section className="cinematic-section">
            <span className="section-label">Key Features</span>
            <div className="feature-grid">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="feature-item-card">
                  <p className="section-text-large" style={{ fontSize: '1rem' }}>{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="cinematic-section">
          <span className="section-label">Technologies</span>
          <div className="tech-pill-container">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-pill-glow">{tech}</span>
            ))}
          </div>
        </section>

        <section className="cinematic-section" style={{ textAlign: 'center', marginTop: '40px' }}>
          <div className="detail-links" style={{ justifyContent: 'center', gap: '20px' }}>
            {project.links.live && project.links.live !== '#' && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-link large" style={{ padding: '15px 30px', borderRadius: '30px' }}>
                <ion-icon name="globe-outline"></ion-icon> Live Demo
              </a>
            )}
            {project.links.github && project.links.github !== '#' && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-link secondary large" style={{ padding: '15px 30px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)' }}>
                <ion-icon name="logo-github"></ion-icon> Source Code
              </a>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectDetailView;
