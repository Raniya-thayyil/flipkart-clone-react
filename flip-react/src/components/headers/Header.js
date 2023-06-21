import React from "react";

import ham from '../assets/ham.svg'
import flip from '../assets/flip.png'
import plus from '../assets/plus.svg'
import cart from '../assets/cart.svg'
import search from '../assets/search.webp'

import './Header.css'

function Header() {
  return (
    <>
      <div className="header-main">
        <div className="header-top">
            <div className="ham-logo">
                <img src={ham}/>
                <img src={flip}/>
            </div>
            <div className="icons-login">
            <div className="icons">
                <img src={plus}/>
                <img src={cart}/>
            </div>
            <div className="login">
                <a href=""><span>Login</span></a>
            </div>
            </div>
        </div>
        <div className="header-bottom">
            <form className="form1">
                <img src={search}/>
                <input placeholder="Search for Products, Brands and More"/>
            </form>
        </div>        
      </div>
    </>
  );
}

export default Header;
