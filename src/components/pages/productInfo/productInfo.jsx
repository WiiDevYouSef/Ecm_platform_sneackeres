import React from 'react';
import { useParams } from 'react-router-dom';
import firstImgSlider from "../../../assets/images/sliderImages/first-slider.jpg";

const product = {
  id: 1,
  title: "Nike Air Max 270",
  mainImg: firstImgSlider,
  gallery: [
    firstImgSlider,
   
  ],
  price: "$299",
  description: "Experience the perfect fusion of comfort and style with the Nike Air Max 270. Designed for all-day wear with its signature Air cushioning and sleek design.",
  sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
};


const ProductInfo = () => {
  const { id } = useParams();

  const handleAddToCart = () => {
    let count = Number(localStorage.getItem("cartCount")) || 0;
    localStorage.setItem("cartCount", count + 1);
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Product added");
  };
 
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-5xl mx-auto bg-white rounded-lg shadow-lg" style={{marginTop: "16vh"}}>
      <div className="flex flex-col gap-4 items-center">
        {/* tssawer sghar */}
        <div className="flex flex-col gap-3">
          {product.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Color option ${idx + 1}`}
              className="w-16 h-16 object-cover rounded-md border border-gray-200"
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <img
          src={product.mainImg}
          alt={product.title}
          className="w-full max-w-md h-96 object-cover rounded-lg shadow"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl text-red-600 font-semibold">{product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        <div>
          <label className="block mb-2 font-medium">Wearing Size</label>
          <select className="border border-gray-300 rounded px-3 py-2 w-32">
            {product.sizes.map(size => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>
        <button
          className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;