import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Footer from "../../app/Layouts/MainLayout/Footer/index";
const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Servises />
      <Footer />
    </div>
  );
};

export default Landing;
