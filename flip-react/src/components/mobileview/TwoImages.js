import React from "react";

import "./TwoImages.css";

function TwoImages(props) {
  const { twoImagesList } = props;

  return (
    <>
      <div className="images-list">
        {twoImagesList.map((item, idx) => {
          return <img src={item} alt="image"/>;
        })}
      </div>
    </>
  );
}

export default TwoImages;
