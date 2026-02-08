/// insurers 

import React from 'react';
import { DollarSign, TrendingUp, ShieldAlert, PieChart } from 'lucide-react';

const Insurers = () => {
  return (
    <div className="login-page-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1>Actuarial <span>Risk View</span></h1>
          <p>Financial impact analysis of missed healthcare interactions.</p>
        </div>

        <div className="dashboard-grid">
          <div className="stat-card">
            <DollarSign color="#f1683a" />
            <h3>Projected Cost (Quarter)</h3>
            <div className="value">$4.2M</div>
            <p>Due to preventable ER visits</p>
          </div>
          <div className="stat-card">
            <ShieldAlert color="#f1683a" />
            <h3>Claim Gaps Detected</h3>
            <div className="value">850</div>
            <p>Patients with gaps {'>'} 60 days</p>
          </div>
          <div className="stat-card">
            <TrendingUp color="#f1683a" />
            <h3>Risk Adjustment Factor</h3>
            <div className="value">1.45</div>
            <p>0.2 increase vs last year</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Mock Chart Area 1 */}
          <div className="feature-card" style={{margin: 0}}>
            <h3><PieChart size={20} style={{marginRight:10}}/> Adherence vs. Cost</h3>
            <div style={{height: '200px', display: 'flex', alignItems: 'end', gap: '20px', padding: '20px 0'}}>
                {/* CSS Bar Chart Simulation */}
                <div style={{width: '20%', height: '40%', background: '#444', borderRadius:'5px 5px 0 0', position:'relative'}}>
                    <span style={{position:'absolute', bottom: '-25px', fontSize:'12px'}}>High Adh.</span>
                </div>
                <div style={{width: '20%', height: '60%', background: '#666', borderRadius:'5px 5px 0 0', position:'relative'}}>
                    <span style={{position:'absolute', bottom: '-25px', fontSize:'12px'}}>Med Adh.</span>
                </div>
                <div style={{width: '20%', height: '90%', background: '#f1683a', borderRadius:'5px 5px 0 0', position:'relative'}}>
                    <span style={{position:'absolute', bottom: '-25px', fontSize:'12px'}}>Low Adh.</span>
                </div>
            </div>
            <p style={{marginTop:'30px', fontSize:'13px', opacity: 0.7}}>
                Patients with low adherence (Orange) generate 2.5x higher long-term claims.
            </p>
          </div>

          {/* Actionable List */}
          <div className="feature-card" style={{margin: 0}}>
            <h3>Intervention Opportunities</h3>
            <ul style={{listStyle: 'none', padding: 0, marginTop: '20px'}}>
              <li style={{borderBottom: '1px solid #333', padding: '10px 0', display:'flex', justifyContent:'space-between'}}>
                <span>Chronic Kidney Disease Screening</span>
                <span style={{color:'#f1683a'}}>+120 Candidates</span>
              </li>
              <li style={{borderBottom: '1px solid #333', padding: '10px 0', display:'flex', justifyContent:'space-between'}}>
                <span>Post-Discharge Follow-up</span>
                <span style={{color:'#f1683a'}}>+45 Alerts</span>
              </li>
              <li style={{borderBottom: '1px solid #333', padding: '10px 0', display:'flex', justifyContent:'space-between'}}>
                <span>Statin Adherence Gaps</span>
                <span style={{color:'#f1683a'}}>+300 Candidates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurers;