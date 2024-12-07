// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Importing the home icon from react-icons
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      {/* Left-aligned Home icon */}
      <Link to="/" className="home-button">
        <FaHome size={24} /> {/* Home icon with size */}
      </Link>

      {/* Center-aligned navigation tabs */}
      <div className="tabs">
        {['Component Library', 'Sys Eng', 'Mfg', 'Stores', 'Purchase', 'Time Sheet'].map((tab) => (
          <Link
            key={tab}
            to={`/${tab.replace(/\s+/g, '').toLowerCase()}`}
            className={`tab ${location.pathname.includes(tab.replace(/\s+/g, '').toLowerCase()) ? 'active' : ''}`}
          >
            {tab}
          </Link>
        ))}
      </div>

      {/* Right-aligned version text */}
      <div className="version-text">
        CorelApp 1.0
      </div>
    </div>
  );
}

export default Header;
