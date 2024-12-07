// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaCogs, FaBox } from 'react-icons/fa'; // Importing icons for the sidebar items
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link 
        to="/componentlibrary/searchengine"  // Make sure to include the full path
        className={`sidebar-item ${location.pathname === '/componentlibrary/searchengine' ? 'active' : ''}`}
        aria-label="Search Engine"
      >
        <FaSearch size={20} /> {/* Search Engine Icon */}
        Search Engine
      </Link>
      <Link 
        to="/componentlibrary/requestengine"  // Make sure to include the full path
        className={`sidebar-item ${location.pathname === '/componentlibrary/requestengine' ? 'active' : ''}`}
        aria-label="Request Engine"
      >
        <FaCogs size={20} /> {/* Request Engine Icon */}
        Request Engine
      </Link>
      <Link 
        to="/componentlibrary/productform"  // Make sure to include the full path
        className={`sidebar-item ${location.pathname === '/componentlibrary/productform' ? 'active' : ''}`}
        aria-label="Product Form"
      >
        <FaBox size={20} /> {/* Product Form Icon */}
        Product Form
      </Link>
    </div>
  );
}

export default Sidebar;
