import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Categories from "./Categoris";
const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Servises />
      <Categories />
    </div>
  );
};

export default Landing;
