import React from 'react';
import { Camera, Eye, Download } from 'lucide-react';

const Photography = () => {
  const images = [
    { id: 1, src: 'images/image1.jpg', title: 'The Silent Predator' },
    { id: 2, src: 'images/image2.jpg', title: 'Morning Mist' },
    { id: 3, src: 'images/image3.jpg', title: 'Deep Sea Majesty' }
  ];

  return (
    <div className="photography-page-container" style={{ paddingTop: '100px' }}>
      <div className="middle-content">
        <section className="info-section">
          <h1>Wildlife <span>Gallery</span></h1>
          <p>Capturing the raw beauty of nature through our professional lens.</p>
        </section>

        <div className="features-grid">
          {images.map(img => (
            <div className="feature-card" key={img.id}>
              <img src={img.src} alt={img.title} style={{ width: '100%', borderRadius: '10px' }} />
              <h3 style={{ marginTop: '15px' }}>{img.title}</h3>
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <Eye size={18} color="#f1683a" />
                <Download size={18} color="#eee" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photography