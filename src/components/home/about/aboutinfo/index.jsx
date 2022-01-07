import React from "react";
import mockup from "images/mega-mockup.png";
import AboutComponent from "../aboutcomponent";
function About() {
  return (
    <>
      <div className="winter">
        <div className="creative-top">
          <div className="winter-heading">Your Site, Your Way.</div>
          <p className="winter-para">
            See how your users experience your website in realtime or view
            trends to see any changes in performance over time.
          </p>
        </div>
        <img className="winter-image" src={mockup} alt="mockup" />
      </div>
      <AboutComponent />
    </>
  );
}

export default About;
