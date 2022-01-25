import React from "react";
import { Carousel } from "react-bootstrap";
import StarWars from "../../img/Star-Wars.png";
import CoD from "../../img/CoD.png";
import mortal from "../../img/mortal.jpg";
import "./MyCarousel.css";

export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carousel_img" src={StarWars} alt="First slide" />
        <Carousel.Caption>
          <div className="Carousel__caption">
            <h3>Star Wars</h3>
            <p>Battlefront II</p>
          </div>
          <div className="Carousel__buttons">
            <button className="Carousel__btn1 ">Watch Trailer</button>
            <button className="Carousel__btn2">Explore Games</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel_img" src={CoD} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel_img" src={mortal} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
