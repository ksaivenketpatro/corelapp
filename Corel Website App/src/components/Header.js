import React, { useState, useEffect } from 'react';  // Add useEffect
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Header.css';

function Header() {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Add useEffect to check for stored user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    // Store the entire user object
    localStorage.setItem('user', JSON.stringify(userData.user));
    setUser(userData.user);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');  // Also remove the token
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
            <FaUser /> Login
          </button>
        )}
      </div>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}  // Use the new handleLogin function
        />
      )}
    </div>
  );
}

export default Header;