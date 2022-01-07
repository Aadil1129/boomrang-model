import React from "react";
import data from "./data";
import Card from "./card";

function AboutComponent() {
  return (
    <div className="about-component-box-container">
      {data.map(item => (
        <Card item={item} />
      ))}
    </div>
  );
}

export default AboutComponent;
