import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaMinus, FaChevronDown } from 'react-icons/fa';
import './styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const faqs = [
    {
      question: "What types of Non-Voice BPO services do you offer?",
      answer: "We offer a comprehensive range of Non-Voice BPO services including Data Entry & Processing, Document Digitization, KYC Verification, MIS Data Management, Invoice Processing, Database Management, and Backend Office Support for various industries."
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer: "We follow strict NDA-based engagement, implement multi-level security protocols, restrict system access based on roles, use secure file transfer protocols, and maintain access logs. All employees sign confidentiality agreements."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing based on per-record or per-form models. Pricing is customized based on project scope, volume, accuracy requirements, and turnaround time. We provide transparent costing with no hidden charges."
    },
    {
      question: "How do you maintain quality and accuracy?",
      answer: "We implement multi-level quality checks, defined SOPs for each project, error tracking with root cause analysis, and regular quality audits. We maintain defined accuracy benchmarks and KPIs for every project."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve Banks & NBFCs, Financial Services, CA & Audit Firms, E-commerce, Healthcare, Insurance, Real Estate, Education, Manufacturing, IT companies, and more."
    },
    {
      question: "How can I get started with PKREX?",
      answer: "Simply contact us through our website form, email, or phone. We'll discuss your requirements, sign an NDA, provide a sample task, and then begin bulk project execution with defined timelines."
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">
            Everything you need to know about our Non-Voice BPO services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-card ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{faq.question}</h3>
                <div className="faq-icon-wrapper">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="faq-contact">
          <p>Still have questions? <a href="#contact">Contact our support team</a></p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;