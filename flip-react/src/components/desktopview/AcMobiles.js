import React from "react";
import "./AcMobiles.css";

function AcMobiles(props) {
  const { acMobilesLists } = props;

  return (
    <>
      <div className="acMobile-list-main">
        {acMobilesLists.map((item) => (
          <div className="acMobile-list">
            <img src={item} alt="ac mobile list"/>
          </div>
        ))}
      </div>
    </>
  );
}

export default AcMobiles;
