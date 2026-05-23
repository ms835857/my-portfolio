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

    gsap.from(formRef.current?.querySelectorAll('.form-input, .form-btn') || [], {
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: formRef.current,
        scroller: '.side-content',
        start: 'top 80%',
      },
    });
  }, { dependencies: [], revertOnUpdate: true }); // No scope to allow scroller: .world-front

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
      <header>
        <h2 className="h2 article-title" ref={titleRef}>Contact</h2>
      </header>

      <div className="contact-form" ref={formRef}>
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={form.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isValid}>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <span>Send via WhatsApp</span>
          </button>
        </form>

        <div className="whatsapp-direct">
          <span className="whatsapp-divider">or</span>
          <a
            href={`https://wa.me/${whatsappPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-chat-btn"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
            <span>Chat Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
