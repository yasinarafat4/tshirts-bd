import React, { createContext, useState } from "react";
import "./Grandpa.css";

import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
export const RingContext = createContext("Golden Ring");
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);
  return (
    <div className="container">
      <h3>Grandpa</h3>
      <button className="btn" onClick={() => setMoney(money + 100)}>
        Send 100tk
      </button>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
