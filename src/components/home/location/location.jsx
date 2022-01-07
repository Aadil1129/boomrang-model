import React from "react";

export default function LocationComponent({ item }) {
  return (
    <div className="card-component-box">
      <i id="icons" className={item.icon}></i>
      <img className="digital-cards-image" src={item.image} alt="index" />
      <div className="location-heading">{item.title}</div>
      <p className="card-component-para">{item.title2}</p>
      <a className="about-component-link">{item.button}</a>
    </div>
  );
}
