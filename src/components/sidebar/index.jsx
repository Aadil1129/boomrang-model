import React from "react";
import { Link } from "react-router-dom";
import FirstImage from "images/3.jpeg";
import Second from "images/6.jpeg";
import Third from "images/7.jpeg";
import Forth from "images/4.jpeg";
import Fifth from "images/8.jpeg";
import Sixth from "images/jacketman.jpeg";
import Seventh from "images/capman.jpeg";
import Eight from "images/5.jpeg";
import Nine from "images/9.jpeg";
import Logo from "images/logo-light-2.png";

function Sidebar() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i
          id="offcanvas--burger-icon"
          className="fa fa-bars"
          style={{ color: "white" }}
        ></i>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ backgroundColor: "#222222" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Boomerang
          </h5>
          <button
            id="offcanvas-icon-new"
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-slidebar-page">
          <div className="offcanvas-inside">
            <img className="offcanvas-logo" src={Logo} alt="logo-light" />
            <p className="offcanvas-para">
              See how users experience your website in realtime to see changes.
            </p>
          </div>

          <div className="offcanvas-images-box">
            <img className="offcanvas-first" src={FirstImage} alt="first" />
            <img className="offcanvas-first" src={Second} alt="first" />
            <img className="offcanvas-first" src={Third} alt="first" />
            <img className="offcanvas-first" src={Forth} alt="first" />
            <img className="offcanvas-first" src={Fifth} alt="first" />
            <img className="offcanvas-first" src={Sixth} alt="first" />
            <img className="offcanvas-first" src={Seventh} alt="first" />
            <img className="offcanvas-first" src={Eight} alt="first" />
            <img className="offcanvas-first" src={Nine} alt="first" />
          </div>
          <div className="offcanvas-icons-box">
            <i id="offcanvas-icon" className="fas fa-user-graduate"></i>
            <i id="offcanvas-icon" className="fas fa-user-graduate"></i>
            <i id="offcanvas-icon" className="fas fa-user-graduate"></i>
            <i id="offcanvas-icon" className="fas fa-user-graduate"></i>
          </div>
        </div>
        <div className="offcanvas-responsive-navbar">
          <div className="offcanvas-responsive">
            <Link className="navbar-element-responsive" to="/">
              Home
            </Link>
            <Link className="navbar-element-responsive" to="/about">
              About
            </Link>
            <Link className="navbar-element-responsive" to="/designe">
              Cards
            </Link>
            <Link className="navbar-element-responsive" to="/style">
              Creative
            </Link>
            <Link className="navbar-element-responsive" to="/slider">
              Nature
            </Link>
            <Link className="navbar-element-responsive" to="/vacation">
              Vacation
            </Link>
            <div className="offcanvas-images-box">
              <img className="offcanvas-first" src={FirstImage} alt="first" />
              <img className="offcanvas-first" src={Second} alt="first" />
              <img className="offcanvas-first" src={Third} alt="first" />
              <img className="offcanvas-first" src={Forth} alt="first" />
              <img className="offcanvas-first" src={Fifth} alt="first" />
              <img className="offcanvas-first" src={Sixth} alt="first" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
