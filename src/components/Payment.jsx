import React from 'react';
import { CreditCard, Lock, Shield } from 'lucide-react';

const Payment = () => {
  return (
    <div className="login-page-container"> {/* Reusing your background/glass container */}
      <div className="wrapper">
        <form>
          <h1>Secure <span>Payment</span></h1>
          <div className="input-box">
            <input type="text" placeholder="Cardholder Name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Card Number" required />
            <CreditCard className="icon-inside" size={18} />
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className="input-box"><input type="text" placeholder="MM/YY" required /></div>
            <div className="input-box"><input type="password" placeholder="CVV" required /></div>
          </div>
          <button type="submit" className="btn">Pay Now</button>
          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', opacity: 0.6 }}>
            <Lock size={12} /> Encrypted Secure Checkout
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;