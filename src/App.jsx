import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/layouts/nav/nav';
import Home from './components/pages/home/home';
import Category from './components/pages/category/category';
import FeaturedProducts from './components/pages/featured-products/featuredProducts';
import ProductInfo from './components/pages/productInfo/productInfo';
import Footer from './components/layouts/footer/footer';
import Collection from './components/pages/collection/collection';

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
            <Collection/>
          </>
        } />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>  
      <Footer/>
    </div>
  );
};

export default App;