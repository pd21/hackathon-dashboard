import React, { Component } from "react";
import CardBig from "./cardBig";
import CardSmall from "./cardSmall";
import { v4 as uuid } from "uuid";

import CardContainer from "./CardContainer";

import "./style.css";

import * as data from "../../json/cardData.json";

const { card } = data && data.default;

const Card = () => {
  // we can have it as usestate or context

  const [dragOverId, setDragOverId] = React.useState(null);
  const [cards, setCards] = React.useState(card);

  // finding the drop position
  const getRow = (element) => {
    if (element && element.tagName === "DIV" && element.id) {
      return element.id;
    }
    return null;
  };

  // calculating th eelement position when dragging
  const handleHover = (item, monitor) => {
    const { x, y } = monitor.getClientOffset();
    const dragOverElement = document.elementFromPoint(x, y);
    const dragOverId = getRow(dragOverElement);
    setDragOverId(dragOverId);
  };

  // after dropping the element add the element to its respective position
  const handleDrop = (item, monitor) => {
    const filteredCard = cards.filter((c) => c.id == item.id);
    const remainingCards = cards.filter((c) => c.id !== item.id);
    // calculate position index
    const index = cards.findIndex((c) => c.id == dragOverId);
    remainingCards.splice(index, 0, filteredCard[0]);
    console.log("rem", remainingCards);
    setCards(remainingCards);
  };

  return (
    <CardContainer handleDrop={handleDrop} handleHover={handleHover}>
      {cards.map((item) => {
        return item && item.containerSize === "Big" ? (
          <CardBig id={item.id} />
        ) : (
          <CardSmall id={item.id} />
        );
      })}
    </CardContainer>
  );
};

export default Card;
