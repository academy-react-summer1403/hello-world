import React from "react";
import Titr from "./Titr/Titr";
import Info from "./info/info";
import Search from "./Search/Search";

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
