// src/pages/ComponentLibrary/ComponentLibrary.js
import React, { useState } from 'react';
import './ComponentLibrary.css';

function ComponentLibrary() {
  const [selectedContent, setSelectedContent] = useState("home");

  return (
    <div className="component-library">
      <aside className="sidebar">
        <button onClick={() => setSelectedContent("home")}>Search</button>
        <button onClick={() => setSelectedContent("compRequest")}>Request</button>
      </aside>

      <div className="main-content">
        {selectedContent === "home" && (
          <div>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <p>Welcome to the Component Library Home Page.</p>
          </div>
        )}
        {selectedContent === "compRequest" && <p>Here you can make a component request.</p>}
        
      </div>
    </div>
  );
}

export default ComponentLibrary;
