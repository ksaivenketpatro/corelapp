import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    // Validate form data
    if (!formData.username || !formData.password || (activeTab === 'signup' && !formData.email)) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const endpoint = activeTab === 'login' ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (activeTab === 'signup') {
          alert('Registration successful! Please login.');
          setActiveTab('login');
          setFormData({ username: '', password: '', email: '' }); // Clear all fields
        } else {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
          onLogin(data);
          onClose();
        }
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Auth error:', error);
      setError('An error occurred while processing your request');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              setError('');
              setFormData({ username: '', password: '', email: '' });
            }}
          >
            Login
          </button>
          <button 
            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('signup');
              setError('');
              setFormData({ username: '', password: '', email: '' });
            }}
          >
            Sign Up
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          
          {activeTab === 'signup' && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          )}
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="submit-button">
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;