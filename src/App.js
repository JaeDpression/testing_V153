import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import DineIn from './components/DineIn';
import room1 from './assets/images/room1.png';
import './App.css';
import Background from './components/Background';
import SignIn from './components/SignIn';
import Gallery from './components/Gallery';
import BookNow from './components/BookNow';

const App = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <div className="app-container">
        <Background />
        <nav className="nav-bar">
          <div className="nav-logo">R.A HOTEL SERVICES</div>
          <div className="nav-sign-in">
            <Link to="/signin" onClick={() => handleLinkClick('signin')}>
              <i className="fas fa-sign-in-alt" /> SIGN IN
            </Link>
          </div>
        </nav>
        <nav className="nav-bar-bottom">
          <ul className="nav-links-bottom">
            <li className="nav-link-bottom">
              <Link to="/" onClick={() => handleLinkClick('home')}>
                <i className="fas fa-home" /> HOME
              </Link>
            </li>
            <li className="nav-link-bottom">
              <Link to="/about" onClick={() => handleLinkClick('about')}>
                <i className="fas fa-info-circle" /> ABOUT
              </Link>
            </li>
            <li className="nav-link-bottom">
              <Link to="/contact" onClick={() => handleLinkClick('contact')}>
                <i className="fas fa-envelope" /> CONTACT
              </Link>
            </li>
            <li className="nav-link-bottom">
              <Link to="/dinein" onClick={() => handleLinkClick('dinein')}>  
                <i className="fas fa-utensils" /> DINE IN
              </Link>
            </li>
            <li className="nav-link-bottom">
              <Link to="/gallery" onClick={() => handleLinkClick('gallery')}>
                <i className="fas fa-images" /> GALLERY/PHOTOS
              </Link>
            </li>
            <li className="nav-link-bottom">
              <Link to="/booknow" onClick={() => handleLinkClick('booknow')}>
                <i className="fas fa-book" /> BOOK NOW
              </Link>
            </li>
          </ul>
        </nav>

        <main className="content-area" style={{ marginTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dinein" element={<DineIn />} />  
            <Route path="/signin" element={<SignIn />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booknow" element={<BookNow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
