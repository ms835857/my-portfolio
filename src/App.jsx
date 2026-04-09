import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';
import ProjectDetailView from './components/ProjectDetailView';
import ProjectNavbar from './components/ProjectNavbar';
import BackButton from './components/BackButton';
import { projects } from './constants/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import './assets/css/back-button.css';
import { useGSAP } from '@gsap/react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const worldRef = useRef(null);

  // Register plugins once
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, { dependencies: [] });

  useGSAP(() => {
    if (isFlipped || !worldRef.current) return;

    const sections = ['about', 'resume', 'portfolio', 'contact'];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        scroller: ".world-front .side-content",
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

    gsap.from('.world-front main', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3
    });

    gsap.from('.navbar', {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });
  }, { scope: worldRef, dependencies: [isFlipped] });

  useGSAP(() => {
    if (worldRef.current) {
      gsap.to(worldRef.current, {
        rotationY: isFlipped ? 180 : 0,
        z: -600,
        duration: 1.0,
        ease: 'power3.out',
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });
    }
  }, [isFlipped]);

  const handleProjectSelect = (index) => {
    setSelectedProjectIndex(index);
    setIsFlipped(true);
  };

  const handleReturn = () => {
    setIsFlipped(false);
  };

  return (
    <>
      <ThreeBackground />
      <div className="global-scene">
        <div className={`global-world ${isFlipped ? 'is-flipped' : ''}`} ref={worldRef}>
          {/* Front Side */}
          <div className="world-side world-front">
            <Navbar activeSection={activeSection} />
            <div className="side-content">
              <main>
                <Sidebar />
                <div className="main-content">
                  <div className="scroll-container">
                    <section id="about"><About /></section>
                    <section id="resume"><Resume /></section>
                    <section id="portfolio">
                      <Portfolio onProjectSelect={handleProjectSelect} />
                    </section>
                    <section id="contact"><Contact /></section>
                  </div>
                </div>
              </main>
            </div>
          </div>

          {/* Back Side */}
          <div className="world-side world-back">
            <BackButton onClick={handleReturn} />
            <div className="side-content">
              <main>
                <Sidebar 
                  isProjectMode={true}
                  projects={projects}
                  activeProjectIndex={selectedProjectIndex}
                  onProjectSelect={setSelectedProjectIndex}
                />
                <div className="main-content">
                  <ProjectDetailView 
                    project={projects[selectedProjectIndex]} 
                    onReturn={handleReturn} 
                  />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
