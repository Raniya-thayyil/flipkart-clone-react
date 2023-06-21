import React, { useRef} from "react";

import "./TopDeals.css";

import leftAngle from "../assets/leftAngle.svg"

function TopDeals(props) {
    const {
        dealsList
    } = props
    
    const imgCard = useRef();
    const rightArrow = useRef();
    const arrowLeft = useRef();  

    const handleClickRight = () => {        
        imgCard.current.style.transform = `translateX(${-35}%)`;
        rightArrow.current.style.display = "none";
        arrowLeft.current.style.display = "flex";
        imgCard.current.style.transition = "transform ease-in-out 0.45s";
    }

    const handleClickLeft = () => {
        imgCard.current.style.transform = `translateX(${2}%)`;
        arrowLeft.current.style.display = "none";
        rightArrow.current.style.display = "flex";
        imgCard.current.style.transition = "transform ease-in-out 0.45s";
      };
  return (
    <>
      <div className="top-deals-main">
        <div className="top-deal-textlink">
          <h2>Top Deals on fashion</h2>
          <div className="viewall">
            <a href="">view all</a>
          </div>
        </div>
        <div className="angle-left" ref={arrowLeft}>            
            <img src={leftAngle} onClick={handleClickLeft}/>
        </div>
        <div className="topoffers-list" ref={imgCard}>
            {dealsList.map((item) => (
                <div className="offers-main" >
                    <img src={item.image}/>
                    <div className="texts-offer">
                    <span className="cap">{item.caption}</span><br/>                   
                    <span className="offername">{item.offerLevel}</span><br/>
                    <span className="pricedetail">{item.desc}</span>
                    </div>
                </div>

            ))}
        </div>
        <div className="deal-angle" ref={rightArrow}>           
            <img src={leftAngle} onClick={handleClickRight}/>
        </div>       
      </div>
    </>
  );
}

export default TopDeals;
