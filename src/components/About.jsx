import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = ({ activeDomain = 'all' }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef(null);
  const whyWorkRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(heroRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });

    gsap.from(servicesRef.current?.querySelectorAll('.service-item') || [], {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: servicesRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });

    gsap.from(whyWorkRef.current?.querySelectorAll('.why-card') || [], {
      x: -50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: whyWorkRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });
  }, { dependencies: [activeDomain], revertOnUpdate: true });

  const services = [
    {
      title: 'Scalable Web Applications',
      text: 'Fast, responsive, and conversion-optimized web applications built with React and Next.js for high performance and seamless user retention.',
      icon: './assets/images/icon-dev.svg',
      category: 'dev'
    },
    {
      title: 'SaaS & MVP Development',
      text: 'Transforming software concepts into market-ready SaaS MVPs for startups—engineered for speed, clean architecture, and rapid deployment.',
      icon: './assets/images/icon-design.svg',
      category: 'dev'
    },
    {
      title: 'Enterprise Backend Systems',
      text: 'High-throughput REST APIs, microservices, and secure database architectures powered by enterprise .NET and Python engines.',
      icon: './assets/images/icon-dev.svg',
      category: 'dev'
    },
    {
      title: 'AI & Automation Integration',
      text: 'Streamlining operations and reducing manual effort with custom AI model integrations, automated trading bots, and real-time data scripts.',
      icon: './assets/images/icon-app.svg',
      category: 'dev'
    },
    {
      title: 'Growth & Digital Strategy',
      text: 'Leveraging 5 years of sales and marketing strategy to align technical architecture with customer acquisition and business growth.',
      icon: './assets/images/icon-app.svg',
      category: 'sales'
    }
  ];

  const filteredServices = activeDomain === 'all'
    ? services
    : services.filter(s => s.category === activeDomain || s.category === 'both');

  const whyWorkWithMe = [
    {
      title: 'Sales + Developer Mindset',
      badge: '5+ Years Experience',
      text: 'With 5 years in sales & marketing, I don\'t just write code—I build software designed to convert visitors, retain users, and drive revenue.'
    },
    {
      title: 'Performance & Business Outcomes',
      badge: 'Client ROI Focused',
      text: 'I measure technical success in business terms: fast load times, system uptime, sub-second API speeds, and measurable user conversion.'
    },
    {
      title: 'Deep User Behavior Understanding',
      badge: 'Conversion UX',
      text: 'Combining intuitive design with clean full-stack architecture so your users experience frictionless, engaging digital products.'
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about" ref={containerRef}>
      {/* 1. HERO SECTION */}
      <header className="hero-landing" ref={heroRef}>
        <div className="hero-badge-tag">Full Stack Developer & Technical Partner</div>
        <h1 className="h1 hero-main-title">
          I Build Scalable Web Apps & Automated Systems That Drive Real Growth
        </h1>
        <p className="hero-subheadline">
          Full Stack Engineer specializing in <strong>React, Next.js, .NET, and Python</strong>. 
          Combining 5 years of sales & marketing expertise with high-performance software engineering to turn your vision into market-ready products.
        </p>
        <div className="hero-cta-group">
          <button className="btn-hero-primary" onClick={() => scrollToSection('portfolio')}>
            <ion-icon name="briefcase-outline"></ion-icon>
            <span>View My Work</span>
          </button>
          <button className="btn-hero-secondary" onClick={() => scrollToSection('contact')}>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <span>Hire Me</span>
          </button>
        </div>
      </header>

      {/* 2. WHAT I DO (SERVICES) */}
      <div className="service" ref={servicesRef}>
        <h3 className="h3 service-title">What I Do</h3>
        <ul className="service-list">
          {filteredServices.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. TRUST & AUTHORITY ("WHY WORK WITH ME") */}
      <div className="why-work-with-me" ref={whyWorkRef} style={{ marginTop: '40px' }}>
        <h3 className="h3 service-title">Why Work With Me</h3>
        <ul className="why-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: 0 }}>
          {whyWorkWithMe.map((item, index) => (
            <li key={index} className="why-card content-card" style={{ padding: '24px', background: 'var(--border-gradient-onyx)', borderRadius: '16px', border: '1px solid var(--jet)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h4 className="h4" style={{ color: 'var(--white-2)', fontSize: '1.1rem' }}>{item.title}</h4>
                <span className="service-badge" style={{ background: 'rgba(245,158,11,0.15)', color: 'var(--orange-yellow-crayola)', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px' }}>{item.badge}</span>
              </div>
              <p className="service-item-text" style={{ fontSize: '0.9rem', color: 'var(--light-gray-70)', lineHeight: '1.6' }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
