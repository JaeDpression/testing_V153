import React from 'react';
import './BookNow.css'; // Assuming an external CSS file for better styling

const BookNow = () => {
  return (
    <div className="book-now-container">
      <h1 className="section-title">Book Your Stay</h1>
      <p className="section-subtitle">Reserve your room today and enjoy a luxurious experience at R.A Hotel Services.</p>
      
      <form className="booking-form">
        {/* Check-in Date */}
        <div className="form-group">
          <label htmlFor="checkin">Check-in Date:</label>
          <input 
            type="date" 
            id="checkin" 
            name="checkin" 
            required
          />
        </div>
        
        {/* Check-out Date */}
        <div className="form-group">
          <label htmlFor="checkout">Check-out Date:</label>
          <input 
            type="date" 
            id="checkout" 
            name="checkout" 
            required
          />
        </div>
        
        {/* Number of Guests */}
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input 
            type="number" 
            id="guests" 
            name="guests" 
            min="1" 
            placeholder="1"
            required
          />
        </div>
        
        {/* Room Type */}
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select id="roomType" name="roomType" required>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Luxury Suite</option>
          </select>
        </div>
        
        {/* Book Now Button */}
        <button type="submit" className="book-now-btn">Book Now</button>
      </form>
    </div>
  );
};

export default BookNow;
