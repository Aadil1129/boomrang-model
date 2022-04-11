import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
function Index() {
  return (
    <nav id="navbar" className="navbar navbar-light  fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          Boomerang
        </Link>
        <div className="element-display">
          <Link className="navbar-element" to="/">
            Home
          </Link>
          <Link className="navbar-element" to="/about">
            About
          </Link>
          <Link className="navbar-element" to="/designe">
            Card
          </Link>
          <Link className="navbar-element" to="/style">
            Creative
          </Link>
          <Link className="navbar-element" to="/slider">
            Nature
          </Link>
          <Link className="navbar-element" to="/vacation">
            Vacation
          </Link>
        </div>
        <Sidebar />
      </div>
    </nav>
  );
}

export default Index;
