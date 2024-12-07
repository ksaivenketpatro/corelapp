import React, { useState } from 'react';
import Table from './Table';

function SearchEngine() {
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

  return (
    <div>
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

      {showTable && <Table data={components} />}
    </div>
  );
}

export default SearchEngine;
