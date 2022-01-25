import React from "react";
import "./Footer.css";
import twitter from "../../img/Twitter.png";
import instagram from "../../img/Instagram.png";
import faasebook from "../../img/Faacebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <h5>XBOX</h5>
          <p>Support</p>
          <p>Contact us</p>
          <p>Privacy & cookies </p>
          <p>Terms of use </p>
        </div>
        <div> 
          <h5>Developers</h5>
          <p>Games</p>
          <p>Windows 10</p>
          <p>Creators Program </p>
          <p>Designed for XBOX</p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <img src={faasebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      <hr />
      <div className="footer__item">
        <p>English (United States)</p>
        <p> © Microsoft 2017</p>
      </div>
    </footer>
  );
};

export default Footer;
