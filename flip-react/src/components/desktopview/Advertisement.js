import React from "react";
import "./AcMobiles.css";

function Advertisement(props) {
  const { adsList } = props;

  return (
    <>
      <div className="acMobile-list-main">
        {adsList.map((item) => (
          <div className="acMobile-list">
            <img src={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Advertisement;
