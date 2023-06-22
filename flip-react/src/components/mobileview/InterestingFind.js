import React from "react";
import "./InterestingFind.css";

function InterestingFind(props) {
  const { findsList } = props;

  return (
    <>
      <div className="list-head">
        <div className="heading-btn">
          <p>Add To Your Whishlist</p>
          <a href="">View all</a>
        </div>
        <div className="interesting-list">
          {findsList.map((item, idx) => {
            return (
              <div className="list-items">
                <img src={item.image} alt="image" />
                <p className="name">{item.caption}</p>
                <p className="price">{item.priceBrand}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InterestingFind;
