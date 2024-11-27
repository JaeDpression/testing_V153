import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DineIn.css'; // Import the CSS file for styling

const DineIn = () => {
  const foodImages = [
    'https://keatseats.com/wp-content/uploads/2021/12/DSC_9151.jpg', 
    'https://www.thespruceeats.com/thmb/H0YjdoMIhz0VqvbQskQYq3VWnqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg', 
    'https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/612f9b601fd550178b663597-df1c5756.jpg', 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true); 

  // Function to go to the next image
  const nextImage = () => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === foodImages.length - 1 ? 0 : prevIndex + 1
      );
      setShowImage(true);
    }, 300);
  };

  // Function to go to the previous image
  const previousImage = () => {
    setShowImage(false); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? foodImages.length - 1 : prevIndex - 1
      );
      setShowImage(true); 
    }, 300);
  };

  // Automatically move to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures it runs once

  return (
    <div className="slider-container">
      <h1>Food Showcase</h1>
      <p className="food-intro"> 
      This cuisine typically includes dishes crafted by skilled chefs, 
      emphasizing seasonal produce, unique flavor combinations, and artistic plating to create an elevated dining experience for guests.
      </p>
      <div className="slider">
        <button onClick={previousImage} className="slider-button">
          Previous
        </button>
        <CSSTransition
          in={showImage}
          key={foodImages[currentIndex]}
          timeout={300}
          classNames="fade"
        >
          <img
            src={foodImages[currentIndex]}
            alt="Food"
            className="slider-image"
          />
        </CSSTransition>
        <button onClick={nextImage} className="slider-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default DineIn;
