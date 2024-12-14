// SearchEngine.js
import React, { useState } from 'react';
import Table from './Table';
import ProductInfo from './ProductInfo';
import './SearchEngine.css';

function SearchEngine() {
  const [searchQuery, setSearchQuery] = useState('');
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setSelectedProduct(null);
    try {
      const response = await fetch(`http://localhost:5000/api/components?search=${searchQuery}`);
      const data = await response.json();
      
      // If only one result, show ProductInfo directly
      if (data.length === 1) {
        setSelectedProduct(data[0]);
        setComponents([]); // Clear components as we're showing ProductInfo
      } else {
        setComponents(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const handleClear = () => {
    setSearchQuery('');
    setComponents([]);
    setSelectedProduct(null);
  };

  return (
    <div className="search-engine-container">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search components..."
        />
        <button 
          onClick={handleSearch} 
          disabled={!searchQuery || loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
        {searchQuery && (
          <button className="clear-btn" onClick={handleClear}>
            ×
          </button>
        )}
      </div>

      {loading && (
        <div className="loading-indicator">
          Loading...
        </div>
      )}

      {selectedProduct ? (
        <ProductInfo product={selectedProduct} />
      ) : (
        components.length > 0 && (
          <div className="search-results">
            <Table 
              data={components} 
              onRowClick={(product) => setSelectedProduct(product)}
            />
          </div>
        )
      )}
    </div>
  );
}

export default SearchEngine;