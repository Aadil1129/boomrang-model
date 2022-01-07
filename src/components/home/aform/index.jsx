import React from "react";
import Back from "images/inline_image_preview.jpeg";
import avatar from "images/logoavtar.png";

function MyForm() {
  const inputFunction = event => {
    event.preventDefault();
    console.log(event.value);
  };

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
                  <label for="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    placeholder=".....gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name="phone"
                    id="passwordRepeat"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-button">
                  <input
                    onChange={inputFunction}
                    id="btn--form2"
                    className="btn btn--form"
                    type="submit"
                    value="Register"
                  />
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
