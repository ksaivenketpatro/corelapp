import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Header.css';

function Header() {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setShowDropdown(false);
  };

  return (
    <div className="header">
      <Link to="/" className="home-button">
        <FaHome size={24} />
      </Link>

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

      <div className="user-section">
        {user ? (
          <div className="user-dropdown">
            <button 
              className="user-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaUser /> {user.username}
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button 
            className="login-button"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
        )}
      </div>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={(userData) => {
            setUser(userData);
            setShowLoginModal(false);
          }}
        />
      )}
    </div>
  );
}

export default Header;