import React from "react";
import { Data, Data2 } from "./newdata";
import DataComponent from "./data";

function CardsComponent() {
  return (
    <div className="cards-component-page">
      <div className="card-component-first" data-aos="fade-up">
        {Data.map((item, index) => (
          <DataComponent key={index} item={item} />
        ))}
      </div>
      <div className="card-component-second" data-aos="fade-up">
        {Data2.map((item, index) => (
          <DataComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardsComponent;
