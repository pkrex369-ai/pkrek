import React, { useEffect, useRef, useState } from 'react';
import { FaEye, FaRocket, FaCheckCircle, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import './styles/VisionMission.css';

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const missionPoints = [
    "High-accuracy, process-driven non-voice operations",
    "Strict data security and confidentiality standards",
    "Implemented SOPs and multi-level quality controls",
    "Cost-effective and scalable outsourcing models",
    "Timely delivery and consistent turnaround times",
    "Continuous process improvement through audits",
    "Long-term, ethical, and transparent BPO partnerships"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (visionRef.current) visionRef.current.classList.add('animate');
            if (missionRef.current) missionRef.current.classList.add('animate');
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

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="vision-mission" id="vision-mission" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Our Purpose</span>
          <h2 className="section-title">Vision & Mission</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">
            Guiding principles that drive our commitment to excellence in Non-Voice BPO services
          </p>
        </div>

        <div className="vm-grid">
          {/* Vision Card */}
          <div className="vision-card" ref={visionRef}>
            <div className="card-glow"></div>
            <div className="card-number"></div>

            <h3>Our Vision</h3>
            <p>
              To become a trusted and preferred Non-Voice BPO outsourcing partner by consistently 
              delivering <strong>secure, scalable, and error-free backend services</strong>, while upholding the 
              highest standards of data confidentiality, process excellence, and client satisfaction.
            </p>
            <div className="vm-footer">

              <span>Reliable backend extension for your operations</span>
            </div>
            <div className="card-border"></div>
          </div>
          
          {/* Mission Card */}
          <div className="mission-card" ref={missionRef}>
            <div className="card-glow"></div>
            <div className="card-number"></div>

            <h3>Our Mission</h3>
            <p className="mission-subtitle">We deliver dependable Non-Voice BPO solutions through:</p>
            <ul>
              {missionPoints.map((point, index) => (
                <li key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="mission-check-wrapper">
                    <FaCheckCircle className="mission-check" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mission-cta" onClick={scrollToServices}>
              <span>Join Our Journey</span>
              <FaArrowRight className="mission-arrow" />
            </div>
            <div className="card-border"></div>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="vision-quote">
          <FaQuoteRight className="quote-icon" />
          <p>Excellence is not a skill. It is an attitude.</p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;