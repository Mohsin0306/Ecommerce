import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaBeer, FaCoffee, FaHome, FaMusic, FaPhone, FaPlane, FaShoppingCart, FaTachometerAlt, FaTabletAlt, FaUser, FaEnvelope,
         FaStar, FaCog, FaLock, FaMapMarkerAlt, FaHeart, FaCamera, FaCreditCard, FaGift } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Categories.css';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: FaApple, name: 'Fruits', id: 'fruits' },
    { icon: FaBeer, name: 'Beverages', id: 'beverages' },
    { icon: FaCoffee, name: 'Coffee', id: 'coffee' },
    { icon: FaHome, name: 'Home', id: 'home' },
    { icon: FaMusic, name: 'Music', id: 'music' },
    { icon: FaPhone, name: 'Phones', id: 'phones' },
    { icon: FaPlane, name: 'Travel', id: 'travel' },
    { icon: FaShoppingCart, name: 'Shopping', id: 'shopping' },
    { icon: FaTachometerAlt, name: 'Dashboard', id: 'dashboard' },
    { icon: FaTabletAlt, name: 'Tablets', id: 'tablets' },
    { icon: FaUser, name: 'Users', id: 'users' },
    { icon: FaEnvelope, name: 'Messages', id: 'messages' },
    { icon: FaStar, name: 'Favorites', id: 'favorites' },
    { icon: FaCog, name: 'Settings', id: 'settings' },
    { icon: FaLock, name: 'Security', id: 'security' },
    { icon: FaMapMarkerAlt, name: 'Location', id: 'location' },
    { icon: FaHeart, name: 'Health', id: 'health' },
    { icon: FaCamera, name: 'Photography', id: 'photography' },
    { icon: FaCreditCard, name: 'Payments', id: 'payments' },
    { icon: FaGift, name: 'Gifts', id: 'gifts' }
  ];

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="container categories-container">
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-1 text-center mb-3">
            <div onClick={() => handleCategoryClick(category.id)} className="category-icon">
              <category.icon />
              <p className="icon-label">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
