import React from "react";

import './FirstNav.css'

function FirstNav(props) {
  const {
    navList
  } = props
  
  return (
    <>
      <div className="nav-list">
        <ul>
    {console.log(navList)}
        {navList.map((item, idx) => (
              <li key={idx}>
                <img src={item.image} alt="image"/>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default FirstNav;
