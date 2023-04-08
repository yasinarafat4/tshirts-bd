import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";

const Father = ({ ring }) => {
  return (
    <div>
      <h3>Father</h3>
      <section className="flex">
        <Myself ring={ring}></Myself>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
