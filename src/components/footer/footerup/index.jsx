import React from "react";
import footerImage from "images/module-18.jpeg";
import Data from "./number";
import DataComponent from "./newdata";

function FooterTop() {
  return (
    <div className="footer-fullpage" data-aos="fade-up">
      <div className="footer-top-data">
        <div className="footer-data">
          {Data.map((item, index) => (
            <DataComponent key={index} item={item} />
          ))}
        </div>
      </div>
      <img className="footerimage" src={footerImage} alt="footerimage" />
    </div>
  );
}
export default FooterTop;
