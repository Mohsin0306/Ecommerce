import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="shop-info">
          <h3>Shop</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li><a href="/electronics">Electronics</a></li>
            <li><a href="/cosmetics">Cosmetics</a></li>
            <li><a href="/furniture">Furniture</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact</h3>
          <p>+92 331 326 9415</p>
          <p>mohsinashraf121519@gmail.com</p>
          <p>16/2 Headquater PMA, Abbottabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
