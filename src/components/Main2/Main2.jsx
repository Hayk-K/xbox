import React from "react";
import Card1 from "../Card1/Card1";
import "./Main2.css";

const Main2 = ({ cards2 }) => {
  return (
    <div className="main2">
      <div className="main2__dark">
        <div className="main2__title">
          <h1> Exclusive games on XBOX</h1>
        </div>
        {cards2.map((card) => {
          return <Card1 className="card1" card={card} key={card.id} />;
        })}
        <div className="main2__btn">
          <button className="main2__blackBtn">XBOX Store</button>
        </div>
      </div>
    </div>
  );
};

export default Main2;
