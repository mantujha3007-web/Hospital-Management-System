import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, User, Mail, Lock } from 'lucide-react';
import '../components/Login.css'; // Reusing your Login styles

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock Registration Logic
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
      navigate('/login'); // Redirect to login after successful signup
    }, 2000);
  };

  return (
    <div className="login-page-container">
      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          
          <div className="input-box">
            <input type="text" placeholder="Full Name" required disabled={isLoading} />
            <User className="icon-inside" size={18} />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email Address" required disabled={isLoading} />
            <Mail className="icon-inside" size={18} />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Create Password" required disabled={isLoading} />
            <Lock className="icon-inside" size={18} />
          </div>

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? (
              <span className="loader-container">
                <Loader2 className="spinner" size={20} /> Creating Account...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>

          <div className="register-link">
            <p>
              Already have an account? <a href="/login" onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;