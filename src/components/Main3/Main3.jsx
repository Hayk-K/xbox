import React from "react";
import "./Main3.css";
import GreenBtn from "../greenBtn/GreenBtn";

const Main3 = () => {
  return (
    <div className="main3">
      <div className="main3__dark">
        <div className="main3__container">
          <h2> Xbox Design Lab</h2>
          <p>
            Make yours one in a billion with new colors,
            <br /> metallic finishes and rubberized grips.
          </p>
          <button className="main2__blackBtn">Design Yours</button>
          <GreenBtn>Explore Consoles & Accessories</GreenBtn>
        </div>
      </div>
    </div>
  );
};

export default Main3;
