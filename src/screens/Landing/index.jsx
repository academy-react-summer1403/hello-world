import React from 'react'
import Landing from "../../components/Landing/index"
import { motion, useScroll } from "framer-motion";

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  return (
  <>
  <motion.div
    className="z-[100] fixed top-0 left-0 right-0 h-[5px] bg-blue1 origin-left"
    style={{ scaleX: scrollYProgress }}
  />
  <Landing/> 
</>
)};

export default LandingPage;
