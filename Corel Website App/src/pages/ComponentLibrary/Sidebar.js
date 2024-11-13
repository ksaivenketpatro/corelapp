// src/pages/ComponentLibrary/Sidebar.js
import React from 'react';

const Sidebar = ({ setSelectedContent }) => {
  return (
    <aside className="sidebar">
      <button onClick={() => setSelectedContent("home")}>Search</button>
      <button onClick={() => setSelectedContent("compRequest")}>Request</button>
      <button onClick={() => setSelectedContent("compForm")}>Comp Form</button> {/* New Button */}
    </aside>
  );
};

export default Sidebar;
