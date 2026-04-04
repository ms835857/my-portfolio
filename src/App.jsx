import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useGSAP(() => {
    const sections = ['about', 'resume', 'portfolio', 'contact'];
    
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(section),
          onEnterBack: () => setActiveSection(section),
        });
      }
    });

    gsap.from('main', {
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
  });

  return (
    <>
      <ThreeBackground />
      <Navbar activeSection={activeSection} />
      <main>
        <Sidebar />
        <div className="main-content">
          <div className="scroll-container">
            <section id="about"><About /></section>
            <section id="resume"><Resume /></section>
            <section id="portfolio"><Portfolio /></section>
            <section id="contact"><Contact /></section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
