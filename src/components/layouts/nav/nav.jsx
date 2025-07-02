import React, { useState, useEffect } from "react";
import "../nav/nav.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBars } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(
    Number(localStorage.getItem("cartCount")) || 0
  );

  useEffect(() => {
    const handleCartUpdate = () => {
      setCartCount(Number(localStorage.getItem("cartCount")) || 0);
    };
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  return (
    <div className="nav-fixed-wrapper">
      <div className="nav-first-part">
        <div className="media">
          <FaFacebook fontSize={25} className="media-icon"/>
          <FaTwitter fontSize={25} className="media-icon"/>
          <FaLinkedin fontSize={25} className="media-icon"/>
          <FaInstagram fontSize={25} className="media-icon"/>
        </div>
        <p>Free shipping for standard order over $100</p>
        <p>fashe@example.com</p>
        <select name="" id="">
          <option value="">USD</option>
          <option value="">MAD</option>
          <option value="">EUR</option>
        </select>
      </div>
      <div className="nav-second-part">
        <h1 className="logo">kicks <span>.</span></h1>
        <div className={`nav ${menuOpen ? "open" : ""}`}>
          <p>Home</p>
          <p>Shop</p>
          <p>Sale</p>
          <p>Features</p>
          <p>Blog</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="user-info" style={{ position: "relative" }}>
          <CiUser size={25}/>
          <div style={{ position: "relative" }}>
            <SlBasket size={25}/>
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: -8,
                right: -8,
                background: "red",
                color: "white",
                borderRadius: "50%",
                fontSize: "12px",
                width: "18px",
                height: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {cartCount}
              </span>
            )}
          </div>
        </div>
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={25} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
