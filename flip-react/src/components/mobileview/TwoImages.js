import React from "react";
import { useEffect, useState } from "react";

import './TwoImages.css'

function TwoImages(props) {
  const {
    twoImagesList
  } = props

  return (
    <>
      <div className="images-list">
        {twoImagesList.map((item, idx) => {
          return <img src={item} />;
        })}
      </div>
    </>
  );
}

export default TwoImages;
