// src/Components/ProductPopup.js
import React from 'react';
import '../Styles/ProductPopup.css'; // Import custom CSS for popup styling

const ProductPopup = ({ image, title, price, description, onClose }) => {
  return (
    <div className="popup-overlay show">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <img src={image} alt={title} className="popup-img" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-price">${price}</p>
        <p className="popup-description">{description}</p> {/* Display description */}
        <div className="popup-buttons">
          <button className="btn-custom">Add to Cart</button>
          <button className="btn-custom">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
