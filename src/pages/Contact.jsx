import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-wrapper">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h1>Get in <span>Touch</span></h1>
          <p>Have questions about our any-new features or guided expert Advice? We'd love to hear from you.</p>
          
          <div className="info-item">
            <MapPin color="#f1683a" size={28} />
            <div>
              <h4>Our Location</h4>
              <p>Thakur college of Engineering and Technology</p>
            </div>
          </div>

          <div className="info-item">
            <Phone color="#f1683a" size={28} />
            <div>
              <h4>Call Us</h4>
              <p>9326652937</p>
            </div>
          </div>

          <div className="info-item">
            <Mail color="#f1683a" size={28} />
            <div>
              <h4>Email Us</h4>
              <p>Healthy-fy@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Glass Form */}
        <div className="contact-form-card">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="contact-input-box">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="contact-input-box">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="contact-input-box">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="contact-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="contact-success">
              <CheckCircle size={60} color="#f1683a" />
              <h2>Thank You!</h2>
              <p>Your message has been caught. We will get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;