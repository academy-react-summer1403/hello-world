import React from 'react'
import Navbar from "../../app/Layouts/MainLayout/Navbar/index"
import HeroSection from "./HeroSection/index"
import Servises from "./Servises/index"
import Footer from "../../app/Layouts/MainLayout/Footer/index"
const Landing = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Servises/>
      <Footer/>
    </div>
  )
}

export default Landing;
