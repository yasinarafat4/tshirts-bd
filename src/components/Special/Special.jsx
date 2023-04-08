import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
  const receiveRing = useContext(RingContext);
  return (
    <div>
      <h3>Special</h3>
      <p>
        {ring}
        {receiveRing}
      </p>
    </div>
  );
};

export default Special;
