import React, { useEffect, useRef, useState } from 'react';
import { FaShieldAlt, FaChartLine, FaBuilding, FaUniversity, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './styles/CombinedServices.css';

const CombinedServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const intervalRef = useRef(null);

  const contents = [
    {
      id: 'infrastructure',
      title: "Infrastructure & Team",
      description: "Our robust infrastructure combines secure systems, high-speed connectivity, and power backup for uninterrupted operations. We maintain a dedicated team of trained professionals who undergo regular skill upgradation. With scalable manpower and centralized monitoring, we deliver consistent quality for projects of any size.",
      icon: <FaShieldAlt />
    },
    {
      id: 'pricing',
      title: "Project & Pricing",
      description: "We offer flexible, transparent pricing tailored to your project scope and volume requirements. Our models include per-record pricing, monthly retainers, and project-based engagements with no hidden charges. Long-term partnerships benefit from special discounts and dedicated account management.",
      icon: <FaChartLine />
    },
    {
      id: 'industries',
      title: "Industries We Serve",
      description: "PKREX serves diverse industries including Banking & Finance, Healthcare, E-commerce, Insurance, Real Estate, and Education. We provide specialized Non-Voice BPO solutions for CA firms, Manufacturing companies, and IT organizations. Our tailored approach meets unique industry requirements efficiently.",
      icon: <FaBuilding />
    },
    {
      id: 'banking',
      title: "Banking & Finance Support",
      description: "We provide comprehensive backend support including KYC verification, loan documentation, and statement preparation for financial institutions. Our NDA-based security protocols ensure complete data privacy and regulatory compliance. All services are delivered without any voice interaction.",
      icon: <FaUniversity />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % contents.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + contents.length) % contents.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 500);
  };

  const currentContent = contents[activeIndex];

  return (
    <section className="combined-services" id="services-combined" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">Our Capabilities</span>
          <h2 className="section-title">Complete <span className="highlight">Business Solutions</span></h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">Delivering excellence across every aspect of your business</p>
        </div>

        {/* Content Slider */}
        <div className="slider-container">
          <button className="slider-nav prev" onClick={prevSlide}>
            ←
          </button>
          
          <div className="slider-content-wrapper">
            <div className="slider-content">
              <div className={`content-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <div className="card-bg-pattern"></div>
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
                
                <div className="card-header">
                  <div className="icon-wrapper">
                    <div className="icon-bg">{currentContent.icon}</div>
                  </div>
                  <h3 className="card-title">{currentContent.title}</h3>
                </div>
                
                <div className="paragraph-container">
                  <div className="quote-mark quote-left"><FaQuoteLeft /></div>
                  <div className="quote-mark quote-right"><FaQuoteRight /></div>
                  <div className="paragraph-inner">
                    <p className="description-text">{currentContent.description}</p>
                  </div>
                </div>
                
                <div className="card-underline">
                  <div className="underline-progress"></div>
                </div>
              </div>
            </div>
          </div>

          <button className="slider-nav next" onClick={nextSlide}>
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {contents.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-1"></div>
          <div className="floating-2"></div>
          <div className="floating-3"></div>
        </div>
      </div>
    </section>
  );
};

export default CombinedServices;