import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'overview', 'services', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else {
      // If FAQ section doesn't exist yet, scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img src="/src/assets/images/logo.PNG" alt="PKREX Logo" className="logo-image" />
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className="menu-icon">{mobileMenuOpen ? '×' : '≡'}</span>
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            </li>
            <li className={activeSection === 'overview' ? 'active' : ''}>
              <a href="#overview" onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}>About</a>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            </li>
            <li className={activeSection === 'process' ? 'active' : ''}>
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </li>
          </ul>
          
  
            {/* FAQ Button */}
            <button className="nav-faq" onClick={scrollToFAQ}>
              <span className="faq-icon">?</span>
              FAQ
            </button>
          <div className="nav-actions">
            {/* Professional Theme Toggle */}
            <button 
              className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="toggle-track">
                <span className="toggle-indicator"></span>
              </span>
              <span className="toggle-labels">
                <span className="toggle-label-light">Light</span>
                <span className="toggle-label-dark">Dark</span>
              </span>
            </button>
          
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;