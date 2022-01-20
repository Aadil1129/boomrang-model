import React from "react";
import Creative from "../creative";
import ipad from "../../../../images/ipad.png";
import FormApi from "./data";
import Data from "./dataApi";

function Flexible() {
  return (
    <div className="form-page">
      <div className="flexible-full-page">
        <div className="flexible-page">
          <div className="flexible-box1">
            <img className="ipad-image" src={ipad} alt="ipad" />
          </div>
          <div className="flexible-box2-page">
            <div className="flexible-box1">
              <h2 className="flexible-box1-heading">Flexible & Lightweight.</h2>
              <p className="flexible-box1-para">
                Map where your photos were taken and discover local points of
                interest. Map where your photos. Map where your photos were
                taken and discover.
              </p>
            </div>
            {Data.map((item, index) => (
              <FormApi key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Creative />
    </div>
  );
}

export default Flexible;
