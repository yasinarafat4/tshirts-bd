import React from "react";
import Special from "../Special/Special";

const Cousin = ({ children }) => {
  return (
    <div>
      <h3>Cousin</h3>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
};

export default Cousin;
