import React from "react";

function First() {
  return (
    <div>
      <div className="first-fullpage" data-aos="fade-up">
        <h1 className="firstpage-heading">
          Your customers will love you one minute from now.
        </h1>
        <p className="firstpage-para">
          See how your users experience your website in realtime or view
          <br />
          <span className="firstpage-para-span">
            {" "}
            trends to see any changes in performance over time.
          </span>
        </p>
        <div className="firstpage-images-box">
          <div className="firstpage-first"></div>
        </div>
        <div className="firstpage-button">
          <button className="firstpage-button1">GET STARTED</button>
          <button className="firstpage-button2">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
export default First;
