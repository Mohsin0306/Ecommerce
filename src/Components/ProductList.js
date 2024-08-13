// src/Components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ProductList.css'; // Import custom CSS for horizontal scrolling

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Best Sales</h2>
      <div className="horizontal-scroll">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
