import React, { useEffect, useRef, useState } from 'react';
import './styles/Gallery.css';

// Import all images directly
import gallery1 from '/src/assets/images/gallery1.jpeg';
import gallery2 from '/src/assets/images/gallery2.png';
import gallery3 from '/src/assets/images/galary3.png';
import gallery4 from '/src/assets/images/gallery4.png';
import gallery5 from '/src/assets/images/gallery5.png';
import gallery6 from '/src/assets/images/gallery6.jpeg';
import gallery7 from '/src/assets/images/gallery7.jpeg';
import gallery8 from '/src/assets/images/gallery8.jpeg';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const galleryImages = [
    {
      src: gallery1,
      title: "Our Dedicated Staff",
      description: "Hardworking team members focused on delivering accurate data processing services"
    },
    {
      src: gallery2,
      title: "Front Office",
      description: "Welcoming reception area that reflects our professional corporate identity"
    },
    {
      src: gallery3,
      title: "Office Garden",
      description: "Peaceful garden space for staff relaxation and rejuvenation breaks"
    },
    {
      src: gallery4,
      title: "Workstation Area",
      description: "Modern workstations with comfortable chairs and high-performance laptops"
    },
    {
      src: gallery5,
      title: "Manager's Office",
      description: "Executive workspace featuring our prominent PKREX logo and branding"
    },
    {
      src: gallery6,
      title: "Operations Floor",
      description: "Spacious staff area designed for collaborative backend operations"
    },
    {
      src: gallery7,
      title: "CEO Chamber",
      description: "Executive leadership workspace for strategic decision making"
    },
    {
      src: gallery8,
      title: "Meeting Room",
      description: "Professional conference space for client discussions and team meetings"
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

  return (
    <section className="gallery-section" id="gallery" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">Our Workspace</span>
          <h2 className="section-title">Office <span className="highlight">Gallery</span></h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">
            Take a glimpse into our professional workspace and infrastructure
          </p>
        </div>

        {/* Gallery Grid - 4 Images Per Row */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.title} className="gallery-image" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="image-title">{image.title}</h3>
                    <p className="image-description">{image.description}</p>
                    <div className="image-hover-line"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;