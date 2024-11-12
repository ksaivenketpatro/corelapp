// src/pages/ComponentLibrary/ComponentLibrary.js
import React, { useState } from 'react';
import './ComponentLibrary.css';
import Sidebar from './Sidebar.js';
import Table from './Table.js';

function ComponentLibrary() {
  const [selectedContent, setSelectedContent] = useState("home");
  const [searchQuery, setSearchQuery] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleSearch = () => {
    // Show the table after clicking search
    setShowTable(true);
  };

  const handleSidebarSelect = (content) => {
    setSelectedContent(content);

    // Reset search query and hide table if navigating to "Search" content
    if (content === "home") {
      setSearchQuery('');
      setShowTable(false);
    }
  };

  return (
    <div className="component-library">
      <Sidebar setSelectedContent={handleSidebarSelect} />

      <div className="main-content">
        {selectedContent === "home" && (
          <div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch} disabled={!searchQuery.trim()}>
                Search
              </button>
            </div>

            {showTable && <Table />}

            <p>Welcome to the Component Library Home Page.</p>
          </div>
        )}
        {selectedContent === "compRequest" && <p>Here you can make a component request.</p>}
      </div>
    </div>
  );
}

export default ComponentLibrary;
