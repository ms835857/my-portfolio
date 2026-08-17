import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' });
  const isValid = form.fullname !== '' && form.email !== '' && form.message !== '';
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: -40,
      opacity: 0,
      scale: 0.95,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });

    gsap.from(formRef.current?.querySelectorAll('.form-input, .cta-action-btn, .form-btn') || [], {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: formRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });
  }, { dependencies: [], revertOnUpdate: true });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    const phone = '923267671152';
    const text = encodeURIComponent(
      `Hello! I'm ${form.fullname} (${form.email}).\n\n${form.message}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const whatsappPhone = '923267671152';

  return (
    <div className="contact" ref={containerRef}>
      <header className="cta-section-header" ref={titleRef} style={{ marginBottom: '30px' }}>
        <span className="hero-badge-tag">LET'S WORK TOGETHER</span>
        <h2 className="h2 article-title" style={{ fontSize: '2.1rem', marginTop: '10px', lineHeight: '1.25' }}>
          Let’s Build Something That Actually Delivers Results.
        </h2>
        <p style={{ color: 'var(--light-gray)', fontSize: '1.05rem', lineHeight: '1.65', marginTop: '12px' }}>
          Have a critical web application, SaaS platform, or automated system to build? 
          Stop risking time on generic coders. Let’s discuss your vision and build a product worth paying for.
        </p>
      </header>

      {/* Direct Quick Contact Buttons */}
      <div className="cta-buttons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '35px' }}>
        <a 
          href="mailto:ms835857@gmail.com" 
          className="cta-action-btn"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 20px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--jet)', borderRadius: '12px', color: 'var(--white-2)', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }}
        >
          <ion-icon name="mail-outline" style={{ fontSize: '20px', color: 'var(--orange-yellow-crayola)' }}></ion-icon>
          <span>Schedule A Technical Call</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/muhammad-saad-webdev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-action-btn"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 20px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--jet)', borderRadius: '12px', color: 'var(--white-2)', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }}
        >
          <ion-icon name="logo-linkedin" style={{ fontSize: '20px', color: '#0A66C2' }}></ion-icon>
          <span>Connect on LinkedIn</span>
        </a>

        <a 
          href={`https://wa.me/${whatsappPhone}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-action-btn"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 20px', background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.3)', borderRadius: '12px', color: '#25D366', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }}
        >
          <ion-icon name="logo-whatsapp" style={{ fontSize: '20px' }}></ion-icon>
          <span>Instant WhatsApp Inquiry</span>
        </a>
      </div>

      <div className="contact-form" ref={formRef}>
        <h3 className="h3 form-title">Send A Direct Inquiry</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Your Name / Company"
              required
              value={form.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Tell me about your project vision, timeline, and goals..."
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isValid} style={{ width: '100%', justifyContent: 'center' }}>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <span>Send Direct Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
