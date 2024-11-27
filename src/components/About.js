import React from 'react';
import './About.css'; // External CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="transparent-box">
          <h1>About R.A Hotel Services</h1>
          <p>
            Discover the story behind one of the most prestigious hotels in the city. At R.A Hotel Services, we provide more than just accommodation – we offer an unforgettable experience that blends luxury, comfort, and top-tier service.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="transparent-box">
          <h2>Our Journey</h2>
          <p>
            Established in 2010, R.A Hotel Services began as a boutique hotel nestled in the heart of the city. Over the years, we have transformed into a destination known for elegance, hospitality, and personalized services. Every guest is treated to the perfect balance of modern amenities and historic charm.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="transparent-box">
          <h2>Our Mission and Values</h2>
          <p>
            Our mission is simple: to create a world where comfort and luxury coexist, ensuring every guest feels at home. We believe in the values of integrity, hospitality, and environmental responsibility. Every decision we make reflects our commitment to providing exceptional service and sustainable practices.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="transparent-box">
          <h2>Meet Our Team</h2>
          <p>
            The heart of R.A Hotel Services lies in our dedicated team. From the warm welcome at reception to the meticulous attention of housekeeping, each member of our staff is committed to making your stay exceptional.
          </p>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="transparent-box">
          <h2>Our Philosophy</h2>
          <p>
            At R.A Hotel Services, we understand that each guest has unique needs. That’s why we go the extra mile to provide customized experiences. Whether you're here for business, leisure, or a special occasion, our staff will tailor every detail to make your stay extraordinary.
          </p>
        </div>
      </section>

      <section className="about-testimonials">
        <div className="transparent-box">
          <h2>What Our Guests Say</h2>
          <p>
            "An oasis of comfort in the heart of the city. The service was impeccable, and every detail was carefully crafted to enhance our stay. Highly recommend!" – John D., recent guest.
          </p>
          <p>
            "From the moment we checked in, we felt at home. The staff went above and beyond to make our anniversary special. We can’t wait to come back!" – Sarah W., frequent visitor.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
