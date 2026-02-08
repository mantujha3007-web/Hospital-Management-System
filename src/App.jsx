import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Login from './components/Login';
import Chatbot from './components/Chatbot';
import Payment from './components/Payment';

// Original Pages
import MiddlePage from './pages/MiddlePage';
import Contact from './pages/Contact';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VisualDesign from './pages/VisualDesign';
import Photography from './pages/Photography';
import Conservation from './pages/Conservation';

// Healthcare & Hackathon Pages
import NearbyHospitals from './pages/NearbyHospitals';
import Clinics from './pages/Clinics';
import Insurers from './pages/Insurers';
// import PublicHealth from './pages/PublicHealth';
import EarlyDetection from './pages/Earlydectection';
import DietPlan from './pages/DietPlan';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

function App() {
  return (
    <BrowserRouter basename="/Hospital-Management-System">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/login">Login</Link>
          <Link to="/payment">Payment</Link>
          
          {/* Healthcare & Hackathon Links */}
          <Link to="/find-care">Find Care</Link> 
          <Link to="/earlydetection">Early-Detection</Link>
          <Link to="/diet-plan">Diet-Plan</Link>
          <Link to="/clinics">Clinics</Link>
          <Link to="/insurers">Insurers</Link>
          {/* <Link to="/public-health">Public Health</Link> */}
        </nav>
      </header>

      
      <Routes path="/" element={<MiddlePage />}>
        {/* Basic Routes */}
        <Route path="/" element={<MiddlePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />

        {/* Photography & Design Routes */}
        <Route path="/visual-design" element={<VisualDesign />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/conservation" element={<Conservation />} />

        {/* Healthcare & Hackathon Routes */}
        <Route path="/earlydetection" element={<EarlyDetection />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        <Route path="/find-care" element={<NearbyHospitals />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/insurers" element={<Insurers />} />
        {/* <Route path="/public-health" element={<PublicHealth />} /> */}
      </Routes>

      {/* Floating AI Chatbot */}
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;