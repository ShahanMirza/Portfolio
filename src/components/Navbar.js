import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop - 100;
          if (scrollPosition >= offset) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="container">
        <h1>Muhammad Shahan</h1>
        <ul>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          </li>
          <li>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;