import React from 'react';
import '../../../components/pages/blog/blog.css'
import blogFirstImg from '../../../assets/images/blogImages/third-collection.jpg'
import blogSecondImg from '../../../assets/images/blogImages/kobraCollectionImg.jpg'
import blogThirdImg from '../../../assets/images/blogImages/tobias.jpg'

const Blog = () => {
    return (
        <>
        <div className="blog-container">
            <div className="blog-card">
                <img src={blogFirstImg} alt="" />
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facere.</h1>
                <p>by <b>fash-them Admin on Dec 29,2025</b></p>
            </div>
            <div className="blog-card">
                <img src={blogSecondImg} alt="" />
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facere.</h1>
                <p>by <b>fash-them Admin on Dec 29,2025</b></p>
            </div>
            <div className="blog-card">
                <img src={blogFirstImg} alt="" />
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facere.</h1>
                <p>by <b>fash-them Admin on Dec 29,2025</b></p>
            </div>
        </div>
            
        </>
    );
};

export default Blog;