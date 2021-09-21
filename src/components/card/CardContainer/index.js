import React, { Children, Component } from "react";
import CardBig from "../cardBig";
import CardSmall from "../cardSmall";
import { v4 as uuid } from "uuid";

import { useDrop } from "react-dnd";

import "../style.css";

const Card = ({ children, handleDrop, handleHover }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => handleDrop(item, monitor),
    hover: (item, monitor) => handleHover(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div class="card-container" ref={dropRef}>
      {children}
    </div>
  );
};

export default Card;
