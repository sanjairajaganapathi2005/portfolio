import '../styles/footer.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media data
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sanjairajaganapathi',
      icon: <FaLinkedin size={20} />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sanjairajaganapathi2005',
      icon: <FaGithub size={20} />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/sanjairajaganapathi2005',
      icon: <SiLeetcode size={20} />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919025875983',
      icon: <FaWhatsapp size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:sanjairajaganapathi2005@gmail.com',
      icon: <FaEnvelope size={20} />,
    }
  ];

  const navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Education', url: '#education' },
    { name: 'Contact', url: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Address</h3>
            <div className="contact-info">
              <div className="contact-item">
                  <p> <strong>Sanjai R</strong></p>
                  <p><FaMapMarkerAlt className="contact-icon" /> Vennadur (Po), Rasipuram (Tk)</p>
                  <p>Tamil Nadu - 637505, India</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" /> 
                <a href="mailto:sanjairajaganapathi2005@gmail.com"> sanjairajaganapathi2005@gmail.com  </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-nav">
              <ul className="nav-links">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="nav-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Connect with me</h3>
            <div className="social-linkss">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Sanjai R. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
