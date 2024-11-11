// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/timesheet">Time Sheet</Link></li>
        <li><Link to="/comp-request">Comp. Request</Link></li>
        <li><Link to="/menus">Menus</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
