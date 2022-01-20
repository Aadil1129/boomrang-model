import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export default function CreatApi({ item }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="pizzaimages">
      <div className="vegbox">
        <div className="creative-icons">
          <div>
            <h2 className="vegpizza">{item.title}</h2>
            <p className="italianp">{item.description}</p>
          </div>
          <Checkbox
            {...label}
            icon={<FavoriteBorder style={{ fontSize: "2rem" }} />}
            checkedIcon={<Favorite style={{ fontSize: "2rem" }} />}
            style={{
              color: "white",
              right: "0",
              width: "15%",
            }}
          />
        </div>
      </div>
      <img className="pizzaimage3" src={item.image} alt="pizza3" />
    </div>
  );
}
