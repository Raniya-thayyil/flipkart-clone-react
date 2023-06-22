import React, { useRef } from "react";

import leftAngle from "../assets/leftAngle.svg";

import "./FeaturedBrand.css";

function FeaturedBrand(props) {
  const { featuresList } = props;

  const imgCard = useRef();
  const rightArrow = useRef();
  const arrowLeft = useRef();

  const handleClickRight = () => {
    imgCard.current.style.transform = `translateX(${-35}%)`;
    rightArrow.current.style.display = "none";
    arrowLeft.current.style.display = "flex";
    imgCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  const handleClickLeft = () => {
    imgCard.current.style.transform = `translateX(${2}%)`;
    arrowLeft.current.style.display = "none";
    rightArrow.current.style.display = "flex";
    imgCard.current.style.transition = "transform ease-in-out 0.45s";
  };
  return (
    <>
      <div className="features-main">
        <h2>Featured Brand</h2>

        <div className="angle-left-feat" ref={arrowLeft}>
          <img src={leftAngle} onClick={handleClickLeft} alt="left angle"/>
        </div>
        <div className="features-list" ref={imgCard}>
          {featuresList.map((item) => (
            <div className="feat-imglist">
              <img src={item} alt="images"/>
            </div>
          ))}
        </div>
        <div className="deal-angle-feat" ref={rightArrow}>        
          <img src={leftAngle} onClick={handleClickRight} alt="right angle"/>
        </div>
      </div>
    </>
  );
}

export default FeaturedBrand;
