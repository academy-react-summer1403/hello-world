import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Categories from "./Categoris";
import Teachers from "./Teachers";
import Blogs from "@components/Landing/Blogs";
import Courses from "./Courses";
import GoTop from "./GoTop";

const Landing = () => {
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e]">
      <HeroSection />
      <Servises />
      <Courses />
      <Categories />
      <Teachers />
      <Blogs />
      <GoTop />
    </div>
  );
};

export default Landing;
