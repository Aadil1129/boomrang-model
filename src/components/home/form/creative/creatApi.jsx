import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            style={{ color: "white", right: "0" }}
          />
        </div>
      </div>
      <img className="pizzaimage3" src={item.image} alt="pizza3" />
    </div>
  );
}
