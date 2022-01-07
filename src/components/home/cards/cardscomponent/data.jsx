import React from "react";

export default function DataComponent({ item }) {
  return (
    <div className="card-component-box">
      <i id="icons" className={item.icon}></i>
      <div className="card-component-heading">{item.title}</div>
      <p className="card-component-para">{item.title2}</p>
    </div>
  );
}
