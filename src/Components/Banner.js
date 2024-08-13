import React, { useEffect, useState } from 'react';
import '../Styles/Banner.css'; // Optional if you need additional custom styling

const Banner = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')

            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div className="banner container-fluid py-4">
            <div className="row align-items-center">
                <div className="col-md-5 d-flex flex-column align-items-center align-items-md-start mb-3 mb-md-0">
                    <h1 className="display-4 text-center text-md-start mb-3" style={{ fontWeight: '400' }}>
                        Get the best product at your home
                    </h1>
                    <div className="input-group mb-3" style={{ border: 'none', borderRadius: '25px' }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search your favorite product"
                            style={{ boxShadow: 'none', border: '0.5px solid grey' }}
                        />
                        <button className="btn btn-outline-secondary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center">
                    <div className="image-slider">
                        {products.map((product, index) => (
                            <img
                                key={product.id}
                                src={product.images[0]}
                                alt={product.title}
                                className={`img-fluid rounded ${index === currentIndex ? 'active' : ''}`}
                            />
                        ))}
                        {products.length > 0 && (
                            <p className="product-title">
                                {products[currentIndex]?.title}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
