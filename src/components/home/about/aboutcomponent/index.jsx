import React from "react";
import data from "./data";
import Card from "./card";

function AboutComponent() {
  return (
    <>
      <div className="about-component-box-container" data-aos="fade-up">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default AboutComponent;
