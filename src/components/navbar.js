// src/components/Navbar.tsx

import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
