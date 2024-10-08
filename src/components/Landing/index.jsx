import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Categories from "./Categoris";
import Teachers from "./Teachers";
import Blogs from "@components/Landing/Blogs";
const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Servises />
      <Categories />
      <Teachers/>
      <Blogs/>
    </div>
  );
};

export default Landing;
