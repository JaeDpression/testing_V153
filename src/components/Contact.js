import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: 'technical',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact/submit', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', issue: 'technical', message: '' });
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="content">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We are here to support our customers and ensure satisfaction with our service.</p>
      </div>
      
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="info-box">
            <div className="icon address-icon">
              {/* You can replace this placeholder with an actual icon component */}
            </div>
            <div className="text">
              <h3 className="info-title">Address</h3>
              <address>
                CIIT College of Arts and Technology<br />
                Kamuning Rd, Diliman, Quezon City, 1103 Metro Manila
              </address>
            </div>
          </div>
        </div>

        {/* Customer Support Form Section */}
        <div className="form-container">
          <h2 className="form-title">Customer Support</h2>
          <p className="form-subtitle">If you have any issues or questions, please fill out the form below:</p>

          <form onSubmit={handleSubmit} className="support-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name.." 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email.." 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="issue">Issue Type</label>
              <select 
                id="issue" 
                name="issue" 
                value={formData.issue}
                onChange={handleChange}
                required
              >
                <option value="technical">Technical Support</option>
                <option value="billing">Billing</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your issue or question..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;