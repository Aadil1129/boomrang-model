import React from "react";
import FirstImage from "images/3.jpeg";
import Second from "images/6.jpeg";
import Third from "images/7.jpeg";
import Forth from "images/4.jpeg";
import Fifth from "images/8.jpeg";
import Sixth from "images/jacketman.jpeg";

function Portfolio() {
  return (
    <div className="footer-portfolio">
      <div className="footer-portfolio-heading">PORTFOLIO</div>
      <div id="footer-image-box" className="offcanvas-images-box">
        <img className="offcanvas-first" src={FirstImage} alt="first" />
        <img className="offcanvas-first" src={Second} alt="first" />
        <img className="offcanvas-first" src={Third} alt="first" />
        <img className="offcanvas-first" src={Forth} alt="first" />
        <img className="offcanvas-first" src={Fifth} alt="first" />
        <img className="offcanvas-first" src={Sixth} alt="first" />
      </div>
    </div>
  );
}

export default Portfolio;
