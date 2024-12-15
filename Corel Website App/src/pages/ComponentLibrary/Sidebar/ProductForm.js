// src/pages/ComponentLibrary/Sidebar/ProductForm.js - Update to show construction message
import React from 'react';
import { FaTools } from 'react-icons/fa'; // Import tools icon
import './ProductForm.css';

const ProductForm = () => {
  return (
    <div className="under-construction">
      <FaTools size={50} className="construction-icon" />
      <h2>Order Page Under Construction</h2>
      <p>We're working hard to bring you an amazing ordering experience!</p>
    </div>
  );
};

export default ProductForm;