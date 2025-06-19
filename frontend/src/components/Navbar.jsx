import { useState } from 'react';
import { Link } from 'react-scroll';
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="logo"
          onClick={closeMenu}
        >
          Sanjai's Portfolio
        </Link>

        <button
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>

        <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            About
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            Projects
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            Experience
          </Link>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            Education
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;