import React, { useEffect, useRef, useState } from 'react';
import './styles/WhyChoose.css';
// Import the image directly
import whyChooseImage from '/src/assets/images/whychoosee.jpeg';

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const features = [
    {
      title: "100% Non-Voice Operations",
      description: "Complete focus on backend processing with no voice or tele-calling activities. We ensure zero distractions and maximum efficiency for your business processes.",
      detailedDesc: "Our dedicated team handles all backend operations without any voice interaction, maintaining complete focus on accuracy and speed. This specialized approach ensures faster turnaround times and reduced operational costs."
    },
    {
      title: "Dedicated Data Processing Team",
      description: "Trained professionals for accuracy-critical and volume-based projects. Every team member undergoes rigorous training before handling client data.",
      detailedDesc: "We maintain specialized teams for different types of data processing. Each team is trained in specific industry standards and quality benchmarks to ensure consistent, error-free output."
    },
    {
      title: "Strong Quality Control",
      description: "Multi-level verification and error tracking for consistent accuracy. Our QC process ensures 99.9% accuracy across all projects.",
      detailedDesc: "Our quality control framework includes dual-level checks, random audits, and continuous monitoring. Every output goes through multiple verification stages before delivery."
    },
    {
      title: "NDA Protected & Secure",
      description: "Complete data privacy and client confidentiality guaranteed. Your data is safe with our enterprise-grade security protocols.",
      detailedDesc: "We sign strict NDAs and implement access control systems, encrypted data transfer, and secure storage. All team members undergo background verification."
    },
    {
      title: "Flexible Volume Handling",
      description: "Handle small, medium, and bulk data projects with ease. Our scalable infrastructure grows with your business needs.",
      detailedDesc: "Whether you need 100 records or 1 million records processed, our flexible workforce model scales instantly. No project is too big or too small for us."
    },
    {
      title: "Transparent Pricing",
      description: "Competitive rates with no hidden charges. Pay only for what you need with our flexible pricing models.",
      detailedDesc: "Our pricing is based on per-record or per-project basis with complete transparency. No setup fees, no hidden charges, just honest pricing."
    }
  ];

  // Auto-rotate content with smooth transition
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [features.length]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) headerRef.current.classList.add('animate');
          }
        });
      },
      { threshold: 0.2, triggerOnce: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const currentFeature = features[activeIndex];

  return (
    <section className="why-choose" id="why-choose" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Why Choose <span className="highlight">PKREX?</span></h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Main Content Area - Left Content, Right Image */}
        <div className="why-content-wrapper">
          {/* Left Side - Changing Content with Smooth Animation - No Icons */}
          <div className="content-side">
            <div className={`content-container ${isAnimating ? 'slide-out' : 'slide-in'}`}>
              <h3 className="feature-title-large">{currentFeature.title}</h3>
              <p className="feature-description-large">{currentFeature.description}</p>
              <p className="feature-detailed-desc">{currentFeature.detailedDesc}</p>
            </div>
          </div>

          {/* Right Side - Image with Stats */}
          <div className="image-side">
            <div className="image-container">
              <img 
                src={whyChooseImage} 
                alt="Why Choose PKREX" 
                className="why-image"
              />
              <div className="image-overlay"></div>
              <div className="image-glow"></div>
            </div>

            {/* Floating Stats */}
            <div className="floating-stats">
              <div className="floating-stat">
                <span className="stat-value">500+</span>
                <span className="stat-name">Projects</span>
              </div>
              <div className="floating-stat">
                <span className="stat-value">99.9%</span>
                <span className="stat-name">Accuracy</span>
              </div>
              <div className="floating-stat">
                <span className="stat-value">50+</span>
                <span className="stat-name">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;