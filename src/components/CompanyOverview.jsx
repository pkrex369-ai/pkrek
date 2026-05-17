import React, { useEffect, useRef, useState } from 'react';
import { FaBuilding, FaShieldAlt, FaChartLine, FaHandshake, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import './styles/CompanyOverview.css';

const CompanyOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const featuresRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (headerRef.current) headerRef.current.classList.add('animate');
            if (textRef.current) textRef.current.classList.add('animate');
            if (featuresRef.current) featuresRef.current.classList.add('animate');
            if (quoteRef.current) quoteRef.current.classList.add('animate');
            if (ctaRef.current) ctaRef.current.classList.add('animate');
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

  const features = [
    {
      icon: <FaBuilding />,
      title: "100% Non-Voice",
      description: "Complete focus on backend processing with no voice or tele-calling activities",
      delay: 0
    },
    {
      icon: <FaShieldAlt />,
      title: "NDA Protected",
      description: "Strict confidentiality protocols and data security for every project",
      delay: 100
    },
    {
      icon: <FaChartLine />,
      title: "Accuracy Critical",
      description: "Multi-level quality checks ensuring error-free deliverables",
      delay: 200
    },
    {
      icon: <FaHandshake />,
      title: "Scalable Solutions",
      description: "Flexible workforce model for projects of any size",
      delay: 300
    }
  ];

  return (
    <section className="company-overview" id="overview" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Company Overview</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="overview-wrapper">
          {/* Main Content */}
          <div className="overview-main" ref={textRef}>
            <div className="overview-paragraph-wrapper">
              <p className="overview-paragraph overview-paragraph-first">
                <strong>PKREX Private Limited</strong> is a Indian-based outsourcing company exclusively focused on{' '}
                <span className="highlight-text">Non-Voice BPO services</span>, delivering structured, secure, and scalable 
                backend operational support to banks, NBFCs, corporates, startups, and professional service firms across India.
              </p>
            </div>
            
            <div className="overview-grid">
              <div className="overview-grid-item">
                <div className="grid-card">
                  <div className="grid-icon">
                    <FaChartLine />
                  </div>
                  <p className="overview-paragraph">
                    We specialize in managing <strong>high-volume, accuracy-critical backend processes</strong>, enabling our clients to 
                    reduce operational costs, improve turnaround time, and maintain consistent data quality. 
                    Our experienced non-voice teams follow defined SOPs, multi-level quality checks, and strict confidentiality 
                    protocols for every project.
                  </p>
                </div>
              </div>
              <div className="overview-grid-item">
                <div className="grid-card">
                  <div className="grid-icon">
                    <FaShieldAlt />
                  </div>
                  <p className="overview-paragraph">
                    PKREX is built on a foundation of <strong>data integrity, process discipline, and client confidentiality</strong>. 
                    With a flexible workforce model and robust infrastructure, we handle both short-term projects and long-term 
                    outsourcing engagements, ensuring timely delivery without compromising accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-grid" ref={featuresRef}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-hover-line"></div>
                <div className="feature-number">0{index + 1}</div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="overview-quote" ref={quoteRef}>
            <div className="quote-decoration">
              <FaQuoteLeft className="quote-icon" />
            </div>
            <p className="quote-text">
              Our commitment is to function as a reliable backend extension of our client's operations, 
              supporting business growth through dependable Non-Voice BPO solutions.
            </p>
            <div className="quote-author">
              <span className="author-line"></span>
              <span className="author-name">PKREX Leadership</span>
              <span className="author-line"></span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="overview-cta" ref={ctaRef}>
            <a href="#contact" className="cta-link">
              <span>Discover Our Services</span>
              <FaArrowRight className="cta-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;