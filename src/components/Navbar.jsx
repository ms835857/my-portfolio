import React from 'react';

const Navbar = ({ activeSection }) => {
  const sections = ['About', 'Resume', 'Portfolio', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {sections.map((section) => (
          <li key={section} className="navbar-item">
            <button
              className={`navbar-link ${activeSection === section.toLowerCase() ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
      <div className="navbar-progress">
        <div 
          className="navbar-progress-bar" 
          style={{
            width: activeSection === 'about' ? '25%' : 
                   activeSection === 'resume' ? '50%' : 
                   activeSection === 'portfolio' ? '75%' : '100%'
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
