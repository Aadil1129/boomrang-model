import React from "react";

export default function DataComponent({ item }) {
  return (
    <div className="footer-top-box">
      <i id="icons" className={item.icon}></i>
      <div className="footer-top-heading">{item.title}</div>
      <p className="card-component-para">{item.title2}</p>
    </div>
  );
}
