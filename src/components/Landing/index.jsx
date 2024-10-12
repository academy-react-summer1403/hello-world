import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Categories from "./Categoris";
import Teachers from "./Teachers";
import Blogs from "@components/Landing/Blogs";
import Courses from "./Courses";
const Landing = () => {
  return (
    <div className="bg-white2">
      <HeroSection />
      <Servises />
      <Courses />
      <Categories />
      <Teachers />
      <Blogs />
    </div>
  );
};

export default Landing;
