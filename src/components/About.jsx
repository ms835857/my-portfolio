import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const clientsRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

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

    gsap.from(textRef.current?.querySelectorAll('p') || [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        scroller: '.world-front',
        start: 'top 80%',
      },
    });

    gsap.from(servicesRef.current?.querySelectorAll('.service-item') || [], {
      y: 60,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: servicesRef.current,
        scroller: '.world-front',
        start: 'top 80%',
      },
    });

    gsap.from(testimonialsRef.current?.querySelectorAll('.testimonials-item') || [], {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: testimonialsRef.current,
        scroller: '.world-front',
        start: 'top 80%',
      },
    });

    gsap.from(clientsRef.current?.querySelectorAll('.clients-item') || [], {
      scale: 0,
      opacity: 0,
      rotation: -10,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: clientsRef.current,
        scroller: '.world-front',
        start: 'top 80%',
      },
    });
  }, { dependencies: [], revertOnUpdate: true }); // No scope here to allow targeting parent .world-front

  const services = [
    { title: 'Web design', text: 'The most modern and high quality design made at a professional level.', icon: './assets/images/icon-design.svg' },
    { title: 'Frontend Development', text: 'Building responsive and interactive user interfaces with React and modern frameworks.', icon: './assets/images/icon-dev.svg' },
    { title: 'Backend Development', text: 'Currently learning server-side development and database management.', icon: './assets/images/icon-dev.svg', badge: 'Learning' },
    { title: 'Blockchain Development', text: 'Exploring blockchain technologies and Web3 development.', icon: './assets/images/icon-dev.svg', badge: 'Learning' },
    { title: 'Digital Marketing', text: 'Marketing of content related to any context on social media.', icon: './assets/images/icon-app.svg' }
  ];

  const testimonials = [
    { name: 'Waiting for testimonials', text: 'Testimonials will be added once clients are acquired.', avatar: null }
  ];

  const clients = [
    { name: 'Waiting for clients', logo: null }
  ];

  return (
    <div className="about" ref={containerRef}>
      <header>
        <h2 className="h2 article-title" ref={titleRef}>About me</h2>
      </header>

      <div className="about-text" ref={textRef}>
        <p>
          I'm a Front-End Developer with a passion for crafting engaging and intuitive digital experiences. Based in Islamabad, Pakistan, 
          I specialize in bringing designs to life across web and various digital platforms. I thrive on transforming complex challenges into elegant, functional, and user-friendly web solutions.
        </p>
        <p>
          My expertise spans HTML, CSS, and JavaScript for dynamic and responsive front-ends, complemented by PHP and WordPress for robust back-end integration and content management.
          I focus on building websites that are not only visually appealing and user-friendly but also highly performant and maintainable. 
          My goal is to effectively translate your brand's vision and message into a compelling online presence, ensuring a seamless and memorable user journey.
        </p>
      </div>

      <div className="service" ref={servicesRef}>
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  {service.title}
                  {service.badge && <span className="service-badge">{service.badge}</span>}
                </h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="testimonials" ref={testimonialsRef}>
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testi, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card">
                <div className="testimonials-placeholder">
                  <p>{testi.name}</p>
                  <span>{testi.text}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="clients" ref={clientsRef}>
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li key={index} className="clients-item">
              <div className="content-card">
                <div className="clients-placeholder">
                  <p>{client.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
