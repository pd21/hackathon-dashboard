import React, { Component } from "react";
import "./style.css";

import { useDrag } from "react-dnd";

const CardBig = ({ id }) => {
  const [{ isRowDragging, opacity }, dragRef] = useDrag({
    type: "CARD",
    item: {
      id: id,
    },
    collect: (monitor) => ({
      isRowDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div ref={dragRef} id={id} className="main-card" style={{ opacity }}>
      hELLO {id}
    </div>
  );
};

export default CardBig;
