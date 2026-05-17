import React, { useState, useEffect } from 'react';
import { FaCertificate, FaShieldAlt } from 'react-icons/fa';
import './styles/Hero.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const heroSlides = [
    {
      image: '/src/assets/images/Hero.jpeg',
      badge: "INDIA'S TRUSTED NON-VOICE BPO",
      title: "Secure Non-Voice BPO",
      highlight: "Solutions For Modern Enterprises",
      description: "PKREX delivers structured, secure, and scalable backend operational support to banks, NBFCs, corporates, and startups across India with 99.9% accuracy.",
      stats: [
        { value: "100%", label: "DATA SECURITY" },
        { value: "24/7", label: "SUPPORT AVAILABLE" },
        { value: "99.9%", label: "ACCURACY RATE" }
      ]
    },
    {
      image: '/src/assets/images/Hero1.jpeg',
      badge: "ENTERPRISE-GRADE BACKEND SOLUTIONS",
      title: "Scalable Operations",
      highlight: "For Growing Businesses Worldwide",
      description: "From startups to large enterprises, our flexible workforce model handles projects of any scale with consistent quality and rapid turnaround times.",
      stats: [
        { value: "500+", label: "PROJECTS COMPLETED" },
        { value: "50+", label: "ENTERPRISE CLIENTS" },
        { value: "24hrs", label: "AVG TURNAROUND" }
      ]
    }
  ];

  const currentSlide = heroSlides[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const handleRequestQuote = () => {
    scrollToSection('quality');
  };

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="hero" id="home">
      {/* Background Image with Strong Overlay */}
      <div className="hero-background">
        <div 
          className={`hero-bg-image ${isAnimating ? 'fade-out' : 'fade-in'}`}
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-overlay-dark"></div>
      </div>

      <div className="hero-container">
        <div className="hero-wrapper">
          {/* Changing Content Area */}
          <div className={`hero-content ${isAnimating ? 'content-exit' : 'content-enter'}`}>
            {/* Badge */}
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">{currentSlide.badge}</span>
            </div>
            
            {/* Title */}
            <h1 className="hero-title">
              {currentSlide.title}
              <br />
              <span className="highlight">{currentSlide.highlight}</span>
            </h1>
            
            {/* Description */}
            <p className="hero-description">
              {currentSlide.description}
            </p>
            
            {/* Stats */}
            <div className="hero-stats">
              {currentSlide.stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="stat-item">
                    <span className="stat-number">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                  {index < currentSlide.stats.length - 1 && (
                    <div className="stat-divider"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Fixed Buttons - Always in same position */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleGetStarted}>
              <span>Get Started</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-outline" onClick={handleRequestQuote}>
              <span>Request a Quote</span>
            </button>
          </div>
        </div>

        {/* ISO Certifications Banner */}
        <div className="hero-certifications">
          <div className="cert-item">
            <div className="cert-icon-wrapper">
              <FaCertificate className="cert-icon" />
            </div>
            <div className="cert-info">
              <span className="cert-number">ISO 9001:2015</span>
              <span className="cert-label">Certified Organization</span>
            </div>
          </div>
          <div className="cert-divider"></div>
          <div className="cert-item">
            <div className="cert-icon-wrapper">
              <FaShieldAlt className="cert-icon" />
            </div>
            <div className="cert-info">
              <span className="cert-number">ISO 27001:2022</span>
              <span className="cert-label">Information Security Management System</span>
            </div>
          </div>
        </div>
        
        {/* Slider Dots */}
        <div className="slider-controls">
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--off-white)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;