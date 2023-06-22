import React, { useEffect, useState } from "react";

import "./Carousel.css";

function Carousel(props) {
  let [index, setIndex] = useState(0);

  const {carouselList} = props;

  const callIndex = () => {
    setIndex(index === carouselList.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setTimeout(callIndex, 2000);
  });
  return (
    <>
      <div className="carousel-list">
        {carouselList.map((item) => {
          return (
            <div
              className="carousel-img"
              style={{
                transform: `translateX(${-100 * index}%)`,
                transition: "transform ease-out 0.45s",
              }}
              key={item}
            >
              <img src={item.image} alt="images" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Carousel;
