import React from "react";
import './NavHeader.css'

function NavHeader(props) {
    const {
        navList
    }= props

  return (
    <>
      <div className="main-nav">
        {navList.map((item) => {
            return (
                <div className="each-nav">
                <img src={item.image}/>
                <span>{item.caption}</span>
            </div>
            )
        })}
      </div>
    </>
  );
}
export default NavHeader;
