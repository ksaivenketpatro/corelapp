import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './ComponentLibrary/Sidebar';
import './ComponentLibrary.css';

function ComponentLibrary() {
  return (
    <div className="component-library">
      <Sidebar />
      <div className="component-library-content">
        <Outlet />
      </div>
    </div>
  );
}

export default ComponentLibrary;