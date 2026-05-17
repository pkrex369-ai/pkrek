import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img src="/src/assets/images/logo.PNG" alt="PKREX Logo" className="footer-logo" />
            <p>Dedicated Non-Voice BPO partner for secure backend operations across India.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/capkrex" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#overview" onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Data Entry & Processing</li>
              <li>Document Digitization</li>
              <li>KYC Verification Support</li>
              <li>MIS Data Management</li>
              <li>Backend Office Support</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Chennai: 6, Hospital Road, Ambattur - 600053</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Arakkonam: 18, Thirutani Road - 631001</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 9655 550 144 / +91 9786 144 144</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>pkrex@pkrex.in</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PKREX Private Limited. All rights reserved.</p>
          <p className="footer-note">100% Non-Voice BPO | NDA Protected | Secure Operations</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;