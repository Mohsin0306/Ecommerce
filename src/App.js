import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import ProductList from './Components/ProductList'; // Import the ProductList component
import Footer from './Components/Footer';
import CategoryProducts from './Components/CategoryProducts';
import './App.css';
import JustForYou from './Components/JustForYou';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Categories />
              <ProductList />
              <JustForYou/> {/* Add ProductList here or in another appropriate place */}
            </>
          } />
          <Route path="/category/:categoryId" element={<CategoryProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
