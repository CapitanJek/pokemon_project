import React from "react";
import "./Card.css";

const Card = (props) => {
  const { children, name } = props;

  return (
    <a href={name}>
      <div className="cardWrapper">
        <p className="cardTitle">{children}</p>
          {/*<img src={} alt=""/>  */}
      </div>
    </a>
  );
};

export default Card;
