import React, { useState } from 'react';

const Sidebar = ({ isProjectMode, projects, activeProjectIndex, onProjectSelect }) => {
  const [isActive, setIsActive] = useState(false);

  const activeProject = isProjectMode && projects ? projects[activeProjectIndex] : null;

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className={`avatar-box ${isProjectMode ? 'project-avatar' : ''}`}>
          <img 
            src={isProjectMode ? activeProject?.img : "./assets/images/avatar-1.png"} 
            alt={isProjectMode ? activeProject?.title : "Muhammad Saad"} 
            width="80" 
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={isProjectMode ? activeProject?.title : "Muhammad Saad"}>
            {isProjectMode ? activeProject?.title : "Muhammad Saad"}
          </h1>
          <p className="title">{isProjectMode ? activeProject?.category : "Web developer"}</p>
        </div>

        <button className="info_more-btn" onClick={() => setIsActive(!isActive)} data-sidebar-btn>
          <span>{isProjectMode ? 'Show Projects' : 'Show Contacts'}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        {isProjectMode ? (
          <ul className="project-nav-list">
            {projects?.map((project, index) => (
              <li key={index} className={`project-nav-item ${index === activeProjectIndex ? 'active' : ''}`}>
                <button onClick={() => {
                  onProjectSelect(index);
                  // Fixed: Scroll back to top of the detail container on project switch
                  const scroller = document.querySelector('.world-back .side-content');
                  if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:ms835857@gmail.com" className="contact-link">ms835857@gmail.com</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+923267671152" className="contact-link">+92 326 7671152</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2003-03-25">March 25, 2003</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>E11/2, Islamabad</address>
              </div>
            </li>
          </ul>
        )}

        {!isProjectMode && (
          <>
            <div className="separator"></div>
            <ul className="social-list">
              <li className="social-item">
                <a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
              </li>
            </ul>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
