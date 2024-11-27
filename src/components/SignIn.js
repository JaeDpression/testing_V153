// src/components/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // External CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up
  const [name, setName] = useState(''); // State for name in Sign Up

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      try {
        const response = await fetch('http://localhost:5000/api/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }), // Ensure these fields are correct
        });

        const data = await response.json();
        if (response.ok) {
          setIsLoggedIn(true);
          console.log('Login successful:', data);
          // You can store the token in localStorage or state if needed
        } else {
          setError(data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Account created:', data);
          setIsSignUp(false); // Close the signup form after creation
        } else {
          setError(data.message || 'Sign up failed. Please try again.');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="signin-container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <div>
          <h1>
            <FontAwesomeIcon icon={faUser } /> {isSignUp ? 'Create an Account' : 'Sign In to Your Account'}
          </h1>
          <p>{isSignUp ? 'Join us for a personalized hotel experience.' : 'Access your personalized hotel experience by logging into your account.'}</p>
          
          <form onSubmit={isSignUp ? handleSignUp : handleSubmit} className="signin-form">
            {error && <p className="error">{error}</p>}
            
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            
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
              <label htmlFor="password ">Password</label>
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
            
            <button type="submit" className="submit-button">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          
          <p>
            {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}
            <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignIn;