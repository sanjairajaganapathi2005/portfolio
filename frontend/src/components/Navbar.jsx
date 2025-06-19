import { useState, useEffect } from 'react';
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const handleScroll = () => {
      let current = sectionIds[0];
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <h2 className="logo1">Sanjai's Portfolio</h2>

        <button 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>

        <div className={`navlinks1 ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About Me</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className={activeSection === 'experience' ? 'active' : ''}>Experiences </a>
          <a href="#education" onClick={() => setIsMenuOpen(false)} className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;