import React, { useEffect, useState } from "react";

import './Carousel.css'

function Sponsored(props) {
    let [index, setIndex] = useState(0);
    const {
        sponsoredList
    } = props

  const callIndex = () => {
    setIndex(index === sponsoredList.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setTimeout(callIndex, 2000);
  });
  return (
    <>
      <div className="carousel-list">
        {sponsoredList.map((item) => {
            return (
                <div
                  className="carousel-img"
                  style={{
                    transform: `translateX(${-100 * index}%)`,
                    transition: "transform ease-out 0.45s",
                  }}
                  key={item}
                >
                  <img src={item} />
                </div>
            )
              })}
            
      </div>
    </>
  );
}

export default Sponsored;
