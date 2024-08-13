import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/JustForYou.css'; // Import custom styles

const JustForYou = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container">
        <h1>Just For You</h1>
      <div className="row">
        {products.slice(0, 30).map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={product.images[0]} className="card-img-top img-fit" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <div className='d-flex'>
                <a href="#" className="btn " style={{width:"100px", backgroundColor:"pink"}}>Buy</a>
                <a href="#" className="btn ms-2" style={{width:"150px", backgroundColor:"grey"}}>Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
