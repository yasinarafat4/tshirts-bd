import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext, RingContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money] = useContext(MoneyContext);
  const ring = useContext(RingContext);
  return (
    <div>
      <h3>Uncle</h3>
      <section>
        <Cousin>
          <p>GrandPa's Money: {money}</p>
          Nabil <br />
          <small>{ring}</small>
        </Cousin>
      </section>
    </div>
  );
};

export default Uncle;
