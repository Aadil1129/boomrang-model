import React from "react";
import Back from "images/inline_image_preview.jpeg";
import avatar from "images/logoavtar.png";
import Button from "@mui/material/Button";

function MyForm() {
  return (
    <div className="form-full-page">
      <div className="form-background">
        <div className="from-box-page">
          <div className="from-box">
            <div className="box-upper">
              <div className="box-upper-green"></div>
              <div className="box-upper-yellow"></div>
              <div className="box-upper-pink"></div>
              <div className="box-upper-blue"></div>
            </div>
            <div>
              <div className="box-middle">
                <img
                  className="box-middle-image"
                  src={Back}
                  alt="logoBackground"
                />
              </div>
            </div>

            <div className="container__child signup__form">
              <div className="avatar-logo">
                <img className="box-middle-logo" src={avatar} alt="logo" />
              </div>
              <form action="#" className="submit-form-box">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    placeholder=".....gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name="phone"
                    id="passwordRepeat"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="form-button">
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ width: "40%" }}
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
