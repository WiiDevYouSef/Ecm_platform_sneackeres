import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/layouts/nav/nav';
import Home from './components/pages/home/home';
import Category from './components/pages/category/category';
import FeaturedProducts from './components/pages/featured-products/featuredProducts';
import ProductInfo from './components/pages/productInfo/productInfo';
import Footer from './components/layouts/footer/footer';
import Collection from './components/pages/collection/collection';
import Blog from './components/pages/blog/blog';
import BlogInfo from './components/pages/blogInfo/blogInfo';

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
            <Blog/>

          </>
        } />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/blog/:id" element={<BlogInfo />} />
      </Routes>  
      <Footer/>
    </div>
  );
};

export default App;