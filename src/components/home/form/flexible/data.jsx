import React from "react";

export default function FormApi({ item }) {
  return (
    <div className="flexible-box2">
      <div className="flexible-box2-icon-box">
        <i id="icons" className={item.icon}></i>
      </div>
      <div className="flexible-box2-writen">
        <div className="flexible-box2-heading">{item.title}</div>
        <p className="flexible-box2-para">{item.description}</p>
      </div>
    </div>
  );
}
