// ProductInfo.js
import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-info-container">
      <h2>Product Details</h2>
      <div className="product-info-grid">
        {Object.entries(product).map(([key, value]) => (
          <div key={key} className="info-item">
            <label>{key}</label>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;