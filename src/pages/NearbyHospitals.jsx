//// find care 


import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Shield, AlertCircle, Loader2 } from 'lucide-react';

const NearbyHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const findNearbyHospitals = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      try {
        // Backend API Call
        const response = await fetch(`http://localhost:5000/api/hospitals/nearby?lat=${lat}&long=${long}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch from server');
        }

        const data = await response.json();
        setHospitals(data); 
      } catch (err) {
        console.error("Error fetching hospitals:", err);
        setError("Could not connect to the Backend Server. Ensure 'node server.js' is running.");
      } finally {
        setLoading(false);
      }
    }, (geoError) => {
      console.error(geoError);
      setError("Location access denied. Please allow location permissions in your browser.");
      setLoading(false);
    });
  };

  // Run automatically on load
  useEffect(() => {
    findNearbyHospitals();
  }, []);

  return (
    // Reusing your global dashboard container for consistency
    <div className="dashboard-page-container" style={{ paddingTop: '100px' }}>
      <div className="dashboard-content">
        
        {/* Header Section matching other pages */}
        <section className="info-section">
          <h1>Emergency <span>Care Finder</span></h1>
          <p>Real-time availability of nearby trauma centers and hospitals.</p>
          
          <button className="btn" onClick={findNearbyHospitals} style={{marginTop:'20px', width: 'auto', padding: '10px 30px', display: 'flex', alignItems: 'center', gap: '10px', margin: '20px auto'}}>
             {loading ? <Loader2 className="spinner" size={18}/> : <Navigation size={18} />}
             {loading ? "Scanning Location..." : "Refresh Location"}
          </button>
        </section>

        {/* Error Message styled as a glass alert */}
        {error && (
            <div style={{
                background: 'rgba(255, 50, 50, 0.1)', 
                border: '1px solid rgba(255, 50, 50, 0.3)',
                padding: '20px', 
                borderRadius: '15px', 
                textAlign: 'center',
                color: '#ff6b6b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '30px'
            }}>
                <AlertCircle size={20} />
                {error}
            </div>
        )}

        {/* The Grid - Matches 'Insurers' and 'Clinics' layout */}
        <div className="features-grid">
          {hospitals.length > 0 ? (
            hospitals.map((hospital, index) => (
              <div className="feature-card" key={index} style={{textAlign:'left', position: 'relative', overflow: 'hidden'}}>
                
                {/* Decorative background glow */}
                <div style={{
                    position: 'absolute', top: '-20px', right: '-20px', 
                    width: '100px', height: '100px', 
                    background: '#f1683a', opacity: '0.1', 
                    borderRadius: '50%', filter: 'blur(40px)'
                }}></div>

                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: '15px'}}>
                    <h3 style={{fontSize: '1.4rem', margin: 0}}>{hospital.name}</h3>
                    <div style={{background: 'rgba(241, 104, 58, 0.2)', padding: '8px', borderRadius: '50%'}}>
                        <MapPin color="#f1683a" size={20} />
                    </div>
                </div>
                
                <p style={{opacity: 0.6, fontSize: '0.9rem', marginBottom:'20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
                   <Navigation size={12} /> 1.2 km away • Open 24 Hours
                </p>

                {/* Specialties Tags */}
                <div style={{display:'flex', flexWrap: 'wrap', gap:'8px', marginBottom:'20px'}}>
                    {hospital.specialties && hospital.specialties.map((spec, i) => (
                        <span key={i} style={{
                            fontSize:'11px', 
                            background:'rgba(255,255,255,0.05)', 
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding:'4px 10px', 
                            borderRadius:'20px',
                            color: '#ccc'
                        }}>
                            {spec}
                        </span>
                    ))}
                </div>

                {/* Footer Stats Row */}
                <div style={{
                    display:'flex', 
                    justifyContent:'space-between', 
                    background: 'rgba(0,0,0,0.3)', 
                    margin: '0 -30px -30px -30px', 
                    padding: '15px 30px',
                    borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <div style={{display:'flex', gap:'6px', alignItems:'center', fontSize:'13px', color: '#f1683a'}}>
                        <Clock size={14} /> 
                        Wait: <strong style={{color:'#fff'}}>{hospital.waitTimes || "15 min"}</strong>
                    </div>
                    <div style={{display:'flex', gap:'6px', alignItems:'center', fontSize:'13px', color: '#4ade80'}}>
                        <Shield size={14} /> 
                        <strong style={{color:'#fff'}}>Verified</strong>
                    </div>
                </div>
              </div>
            ))
          ) : (
             !loading && !error && (
                <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '50px', opacity: 0.5}}>
                    <MapPin size={40} style={{marginBottom: '10px'}} />
                    <p>No hospitals found nearby. Try increasing the search range.</p>
                </div>
             )
          )}
        </div>
      </div>
    </div>
  );
};

export default NearbyHospitals;