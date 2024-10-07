import React from 'react'
import Navbar from "../../app/Layouts/MainLayout/Navbar/Navbar"
import HeroSection from "./HeroSection/index"
import Categories from "./Categories/index"

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Categories/>
    </div>
  )
}

export default Landing;
