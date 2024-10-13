import React from "react";
import Titr from "./Titr";
import Info from "./info";
import Search from "./Search";

function Data() {
  return (
    <div className="Data w-[100%] h-[100%] flex justify-center flex-wrap max-xl:h-[105%]">
      <Titr />
      <Search />
      <div className="w-full"></div>
      <Info />
    </div>
  );
}

export default Data;
