import React from "react";
import HeroSection from "./HeroSection/index";
import Servises from "./Servises/index";
import Categories from "./Categoris";
import Teachers from "./Teachers";
import Blogs from "@components/Landing/Blogs";
import Courses from "./Courses";
import GoTop from "./GoTop";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Landing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {  once: true });
  
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e]">
      <HeroSection />
<motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.17, 0.55, 0.55, 1],
        delay: 0.5
      }}
      style={{ margin: "20px 0", padding: "20px", borderRadius: "8px" }}
    >
      <Servises />
      <Courses />
      <Categories />
      <Teachers />
    </motion.div>
      <Blogs />
      <GoTop />
    </div>
  );
};

export default Landing;