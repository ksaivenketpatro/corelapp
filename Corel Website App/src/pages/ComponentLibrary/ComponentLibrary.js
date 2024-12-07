import React, { useState } from 'react';
import './ComponentLibrary.css';
import Sidebar from './Sidebar';
import Table from './Table';
import ProductForm from './ProductForm';

function ComponentLibrary() {
  const [selectedContent, setSelectedContent] = useState("home");
  const [searchQuery, setSearchQuery] = useState('');
  const [components, setComponents] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        const response = await fetch(`http://localhost:5000/api/components?search=${searchQuery}`);
        const data = await response.json();
        setComponents(data);
        setShowTable(true);
      } catch (error) {
        console.error("Error fetching components:", error);
      }
    }
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
        <div className="search-and-table">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch} disabled={!searchQuery.trim()}>
              Search
            </button>
          </div>

          {selectedContent === "home" && showTable && (
            <Table data={components} />
          )}

          {selectedContent === "compRequest" && <p>Component Request Page</p>}
          {selectedContent === "compForm" && <ProductForm />}
        </div>
      </div>
    </div>
  );
}

export default ComponentLibrary;
