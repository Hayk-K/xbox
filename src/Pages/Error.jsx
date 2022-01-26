import React from "react";
import "./pages.css";
import logo404 from "../img/404.gif";

const Error = () => {
  return (
    <div className="error">
      <img className="error__img" src={logo404} alt="404" />{" "}
    </div>
  );
};

export default Error;
