import React from 'react';
import { ShieldCheck, Heart, Globe } from 'lucide-react';

const Conservation = () => {
  return (
    <div className="conservation-page-container" style={{ paddingTop: '100px' }}>
      <div className="middle-content">
        <section className="info-section">
          <h1>Nature <span>Conservation</span></h1>
          <p>Protecting the wild for future generations.</p>
        </section>

        <div className="feature-card" style={{ marginBottom: '30px' }}>
          <ShieldCheck size={40} color="#f1683a" />
          <h3>Anti-Poaching Initiatives</h3>
          <p>We fund and support local rangers in high-risk zones.</p>
        </div>

        <div className="feature-card">
          <Globe size={40} color="#f1683a" />
          <h3>Habitat Restoration</h3>
          <p>Reforestation projects that restore natural corridors for wildlife.</p>
        </div>
      </div>
    </div>
  );
};

export default Conservation