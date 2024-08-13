import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Adjust the URL to match your chosen API format
    const apiUrl = `https://dummyjson.com/products/category/${categoryId}`;

    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data.products || []);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>Products for Category: {categoryId}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
