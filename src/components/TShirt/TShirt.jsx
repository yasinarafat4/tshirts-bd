import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart = { handleAddToCart } }) => {
  const { picture, name, price, gender } = tShirt;
  return (
    <div className="tshirt-container">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p> {gender} T-Shirt</p>
      <button onClick={() => handleAddToCart(tShirt)} className="buy-now-btn">
        Buy Now
      </button>
    </div>
  );
};

export default TShirt;
