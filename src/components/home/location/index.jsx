import React from "react";
import Data from "./locationdata";
import LocationComponent from "./location";
import Map from "./map";

function Location() {
  return (
    <div className="location-fullpage">
      <div className="creative-top">
        <h1 className="digital-heading">Latest articles.</h1>
        <p id="location-para" className="digital-para">
          See how your users experience your website in realtime or view trends
          to see any changes in performance over time.
        </p>
      </div>
      <div className="card-component-first">
        {Data.map((item, index) => (
          <LocationComponent key={index} item={item} />
        ))}
      </div>
      <Map />
    </div>
  );
}

export default Location;
