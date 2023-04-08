import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional Rendering
  let message;
  if (cart.length === 0) {
    message = <p style={{ color: "red" }}>Please add some products</p>;
  } else {
    message = <p style={{ color: "green" }}>Thanks for choosing</p>;
  }

  return (
    <div>
      <h2>Order Summery: {cart.length}</h2>
      {/*
      >> use render directly by ternary operator

      {cart.length > 2 ? "Good" : "Fokinni Naki"}

    >> Logical and(&&): if the condition is true

      {cart.length === 2 && <p>Nice</p>}
     
    >> Logical Or(||): if the condition is false

      {cart.length === 2 || <p>Excellent</p>}
*/}

      {message}
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
