import React from 'react';
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter, IoLogoPinterest, IoLogoInstagram } from "react-icons/io5";
import { FaGooglePlusG } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section contact">
                    <h1 className="footer-heading">GET IN TOUCH</h1>
                    <p className="footer-text">
                        Any questions? Let us know in store at 8th floor, 379<br />
                        Hudson St, New York, NY 10018 or call us on (+1) 96 716<br />
                        6879
                    </p>
                    <div className="social-icons">
                        <FaFacebookF className="icon" />
                        <IoLogoTwitter className="icon" />
                        <IoLogoPinterest className="icon" />
                        <FaGooglePlusG className="icon" />
                        <IoLogoInstagram className="icon" />
                    </div>
                </div>

                <div className="footer-section">
                    <h1 className="footer-heading">CATEGORIES</h1>
                    <ul className="footer-links">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Dresses</li>
                        <li>Sunglasses</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h1 className="footer-heading">LINKS</h1>
                    <ul className="footer-links">
                        <li>Search</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h1 className="footer-heading">HELP</h1>
                    <ul className="footer-links">
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footer-section newsletter">
                    <h1 className="footer-heading">NEWSLETTER</h1>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="newsletter-input"
                    />
                    <button className="subscribe-button">SUBSCRIBE</button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    <span>Copyright © 2022</span> 
                    <span className="developer"> Shopify Theme Developed by MassTechnologist.</span> 
                    <span> All rights reserved.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
