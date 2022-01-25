import React from "react";
import "./Main1.css";
import shape from "../../img/Shape.png";
import Card1 from "../Card1/Card1";

const Main1 = ({ cards }) => {
  return (
    <div className="main1">
      <div className="main1__img">
        <img src={shape} alt="" />
      </div>
      <div className="main1__title">
        <h2>The best value </h2>
      </div> 
      <div className="main1__title">
        <h3>in games and entertainment</h3>
      </div>
      <div className="main1__card">
        {cards.map((card) => {
          return <Card1 card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default Main1;
