import { useState } from 'react';
import { Link } from 'react-scroll';
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="portfolio-navbar">
      <div className="portfolio-navbar__container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="portfolio-navbar__logo"
          onClick={closeMenu}
        >
          <span className="portfolio-navbar__logo-name">Sanjai R</span>
          <span className="portfolio-navbar__logo-title">AI & Data Engineer</span>
        </Link>

        <button
          className={`portfolio-navbar__hamburger ${isMenuOpen ? 'portfolio-navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="portfolio-navbar__hamburger-line"></span>
          <span className="portfolio-navbar__hamburger-line"></span>
          <span className="portfolio-navbar__hamburger-line"></span>
        </button>

        <div className={`portfolio-navbar__links ${isMenuOpen ? 'portfolio-navbar__links--active' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            About
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            Projects
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            Experience
          </Link>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            Education
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="portfolio-navbar__link--active"
            className="portfolio-navbar__link"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;