import React from 'react';
import '../../../components/pages/blog/blog.css'
import blogFirstImg from '../../../assets/images/blogImages/third-collection.jpg'

const Blog = () => {
    return (
        <>
        <div className="blog-container">
            <div className="">
                <img src={blogFirstImg} alt="" />
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facere.</h1>
                <p>by <b>fash-them Admin on Dec 29,2025</b></p>
            </div>
        </div>
            
        </>
    );
};

export default Blog;