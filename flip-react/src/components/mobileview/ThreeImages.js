import React from "react";
import { useEffect, useState } from "react";

import './ThreeImages.css'

function ThreeImages(props) {
  const {
    threeImagesList
  } = props

  return (
    <>
      <div className="img-list">
        {threeImagesList.map((item, idx) => {
          return <img src={item.image} />;
        })}
      </div>
    </>
  );
}

export default ThreeImages;
