// src/pages/ComponentLibrary/Sidebar/RequestEngine.js
import React from 'react';
import { FaTools } from 'react-icons/fa';
import './RequestEngine.css';

function RequestEngine() {
  return (
    <div className="under-construction">
      <FaTools size={50} className="construction-icon" />
      <h2>Request Engine Under Construction</h2>
      <p>We're building a better request system for you!</p>
    </div>
  );
}

export default RequestEngine;