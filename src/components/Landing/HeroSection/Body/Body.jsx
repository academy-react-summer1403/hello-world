import React from "react";
import "./Body.css";
import Data from "./Data/Data";

function Body() {
  return (
    <>
      <div className="Body relative top-0 w-[95%] h-[80%] flex justify-center max-short:mt-[-50px]">
        <div className="CodingL max-xl:bg-[length:115px] max-lg:bg-none w-[22%] h-[100%] flex justify-center "></div>
        <Data />
        <div className="CodingR max-xl:bg-[length:115px] max-lg:bg-none w-[22%] h-[100%] flex justify-center"></div>
      </div>
    </>
  );
}

export default Body;
