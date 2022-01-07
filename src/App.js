import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import NewCards from "pages/cards";
import NewCarousel from "pages/carousel";
import NewFlexible from "pages/flexible";
import NewAbout from "pages/about";
import NewLocation from "pages/location";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<NewAbout />} />
          <Route exact path="/designe" element={<NewCards />} />
          <Route exact path="/style" element={<NewFlexible />} />
          <Route exact path="/slider" element={<NewCarousel />} />
          <Route exact path="/vacation" element={<NewLocation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
