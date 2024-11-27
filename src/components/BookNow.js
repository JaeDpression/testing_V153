import React, { useState } from 'react';
import './BookNow.css'; // Assuming an external CSS file for better styling

const BookNow = () => {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('single');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate input if needed
    if (!checkin || !checkout || guests < 1) {
      setError('Please fill in all fields correctly.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checkin, checkout, guests, roomType }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess('Booking successful!');
        console.log('Booking data:', data);
        // You can reset the form here if needed
        setCheckin('');
        setCheckout('');
        setGuests(1);
        setRoomType('single');
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="book-now-container">
      <h1 className="section-title">Book Your Stay</h1>
      <p className="section-subtitle">Reserve your room today and enjoy a luxurious experience at R.A Hotel Services.</p>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Check-in Date */}
        <div className="form-group">
          <label htmlFor="checkin">Check-in Date:</label>
          <input 
            type="date" 
            id="checkin" 
            name="checkin" 
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
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
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
          />
        </div>
        
        {/* Number of Guests */}
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input 
            type="number" 
            id="guests" 
            name="guests" // Corrected this line
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))} // Convert to number
            min="1" 
            required
          />
        </div>
        
        {/* Room Type */}
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select 
            id="roomType" 
            name="roomType" 
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Luxury Suite</option>
          </select>
        </div>
        
        {/* Book Now Button */}
        <button type="submit" className="book-now-btn">Book Now</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default BookNow;