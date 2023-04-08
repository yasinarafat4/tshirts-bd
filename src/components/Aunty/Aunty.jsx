import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h3>Aunty</h3>
      <section>
        <Cousin>
          <p>GrandPa's Money: {money}</p>
          Nabila
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
