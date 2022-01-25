import React from "react";
import "./Main7.css";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";

const Main7 = () => {
  return (
    <div className="main7">
      <div className="main7__container">
        <div className="main7__item">
          Life Advice Looking
          <br /> Through A Window
        </div>
        <div>
          <img src={img5} alt="img" />
        </div>
        <div>
          <img src={img6} alt="img" />
        </div>
        <div className="main7__item">The Best Answers</div>
      </div>
    </div>
  );
};

export default Main7;
