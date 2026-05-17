import React, { useEffect, useRef, useState } from 'react';
import { FaShieldAlt, FaLock, FaCheckCircle, FaDatabase, FaFileAlt, FaChartLine, FaUserSecret, FaExchangeAlt } from 'react-icons/fa';
import './styles/QualitySecurity.css';

const QualitySecurity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const qualityItems = [
    { icon: <FaCheckCircle />, text: "Dual-Level Quality Control (QC) Checks" },
    { icon: <FaFileAlt />, text: "Accuracy-Driven Standard Operating Procedures" },
    { icon: <FaLock />, text: "Restricted System & Data Access" },
    { icon: <FaShieldAlt />, text: "Secure File Handling Procedures" },
    { icon: <FaUserSecret />, text: "Strict Confidentiality Commitment via NDA" },
    { icon: <FaChartLine />, text: "Multi-Stage Quality Audits" },
    { icon: <FaDatabase />, text: "Error Tracking & Root Cause Analysis" },
    { icon: <FaChartLine />, text: "Defined Accuracy Benchmarks & KPIs" },
    { icon: <FaDatabase />, text: "Controlled Data Storage & Access Logs" },
    { icon: <FaExchangeAlt />, text: "No External Data Sharing Policy" },
    { icon: <FaExchangeAlt />, text: "Secure Transfer Protocols" },
    { icon: <FaCheckCircle />, text: "Periodic Internal Reviews & Compliance" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (headerRef.current) headerRef.current.classList.add('animate');
            if (gridRef.current) gridRef.current.classList.add('animate');
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

  return (
    <section className="quality-security" id="quality" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">Trust & Compliance</span>
          <h2 className="section-title">Quality Assurance & <span className="highlight">Data Security</span></h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">
            Enterprise-grade security and quality framework ensuring your data is always protected
          </p>
        </div>

        {/* Security Grid */}
        <div className="security-grid" ref={gridRef}>
          {qualityItems.map((item, index) => (
            <div 
              key={index} 
              className="security-item"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="security-icon-wrapper">
                <div className="security-icon">{item.icon}</div>
              </div>
              <span className="security-text">{item.text}</span>
              <div className="security-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySecurity;