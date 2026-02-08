import React from 'react';
import { Activity, AlertTriangle, Users, Database } from 'lucide-react';

const EarlyDetection = () => {
  return (
    <div className="healthcare-page-container" style={{ paddingTop: '100px' }}>
      <main className="middle-content">
        <section className="info-section">
          <h1>Healthcare & <span>Sustainability</span></h1>
          <h2>Early Disease Detection</h2>
          <p>Analyzing missed interactions to identify silent health risks.</p>
        </section>

        <section className="features-grid">
          {/* Problem Statement Card */}
          <div className="feature-card">
            <div className="icon"><AlertTriangle color="#f1683a" size={40} /></div>
            <h3>The Problem</h3>
            <p>People often skip follow-ups, screenings, and medications silently, leading to undetected health complications.</p>
          </div>

          {/* Build/Technical Card */}
          <div className="feature-card">
            <div className="icon"><Database color="#f1683a" size={40} /></div>
            <h3>The Build</h3>
            <p>Risk detection platform utilizing appointment gaps, pharmacy data, and wearable trends for predictive analysis.</p>
          </div>

          {/* Users/Stakeholders Card */}
          <div className="feature-card">
            <div className="icon"><Users color="#f1683a" size={40} /></div>
            <h3>Primary Users</h3>
            <p>Designed for clinics, insurers, and public health bodies to improve patient outcomes and sustainability.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EarlyDetection;