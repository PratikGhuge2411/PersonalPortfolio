import React from 'react';
import './footer.css';

const Footer = () => {  // Changed from 'footer' to 'Footer'
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>Passionate Full Stack Developer creating beautiful web experiences.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: your.email@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  // Changed from 'footer' to 'Footer'