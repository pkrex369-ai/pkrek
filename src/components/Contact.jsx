import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./styles/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Handle submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch(
        "https://pkrek-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      console.log(data);

      if (data?.status === true) {

        alert("✅ Message sent successfully! We'll get back to you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });

      } else {

        alert(data?.message || "❌ Failed to send message");

      }

    } catch (error) {

      console.error("Submit Error:", error);

      alert("❌ Server not reachable. Please try again later.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">

          <span className="heading-tag">
            Get in Touch
          </span>

          <h2 className="heading-title">
            Got <span className="highlight">Questions?</span>
          </h2>

          <div className="heading-divider">
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
          </div>

          <p className="heading-subtitle">
            Send us a message, we will respond within 24 hours.
          </p>

        </div>

        <div className="contact-cards">

          {/* LEFT CARD - MAP ONLY */}
          <div className="contact-map-card">

            <div className="map-header">
              <h3>Our Location</h3>
              <div className="header-underline"></div>
            </div>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789!2d80.162345!3d13.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261234567890%3A0x1234567890abcdef!2s6%2C%20Hospital%20Rd%2C%20Cholapuram%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600053!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  borderRadius: "16px"
                }}
                loading="lazy"
                title="PKREX Office Location"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-address">
              <FaMapMarkerAlt className="address-icon" />
              <span>6, Hospital Road, Cholapuram, Ambattur, Chennai - 600053</span>
            </div>

          </div>

          {/* RIGHT CARD - CONTACT FORM */}
          <div className="contact-form-wrapper">

            <div className="form-header">
              <h3>Send us a <span className="highlight">Message</span></h3>
              <p>We'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input form-input-full"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              />

              <button
                type="submit"
                disabled={loading}
                className="submit-btn"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;