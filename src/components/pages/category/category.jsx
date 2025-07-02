import React from "react";
import "../category/category.css";
import categoryImg from "../../../assets/images/sliderImages/second-slider.jpg";
import categoryImg2 from "../../../assets/images/sliderImages/third-slider.jpg";

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
            <img src={categoryImg} alt="" />
            <button className="category-btn">shop</button>
          </div>
        </div>
        {/* midle */}
        <div className="midle">
          <div className="short">
            <img src={categoryImg} alt="" />
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
            <img src={categoryImg2} alt="" />
            <button className="category-btn">shop</button>
          </div>
          <div className="short">
            <img src={categoryImg} alt="" />
            <button className="category-btn">shop</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
