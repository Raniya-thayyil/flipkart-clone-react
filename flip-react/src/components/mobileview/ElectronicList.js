import React from "react";
import './ElectronicList.css'

function ElectronicList(props) {
  const {
    electronicsList
  } = props

  return (
    <>
      <div className="electronic-list">        
        {electronicsList.map((item, idx) => {
          return <img src={item} />;
        })}
      </div>
    </>
  );
}

export default ElectronicList;
