import React from "react";

export default function Card({ item }) {
  return (
    <div className="about-component-box">
      <i id="icons" className={item.icon}></i>
      <div className="about-component-heading">{item.title}</div>
      <div className="about-component-para">{item.description}</div>
      <a className="about-component-link">Read more</a>
    </div>
  );
}
