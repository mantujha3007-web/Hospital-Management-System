
import React from 'react';
import { Activity, Calendar, AlertTriangle, Phone, FileText } from 'lucide-react';

const Clinics = () => {
  // Mock Data: Simulated backend response for patients with missed interactions
  const patients = [
    { id: 1, name: "John Doe", lastVisit: "3 Months ago", missedRefills: 2, condition: "Hypertension", risk: "High" },
    { id: 2, name: "Sarah Smith", lastVisit: "1 Month ago", missedRefills: 0, condition: "Diabetes T2", risk: "Low" },
    { id: 3, name: "Mike Johnson", lastVisit: "6 Months ago", missedRefills: 4, condition: "Arrhythmia", risk: "High" },
    { id: 4, name: "Emma Wilson", lastVisit: "2 Months ago", missedRefills: 1, condition: "Asthma", risk: "Medium" },
  ];

  return (
    <div className="login-page-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <div>
            <h1>Clinical <span>Dashboard</span></h1>
            <p>Real-time patient risk assessment based on interaction gaps.</p>
          </div>
          <button className="btn" style={{width: 'auto', padding: '0 30px'}}>
            <FileText size={18} style={{marginRight: '10px'}}/> Generate Report
          </button>
        </div>

        {/* Quick Stats Row */}
        <div className="dashboard-grid">
          <div className="stat-card">
            <Activity color="#f1683a" />
            <h3>Critical Alerts</h3>
            <div className="value">12</div>
            <p style={{fontSize: '12px', color: '#ff4d4d'}}>+3 from yesterday</p>
          </div>
          <div className="stat-card">
            <Calendar color="#f1683a" />
            <h3>Missed Appointments</h3>
            <div className="value">34</div>
          </div>
          <div className="stat-card">
            <AlertTriangle color="#f1683a" />
            <h3>Medication Non-Adherence</h3>
            <div className="value">18%</div>
          </div>
        </div>

        {/* Patient Risk Table */}
        <h3>High Priority Intervention List</h3>
        <table className="glass-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Condition</th>
              <th>Last Interaction</th>
              <th>Missed Meds</th>
              <th>Risk Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.condition}</td>
                <td>{p.lastVisit}</td>
                <td>{p.missedRefills}x</td>
                <td>
                  <span className={`risk-badge risk-${p.risk.toLowerCase()}`}>
                    {p.risk.toUpperCase()}
                  </span>
                </td>
                <td>
                  <button className="btn" style={{height: '35px', fontSize: '12px', marginTop:0}}>
                    <Phone size={14} /> Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clinics;