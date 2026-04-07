# 3D Globe Portfolio: Architectural Blueprint

This document contains the core "Peak" logic and CSS tokens for the 3D Orbital Portfolio architecture. Use these snippets to re-implement the high-end features from scratch.

---

## 1. Global Scene Setup (App.jsx)
The core of the 3D effect is the `global-world` container, which exists in a `3000px` perspective field. It handles the 180-degree flip.

```jsx
// Required Imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Main App Structure
function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const worldRef = useRef(null);

  useGSAP(() => {
    if (worldRef.current) {
      gsap.to(worldRef.current, {
        rotationY: isFlipped ? 180 : 0,
        z: -600, // Important: maintains the center of the sphere
        duration: 2.2,
        ease: 'power2.inOut',
        onComplete: () => ScrollTrigger.refresh()
      });
    }
  }, [isFlipped]);

  return (
    <div className="global-scene">
      <div className={`global-world ${isFlipped ? 'is-flipped' : ''}`} ref={worldRef}>
        
        {/* FRONT SIDE (Main Portfolio) */}
        <div className="world-side world-front">
           <Navbar activeSection={activeSection} />
           <main>
             <Sidebar />
             <div className="main-content">
               {/* Content here scrolls INDEPENDENTLY */}
               <section id="about"><About /></section>
               <section id="resume"><Resume /></section>
               <section id="portfolio"><Portfolio onProjectSelect={...} /></section>
               <section id="contact"><Contact /></section>
             </div>
           </main>
        </div>

        {/* BACK SIDE (Project Details) */}
        <div className="world-side world-back">
           <ProjectDetailView project={...} onReturn={() => setIsFlipped(false)} />
        </div>

      </div>
    </div>
  );
}
```

---

## 2. The 3D CSS Engine (App.css)
The CSS must manage the relative Z-offsets to ensure the globe rotates around its center and that scrolling works correctly in 3D perspective.

```css
/* Core Scene */
.global-scene {
  perspective: 3000px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.global-world {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translateZ(-600px); /* Anchor the sphere center */
}

/* Independent Scroll Panels */
.world-side {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto; /* This enables native scrolling inside the 3D side */
  overflow-x: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  scroll-behavior: smooth;
  overscroll-behavior: contain; /* Prevents scroll chaining */
  pointer-events: auto; /* Crucial: ensures mouse/touch works in 3D */
  z-index: 10;
}

/* Positioning the Panels */
.world-front {
  z-index: 20;
  transform: translateZ(600px);
}

.world-back {
  z-index: 10;
  transform: rotateY(180deg) translateZ(600px);
}

/* Custom Scrollbar for Panels */
.world-side::-webkit-scrollbar { width: 6px; }
.world-side::-webkit-scrollbar-thumb {
  background: rgba(245, 158, 11, 0.3);
  border-radius: 10px;
}
```

---

## 3. High-End Interactions (GSAP & Events)

### A. Scoped ScrollTrigger
Because scrolling happens inside `.world-front` (not the window), child components MUST use the `scroller` property.

```javascript
// Inside About.jsx, Resume.jsx, etc.
gsap.from(".element", {
  scrollTrigger: {
    trigger: ".element",
    scroller: ".world-front", // Points to the panel, not window
    start: "top 85%",
  },
  opacity: 0,
  y: 30
});
```

### B. Gestalt Return-to-Home
Trigger a return to the main site when the user scrolls past the top of the project detail.

```javascript
const handleWheel = (e) => {
  const scroller = e.currentTarget.closest('.world-back');
  if (scroller && scroller.scrollTop <= 0 && e.deltaY < -50) {
    onReturn(); // Back to main site
  }
};
```

---

## 4. Cinematic Project Style
The high-end `ProjectDetailView` uses a large hero header with absolute positioning for the title.

```jsx
<section className="media-carousel">
  <img src={project.media[0]} className="carousel-slide" />
  <div className="detail-header-cinematic">
    <h1 className="detail-title-large">{project.title}</h1>
    <div className="detail-stats-bar">
      <span>Role: {project.role}</span>
      <span>Timeline: {project.timeline}</span>
    </div>
  </div>
</section>
```

---

## 5. Stability Checklist
1. **Z-Index:** Ensure the active `.world-side` has a higher `z-index` when visible to prevent hover leaks from the hidden side.
2. **Event Capture:** If `pointer-events: none` is set on the constellation background, make sure `pointer-events: auto` is set on `.world-side`.
3. **Infinite Loops:** Never calculate `isValid` or other render-time variables using a `useEffect` that updates state. Calculate them as pure variables during render.
