import React from "react";

import flip from "../assets/flip.png";
import lens from "../assets/lens.svg";
import cart from "../assets/cart.svg";

import "./DesktopHeader.css";

function DesktopHeader() {
  return (
    <>
      <div className="header-main1">
        <div className="flip">
          <div className="icon">
            <img src={flip} alt="flipkart icon"/>
          </div>
          <div className="search-icon">
            <form className="form-main">
              <input placeholder="Search for Products, Brands and More" />
              <img src={lens} className="lens" />
            </form>
          </div>
          <div className="login-btn">
            <a href="">Login</a>
          </div>
          <div className="seller-text">
            <span>Become a Seller</span>
          </div>
          <div className="more-text seller-text">
            <span>More</span>
          </div>
          <div className="cart seller-text">
            <img src={cart} alt="cart icon" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopHeader;
