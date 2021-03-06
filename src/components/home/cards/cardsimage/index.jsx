import React from "react";

import Api from "./cardApi";
import { DataApi, DataApi2 } from "./data";

function CardsImage() {
  return (
    <div className="digital-cards-container">
      <div className="digital-cards-first">
        {DataApi.map((item, index) => (
          <Api key={index} item={item} />
        ))}
      </div>
      <div className="digital-cards-second">
        {DataApi2.map((item, index) => (
          <Api key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardsImage;
