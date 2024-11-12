// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      {/* Left-aligned Home button */}
      <Link to="/" className="home-button">Home</Link>

      {/* Center-aligned navigation tabs */}
      <div className="tabs">
        <Link to="/component-library" className={location.pathname === "/component-library" ? "active" : ""}>
          Component Library
        </Link>
        <Link to="/sys-eng" className={location.pathname === "/sys-eng" ? "active" : ""}>
          Sys Eng
        </Link>
        <Link to="/mfg" className={location.pathname === "/mfg" ? "active" : ""}>
          Mfg
        </Link>
        <Link to="/stores" className={location.pathname === "/stores" ? "active" : ""}>
          Stores
        </Link>
        <Link to="/purchase" className={location.pathname === "/purchase" ? "active" : ""}>
          Purchase
        </Link>
        <Link to="/time-sheet" className={location.pathname === "/time-sheet" ? "active" : ""}>
          Time Sheet
        </Link>
      </div>

      {/* Right-aligned version text */}
      <div className="version-text">CorelApp 1.0</div>
    </header>
  );
}

export default Header;
