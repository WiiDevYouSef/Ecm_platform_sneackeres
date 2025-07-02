import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home/home.css";
import firstImgSlider from "../../../assets/images/sliderImages/first-slider.jpg";
// import secondImgSlider from "../../../assets/images/second-slider.jpg";
// import thirdImgSlider from "../../../assets/images/third-slider.jpg";
// import fourthImgSlider from "../../../assets/images/fourth-slider.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-text-img-container">
          <h3>
            <img src={firstImgSlider} alt="" />
            <div className="slider-text">
              <h1>
                next-level <span style={{ color: "red" }}>comfort</span>
              </h1>
              <button className="slider-btn">Browse now</button>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <img src={firstImgSlider} alt="" />
            <div className="slider-text">
              <h1>
                it's <span style={{ color: "red" }}>more</span> than a sneacker
              </h1>

              <button className="slider-btn">Discover More</button>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <img src={firstImgSlider} alt="" />
            <div className="slider-text">
              <h1>
                step into <span style={{ color: "red" }}>style</span>
              </h1>
              <button className="slider-btn">Shop collection</button>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <img src={firstImgSlider} alt="" />
            <div className="slider-text">
              <h1>
                <span style={{ color: "red" }}>Built</span> to move
              </h1>
              <button className="slider-btn">See more</button>
            </div>
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
