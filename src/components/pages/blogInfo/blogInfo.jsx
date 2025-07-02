import React from 'react';
import { useParams } from 'react-router-dom';
import blogFirstImg from "../../../assets/images/blogImages/third-collection.jpg";
import blogSecondImg from "../../../assets/images/blogImages/tobias.jpg";
import blogThirdImg from "../../../assets/images/blogImages/maria.jpg";

const blogPosts = [
  {
    id: 1,
    img: blogFirstImg,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facere.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum."
  },
  {
    id: 2,
    img: blogSecondImg,
    title: "Another blog post title goes here.",
    description: "This is a sample description for the second blog post. Lorem ipsum dolor sit amet."
  },
  {
    id: 3,
    img: blogThirdImg,
    title: "Yet another blog post title.",
    description: "Third blog post description. Lorem ipsum dolor sit amet, consectetur."
  }
];

const BlogInfo = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) return <div>Blog post not found.</div>;

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 24 }}>{post.title}</h1>
      <img src={post.img} alt="" style={{ width: "100%", borderRadius: 12, marginBottom: 24 }} />
      <p style={{ fontSize: "1.1rem", color: "#444" }}>{post.description}</p>
    </div>
  );
};

export default BlogInfo;