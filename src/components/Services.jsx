import React, { useEffect, useRef, useState } from 'react';
import { 
  FaFileAlt, FaClipboardList, FaFilePdf, FaCheckDouble, 
  FaChartLine, FaHeadset, FaIdCard, FaFileInvoice, 
  FaDatabase, FaFileImage, FaUsers, FaLayerGroup,
  FaTimes, FaCheckCircle
} from 'react-icons/fa';
import './styles/Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const services = [
    { 
      icon: <FaFileAlt />, 
      title: "Data Entry & Data Processing",
      description: "Accurate input, formatting, cleansing, and processing of structured and unstructured data.",
      features: ["High-speed data entry with 99.9% accuracy", "Formatting and data cleansing services", "Processing of structured and unstructured data", "Quality checks at every stage"],
      benefits: ["Reduce operational costs", "Improve turnaround time", "Maintain consistent data quality"]
    },
    { 
      icon: <FaClipboardList />, 
      title: "Form Filling Projects",
      description: "Application forms, survey forms, customer onboarding forms, and bulk data forms processing.",
      features: ["Online and offline form filling", "Survey and application forms", "Customer onboarding data entry", "Bulk form processing"],
      benefits: ["Quick turnaround time", "Error-free data entry", "Cost-effective solutions"]
    },
    { 
      icon: <FaFilePdf />, 
      title: "Document Digitization & Indexing",
      description: "Scanning, OCR support, document classification, and searchable digital archiving.",
      features: ["Document scanning and digitization", "OCR support for text extraction", "Document classification and indexing", "Searchable digital archiving"],
      benefits: ["Easy document retrieval", "Space-saving digital storage", "Enhanced document security"]
    },
    { 
      icon: <FaCheckDouble />, 
      title: "Data Validation & Verification",
      description: "Cross-checking, duplicate removal, error identification, and data accuracy assurance.",
      features: ["Data cross-checking services", "Duplicate removal and cleanup", "Error identification and correction", "Data accuracy assurance"],
      benefits: ["Clean and reliable data", "Reduced error rates", "Better decision making"]
    },
    { 
      icon: <FaChartLine />, 
      title: "Excel / MIS Data Management",
      description: "Report preparation, dashboards, summaries and client specific MIS formats.",
      features: ["Report preparation and formatting", "Dashboard creation and management", "MIS report generation", "Data summarization"],
      benefits: ["Actionable insights", "Professional reporting", "Time-saving automation"]
    },
    { 
      icon: <FaHeadset />, 
      title: "Backend Office Support",
      description: "End-to-end administrative and operational backend assistance.",
      features: ["Administrative task management", "Operational backend support", "Data coordination services", "Process documentation"],
      benefits: ["Streamlined operations", "Focus on core business", "Reduced administrative burden"]
    },
    { 
      icon: <FaIdCard />, 
      title: "KYC Data Entry & Verification",
      description: "Customer details, document tagging and record updating.",
      features: ["Customer KYC data entry", "Document tagging and indexing", "Record updating and maintenance", "Compliance checking"],
      benefits: ["Regulatory compliance", "Accurate customer records", "Risk mitigation"]
    },
    { 
      icon: <FaFileInvoice />, 
      title: "Invoice & Billing Processing",
      description: "Entry, reconciliation, and backend validation of invoices.",
      features: ["Invoice data entry", "Billing reconciliation", "Backend validation", "Payment tracking"],
      benefits: ["Accurate billing", "Faster payment cycles", "Reduced discrepancies"]
    },
    { 
      icon: <FaDatabase />, 
      title: "Database Creation & Maintenance",
      description: "Master data creation, updates and periodic audits.",
      features: ["Master data creation", "Database updating", "Periodic data audits", "Data quality maintenance"],
      benefits: ["Organized data structure", "Easy data access", "Improved data integrity"]
    },
    { 
      icon: <FaFileImage />, 
      title: "Image & PDF Data Extraction",
      description: "Conversion of scanned files into editable digital formats.",
      features: ["Image to text conversion", "PDF data extraction", "Scanned document processing", "Editable format conversion"],
      benefits: ["Searchable documents", "Editable content", "Reduced manual work"]
    },
    { 
      icon: <FaUsers />, 
      title: "CRM Backend Updating",
      description: "Customer data updates and record management without voice interaction.",
      features: ["Customer data updates", "CRM record management", "Data synchronization", "Profile maintenance"],
      benefits: ["Updated customer information", "Better customer service", "Improved sales tracking"]
    },
    { 
      icon: <FaLayerGroup />, 
      title: "Bulk Data Projects",
      description: "Volume-based execution with defined accuracy benchmarks and turnaround time.",
      features: ["Large volume data processing", "Defined accuracy benchmarks", "Guaranteed turnaround time", "Scalable workforce"],
      benefits: ["Handle peak workloads", "Consistent quality", "Predictable delivery"]
    }
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

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedService(null), 300);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Core <span className="highlight">Non-Voice BPO</span> Services</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">
            Click on any service to learn more about how we can help your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid" ref={gridRef}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              style={{ transitionDelay: `${index * 30}ms` }}
              onClick={() => openModal(service)}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Modal */}
    {isModalOpen && selectedService && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            ✕
          </button>
          
          <div className="modal-header">
            <div className="modal-icon">{selectedService.icon}</div>
            <h2 className="modal-title">{selectedService.title}</h2>
          </div>
          
          <div className="modal-body">
            <p className="modal-description">{selectedService.description}</p>
            
            <div className="modal-section">
              <h3>Key Features</h3>
              <ul className="modal-features">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-section">
              <h3>Business Benefits</h3>
              <ul className="modal-benefits">
                {selectedService.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="benefit-check" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="modal-footer">
            <button className="modal-cta" onClick={() => {
              closeModal();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    )}
    </section>
  );
};

export default Services;