import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Myself = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h3>Myself</h3>
      <p>{ring}</p>
    </div>
  );
};

export default Myself;
