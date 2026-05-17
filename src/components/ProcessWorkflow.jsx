import React, { useEffect, useRef, useState } from 'react';
import { 
  FaSearch, FaFileContract, FaChartLine, FaTasks, FaCogs, 
  FaCheckCircle, FaRocket, FaComments, FaArrowRight 
} from 'react-icons/fa';
import './styles/ProcessWorkflow.css';

const ProcessWorkflow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const steps = [
    { 
      icon: <FaSearch />, 
      title: "Client Requirement Discussion", 
      num: "01",
      description: "Understanding project scope, data type, volume, accuracy expectations, and TAT."
    },
    { 
      icon: <FaFileContract />, 
      title: "NDA & Data Security Agreement", 
      num: "02",
      description: "Execution of NDA and confirmation of data confidentiality and compliance."
    },
    { 
      icon: <FaChartLine />, 
      title: "Process Mapping & SOP", 
      num: "03",
      description: "Preparation of client-specific SOPs, workflow mapping, and quality benchmarks."
    },
    { 
      icon: <FaTasks />, 
      title: "Sample Task Execution", 
      num: "04",
      description: "Pilot work execution to validate process understanding and accuracy."
    },
    { 
      icon: <FaCogs />, 
      title: "Bulk Project Allocation", 
      num: "05",
      description: "Allocation of work to trained non-voice teams with defined timelines."
    },
    { 
      icon: <FaCheckCircle />, 
      title: "Live Production & Monitoring", 
      num: "06",
      description: "Continuous monitoring to ensure productivity and SOP adherence."
    },
    { 
      icon: <FaCheckCircle />, 
      title: "Multi-Level Quality Check", 
      num: "07",
      description: "Multi-stage quality audits to identify and correct errors."
    },
    { 
      icon: <FaRocket />, 
      title: "Timely & Secure Delivery", 
      num: "08",
      description: "Delivery of output within agreed TAT through secure channels."
    },
    { 
      icon: <FaComments />, 
      title: "Client Review & Feedback", 
      num: "09",
      description: "Collection of client feedback and change requests."
    },
    { 
      icon: <FaChartLine />, 
      title: "Continuous Improvement", 
      num: "10",
      description: "Process refinement and quality improvement for ongoing projects."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (headerRef.current) headerRef.current.classList.add('animate');
            if (timelineRef.current) timelineRef.current.classList.add('animate');
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
    <section className="process-workflow" id="process" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our <span className="highlight">Process Workflow</span></h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline" ref={timelineRef}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="timeline-marker">
                <div className="marker-number">{step.num}</div>
                <div className="marker-icon">{step.icon}</div>
                {index < steps.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className={`timeline-content ${activeStep === index ? 'active' : ''}`}>
                <div className="content-header">
                  <h3>{step.title}</h3>
                  <div className="content-arrow">
                    <FaArrowRight />
                  </div>
                </div>
                <p className="content-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary - Reduced */}
        <div className="workflow-stats">
          <div className="stat-card">
            <span className="stat-number">10</span>
            <span className="stat-label">Process Steps</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Quality Checked</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflow;