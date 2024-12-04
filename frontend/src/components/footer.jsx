import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import "/styles/footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and tagline */}
          <div className="footer-section">
            <h2 className="footer-title">Smartline Systems</h2>
            <p className="footer-text">Empowering businesses through innovative IT solutions</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-subtitle">Our Services</h3>
            <ul className="footer-list">
              <li>IT Training</li>
              <li>Software Development</li>
              <li>IT Consulting</li>
              <li>Outsourcing Solutions</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-subtitle">Contact Us</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <Mail className="footer-icon" />
                <a href="mailto:info@techstartup.com" className="footer-link">info@smartline.com</a>
              </li>
              <li className="footer-item">
                <Phone className="footer-icon" />
                <a href="tel:+11234567890" className="footer-link">+91 (123) 456-7890</a>
              </li>
              <li className="footer-item">
                <Linkedin className="footer-icon" />
                <a href="https://www.linkedin.com/company/techstartup" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Smartline Services Pvt. Ltd.. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
