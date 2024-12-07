import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="searchengine" className="sidebar-item">Search Engine</Link>
      <Link to="requestengine" className="sidebar-item">Request Engine</Link>
      <Link to="productform" className="sidebar-item">Product Form</Link>
    </div>
  );
}

export default Sidebar;