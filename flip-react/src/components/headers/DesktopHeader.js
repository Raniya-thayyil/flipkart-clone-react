import React from "react";

import flip from "../assets/flip.png";
import lens from "../assets/lens.svg";
import cart from "../assets/cart.svg"

import './DesktopHeader.css'

function DesktopHeader() {
  return (
    <>
      <div className="header-main1">
        <div className="flip">
          <div className="icon">
          <img src={flip} />
          </div>          
          <div className="search-icon">
            <form className="fr">              
            {/* <div className="form-content"> */}
              <input placeholder="Search for Products, Brands and More" />
              <img src={lens} className="lens"/>
            {/* </div> */}
            </form>
          </div>
          <div className="login-btn">
            <a  href="">Login</a>
          </div>
          <div className="seller-text">
            <span>Become a Seller</span>
          </div>
          <div className="more-text seller-text">
            <span>More</span>
          </div>
          <div className="cart seller-text">
            <img src={cart}/>
            <span>Cart</span>

          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopHeader;
