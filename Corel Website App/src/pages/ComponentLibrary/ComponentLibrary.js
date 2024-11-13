// src/pages/ComponentLibrary/ComponentLibrary.js
import React, { useState } from 'react';
import './ComponentLibrary.css';
import Sidebar from './Sidebar';
import Table from './Table';
import ProductForm from './ProductForm';

function ComponentLibrary() {
  const [selectedContent, setSelectedContent] = useState("home");
  const [searchQuery, setSearchQuery] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleSearch = () => {
    setShowTable(true);
  };

  const handleSidebarSelect = (content) => {
    setSelectedContent(content);
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
        {selectedContent === "compForm" && <ProductForm />} {/* Renders the ProductForm */}
      </div>
    </div>
  );
}

export default ComponentLibrary;
