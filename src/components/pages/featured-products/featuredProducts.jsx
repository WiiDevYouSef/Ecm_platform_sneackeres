import React from "react";
import "./featured-products.css";
import firstImgSlider from "../../../assets/images/sliderImages/first-slider.jpg";
import secondImgSlider from "../../../assets/images/sliderImages/second-slider.jpg";
import thirdImgSlider from "../../../assets/images/sliderImages/third-slider.jpg";
import fourthImgSlider from "../../../assets/images/sliderImages/fourth-slider.jpg";
import fifthImgSlider from "../../../assets/images/sliderImages/fifth-slider.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const products = [
  { id: 1, img: fifthImgSlider, title: "Nike Air Max 270", price: "$299" },
  { id: 2, img: secondImgSlider, title: "Adidas Ultraboost 22", price: "$499" },
  { id: 3, img: thirdImgSlider, title: "New Balance 550", price: "$199" },
  { id: 4, img: fourthImgSlider, title: "Jordan 1 Retro High", price: "$799" },
  { id: 5, img: firstImgSlider, title: "Yeezy Boost 350 V2", price: "$149" },
];

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleAddToCart = () => {
    let count = Number(localStorage.getItem("cartCount")) || 0;
    localStorage.setItem("cartCount", count + 1);
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Product added");
  };

  return (
    <div className="featured-products-container">
      <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-wide uppercase">FEATURED PRODUCTS</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-slide">
            <div className="product-image-container">
              <img src={product.img} />
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <h2 className="product-title">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
