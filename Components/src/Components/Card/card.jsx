import React, { useState } from "react";
import "./card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, img, price, id } = food; 

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemove(food);
    }
  };

  return (
    <div className="card">
      <span className={count !== 0 ? "card__badge" : "card__badge__hidden"}>
        {count}
      </span>
      <div className="image__container">
        <img src={img} alt={title} />
      </div>
      <h4 className="card__title">
        {title}  <span className="card__price">$ {price}</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
