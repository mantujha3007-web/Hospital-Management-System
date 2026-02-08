import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import '../components/Login.css'; // Reusing your Login styles

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Mock logic: Simulate sending a reset email
    console.log("Sending reset link to:", email);
    setIsSent(true);
  };

  return (
    <div className="login-page-container">
      <div className="wrapper">
        {!isSent ? (
          <form onSubmit={handleReset}>
            <h1>Reset <span>Password</span></h1>
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '14px', opacity: '0.8' }}>
              Enter your email and we'll send you a link to get back into your account.
            </p>
            
            <div className="input-box">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="icon-inside" size={18} />
            </div>

            <button type="submit" className="btn">Send Reset Link</button>

            <div className="register-link">
              <p>
                <Link to="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <ArrowLeft size={16} /> Back to Login
                </Link>
              </p>
            </div>
          </form>
        ) : (
          <div className="contact-success" style={{ textAlign: 'center' }}>
            <CheckCircle size={60} color="#f1683a" />
            <h2 style={{ marginTop: '20px' }}>Check Your Email</h2>
            <p style={{ margin: '15px 0', opacity: '0.8' }}>
              We've sent a password reset link to <strong>{email}</strong>.
            </p>
            <button className="btn" onClick={() => navigate('/login')}>Return to Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;