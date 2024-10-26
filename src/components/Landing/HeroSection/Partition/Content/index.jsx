import React from "react";
import Info from "./info";
import Title from "./Title";
import Search from "./Search";

function Content() {
  return (
    <div className="Data w-[100%] h-[100%] flex justify-center flex-wrap max-xl:h-[105%]">
      <Title />
      <Search/>
      <div className="w-full"></div>
      <Info />
    </div>
  );
}

export default Content;
