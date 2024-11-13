// src/pages/ComponentLibrary/ProductForm.js
import React from 'react';
import './ProductForm.css';

const ProductForm = () => {
  return (
    <div className="product-form">
      <header className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">🔍</button>
        <button className="request-cart">Request Cart</button>
      </header>

      <section className="main-content">
        <div className="image-section">
          <div className="main-image">Image</div>
          <div className="image-icons">Image Icons</div>
        </div>

        <div className="product-details">
          <p>CoreEL Part Number</p>
          <p>Manufacturer</p>
          <p>Manufacturer Part Number</p>
          <p>Description</p>
          <p>Static Text</p>
        </div>

        <div className="display-results">
          <p>Display results</p>
        </div>

        <div className="inventory-status">
          <p>Inventory Status and Request</p>
        </div>

        <div className="product-documents">
          <p>Product Documents</p>
        </div>

        <div className="product-attributes">
          <p>Product Attributes</p>
        </div>

        <div className="product-remarks">
          <p>Product Remarks</p>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;
