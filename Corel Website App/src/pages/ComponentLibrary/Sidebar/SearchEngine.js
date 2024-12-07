import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';  // Importing additional icons for clear button
import Table from './Table';
import './SearchEngine.css';  // Importing the CSS

function SearchEngine() {
  const [searchQuery, setSearchQuery] = useState('');
  const [components, setComponents] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(false);  // New state for loading

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      setLoading(true);  // Start loading when search begins
      try {
        const response = await fetch(`http://localhost:5000/api/components?search=${searchQuery}`);
        const data = await response.json();
        setComponents(data);
        setShowTable(true);
      } catch (error) {
        console.error("Error fetching components:", error);
      } finally {
        setLoading(false);  // Stop loading after fetch is complete
      }
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setComponents([]);
    setShowTable(false);
  };

  return (
    <div className="search-engine-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} disabled={!searchQuery.trim()}>
          <FaSearch size={18} /> Search
        </button>
        {searchQuery && (
          <button className="clear-btn" onClick={handleClear}>
            <FaTimes size={18} />
          </button>
        )}
      </div>

      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        showTable && <Table data={components} />
      )}
    </div>
  );
}

export default SearchEngine;
