import React, { useState } from 'react';
import './SignIn.css'; // External CSS for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      // Handle form submission, e.g., API call
      console.log('Form submitted');
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In to Your Account</h1>
      <p>Access your personalized hotel experience by logging into your account.</p>
      
      <form onSubmit={handleSubmit} className="signin-form">
        {error && <p className="error">{error}</p>}
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="signin-button">Sign In</button>
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
