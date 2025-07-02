import React from "react";
import "../category/category.css";
// import categoryImg from "../../../assets/images/sliderImages/second-slider.jpg";
import categoryImg2 from "../../../assets/images/sliderImages/third-slider.jpg";
import categoryImg4 from "../../../assets/images/categoryImages/piyush.jpg";
import categoryImg5 from "../../../assets/images/categoryImages/blue.jpg";
import categoryImg6 from "../../../assets/images/categoryImages/gray.jpg";

const Category = () => {
  return (
    <>
      <div className="category-container">
        {/* left */}
        <div className="left">
          <div className="tall">
            <img src={categoryImg2} alt="" />
            <button className="category-btn">shop</button>
          </div>

          <div className="short">
            <img src={categoryImg5} alt="" />
            <button className="category-btn">shop</button>
          </div>
        </div>
        {/* midle */}
        <div className="midle">
          <div className="short">
            <img src={categoryImg6} alt="" />
            <button className="category-btn">shop</button>
          </div>
          <div className="tall">
            <img src={categoryImg2} alt="" />
            <button className="category-btn">shop</button>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="tall">
            <img src={categoryImg6} alt="" />
            <button className="category-btn">shop</button>
          </div>
          <div className="short">
            <img src={categoryImg5} alt="" />
            <button className="category-btn">shop</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
