import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/layouts/nav/nav';
import Home from './components/pages/home/home';
import Category from './components/pages/category/category';
import FeaturedProducts from './components/pages/featured-products/featuredProducts';
import ProductInfo from './components/pages/productInfo/productInfo';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Category />
            <FeaturedProducts />
          </>
        } />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </div>
  );
};

export default App;