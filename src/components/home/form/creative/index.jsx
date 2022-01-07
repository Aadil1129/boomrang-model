import React from "react";
import { Data, Data2 } from "./newData";
import CreatApi from "./creatApi";
import { Link } from "react-router-dom";

function Creative() {
  return (
    <div className="creative-full-page">
      <div className="creative-top">
        <div className="creative-top-heading">Creative People.</div>
        <p className="creative-top-para">
          See how your users experience your website in realtime or view trends
          to see any changes in performance over time.
        </p>
      </div>
      <div className="creative-images-box">
        {Data.map(item => (
          <CreatApi item={item} />
        ))}
      </div>
      <div className="creative-images-box">
        {Data2.map(item => (
          <CreatApi item={item} />
        ))}
      </div>
      <Link className="creative-button" to="style">
        READ MORE
      </Link>
    </div>
  );
}

export default Creative;
