import React from "react";
import "../../../components/pages/blog/blog.css";
import blogFirstImg from "../../../assets/images/blogImages/third-collection.jpg";
import blogSecondImg from "../../../assets/images/blogImages/tobias.jpg";
import blogThirdImg from "../../../assets/images/blogImages/maria.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    img: blogFirstImg,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facere.",
    author: "fash-them Admin",
    date: "Dec 29,2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum."
  },
  {
    id: 2,
    img: blogSecondImg,
    title: "Another blog post title goes here.",
    author: "fash-them Admin",
    date: "Dec 29,2025",
    description: "This is a sample description for the second blog post. Lorem ipsum dolor sit amet."
  },
  {
    id: 3,
    img: blogThirdImg,
    title: "Yet another blog post title.",
    author: "fash-them Admin",
    date: "Dec 29,2025",
    description: "Third blog post description. Lorem ipsum dolor sit amet, consectetur."
  }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      {blogPosts.map(post => (
        <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
          <img src={post.img} alt="" />
          <h1>{post.title}</h1>
          <p>
            by <b>{post.author} on {post.date}</b>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
