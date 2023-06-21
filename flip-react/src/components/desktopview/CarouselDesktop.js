import React, { useEffect, useState } from "react";

import "./CarouselDesktop.css";
import leftAngle from "../assets/leftAngle.svg";

function CarouselDesktop(props) {
  const { carouselList } = props;

  let [index, setIndex] = useState(0);

  const callIndex = () => {
    setIndex(index === carouselList.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setTimeout(callIndex, 2000);
  });

  const handleClickRight = () => {
    setIndex(index - 1);
    callIndex();
    clearInterval();
  };

  const handleClickLeft = () => {
    setIndex(index + 1);
    callIndex();
    clearInterval();
  };

  const clearInterval = () => {
    clearTimeout();
    setTimeout(callIndex, 3000);
  };
  return (
    <>
      <div className="carousel-desk">
        <div className="arrowleft">
          <img src={leftAngle} onClick={handleClickLeft} />
        </div>
        {carouselList.map((item, idx) => (
          <div
            className="desk-crsl"
            style={{
              transform: `translateX(${-100 * index}%)`,
              transition: "transform ease-out 0.45s",
            }}
            key={item}
          >
            <img src={item} />
          </div>
        ))}
        <div className="arrowright">
          <img src={leftAngle} onClick={handleClickRight} />
        </div>
      </div>
      <div className="hdfc">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/8d8f584b6e0ddb5f.jpg?q=50" />
      </div>
    </>
  );
}

export default CarouselDesktop;
