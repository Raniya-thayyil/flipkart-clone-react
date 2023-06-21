import React, { useRef } from "react";

import "./TopOffers.css";
import leftAngle from "../assets/leftAngle.svg"

function TopOffers(props) {
    const {
        offersList
    } = props     
    const imageCard = useRef();
    const rightAngle = useRef();
    const leftArrow = useRef();    
   

    const handleClickRight = () => {
        
        imageCard.current.style.transform = `translateX(${-35}%)`;
        // rightAngle.current.style.display = "none";
        leftArrow.current.style.display = "flex";
        imageCard.current.style.transition = "transform ease-in-out 0.45s";
      };

      const handleClickLeft = () => {
        imageCard.current.style.transform = `translateX(${2}%)`;
        leftArrow.current.style.display = "none";
        rightAngle.current.style.display = "flex";
        imageCard.current.style.transition = "transform ease-in-out 0.45s";
      };
  return (
    <>
      <div className="top-offers-main">
        <div className="top-offer-textlink">
          <h2>Top Offers</h2>
          <div className="viewall">
            <a href="">view all</a>
          </div>
        </div>
        <div className="leftArrow" ref={leftArrow} >
            <img src={leftAngle} onClick={handleClickLeft}/>
        </div>
        <div className="topoffers-list" ref={imageCard}>
            {offersList.map((item) => (
                <div className="offers-main" >
                    <img src={item.image}/>
                    <div className="texts-offer">
                    <span className="cap">{item.caption}</span><br/>
                    <span className="offername">{item.offer}</span><br/>
                    <span className="pricedetail">{item.price}</span>
                    </div>
                </div>

            ))}
        </div>
        <div className="angle"  ref={rightAngle}>           
            <img src={leftAngle} onClick={handleClickRight}/>
        </div>
        <div className="offer-ad">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/b3ba711e77e8eb5f.jpeg?q=70"/>
        </div>
      </div>
    </>
  );
}

export default TopOffers;
