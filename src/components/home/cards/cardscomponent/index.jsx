import React from "react";
import { Data, Data2 } from "./newdata";
import DataComponent from "./data";

function CardsComponent() {
  return (
    <div className="cards-component-page">
      <div className="card-component-first">
        {Data.map(item => (
          <DataComponent item={item} />
        ))}
      </div>
      <div className="card-component-second">
        {Data2.map(item => (
          <DataComponent item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardsComponent;