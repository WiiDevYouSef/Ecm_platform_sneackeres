import React from "react";
import "../../../components/pages/blog/blog.css";
import blogFirstImg from "../../../assets/images/blogImages/third-collection.jpg";
import blogSecondImg from "../../../assets/images/blogImages/tobias.jpg";
import blogThirdImg from "../../../assets/images/blogImages/maria.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <h1>Our Blog</h1>
        <Link to={`/blog/:id`} className="blog-card">
          <img src={blogFirstImg} alt="" />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            facere.
          </h1>
          <p>
            by <b>fash-them Admin on Dec 29,2025</b>
          </p>
        </Link>
        <Link to={`/blog/:id`} className="blog-card">
          <img src={blogSecondImg} alt="" />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            facere.
          </h1>
          <p>
            by <b>fash-them Admin on Dec 29,2025</b>
          </p>
        </Link>
        <Link to={`/blog/:id`} className="blog-card">
          <img src={blogThirdImg} alt="" />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            facere.
          </h1>
          <p>
            by <b>fash-them Admin on Dec 29,2025</b>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Blog;
