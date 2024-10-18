import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Categories from "./Categoris";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Blog from "./Blog";
const Landing = () => {
  return (
    <div className="bg-white2">
      <HeroSection />
      <Servises />
      <Courses />
      <Categories />
      <Teachers />
      <Blog/>
    </div>
  );
};

export default Landing;
