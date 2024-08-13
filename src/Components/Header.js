import React, { useState } from 'react';
import '../Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(prevState => !prevState);
  };

  return (
    <>
      <header className="header">
        <div className="logo">E-shop</div>
        <div className="hamburger" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className={`nav ${navOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className={`overlay ${navOpen ? 'show' : ''}`} onClick={toggleNav}></div>
      </header>
    </>
  );
};

export default Header;
