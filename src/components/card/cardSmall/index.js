import React, { Component } from "react";
import "./style.css";

import { useDrag } from "react-dnd";

const CardSmall = ({ id }) => {
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

  //   console.log("dragging", isRowDragging);
  return (
    <div ref={dragRef} id={id} className="main-card-small" style={{ opacity }}>
      Hello smart card {id}
    </div>
  );
};

export default CardSmall;
