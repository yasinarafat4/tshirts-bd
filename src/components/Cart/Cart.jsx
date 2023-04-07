import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Order Summery: {cart.length}</h2>
      <div>
        {cart.map((tshirt) => (
          <p key={tshirt.id}>
            {tshirt.name}{" "}
            <button onClick={() => handleRemoveFromCart(tshirt.id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
