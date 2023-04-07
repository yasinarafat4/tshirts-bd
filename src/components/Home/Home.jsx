import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  /*   const handleAddToCart = (tShirt) => {
  const newCart = [...cart, tShirt];
    setCart(newCart);
  };*/

  // if we can allow only one time added
  const handleAddToCart = (tShirt) => {
    const exists = cart.find((ts) => ts.id === tShirt.id);
    if (exists) {
      toast("Already Added");
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts.id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt.id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
