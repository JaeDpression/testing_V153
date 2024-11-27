import React from 'react';
import singleRoom from '../assets/images/single-room.jpg'; // Example image for Single Room
import doubleRoom from '../assets/images/double-room.jpg'; // Example image for Double Room
import suiteRoom from '../assets/images/luxury-suite.jpg'; // Example image for Luxury Suite
import './Gallery.css'; // External CSS for styling

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Hotel Gallery</h1>
      <p className="gallery-intro">
        Explore our beautifully designed rooms, each tailored for ultimate comfort and luxury. From cozy Single Rooms to the spacious Luxury Suite, we offer the perfect setting for both relaxation and business travel.
      </p>

      <div className="gallery-grid">
        {/* Single Room */}
        <div className="gallery-item">
          <img src={singleRoom} alt="Single Room" className="gallery-image" />
          <div className="gallery-caption">
            <h3>Single Room</h3>
            <p>
              Ideal for solo travelers, our Single Rooms offer a cozy atmosphere with modern amenities, perfect for unwinding after a busy day.
            </p>
          </div>
        </div>

        {/* Double Room */}
        <div className="gallery-item">
          <img src={doubleRoom} alt="Double Room" className="gallery-image" />
          <div className="gallery-caption">
            <h3>Double Room</h3>
            <p>
              Spacious and elegantly designed, our Double Rooms provide the perfect escape for couples or friends, with a touch of luxury.
            </p>
          </div>
        </div>

        {/* Luxury Suite */}
        <div className="gallery-item">
          <img src={suiteRoom} alt="Luxury Suite" className="gallery-image" />
          <div className="gallery-caption">
            <h3>Luxury Suite</h3>
            <p>
              Experience the height of luxury in our suite, complete with a private lounge, panoramic views, and premium services for a truly unforgettable stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
