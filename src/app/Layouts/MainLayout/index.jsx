import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer/index";
import ScrollToTop from "@core/utils/ScrollTop";
const MainLayout = () => {

  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
