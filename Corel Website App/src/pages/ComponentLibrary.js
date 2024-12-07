import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './ComponentLibrary/Sidebar';
import './ComponentLibrary.css'; // Correct path based on your structure

function ComponentLibrary() {
  return (
    <div className="component-library">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* This renders the child routes like searchengine, requestengine, and productform */}
      </div>
    </div>
  );
}

export default ComponentLibrary;
