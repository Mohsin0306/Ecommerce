// src/Components/ProductCard.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ProductCard.css'; // Import custom CSS for card styling
import ProductPopup from './ProductPopup'; // Import the popup component

const ProductCard = ({ image, title, price, description }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="product-card card mx-2" onClick={handleCardClick}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title truncate">{title}</h5>
          <p className="card-text">${price}</p>
        </div>
      </div>

      {showPopup && (
        <ProductPopup
          image={image}
          title={title}
          price={price}
          description={description}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default ProductCard;
