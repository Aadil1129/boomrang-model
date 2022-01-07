import React from "react";
import AboutUs from "./aboutus";
import Portfolio from "./portfolio";
import Recent from "./recent";
import Twitter from "./twitter";

function FooterDown() {
  return (
    <div className="Footer-down-fullpage">
      <div className="Footer-down-page">
        <AboutUs />
        <Recent />
        <Twitter />
        <Portfolio />
      </div>
      <hr />
      <div className="footer-down-bottom">
        © 2018 Boomerang, All Rights Reserved. Design with love by{" "}
        <span id="footer-twitter-short">2theme</span>
      </div>
    </div>
  );
}

export default FooterDown;
