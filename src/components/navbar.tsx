import React from 'react';

interface NavProps {
  onNavClick: () => void;
}

const Navbar: React.FC<NavProps> = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <button onClick={onNavClick} className="menu-toggle"></button>
    </nav>
  );
};

export default Navbar;
