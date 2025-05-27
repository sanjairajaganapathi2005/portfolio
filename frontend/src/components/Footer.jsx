import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          {/* Left - Address */}
          <div className="footer-left">
            <h3 className="footer-heading"><span>Address</span></h3>
            <p>📍<strong>Sanjai R </strong> 
               Vennadur(Po), Rasipuram(Tk), Tamil Nadu - 637505</p>
          <p>📧 Email: <a href="mailto:sanjairajaganapathi2005@gmail.com">sanjairajaganapathi2005@gmail.com</a></p>
          </div>

          {/* Center - Social Media */}
          <div className="footer-center">
            <h3 className="footer-heading"><span>Connect with Us</span></h3>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Right - Nav Links */}
          <div className="footer-right">
            <h3 className="footer-heading"><span>Quick Links</span></h3>
            <ul className="nav-links">
              <li><a href="#about">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#experirence">Experirence</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} © 2025 | All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;