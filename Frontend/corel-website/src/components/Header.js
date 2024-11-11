// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="tabs">
        <Link to="/">Home</Link>
        <Link to="/timesheet">Time Sheet</Link>
        <Link to="/comp-request">Comp. Request</Link>
        <Link to="/menus">Menus</Link>
      </div>
      <button className="login-btn">Log In</button>
    </header>
  );
}

export default Header;
