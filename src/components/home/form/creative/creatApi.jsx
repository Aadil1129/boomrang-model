import React from "react";

export default function CreatApi({ item }) {
  return (
    <div className="pizzaimages">
      <div className="vegbox">
        <div className="creative-icons">
          <div>
            <h2 className="vegpizza">{item.title}</h2>
            <p className="italianp">{item.description}</p>
          </div>
          <i id="creative-heart" className={item.icon}></i>
        </div>
      </div>
      <img className="pizzaimage3" src={item.image} alt="pizza3" />
    </div>
  );
}
