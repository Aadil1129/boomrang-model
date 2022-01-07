import React from "react";
import Layout from "layout";
import Footer from "components/footer";
import Cards from "components/home/cards";
import Carousel from "components/home/carousel";
import Flexible from "components/home/form/flexible/main";
import About from "components/home/about/aboutinfo";
import Location from "components/home/location";
import MyForm from "components/home/aform";

function Home() {
  return (
    <Layout>
      <About />
      <hr className="about-line" />
      <Cards />
      <Flexible />
      <hr className="about-line" />
      <Carousel />
      <hr className="about-line" />
      <Location />
      <MyForm />
      <Footer />
    </Layout>
  );
}

export default Home;
