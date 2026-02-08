import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Send, CheckCircle } from 'lucide-react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom'; // 1. Import Link

const Home = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the email to a database
    setEmailSubmitted(true);
    
    // Optional: Reset after 5 seconds
    setTimeout(() => setEmailSubmitted(false), 5000);
  };

  return (
    <div className="home-container">
      {/* The full-screen slider */}
      <Carousel />

      {/* MIDDLE CONTENT: This appears as you scroll down */}
      <main className="middle-content">
        {/* Feature Cards Section */}
        <section className="info-section">
          <h2>Explore the Features of Healthy-fy</h2>
          <p>Dive deep into the world of nature and design.</p>
        </section>

        <section className="features-grid">
          <div className="feature-card">
            <div className="icon">📸</div>
            <h3><Link to="/photography">Skin Disease Detection via Photograph</Link></h3>
            <p>Send your clear photo.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🌿</div>
            <h3><Link to="/conservation">Conservation</Link></h3>
            <p>Parameter of AQI and location cleanliness</p>
          </div>
          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3> <Link to="/visual-design">Connect to your Fellow patients </Link></h3>
            <p>Connecting to people facing similar disease. Providing emotional supports </p>
          </div>
        </section>

        {/* New Services Section */}
        <section className="services-container">
          <div className="service-content">
            <h2>Our Premium Services</h2>
            <div className="service-list">
              <div className="service-item">
                <span>01</span>
                <div>
                  <h4>Personal Doctors </h4>
                  <p>Join our experts doctor from world's most remote locations.</p>
                </div>
              </div>
              <div className="service-item">
                <span>02</span>
                <div>
                  <h4>HIGH END DEVICES</h4>
                  <p>We provide high-end devices to keep your health updated. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER: At the very bottom */}
      <footer className="main-footer">
        <div className="footer-container">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col">
            <h3 className="footer-logo">Healthy <span>-fy</span></h3>
            <p className="footer-desc">
              Dedicated to improve patient health and provides benificial medication.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" aria-label="Facebook" target='_blank'><Facebook size={20} /></a>
              <a href="https://www.instagram.com/?hl=en" target='_blank' aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://x.com/" target='_blank' aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://in.linkedin.com/" target='_blank' aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links & Support Columns (Keep as before) */}

          {/* Column 4: Newsletter with State Logic */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            {!emailSubmitted ? (
              <>
                <p>Get the latest updates delivered.</p>
                <form className="newsletter-box" onSubmit={handleNewsletterSubmit}>
                  <input type="email" placeholder="Email address" required />
                  <button type="submit"><Send size={18} /></button>
                </form>
              </>
            ) : (
              <div className="thanks-message">
                <CheckCircle size={24} color="#f1683a" />
                <p>Thanks for subscribing!</p>
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Healthy-fy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;