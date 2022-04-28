import React from "react";

export default function Api({ item }) {
  return (
    <div className="digital-cards-box">
      <div className="digital-cards-image-box" data-aos="fade-up">
        <div>
          <img className="digital-cards-image" src={item.image} alt="index" />
        </div>
        <div className="digital-cards-write">
          <div className="digital-cards-heading">{item.title}</div>
          <div className="digital-cards-para">{item.title2}</div>
        </div>
      </div>
    </div>
  );
}
