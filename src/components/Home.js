import React from 'react';
import hotelImage from '../assets/images/room1.png';
import './Home.css'; // Assuming external CSS for better structure

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img className="hero-image" src={hotelImage} alt="R.A Hotel Services" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1 className="hero-title">Welcome to R.A Hotel Services</h1>
          <p className="hero-subtitle">
            Where luxury meets comfort in the heart of the city. Whether you're visiting for business or leisure, our hotel offers a tranquil escape with modern amenities and a personal touch.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">Our Story</h2>
        <div className="about-content">
          <div className="history">
            <h3 className="subheading">Our History</h3>
            <p className="text">
              Established in 2010, R.A Hotel Services has been a pillar of elegance and hospitality for over 10 years. Originally a boutique hotel, it was transformed into a luxurious retreat while maintaining its historic charm.
            </p>
          </div>
          <div className="mission">
            <h3 className="subheading">Our Mission and Values</h3>
            <p className="text">
              Our mission is to provide each guest with an unforgettable experience by blending the warmth of personalized service with the comfort of world-class accommodations. At R.A Hotel Services, we believe in going above and beyond to ensure every stay is memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">What Sets Us Apart</h2>
        <div className="features-grid">
          <div className="feature">
            <h3 className="subheading">Personalized Service</h3>
            <p className="text">Our staff is dedicated to providing exceptional service tailored to your needs.</p>
          </div>
          <div className="feature">
            <h3 className="subheading">Luxurious Amenities</h3>
            <p className="text">Enjoy our state-of-the-art fitness center, rooftop pool, and gourmet restaurant.</p>
          </div>
          <div className="feature">
            <h3 className="subheading">Sustainable Practices</h3>
            <p className="text">We're committed to reducing our environmental footprint through eco-friendly initiatives.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
