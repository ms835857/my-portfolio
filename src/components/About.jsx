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
      title: 'SaaS & MVP Engineering',
      text: 'Transform complex concepts into launch-ready web platforms. Built with Next.js and .NET for rapid deployment, high performance, and friction-free user onboarding.',
      icon: './assets/images/icon-design.svg',
      category: 'dev'
    },
    {
      title: 'High-Conversion Frontends',
      text: 'Sub-second load times, responsive UI, and optimized conversion paths engineered with React and Next.js to turn cold visitors into active, paying customers.',
      icon: './assets/images/icon-dev.svg',
      category: 'dev'
    },
    {
      title: 'Enterprise Backend & API Architecture',
      text: 'Secure, scalable REST APIs and microservices powered by .NET and Python. Designed for 99.9% uptime, data integrity, and high-concurrency workloads.',
      icon: './assets/images/icon-dev.svg',
      category: 'dev'
    },
    {
      title: 'Workflow & AI Automation',
      text: 'Eliminate expensive manual operations. I build custom AI integrations, real-time data pipelines, and automated trading algorithms that execute with microsecond precision.',
      icon: './assets/images/icon-app.svg',
      category: 'dev'
    },
    {
      title: 'Commercial & Growth Strategy',
      text: 'Leveraging 5 years of sales and marketing strategy to align technical architecture with customer acquisition, lower retention costs, and business growth.',
      icon: './assets/images/icon-app.svg',
      category: 'sales'
    }
  ];

  const filteredServices = activeDomain === 'all'
    ? services
    : services.filter(s => s.category === activeDomain || s.category === 'both');

  const whyWorkWithMe = [
    {
      title: 'Commercial + Engineering Mindset',
      badge: '5+ Years Growth Experience',
      text: '5 years in sales and marketing means I write code designed to hit your business milestones, lower acquisition costs, and boost conversion—not just pass unit tests.'
    },
    {
      title: 'Obsessed With Business Outcomes',
      badge: 'ROI First',
      text: 'I measure software quality by commercial metrics: sub-second API latency, 99.9% uptime, reduced server overhead, and frictionless user onboarding.'
    },
    {
      title: 'Product-Level Full Stack Autonomy',
      badge: 'Zero Hand-Holding',
      text: 'From architectural design to database optimization, frontend engineering, and deployment pipelines, I take complete ownership so you can focus on scaling.'
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
        <div className="hero-badge-tag">FULL STACK ENGINEER & TECHNICAL PARTNER</div>
        <h1 className="h1 hero-main-title">
          I Build High-Performance Web Apps & Automated Systems That Turn Traffic Into Revenue
        </h1>
        <p className="hero-subheadline">
          <strong>React. Next.js. .NET. Python.</strong> I pair enterprise-grade software engineering with 5 years of sales and marketing strategy to build software that scales, converts, and delivers measurable business ROI.
        </p>
        <div className="hero-cta-group">
          <button className="btn-hero-primary" onClick={() => scrollToSection('portfolio')}>
            <ion-icon name="briefcase-outline"></ion-icon>
            <span>Explore Case Studies →</span>
          </button>
          <button className="btn-hero-secondary" onClick={() => scrollToSection('contact')}>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <span>Book A Technical Consult</span>
          </button>
        </div>
      </header>

      {/* 2. ABOUT / INTRO SECTION */}
      <div className="about-intro-block" ref={textRef} style={{ marginBottom: '40px' }}>
        <h3 className="h3 service-title">The Difference</h3>
        <p className="service-item-text" style={{ fontSize: '1.05rem', color: 'var(--light-gray)', lineHeight: '1.75' }}>
          Most developers build for code execution. <strong>I build for business growth.</strong>
        </p>
        <p className="service-item-text" style={{ fontSize: '1rem', color: 'var(--light-gray-70)', lineHeight: '1.7', marginTop: '12px' }}>
          With a technical foundation in <strong>React, Next.js, .NET, and Python</strong> backed by 5 years in revenue-generating sales and marketing roles, I bridge the gap between engineering precision and commercial success. Whether you are launching a high-stakes SaaS MVP, scaling enterprise APIs, or automating mission-critical workflows, I build resilient, fast, and conversion-optimized digital products that give your company an unfair market advantage.
        </p>
      </div>

      {/* 3. ENGINEERED SOLUTIONS */}
      <div className="service" ref={servicesRef}>
        <h3 className="h3 service-title">Engineered Solutions</h3>
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

      {/* 4. WHY WORK WITH ME */}
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
