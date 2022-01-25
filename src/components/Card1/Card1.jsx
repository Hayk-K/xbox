import React from "react";
import { Card } from "react-bootstrap";
import GreenBtn from "../greenBtn/GreenBtn";
import "./Card1.css";

const Card1 = ({ card }) => {
  return (
    <div>
      <Card className="card1__wrapper">
        <Card.Img variant="top" className="card1__img" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.body}</Card.Text>
          <GreenBtn>{card.btn}</GreenBtn> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card1;
