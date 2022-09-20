import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image from "../imgs/img-9.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these epic containers</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="adventure"
              path="/online/coaching"
            />
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="adventure"
              path="/online/coaching"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="adventure"
              path="/online/coaching"
            />
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="adventure"
              path="/online/coaching"
            />
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="adventure"
              path="/online/coaching"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
