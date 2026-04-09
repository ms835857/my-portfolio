import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const skillFillRefs = useRef([]);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });

    gsap.from('.timeline-item', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.timeline',
        scroller: '.side-content',
        start: 'top 75%',
      },
    });

    skillFillRefs.current.forEach((fill, index) => {
      if (fill) {
        const targetWidth = fill.getAttribute('data-width');
        gsap.fromTo(fill, 
          { width: '0%' },
          {
            width: targetWidth,
            duration: 1.2,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: fill,
              scroller: '.side-content',
              start: 'top 85%',
            },
          }
        );
      }
    });

    gsap.from('.skills-item', {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.skill',
        scroller: '.side-content',
        start: 'top 75%',
      },
    });
  }, { dependencies: [], revertOnUpdate: true }); // No scope here to allow targeting parent .world-front

  const education = [
    { title: 'Air University Islamabad', duration: '2024 — ongoing', text: 'Studying Computer Science in Air University Islamabad, developing my skills in programming, software development, and web technologies.' },
    { title: 'Air Base Inter College Sargodha', duration: '2019 — 2021', text: 'Completed high school studies at ABICS and gained general knowledge about which field to choose moving forward.' },
    { title: 'Air Base Inter College Sargodha', duration: '2017 — 2019', text: 'Completed junior school from ABICS developing foundation in basic subjects.' }
  ];

  const experience = [
    { 
      company: 'Naqsha Bazzar', 
      role: 'Sales Manager', 
      duration: 'Apr 2024 — Apr 2025', 
      bullets: [
        'Formulate and implement detailed marketing strategies and initiatives that support the company\'s mission and objectives.',
        'Offer design and construction services to potential clients.',
        'Maintain relationship with clients to achieve sales goals',
        'Manage sales records'
      ]
    },
    { 
      company: 'EDUBASE CLOUD', 
      role: 'Sales Person', 
      duration: 'Nov 2023 — Jun 2024', 
      bullets: [
        'Offer services and Software services to potential clients.',
        'Maintain relationship with clients to achieve sales goals',
        'Manage sales records'
      ]
    },
    { 
      company: 'TRUCK DESPATCHING', 
      role: 'Sales Person', 
      duration: 'Feb 2024 — Apr 2024', 
      bullets: [
        'Built relationships with clients to maintain sales goals and create new opportunities',
        'Offer Dispatching services to potential client through cold calling.',
        'Maintain relationship with clients to achieve sales goals'
      ]
    },
    { 
      company: 'Quickence International', 
      role: 'Chat Support Agent', 
      duration: 'Dec 2023 — Feb 2024', 
      bullets: [
        'Works with customers to answer questions and provide real-time support for their concerns.',
        'Manage customer response across multiple Facebook pages and ensure timely response'
      ]
    },
    { 
      company: 'Forever Living Products', 
      role: 'Direct Sales', 
      duration: 'Jul 2021 — Dec 2023', 
      bullets: [
        'Built relationships with clients to maintain sales goals and create new opportunities',
        'Engage the customers as a independent sales manager'
      ]
    }
  ];

  const skills = [
    { title: 'Frontend Development', value: 80 },
    { title: 'Prompt Engineering', value: 80 },
    { title: 'Sales', value: 70 },
    { title: 'Branding', value: 50 }
  ];

  return (
    <div className="resume" ref={containerRef}>
      <header>
        <h2 className="h2 article-title" ref={titleRef}>Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><ion-icon name="book-outline"></ion-icon></div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.duration}</span>
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><ion-icon name="book-outline"></ion-icon></div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.company}</h4>
              <p className="timeline-item-role">{item.role}</p>
              <span>{item.duration}</span>
              {item.bullets ? (
                <ul className="timeline-list-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="timeline-text">{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="timeline-text">{item.text}</p>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.title}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div 
                  ref={el => skillFillRefs.current[index] = el}
                  className="skill-progress-fill" 
                  data-width={`${skill.value}%`}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
