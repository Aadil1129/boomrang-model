import React from "react";
import Layout from "layout";
import Footer from "components/footer";
import Cards from "components/home/cards";
import Flexible from "components/home/form/flexible/main";
import About from "components/home/about/aboutinfo";
import Location from "components/home/location";

function Home() {
  return (
    <Layout>
      <About />
      <hr className="about-line" />
      <Cards />
      <Flexible />
      <hr className="about-line" />
      <Location />
      <Footer />
    </Layout>
  );
}

export default Home;
