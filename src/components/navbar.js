// src/components/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className='nav-items'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
