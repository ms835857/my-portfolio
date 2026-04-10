import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../assets/css/preloader.css';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const orbContainerRef = useRef(null);
  const contentRef = useRef(null);
  const orbs = useRef([]);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 15;
      this.speedY = (Math.random() - 0.5) * 15;
      this.opacity = 1;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }

    update() {
      // Radial expansion + spiral rotation
      const dist = Math.sqrt(this.speedX ** 2 + this.speedY ** 2);
      const angle = Math.atan2(this.speedY, this.speedX) + this.rotationSpeed;
      
      this.speedX = Math.cos(angle) * dist;
      this.speedY = Math.sin(angle) * dist;
      
      this.x += this.speedX;
      this.y += this.speedY;
      
      this.speedX *= 0.98; // Friction
      this.speedY *= 0.98;
      this.opacity -= 0.005;
    }

    draw(ctx) {
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const initParticles = () => {
    const colors = ['#3186FF', '#FC413D', '#FBBC04', '#00B95C', '#ffffff'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 800; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.current.push(new Particle(centerX, centerY, color));
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current = particles.current.filter(p => p.opacity > 0);
    particles.current.forEach(p => {
      p.update();
      p.draw(ctx);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Canvas Setup
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: 'power3.inOut',
          delay: 1.2,
          onComplete: () => {
             cancelAnimationFrame(animationFrameId.current);
             onComplete();
          }
        });
      }
    });

    // 1. Initial Scatter of Orbs
    gsap.set(orbs.current, {
      x: (i) => (i % 2 === 0 ? -400 : 400),
      y: (i) => (i < 2 ? -400 : 400),
      opacity: 0,
      scale: 0.5
    });

    // 2. The Convergence (Swirl in)
    tl.to(orbs.current, {
      opacity: 0.8,
      scale: 1,
      x: 0,
      y: 0,
      duration: 2,
      ease: 'power2.inOut',
      stagger: 0.2,
      onStart: () => {
        // Start a subtle rotation on the container
        gsap.to(orbContainerRef.current, { rotate: 360, duration: 2.5, ease: 'none' });
      }
    })
    
    // 3. The Burst
    .call(() => {
      initParticles();
      animate();
      // Hide orbs instantly at burst
      gsap.to(orbs.current, { scale: 0, opacity: 0, duration: 0.1 });
    })

    // 4. Resolve Logo and Text
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out'
    }, "-=0.5");

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [onComplete]);

  return (
    <div className="preloader-overlay" ref={containerRef}>
      <canvas className="particles-canvas" ref={canvasRef} />
      
      <div className="orb-container" ref={orbContainerRef}>
        <div className="orb orb-blue" ref={el => orbs.current[0] = el} />
        <div className="orb orb-red" ref={el => orbs.current[1] = el} />
        <div className="orb orb-yellow" ref={el => orbs.current[2] = el} />
        <div className="orb orb-green" ref={el => orbs.current[3] = el} />
      </div>

      <div className="loader-content" ref={contentRef}>
        <h2 className="loader-heading">Antigravity OS</h2>
        
        <div className="loader-logos">
          <div className="logo-item">
            <ion-icon name="sparkles" style={{ color: '#4285F4' }}></ion-icon>
            <span className="logo-name">Gemini</span>
          </div>

          <div className="logo-item">
            <ion-icon name="rocket-outline" style={{ color: '#f4a261' }}></ion-icon>
            <span className="logo-name">Antigravity</span>
          </div>

          <div className="logo-item">
            <ion-icon name="logo-github"></ion-icon>
            <span className="logo-name">Github</span>
          </div>
        </div>

        <p className="loader-text">
          Personal Portfolio System
          <br />
          Optimized by <span>Antigravity AI</span> and <span>Gemini</span> 
          <br />
          Infrastructure by <span>Github</span>
        </p>
      </div>
    </div>
  );
};

export default Preloader;
