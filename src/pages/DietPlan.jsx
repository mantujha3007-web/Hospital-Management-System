import React, { useState } from 'react';
import { Apple, Activity, Search, ClipboardList } from 'lucide-react';

const DietPlan = () => {
  const [data, setData] = useState({ condition: '', symptoms: '' });
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const getDietAdvice = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const prompt = `Act as a clinical nutritionist. Suggest a healthy diet plan for a patient with the condition: ${data.condition} and symptoms: ${data.symptoms}. Provide breakfast, lunch, and dinner ideas.`;

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt }),
      });
      const result = await response.json();
      setRecommendation(result.reply);
    } catch (error) {
      setRecommendation("Could not reach the medical AI server.");
    }
    setLoading(false);
  };

  return (
    <div className="healthcare-page-container" style={{ paddingTop: '100px' }}>
      <main className="middle-content">
        <section className="info-section">
          <h1>Nutritional <span>Guidance</span></h1>
          <p>Get AI-powered diet plans based on clinical conditions.</p>
        </section>

        <div className="contact-wrapper" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
          {/* Input Form */}
          <div className="contact-form-card">
            <form onSubmit={getDietAdvice}>
              <div className="contact-input-box">
                <input 
                  type="text" 
                  placeholder="Disease (e.g., Diabetes, Hypertension)" 
                  onChange={(e) => setData({...data, condition: e.target.value})}
                  required 
                />
              </div>
              <div className="contact-input-box">
                <textarea 
                  placeholder="Current Symptoms" 
                  rows="4"
                  onChange={(e) => setData({...data, symptoms: e.target.value})}
                  required 
                ></textarea>
              </div>
              <button type="submit" className="contact-btn" disabled={loading}>
                {loading ? "Analyzing..." : "Generate Diet Plan"} <Apple size={18} />
              </button>
            </form>
          </div>

          {/* AI Result Area */}
          <div className="feature-card" style={{ minHeight: '300px' }}>
            <h3><ClipboardList color="#f1683a" /> Personalized Plan</h3>
            <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
              {recommendation || "Enter details to see your suggested diet plan here..."}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DietPlan;