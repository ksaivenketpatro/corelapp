import React, { useState, useEffect } from 'react';  // Added useEffect
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Add this useEffect to check for stored user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleTabClick = (path) => {
    if (!user) {
      setShowLoginModal(true);
      localStorage.setItem('attemptedPath', path);
      return;
    }
    navigate(path);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setShowDropdown(false);
    navigate('/');
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
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(`/${tab.replace(/\s+/g, '').toLowerCase()}`);
            }}
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
          onLogin={(userData) => {
            setUser(userData.user);  // Changed this line to use userData.user
            localStorage.setItem('user', JSON.stringify(userData.user));
            setShowLoginModal(false);
            const attemptedPath = localStorage.getItem('attemptedPath');
            if (attemptedPath) {
              navigate(attemptedPath);
              localStorage.removeItem('attemptedPath');
            }
          }}
        />
      )}
    </div>
  );
}

export default Header;