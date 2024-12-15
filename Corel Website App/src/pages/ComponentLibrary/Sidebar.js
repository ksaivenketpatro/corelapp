import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaCogs, FaShoppingCart } from 'react-icons/fa'; // Changed FaBox to FaShoppingCart
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link 
        to="/componentlibrary/searchengine"
        className={`sidebar-item ${location.pathname === '/componentlibrary/searchengine' ? 'active' : ''}`}
        aria-label="Search Engine"
      >
        <FaSearch size={20} />
        Search
      </Link>
      <Link 
        to="/componentlibrary/requestengine"
        className={`sidebar-item ${location.pathname === '/componentlibrary/requestengine' ? 'active' : ''}`}
        aria-label="Request Engine"
      >
        <FaCogs size={20} />
        Request
      </Link>
      <Link 
        to="/componentlibrary/productform"
        className={`sidebar-item ${location.pathname === '/componentlibrary/productform' ? 'active' : ''}`}
        aria-label="Order Page"
      >
        <FaShoppingCart size={20} />
        Orders
      </Link>
    </div>
  );
}

export default Sidebar;