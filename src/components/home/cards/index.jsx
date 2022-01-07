import React from "react";
import CardsImage from "./cardsimage";
import CardsComponent from "./cardscomponent";

function Cards() {
  return (
    <div className="cards-fullPage">
      <div className="creative-top">
        <h1 className="digital-heading">Digital Design.</h1>
        <p className="digital-para">
          See how your users experience your website in realtime or view trends
          to see any changes in performance over time.
        </p>
      </div>
      <CardsImage />
      <CardsComponent />
    </div>
  );
}

export default Cards;
