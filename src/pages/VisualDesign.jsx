import React from 'react';
import { Palette, PenTool, Layout } from 'lucide-react';

const VisualDesign = () => {
  return (
    <div className="design-page-container" style={{ paddingTop: '100px' }}>
      <div className="middle-content">
        <section className="info-section">
          <h1>Visual <span>Design</span></h1>
          <p>Where nature's symmetry meets digital precision.</p>
        </section>

        <div className="features-grid">
          <div className="feature-card">
            <Palette color="#f1683a" size={30} />
            <h3>Color Theory</h3>
            <p>Using organic palettes extracted from wildlife photography.</p>
          </div>
          <div className="feature-card">
            <Layout color="#f1683a" size={30} />
            <h3>UI/UX Layouts</h3>
            <p>Glassmorphism and immersive scrolling for high-end web experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualDesign