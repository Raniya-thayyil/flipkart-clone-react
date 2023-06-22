import React from "react";

import "./Whishlist.css";

function Whishlist(props) {
  const { alerts } = props;
  return (
    <>
      <div className="wish-list-main">
        <div className="whish-head">
          <p>Price Drop</p>
        </div>
        <div className="wish-list">
          {alerts.map((item, idx) => {
            return (
              <div className="wishlist-items">
                <img src={item} alt="image"/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Whishlist;
